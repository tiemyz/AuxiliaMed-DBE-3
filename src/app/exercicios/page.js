"use client"
import React from 'react';
import NavBar from "@/components/NavBar"; 
import Footer from "@/components/Footer"; 

export default function Exercicios() {
  return (
    <>
      <NavBar active={'exercicios'} />

      <main>
        {/*PRIMEIRA*/}
        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                {/* Lado Esquerdo (Imagem) */}

                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 46.png" alt="Imagem" className="w-50 h-auto" />
                </div>
                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">A importância das atividades físicas para idosos</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">As atividades físicas para idosos apresentam benefícios que auxiliam no bem-estar geral, melhorando a saúde física, mental, e preservando a autonomia em atividades do cotidiano. As atividades e exercícios auxiliam no controle de mudanças ocorridas devido ao processo de envelhecimento. Por isso, é muito importante incentivar os idosos para a realização de atividades físicas, melhorando sua saúde, evitando o desenvolvimento de doenças, e retardando limitações funcionais.</p>

                </div>
            </div>
        </div>


        {/*SEGUNDA*/}
        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center text-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 p-8">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Natação</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl text-justify">A natação é uma das atividades físicas para idosos que, quando feita regularmente, apresenta benefícios relacionados à frequência cardíaca, função respiratória e aumento da mobilidade. Essa atividade permite que os tais benefícios estejam presentes sem causar prejuízos para as articulações, evitando lesões de qualquer tipo, visto que o exercício dentro na água é de pouco risco.</p>

                </div>


                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-8">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Hidroginástica</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl text-justify">Assim como a natação, a hidroginástica contribui para o fortalecimento muscular, sem causar prejuízos. Além disso, ajuda a desenvolver o sistema cardiorrespiratório e melhorar a coordenação motora. Sendo uma das atividades físicas para idosos de baixo risco, a hidroginástica é ideal para pessoas que sofrem com artrose e osteoporose.</p>

                </div>
            </div>
        </div>

        {/*TERCEIRA*/}
        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 48.png" alt="Imagem" className="w-50 h-auto" />
                </div>
                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-4 text-center">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Caminhada</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">O hábito da caminhada diária ajuda a aumentar o bem-estar e a disposição de quem a pratica. Por isso, caminhar alguns minutos por dia ajuda a gerar energia para os músculos, contribui para a respiração, e trabalha a circulação. </p>
                </div>
            </div>
        </div>


        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center text-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 p-8">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Alongamento</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl text-justify">Os alongamentos também fazem parte das atividades físicas para idosos. Recomendados para melhorar a flexibilidade do corpo, equilíbrio, e controle de dores musculares, os alongamentos podem ser realizados sozinhos ou ao final de outros exercícios. Essa prática é recomendada principalmente para idosos com pouca mobilidade física, que apresentam limitações para realizar atividades mais vigorosas. </p>

                </div>


                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-8">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Musculação</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl text-justify">A musculação é uma atividade que contribui para o fortalecimento muscular. Após os 50 anos, é natural que o indivíduo perca força muscular. Por isso, a musculação melhora as dores causadas pela artrose, osteoporose, além de auxiliar na flexibilidade e realização das atividades diárias.</p>

                </div>
            </div>
        </div>



        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                <div className="w-1/2 p-4 text-center">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Pilates</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">O pilates é uma das principais atividades físicas para idosos, a mais indicada. Sua prática traz benefícios relacionados ao alinhamento da postura e fortalecimento muscular. Além disso, diminui a pressão entre as articulações, visto que o alongamento realizado é utilizando o peso do próprio corpo. O pilates também ajuda na prevenção de doenças como diabetes, hipertensão arterial, e diminui o risco para obesidade.</p>
                </div>

                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 47.png" alt="Imagem" className="w-50 h-auto" />
                </div>
            </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
