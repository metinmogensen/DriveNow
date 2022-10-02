import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';


const SearchBox = () => {

  return (
    <View style={styles.searchBox}>

        <Searchbar
      placeholder="Search"

    />
    </View>
  );
  }


const styles = StyleSheet.create({
  searchBox: {
    padding:16,
    backgroundColor: 'white'
  },
});

export default SearchBox