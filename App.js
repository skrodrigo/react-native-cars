import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import CarInputComponent from './components/CarInputComponent';
import CarCountComponent from './components/CarCountComponent';
import CarListComponent from './components/CarListComponent';

import { CarProvider } from './components/CarContext';

export default function App() {
  return (
    <CarProvider>

    <View style={styles.container}>
      <CarInputComponent />
      <CarCountComponent />
      <CarListComponent />
      <StatusBar style="auto" />
    </View>

    </CarProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
