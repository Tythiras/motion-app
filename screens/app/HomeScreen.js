import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';



export default class extends React.Component {
  state = {
    userToken: ''
  }
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  _options = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('LoadingScreen');
  };
  componentDidMount() {
    AsyncStorage.getItem('userToken')
      .then((userToken) => {
        this.setState({ userToken })
      });
      
  }
  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Start på ny" onPress={this._options} />
        <Text>ORALE</Text>
      </View>
    );
  }

}
