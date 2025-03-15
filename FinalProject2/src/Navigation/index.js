import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WatchListScreen from "../screens/WatchListScreen";
import UserScreen from "../screens/UserScreen";
import CoinDetails from "../components/CoinDetails"; // Updated path


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CoinDetails" component={CoinDetails} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Watchlist" component={WatchListScreen} />
        <Tab.Screen name="Profile" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
