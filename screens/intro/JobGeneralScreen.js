import React from 'react';
import {Button, Title} from 'native-base';
import {Switch, Text, View, AsyncStorage} from 'react-native';
import IntroContainer from '../../components/IntroContainer';
import TimePicker from "../utils/TimePicker";


export default class extends React.Component {


    transportChange = (value) => {
        this.setState({
            transport: value
        });
    };


    handleTimePickedStart = (time) => {
      this.setState({startTime: time});
    };

    handleTimePickedEnd = (time) => {
        this.setState({endTime: time});
    };

    handleTimePickedBreakStart = (time) => {
        this.setState({breakTimeStart: time});
    };

    handleTimePickedBreakEnd = (time) => {
        this.setState({breakTimeEnd: time});
    };

    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchVal: value})
        //state changes according to switch
        //which will result in re-render the text
    };

    _next = () => {
        this.props.navigation.navigate('Introduction');
    };
    _before = () => {
        this.props.navigation.navigate('Welcome');
    };


    constructor(props) {
        super(props);
        this.state = {
            startTime: '09:30',
            endTime: '17:00',
            breakTimeStart: '12:00',
            breakTimeEnd: '12:30',
            switchVal: false
        };
    }

    render() {
        return (
            <IntroContainer>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Title style={{fontSize: 42}}>Dit job</Title>
                </View>
                <View style={{justifyContent: 'flex-start', paddingTop: 60}}>
                    <View style={{color: 'white', textAlign: 'center'}}>
                        <Title style={{fontSize: 24}}>
                            Hvornår er du på arbejde?
                        </Title>
                    </View>
                    <View style={{marginTop: 10, justifyContent: 'center', flexDirection: 'row'}}>
                        <TimePicker time={this.state.startTime} handleTimePicked={this.handleTimePickedStart}/>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 24, paddingHorizontal: 15}}>til</Text>
                        <TimePicker time={this.state.endTime} handleTimePicked={this.handleTimePickedEnd}/>
                    </View>
                </View>
                <View style={{flex: 2, justifyContent: 'flex-start' }}>
                    <View style={{color: 'white', textAlign: 'center', fontSize: 20, paddingBottom: 5, paddingTop: 50}}>
                        <Title style={{fontSize: 24}}>
                            Holder du nogle pauser?
                        </Title>
                    </View>
                    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 24, marginRight: 5}}>Nej</Text>
                        <Switch value={this.state.switchVal} onValueChange={this.toggleSwitch} style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}/>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 24, marginLeft: 4}}>Ja</Text>
                    </View>
                    {this.state.switchVal &&
                        <View style={{justifyContent: 'center', paddingTop: 40}}>
                            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Her kan du eksempelvis indskrive din frokost pause</Text>
                            <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 10}}>
                                <TimePicker time={this.state.breakTimeStart} handleTimePicked={this.handleTimePickedBreakStart}/>
                                <Text style={{color: 'white', textAlign: 'center', fontSize: 20, paddingHorizontal: 15}}>til</Text>
                                <TimePicker time={this.state.breakTimeEnd} handleTimePicked={this.handleTimePickedBreakEnd} />
                            </View>
                        </View>
                    }
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Button style={{borderRadius: 8, marginHorizontal: 10}} bordered light medium onPress={this._before}>
                        <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 20}}>Tilbage</Text>
                    </Button>
                    <Button style={{borderRadius: 8, marginHorizontal: 10}} bordered light medium onPress={this._next}>
                        <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 20}}>Næste</Text>
                    </Button>
                </View>
            </IntroContainer>
        );
    }
}
