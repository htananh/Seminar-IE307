import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainBottomTab from './MainBottomTab';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authContext?.isAuthenticated ? (
          <Stack.Screen name="Main" component={MainBottomTab} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
