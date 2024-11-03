import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';
import Drawer_navigation from './src/navigation/Drawer_navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
  <AuthProvider>
    {/* <NavigationContainer>
      <Drawer_navigation />
    </NavigationContainer> */}
    <RootNavigator />
  </AuthProvider>
  );
}

