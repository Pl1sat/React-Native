import React from "react";
import { View, Text } from "react-native";

console.log("✅ UserScreen.js is running!");

export default function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
      <Text style={{ color: "white", fontSize: 24 }}>👤 User Screen is Working!</Text>
    </View>
  );
}
