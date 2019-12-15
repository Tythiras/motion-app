import React from 'react';
import {Button, Subtitle, Title} from 'native-base';
import {Image, Text, View} from 'react-native';
import IntroContainer from '../../components/IntroContainer';


export default class extends React.Component {

    render() {
        return (
            <IntroContainer>
                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Title style={{fontSize: 40}}>Velkommen!</Title>
                </View>
                <View style={{flex: 5, justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={{alignItems: 'center', justifyContent: 'space-around', width: '70%'}}>
                        <Subtitle style={{fontSize: 20, fontWeight: 'normal'}}>Bliv mere aktiv i hverdagen og få et
                            sundere liv!</Subtitle>
                        <Image style={{height: '40%', resizeMode: 'contain'}}
                               source={require('../../assets/images/yoga.png')}/>
                        <Subtitle style={{fontSize: 20}}>For at komme igang skal vi bruge nogle oplysnigner for at
                            hjælpe dig bedst muligt på vej.</Subtitle>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Button style={{borderRadius: 8}} bordered light medium onPress={this._next}>
                            <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 20}}>Næste</Text>
                        </Button>
                    </View>
                </View>
            </IntroContainer>
        );
    }

    _next = () => {
        this.props.navigation.navigate('JobGeneral');
    }

}

