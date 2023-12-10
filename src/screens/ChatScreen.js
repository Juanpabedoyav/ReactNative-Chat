import { Messages } from "../components/Messages"
import { useRoute, useNavigation } from "@react-navigation/native"
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from "react-native"
import bg from "../../assets/images/BG.png"
import { InputBox } from "../components/InputBox"
import { useEffect, useState } from "react"
import { API } from "aws-amplify"
import { getRoom, listMessages } from "../graphql/queries"
const ChatScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const roomID = route.params.id
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await API.graphql({
        query: listMessages
        // variables: {
        //   filter: {
        //     roomID: { eq: roomID }
        //   }
        // }
      })
      setMessageList(messages.data.listMessages.items)
    }
    fetchMessages()
  }, [])

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [route.params.name])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.bg}
      keyboardVerticalOffset={Platform.OS == "ios" ? 60 : 90}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messageList}
          renderItem={({ item }) => <Messages message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox roomID={roomID} />
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  list: {
    padding: 10
  }
})
