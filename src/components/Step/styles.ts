import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const getStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 22,
    },
    step: {
      fontSize: theme.fonts.size.body.sm,
      fontFamily: theme.fonts.family.bold,
      color:  colorScheme === "light" ? theme.colors.black : theme.colors.white,
    },
    description: {
      flex: 1,
      fontSize: theme.fonts.size.body.sm,
      fontFamily: theme.fonts.family.regular,
      color: theme.colors.gray_400,
    },
  })
}
