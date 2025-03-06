import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
import axios from 'axios';

const CryptoDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();

    console.log("✅ CryptoDetail screen loaded!");
    console.log("✅ Received route params:", route.params);

    if (!route.params || !route.params.crypto) {
        console.error("❌ No crypto data received!");
        navigation.goBack();
        return null;
    }

    const { crypto } = route.params;
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchChartData();
    }, [crypto.id]);

    const fetchChartData = async () => {
        try {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart`,
                { params: { vs_currency: 'usd', days: 1, interval: 'hourly' } }
            );

            const prices = response.data.prices.map(price => ({
                x: new Date(price[0]).toLocaleTimeString(),
                y: price[1]
            }));

            setChartData(prices);
        } catch (error) {
            console.error("❌ Error fetching chart data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: crypto.image }} style={styles.cryptoIcon} />
                <View>
                    <Text style={styles.title}>{crypto.name} ({crypto.symbol.toUpperCase()})</Text>
                    <Text style={styles.price}>${crypto.current_price.toFixed(2)}</Text>
                </View>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>📈 Price Chart (24h)</Text>
                {loading ? (
                    <ActivityIndicator size="large" color="#FFD700" />
                ) : (
                    <VictoryChart theme={VictoryTheme.material}>
                        <VictoryLine data={chartData} style={{ data: { stroke: '#FFD700' } }} />
                    </VictoryChart>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    cryptoIcon: { width: 50, height: 50, marginRight: 10 },
    title: { fontSize: 28, fontWeight: 'bold', color: '#FFD700' },
    price: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
    chartContainer: { backgroundColor: '#1E1E1E', padding: 15, borderRadius: 10 },
    chartTitle: { color: '#FFD700', fontSize: 18, textAlign: 'center', marginBottom: 10 }
});

export default CryptoDetail;



       









