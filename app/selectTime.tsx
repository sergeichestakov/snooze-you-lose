import { Link } from "expo-router";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const windowDimensions = Dimensions.get("window");

const minutesInADay = 1440;

const data = [...new Array(minutesInADay)].map((_, index) => {
  return `${Math.floor(index / 60)}:${index % 60}`;
});

function TimeCarousel() {
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        vertical
        style={{
          justifyContent: "center",
          width: windowDimensions.width,
          height: 400,
        }}
        width={windowDimensions.width}
        pagingEnabled={false}
        height={130}
        data={data}
        renderItem={({ index, item }) => {
          return (
            <View key={index} style={{ flex: 1, padding: 10 }}>
              <View
                style={{
                  alignItems: "flex-start",
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  borderRadius: 20,
                  backgroundColor: "grey",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      color: "white",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default function SelectTime() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pick your wake up time</Text>
      </View>

      <TimeCarousel />

      <Link href="/">Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "HighriseFont-Condensed-Demo",
  },
});
