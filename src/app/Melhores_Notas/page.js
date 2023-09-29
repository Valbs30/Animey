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
    const topurl = "https://api.jikan.moe/v4/top/anime"
	const topanimes = await carregarDados(topurl)
    const topmovurl = "https://api.jikan.moe/v4/top/anime?type=movie"
	const topmovanimes = await carregarDados(topmovurl)

	return (
		<>
			<nav className="bg-neutral-800 px-10 py-4 flex items-end justify-between">
				<div className="flex items-end gap-20">
					<h1 className="text-3xl font-bold text-zinc-100">Animey</h1>
					<ul>
						<li className="flex gap-20 text-lg">
							<a href="/Mais_Vistos">Mais Vistos</a>
							<a href="/Favoritos">Favoritos</a>
							<a href="/Melhores_Notas">Melhores Notas</a>
							<a href="/Lancamentos">Lançamentos</a>
							<a href="#">Meus Favoritos</a>
						</li>
					</ul>
				</div>
				<a href="#" className="text-lg">Sobre</a>
			</nav>

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