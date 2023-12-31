import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ChatScreen from "../screens/ChatScreen"
import TabNavigator from "./TabNavigator"
import Contacts from "../screens/ContactsScreen"
import AddContacts from "../components/AddContacts"
const Stack = createNativeStackNavigator()

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "whitesmoke"
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Chat' component={ChatScreen} />
        <Stack.Screen name='Contacts' component={Contacts} />
        <Stack.Screen name='Add Contacts' component={AddContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
