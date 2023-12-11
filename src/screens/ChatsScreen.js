import { FlatList, View } from "react-native"
import ChatList from "../components/ChatList"
import { useEffect, useState } from "react"
import { listChatsRoom } from "./ChatsScreen/queries"
import { API, Auth, graphqlOperation } from "aws-amplify"
// import { getUser } from "../graphql/queries"
const ChatsScreen = () => {
  const [chatsRoom, setChatsRoom] = useState([])

  useEffect(() => {
    const fetchChats = async () => {
      const authUser = await Auth.currentAuthenticatedUser()
      const response = await API.graphql(
        graphqlOperation(listChatsRoom, { id: authUser.attributes.sub })
      )
      setChatsRoom(response.data.getUser?.Rooms?.items)
    }
    fetchChats()
  }, [])

  return (
    <View>
      <FlatList
        data={chatsRoom}
        renderItem={({ item }) => (
          <ChatList
            chat={item.room}
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
