import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/bottom-tabs/Home";
import Workouts from "../screens/bottom-tabs/Workouts";
import Meditation from "../screens/bottom-tabs/Meditation";
import Settings from "../screens/bottom-tabs/Settings";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          width: "85%",
          left: "7.5%",
          borderRadius: 99,
          backgroundColor: "#000",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="home-filled"
                size={24}
                color={focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={Workouts}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="human-female-dance"
                size={24}
                color={focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Meditation"
        component={Meditation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="meditation"
                size={32}
                color={focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
