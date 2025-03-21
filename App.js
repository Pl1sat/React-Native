import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import MarketScreen from './src/screens/MarketScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Market') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Trade') {
              iconName = focused ? 'trending-up' : 'trending-up-outline';
            } else if (route.name === 'Wallet') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
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
          headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerTintColor: '#FFFFFF',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen 
          name="Trade" 
          component={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E' }}>
              <Text style={{ color: '#FFFFFF' }}>Trade Screen</Text>
            </View>
          )} 
        />
        <Tab.Screen 
          name="Wallet" 
          component={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E' }}>
              <Text style={{ color: '#FFFFFF' }}>Wallet Screen</Text>
            </View>
          )} 
        />
        <Tab.Screen 
          name="Profile" 
          component={() => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E' }}>
              <Text style={{ color: '#FFFFFF' }}>Profile Screen</Text>
            </View>
          )} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
}); 