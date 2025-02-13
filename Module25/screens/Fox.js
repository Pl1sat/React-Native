import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

console.log("Fox Component Loaded"); // Debugging log

const Fox = () => {
    const [imageURL, setImage] = useState(null);
    const [error, setError] = useState(false);

    const fetchImage = async () => {
        try {
            setError(false);
            const response = await fetch("https://randomfox.ca/floof/");
            const data = await response.json();
            
            if (data && data.image) {
                setImage(data.image);
            } else {
                throw new Error("Invalid API response");
            }
        } catch (error) {
            console.error("Error fetching fox image:", error);
            setError(true);
        }
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fox</Text>
            {error ? (
                <Text style={styles.errorText}>Error Loading Image</Text>
            ) : imageURL ? (
                <Image source={{ uri: imageURL }} style={styles.image} />
            ) : (
                <Text>Loading...</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={fetchImage}>
                <Text style={styles.buttonText}>Refresh Image</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
        resizeMode: "cover",
    },
    button: {
        backgroundColor: "orange",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    errorText: {
        color: "red",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default Fox;
