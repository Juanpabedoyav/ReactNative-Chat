import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { Navigator } from "./src/navigation"
import { withAuthenticator } from "aws-amplify-react-native"
import { Amplify, Auth, API } from "aws-amplify"
import configAws from "./src/aws-exports"
import { useEffect } from "react"
import { getUser } from "./src/graphql/queries"
import { createUser } from "./src/graphql/mutations"
Amplify.configure({ ...configAws, Analytics: { disabled: true } })
function App() {
  useEffect(() => {
    const syncUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: false
      })
      const user = await API.graphql({
        query: getUser,
        variables: { id: authUser.attributes.sub }
      })
      if (user.data.getUser) {
        console.log("user exist", user.data.getUser)
        return
      }
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "Hey, I am using Messages App"
      }
      API.graphql({
        query: createUser,
        variables: { input: newUser }
      })
    }
    syncUser()
  }, [])

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
