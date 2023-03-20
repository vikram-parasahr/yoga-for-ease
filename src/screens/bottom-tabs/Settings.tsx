import { Text, View, StyleSheet } from "react-native";

const Settings = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Settings screen!!</Text>
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

export default Settings;
