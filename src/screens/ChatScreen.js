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
import messagesData from "../../assets/data/messages"
import { InputBox } from "../components/InputBox"
import { useEffect } from "react"
const ChatScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const roomID = route.params.id

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
          data={messagesData}
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
