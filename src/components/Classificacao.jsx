export default function Classificacao({classe}) {

    let imgClass = ""

    switch (classe) {
        case "G - All Ages":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/42px-DJCTQ_-_L.svg.png"
            break
        case "PG - Children":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DJCTQ_-_10.svg/42px-DJCTQ_-_10.svg.png"
            break
        /*case "12":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DJCTQ_-_12.svg/42px-DJCTQ_-_12.svg.png"
            break*/
        case "PG-13 - Teens 13 or older":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/DJCTQ_-_14.svg/42px-DJCTQ_-_14.svg.png"
            break
        case "R - 17+ (violence & profanity)":
            imgClass = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/42px-DJCTQ_-_16.svg.png"
            break
        case "R+ - Mild Nudity":
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