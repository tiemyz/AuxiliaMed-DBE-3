import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-amber-100 min-h-fit	 justify-center">
        <div className="bg-black h-96 flex items-center justify-evenly bg-[url('/img/fundo-banner.png')] bg-cover bg-no-repeat">
          <div className="flex flex-col items-center">
            <h1 className="text-white font-bold text-6xl">AuxiliaMed</h1>
            <img src="/icons/heart-png 2.svg" className="h-40"></img>
            <p className="text-3xl	">"Auxiliando Vidas"</p>
          </div>

          <div className="bg-red-400 w-1/5 p-5 text-center rounded-xl	">
            <Link href="/auxiliador">
                <h1 className="text-white font-bold text-3xl">Tire dúvidas com o nosso Chat
                </h1>
            </Link>
          </div>
        </div>

        <div className="p-20 text-center text-3xl font-bold text-black">
          <h2>Consulte os Hospitais e Consultórios localizados no estado de São Paulo nas opções abaixo!</h2>
        </div>

        <div className="flex justify-between  p-20">
          <div className="bg-red-400 w-1/5 p-5 text-center rounded-xl	">
              <Link href="/hospitais">
                  <h1 className="text-white font-bold text-3xl">Hospitais
                  </h1>
              </Link>
          </div>

          <div className="bg-red-400 w-1/5 p-5 text-center rounded-xl	">
              <Link href="/consultorios">
                  <h1 className="text-white font-bold text-3xl">Consultórios
                  </h1>
              </Link>
          </div>

          <div className="bg-red-400 w-1/5 p-5 text-center rounded-xl	">
              <Link href="/saibamais">
                  <h1 className="text-white font-bold text-3xl">Saiba Mais
                  </h1>
              </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

