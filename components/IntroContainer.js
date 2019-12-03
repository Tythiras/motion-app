import React from 'react';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class extends React.Component {  
    render() {
      return (
        <LinearGradient style={{width: '100%', height: '100%', alignContent: "center", alignItems: 'center', paddingTop: StatusBar.currentHeight + 40, paddingHorizontal: 30}}
          colors={['rgba(9,9,121,1)', 'rgba(0,212,255,1)']}>
            {this.props.children}
        </LinearGradient>       
      );
    }
  
}