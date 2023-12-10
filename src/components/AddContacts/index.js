import React, { useEffect, useState } from "react"
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import { API, graphqlOperation } from "aws-amplify"
import { createUser } from "../../graphql/mutations"
import { useNavigation, useRoute } from "@react-navigation/native"
const AddContacts = () => {
  const navigation = useNavigation()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

  const onPress = async () => {
    const newContact = {
      name,
      phone,
      email
    }
    // const createContact = await API.graphql({
    //   query: createContact,
    //   variables: {
    //     input: {
    //       newContact
    //     }
    //   }
    // })
    console.log(newContact)
    navigation.goBack()
    console.log("Button Pressed")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Contacts</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder='Enter a name'
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          placeholder='Enter a phone number'
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder='Enter an email'
        />
        <Text style={styles.label}>Image URL</Text>
        <TouchableOpacity>
          <View style={styles.button}>
            <Image source={{ uri: "" }} style={styles.image} />
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
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 50,
    borderRadius: 75
  }
})
