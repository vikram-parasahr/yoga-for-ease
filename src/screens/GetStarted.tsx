import { Text, View, StyleSheet } from "react-native";

const GetStarted = (props) => {
  return (
    <View style={styles.screen}>
      <Text>GetStartedScreen screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GetStarted;
