import { StyleSheet, Text, View } from "react-native"
import dayjs from "dayjs"
import { Auth } from "aws-amplify"
import relativeTime from "dayjs/plugin/relativeTime"
import { useEffect, useState } from "react"
dayjs.extend(relativeTime)
export const Messages = ({ message }) => {
  const [isMe, setIsMe] = useState(false)
  useEffect(() => {
    myMessage()
  }, [])

  const myMessage = async () => {
    const authUser = await Auth.currentAuthenticatedUser()
    setIsMe(message.userID === authUser.attributes.sub)
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? "#DCF8" : "white",
          alignSelf: isMe ? "flex-end" : "flex-start"
        }
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: "70%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  time: {
    alignSelf: "flex-end",
    color: "gray"
  }
})
