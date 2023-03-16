import { Text, View, StyleSheet } from "react-native";

const Profile = (props) => {
  return (
    <View style={styles.screen}>
      <Text>profile screen!!</Text>
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

export default Profile;
