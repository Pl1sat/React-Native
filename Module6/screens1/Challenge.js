import React, { useState } from 'react'; // Import useState
import { View, Text, Button, StyleSheet } from 'react-native';

const Challenge = () => {
  // State to track click count
  const [clickCount, setClickCount] = useState(0);

  // Function to handle button press
  const handlePress = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Button clicked: {clickCount} times</Text>
      <Button title="Click Me!" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Challenge;
