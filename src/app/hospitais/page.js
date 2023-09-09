import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

/*async function getContas(){
  const url = "http://localhost:8080/api/v1/conta"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}*/

export default function Hospitais() {
  return (
    <>
      <NavBar active={"hospitais"} />

      <main className="bg-amber-100  min-h-screen flex flex-col items-center gap-y-7 p-10">
        <div className="bg-slate-300 rounded-xl w-10/12 h-max p-5 ">
            <div>
                <img src="/img/image 10.png"></img>
            </div>
        </div>

        <div className="bg-slate-300 rounded-xl w-10/12 h-max p-5 ">
            <div>
                <img src="/img/image 11.png"></img>
            </div>
        </div>

      </main>

      <Footer />
    </>
  )
}

