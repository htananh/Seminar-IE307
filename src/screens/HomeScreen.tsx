import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.paragraphStyle}>
            Content Loaded from Home Screen
          </Text>
          <Image
            style={styles.logoStyle}
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
          />
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
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

export default HomeScreen;
