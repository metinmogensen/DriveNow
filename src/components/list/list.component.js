import { StyleSheet, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Button, Card } from 'react-native-paper';


const List = ( ) => {
  const [drivingSchools, setDrivingSchools] = useState([ 
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
  },
  {
    name: 'Some Driving School 2',
    photos: [
      "https://image.shutterstock.com/image-photo/driving-school-beautiful-young-woman-600w-1135233953.jpg"
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
])
  return (
<FlatList 
data={drivingSchools}
renderItem={({item}) => (
  <View style={styles.container}>
  <Card> 
  <Card.Title title={item.name} subtitle={item.adress} />
<Card.Cover source={{ uri: item.photos[0] }} />
  <Card.Actions>
    <Button>Look op stats</Button>
    <Button>Contant</Button>
  </Card.Actions>
</Card>
  </View>
)}
/>

  )}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:16,
    backgroundColor: 'white'
  },
});

export default List