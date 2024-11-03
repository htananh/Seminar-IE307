import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AccountScreen from '../screens/AccountScreen';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';
import TopTabs from './TopTab';

const Tab = createBottomTabNavigator();
const favouritesCount = 3;

const MainBottomTab = () => (
  <Tab.Navigator
  // initialRouteName="Favorites"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        
        let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return (
          <View>
            <Ionicons name={iconName} size={size} color={color} />
            {/* {route.name === 'Favorites' && favouritesCount > 0 && (
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{favouritesCount}</Text>
              </View>
            )} */}
          </View>
        );
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'black',
    })}
  >
    <Tab.Screen options={{
    // tabBarLabel: 'Trang Chủ',
  }} name="Home" component={HomeScreen} />
    {/* <Tab.Screen name="Categories" component={CategoriesScreen} /> */}
    <Tab.Screen name="Categories" component={TopTabs} />
    <Tab.Screen options={{
    tabBarBadge: favouritesCount > 0 ? favouritesCount : undefined, // Hiển thị badge chỉ khi có mục yêu thích
  }} name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MainBottomTab;
