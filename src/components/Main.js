import RecipeCard from './RecipeCard';
//import recipes from '../resources/recipes';
import { Link } from 'react-router-dom';
import Search from './Search';
export default function Main({recipes, getRecipes, setSearch}){
    return (
      <>
      <Search getRecipes={getRecipes} setSearch={setSearch} />
          {recipes.map((recipe, index) => (
              <Link key={index} to={recipe?.recipe?.label.replace(/\s/g, "-").toLowerCase()}>
                  <RecipeCard title={recipe?.recipe?.label} img={recipe?.recipe?.image} /> 
              </Link>
          ))}
      </>

      );
}