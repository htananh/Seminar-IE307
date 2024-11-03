import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native"
const AccountScreen = () => {

  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
      <Button title="Log Out" />
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
