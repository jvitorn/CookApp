import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const getStyles = (colorScheme: string) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: colorScheme === "light" ? theme.colors.white : theme.colors.black,
            
        },
        title: {
            fontSize: theme.fonts.size.heading.xl,
            lineHeight: 44,
            marginTop: 42,
            fontFamily: theme.fonts.family.bold,
            color: colorScheme === "light" ? theme.colors.black : theme.colors.white,
        },
        subtitle: {
            fontFamily: theme.fonts.family.regular,
            color: colorScheme === "light" ? theme.colors.black : theme.colors.gray_900_dark,
        },
        message: {
            fontSize: theme.fonts.size.body.md,
            fontFamily: theme.fonts.family.regular,
            marginTop: 12,
            marginBottom: 20,
            color: colorScheme === "light" ? theme.colors.gray_400 : theme.colors.gray_700_dark,
        },
    });
};