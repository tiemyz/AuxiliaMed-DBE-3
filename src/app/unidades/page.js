"use client"
import React, { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar"; 
import Footer from "@/components/Footer"; 
import Link from "next/link";


export default function Unidades() {
  const [activeSection, setActiveSection] = useState('unidades'); 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setActiveSection('hospital');
  }, []);

  return (
    <>
      <NavBar active={"unidades"} />

      <main>
        {/* Botões de Navegação */}
        <div className="bg-white flex justify-start space-x-4 p-10">
          <button
            onClick={() => {
              setActiveSection('hospital');
              scrollToSection('hospital');
            }}
            className={`${
              activeSection === 'hospital' ? 'bg-red-500 text-white text-2xl font-bold' : 'bg-white text-gray-700 font-bold text-2xl border-2 border-red-300 rounded-lg'
            } px-8 py-4 rounded-lg transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}
          >
            HOSPITAIS
          </button>
          <button
            onClick={() => {
              setActiveSection('consultorio');
              scrollToSection('consultorio');
            }}
            className={`${
              activeSection === 'consultorio' ? 'bg-red-500 text-white text-2xl font-bold' : 'bg-white text-gray-700 font-bold text-2xl border-2 border-red-300 rounded-lg'
            } px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}
          >
            CONSULTÓRIOS
          </button>

          <button
            onClick={() => {
              setActiveSection('upa');
              scrollToSection('upa');
            }}
            className={`${
              activeSection === 'upa' ? 'bg-red-500 text-white text-2xl font-bold' : 'bg-white text-gray-700 font-bold text-2xl border-2 border-red-300 rounded-lg'
            } px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-red-500 hover:text-white`}
          >
            UPA
          </button>
        </div>

        {/* Seções */}

        {/* Hospitais */}
        <div id="hospital" className="bg-white p-12">
            <div className="flex items-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 22.png" alt="Imagem" className="w-50 h-auto" />
                </div>
                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2">Hospitais</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Busque por hospitais localizados no estado de São Paulo, tenha acesso a informações gerais sobre eles e obtenha o passo a passo de como navegar pelos seus sites!</p>

                    <div className="mt-6 bg-red-500 inline-block text-white px-8 py-4 rounded-md hover:bg-red-600">
                      <Link href="/hospitais">
                        <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
                      </Link>
                    </div>
                </div>
            </div>
        </div>




        
        {/* Consultórios */}
        <div id="consultorio" className="bg-red-100 p-12">
            <div className="flex items-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2">Consultórios Médicos</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Procura atendimento médico especializado? Consultórios médicos são locais dedicados à prestação de serviços de saúde individualizados. Neles, médicos altamente qualificados oferecem diagnósticos, tratamentos e orientações médicas para uma ampla gama de condições de saúde. Os consultórios médicos oferecem um ambiente acolhedor e seguro, onde pacientes podem discutir suas preocupações de saúde, realizar exames clínicos e receber a devida atenção para a melhoria de sua qualidade de vida. </p>

                    <div className="mt-6 bg-red-500 inline-block text-white px-8 py-4 rounded-md hover:bg-red-600">
                      <Link href="/consultorios">
                        <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
                      </Link>
                    </div>
                </div>
                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 21.png" alt="Imagem" className="w-50 h-auto" />
                </div>
            </div>
        </div>
      
        {/* UPAs */}
        <div id="upa" className="bg-white p-12">
            <div className="flex items-center">
                {/* Lado Esquerdo (Imagem) */}
                <div className="w-1/2 justify-center flex">
                  <img src="/img/image 20.png" alt="Imagem" className="w-50 h-auto" />
                </div>
                {/* Lado Direito (Texto e Botão) */}
                <div className="w-1/2 p-4">
                    <h1 className="text-6xl font-bold text-black mb-2">UPAs</h1>
                    <p className="text-gray-600 mt-8 mb-4 text-2xl">Unidades de Pronto Atendimento (UPAs) são estabelecimentos de saúde de acesso público que oferecem assistência médica imediata a pacientes com condições médicas agudas, mas não emergenciais. Com equipes multidisciplinares, UPAs fornecem serviços de triagem, diagnóstico, tratamento e estabilização, funcionando 24 horas por dia, 7 dias por semana. Essas unidades desempenham um papel crucial no sistema de saúde, aliviando a carga dos pronto-socorros e proporcionando cuidados de qualidade a pacientes que necessitam de atenção médica urgente, mas não apresentam risco de vida imediato.</p>

                    <div className="mt-6 bg-red-500 inline-block text-white px-8 py-4 rounded-md hover:bg-red-600">
                      <Link href="/upa">
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
