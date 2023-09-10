import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import DataRow from './DataRow';

async function getHospitais() {
  try {
    const url = 'http://localhost:8080/api/v1/hospital';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar hospitais');
    }
    const data = await response.json();
    if (data && data._embedded && data._embedded.entityModelList) {
      return data._embedded.entityModelList;
    } else {
      throw new Error('Formato de dados inválido na resposta da API');
    }
  } catch (error) {
    console.error('Erro ao buscar hospitais:', error);
    return [];
  }
}

export default async function Hospitais() {
  const hospitais = await getHospitais();
  console.log(hospitais); 

  return (
    <>
      <NavBar active={"hospitais"} />

      <main className="bg-amber-100 min-h-screen flex flex-col items-center gap-y-7 p-10">
        <div className="bg-slate-300 rounded-xl w-11/12 h-max p-5 flex items-center justify-between">
            <img src="/img/image 10.png" alt="Imagem 10" />

            <div id="data" className="bg-red-400 rounded">
            {hospitais.map(hospital => {
              if (hospital.id === 1) {
                return <DataRow key={hospital.id} hospital={hospital} />;
              }
              return null;
            })}
            </div>
        </div>

        <div className="bg-slate-300 rounded-xl w-11/12 h-max p-5 flex items-center justify-between">
            <img src="/img/image 11.png" alt="Imagem 11" />

            <div id="data" className="bg-red-400 rounded">
            {hospitais.map(hospital => {
              if (hospital.id === 2) {
                return <DataRow key={hospital.id} hospital={hospital} />;
              }
              return null;
            })}
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}