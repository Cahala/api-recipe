import { useParams } from "react-router-dom"

export default function RecipePage({recipes}){

    const {slug} = useParams()

    //Her må vi lete etter riktige parametere, igjen så leter vi etter key-en slug som skal ligge på objektet, men det gjør det ikke lenger..

    //Vi kan bruke samme ''metode'' som tidligere for å sjekke på urlen vi laget ved å legge til recipe key-en og bruke replace og tolowercase på label keyen

    const recipe = recipes?.find((rec) => rec?.recipe?.label.replace(/\s/g, '-').toLowerCase() === slug )

    console.log(recipe)

    return (

        <section>

            {/* Nå kan vi bruke recipe for å hente ut dataen vi vil ha og bruke på oppskriftssiden*/}

            {/*Henter ut tittelen for den aktuelle oppskriften*/}

            <h1>{recipe?.recipe?.label}</h1>

            {/*Henter ut bilde url-en som ligger som en key for den aktuelle oppskriften*/}

            <img src={recipe?.recipe?.image} alt={recipe?.recipe?.label} />

        </section>

    )

}