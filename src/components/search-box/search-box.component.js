import { StyleSheet, Text, View } from 'react-native';

const SearchBox = () => {

  return (
    <View style={styles.searchBox}>

      <Text> i am the searchbox</Text>
    </View>
  );
  }


const styles = StyleSheet.create({
  searchBox: {
    padding:16,
    backgroundColor: 'blue'
  },
});

export default SearchBox