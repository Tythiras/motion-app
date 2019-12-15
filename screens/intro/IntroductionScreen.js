import React from 'react';
import {Button, Title, Subtitle} from 'native-base';
import {Image, Text, View, AsyncStorage} from 'react-native';
import IntroContainer from '../../components/IntroContainer';


export default class extends React.Component {
  static navigationOptions = {
    title: 'Assignments',
  };

  _next = async () => {
    await AsyncStorage.setItem('introDone', 'yes');
    this.props.navigation.navigate('App');
  };
  _before = () => {
    this.props.navigation.navigate('JobGeneral');
  };
  render() {
    return (
      <IntroContainer>
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={{fontSize: 40, color: 'white', textAlign: 'center'}}>Du er nu klar til at komme igang!</Text>
          </View>
          <View style={{flex: 5, justifyContent: 'space-around', alignItems: 'center'}}>
              <View style={{alignItems: 'center', justifyContent: 'space-around', width: '70%', borderBottomColor: 'white', borderBottomWidth: 2}}>
                  <Subtitle style={{fontSize: 20, fontWeight: 'normal'}}>Du kan se kommende øvelser vi anbefaler dig at gennemføre under oversigten, klik på dem for at læse mere!</Subtitle>
                  <Image style={{height: '40%', resizeMode: 'contain'}}
                         source={require('../../assets/images/done.png')}/>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Button style={{borderRadius: 8, marginBottom: 20}} success medium onPress={this._next}>
                      <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 20}}>Gå til oversigt</Text>
                  </Button>
                  <Button style={{borderRadius: 8}} bordered light medium onPress={this._before}>
                      <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 20}}>Tilbage</Text>
                  </Button>
              </View>
          </View>
      </IntroContainer>
    );
  }

}
