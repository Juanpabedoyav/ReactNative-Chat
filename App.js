import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { Navigator } from "./src/navigation"
import { withAuthenticator } from "aws-amplify-react-native"
import { Amplify } from "aws-amplify"
import configAws from "./src/aws-exports"

Amplify.configure({ ...configAws, Analytics: { disabled: true } })
function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
})

export default withAuthenticator(App)
