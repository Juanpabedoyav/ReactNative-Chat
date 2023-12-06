export const listChatsRoom = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Rooms {
        items {
          id
          room {
            LastMessage {
              id
              text
              createdAt
            }
            users {
              items {
                user {
                  id
                  image
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
