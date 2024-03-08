import { View, Text,useColorScheme } from "react-native"
import { useEffect, useState } from "react"

import { getStyles } from "./styles";
import { Loading } from "@/components/Loading"
import IngredientsList from "@/components/IngredientsList"

import { services } from "@/services"


export default function Index() {
    const colorScheme = useColorScheme();

  const styles = getStyles(String(colorScheme));

    const [ingredients, setIngredients] = useState<IngredientsSchema[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        services.ingredients.findAll()
        .then(setIngredients)
        .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Loading />
      }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos ingredientes que você escolheu
            </Text>
            <IngredientsList ingredients={ingredients}/>

        </View>
    )
}