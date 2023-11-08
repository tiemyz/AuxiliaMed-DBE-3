export default function DataRow({ upa }) {
    console.log('ID da UPA:', upa.id); 

    return (
      <div id="data-row" className="group flex items-center  justify-between p-2 my-2 rounded cursor-pointer bg-red-400 ">
        <div className="flex flex-col gap-10 items-center h-96 w-full overflow-y-auto" >
          <span className="text-4xl text-white font-bold underline">{upa.nomeUpa}</span>

          <h1 className="text-2xl underline">Onde está localizada:</h1>
          <span className="text-2xl text-black">{upa.localidadeUpa}</span>
        </div>
      </div>
    );
}
  