export default function RecipeCard({title, ingress}){
    return(
        <article className="recipe-card">
            <h3>{title}</h3>
            <p>{ingress}</p>
        </article>
    )
}