import React from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';
import IntroContainer from "../../components/IntroContainer";
import {Title} from "native-base";


export default class extends React.Component {
  static navigationOptions = {
    title: 'Assignments',
  };
  render() {
    return (
      <IntroContainer>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Title style={{fontSize: 40}}>Pauser</Title>
        </View>
      </IntroContainer>
    );
  }

}
