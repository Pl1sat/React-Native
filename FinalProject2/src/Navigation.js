import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Home from "./screens/HomeScreen";
import WatchListScreen from "./screens/WatchListScreen";
import UserScreen from "./screens/UserScreen";
import CoinDetails from "./screens/CoinDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#181818",
          paddingBottom: 4,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="user" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="CoinDetails" component={CoinDetails} />
    </Stack.Navigator>
  );
};
