import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import SearchBox from './src/components/search-box/search-box.component';
import List from './src/components/list/list.component';


export default function App() {
  return (
    <>    
    <SafeAreaView style={styles.container}>   
        <SearchBox />
        <List /> 
    </SafeAreaView>
    <ExpoStatusBar style='auto'/>
    </>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    marginTop: StatusBar.currentHeight

  },
});
