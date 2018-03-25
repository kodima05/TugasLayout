/**
 * Resika
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.title}>
           <Text style={styles.texttitle} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={styles.input}>
            <TextInput
              style={styles.inputarea}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputarea}
              placeholder="Masukkan Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputarea}
              placeholder="Masukkan Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              color="forestgreen"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={styles.output}>
          <Text style={styles.outputarea} >
              Panjang= {this.state.panjang} {'\n'}
              Lebar={this.state.lebar} {'\n'}
              Tinggi= {this.state.tinggi} {'\n'}
              Volume={this.state.volume}
          </Text>
         </View>

   </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'chartreuse',
  },
  title: {
  backgroundColor: 'green',
  },
  texttitle: {
  padding: 10,
  fontSize: 20,
  color: 'white',
  textAlign: 'center',
  },
  input: {
  margin: 20,
  padding: 10,
  backgroundColor: 'palegreen',
  },
  inputarea: {
  height: 40,
  },
  output: {
  margin: 20,
  backgroundColor: 'limegreen',
  },
  outputarea: {
  padding: 10,
  fontSize: 20,
  },
});
