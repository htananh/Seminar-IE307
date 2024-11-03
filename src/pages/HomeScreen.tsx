import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
interface HomeScreenProps {
    navigation: any;
}
const HomeScreen = ({ navigation }:HomeScreenProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Đây là Home</Text>
          <Button 
            title="Đi đến Profile" 
            onPress={() => navigation.navigate('profile')} 
          />
        </View>
      );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeScreen;
