import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const marketData = [
  {
    id: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '48,234.32',
    change: '+2.34',
    volume: '42.5B',
  },
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    price: '3,432.12',
    change: '-1.23',
    volume: '25.1B',
  },
  {
    id: '3',
    symbol: 'BNB',
    name: 'BNB',
    price: '412.51',
    change: '+5.67',
    volume: '8.2B',
  },
  {
    id: '4',
    symbol: 'SOL',
    name: 'Solana',
    price: '102.34',
    change: '+3.45',
    volume: '4.8B',
  },
  {
    id: '5',
    symbol: 'ADA',
    name: 'Cardano',
    price: '1.23',
    change: '-0.89',
    volume: '3.2B',
  },
];

const MarketScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.coinItem}>
      <View style={styles.coinInfo}>
        <Text style={styles.symbol}>{item.symbol}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.priceInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={[
          styles.change,
          { color: item.change.startsWith('+') ? '#00C087' : '#FF4D4D' }
        ]}>
          {item.change}%
        </Text>
      </View>
      <View style={styles.volumeInfo}>
        <Text style={styles.volumeLabel}>Vol</Text>
        <Text style={styles.volume}>${item.volume}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Markets</Text>
        <View style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="#FFFFFF" />
        </View>
      </View>
      <FlatList
        data={marketData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 8,
  },
  list: {
    flex: 1,
  },
  coinItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  coinInfo: {
    flex: 2,
  },
  symbol: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    color: '#666666',
    fontSize: 14,
    marginTop: 4,
  },
  priceInfo: {
    flex: 2,
    alignItems: 'flex-end',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  change: {
    fontSize: 14,
    marginTop: 4,
  },
  volumeInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  volumeLabel: {
    color: '#666666',
    fontSize: 12,
  },
  volume: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 2,
  },
});

export default MarketScreen; 