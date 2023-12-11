import { useState } from "react"
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import { Picker } from "@react-native-picker/picker"
import { API, graphqlOperation } from "aws-amplify"
import { createUser } from "../../graphql/mutations"
import { useNavigation, useRoute } from "@react-navigation/native"
import { TextInputComponent } from "react-native"
const AddContacts = () => {
  const navigation = useNavigation()

  const [name, setName] = useState("")
  // const [image, setImage] = useState(
  //   "https://res.cloudinary.com/dflxhnzgs/image/upload/v1697164014/lmyffzunwh2ybybknnvk.jpg"
  // )
  const [status, setStatus] = useState("")

  const onPress = async () => {
    await API.graphql({
      query: createUser,
      variables: {
        input: {
          name,
          status,
          image:
            "https://res.cloudinary.com/dflxhnzgs/image/upload/v1697164014/lmyffzunwh2ybybknnvk.jpg"
        }
      }
    })
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Contact</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder='Enter a name'
        />
        <Text style={styles.label}>Status</Text>
        <TextInput
          value={status}
          onChangeText={setStatus}
          style={styles.input}
          placeholder='Enter a status'
        />
        <Text style={styles.label}>Image URL</Text>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.imageText}>Choose Image</Text>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dflxhnzgs/image/upload/v1697164014/lmyffzunwh2ybybknnvk.jpg"
              }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.submit}>
          <Button color={"white"} onPress={onPress} title='Add Contact' />
        </View>
      </View>
    </View>
  )
}

export default AddContacts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "lightgray",
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  box: {
    width: "90%",
    height: "60%",
    borderRadius: 5,
    justifyContent: "center",
    padding: 20,
    margin: 10
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 5
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 5,
    marginTop: 10
  },
  submit: {
    width: "100%",
    margin: 5,
    marginTop: 20,
    backgroundColor: "purple",
    borderWidth: 1,
    borderRadius: 8
  },
  button: {
    position: "relative",
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  imageText: {
    position: "absolute",
    zIndex: 1,
    fontWeight: "bold"
  },
  image: {
    height: 50,
    borderRadius: 75
  }
})
