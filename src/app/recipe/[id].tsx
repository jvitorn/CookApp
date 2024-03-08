import { useEffect, useState } from "react"
import { FlatList, Image, Text, View, useColorScheme } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Redirect, router, useLocalSearchParams } from "expo-router"

import { services } from "@/services"

import { getStyles } from "./styles"
import { Step } from "@/components/Step"
import { Loading } from "@/components/Loading"
import IngredientsList from "@/components/IngredientsList"

export default function Recipes() {
  const colorScheme = useColorScheme();

  const styles = getStyles(String(colorScheme));

  const [isLoading, setIsLoading] = useState(true)
  const [recipe, setRecipe] = useState<RecipeSchema | null>(null)
  const [ingredients, setIngredients] = useState<IngredientsSchema[]>([])
  const [preparations, setPreparations] = useState<PreparationsSchema[]>([])

  const { id } = useLocalSearchParams<{ id: string }>()

  useEffect(() => {
    services.recipes
      .show(id)
      .then((response) => setRecipe(response))
      .finally(() => setIsLoading(false))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    services.ingredients
      .findByRecipeId(id)
      .then((response) => setIngredients(response))
  }, [])

  useEffect(() => {
    services.preparations
      .findByRecipeId(id)
      .then((response) => setPreparations(response))
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (!id || !recipe) {
    return <Redirect href="/" />
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <View style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons
            size={32}
            name="arrow-back"
            style={styles.icon}
            onPress={() => router.back()}
          />
          <View>
            <Text style={styles.name}>{recipe.name}</Text>
            <Text style={styles.time}>
              <MaterialIcons
                name="timer"
                size={20}
                
              />
              &nbsp;&nbsp;
              {recipe.minutes} minutos de preparo
            </Text>

          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.name}> Ingredientes </Text>
          <IngredientsList ingredients={ingredients} viewSelected={false} />
          <Text style={styles.preparation}>Modo de preparo</Text>

          <FlatList
            data={preparations}
            renderItem={({ item }) => (
              <Step step={item.step} description={item.description} />
            )}
            contentContainerStyle={{ gap: 6 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}
