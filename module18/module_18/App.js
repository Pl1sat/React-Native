import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import aboutpage from './screens/aboutpage';
import HomePage from './screens/HomePage';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
const Tab=createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
   <Tab.Navigator
   screenOptions={{
    tabBarActiveTintColor:"white",
    tabBarInactiveTintColor:'gray',
    tabBarStyle: {backgroundColor: "black"},
   }}
   
   >
    <Tab.Screen
    name="Home"
    component={HomePage}
    options={{
      tabBarLabel:"Home",
      tabBarIcon:({color})=>{
       return <MaterialCommunityIcons name='home' size={26} color={color}/>
      }
    }}
    />
     <Tab.Screen
    name="About"
    component={aboutpage}
    options={{
      tabBarLabel:"About",
      tabBarIcon:({color})=>{
       return <MaterialCommunityIcons name='video-stabilization' size={26} color={color}/>
      }
    }}
    />
   
   </Tab.Navigator>
   </NavigationContainer>
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
