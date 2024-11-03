import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AccountScreen from '../screens/AccountScreen';
// How to Make a View Like Android Fragment in React Native
// https://aboutreact.com/android-fragment-view/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



const FragmentView = () => {
  const [index, setIndex] = useState(1);

  const RenderElement = () => {
    //You can add N number of Views here in if-else condition
    if (index === 1) {
      //Return the FirstScreen as a child to set in Parent View
      return <HomeScreen />;
    } else if (index === 2) {
      //Return the SecondScreen as a child to set in Parent View
      return <AccountScreen />;
    } else {
      //Return the ThirdScreen as a child to set in Parent View
      return <FavoritesScreen />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {/*To set the FirstScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(1)}>
            <Text style={{ color: '#ffffff' }}>1st View</Text>
          </TouchableOpacity>
          {/*To set the SecondScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(2)}>
            <Text style={{ color: '#ffffff' }}>2nd View</Text>
          </TouchableOpacity>
          {/*To set the ThirdScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(3)}>
            <Text style={{ color: '#ffffff' }}>3rd View</Text>
          </TouchableOpacity>
        </View>

        {/*Text From Parent Screen*/}
        <Text style={styles.paragraphStyle}>
          Example of view like fragment in React Native
        </Text>

        {/*View to hold the child screens 
        which can be changed on the click of a button*/}
        <View style={{ backgroundColor: '#ffffff' }}>
          <RenderElement />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraphStyle: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 2,
  },
});

export default FragmentView;