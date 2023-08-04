import styles from './Ingredients.module.css';

function IngredientList() {
  let ingredients=['chicken','onion', 'tomato','butter', 'garlic',  'whipping cream', 'salt and pepper','rice',]
   return (
   <div>
   <h3>Recipe Ingredients</h3>
   <ul className = {styles.ingredientList}>
      <li>{ingredients[0]}</li>
      <li>{ingredients[1]}</li>
      <li>{ingredients[2]}</li>
      <li>{ingredients[3]}</li>
      <li>{ingredients[4]}</li>
      <li>{ingredients[5]}</li>
      <li>{ingredients[6]}</li>
      <li>{ingredients[7]}</li>
   </ul>
</div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 