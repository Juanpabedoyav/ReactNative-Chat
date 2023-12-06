import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
export default function ChatList({ chat }) {
  const navigation = useNavigation()
  const user = chat?.users.items[0].user
  console.log(user)
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Chat", { id: chat.id, name: user?.name })
      }
      style={styles.container}
    >
      <Image
        source={{
          uri: user?.image
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {user?.name}
          </Text>
          <Text style={styles.subtitle}>
            {dayjs(chat.lastMessage?.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>
          {chat.lastMessage?.text}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    marginLeft: 10
  },
  row: {
    flexDirection: "row",
    marginBottom: 5
  },
  name: {
    flex: 1,
    fontWeight: "bold"
  },
  subtitle: {
    color: "gray"
  },
  image: {
    width: 66,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 50
  }
})
