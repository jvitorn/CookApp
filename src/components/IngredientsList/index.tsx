import { useState } from "react"
import { ScrollView, View, Alert } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles"


import { Selected } from "../selected";
import { Ingredient } from "../Ingredient";
import { services } from "@/services";

interface IngredientsListProps {
    ingredients: IngredientsSchema[];
    viewSelected?: boolean
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients, viewSelected = true }) => {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) return setSelected((state) => state.filter(i => i !== value))

        setSelected((state) => [...state, value])
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) },

        ])
    }

    function handleSearch() {
        router.navigate("/recipes/" + selected)
    }

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {
                    ingredients.map((item, idx) => (
                        <Ingredient
                            key={item.id}
                            name={item.name}
                            image={`${services.storage.imagePath}/${item.image}`}
                            selected={(viewSelected ? selected.includes(item.id) : false)}
                            onPress={() => handleToggleSelected(item.id)} />

                    ))
                }
            </ScrollView>
            <View>
                {
                    (selected.length > 0 && viewSelected) && (
                        <Selected quantity={Number(selected.length)} onClear={handleClearSelected} onSearch={handleSearch} />
                    )
                }
            </View>
        </View>

    )
}

export default IngredientsList;