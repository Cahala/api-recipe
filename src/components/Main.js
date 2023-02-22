import RecipeCard from './RecipeCard';
import recipes from '../resources/recipes';
import { Link } from 'react-router-dom';
export default function Main(){
    return (
        <>
            {recipes.map((recipe) => (
                <Link to={recipe.slug}>
                    <RecipeCard title={recipe.title} /> 
                </Link>
            ))}
        </>
      );
}