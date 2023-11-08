import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Chat from "@/components/Chat";

export default function Auxiliador() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <NavBar active={"auxiliador"} />

      <main className="flex-grow bg-red-100 flex items-center justify-center">
        <div className="bg-white p-9 rounded max-w-xl">
          <Chat />
        </div>
      </main>

      <Footer />
    </div>
  );
}
