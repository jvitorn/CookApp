import { StyleSheet } from "react-native"

import { theme } from "@/theme"

export const getStyles = (colorScheme: string) => {
  return StyleSheet.create({
    button: {
      height: 48,
      width: "100%",
      backgroundColor:  colorScheme === "light" ? theme.colors.green_600 : theme.colors.blue_100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.borderRadius.sm,
    },
    text: {
      color: colorScheme === "light" ? theme.colors.white : theme.colors.gray_700_dark,
      fontSize: theme.fonts.size.body.sm,
      fontFamily: theme.fonts.family.medium,
    },
  })
}
