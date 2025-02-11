import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

const allDogs = () => {
    const [dogList, setDogList] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((data) => {
                setDogList(Object.keys(data.message)); // Convert object keys to an array
            })
            .catch((error) => console.error("Error fetching dog list:", error));
    }, []);

    return (
        <FlatList
            data={dogList}
            keyExtractor={(item) => item} // Use breed name as the unique key
            renderItem={({ item }) => (
                <View>
                    <Text>{item}</Text>
                </View>
            )}
        />
    );
};

export default allDogs;
