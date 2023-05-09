
import React from "react";
import { View, Button, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={require('..TimisoaraMap.png')} style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to my app!</Text>
        <TouchableOpacity style={{marginTop: 20, backgroundColor: 'blue', padding: 10}} onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white'}}>Press to navigate</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
  
  
  export default Home;
  