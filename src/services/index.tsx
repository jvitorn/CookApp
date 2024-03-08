import * as recipes from "./recipes.service"
import * as ingredients from "./ingredients.service"
import * as preparations from "./preparations.service"

export const services = {
    recipes,
    ingredients,
    preparations,

    storage: {
        imagePath:"https://vbtsobdcawfvpwsapyil.supabase.co/storage/v1/object/public/ingredients",
        
    }
}
