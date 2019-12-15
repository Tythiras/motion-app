import React from 'react';
import { StatusBar } from 'react-native';
import { View, Title } from 'native-base';

export default class extends React.Component {
    render() {
      return (
          <View style={{flexDirection: 'row', width: '100%', paddingVertical: 20, borderBottomColor: 'white', borderBottomWidth: 1}}>
              <View style={{flex: 1, paddingLeft: 10}}>
                {this.props.icon}
              </View>
              <Title style={{flex: 6, justifyContent: 'flex-start', textAlign: 'left'}}>{this.props.title}</Title>
              <Title style={{flex: 2}}>{this.props.time}</Title>
          </View>
      );
    }

}
