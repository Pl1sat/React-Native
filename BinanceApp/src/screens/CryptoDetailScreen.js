import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const CryptoDetailScreen = ({ route, navigation }) => {
  const { symbol, name } = route.params;
  const [timeframe, setTimeframe] = useState('24h');
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchChartData();
    const interval = setInterval(fetchChartData, 30000);
    return () => clearInterval(interval);
  }, [timeframe]);

  const fetchChartData = async () => {
    try {
      const days = timeframe === '24h' ? 1 : timeframe === '7d' ? 7 : 30;
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${symbol.toLowerCase()}/market_chart?vs_currency=usd&days=${days}`
      );
      const data = await response.json();
      
      const prices = data.prices.map(price => price[1]);
      setChartData({
        labels: Array(prices.length).fill(''),
        datasets: [{ data: prices }]
      });
      
      setCurrentPrice(prices[prices.length - 1]);
      const priceChangePercent = ((prices[prices.length - 1] - prices[0]) / prices[0]) * 100;
      setPriceChange(priceChangePercent);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chart data:', error);
      setLoading(false);
      setError('Error fetching chart data. Please try again later.');
    }
  };

  const timeframes = ['24h', '7d', '30d'];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F0B90B" />
      </View>
    );
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.symbolText}>{symbol}/USDT</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          ${currentPrice?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </Text>
        <Text style={[
          styles.changeText,
          { color: priceChange >= 0 ? '#0ECB81' : '#F6465D' }
        ]}>
          {priceChange >= 0 ? '+' : ''}{priceChange?.toFixed(2)}%
        </Text>
      </View>

      <View style={styles.timeframeContainer}>
        {timeframes.map((tf) => (
          <TouchableOpacity
            key={tf}
            style={[
              styles.timeframeButton,
              timeframe === tf && styles.timeframeButtonActive
            ]}
            onPress={() => setTimeframe(tf)}
          >
            <Text style={[
              styles.timeframeText,
              timeframe === tf && styles.timeframeTextActive
            ]}>
              {tf}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {chartData && (
        <LineChart
          data={chartData}
          width={width - 20}
          height={220}
          chartConfig={{
            backgroundColor: '#1E1E1E',
            backgroundGradientFrom: '#1E1E1E',
            backgroundGradientTo: '#1E1E1E',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(240, 185, 11, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
          withDots={false}
          withVerticalLines={false}
          withHorizontalLines={true}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
  },
  symbolText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nameText: {
    color: '#666666',
    fontSize: 16,
  },
  priceContainer: {
    marginBottom: 20,
  },
  priceText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  changeText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
  },
  timeframeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeframeButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#2C2C2C',
  },
  timeframeButtonActive: {
    backgroundColor: '#F0B90B',
  },
  timeframeText: {
    color: '#666666',
    fontSize: 14,
  },
  timeframeTextActive: {
    color: '#1E1E1E',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  errorText: {
    color: '#F6465D',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default CryptoDetailScreen;