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
	const popurl = "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
	const popanimes = await carregarDados(popurl)

	return (
		<>
			<nav className="bg-neutral-800 px-10 py-4 flex items-end justify-between">
				<div className="flex items-end gap-16">
					<h1 className="text-3xl font-bold text-zinc-100">Animey</h1>
					<ul>
						<li className="flex gap-10 text-lg">
							<a href="/Lancamentos">Lançamentos</a>
							<a href="/Mais_Vistos">Mais Vistos</a>
							<a href="/Populares">Populares</a>
							<a href="/Favoritos">Favoritos</a>
							<a href="/Melhores_Notas">Melhores Notas</a>
							<a href="#">Meus Favoritos</a>
						</li>
					</ul>
				</div>
				<a href="#" className="text-lg">Sobre</a>
			</nav>

			<Titulo>Lançamentos</Titulo>

		</>
	)
}