import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const ApiScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);  // Add a loading state
    const [error, setError] = useState(null);  // Add error handling

    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Replace with your API URL
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="blue" />;
    }

    if (error) {
        return <View><Text>Error: {error}</Text></View>;
    }

    return (
        <View>
            <Text>API Screen</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    );
}

export default ApiScreen;

