import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Fox from "./screens/Fox"; // Ensure these files are in the 'screens' folder
import Duck from "./screens/Duck";

export default function App() {
  console.log("Rendering App Component"); // Debugging log

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fox and Duck App</Text>

      {/* Debugging: Check if Fox.js loads */}
      {Fox ? <Fox /> : <Text style={styles.errorText}>Error Loading Fox Component</Text>}

      {/* Debugging: Check if Duck.js loads */}
      {Duck ? <Duck /> : <Text style={styles.errorText}>Error Loading Duck Component</Text>}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});



