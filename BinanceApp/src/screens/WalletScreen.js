import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WalletScreen = () => {
  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', balance: '0.00', value: '0.00' },
    { name: 'Ethereum', symbol: 'ETH', balance: '0.00', value: '0.00' },
    { name: 'Binance Coin', symbol: 'BNB', balance: '0.00', value: '0.00' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Wallet</Text>
          <Text style={styles.totalBalance}>$0.00</Text>
          <Text style={styles.balanceLabel}>Total Balance</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="arrow-down" size={24} color="#F0B90B" />
            </View>
            <Text style={styles.actionText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="arrow-up" size={24} color="#F0B90B" />
            </View>
            <Text style={styles.actionText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Ionicons name="swap-horizontal" size={24} color="#F0B90B" />
            </View>
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.assetsContainer}>
          <View style={styles.assetsHeader}>
            <Text style={styles.assetsTitle}>Assets</Text>
            <TouchableOpacity>
              <Text style={styles.hideSmallBalances}>Hide small balances</Text>
            </TouchableOpacity>
          </View>

          {assets.map((asset, index) => (
            <TouchableOpacity key={asset.symbol} style={styles.assetItem}>
              <View style={styles.assetLeft}>
                <View style={styles.assetIcon}>
                  <Text style={styles.assetIconText}>{asset.symbol.slice(0, 2)}</Text>
                </View>
                <View>
                  <Text style={styles.assetName}>{asset.name}</Text>
                  <Text style={styles.assetSymbol}>{asset.symbol}</Text>
                </View>
              </View>
              <View style={styles.assetRight}>
                <Text style={styles.assetBalance}>{asset.balance} {asset.symbol}</Text>
                <Text style={styles.assetValue}>${asset.value}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  totalBalance: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  balanceLabel: {
    color: '#666666',
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  assetsContainer: {
    padding: 20,
  },
  assetsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  assetsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hideSmallBalances: {
    color: '#F0B90B',
    fontSize: 14,
  },
  assetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
  assetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  assetIconText: {
    color: '#F0B90B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  assetName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  assetSymbol: {
    color: '#666666',
    fontSize: 14,
    marginTop: 2,
  },
  assetRight: {
    alignItems: 'flex-end',
  },
  assetBalance: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  assetValue: {
    color: '#666666',
    fontSize: 14,
    marginTop: 2,
  },
});

export default WalletScreen; 