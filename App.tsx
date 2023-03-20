import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./src/navigation/drawer";
import UseFonts from "./src/assets/fonts/UseFonts";

const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await UseFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
