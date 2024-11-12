import React from  "react";
import {Text,Stylesheet, View} from "react-native";
const MainScreen from './screenes/MainScreen';
export default function  App() {
    return (
        <MainScreen/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})