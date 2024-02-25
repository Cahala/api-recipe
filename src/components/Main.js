import RecipeCard from './RecipeCard';

//Kommenter ut eller fjern importen som henter recipes fra json objektet vi har brukt tidligere

//import recipes from '../resources/recipes';

import { Link } from 'react-router-dom';

//legg med recipes som en prop i {} Main funksjonen

export default function Main({recipes}){

    return (

        <>

            {recipes.map((recipe) => (

                //url-en vi sender er jo det samme som label og ikke veldig url-vennling. Det finnes ingen slug key vi kan bruke 

                //Derfor skal vi lage en litt penere slug som vi sender med og som vi skal bruke for å sjekke på i RecipePage

                //Vi bruker en replace(/\s/g, '-') for å fjerne mellomrommet og erstatte det med en "-" og .toLowerCase for å gjøre alle bokstavene små

                <Link to={recipe?.recipe?.label.replace(/\s/g, '-').toLowerCase()}>

                    <RecipeCard title={recipe?.recipe?.label} /> 

                </Link>

            ))}

        </>

      );

}