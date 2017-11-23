import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MenuScreen extends Component {

    static navigationOption = ({ navigation }) => {
        const { state, setParams } = navigation;
        const { from } = state.params;
    }
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Hello, welcome to MENU SCREEN!</Text>
                <Text>You came from {params.from}</Text>
                <Button
                    onPress={() => navigate('Home')}
                    title='Go to HOME'
                />
            </View>
        )
    }
}