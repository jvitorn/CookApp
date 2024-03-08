import { View, Text, useColorScheme } from "react-native"
import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated"
import { MaterialIcons } from "@expo/vector-icons"


import { getStyles } from "./styles"
import { theme } from "@/theme"

import { Button } from "../Button"


type Props = {
    quantity: number
    onClear: () => void
    onSearch: () => void
}
export function Selected({ quantity, onClear, onSearch }: Props) {
    const colorScheme = useColorScheme();

    const styles = getStyles(String(colorScheme));
    return (
        // View animada
        <Animated.View style={styles.container}
            entering={SlideInDown.duration(500)}
            exiting={BounceOutDown}>
            <View style={styles.header}>
                <Text style={styles.label}> {quantity} Ingredientes Selecionados</Text>
                <MaterialIcons name="close"
                    size={24}
                    onPress={onClear}
                    color={theme.colors.gray_400} />

            </View>

            <Button title="Encontrar Receita" onPress={onSearch} />
        </Animated.View>
    )
}