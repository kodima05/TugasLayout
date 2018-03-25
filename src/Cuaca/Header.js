import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
    <View style={styles.contHeader}>
      <Text style={styles.textHeader}>
        {props.headerText}
      </Text>
    </View>
  );
const styles = {
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 60,
    position: 'relative'
  },
  textHeader: {
    marginTop: 15,
    fontSize: 20,
    color: 'white'
  }
};

export default Header;
