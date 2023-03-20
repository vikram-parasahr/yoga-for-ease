import { Text, View, StyleSheet } from "react-native";

const AllYogas = (props) => {
  return (
    <View style={styles.screen}>
      <Text>AllYogas screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AllYogas;
