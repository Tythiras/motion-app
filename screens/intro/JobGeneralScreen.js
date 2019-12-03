import React from 'react';
import {Title, Subtitle, Button, Item, Picker, Icon} from 'native-base';
import {
  View,
  Text
} from 'react-native';
import IntroContainer from '../../components/IntroContainer';
import Label from '../../components/Label';


export default class extends React.Component {
  render() {
    return (
      <IntroContainer>
        <Title style={{ fontSize: 40, marginBottom: 100 }}>Dit job</Title>
        <View style={{borderBottomColor: 'white', borderBottomWidth: 3, paddingBottom: 30, alignItems: 'center'}}>
          <Label>Hvordan kommer du til og fra arbejde?</Label>

          <Item picker style={{width: '70%', fontSize: 20}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ color: 'white' }}
              placeholder="Vælg transportmiddel"
              selectedValue={this.state.transport}
              onValueChange={this.transportChange.bind(this)}
            >
              <Picker.Item label="Vælg transportmiddel" value="null" />
              <Picker.Item label="Cykler" value="cycle" />
              <Picker.Item label="Offentlig transport" value="public" />
              <Picker.Item label="Kører i bil" value="car" />
              <Picker.Item label="Går" value="walk" />
            </Picker>
          </Item>
        </View>
      </IntroContainer>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      transport: undefined
    };
  }
  transportChange(value) {
    this.setState({
      transport: value
    });
  }

}
