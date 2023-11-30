import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)
export default function ContactList({ user }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.image
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {user.name}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>
          {user.status}
        </Text>
      </View>
    </View>
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
