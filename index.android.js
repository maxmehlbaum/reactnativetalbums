// Index.android.js - code for andriod!!!


//import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
// component is a javascript function that runs jsx
const App = () => (
  //flex style lets you expand component to fill entire area of device
  <View style={{ flex: 1 }}>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
);


//render it to the device.
AppRegistry.registerComponent('albums', () => App);
// every app is to register at least one component.
