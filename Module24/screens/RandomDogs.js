import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const RandomDog = () => {
    const [image, setImage] = useState(null);

    const fetchDogImage = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setImage(data.message); 
        } catch (error) {
            console.log("Error fetching random dog image", error);
        }
    };

    useEffect(() => {
        fetchDogImage();
    }, []);

    return (
        <View>
            <Text>Random Dog</Text>
            {image ? (
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            ) : (
                <Text>Loading...</Text>
            )}
            <Button title="Fetch new dog" onPress={fetchDogImage} />
        </View>
    );
};

export default RandomDog;
