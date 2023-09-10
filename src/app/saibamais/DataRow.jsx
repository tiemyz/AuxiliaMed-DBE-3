export default function DataRow({ doenca }) {
    console.log('ID da doença:', doenca.id); 

    return (
      <div id="data-row" className="group flex items-center  justify-between p-2 my-2 rounded cursor-pointer bg-red-400 ">
        <div className="flex flex-col gap-10 items-center h-96 w-full overflow-y-auto" >
          <span className="text-4xl text-white font-bold underline">{doenca.nomeDoenca}</span>
            <span className="text-2xl text-black">{doenca.dsDoenca}</span>
        </div>
      </div>
    );
}
  