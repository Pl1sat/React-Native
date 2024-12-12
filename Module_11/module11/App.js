import React from 'react'; // Ensure React is imported
import { StyleSheet } from 'react-native';
import BoxScreen from './screens/BoxScreen';

export default function App() {
  return <BoxScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
