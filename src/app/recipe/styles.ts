import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const getStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 90,
      backgroundColor: colorScheme === "light" ? theme.colors.white : theme.colors.black,
    },
    image: {
      width: "100%",
      height: 192,
      backgroundColor: theme.colors.gray_300,
    },
    body: {
      borderTopStartRadius: theme.borderRadius.lg,
      borderTopEndRadius: theme.borderRadius.lg,
      backgroundColor: colorScheme === "light" ? theme.colors.white : theme.colors.black,
      marginBottom: 20,
      padding: 20,
    },
    header: {

    },
    content: {

      marginBottom: 90,
    },
    name: {
      fontSize: theme.fonts.size.heading.md,
      fontFamily: theme.fonts.family.bold,
      marginTop: 10,
      color: colorScheme === "light" ? theme.colors.black : theme.colors.white
    },
    preparation: {
      fontSize: theme.fonts.size.heading.sm,
      fontFamily: theme.fonts.family.medium,
      marginBottom: 10,
      color: colorScheme === "light" ? theme.colors.black : theme.colors.white
    },
    time: {
      fontSize: theme.fonts.size.body.sm,
      fontFamily: theme.fonts.family.regular,
      color: theme.colors.gray_400,
    },
    title: {
      fontSize: theme.fonts.size.heading.md,
      fontFamily: theme.fonts.family.bold,
      marginTop: 22,
      color: colorScheme === "light" ? theme.colors.black : theme.colors.white
    },
    textContent: {
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      color: colorScheme === "light" ? theme.colors.black : theme.colors.white
    }
  })
}
