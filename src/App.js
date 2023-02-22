import './App.css';
import Main from './components/Main';
import './recipes.css';
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage';
import recipes from './resources/recipes';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<Main />} />
        <Route path=':slug' element={<RecipePage recipes={recipes} />}/>
      </Route>
    </Routes>
  );
}

export default App;