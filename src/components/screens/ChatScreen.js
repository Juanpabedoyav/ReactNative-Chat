import { Messages } from "../Messages"
import { ImageBackground, StyleSheet, FlatList } from "react-native"
import bg from "../../../assets/images/BG.png"
import messagesData from "../../../assets/data/messages"
const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messagesData}
        renderItem={({ item }) => <Messages message={item} />}
        style={styles.list}
        inverted
      />
    </ImageBackground>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  list: {}
})
