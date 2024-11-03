import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
interface FavoritesScreenProps {
    navigation: any;
}
const FavoritesScreen = ({ navigation }:FavoritesScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Đây là Favorites</Text>
      <Button 
        title="Đi đến Categories" 
        onPress={() => navigation.navigate('categories')} 
      />
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
export default FavoritesScreen;