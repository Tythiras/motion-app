import React from 'react';
import {
  AsyncStorage,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';

import {Title, Subtitle} from 'native-base';
import ProgressBar from 'react-native-progress/Bar';
import { Ionicons } from '@expo/vector-icons';

import Assignment from '../../components/Assignment';
export default class extends React.Component {
  state = {
    minutesToNext: -1
  }

  _options = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('LoadingScreen');
  };
  _checkAssignment = () => {
    if(!this.state.minutesToNext || this.state.minutesToNext <= 0) {
      this.setState({minutesToNext: 25});
    } else {
      this.setState({minutesToNext: this.state.minutesToNext-1});
    }
  }
  componentDidMount() {
    this._checkAssignment();
    AsyncStorage.getItem('minutesToNext')
      .then((minutes) => {
        this.state.minutesToNext = minutes;
        setInterval(this._checkAssignment, 60000)
      })
  }
  componentWillUnmount() {
    AsyncStorage.setItem('minutesToNext', this.state.minutesToNext);
  }
  
  render() {
    return (
      <View style={{backgroundColor: "#17223b", flex: 1}}>
        <Button
          icon={
            <Ionicons
              name="ios-build"
              size={30}
              color="white"
            />
          }
          iconRight
          title=""
          onPress={this._options}
          type="clear"
          containerStyle={{width: 40, position: 'absolute', right: 10, top: 23}}
        />
        <View style={{flex: 4, justifyContent: "center", textAlign: "center", alignContent: 'center', elevation: 1, borderTopColor: 'black', borderTopWidth: 2}}>
          <Title style={{fontSize: 32}}>{this.state.minutesToNext} minutter</Title>
          <Subtitle style={{fontSize: 24}}>Til næste øvelse</Subtitle>
          <View style={{flexDirection: 'column', alignItems: 'center', alignContent: 'center', marginTop: 30}}>
            <ProgressBar progress={this.state.minutesToNext / 60} width={230} color={'#48c774'} unfilledColor={'white'} borderWidth={0} />
          </View>
          <Subtitle style={{fontSize: 24, fontWeight: 'bold', marginTop: 30}}>Lav 5 armbøjninger</Subtitle>

        </View>
        <View style={{flex: 6, backgroundColor: "#00184d", height: "100%", elevation: 30}}>
          <Assignment icon={<Ionicons name="ios-bicycle" size={30} color="white" />} title="Lav 5 armbøjninger" time="14:00" />
          <Assignment icon={<Ionicons name="ios-body" size={30} color="white" />} title="Lav 5 englehop" time="15:00" />
          <Assignment icon={<Ionicons name="ios-egg" size={30} color="white" />} title="Spis noget mad" time="16:00" />
          <Assignment icon={<Ionicons name="ios-bicycle" size={30} color="white" />} title="Lorem ipsum" time="23:00" />
          <Assignment icon={<Ionicons name="ios-bicycle" size={30} color="white" />} title="Lorem ipsum" time="23:00" />
          <Assignment icon={<Ionicons name="ios-bicycle" size={30} color="white" />} title="Lorem ipsum" time="23:00" />
          <Assignment icon={<Ionicons name="ios-bicycle" size={30} color="white" />} title="Lorem ipsum" time="2312:00" />

        </View>
      </View>
    );
  }

}
