import React, { Component } from "react";
import { Button, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class TimePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTimePickerVisible: false,
            time: this.props.time ? this.props.time : "09:00",
        };
    }

    showTimePicker = () => {
        this.setState({ isTimePickerVisible: true });
    };

    hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false });
    };

    handleTimePicked = date => {
        let splitted = date.toTimeString().split(':');
        this.setState({time: splitted[0]+":"+splitted[1]});
        this.hideTimePicker();
        this.props.handleTimePicked(date);
    };

    render() {
        return (
            <>
                <Button title={this.state.time} onPress={this.showTimePicker} />
                <DateTimePicker
                    mode={"time"}
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={this.handleTimePicked}
                    onCancel={this.hideTimePicker}
                />
            </>
        );
    }
}
