import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import DataRow from './DataRow';

async function getDoencas() {
  try {
    const url = 'http://localhost:8080/api/v1/doenca';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar doença');
    }
    const data = await response.json();
    if (data && data._embedded && data._embedded.entityModelList) {
      return data._embedded.entityModelList;
    } else {
      throw new Error('Formato de dados inválido na resposta da API');
    }
  } catch (error) {
    console.error('Erro ao buscar doença:', error);
    return [];
  }
}

export default async function Doencas() {
  const doencas = await getDoencas();
  console.log(doencas);

  return (
    <>
      <NavBar active={"saibamais"} />
      <main className="bg-amber-100 min-h-screen flex flex-col items-center gap-y-7 p-10">
        <div className="bg-slate-300 rounded-xl w-11/12 h-max p-5 flex items-center justify-between">

            <div id="data" className="bg-red-400 rounded">
            {doencas.map(doenca => {
              if (doenca.id === 1) {
                return <DataRow key={doenca.id} doenca={doenca} />;
              }
              return null;
            })}
            </div>
        </div>

        <div className="bg-slate-300 rounded-xl w-11/12 h-max p-5 flex items-center justify-between">

            <div id="data" className="bg-red-400 rounded">
            {doencas.map(doenca => {
              if (doenca.id === 2) {
                return <DataRow key={doenca.id} doenca={doenca} />;
              }
              return null;
            })}
            </div>
        </div>

        <div className="bg-slate-300 rounded-xl w-11/12 h-max p-5 flex items-center justify-between">
            <div id="data" className="bg-red-400 rounded">
            {doencas.map(doenca => {
              if (doenca.id === 3) {
                return <DataRow key={doenca.id} doenca={doenca} />;
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