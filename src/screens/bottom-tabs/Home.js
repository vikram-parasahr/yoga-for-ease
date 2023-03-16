import { Text, View, StyleSheet } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Home screen!!</Text>
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

export default Home;
