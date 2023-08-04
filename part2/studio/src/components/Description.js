import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor()
{
    let authorLink ="https://www.averiecooks.com/indian-butter-chicken/";
    let authorPhoto ="src=https://www.averiecooks.com/wp-content/uploads/2023/01/cropped-averie-cooks-barcelona-crop-80x80.jpg";
    let authorName= "Averia Sunshine";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}
class RecipeDescription extends React.Component{
    render()
    {return(   
    <div> 
        <div>
           <h1>Indian Butter Chicken</h1>
           <p>This recipe for Indian butter chicken is as quick and easy as it gets! Here are the basic steps to making this simple butter chicken recipe: 

Heat a little butter in a skillet and sauté the onions until they begin to soften and caramelize.Add the diced chicken to the skillet and cook until almost done.
Then, stir in the spices and garlic. 
You can’t have butter chicken without plenty of butter! After adding the spices, you add (more) butter and heavy cream. It’s a full-fat dairy marriage in heaven that produces a buttery, creamy, full-bodied sauce that is butter chicken’s signature.
Let the sauce bubble away until thickened, then serve the butter chicken over rice and garnish with fresh cilantro.  

</p>
        </div>
        <RecipeAuthor />
     </div>);


    }
}
export default RecipeDescription;