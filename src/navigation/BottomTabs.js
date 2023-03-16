import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/bottom-tabs/Home";
import Meditation from "../screens/bottom-tabs/Meditation";
import Profile from "../screens/bottom-tabs/Profile";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          width: "85%",
          left: "7.5%",
          borderRadius: 99,
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meditation" component={Meditation} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
