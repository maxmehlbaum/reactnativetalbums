import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// do need access to state or life cycle components
//and thats why it s not a class
const AlbumDetail = (props) => {
  return (
    <Card>
    <CardSection>
      <Text>{props.album.title}</Text>
      </CardSection>


      <CardSection>
        <Text>{props.album.title}</Text>
        </CardSection>
    </Card>
  );
};

export default AlbumDetail;
