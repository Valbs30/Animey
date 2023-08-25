import Titulo from '@/components/Titulo'

export default function Home() {
  return ( //JSX
    <>
      <nav className="bg-neutral-800 p-4 flex gap-3 items-end">
        <h1 className="text-3xl font-bold text-zinc-100 uppercase">Fiap Filmes</h1>
        <ul>
          <li>
            <a href="#">Mais Vistos</a>
            <a href="#">Lançamentos</a>
			      <a href="#">Meus Favoritos</a>
			      <a href="#">Sobre</a>
          </li>
        </ul>
      </nav>

      <Titulo>Mais Vistos</Titulo>
      <Titulo>Lançamentos</Titulo>
      <Titulo>Meus Favoritos</Titulo>
      
    </>
  )
}
