import { Text, View, StyleSheet } from "react-native";

const Meditation = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meditation screen!!</Text>
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

export default Meditation;
