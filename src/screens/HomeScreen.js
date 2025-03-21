import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['1H', '24H', '7D', '1M', '3M', '1Y'],
    datasets: [
      {
        data: [45000, 47000, 42000, 49000, 53000, 48000],
        color: (opacity = 1) => `rgba(240, 185, 11, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#1E1E1E',
    backgroundGradientFrom: '#1E1E1E',
    backgroundGradientTo: '#1E1E1E',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#F0B90B',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.price}>$48,234.32</Text>
        <Text style={styles.change}>+2.34%</Text>
      </View>
      
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={screenWidth - 32}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>24h Volume</Text>
          <Text style={styles.statValue}>$42.5B</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Market Cap</Text>
          <Text style={styles.statValue}>$925.8B</Text>
        </View>
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
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  change: {
    color: '#00C087',
    fontSize: 18,
    marginTop: 4,
  },
  chartContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#2C2C2C',
    marginHorizontal: 16,
    borderRadius: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 4,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 