import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

const MarketScreen = ({ navigation }) => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
        );
        const data = await response.json();
        setMarkets(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching markets:', error);
        setLoading(false);
      }
    };

    fetchMarkets();
    const interval = setInterval(fetchMarkets, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.marketItem}
      onPress={() => navigation.navigate('CryptoDetail', {
        symbol: item.symbol.toUpperCase(),
        name: item.name,
        id: item.id
      })}
    >
      <View style={styles.marketItemLeft}>
        <Image
          source={{ uri: item.image }}
          style={styles.cryptoIcon}
          resizeMode="contain"
        />
        <View style={styles.marketItemInfo}>
          <Text style={styles.marketItemName}>{item.name}</Text>
          <Text style={styles.marketItemSymbol}>{item.symbol.toUpperCase()}/USDT</Text>
        </View>
      </View>
      <View style={styles.marketItemRight}>
        <Text style={styles.marketItemPrice}>${item.current_price.toLocaleString()}</Text>
        <Text style={[
          styles.marketItemChange,
          { color: item.price_change_percentage_24h > 0 ? '#0ECB81' : '#F6465D' }
        ]}>
          {item.price_change_percentage_24h > 0 ? '+' : ''}
          {item.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F0B90B" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marketsHeader}>
        <Text style={styles.marketsTitle}>Spot Markets</Text>
      </View>
      <FlatList
        data={markets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.marketsList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marketsHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  marketsTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  marketsList: {
    flex: 1,
  },
  marketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  marketItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  marketItemInfo: {
    justifyContent: 'center',
  },
  marketItemName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  marketItemSymbol: {
    color: '#666666',
    fontSize: 14,
    marginTop: 2,
  },
  marketItemRight: {
    alignItems: 'flex-end',
  },
  marketItemPrice: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  marketItemChange: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
});

export default MarketScreen; 