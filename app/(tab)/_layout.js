import { Tabs } from "expo-router";
import Icon from "@expo/vector-icons/Feather";

export default function Layout() {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
