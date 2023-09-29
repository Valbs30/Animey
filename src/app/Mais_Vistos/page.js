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

	return dadosFiltrados
}

export default async function Home() {
	const mvurl = "https://api.jikan.moe/v4/top/anime?filter=airing"
	const mvanimes = await carregarDados(mvurl)

	return (
		<>
			<NavBar/>

			<Titulo>Mais Vistos</Titulo>

			<section className="flex flex-wrap gap-2">
				{mvanimes.map(anime => <CardAnime anime={anime} />)}
			</section>

		</>
	)
}