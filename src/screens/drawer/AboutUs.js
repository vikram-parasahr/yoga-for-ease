import { Text, View, StyleSheet } from "react-native";

const AboutUs= (props) => {
  return (
    <View style={styles.screen}>
      <Text>AboutUs screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AboutUs;
