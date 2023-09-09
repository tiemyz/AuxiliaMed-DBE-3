import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

/*async function getContas(){
  const url = "http://localhost:8080/api/v1/conta"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}*/

export default function SaibaMais() {
  return (
    <>
      <NavBar active={"saibamais"} />

      <main className="bg-amber-100  min-h-screen flex justify-center gap-x-7 p-10 flex-wrap">
        <div className="bg-slate-300 rounded-xl w-4/12 h-max p-5 ">

        </div>

        <div className="bg-slate-300 rounded-xl w-4/12 h-max p-5 ">

        </div>

        <div className="bg-slate-300 rounded-xl w-4/12 h-max p-5 ">

        </div>

      </main>

      <Footer />
    </>
  )
}

