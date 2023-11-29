import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import ChatsScreen from "./src/components/screens/ChatsScreen"
export default function App() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
})
