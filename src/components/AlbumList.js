import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

state = { albums: [] };

  // this method will automatically execute as everything is going to the screen
componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
}
  // we look at the state and
  //use map to (pass a fat error function for each value and enter the value into a new array)
  // each property must have a key component
  // performance concerns to have a key attatched to it
  // making sure list have components to re-render it
renderAlbums() {
  return this.state.albums.map(album =>
    //comunicate from parent list to album detail to show specific album
     < AlbumDetail key={album.title} album={album} />
   );
}

//album detail to take one album and render info about the album

  render() {
    console.log(this.state);
  return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumList;
