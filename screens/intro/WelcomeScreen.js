import React from 'react';
import {Title, Subtitle, Button} from 'native-base';
import {
  View,
  Text,
  Image
} from 'react-native';
import IntroContainer from '../../components/IntroContainer';


export default class extends React.Component {
  
    render() {
      return (
        <IntroContainer>
          <Title style={{fontSize: 40}}>Velkommen!</Title>
          <Subtitle style={{fontSize: 26, marginTop: 20, fontWeight: 'normal'}}>Bliv mere aktiv i hverdagen og få et sundere liv!</Subtitle>

          <Image
            style={{height: '40%', resizeMode: 'contain'}}
            source={require('../../assets/images/yoga.png')}
          />
  
          <Subtitle style={{fontSize: 23, marginTop: 20}}>For at komme igang skal vi bruge nogle oplysnigner for at hjælpe dig bedst muligt på vej.</Subtitle>
          <Button onPress={this._next} bordered light medium style={{paddingHorizontal: 50, marginTop: 40, borderRadius: 8}}>
            <Text style={{color: 'white', fontSize: 20}}>Næste</Text>
          </Button>
        </IntroContainer>
      );
    }
    _next = () => {
      this.props.navigation.navigate('JobGeneral');
    }
    _signInAsync = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('JobGeneral');
    };
}