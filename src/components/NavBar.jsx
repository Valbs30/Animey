"use client"

import { serverLogout } from "@/actions/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NavBar() {
    const { push } = useRouter()

    function logout() {
        serverLogout()
        push('/login')
    }

    return (

        <nav className="bg-neutral-800 px-10 py-4 flex items-end justify-between">
            <div className="flex items-end gap-16">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-zinc-100">Animey</h1>
                </Link>
                <ul>
                    <li className="flex gap-10 text-lg">
                        <Link href="/Mais_Vistos">Mais Vistos</Link>
                        <Link href="/Populares">Populares</Link>
                        <Link href="/Favoritos">Favoritos</Link>
                        <Link href="/Melhores_Notas">Melhores Notas</Link>
                        <Link href="#">Meus Favoritos</Link>
                    </li>
                </ul>
            </div>
            <button onClick={logout}>Sair</button>
        </nav>
    )
}