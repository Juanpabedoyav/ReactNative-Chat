import { useState } from "react"
import { StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { API, Auth } from "aws-amplify"
import { createMessage } from "../../graphql/mutations"
export const InputBox = ({ roomID }) => {
  const [newMessage, setNewMessage] = useState("")

  const onSend = async () => {
    console.warn("sending:", newMessage)
    const authUser = await Auth.currentAuthenticatedUser()
    const message = {
      roomID,
      userID: authUser.attributes.sub,
      text: newMessage
    }

    await API.graphql({
      query: createMessage,
      variables: { input: message }
    })

    setNewMessage("")
  }
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name='plus' size={24} color='purple' />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder='type your message ...'
      />
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name='send'
        size={24}
        color='white'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "whitesmoke",
    paddingHorizontal: 10
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  send: {
    backgroundColor: "purple",
    padding: 6,
    borderRadius: 18,
    overflow: "hidden"
  }
})
