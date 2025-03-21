import { View, Text, StyleSheet, ActivityIndicator, Image, Dimensions, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { getCoinRequest, getMarketChart } from "../Request";

const CoinDetails = ({ route }) => {
  const { coinId } = route.params;
  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [coinData, marketData] = await Promise.all([
          getCoinRequest(coinId),
          getMarketChart(coinId),
        ]);
        
        if (!coinData || !marketData) {
          throw new Error("Failed to fetch coin data");
        }

        setCoin({
          ...coinData,
          sparkline_data: marketData.prices.map(price => price[1])
        });
      } catch (err) {
        console.error("Error fetching coin data:", err);
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [coinId]);

  if (error) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.retryText} onPress={() => setCoin(null)}>
          Tap to retry
        </Text>
      </SafeAreaView>
    );
  }

  if (loading || !coin) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>Loading coin data...</Text>
      </SafeAreaView>
    );
  }

  const {
    image: { large },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
      market_cap,
    },
  } = coin;

  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: large }} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text style={styles.symbol}>{symbol.toUpperCase()}</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.priceContainer}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>#{market_cap_rank}</Text>
            </View>
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={12}
              color={percentageColor}
              style={{ marginRight: 5 }}
            />
            <Text style={[styles.priceChange, { color: percentageColor }]}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.currentPrice}>
            ${current_price.usd.toLocaleString()}
          </Text>
          <Text style={styles.marketCap}>
            MCap ${(market_cap.usd / 1e9).toFixed(2)}B
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  nameContainer: {
    marginLeft: 10,
    flex: 1,
  },
  symbol: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 4,
  },
  name: {
    color: "white",
    fontSize: 15,
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  currentPrice: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceChange: {
    fontSize: 17,
    fontWeight: "500",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 5,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  valueContainer: {
    alignItems: "flex-end",
  },
  marketCap: {
    color: "white",
    fontSize: 13,
    letterSpacing: 0.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  loadingText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  errorText: {
    color: "#ff6b6b",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
  },
  retryText: {
    color: "#4dabf7",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default CoinDetails;
