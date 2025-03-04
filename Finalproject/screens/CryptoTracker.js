import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

const CryptoTracker = ({ navigation }) => {
    const [cryptoList, setCryptoList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
                );
                const data = await response.json();
                setCryptoList(data);
            } catch (error) {
                console.error("Error fetching crypto list:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCryptos();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Loading Crypto List...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crypto Tracker</Text>
            <FlatList
                data={cryptoList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.cryptoItem} 
                        onPress={() => navigation.navigate('Detail', { crypto: item })}
                    >
                        <Text style={styles.cryptoName}>{item.name} ({item.symbol.toUpperCase()})</Text>
                        <Text style={styles.cryptoPrice}>${item.current_price}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#121212' },
    title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20, textAlign: 'center' },
    cryptoItem: { padding: 15, marginVertical: 8, backgroundColor: '#1e1e1e', borderRadius: 10 },
    cryptoName: { fontSize: 18, fontWeight: 'bold', color: 'white' },
    cryptoPrice: { fontSize: 16, color: 'lightgray' },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
    loadingText: { fontSize: 18, color: 'white', marginTop: 10 },
});

export default CryptoTracker;

