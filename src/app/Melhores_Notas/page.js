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

	return dadosFiltrados.slice(0, 10)
}

export default async function Home() {
    const topurl = "https://api.jikan.moe/v4/top/anime?type=tv"
	const topanimes = await carregarDados(topurl)
    const topmovurl = "https://api.jikan.moe/v4/top/anime?type=movie"
	const topmovanimes = await carregarDados(topmovurl)

	return (
		<>
			<NavBar/>

			<Titulo>Top Animes</Titulo>

			<section className="flex flex-wrap gap-2">
				{topanimes.map(anime => <CardAnime anime={anime} />)}
			</section>

			<Titulo>Top Filmes</Titulo>

            <section className="flex flex-wrap gap-2">
				{topmovanimes.map(anime => <CardAnime anime={anime} />)}
			</section>

		</>
	)
}