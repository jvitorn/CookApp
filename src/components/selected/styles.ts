import { StyleSheet } from "react-native";
import { theme } from "@/theme"


export const getStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colorScheme === "light" ? theme.colors.black : theme.colors.white,
      padding: 24,
      borderRadius: theme.borderRadius.lg,
      position: "relative",
      bottom: 5,
      width: "100%",
      alignSelf: "center",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 15,
    },
    label: {
      color: colorScheme === "light" ? theme.colors.white : theme.colors.black,
      fontSize: theme.fonts.size.body.sm,
      fontFamily: theme.fonts.family.regular,
    },
  })
}