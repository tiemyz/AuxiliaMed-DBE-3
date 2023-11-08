import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="bg-opacity-50 bg-cover bg-center py-16"
      style={{ backgroundImage: 'url("/img/fundo-banner.png")'}}>
      <div className="container mx-auto text-center items-center flex flex-col text-white p-12">
        <h1 className="text-7xl font-bold">AuxiliaMed</h1>
        <img src="/img/heart-png 1.png" className="w-24 h-auto m-6"></img>
        <p className="mt-4 text-xl italic">Buscamos a otimização do acesso aos meios digitais de saúde pensando especialmente nos problemas que as pessoas da terceira idade enfrentam, proporcionando informações médicas de modo eficaz, menos burocrático e de maneira confiável.</p>
      </div>
    </div>
  );
};

export default Banner;
