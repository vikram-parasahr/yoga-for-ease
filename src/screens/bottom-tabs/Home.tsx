import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
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
    <ScrollView style={{ marginHorizontal: 15 }}>
      <View>
        <Greetings />
        <StatsBoard />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Bold",
            fontSize: 20,
            marginVertical: 20,
          }}
        >
          Discover new workouts
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {programList.map((item) => (
            <ProgramCard
              title={item[0]}
              exerciseCount={item[1]}
              timeCount={item[2]}
              cardColor={item[3]}
              ImageURL={item[4]}
              key={item[0]}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{ height: 80 }}></View>
    </ScrollView>
  );
};

const Greetings = () => {
  return (
    <View style={greetingStyles.Container}>
      <View>
        <Text style={greetingStyles.Text1}>Hi, Vicky</Text>
        <Text style={greetingStyles.Text2}>Let's check your activity</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "grey", borderRadius: 99 }}>
        <Image
          source={require("../../assets/images/profile.jpg")}
          style={greetingStyles.Image}
        />
      </View>
    </View>
  );
};
const greetingStyles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  Text1: {
    fontSize: 30,
    fontFamily: "Bold",
  },
  Text2: {
    fontSize: 15,
    fontFamily: "Regular",
    color: "grey",
  },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "white",
  },
});

const StatsBoard = () => {
  return (
    <View style={statsStyle.container}>
      {/* Big box */}
      <View
        style={{
          ...statsStyle.bigBox,
          ...statsStyle.shadow,
          ...statsStyle.box,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons name="arm-flex" size={30} color="gold" />
          <Text style={statsStyle.heading}>Finished</Text>
        </View>
        <Text style={{ fontSize: 60, fontWeight: 800 }}>12</Text>
        <Text style={statsStyle.subHeading}>Completed Workout</Text>
      </View>

      <View style={{ flex: 2 }}>
        {/* small box above */}
        <View
          style={{
            ...statsStyle.smallBox,
            ...statsStyle.shadow,
            ...statsStyle.box,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Ionicons name="bar-chart" size={24} color="green" />
            <Text style={statsStyle.heading}>In Progress</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 800 }}>12</Text>
            <Text style={statsStyle.subHeading}>Workout</Text>
          </View>
        </View>

        {/* small box below */}
        <View
          style={{
            ...statsStyle.smallBox,
            ...statsStyle.shadow,
            ...statsStyle.box,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Ionicons name="alarm" size={24} color="#708090" />
            <Text style={statsStyle.heading}>Time Spent</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 800 }}>12</Text>
            <Text style={statsStyle.subHeading}>Hours</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const statsStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontFamily: "SemiBold",
    marginHorizontal: 5,
  },
  subHeading: {
    fontSize: 18,
    fontFamily: "Medium",
    color: "grey",
    textAlign: "center",
  },
  box: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigBox: {
    flex: 1,
    height: 210,
  },
  smallBox: {
    height: 95,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

const ProgramCard = ({
  title,
  exerciseCount,
  timeCount,
  cardColor,
  ImageURL,
}) => {
  return (
    <View
      style={{
        ...programStyle.card,
        backgroundColor: cardColor,
      }}
    >
      <View style={{ width: (windowWidth * 2) / 6 - 10 }}>
        <Text style={programStyle.heading}>{title}</Text>
        <Text style={programStyle.subHeading}>{exerciseCount} Exercise</Text>
        <Text style={programStyle.subHeading}>{timeCount} minutes</Text>
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
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    width: (windowWidth * 2) / 3,
    height: 190,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  heading: {
    marginTop: 40,
    color: "white",
    fontSize: 20,
    fontFamily: "Bold",
  },
  subHeading: {
    marginTop: 5,
    color: "white",
    fontSize: 14,
    fontFamily: "Regular",
  },
  image: {
    height: 190,
    width: (windowWidth * 2) / 6 - 20,
  },
});
export default Home;
