import { FlatList, RefreshControl, ActivityIndicator, View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../Context";
import Coin from "../components/Coin";
import { getWatchListData } from "../Request";

const WatchListScreen = () => {
  const { listData } = useContext(ListContext);
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatedCoinId = () => listData.join("%2C%20");

  const fetchWatchListCoin = async () => {
    try {
      setLoading(true);
      setError(null);
      const watchListData = await getWatchListData(updatedCoinId());
      if (!watchListData) {
        throw new Error("Failed to fetch watchlist data");
      }
      setCoin(watchListData);
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
      setCoin([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchListCoin();
  }, [listData]); 

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.retryText} onPress={fetchWatchListCoin}>
          Tap to retry
        </Text>
      </View>
    );
  }

  if (loading && coin.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>Loading watchlist...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={coin}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Coin marketCoin={item} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={fetchWatchListCoin}
          />
        }
        ListEmptyComponent={
          !loading && (
            <View style={styles.centerContainer}>
              <Text style={styles.emptyText}>No coins in watchlist</Text>
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
  retryText: {
    color: '#4dabf7',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  loadingText: {
    color: 'white',
    marginTop: 12,
    fontSize: 14,
  },
  emptyText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WatchListScreen;