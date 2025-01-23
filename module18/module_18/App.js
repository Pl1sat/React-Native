import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AboutPage from './screens/aboutpage';
import HomePage from './screens/HomePage';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutPage}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
