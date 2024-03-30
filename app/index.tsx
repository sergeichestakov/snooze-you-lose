import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>It's simple</Text>
      <Text>You snooze</Text>
      <Text>you lose</Text>
      <Text>Real money</Text>

      <Link href="/selectTime" asChild>
        <Pressable>
          <Text>Begin Challenge</Text>
        </Pressable>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
