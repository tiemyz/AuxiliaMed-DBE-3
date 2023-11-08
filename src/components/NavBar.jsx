import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between text-center items-center bg-white px-10  border-b-2 border-grey-300 h-32">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="text-black font-bold text-3xl">AuxiliaMed</h1>
                </Link>
                <img src="/icons/heart-png 2.svg" alt="Logo da Freestyle" />
            </div>

            <ul id="links" className="flex items-center gap-14 text-black font-montserrat text-2xl font-bold">
                <li>
                    <Link className={`hover:text-red-500 ${active === "auxiliador" && "text-black"}`} href="/auxiliador">
                        AUXILIADOR
                    </Link>
                </li>

                <li>
                    <Link className={`hover:text-red-500 ${active === "auxiliador" && "text-black"}`} href="/saude">
                        SAÚDE E BEM-ESTAR
                    </Link>
                </li>

                <li>
                    <Link className={`hover:text-red-500 ${active === "hospitais" && "text-black"}`} href="/unidades">
                        UNIDADES DE SAÚDE
                    </Link>
                </li>
            </ul>
        </nav>
    )
}