import React from 'react';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class extends React.Component {
    render() {
      return (
        <LinearGradient style={{flex: 1}}
          colors={['rgba(9,9,121,1)', 'rgba(0,212,255,1)']}>
            {this.props.children}
        </LinearGradient>
      );
    }

}
