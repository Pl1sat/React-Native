import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Navigation() {
  console.log("✅ Navigation.js is running");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✅ Navigation Loaded</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue", // Ensure visibility
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

