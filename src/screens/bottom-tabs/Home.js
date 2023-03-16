import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const StatusBarHeight = StatusBar.currentHeight;

const Home = (props) => {
  return (
    <ScrollView
      style={{
        marginTop: StatusBarHeight + 5,
        marginHorizontal: (StatusBarHeight * 3) / 5,
      }}
    >
      <Greetings />
    </ScrollView>
  );
};

const Greetings = () => {
  return (
    <View style={styles.greetingContainer}>
      <View>
        <Text style={styles.greetingText1}>Hi, Vicky</Text>
        <Text style={styles.greetingText2}>Let's check your activity</Text>
      </View>
      <Image
        source={require("../../assets/images/profile.jpg")}
        style={styles.greetingImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingText1: {
    fontSize: windowWidth / 15,
    fontFamily: "popSemiBold",
  },
  greetingText2: {
    fontSize: windowWidth / 24,
    fontFamily: "popRegular",
    color: "grey",
  },
  greetingImage: {
    width: windowWidth / 5,
    height: windowWidth / 5,
    borderRadius: windowWidth / 10,
  },
});

export default Home;
