import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Home() {
  return (
    <View style={styles.root}>
      <Text style={styles.captionSmall}>It's simple</Text>
      <Text style={styles.captionLarge}>You snooze</Text>
      <Text style={styles.captionLarge}>You lose</Text>
      <Text style={styles.captionSmall}>Real money</Text>

      <View>
        <Link href="/selectTime" asChild>
          <Pressable>
            <Text>Begin Challenge</Text>
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
  captionSmall: {
    fontSize: 32,
    textTransform: "uppercase",
    fontFamily: "HighriseFont-Demo-Regular",
  },

  captionLarge: {
    fontSize: 56,
    textTransform: "uppercase",
    fontFamily: "HighriseFont-Demo-Regular",
  },
});
