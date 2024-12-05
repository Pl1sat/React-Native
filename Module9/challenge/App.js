import React from 'react';
import 'react-native-gesture-handler'; // Required for gesture handling
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChallengeScreen from './screens/ChallengeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Challenge" 
          component={ChallengeScreen} 
          options={{ title: 'Challenge Screen' }} // Custom screen title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
