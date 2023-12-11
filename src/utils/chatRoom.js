import { API, graphqlOperation, Auth } from "aws-amplify"

export const getCurrentChatRoomWithUser = async (userId) => {
  const authUser = await Auth.currentAuthenticatedUser()

  //get all the chat rooms of user1
  const myChatRooms = await API.graphql({
    query: listChatsRoom,
    variables: { id: authUser.attributes.sub }
  })
  const rooms = myChatRooms.data?.getUser?.Rooms.items
  console.log(rooms, "rooms")
  // console.log(rooms[0].room.users.items[0].user.id)
  if (!rooms) {
    return
  }
  const currentChatRoom = rooms.find((roomItem) => {
    return roomItem.room.users.items.some(
      (userItem) => userItem.user.id === userId
    )
  })
  return currentChatRoom
}
export const listChatsRoom = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Rooms {
        items {
          id
          room {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`
