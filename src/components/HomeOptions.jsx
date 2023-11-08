import Link from "next/link";

const HomeOptions = () => {
  return (
    <div className="bg-red-100 p-12">

      <div className="flex items-center text-center justify-center mb-16 mt-12">
        <h2 className="text-6xl font-bold text-black">Nossos Serviços</h2>

      </div>

      <div className="flex justify-evenly items-center mt-4">
        {/* Primeira div */}
        <div className="flex-shrink-0 w-96  h-[800px] p-4 bg-white border-2 border-red-300 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
          <img src="/img/image 18.png" alt="Imagem" className="h-auto" />
          <h3 className="text-3xl font-semibold mt-8 text-black">Auxiliador Digital</h3>
          <p className="text-gray-600 text-2xl mt-5">
            Nosso auxiliador que conta com a integração do ChatGPT, poderosa ferramenta capaz de devolver respostas para todos os tipos de perguntas.
          </p>

          <div className="mt-8 mb-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            <Link href="/auxiliador">
              <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
            </Link>
          </div>
        </div>

         {/* Segunda div */}
         <div className="flex-shrink-0 w-96  h-[800px] p-4 bg-white border-2 border-red-300 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
                  <img src="/img/image 19.png" alt="Imagem" className="h-auto" />
                  <h3 className="text-3xl font-semibold mt-8 text-black">Saúde e Bem-Estar</h3>
                  <p className="text-gray-600 text-2xl mt-5">Confira dicas e artigos para evitar problemas de saúde e levar uma vida mais saudável, ativa e equilibrada. </p>

                  <div className="mt-8 mb-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                      <Link href="/saude">
                        <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
                      </Link>
                  </div>
                </div>

                {/* Terceira div */}
                <div className="flex-shrink-0 w-96  h-[800px] p-4 bg-white border-2 border-red-300 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
                  <img src="/img/image 17.png" alt="Imagem" className="h-auto" />
                  <h3 className="text-3xl font-semibold mt-8 text-black">Unidades de Saúde</h3>
                  <p className="text-gray-600 text-2xl mt-5">Encontre hospitais, consultórios e unidades de pronto atendimento (UPA) mais próximo de você localizados no estado de São Paulo, com instruções para acesso ao site.</p>

                  <div className="mt-8 mb-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                      <Link href="/unidades">
                        <h1 className="text-white font-bold text-xl">SAIBA MAIS</h1>
                      </Link>
                  </div>
                </div>

              

      </div>
    </div>
  );
};

export default HomeOptions;
