import { Button, StyleSheet, Text, View } from "react-native"
import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"
const SettingsScreen = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser()
      setCurrentUser(userInfo)
    }
    fetchUser()
  }, [])
  console.log(currentUser)
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>{currentUser?.attributes.email}</Text>

      <View style={styles.logOut}>
        <Button
          title='Log Out'
          color={"white"}
          onPress={() => Auth.signOut()}
        />
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logOut: {
    position: "absolute",
    bottom: 10,
    left: 10,
    padding: 5,
    backgroundColor: "purple",
    borderWidth: 1,
    borderRadius: 8
  }
})
