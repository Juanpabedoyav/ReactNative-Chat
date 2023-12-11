import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NoFound } from "../screens/NoFound"
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons"
import ChatsScreen from "../screens/ChatsScreen"
import SettingsScreen from "../screens/SettingsScreen"
import ContactsScreen from "../screens/ContactsScreen"
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
          )
        })}
      />
      <Tab.Screen
        name='Contacts'
        component={ContactsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='contacts' size={size} color={color} />
          ),
          headerRight: () => (
            <AntDesign
              onPress={() => navigation.navigate("Add Contacts")}
              name='adduser'
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
        name='Camera'
        component={NoFound}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='camera-outline' size={size} color={color} />
          )
        }}
      /> */}
      <Tab.Screen
        name='Profile'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='profile' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator
