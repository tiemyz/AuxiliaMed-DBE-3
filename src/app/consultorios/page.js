import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import DataRow from './DataRow';

async function getConsultorios() {
  try {
    const url = 'http://localhost:8080/api/v1/consultorio';
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

export default async function Consultorios() {
  const consultorios = await getConsultorios();
  console.log(consultorios); 

  return (
    <>
      <NavBar active={"consultorios"} />

      <main className="bg-white min-h-screen flex flex-col items-center gap-y-7 p-10">
        <div className="bg-red-100 rounded-xl w-11/12 h-max p-5 flex items-center justify-between">
            <img src="/img/image 14.png" alt="Imagem 14" />

            <div id="data" className="bg-red-100 rounded">
            {consultorios.map(consultorio => <DataRow key={consultorio.id} consultorio={consultorio} />)}
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}