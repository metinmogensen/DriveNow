import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import DrivingSchoolScreen from './src/features/screens/drivingSchool.screen';


export default function App() {
  return (
    <>    
    <SafeAreaView style={styles.container}>   
      <DrivingSchoolScreen />  
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
