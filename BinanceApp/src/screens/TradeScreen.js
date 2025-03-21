import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const TradeScreen = () => {
  const [tradeType, setTradeType] = useState('buy'); // 'buy' or 'sell'
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('48000'); // Example fixed price

  const handleTrade = () => {
    // Implement trade logic here
    console.log(`${tradeType.toUpperCase()} ${amount} BTC at $${price}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BTC/USDT</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <View style={styles.tradeTypeContainer}>
        <TouchableOpacity
          style={[styles.tradeTypeButton, tradeType === 'buy' && styles.activeTradeType]}
          onPress={() => setTradeType('buy')}
        >
          <Text style={[styles.tradeTypeText, tradeType === 'buy' && styles.activeTradeTypeText]}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tradeTypeButton, tradeType === 'sell' && styles.activeTradeType]}
          onPress={() => setTradeType('sell')}
        >
          <Text style={[styles.tradeTypeText, tradeType === 'sell' && styles.activeTradeTypeText]}>Sell</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount (BTC)</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="decimal-pad"
          placeholder="0.00"
          placeholderTextColor="#666666"
        />
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.label}>Total (USDT)</Text>
        <Text style={styles.total}>${amount ? (parseFloat(amount) * parseFloat(price)).toFixed(2) : '0.00'}</Text>
      </View>

      <TouchableOpacity
        style={[styles.tradeButton, { backgroundColor: tradeType === 'buy' ? '#0ECB81' : '#F6465D' }]}
        onPress={handleTrade}
      >
        <Text style={styles.tradeButtonText}>{tradeType === 'buy' ? 'Buy BTC' : 'Sell BTC'}</Text>
      </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 5,
  },
  tradeTypeContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  tradeTypeButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#2C2C2C',
    marginHorizontal: 5,
  },
  activeTradeType: {
    backgroundColor: '#F0B90B',
  },
  tradeTypeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTradeTypeText: {
    color: '#1E1E1E',
  },
  inputContainer: {
    padding: 20,
  },
  label: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#2C2C2C',
  },
  total: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tradeButton: {
    margin: 20,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  tradeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TradeScreen; 