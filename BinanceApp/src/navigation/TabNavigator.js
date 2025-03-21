import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import TradeScreen from '../screens/TradeScreen';
import WalletScreen from '../screens/WalletScreen';
import CryptoDetailScreen from '../screens/CryptoDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MarketStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1E1E1E',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Markets" 
        component={MarketScreen}
        options={{
          title: 'Spot Markets',
        }}
      />
      <Stack.Screen
        name="CryptoDetail"
        component={CryptoDetailScreen}
        options={({ route }) => ({
          title: route.params.symbol + '/USDT',
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopColor: '#2C2C2C',
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#F0B90B',
        tabBarInactiveTintColor: '#666666',
        headerStyle: {
          backgroundColor: '#1E1E1E',
          borderBottomColor: '#2C2C2C',
          borderBottomWidth: 1,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MarketTab"
        component={MarketStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Markets',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-vertical-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator; 