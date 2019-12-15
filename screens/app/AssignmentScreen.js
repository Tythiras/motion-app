import React from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';
import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class extends React.Component {
  static navigationOptions = {
    title: 'Assignments',
  };

  async componentDidMount() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
      console.log('Notification permissions granted.')
    }

    Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.info(`Notification (${origin}) with data: ${JSON.stringify(data)}`)
  }

  _sendImmediateNotification () {
    const localNotification = {
      title: 'Har du husket at tage en pause?',
      body: "Ta' lig et tår vand",
      data: { type: 'immediate' }
    }

    console.log('Scheduling immediate notification:', { localNotification })

    Notifications.presentLocalNotificationAsync(localNotification)
        .then(id => console.info(`Immediate notification scheduled (${id})`))
        .catch(err => console.error(err))
  }



  render() {
    return (
      <View>
        <Button
            title="Lav 5 armbøjninger"
            type="outline"
            style={{width: "50%", }}
            onPress={this._sendImmediateNotification}
        />
      </View>
    );
  }

}
