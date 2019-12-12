import React from 'react';
import {Icon, Item, Picker, Title} from 'native-base';
import {View, Text} from 'react-native';
import IntroContainer from '../../components/IntroContainer';
import TimePicker from "../utils/TimePicker";


export default class extends React.Component {


    transportChange = (value) => {
        this.setState({
            transport: value
        });
    };


    handleTimePicked = (date) => {
      console.log(date);
    };

    constructor(props) {
        super(props);
        this.state = {
            startTime: '09:30',
            endTime: '17:00'
        };
    }

    render() {
        return (
            <IntroContainer>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Title style={{fontSize: 40}}>Dit job</Title>
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                    <View style={{}}>
                        <Title style={{color: 'white', textAlign: 'center', fontSize: 20, paddingBottom: 5}}>
                            Hvornår er du på arbejde
                        </Title>
                    </View>
                    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                        <TimePicker time={this.state.startTime} handleTimePicked={this.handleTimePicked}/>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20, paddingHorizontal: 15}}>til</Text>
                        <TimePicker time={this.state.endTime} handleTimePicked={this.handleTimePicked}/>
                    </View>
                </View>
            </IntroContainer>
        );
    }
}
