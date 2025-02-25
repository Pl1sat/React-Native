import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './screens/Login'; 
import Main from './screens/Main';
import {NavigatorContainer} from '@react-navigation/native'
import {createStaticNavigation} from '@react-navigation/native';
const Stack=createStaticNavigation();
export default function App() {
    return (
        <NavigatorContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name = "Main" component={Main}/>
            </Stack.Navigator>
        </NavigatorContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

