import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainBottomTab from './MainBottomTab';
import { AuthContext } from '../context/AuthContext';
import TopTabs from './TopTab';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authContext?.isAuthenticated ? (
          <React.Fragment>
          <Stack.Screen name="Bottom" component={MainBottomTab} />
        </React.Fragment>
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
