type IngredientsSchema = {
    id: string,
    name: string,
    image: string
}


type PreparationsSchema = {
    id: string
    recipe_id: string
    description: string
    step: number
}

type RecipeSchema = {
    id: string
    name: string
    image: string
    minutes: number
}
