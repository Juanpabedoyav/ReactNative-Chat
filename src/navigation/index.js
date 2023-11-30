import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ChatScreen from "../screens/ChatScreen"
import ChatsScreen from "../screens/ChatsScreen"
import TabNavigator from "./TabNavigator"
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
