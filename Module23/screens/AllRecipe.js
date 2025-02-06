import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const AllRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.recipes);
      })
      .catch((error) => {
        console.log("Error fetching recipes:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipe}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Text style={styles.recipeName}>{item.name}</Text>
            <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
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
  recipeCard: {
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
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  difficulty: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});

export default AllRecipe;

