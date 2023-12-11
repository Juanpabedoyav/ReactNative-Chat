/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      Messages {
        items {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        roomID
        userID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      roomLastMessageId
      __typename
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      Messages {
        items {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        roomID
        userID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      roomLastMessageId
      __typename
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      Messages {
        items {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        roomID
        userID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      roomLastMessageId
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      text
      roomID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      text
      roomID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      text
      roomID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      status
      image
      Messages {
        items {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Rooms {
        items {
          id
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      status
      image
      Messages {
        items {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Rooms {
        items {
          id
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      status
      image
      Messages {
        items {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Rooms {
        items {
          id
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserRoom = /* GraphQL */ `
  mutation CreateUserRoom(
    $input: CreateUserRoomInput!
    $condition: ModelUserRoomConditionInput
  ) {
    createUserRoom(input: $input, condition: $condition) {
      id
      roomId
      userId
      room {
        id
        Messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        roomLastMessageId
        __typename
      }
      user {
        id
        name
        status
        image
        Messages {
          nextToken
          __typename
        }
        Rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserRoom = /* GraphQL */ `
  mutation UpdateUserRoom(
    $input: UpdateUserRoomInput!
    $condition: ModelUserRoomConditionInput
  ) {
    updateUserRoom(input: $input, condition: $condition) {
      id
      roomId
      userId
      room {
        id
        Messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        roomLastMessageId
        __typename
      }
      user {
        id
        name
        status
        image
        Messages {
          nextToken
          __typename
        }
        Rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserRoom = /* GraphQL */ `
  mutation DeleteUserRoom(
    $input: DeleteUserRoomInput!
    $condition: ModelUserRoomConditionInput
  ) {
    deleteUserRoom(input: $input, condition: $condition) {
      id
      roomId
      userId
      room {
        id
        Messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          roomID
          userID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        roomLastMessageId
        __typename
      }
      user {
        id
        name
        status
        image
        Messages {
          nextToken
          __typename
        }
        Rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
