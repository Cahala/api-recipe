
import { useParams } from "react-router-dom"
export default function RecipePage({recipes}){
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec.slug === slug)

    return (
        <section>
            <h1>{recipe.title}</h1>
            <ul>
                {recipe.ingredients.map((ingredient, index) =>(
                <li key={"ing"+index}>{ingredient}</li>
            ))}
            </ul>
            <ol>
                {recipe.process.map((step, index) =>(
                    <li key={"step"+index}>{step}</li>
                ))}
            </ol>
        </section>
    )
}