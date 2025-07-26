import React from "react";

export default function IngredientList(props)
{
    return(
        <>
        <main>
        <form action={props.sendData} className="ingredients-section">
            <input id="ingredient" name="ingredient" type="text" placeholder="e.g Eggs" aria-label="Add ingredients" />
            <button>+ Add Ingredient</button>
        </form>
        <div className="ingredients-list">
            <h1 className="heading">Ingredients on hand : {props.ingArr.length <3 && <span>( ~min 3 )</span>}</h1>
            {props.ingArr.length==0 && <p>Enter ingredients and they'll pop right here</p>}
            <ul>
                {props.ingArr}
            </ul>
            </div>
           {props.ingArr.length > 2  &&<div className="call-to-action">
                <div className="action-text">
                <h3>Ready For a recipe</h3>
                <span>Generate a recipe from your list of ingredients</span>
                </div>
                <button onClick={props.getRecipeFunction} className="action-button">Get a recipe !</button>
            </div>}
            </main>
        </>
    )
}