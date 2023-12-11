import { FlatList } from "react-native"
import ContactList from "../components/ContactList"
import { useEffect, useState } from "react"
import { API } from "aws-amplify"
import { listUsers } from "../graphql/queries"
const ContactsScreen = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getContacts()
  }, [])

  async function getContacts() {
    const result = await API.graphql({
      query: listUsers
    })
    setContacts(result.data.listUsers.items)
  }

  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => <ContactList user={item} />}
    >
      <ContactList />
    </FlatList>
  )
}

export default ContactsScreen
