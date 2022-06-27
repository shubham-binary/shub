import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavigationScreen from './src/navigation/NavigationScreen';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;