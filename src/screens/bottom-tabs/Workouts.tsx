import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

const Workouts = (props) => {
  const programList = [
    //[name, exerciseCount,timeCount,cardColor,ImageURL]
    [
      "YogaA",
      10,
      20,
      "#fcb242",
      require("../../assets/images/Programs/yogaPose.png"),
    ],
    [
      "YogaB",
      10,
      20,
      "green",
      require("../../assets/images/Programs/yogaPose.png"),
    ],
    [
      "YogaC",
      10,
      20,
      "darkturquoise",
      require("../../assets/images/Programs/yogaPose.png"),
    ],
    [
      "YogaD",
      10,
      20,
      "pink",
      require("../../assets/images/Programs/yogaPose.png"),
    ],
  ];
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <Text
        style={{
          fontFamily: "Bold",
          fontSize: 30,
        }}
      >
        Workouts
      </Text>
      <ScrollView>
        {programList.map((item) => (
          <ProgramCard
            title={item[0]}
            exerciseCount={item[1]}
            timeCount={item[2]}
            ImageURL={item[4]}
            key={item[0]}
          />
        ))}
        <View style={{ height: 80 }}></View>
      </ScrollView>
    </View>
  );
};

const ProgramCard = ({
  title,
  exerciseCount,
  timeCount,
  cardColor,
  ImageURL,
}) => {
  return (
    <View style={programStyle.card}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginVertical: 40,
        }}
      >
        <Text style={programStyle.heading}>{title}</Text>
        <Text style={programStyle.subHeading}>{exerciseCount} Exercise</Text>
        <Text style={programStyle.subHeading}>{timeCount} minutes</Text>

        <View style={programStyle.progressBarBack}></View>
        <View style={programStyle.progressBarFore}></View>
      </View>
      <Image
        source={ImageURL}
        style={programStyle.image}
        resizeMode="contain"
      />
    </View>
  );
};
const programStyle = StyleSheet.create({
  card: {
    backgroundColor: "white",
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 190,
    marginVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    fontFamily: "Bold",
  },
  subHeading: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: "Medium",
    borderLeftColor: "grey",
  },
  image: {
    height: 190,
    flex: 1,
  },
  progressBarBack: {
    height: 8,
    backgroundColor: "#96bfff",
    borderRadius: 4,
  },
  progressBarFore: {
    width: "70%",
    height: 8,
    backgroundColor: "#96bfff",
    borderRadius: 4,
    backgroundColor: "#0062ff",
    position: "relative",
    bottom: 8,
  },
});
export default Workouts;
