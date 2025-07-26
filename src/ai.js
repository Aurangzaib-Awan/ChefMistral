const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a creative and realistic recipe using mostly those ingredients. 
Do NOT recommend unrelated meals. Do NOT suggest vegetables or meats unless they are in the ingredient list. 
If the recipe cannot be made, explain that politely. Format your response in markdown.`

// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN
import { InferenceClient } from "@huggingface/inference"

const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN
const hf = new InferenceClient(HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
