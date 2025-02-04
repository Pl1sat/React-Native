import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import AllProducts from "./screens/AllProducts";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // ✅ Fixed spelling
import UserScreen from "./screens/UserScreen";  // ✅ Ensure this file exists and is named correctly
import UserDetailsScreen from "./screens/UserDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Users" component={UserScreen} />
                <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
