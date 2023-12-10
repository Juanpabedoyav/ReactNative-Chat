import { Button, StyleSheet, View } from "react-native"
import { Auth } from "aws-amplify"
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Button title='Log Out' color={"white"} onPress={() => Auth.signOut()} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 10,
    padding: 5,
    backgroundColor: "purple",
    borderWidth: 1,
    borderRadius: 8
  }
})
