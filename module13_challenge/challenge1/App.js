import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DogApi from './screens/DogApi';

export default function App() {
  return (
    <View style={styles.container}>
      <DogApi />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


