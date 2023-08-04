import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import RecipeDescription from "./components/Description";
import RecipeIngredients from  "./components/Ingredients";
import RecipePhoto  from "./components/Photos";

export default function App() {
  return (
    <div className="App">
      <div>
      <div className="recipePhotoBlock" >
      < RecipePhoto />
      </div>
      </div>
      <div>
         <RecipeIngredients /> 
      <RecipeDescription />
   </div>
    </div>
  );
}
