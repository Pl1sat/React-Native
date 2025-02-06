import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
      })
      .catch((error) => {
        console.log("Error fetching quotes:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>"{item.quote}"</Text>
            <Text style={styles.author}>- {item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  quoteCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#333",
  },
  author: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
    textAlign: "right",
    fontWeight: "bold",
  },
});

export default AllQuotes;
