export default function CardAnime({anime}){
    return(
        <div className="flex flex-col items-center w-40 m-2 gap-1 bg-zinc-700 rounded">
            <img className="p-1 relative" src={anime.capa} alt="" />
            <span className="text-lg w-full line-clamp-1 text-center">
                {anime.nome}
            </span>
            <div className="flex items-center gap-2 bg-zinc-400 p-1 rounded absolute">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-400">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                <span className="#">{anime.nota}</span>
            </div>
            <span className="bg-zinc-700 p-1 rounded absolute bottom-0">{anime.temp} Temporadas</span>
        </div>
    )
}