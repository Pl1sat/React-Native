import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const handle =async() => {
        try{
            const response = await fetch('http://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', },
                body: JSON.stringify({ 
                    email:email, 
                    password:password 
                }),
                credentials: "omit"
            })
            const data = await response.json();
            console.log(data?.access_token)
           if(data?.token){
               console.log("next page")
               navigation.navigate('Main');
           }
        }
        catch(err){

        };

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Login;