import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    Thin: require("./Poppins-Thin.ttf"),
    ThinItalic: require("./Poppins-ThinItalic.ttf"),
    ExtraLight: require("./Poppins-ExtraLight.ttf"),
    ExtraLightItalic: require("./Poppins-ExtraLightItalic.ttf"),
    Light: require("./Poppins-Light.ttf"),
    LightItalic: require("./Poppins-LightItalic.ttf"),
    Regular: require("./Poppins-Regular.ttf"),
    Italic: require("./Poppins-Italic.ttf"),
    Medium: require("./Poppins-Medium.ttf"),
    MediumItalic: require("./Poppins-MediumItalic.ttf"),
    SemiBold: require("./Poppins-SemiBold.ttf"),
    Bold: require("./Poppins-Bold.ttf"),
    BoldItalic: require("./Poppins-BoldItalic.ttf"),
    ExtraBold: require("./Poppins-ExtraBold.ttf"),
    ExtraBoldItalic: require("./Poppins-ExtraBoldItalic.ttf"),
    Black: require("./Poppins-Black.ttf"),
    BlackItalic: require("./Poppins-BlackItalic.ttf"),
  });
