import React from "react";
import style from "./recipe.module.css"


const Recipes = ({title, calories, image, ingredients}) =>{
 return(
 <div className={style.recipe}>
     <h1>{title}</h1>
     <ul className={style.ul}>
       {ingredients.map(ingredient =>(
       <li>{ingredient.text}</li>
       ))}
     </ul>
     <p>Calories: {calories.toFixed(1)}</p>
     <img src={image} alt="" className={style.image}/>

 </div>
 )
}
export default Recipes
