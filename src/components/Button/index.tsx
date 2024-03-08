import { Text, TouchableOpacity, TouchableOpacityProps, useColorScheme } from "react-native"

import { getStyles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  const colorScheme = useColorScheme();

  const styles = getStyles(String(colorScheme));

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button]} {...rest}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  )
}
