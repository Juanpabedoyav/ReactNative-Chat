import { FlatList, View } from "react-native"
import ChatList from "../components/ChatList"
import chats from "../../assets/data/chats.json"
const ChatsScreen = () => {
  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatList
            chat={item}
            style={{
              backgroundColor: "white"
            }}
          />
        )}
      />
    </View>
  )
}

export default ChatsScreen
