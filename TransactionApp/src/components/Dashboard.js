import React, { Component } from 'react';
import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import Footer from '../pages/Footer';
import Tab2 from './BottomTabBar/Tab2';
import Tab1 from './BottomTabBar/Tab1';
import Tab3 from './BottomTabBar/Tab3';
import Tab4 from './BottomTabBar/Tab4';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screen: 1,
        }
    }

    //for handling backgesture in ios
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
        disableGestures: true
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        //this.props.navigation.isFocused() helps to exit the app in one screen not in the whole
        if (this.props.navigation.isFocused()) {
            Alert.alert(
                '',
                'Are you sure you want to quit the app?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp()
                    }
                ],
                { cancelable: false },
            );
            return true;
        }
    }

    changeScreen = () => {
        switch (this.state.screen) {
            case 1:
                return <Tab1 navigation={this.props.navigation} />;
            case 2:
                return <Tab2 navigation={this.props.navigation} />;
            case 3:
                return <Tab3 navigation={this.props.navigation} />;
            case 4:
                return <Tab4 navigation={this.props.navigation} />;
        }
    }

    changeActiveTab = (screenVal) => {
        this.setState({ screen: screenVal });
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.background}>
                <View style={{ flex: 10 }}>
                    {this.changeScreen()}
                </View>
                <View style={{ flex: 1 }}>
                    <Footer changeActiveTab={this.changeActiveTab} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column'
    },
});