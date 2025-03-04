
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CryptoTracker from './screens/CryptoTracker';
import CryptoDetail from './screens/CryptoDetail';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={CryptoTracker} 
                    options={{ title: "Crypto Tracker" }} 
                />
                <Stack.Screen 
                    name="Detail" 
                    component={CryptoDetail} 
                    options={{ title: "Crypto Details" }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
