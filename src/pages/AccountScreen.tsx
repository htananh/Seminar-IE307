import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { StyleSheet } from "react-native"
const AccountScreen = () => {
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
      <Button title="Log Out" onPress={authContext?.logout} />
    </View>
  );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default AccountScreen;
