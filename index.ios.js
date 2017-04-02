// Index.ios.js - code for ios!!!
//import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
// component is a javascript function that runs jsx
const App = () => (
  <View>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
);


//render it to the device.
AppRegistry.registerComponent('albums', () => App);
// every app is to register at least one component.
