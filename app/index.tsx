import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Pressable } from "react-native";

const colors = ["#FF9900", "#FFBF52", "#F43CFE"];

export default function Home() {
  return (
    <View style={styles.root}>
      <LinearGradient colors={colors} style={styles.background} />
      <View style={styles.textContainer}>
        <Text style={styles.captionSmall}>It's simple</Text>
        <Text style={styles.captionLarge}>You snooze</Text>
        <Text style={styles.captionLarge}>You lose</Text>
        <Text style={styles.captionSmall}>Real money</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/selectTime" asChild>
          <Pressable>
            <Text style={styles.buttonText}>Begin Challenge</Text>
          </Pressable>
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70,
    backgroundColor: "#fff",
    height: 55,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 96,
  },
  buttonText: {
    fontFamily: "HighriseFont-Condensed-Demo",
    fontSize: 18,
    color: "#000",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  captionSmall: {
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "HighriseFont-Condensed-Demo",
    color: "#4C1700",
  },
  captionLarge: {
    fontSize: 56,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "HighriseFont-Condensed-Demo",
    color: "#ffffff",
  },
});
