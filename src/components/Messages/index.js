import { StyleSheet, Text, View } from "react-native"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
export const Messages = ({ message }) => {
  const myMessage = () => {
    return message.user.id === "u1"
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: myMessage() ? "#DCF8C5" : "white",
          alignSelf: myMessage() ? "flex-end" : "flex-start"
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
