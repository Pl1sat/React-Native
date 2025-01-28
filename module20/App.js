import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BasicSwiper from './screens/BasicSwiper';
import AdvSwiper from './screens/AdvSwiper';
export default function App() {
  return (
    <BasicSwiper/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
