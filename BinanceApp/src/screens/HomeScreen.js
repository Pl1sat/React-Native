import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineChart } from '../components/SimpleLineChart';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [btcPrice, setBtcPrice] = useState('Loading...');
  const [priceChange, setPriceChange] = useState({ value: 0, isPositive: true });
  const [chartData, setChartData] = useState([45000, 47000, 46500, 48000, 47500, 49000]);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        setBtcPrice(data.bitcoin.usd.toFixed(2));
        setPriceChange({
          value: Math.abs(data.bitcoin.usd_24h_change).toFixed(2),
          isPositive: data.bitcoin.usd_24h_change > 0
        });
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Binance</Text>
        <TouchableOpacity style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$0.00</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.priceCard}>
        <View style={styles.priceHeader}>
          <Text style={styles.cryptoName}>Bitcoin</Text>
          <Text style={styles.cryptoSymbol}>BTC/USDT</Text>
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.price}>${btcPrice}</Text>
          <Text style={[
            styles.priceChange,
            { color: priceChange.isPositive ? '#0ECB81' : '#F6465D' }
          ]}>
            {priceChange.isPositive ? '+' : '-'}{priceChange.value}%
          </Text>
        </View>
        <View style={styles.chartContainer}>
          <SimpleLineChart
            data={chartData}
            width={width - 70}
            height={200}
            color="#F0B90B"
          />
        </View>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-down-circle" size={24} color="#F0B90B" />
          <Text style={styles.actionText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-up-circle" size={24} color="#F0B90B" />
          <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="swap-horizontal" size={24} color="#F0B90B" />
          <Text style={styles.actionText}>Convert</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  balanceContainer: {
    backgroundColor: '#2C2C2C',
    padding: 15,
    borderRadius: 10,
  },
  balanceLabel: {
    color: '#666666',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  priceCard: {
    backgroundColor: '#2C2C2C',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cryptoName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cryptoSymbol: {
    color: '#666666',
    fontSize: 14,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  priceChange: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chartContainer: {
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 12,
  },
});

export default HomeScreen; 