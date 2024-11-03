import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';
import Layout from './src/navigation/Drawer_navigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
  <AuthProvider>
    {/* <NavigationContainer>
      <Layout />
    </NavigationContainer> */}
    <RootNavigator />
  </AuthProvider>
  );
}

