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
	//const urlFavoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || []
	//const animesFavoritos = await carregarDados(urlFavoritosSalvos)

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

			{/*<section className="flex flex-wrap gap-2">
    			{animesFavoritos.map(anime => <CardAnime anime={anime} />)}
			</section>*/}

		</>
	)
}