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
import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class extends React.Component {
  _isMounted = false;

  state = {
    secondsToNext: -1
  }
  _startNotification = () => {
    Notifications.scheduleLocalNotificationAsync(
      {
        title: 'Har du husket din øvelse?',
        body: 'Lav 5 armbøjninger'
      },
      {
        time: new Date().getTime() + this.state.secondsToNext*1000
      }
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.info(`Notification (${origin}) with data: ${JSON.stringify(data)}`)
  }
  _options = async () => {
    console.log('hey');
    await AsyncStorage.clear();
    this.props.navigation.navigate('LoadingScreen');
  };
  _setTime = (newSeconds) => {
    if(this._isMounted) {
      return new Promise((resolve, reject) => {
        if(this._isMounted) {
          this.setState({secondsToNext: newSeconds});
        }
        AsyncStorage.setItem('secondsToNext', newSeconds.toString()).then(() => {
            resolve();
        });

      })
    }
  }
  _checkAssignment = () => {
    
    if(!this.state.secondsToNext || this.state.secondsToNext <= 0) {
      this._setTime(25 * 60).then(() => {
        this._startNotification();
      });
    } else {
      this._setTime(this.state.secondsToNext-1);
    }
  
  }
  
  async componentDidMount() {
    this._isMounted = true;


    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
      console.log('Notification permissions granted.')
    }

    Notifications.addListener(this._handleNotification);
    AsyncStorage.getItem('secondsToNext')
      .then((seconds) => {
        let time;
        if(seconds) {
          time = parseInt(seconds);
        } else {
          time = 0;
        }
        this._setTime(time).then(() => {
          setInterval(this._checkAssignment, 1000)
        });
      })
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <View style={{backgroundColor: "#17223b", flex: 1}}>
        <View style={{position: 'absolute', right: 10, top: 23, zIndex: 1000}}>
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
            containerStyle={{width: 40}}
          />
        </View>
        <View style={{flex: 4, justifyContent: "center", textAlign: "center", alignContent: 'center', elevation: 1}}>
          <Title style={{fontSize: 32}}>{Math.ceil(this.state.secondsToNext / 60)} minutter</Title>
          <Subtitle style={{fontSize: 24}}>Til næste øvelse</Subtitle>
          <View style={{flexDirection: 'column', alignItems: 'center', alignContent: 'center', marginTop: 30}}>
            <ProgressBar progress={(this.state.secondsToNext / 60) / 60} width={230} color={'#48c774'} unfilledColor={'white'} borderWidth={0} />
          </View>
          <Subtitle style={{fontSize: 24, fontWeight: 'bold', marginTop: 30}}>Lav 5 armbøjninger</Subtitle>
        </View>
        <View style={{flex: 6, backgroundColor: "#00184d", height: "100%", elevation: 30, borderTopColor: 'black', borderTopWidth: 2}}>
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
