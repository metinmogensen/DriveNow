import { StyleSheet, Text, View } from 'react-native';

const List = () => {

  return (
    <View style={styles.container}>
        <Text> I am the list component </Text>

      
    </View>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:16,
    backgroundColor: 'green'
  },
});

export default List