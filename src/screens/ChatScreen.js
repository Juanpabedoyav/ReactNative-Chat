import { Messages } from "../components/Messages"
import { useRoute, useNavigation } from "@react-navigation/native"
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
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
  const [chatRoom, setChatRoom] = useState([])

  useEffect(() => {
    API.graphql({
      query: getRoom,
      variables: { id: roomID }
    }).then((result) => {
      setChatRoom(result.data?.getRoom)
    })
  }, [])

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [route.params.name])

  if (!roomID) {
    return <ActivityIndicator />
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.bg}
      keyboardVerticalOffset={Platform.OS == "ios" ? 60 : 90}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={chatRoom.Messages?.items}
          renderItem={({ item }) => <Messages message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox room={chatRoom} />
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
