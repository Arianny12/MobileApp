import RecipeCard from './components/RecipeCard'
import {RECIPE} from './components/RecipeCard/recipe-data'
function App() {
  return (
    <>
      <RecipeCard recipe={RECIPE}/>
    </>
  );
}

export default App
