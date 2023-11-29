import { FlatList, View } from "react-native"
import ChatList from "../ChatList"
import chats from "../../../assets/data/chats.json"
const ChatsScreen = () => {
  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatList chat={item} />}
      />
    </View>
  )
}

export default ChatsScreen
