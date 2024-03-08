import { supabase } from "./supabase"

async function findByIds(ids: string[]) {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .in("id", ids)
    .order("name")
    .returns<IngredientsSchema[]>()

  return data ?? []
}

async function findByRecipeId(id: string) {
  const { data } = await supabase
    .from("recipes_ingredients")
    .select("ingredients (id, name, image)")
    .eq("recipe_id", id)
    .returns<{ ingredients: IngredientsSchema }[]>()

  return data ? data.map((item) => item.ingredients) : []
}

async function findAll() {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .order("name")
    .returns<IngredientsSchema[]>()

  return data ?? []
}

export { findAll, findByIds, findByRecipeId }
