import NavBar from "@/components/NavBar"
import CardAnime from '@/components/CardAnime'
import Titulo from '@/components/Titulo'

async function carregarDados(url) {
	const response = await fetch(url)
	const json = await response.json()

	const dadosFiltrados = json.data.map(anime => ({
		mal_id: anime.mal_id,
		url: anime.url,
		title: anime.title,
		images: anime.images,
		rating: anime.rating,
		score: anime.score,
		type: anime.type,
		episodes: anime.episodes,
		rank: anime.rank,
		popularity: anime.popularity
	  }))

	return dadosFiltrados.slice(0, 8)
	//.slice(0, 10)
}

export default async function Home() {
	const mvurl = "https://api.jikan.moe/v4/top/anime?filter=airing"
	const mvanimes = await carregarDados(mvurl)
	const popurl = "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
	const popanimes = await carregarDados(popurl)
	const topurl = "https://api.jikan.moe/v4/top/anime"
	const topanimes = await carregarDados(topurl)

	return ( //JSX
		<>
			<NavBar/>

			<Titulo>Mais Vistos</Titulo>

			<section className="flex flex-wrap gap-2">
				{mvanimes.map(anime => <CardAnime anime={anime} />)}
			</section>

			<Titulo>Populares</Titulo>

			<section className="flex flex-wrap gap-2">
				{popanimes.map(anime => <CardAnime anime={anime} />)}
			</section>

			<Titulo>Melhores Notas</Titulo>

			<section className="flex flex-wrap gap-2">
				{topanimes.map(anime => <CardAnime anime={anime} />)}
			</section>

			<Titulo>Meus Favoritos</Titulo>

		</>
	)
}

/*import CardAnime from '@/components/CardAnime'
import Titulo from '@/components/Titulo'

async function carregarDados(){
	const url = "https://api.jikan.moe/v4/top/anime"
	const response = await fetch(url)
	const json = await response.json()
	return json.results || []
  }

export default async function Home() {
	const animes = await carregarDados()
	console.log(animes)
	return ( //JSX
		<>
			<nav className="bg-neutral-800 px-10 py-4 flex items-end justify-between">
				<div className="flex items-end gap-20">
					<h1 className="text-3xl font-bold text-zinc-100">Animey</h1>
					<ul>
						<li className="flex gap-20 text-lg">
							<a href="#">Mais Vistos</a>
							<a href="#">Lançamentos</a>
							<a href="#">Meus Favoritos</a>
						</li>
					</ul>
				</div>
				<a href="#" className="text-lg">Sobre</a>
			</nav>

			<Titulo>Mais Vistos</Titulo>

			<section className="flex flex-wrap gap-2">
				{animes.map(anime => <CardAnime anime={anime} />)}
			</section>

			<Titulo>Lançamentos</Titulo>
			<Titulo>Meus Favoritos</Titulo>

		</>
	)
}*/
