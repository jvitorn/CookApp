import { ActivityIndicator, useColorScheme } from "react-native"

import { getStyles } from "./styles"
import { theme } from "@/theme"

export function Loading() {
  const colorScheme = useColorScheme();

  const styles = getStyles(String(colorScheme));
  return (
    <ActivityIndicator
      style={styles.container}
      color={colorScheme === "light" ? theme.colors.green_600 : theme.colors.blue_100}
    />
  )
}
