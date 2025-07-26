import React from "react"
import ReactMarkdown from "react-markdown"

export default function Recipe(props)
{

    return(
        <>
        {props.recipeShown && <section>
        <h2 className="recipe-heading">Chef Mistral Recommends:</h2>
        <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown >{props.recipe}</ReactMarkdown>
        </article>
        </section>}
        </>
    )
}