import React, { useContext } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { StyleSheet } from "react-native"
const AccountScreen = () => {
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
        Content Loaded from Account Screen 
      </Text>
      <Image
        style={styles.logoStyle}
        source={{
          uri:
            'https://i.pinimg.com/474x/8e/e7/11/8ee711f3a1638b6d08d4c4f2eb77c766.jpg',
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraphStyle: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logoStyle: {
      height: 150,
      width: 150,
    },
});

export default AccountScreen;
