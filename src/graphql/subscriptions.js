/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateUserRoom = /* GraphQL */ `
  subscription OnCreateUserRoom($filter: ModelSubscriptionUserRoomFilterInput) {
    onCreateUserRoom(filter: $filter) {
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
export const onUpdateUserRoom = /* GraphQL */ `
  subscription OnUpdateUserRoom($filter: ModelSubscriptionUserRoomFilterInput) {
    onUpdateUserRoom(filter: $filter) {
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
export const onDeleteUserRoom = /* GraphQL */ `
  subscription OnDeleteUserRoom($filter: ModelSubscriptionUserRoomFilterInput) {
    onDeleteUserRoom(filter: $filter) {
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
