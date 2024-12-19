import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const ToDos = () => {
    const [data, setData] = useState([]);

    const ThirrAPI = async () => {
        try {
            const pergjigja = await fetch("https://jsonplaceholder.typicode.com/todos");
            const json = await pergjigja.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        ThirrAPI();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.title}</Text>
                <Text>{item.completed ? "Completed" : "Not Completed"}</Text>
            </View>
        );
    };

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default ToDos;
