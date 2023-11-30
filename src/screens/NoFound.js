import { Image, StyleSheet, Text, View } from "react-native"

export const NoFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404</Text>
      <Image
        source={{
          uri: "https://i.stack.imgur.com/y9DpT.jpg"
        }}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "gray"
  }
})
