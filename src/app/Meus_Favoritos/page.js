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
    const urlFavoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || []
	const animesFavoritos = await carregarDados(urlFavoritosSalvos)
    //const animesFavoritos = await Promise.all(urlFavoritosSalvos.map(url => carregarDados(url)))

	return (
		<>
			<NavBar/>

			<Titulo>Meus Favoritos</Titulo>

			<section className="flex flex-wrap gap-2">
    			{animesFavoritos.map(anime => <CardAnime anime={anime} />)}
				{/*animesFavoritos.map(anime => anime.map(animeData => <CardAnime anime={animeData} />))*/}
			</section>

		</>
	)
}