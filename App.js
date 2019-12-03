import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import LoadingScreen from './screens/LoadingScreen';
import SettingsScreen from './screens/SettingsScreen';

import HomeScreen from './screens/app/HomeScreen';
import AssignmentScreen from './screens/app/AssignmentScreen';

import WelcomeScreen from './screens/intro/WelcomeScreen';
import JobGeneralScreen from './screens/intro/JobGeneralScreen';
import JobBreaksScreen from './screens/intro/JobBreaksScreen';
import IntroductionScreen from './screens/intro/IntroductionScreen';


const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Assignment: {
    screen: AssignmentScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
});
const IntroStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    JobGeneral: {
      screen: JobGeneralScreen
    },
    JobBreaks: {
      screen: JobBreaksScreen
    },
    Introduction: {
      screen: IntroductionScreen
    }
  },
  {
    headerMode: 'none'
  }
);

let AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen: LoadingScreen,
      App: AppStack,
      Intro: IntroStack,
    },
    {
      initialRouteName: 'LoadingScreen',
    }
  )
);
export default class App extends React.Component {

  state = {
      assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  
      this.setState({ assetsLoaded: true });
  }

  render() {

      const {assetsLoaded} = this.state;

      if( assetsLoaded ) {
          return (
              <AppContainer
                  ref={nav => {
                      this.navigator = nav;
                  }}
              />
          );
      }
      else {
          return (
              <View style={styles.container}>
                  <ActivityIndicator />
                  <StatusBar barStyle="default" />
              </View>
          );
      }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
});