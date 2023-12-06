export const listChatsRoom = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Rooms {
        items {
          room {
            id
            users {
              items {
                user {
                  id
                  image
                  name
                }
              }
            }
            LastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`
