import { Text, View,useColorScheme } from "react-native"

import { getStyles } from "./styles"

type Props = {
  step: number
  description: string
}

export function Step({ step, description }: Props) {
  const colorScheme = useColorScheme();

  const styles = getStyles(String(colorScheme));
  return (
    <View style={styles.container}>
      <Text style={styles.step}>{step}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  )
}
