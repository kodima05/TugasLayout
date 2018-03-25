import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.boxrow}>
            <View style={styles.boxes}>
              <Text style={styles.text3}>1</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.text3}>2</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.text3}>3</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.text3}>4</Text>
            </View>
          </View>
          <View style={styles.boxrow}>
            <View style={styles.boxes}>
              <Text style={styles.text3}>5</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.text3}>6</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.text3}>7</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.text3}>8</Text>
            </View>
          </View>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}>#JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#00BFFF',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    backgroundColor: '#0000FF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: '#1E90FF',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: '#00ADFF',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  box4: {
    backgroundColor: '#0000BF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxrow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxes: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20
  },
  text1: {
    color: 'white',
    fontSize: 20
  },
  text2: {
    color: 'black',
    fontSize: 20
  },
  text3: {
    color: 'black',
    fontSize: 16
  }
});
