export default function DataRow({ hospital }) {
  console.log('ID do hospital:', hospital.id); 
  
  return (
    <div id="data-row" className="group flex items-center  justify-between p-2 my-2 rounded cursor-pointer bg-red-400 ">
      <div className="flex flex-col gap-10 items-center h-96 w-full overflow-y-auto" >
        <span className="text-4xl text-white font-bold underline">{hospital.nomeHospital}</span>

        <h1 className="text-2xl underline">Como fazer login no site:</h1>
        <span className="text-2xl text-black">{hospital.hpLogin}</span>

        <h1 className="text-2xl underline">Como fazer cadastro no site:</h1>
        <span className="text-2xl text-black">{hospital.hpCadastro}</span>

        <h1 className="text-2xl underline">Como marcar uma consulta no site:</h1>
        <span className="text-2xl text-black">{hospital.hpConsulta}</span>

        <h1 className="text-2xl underline">Onde fica localizado:</h1>
        <span className="text-2xl text-black">{hospital.hpLocalidade}</span>
      </div>
    </div>
  );
}
