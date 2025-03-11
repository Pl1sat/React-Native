
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context"; // Fix layout issues
import Navigation from "./src/Navigation"; // Ensure this file exists

export default function App() {
  console.log("✅ App.js is running");
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


