import React from "react";
import { View, Text } from "react-native";

console.log("✅ WatchListScreen.js is running!");

export default function WatchListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
      <Text style={{ color: "white", fontSize: 24 }}>📋 WatchList Screen is Working!</Text>
    </View>
  );
}
