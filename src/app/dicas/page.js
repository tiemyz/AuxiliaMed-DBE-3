"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import NavBar from "@/components/NavBar"; 
import Footer from "@/components/Footer"; 

export default function Dicas() {
  return (
    <>
      <NavBar active={"dicas"}/>
      <main>
        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Tenha hábitos alimentares saudáveis</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Para manter a saúde do idoso em dia, é essencial ter uma nutrição adequada. Procure consumir alimentos variados, ricos em nutrientes. Uma dieta rica em alimentos de alto valor nutricional, além de promover mais bem-estar, fortalece o sistema imunológico e deixa diversas doenças bem longe da sua vida. Dessa forma, consuma verduras, legumes, frutas, cereais integrais, carnes brancas, peixes, sementes oleaginosas e beba muita água. Na terceira idade, é ainda mais importante se manter longe das comidas ultraprocessadas, que são ricas em sódio, açúcar, gorduras, conservantes e corantes. Evite massas brancas, frituras, doces em geral, bebidas açucaradas, embutidos, carne vermelha em excesso e guloseimas.</p>
                </div>
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 39.png" alt="Imagem" className="w-50 h-auto" />
                </div>
            </div>
        </div>

        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 38.png" alt="Imagem" className="w-50 h-auto" />
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Pratique atividades físicas regularmente</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Manter-se ativo é essencial para quem quer viver bem depois dos 60 anos, livre de dores musculares e com autonomia no dia a dia. Pessoas sedentárias raramente terão qualidade de vida na terceira idade. A prática de atividades físicas deve fazer parte da rotina de quem busca envelhecer com saúde. Caminhada, natação, pilates, ciclismo, dança de salão, dentre outras atividades, são recomendadas na terceira idade. O ideal é se exercitar de 3 a 5 vezes por semana durante 40 minutos. Entretanto, é importante ter o aval de um médico e o acompanhamento de um educador físico para evitar lesões.</p>
                </div>
            </div>
        </div>

        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Mantenha em dia as consultas e exames de rotina</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Investir na prevenção é fundamental para se ter mais saúde na terceira idade. O avanço dos anos facilita o surgimento de algumas doenças, por isso, é essencial manter as consultas em dia com o médico geriatra, para o diagnóstico precoce e o tratamento adequado dos eventuais agravos à saúde. Diversas doenças são assintomáticas, por isso, é necessário fazer um check-up periódico. Alguns exames de rotina são obrigatórios para quem já passou dos 40 anos e devem ser feitos anualmente. Exames de sangue, próstata, mamografia, ultrassom abdominal, eletrocardiograma, teste de esforço, dentre outros, devem ser realizados por todas as pessoas que desejam envelhecer com saúde.</p>
                </div>
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 42.png" alt="Imagem" className="w-50 h-auto" />
                </div>
            </div>
        </div>

        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 40.png" alt="Imagem" className="w-50 h-auto" />
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Tenha uma vida social ativa</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Quando o assunto é envelhecer com saúde, a vida social também conta e muito. Pessoas com idade avançada têm a tendência de diminuir o círculo social e, muitas vezes, acabam se isolando. Mas isso não faz bem à saúde mental do idoso, pelo contrário. Por isso, procure sempre ter uma vida social ativa, faça amizades, procure interagir com as pessoas do seu bairro, frequente locais que promovam eventos, passeie, viaje de vez em quando. O importante é investir nos relacionamentos saudáveis e duradouros.</p>
                </div>
            </div>
        </div>

        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Mantenha a mente estimulada, ativa e produtiva</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Para se chegar com toda lucidez e evitar diversas doenças neurológicas, é preciso cuidar também da saúde mental. Para manter a mente ativa, você pode ler, praticar algum instrumento, aprender uma nova língua, desenvolver algum trabalho, participar de ações sociais ou praticar jogos que estimulem a mente, como o xadrez. Quando cuidamos da nossa saúde mental, as chances de sermos acometidos por doenças neurodegenerativas como Alzheimer, Parkinson ou Esclerose Múltipla, por exemplo, se reduzem drasticamente. O nosso cérebro também precisa se exercitar, por isso, devemos sempre estimular a nossa memória através de atividades diárias que têm essa função.</p>
                </div>
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 41.png" alt="Imagem" className="w-50 h-auto" />
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}