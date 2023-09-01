import CardAnime from '@/components/CardAnime'
import Titulo from '@/components/Titulo'

export default function Home() {

  const animes = [
    {
      nome: "Jujutsu Kaisen",
      nota: 9.5,
      temp: 2,
      capa: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg"
    },
    {
      nome: "Mushoku Tensei",
      nota: 9.0,
      temp: 2,
      capa: "https://cdn.myanimelist.net/images/anime/1530/117776l.jpg"
    },
    {
      nome: "Blue Lock",
      nota: 9.2,
      temp: 1,
      capa: "https://cdn.myanimelist.net/images/anime/1258/126929l.jpg"
    }
  ]

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

      <section className="flex flex-wrap gap-2">
        {animes.map(anime => <CardAnime anime={anime} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>
      <Titulo>Meus Favoritos</Titulo>
      
    </>
  )
}
