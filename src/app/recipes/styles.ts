import { StyleSheet } from "react-native";
import { theme } from "@/theme";
export const getStyles = (colorScheme: string) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 6,
            backgroundColor: colorScheme === "light" ? theme.colors.white : theme.colors.black,
        },
        header: {
            paddingHorizontal: 32,
            paddingTop: 32,
            marginBottom: 12
        },
        title: {
            fontSize: theme.fonts.size.heading.md,
            fontFamily: theme.fonts.family.bold,
            marginTop: 22,
            color: colorScheme === "light" ? theme.colors.black : theme.colors.white
        },
        content: {
            paddingHorizontal: 16,
            marginRight: 6
        },
        recipes: {
            padding: 16,
        },
        recipesContent: {
            gap: 8,
        },
        empty: {
            fontSize: theme.fonts.size.body.md,
            fontFamily: theme.fonts.family.regular,
            color: colorScheme === "light" ? theme.colors.gray_400 : theme.colors.gray_900_dark,
        },
        icon : {
            color: colorScheme === "light" ? theme.colors.black : theme.colors.white
        }
    })
}