import React from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';


export default class extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View>
          <Text>ORALE</Text>
        </View>
      );
    }
  
    _signInAsync = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('JobGeneral');
    };
}