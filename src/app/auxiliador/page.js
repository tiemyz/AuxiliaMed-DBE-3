import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

/*async function getContas(){
  const url = "http://localhost:8080/api/v1/conta"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}*/

export default function Auxiliador() {
  return (
    <>
      <NavBar active={"auxiliador"} />

      <main className="bg-amber-100  min-h-screen flex justify-center items-center gap-x-7 p-10 flex-wrap">
          <h1 className="text-black text-3xl font-bold">Em breve na 4° entrega!</h1>
      </main>

      <Footer />
    </>
  )
}

