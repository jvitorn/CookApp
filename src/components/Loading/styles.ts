import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const getStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === "light" ? theme.colors.white : theme.colors.black,
    },
  })
}
