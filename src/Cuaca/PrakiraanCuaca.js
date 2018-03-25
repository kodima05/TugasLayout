import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PrakiraanCuaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: ''
    };
  }

  getWeather= () => {
    let url = 'http://api.openweathermap.org/data2.5/weather?q=' + this.state.kota + '&appid=56da8a985259a0dda167e872b89039a9&units=metric';
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
      <View>
        <Text>Masukkan nama kota lalu tekan enter </Text>
        <TextInput
          onSubmitEditing={
            (event) => this.setState({ kota: event.nativeEvent.text })
          }
        />
        <Text>Kota : {this.state.kota}</Text>
      </View>
    );
  }
}
