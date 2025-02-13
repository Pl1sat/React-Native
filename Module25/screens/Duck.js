import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

console.log("Duck Component Loaded"); // Debugging log

const Duck = () => {
  const [imageURL, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchImage = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch("https://random-d.uk/api/v2/random?type=jpg");
      const data = await response.json();

      console.log("API Response:", JSON.stringify(data, null, 2)); // Debugging

      if (data && data.url && data.url.endsWith(".jpg")) {
        setImage(data.url);
      } else {
        throw new Error("Invalid API response (not an image)");
      }
    } catch (error) {
      console.error("Error fetching duck image:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Duck</Text>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : error ? (
        <View>
          <Text style={styles.errorText}>Error Loading Image</Text>
          <Image source={{ uri: "https://random-d.uk/api/assets/noduck.png" }} style={styles.image} />
        </View>
      ) : (
        <Image source={{ uri: imageURL }} style={styles.image} />
      )}

      <TouchableOpacity style={styles.button} onPress={fetchImage}>
        <Text style={styles.buttonText}>Get Another Duck</Text>
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
    backgroundColor: "blue",
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

export default Duck;

