
import React from "react";
import { View, Button, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import MapView from "react-native-maps";

const Home = ({ navigation }) => {
  return (
<MapView
  style={{width: '100%', height: '100%'}}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>     
 <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to my app!</Text>
        <TouchableOpacity style={{marginTop: 20, backgroundColor: 'blue', padding: 10}} onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white'}}>Press to navigate</Text>
        </TouchableOpacity>
      </View>
    </MapView>
  );
};
  
  
  export default Home;
  