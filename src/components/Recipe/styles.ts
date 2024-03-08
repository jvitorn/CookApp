import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const getStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: 192,
      borderRadius: theme.borderRadius.lg,
      overflow: "hidden",
    },
    image: {
      flex: 1,
    },
    linear: {
      flex: 1,
      padding: 12,
      justifyContent: "flex-end",
    },
    title: {
      color: theme.colors.white,
      fontSize: theme.fonts.size.body.sm,
      fontFamily: theme.fonts.family.bold,
    },
    minutes: {
      color: colorScheme === "light" ? theme.colors.yellow_500 : theme.colors.blue_100,
      fontSize: theme.fonts.size.body.xs,
      fontFamily: theme.fonts.family.regular,
    },
  })
}