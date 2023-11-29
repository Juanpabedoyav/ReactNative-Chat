import { Text, View, Image, StyleSheet } from "react-native"

export default function ChatList() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg"
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            Lukas
          </Text>
          <Text style={styles.subtitle}>7:00</Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>
          Hey, how are you doing?
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
    marginLeft: 15
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
    width: 70,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 50
  }
})
