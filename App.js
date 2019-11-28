import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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

export default createAppContainer(
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