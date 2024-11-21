import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ButtonScreen = () => {
  let counter = 0; // Counter variable

  return (
    <View>
      <Text>Button Screen</Text>

      <Button
        title="Click here"
        color="green"
        onPress={() => console.log("Button Clicked", counter++)}
      />

      <TouchableOpacity
        style={styles.TouchBtn}
        onPress={() => console.log("Clicked Touchable Opacity", counter++)} // Removed space in "onPress"
      >
        <Text style={styles.btnText}>Click Touchable Element</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TouchBtn: {
    backgroundColor: "red", // Fixed typo in "backgroundColor"
    marginVertical: 15,
    paddingVertical: 20,
    borderRadius: 6,
    marginHorizontal: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default ButtonScreen;
