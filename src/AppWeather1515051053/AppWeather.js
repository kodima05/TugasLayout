import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class AppWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: ''
    };
  }

  getWeather= () => {
    let url = 'http://api.openweathermap.org/data2.5/weather?q=' + this.state.city + '&appid=56da8a985259a0dda167e872b89039a9&units=metric';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text1}>Weather Forecast</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text2}>Masukkan nama kota lalu tekan enter </Text>
          <TextInput
            onSubmitEditing={
              (event) => this.setState({ city: event.nativeEvent.text })
            }
          />
        </View>
        <View style={styles.box3}>
          getWeather();
          <Text>Main : {this.state.forecast.main}</Text>
          <Text>Description : {this.state.forecast.description}</Text>
          <Text>Temperature : {this.state.forecast.temp}</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}>by PTI Undiksha</Text>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: '#00ADFF',
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    backgroundColor: '#0000BF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    color: 'white',
    fontSize: 20
  },
  text2: {
    color: 'black',
    fontSize: 20
  }
});
