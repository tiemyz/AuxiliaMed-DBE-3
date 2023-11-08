"use client"
import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const apiKey = "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";

  const addMessage = (text, sender) => {
    const newMessage = { text, sender };
    setMessages([...messages, newMessage]);
  };

  const handleInputMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    addMessage(inputMessage, "user");
    setInputMessage("");

    let retryCount = 0;  // Adicionei a declaração de retryCount aqui

    try {
      const makeApiCall = async () => {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: inputMessage }]
          })
        });

        if (response.status === 429) {
          // Aguarde um tempo antes de tentar novamente (exponencialmente crescente)
          await new Promise(resolve => setTimeout(resolve, 2 ** retryCount * 1000)); // Aguarde 2, 4, 8, 16, ... segundos
          retryCount += 1;
          return makeApiCall(); // Tente novamente
        }

        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }

        const data = await response.json();

        if (!data.choices || data.choices.length === 0) {
          throw new Error("Resposta da API não possui a estrutura esperada");
        }

        const reply = data.choices[0].message.content;

        addMessage(reply, "bot");
      };

      // Chame a função makeApiCall inicialmente
      await makeApiCall();
    } catch (error) {
      console.error("Erro ao enviar mensagem para o ChatGPT:", error);
    }
  };

  useEffect(() => {
    addMessage("Olá! Como posso ajudar?", "bot");
  }, []);

  return (
    <div className="chat-container h-[600px] bg-white p-4 rounded">
      <main className="chat bg-gray-100 p-4 rounded" style={{ color: "black" }}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender} p-2 mb-2 rounded`}>
            {message.text}
          </div>
        ))}
      </main>
      <div className="input-container mt-4">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={inputMessage}
          onChange={handleInputMessageChange}
          className="border rounded py-2 px-3 w-4/5 text-black"
        />
        <button
          onClick={handleSendMessage}
          className=" bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
