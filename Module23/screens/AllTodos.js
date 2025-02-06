import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=3&skip=10")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((error) => {
        console.log("Error fetching todos:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.todo}</Text>
            <Text style={item.completed ? styles.completed : styles.notCompleted}>
              {item.completed ? "✅ Completed" : "❌ Not Completed"}
            </Text>
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
  todoItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  todoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  completed: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },
  notCompleted: {
    fontSize: 14,
    color: "red",
    marginTop: 5,
  },
});

export default AllTodos;
