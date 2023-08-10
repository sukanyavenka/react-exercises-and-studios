import './styling.css';
import recipeData from "./recipe.json";

function AuthorInfo() {
  const recipeAuthor = recipeData.map((data) => (
    <div key={data.name}>{data.author}</div>
 ));
 const recipeAuthorImage = recipeData.map((data) => (
  <div key={data.name}>
     <img src={data.authorImage} alt={data.author} className="authorImage" />
</div>
 ));

const recipeWebsite = recipeData.map((data) => (
  <a key={data.name} href={data.url}>
    {data.url}
  </a>
));
   return(
    <div>
    {recipeAuthor}
    {recipeAuthorImage}
      {recipeWebsite}
    </div>
   )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 