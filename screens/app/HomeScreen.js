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
import {Title, Subtitle} from 'native-base';
import ProgressBar from 'react-native-progress/Bar';



export default class extends React.Component {
  state = {
    minutesToNext: -1
  }

  _options = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('LoadingScreen');
  };
  _checkAssignment = () => {
    console.log('hey');
    console.log(this.state.minutesToNext);
    if(!this.state.minutesToNext || this.state.minutesToNext <= 0) {
      this.setState({minutesToNext: 25});
    } else {
      this.setState({minutesToNext: this.state.minutesToNext-1});
    }
    console.log(this.state.minutesToNext);
  }

  componentDidMount() {

    this._checkAssignment();
    AsyncStorage.getItem('minutesToNext')
      .then((minutes) => {
        this.state.minutesToNext = minutes;
        setInterval(this._checkAssignment, 60000)
      })
  }

  _next = async () => {
    this.props.navigation.navigate('Assignment');
  };

  componentWillUnmount() {
    AsyncStorage.setItem('minutesToNext', this.state.minutesToNext);
  }
  render() {
    return (
      <View style={{backgroundColor: "#17223b", flex: 1}}>
        <View style={{flex: 4, justifyContent: "center", textAlign: "center", alignContent: 'center'}}>
          <Title style={{fontSize: 32}}>{this.state.minutesToNext} minutter</Title>
          <Subtitle style={{fontSize: 24}}>Til næste øvelse</Subtitle>
          <View style={{flexDirection: 'column', alignItems: 'center', alignContent: 'center', marginTop: 30}}>
            <ProgressBar progress={this.state.minutesToNext / 60} width={230} color={'#48c774'} unfilledColor={'white'} borderWidth={0} />
          </View>
          <Subtitle style={{fontSize: 24, fontWeight: 'bold', marginTop: 30}}>Lav 5 armbøjninger</Subtitle>
        </View>
        <View style={{flex: 6,
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowColor: '#000000',
          elevation: 4,
          justifyContent: 'center'
        }}>
          <Button
              title="Lav 5 armbøjninger"
              type="outline"
              style={{width: "50%", }}
              onPress={this._next}
          />
        </View>
      </View>
    );
  }

}
