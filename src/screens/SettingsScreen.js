import { Button, StyleSheet, View } from "react-native"
import { Auth } from "aws-amplify"
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Button title='Log Out' onPress={() => Auth.signOut()} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
})
