import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getMarketData } from "../Request";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const marketData = await getMarketData();
      if (marketData) {
        setData(marketData);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("CoinDetails", { coin: item })}>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.icon} />
              <View style={styles.info}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.price}>${item.current_price.toFixed(2)}</Text>
              </View>
              <Text style={[styles.change, item.price_change_percentage_24h >= 0 ? styles.positive : styles.negative]}>
                {item.price_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  item: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#222",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  price: {
    color: "gray",
  },
  change: {
    fontSize: 16,
    fontWeight: "bold",
  },
  positive: {
    color: "#4CAF50",
  },
  negative: {
    color: "#F44336",
  },
});
