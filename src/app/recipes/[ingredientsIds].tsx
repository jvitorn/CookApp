import { useEffect, useState } from "react";
import { View, Text, FlatList, useColorScheme } from "react-native";
import { router, useLocalSearchParams } from "expo-router"

import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Recipe } from "@/components/Recipe";
import { Loading } from "@/components/Loading"
import IngredientsList from "@/components/IngredientsList";
// Services
import { services } from "@/services";
//Style
import { getStyles } from "./styles";

export default function Recipes() {
    const colorScheme = useColorScheme();

    const styles = getStyles(String(colorScheme));

    const [ingredients, setIngredients] = useState<IngredientsSchema[]>([])
    const [recipes, setRecipes] = useState<RecipeSchema[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const params = useLocalSearchParams<{ ingredientsIds: string }>()

    const ingredientsIds = params.ingredientsIds.split(",")

    useEffect(() => {
        services.ingredients.findByIds(ingredientsIds)
            .then(setIngredients)
            .finally(() => setIsLoading(false))
    }, [])
    useEffect(() => {
        services.recipes.findByIngredientsIds(ingredientsIds)
            .then(setRecipes)
            .finally(() => setIsLoading(false))
    }, [])


    if (isLoading) {
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons style={styles.icon} name="arrow-back" size={32} onPress={() => router.back()} />

                <Text style={styles.title}> Ingredientes </Text>
                <IngredientsList ingredients={ingredients} viewSelected={false} />

            </View>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Recipe
                        recipe={item}
                        onPress={() => router.navigate("/recipe/" + item.id)}
                    />
                )}
                style={styles.recipes}
                contentContainerStyle={styles.recipesContent}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ gap: 16 }}
                numColumns={2}
                ListEmptyComponent={() => (
                    <Text style={styles.empty}>
                        Nenhuma receita encontrada. Escolha outros ingredientes.
                    </Text>
                )}
            />


        </View>
    )
}