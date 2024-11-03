import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{
    animationEnabled: true,
  }} >
    <Stack.Screen
     name="Login"
     component={LoginScreen}
     options={{ headerShown: false }}/>
    <Stack.Screen name="Register" component={RegisterScreen}
    options={{
      headerRight: () => (
        <TouchableOpacity onPress={() => alert('Đã nhấn nút')}>
          <Text style={{ color: 'white', marginRight: 10 }}>Help</Text>
        </TouchableOpacity>
      ),
      title: 'Register',
      headerStyle: { backgroundColor: '#f4511e' }, 
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      
    }} />
  </Stack.Navigator>
);

export default AuthStack;
