import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen"; // Ensure this file exists!
import { View, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

// Debug Screen
function DebugScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📌 Debug Screen Loaded</Text>
    </View>
  );
}

export default function Navigation() {
  console.log("✅ Navigation.js is running");
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Test" component={DebugScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple", // Ensure visibility
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

