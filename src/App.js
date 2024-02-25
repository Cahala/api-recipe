import './App.css';

import Main from './components/Main';

import './recipes.css';

import {Route, Routes} from 'react-router-dom'

import RecipePage from './components/RecipePage';

//kommenter ut tidligere import fra json fila som er dataen vi har brukt hittil

//import recipes from './resources/recipes';

import Layout from './components/Layout';

import { useEffect, useState } from 'react';

function App() {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async() =>{

    //I linken sender chicken som et paramteter på q=, enkelt forklart: vi ber om matoppskrifter som inneholder kylling

    const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=52a150ec&app_key=ced7b20160d07136b580dc435e358b9f')

    const data = await response.json()

    console.log(data)

    //Nå returnerer denne console logen et objekt med hits, objektet ser tilsvarende ut: Object { q: "chicken", from: 0, to: 10, more: true, count: 7000, hits: (10) […] }

    console.log(data.hits)

    //Console.log hits key og se hva vi får av data. 

    //Da kan vi se hits er en array som inneholder 10 oppskrifter som objekter som alle inneholder kylling 

    //Det er denne array vi gjerne vil ha og bruker som oppskrifter, derfor bruker vi setRecipes for å lagre arrayen i staten recipes

    setRecipes(data.hits)

  }

  useEffect(() =>{

    getRecipes()

  },[])
  

  return (

    <Routes>

      <Route element={<Layout />} >

        {/*Videre sender vi med recipes staten til Main slik at Main komponentet også får tilgang på arrayen vi fikk fra API-et*/}

        <Route index element={<Main recipes={recipes} />} />

        <Route path=':slug' element={<RecipePage recipes={recipes} />}/>

      </Route>

    </Routes>

  );

}

export default App;