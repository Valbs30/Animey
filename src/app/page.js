import CardAnime from '@/components/CardAnime'
import Titulo from '@/components/Titulo'

async function carregarDados() {
	const url = "https://api.jikan.moe/v4/top/anime"
	const response = await fetch(url)
	const json = await response.json()
	return json.data
}

export default async function Home() {
	try {
		const animes = await carregarDados();

		if (!Array.isArray(animes)) {
			// Se 'animes' não for um array, trate o erro de alguma forma
			console.error('Os dados carregados não são um array:', animes)
			return null // ou outra ação apropriada
		}

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
	} catch (error) {
		console.error('Ocorreu um erro ao carregar os dados:', error)
		return null // ou outra ação apropriada
	}
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
