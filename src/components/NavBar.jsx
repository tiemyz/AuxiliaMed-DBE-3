import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between text-center items-center bg-red-400 px-10 py-1 h-32">

            <div className="flex items-center">
                <Link href="/">
                    <h1 className="text-white font-bold text-3xl">AuxiliaMed</h1>
                </Link>
                <img src="/icons/heart-png 2.svg" alt="Logo da Freestyle" />
            </div>

            <ul id="links" className="flex items-center gap-14 text-black font-jura text-2xl font-bold">

                <li>
                    <Link className={`hover:text-white ${active === "contas" && "text-slate-100"}`} href="/auxiliador">
                        AUXILIADOR DIGITAL
                    </Link>
                </li>

                <li>
                    <Link className={`hover:text-white ${active === "contas" && "text-slate-100"}`} href="/hospitais">
                        HOSPITAIS
                    </Link>
                </li>

                <li>
                    <Link className={`hover:text-white ${active === "contas" && "text-slate-100"}`} href="/consultorios">
                        CONSULTÓRIOS
                    </Link>
                </li>
                
                <li>
                    <Link className={`hover:text-white ${active === "contas" && "text-slate-100"}`} href="/saibamais">
                        SAIBA MAIS
                    </Link>
                </li>
                
            </ul>

 
        </nav>
    )
}