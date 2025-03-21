import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetails from "../components/CoinDetails";
import { BottomNavigation } from "./BottomNavigation";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomNavigation} />
      <Stack.Screen name="CoinDetails" component={CoinDetails} />
    </Stack.Navigator>
  );
};
