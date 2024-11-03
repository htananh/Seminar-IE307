import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AccountScreen from '../screens/AccountScreen';


const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: '#6200ee',  marginTop: 30 },
        tabBarIndicatorStyle: { backgroundColor: 'white' }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Category" component={CategoriesScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TopTabs;
