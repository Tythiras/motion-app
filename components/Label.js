import React from 'react';
import {Text} from 'react-native';
export default class extends React.Component {  
    render() {
      return (
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20, paddingBottom: 5}}>
            {this.props.children}
        </Text>       
      );
    }
  
}