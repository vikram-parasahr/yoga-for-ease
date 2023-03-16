import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    popBlack: require("./Poppins-Black.ttf"),
    popExtraLight: require("./Poppins-ExtraLight.ttf"),
    popRegular: require("./Poppins-Regular.ttf"),
    popSemiBold: require("./Poppins-SemiBold.ttf"),
  });
