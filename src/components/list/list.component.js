import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card } from 'react-native-paper';



const List = ( { drivingSchools = {} } ) => {
  const {
    name = 'Some Driving School',
    photos = [
      "https://media.istockphoto.com/photos/teenager-learning-to-drive-picture-id124089966"
    ],
    adress = ' Morsøvej 15 st. th. ',
    isOpenNow = true,
    rating = 5,
  } = drivingSchools;
  
  return (
    <View style={styles.container}>
  <Card> 
    <Card.Title title={`${name}`} subtitle={`${adress}`} />
  <Card.Cover source={{ uri: photos[0] }} />
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