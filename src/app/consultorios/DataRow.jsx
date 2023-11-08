export default function DataRow({ consultorio }) {
    console.log('ID do consultório:', consultorio.id); 

    return (
      <div id="data-row" className="group flex items-center  justify-between p-2 my-2 rounded cursor-pointer bg-red-400 ">
        <div className="flex flex-col gap-10 items-center h-96 w-full overflow-y-auto" >
          <span className="text-4xl text-white font-bold underline">{consultorio.nomeConsultorio}</span>
  
          <h1 className="text-2xl underline">Como fazer login no site:</h1>
          <span className="text-2xl text-black">{consultorio.ctLogin}</span>
  
          <h1 className="text-2xl underline">Como fazer cadastro no site:</h1>
          <span className="text-2xl text-black">{consultorio.ctCadastro}</span>
  
          <h1 className="text-2xl underline">Como marcar uma consulta no site:</h1>
          <span className="text-2xl text-black">{consultorio.ctConsulta}</span>
  
          <h1 className="text-2xl underline">Onde fica localizado:</h1>
          <span className="text-2xl text-black">{consultorio.ctLocalidade}</span>
        </div>
      </div>
    );
}
  