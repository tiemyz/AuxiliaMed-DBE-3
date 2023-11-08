import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import DataRow from './DataRow';

async function getUpa() {
  try {
    const url = 'http://localhost:8080/api/v1/upa';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar upa');
    }
    const data = await response.json();
    if (data && data._embedded && data._embedded.entityModelList) {
      return data._embedded.entityModelList;
    } else {
      throw new Error('Formato de dados inválido na resposta da API');
    }
  } catch (error) {
    console.error('Erro ao buscar upa:', error);
    return [];
  }
}

export default async function Upa() {
  const upa = await getUpa();
  console.log(upa); 

  return (
    <>
      <NavBar active={"upa"}/>
      <main className="bg-white min-h-screen flex flex-col items-center gap-y-7 p-10">
        <div className="bg-red-100 rounded-xl w-7/12 h-max p-5 flex items-center justify-between">
            <img src="/img/image 35.png" alt="Imagem 14" />

            <div id="data" className="bg-red-100 rounded">
            {upa.map(upa => {
              if (upa.id === 1) {
                return <DataRow key={upa.id} upa={upa} />;
              }
              return null;
            })}            
            </div>
        </div>

        <div className="bg-red-100 rounded-xl w-7/12 h-max p-5 flex items-center justify-between">
            <img src="/img/image 36.png" alt="Imagem 14"/>
            <div id="data" className="bg-red-100 rounded">
            {upa.map(upa => {
              if (upa.id === 2) {
                return <DataRow key={upa.id} upa={upa} />;
              }
              return null;
            })}            
            </div>
        </div>

        <div className="bg-red-100 rounded-xl w-7/12 h-max p-5 flex items-center justify-between">
            <img src="/img/image 37.png" alt="Imagem 14"/>
            <div id="data" className="bg-red-100 rounded">
            {upa.map(upa => {
              if (upa.id === 3) {
                return <DataRow key={upa.id} upa={upa} />;
              }
              return null;
            })}            
            </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}