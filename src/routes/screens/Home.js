import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is MAIN SCREEN</Text>
                <Button
                    onPress = {() => navigate('Menu', {from: 'Main Screen'})}
                    title = 'Go to Menu Screen'
                />
            </View>
        )
    }
}