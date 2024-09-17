import {RECIPE} from './recipe-data.js'
import RecipeInfo from './RecipeInfo.js'
import RecipeImg from './RecipeImg.js'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import Card from './Card.js'
import './styles.css'

// HW: Apply CSS styling, dont forget to import the style sheet in the other component files!
// Figma designs here: https://www.figma.com/file/oPToKD0BEwCUQFt3OjCDw6/RecipeCardStarter?node-id=2%3A134&mode=dev
// Or if youre feeling fancy, design your own!
export default function RecipeCard() {
  return (
    
    <div>
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className="card_text">
        <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        <div className="card_lists">
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
      </div>
    </Card>
    </div>
  )
}
