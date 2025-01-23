import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './App'; // Assuming TabNavigator is defined in App.js
import AboutPage from './aboutpage';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="About" component={AboutPage} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
