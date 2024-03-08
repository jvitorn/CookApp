import { Text, Pressable, PressableProps, Image, useColorScheme } from "react-native"

import { getStyles } from "./styles"

export type IngredientsProps = {
  name: string
  image: string
  selected?: boolean
}

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) {

  const colorScheme = useColorScheme();

  const styles = getStyles(String(colorScheme));

  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={[styles.title, selected && styles.textSelected]}>{name}</Text>
    </Pressable>
  )
}