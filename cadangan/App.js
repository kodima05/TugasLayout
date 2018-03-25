import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textPertama}>Open up App.js to start working on your app!</Text>
        <Text style={styles.textKedua}>Changes you make will automatically reload.</Text>
        <Text style={styles.textKetiga}>Shake your phone to open the developer menu.</Text>
        <Text>By Aditya30</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPertama: {
    fontSize: 15,
    color: 'yellow',
  },
  textKedua: {
    fontSize: 20,
    color: 'pink',
  },
  textKetiga: {
    fontSize: 25,
    color: 'red',
  },
});
