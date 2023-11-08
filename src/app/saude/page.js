"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import NavBar from "@/components/NavBar"; 
import Footer from "@/components/Footer"; 

export default function Saude() {
  const [activeSection, setActiveSection] = useState('saude'); 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setActiveSection('saude');
  }, []);

  return (
    <>
      <NavBar active={"saude"}/>
      <main>
        <div className="bg-red-100 flex justify-start space-x-4 p-10">
          <button
            onClick={() => {
              setActiveSection('saude');
              scrollToSection('saude');
            }}
            className={`${
              activeSection === 'saude' ? 'bg-red-500 text-white text-2xl font-bold' : 'bg-white text-gray-700 font-bold text-2xl border-2 border-red-300 rounded-lg'
            } px-8 py-4 rounded-lg transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}
          >
            SAÚDE E BEM-ESTAR
          </button>
         
        </div>

        <div id="saude" className="bg-red-100 p-12">
            <div className="flex items-center mb-16 ml-12">
              <h2 className="text-6xl font-bold text-black">+ Saúde e Bem-Estar</h2>
              <p className="italic text-2xl text-red-500 font-bold pl-12 mt-2">"Saúde e Bem-Estar na Terceira Idade: Um Guia para o Envelhecimento Saudável"</p>
            </div>

            <div className="flex justify-evenly items-center mt-4">
                <div className="flex-shrink-0 w-96 h-4/5 p-4 bg-white border-2 border-red-300 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
                  <img src="/img/idoso-correndo.png" alt="Imagem" className="h-auto"/>
                  <h3 className="text-3xl font-semibold mt-8 text-black">Dicas de Saúde</h3>
                  <p className="text-gray-600 text-2xl mt-5">O bem-estar na terceira idade não se limita apenas à ausência de doenças, mas também envolve aspectos emocionais, sociais e psicológicos.</p>

                  <div className="mt-8 mb-6 bg-red-500 text-white  px-8 py-4 rounded-md hover:bg-red-600">
                      <Link href="/dicas">
                        <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
                      </Link>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 h-4/5 p-4 bg-white border-2 border-red-300 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
                  <img src="/img/prato-legumes.png" alt="Imagem" className="h-auto" />
                  <h3 className="text-3xl font-semibold mt-8 text-black">Dietas Equilibradas</h3>
                  <p className="text-gray-600 text-2xl mt-5">Uma dieta equilibrada fornece os nutrientes necessários para a saúde ótima. Isso inclui a ingestão de vitaminas, minerais e proteínas adequadas para a idade.</p>

                  <div className="mt-8 mb-6 bg-red-500 text-white  px-8 py-4 rounded-md hover:bg-red-600">
                      <Link href="/dietas">
                        <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
                      </Link>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 h-4/5 p-4 bg-white border-2 border-red-300 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
                  <img src="/img/idosos-exercicio.png" alt="Imagem" className="h-auto" />
                  <h3 className="text-3xl font-semibold mt-8 text-black">Exercícios</h3>
                  <p className="text-gray-600 text-2xl mt-5">A prática regular de atividades físicas, adequadas às limitações individuais, ajuda a manter a saúde cardiovascular, a força muscular e a flexibilidade.</p>

                  <div className="mt-8 mb-6 bg-red-500 text-white  px-8 py-4 rounded-md hover:bg-red-600">
                      <Link href="/exercicios">
                        <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
                      </Link>
                  </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}