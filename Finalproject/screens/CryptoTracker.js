import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CryptoTracker = () => {
  console.log("✅ CryptoTracker screen loaded!"); // Debugging log

  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    console.log("🔄 Fetching crypto data...");
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        { params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10, page: 1, sparkline: false } }
      );

      console.log("✅ Crypto data received:", response.data);
      setCryptos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('❌ Error fetching crypto data:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Crypto Market</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" />
      ) : (
        <FlatList
          data={cryptos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cryptoCard}
              onPress={() => {
                console.log("🟢 Navigating to CryptoDetail with:", item);
                navigation.navigate('CryptoDetail', { crypto: item });
              }}
            >
              <Image source={{ uri: item.image }} style={styles.cryptoIcon} />
              <View style={styles.cryptoInfo}>
                <Text style={styles.cryptoName}>{item.name} ({item.symbol.toUpperCase()})</Text>
                <Text style={styles.price}>${item.current_price.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFD700', textAlign: 'center', marginBottom: 20 },
  cryptoCard: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  cryptoIcon: { width: 40, height: 40, marginRight: 10 },
  cryptoInfo: { flex: 1 },
  cryptoName: { color: '#FFD700', fontSize: 20, fontWeight: 'bold' },
  price: { color: '#FFFFFF', fontSize: 18 },
});

export default CryptoTracker;


