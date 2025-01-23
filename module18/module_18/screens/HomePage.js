import React from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />
      <Text>Drawer Navigation Button Functionality</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
