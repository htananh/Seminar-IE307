import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraphStyle}>
        Content Loaded from Account Screen 
      </Text>
      <Image
        style={styles.logoStyle}
        source={{
          uri:
            'https://i.pinimg.com/474x/08/4e/df/084edf63abe4220d1158ba0f5f4c2633.jpg',
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
export default FavoritesScreen;