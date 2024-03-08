import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const getStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: theme.colors.gray_200,
      borderRadius: theme.borderRadius.full,
      paddingHorizontal: 14,
      height: 42,
      alignItems: "center",
      flexDirection: "row",
      gap: 3,

    },
    image: {
      width: 16,
      height: 16,
    },
    title: {
      fontSize: theme.fonts.size.body.sm,
      fontFamily: theme.fonts.family.medium,
      color: colorScheme === "light" ? theme.colors.black : theme.colors.white,
    },
    selected: {
      borderWidth: 2,
      borderColor: colorScheme === "light" ? theme.colors.green_600 : theme.colors.blue_100,
      backgroundColor: theme.colors.green_100,
      color: theme.colors.black,
    },
    textSelected: {
      color: theme.colors.black,
    }
  })
}