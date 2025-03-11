import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  console.log("✅ HomeScreen.js is running");

  useEffect(() => {
    console.log("✅ HomeScreen mounted");
  }, []);

  return (
    <View style={styles.container}>
      {console.log("✅ HomeScreen is rendering View")}
      <Text style={styles.text}>✅ HomeScreen Loaded</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red", // Ensure visibility
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

