import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

console.log("✅ CoinDetails.js is running!");

export default function CoinDetails({ route }) {
  if (!route || !route.params || !route.params.coin) {
    console.log("❌ No coin data received");
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>❌ No Coin Data</Text>
      </SafeAreaView>
    );
  }

  const { coin } = route.params;
  console.log("🪙 Coin Data:", coin);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{coin.name} - ${coin.current_price.toFixed(2)}</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.chartPlaceholder}>📈 Graph Placeholder</Text>
      </View>
      <Text style={styles.description}>{coin.description?.en || "No description available."}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    fontSize: 20,
    color: "red",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  chartContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    marginVertical: 20,
  },
  chartPlaceholder: {
    color: "gray",
    fontSize: 18,
  },
  description: {
    color: "white",
    fontSize: 16,
  },
});
