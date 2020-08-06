import React, { Component } from 'react';
import {
    StyleSheet, View, Text, TouchableHighlight, Image, Platform
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgColor1: '#ffffff',
            imgColor2: '#999999',
            imgColor3: '#999999',
            imgColor4: '#999999',
        }
    }

    onClickListener(tabValue) {
        console.log(tabValue);
        if (tabValue === '1') {
            this.setState({
                imgColor1: '#ffffff',
                imgColor2: '#999999',
                imgColor3: '#999999',
                imgColor4: '#999999',
            });
        } else if (tabValue === '2') {
            this.setState({
                imgColor1: '#999999',
                imgColor2: '#ffffff',
                imgColor3: '#999999',
                imgColor4: '#999999',
            });
        } else if (tabValue === '3') {
            this.setState({
                imgColor1: '#999999',
                imgColor2: '#999999',
                imgColor3: '#ffffff',
                imgColor4: '#999999',
            });
        } else if (tabValue === '4') {
            this.setState({
                imgColor1: '#999999',
                imgColor2: '#999999',
                imgColor3: '#999999',
                imgColor4: '#ffffff',
            });
        }
    }

    render() {
        const { changeActiveTab } = this.props;
        return (
            <View style={styles.background}>

                <View style={styles.footerStyle}>
                    <TouchableHighlight style={styles.tabStyle}
                        underlayColor={'transparent'}
                        onPress={() => { changeActiveTab(1); this.onClickListener('1'); }}>
                        <View style={styles.tabViewStyle}>
                            <Entypo size={28} color={this.state.imgColor1} name="bar-graph" />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.tabStyle}
                        underlayColor={'transparent'}
                        onPress={() => { changeActiveTab(2); this.onClickListener('2') }}>
                        <View style={styles.tabViewStyle}>
                            <Fontisto size={28} color={this.state.imgColor2} name="pie-chart-1" />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.tabStyle}
                        underlayColor={'transparent'}
                        onPress={() => { changeActiveTab(3); this.onClickListener('3') }}>
                        <View style={styles.tabViewStyle}>
                            <AntDesign size={30} color={this.state.imgColor3} name="bars" />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.tabStyle}
                        underlayColor={'transparent'}
                        onPress={() => { changeActiveTab(4); this.onClickListener('4') }}>
                        <View style={styles.tabViewStyle}>
                            <FontAwesome size={28} color={this.state.imgColor4} name="user" />
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#000000',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    footerStyle: {
        flexDirection: 'row',
    },
    tabStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    tabViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtStyle: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 5,
        letterSpacing: 0.5,
    },
    searchBg: {
        backgroundColor: '#000000',
        padding: 15,
        borderRadius: 40,
        marginBottom: 20
    }
});