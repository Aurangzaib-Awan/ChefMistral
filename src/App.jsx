import Header from "./components/Header";
// import Main from "./components/Main";
import Recipe from "./components/Recipe"
import IngredientList from "./components/IngredientList";
import React from "react";
import {getRecipeFromMistral} from "./ai"

export default function App(){

  //this is for ingredients list
  const [ingredients,setIngredients]=React.useState([])
  const ingArr=ingredients.map((ingredient)=>{
    return(<li key={ingredient}>{ingredient}</li>)
        })
  function sendData(formData)
  {
    const newIngredient=formData.get("ingredient")
    setIngredients(preIngredinets=>[...preIngredinets,newIngredient])

  }
  //this is for api calls
  const [getRecipe,setgetRecipe]=React.useState("")
  async function handleGetRecipeAi() {
  try {
    const recipe = await getRecipeFromMistral(ingredients)
    setgetRecipe(recipe)
    setRecipeShown(true)
    console.log(recipe) // will now print the actual recipe
  } catch (err) {
    console.error("Failed to get recipe:", err)
  }
}

    const [recipeShown,setRecipeShown]=React.useState(false)
    function showRecipe()
    {
      setRecipeShown(preRecipeShown=>!preRecipeShown)
    }

  return (
    <>
      <Header />
      <IngredientList  ingArr={ingArr} sendData={sendData} getRecipeFunction={handleGetRecipeAi}/>
      <Recipe recipeShown={recipeShown} recipe={getRecipe} />
    </>
  )
}