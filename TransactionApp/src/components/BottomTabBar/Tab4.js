import React, { Component } from 'react';
import {
    View, StyleSheet, StatusBar
} from 'react-native';

export default class Tab4 extends Component {

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.background}>
                <StatusBar hidden={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000000',
    },
});