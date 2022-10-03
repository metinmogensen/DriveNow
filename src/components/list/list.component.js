import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card } from 'react-native-paper';


const List = ( ) => {
  const drivingSchools = [ 
    {
    name: 'Some Driving School',
    photos: [
      "https://media.istockphoto.com/photos/teenager-learning-to-drive-picture-id124089966"
    ],
    adress: ' Morsøvej 15 st. th. ',
    rating: 5,
  },
  {
    name: 'Some Driving School 2',
    photos: [
      "https://image.shutterstock.com/image-photo/driving-school-beautiful-young-woman-600w-1135233953.jpg"
    ],
    adress: ' Morsøvej 15 st. th. ',
    rating: 5,
  }
]
  
  return drivingSchools.map( schools =>
    <View style={styles.container}>
  <Card> 
    <Card.Title title={`${schools.name}`} subtitle={`${schools.adress}`} />
  <Card.Cover source={{ uri: schools.photos[0] }} />
    <Card.Actions>
      <Button>Look op stats</Button>
      <Button>Contant</Button>
    </Card.Actions>
  </Card>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:16,
    backgroundColor: 'green'
  },
});

export default List