import { View, FlatList, RefreshControl, ActivityIndicator, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Coin from "../components/Coin";
import { getMarketData } from "../Request";

const ErrorComponent = ({ message, onRetry }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{message}</Text>
    <Text style={styles.retryButton} onPress={onRetry}>
      Tap to retry
    </Text>
  </View>
);

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      console.log('Fetching market data...');
      setLoading(true);
      setError(null);
      const coinData = await getMarketData();
      console.log('Received data:', coinData ? 'Data exists' : 'No data');
      if (!coinData) {
        throw new Error("Failed to fetch cryptocurrency data");
      }
      setData(coinData);
    } catch (err) {
      console.error('Error in getData:', err.message);
      setError(err.message || "An unexpected error occurred");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('HomeScreen mounted');
    getData();
  }, []);

  console.log('Rendering HomeScreen:', { loading, error, dataLength: data.length });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {error ? (
          <ErrorComponent message={error} onRetry={getData} />
        ) : loading && data.length === 0 ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.loadingText}>Loading cryptocurrencies...</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => {
              console.log('Rendering coin:', item.name);
              return <Coin marketCoin={item} />;
            }}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={getData}
                tintColor="white"
              />
            }
            ListEmptyComponent={
              !loading && (
                <View style={styles.centerContainer}>
                  <Text style={styles.emptyText}>No cryptocurrencies found</Text>
                </View>
              )
            }
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  flatListContent: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
  retryButton: {
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
