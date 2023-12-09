import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NoFound } from "../screens/NoFound"
import { Ionicons, Entypo } from "@expo/vector-icons"
import ChatsScreen from "../screens/ChatsScreen"
import SettingsScreen from "../screens/SettingsScreen"
const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Chats'
        component={ChatsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbox-outline' size={size} color={color} />
          ),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate("Contacts")}
              name='new-message'
              size={20}
              color='black'
              style={{
                marginRight: 15
              }}
            />
          )
        })}
      />
      {/* <Tab.Screen
        name='Calls'
        component={NoFound}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='call-outline' size={size} color={color} />
          )
        }}
      /> */}
      {/* <Tab.Screen
        name='Camera'
        component={NoFound}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='camera-outline' size={size} color={color} />
          )
        }}
      /> */}
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator
