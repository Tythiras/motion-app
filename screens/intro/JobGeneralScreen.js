import React from 'react';
import {Icon, Item, Picker, Title} from 'native-base';
import {View, Text} from 'react-native';
import IntroContainer from '../../components/IntroContainer';


export default class extends React.Component {
    render() {
        return (
            <IntroContainer>
                <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'flex-end'}}>
                    <Title style={{fontSize: 40}}>Dit job</Title>
                </View>
                <View style={{flex: 5, backgroundColor: 'blue', justifyContent: 'space-around'}}>
                    <View style={{backgroundColor: 'green',}}>
                        <Title style={{color: 'white', textAlign: 'center', fontSize: 20, paddingBottom: 5}}>
                            Hvornår er du på arbejde
                        </Title>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20, paddingBottom: 5}}>Start</Text>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20, paddingBottom: 5}}>Slut</Text>
                    </View>
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
