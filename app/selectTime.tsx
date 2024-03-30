import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SelectTime() {
  return (
    <View style={styles.container}>
      <Text>Pick a time</Text>

      <Link href="/">Home</Link>
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
