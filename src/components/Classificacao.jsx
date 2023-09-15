export default function Classificacao(anime) {
    const {animeClass} = anime

    let imgClass = ""
    console.log (anime)
    console.log (anime.class)
    switch (animeClass) {
        case "L":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/42px-DJCTQ_-_L.svg.png"
            break
        case "10":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DJCTQ_-_10.svg/42px-DJCTQ_-_10.svg.png"
            break
        case "12":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DJCTQ_-_12.svg/42px-DJCTQ_-_12.svg.png"
            break
        case "14":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/42px-DJCTQ_-_14.svg.png"
            break
        case "16":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/42px-DJCTQ_-_16.svg.png"
            break
        case "18":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/DJCTQ_-_18.svg/42px-DJCTQ_-_18.svg.png"
            break
        default:
            imgClass = "#"
    }

    return (
        <div>
            <img src={imgClass} alt="" />
        </div>
    )
}