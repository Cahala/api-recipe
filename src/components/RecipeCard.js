export default function RecipeCard({title, ingress, img}){
    return(
        <article className="recipe-card">
            <figure>
                <img src={img} alt={title} />
            </figure>
            <h3>{title}</h3>
            <p>{ingress}</p>
        </article>
    )
}