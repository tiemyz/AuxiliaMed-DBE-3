"use client"
import React from 'react';
import NavBar from "@/components/NavBar"; 
import Footer from "@/components/Footer"; 

export default function Dietas() {
  return (
    <>
      <NavBar active={'dietas'} />

      <main>
        {/*PRIMEIRA*/}
        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Importância de uma alimentação equilibrada na terceira idade</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Uma dieta rica em frutas e vegetais é essencial para prevenir doenças como câncer, diabete e doenças cardiovasculares. Esses alimentos são ricos em vitaminas, minerais, fibras e antioxidantes, que servem como blindagem de carros para proteger o corpo contra o estresse oxidativo e o envelhecimento celular.</p>

                </div>
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 39.png" alt="Imagem" className="w-50 h-auto" />
                </div>
            </div>
        </div>


        {/*SEGUNDA*/}
        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center text-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 p-8">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Proteínas magras</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl text-justify">As proteínas magras são importantes para manter a massa muscular, que tende a diminuir com o envelhecimento. Alimentos como frango, peixe, ovos, tofu e leguminosas são boas fontes de proteína e devem ser incluídos na dieta de forma equilibrada.</p>

                </div>


                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-8">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Carboidratos</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl text-justify">Já os carboidratos complexos, como os encontrados em grãos integrais, legumes e frutas, fornecem energia ao organismo e são essenciais para manter o equilíbrio glicêmico. Evite carboidratos refinados, como açúcar, pão branco e arroz branco, que podem aumentar o risco de doenças crônicas.</p>

                </div>
            </div>
        </div>

        {/*TERCEIRA*/}
        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 44.png" alt="Imagem" className="w-50 h-auto" />
                </div>
                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Gorduras saudáveis</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">As gorduras saudáveis, como as encontradas em peixes, nozes, sementes e abacate, também são fundamentais para manter a saúde cardiovascular e cerebral. Essas gorduras ajudam a reduzir os níveis de colesterol ruim e a aumentar os níveis de colesterol bom, além de ajudar a proteger o cérebro contra o declínio cognitivo.</p>
                </div>
            </div>
        </div>

        <div id="condicoes" className="bg-white p-12">
            <div className="flex items-center">
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2 bg-red-100 inline-flex rounded">Hidratação adequada</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Além de uma alimentação equilibrada, é importante manter uma hidratação adequada, consumindo água e outros líquidos saudáveis, como chás e sucos naturais. Afinal, a desidratação pode causar diversos problemas de saúde, como constipação, infecções urinárias e problemas renais. Também, é importante evitar o consumo excessivo de álcool e tabaco, que podem aumentar o risco de doenças crônicas como câncer, doenças cardiovasculares e doenças respiratórias.</p>
                </div>

                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 45.png" alt="Imagem" className="w-50 h-auto" />
                </div>
            </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
