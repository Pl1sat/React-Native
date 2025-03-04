import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const CryptoDetail = ({ route }) => {
    const { crypto } = route.params;
    const [cryptoData, setCryptoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCryptoDetails = async () => {
            try {
                const response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${crypto.id}?localization=false&tickers=false&market_data=true`
                );
                const data = await response.json();
                setCryptoData(data);
            } catch (error) {
                console.error("Error fetching crypto details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCryptoDetails();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Loading Crypto Data...</Text>
            </View>
        );
    }

    if (!cryptoData) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Failed to load crypto data.</Text>
            </View>
        );
    }

    const priceChange = cryptoData.market_data.price_change_percentage_24h;
    const priceChangeColor = priceChange >= 0 ? styles.positive : styles.negative;

    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={28} color="white" />
                <Text style={styles.title}>{cryptoData.name} ({cryptoData.symbol.toUpperCase()})</Text>
                <Ionicons name="star-outline" size={28} color="white" />
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.currentPrice}>${cryptoData.market_data.current_price.usd}</Text>
                <Text style={[styles.priceChange, priceChangeColor]}>
                    {priceChange.toFixed(2)}%
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>24h High</Text>
                    <Text style={styles.value}>${cryptoData.market_data.high_24h.usd}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>24h Low</Text>
                    <Text style={styles.value}>${cryptoData.market_data.low_24h.usd}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Market Cap</Text>
                    <Text style={styles.value}>${cryptoData.market_data.market_cap.usd.toLocaleString()}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>24h Volume</Text>
                    <Text style={styles.value}>${cryptoData.market_data.total_volume.usd.toLocaleString()}</Text>
                </View>
            </View>

            <View style={styles.extraSpace} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: { flex: 1, backgroundColor: '#121212' },
    contentContainer: { flexGrow: 1, paddingVertical: 20, paddingHorizontal: 15 },
    header: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 20 
    },
    title: { fontSize: 22, fontWeight: 'bold', color: 'white' },
    priceContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
    currentPrice: { fontSize: 30, fontWeight: 'bold', color: 'white' },
    priceChange: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
    positive: { color: '#00FF00' },
    negative: { color: '#FF4C4C' },
    infoContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    infoBox: { flex: 1, padding: 10, backgroundColor: '#1e1e1e', marginHorizontal: 5, borderRadius: 10 },
    label: { fontSize: 16, color: 'gray' },
    value: { fontSize: 18, fontWeight: 'bold', color: 'white' },
    extraSpace: { height: 50 }, // Extra padding to make sure scrolling works
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
    loadingText: { fontSize: 18, color: 'white', marginTop: 10 },
    errorText: { fontSize: 20, color: 'red', fontWeight: 'bold' },
});

export default CryptoDetail;





