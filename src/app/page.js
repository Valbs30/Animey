import CardAnime from '@/components/CardAnime'
import Titulo from '@/components/Titulo'

export default function Home() {

	const animes = [
		{
			id: 1,
			nome: "Jujutsu Kaisen",
			nota: 9.5,
			temp: 2,
			class: "14",
			capa: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg"
		},
		{
			id: 2,
			nome: "Mushoku Tensei",
			nota: 9.0,
			temp: 2,
			class: "L",
			capa: "https://cdn.myanimelist.net/images/anime/1530/117776l.jpg"
		},
		{
			id: 3,
			nome: "Blue Lock",
			nota: 9.2,
			temp: 1,
			class: "L",
			capa: "https://cdn.myanimelist.net/images/anime/1258/126929l.jpg"
		}
	]

	return ( //JSX
		<>
			<nav className="bg-neutral-800 p-4 flex gap-20 items-end">
				<h1 className="text-3xl font-bold text-zinc-100">Animey</h1>
				<ul>
					<li className='flex gap-20'>
						<a href="#">Mais Vistos</a>
						<a href="#">Lançamentos</a>
						<a href="#">Meus Favoritos</a>
						<a href="#">Sobre</a>
					</li>
				</ul>
			</nav>

			<Titulo>Mais Vistos</Titulo>

			<section className="flex flex-wrap gap-2">
				{animes.map(anime => <CardAnime anime={anime} />)}
			</section>

			<Titulo>Lançamentos</Titulo>
			<Titulo>Meus Favoritos</Titulo>

		</>
	)
}
