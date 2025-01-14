import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen';  
screen
const Stack = createStackNavigator(); 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen
            name="Products"
            component={ProductListScreen}
            options={{
              title: 'Products',
              headerStyle: {
                backgroundColor: '#4CAF50', 
              },
              headerTintColor: '#fff', 
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
