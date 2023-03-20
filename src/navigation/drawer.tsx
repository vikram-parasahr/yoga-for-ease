import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomTabs from "./BottomTabs";
import AboutUs from "../screens/drawer/AboutUs";
import AllYogas from "../screens/drawer/AllYogas";

const drawer = createDrawerNavigator();
const StatusBarHeight = StatusBar.currentHeight;

const Drawer = () => {
  const [themeIcon, setThemeIcon] = useState("sunny");
  return (
    <drawer.Navigator
      initialRouteName="Home "
      screenOptions={{
        header: ({ navigation }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
                alignItems: "center",
                height: 24,
                marginTop: StatusBarHeight + 5,
                marginHorizontal: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Image
                  source={require("../assets/icons/hamNav.png")}
                  style={{ height: 20, width: 20 }}
                />
              </TouchableOpacity>
              <Ionicons
                name={themeIcon}
                size={themeIcon === "sunny" ? 24 : 18}
                color="black"
                onPress={() => {
                  if (themeIcon === "sunny") {
                    setThemeIcon("moon");
                  } else {
                    setThemeIcon("sunny");
                  }
                }}
              />
            </View>
          );
        },
      }}
    >
      <drawer.Screen name="Home " component={BottomTabs} />
      <drawer.Screen name="Library" component={AllYogas} />
      <drawer.Screen name="About Us" component={AboutUs} />
    </drawer.Navigator>
  );
};

export default Drawer;
