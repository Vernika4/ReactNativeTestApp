import React, { Component } from 'react';
import {
    View, StyleSheet, StatusBar, Text, TouchableHighlight, Modal, TextInput, ScrollView, Image
} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast'

export default class Tab2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totAmt: 31.32,
            modalVisible: false,
            type: 'default',
            amount: 0,
            amountArr: [
                {
                    "type": "Withdrew",
                    "amount": "-$900.00",
                    "date": "Mar 1, 2020",
                    "balance": "$31.32",
                    "image": require('../../images/arrows.png'),
                },
                {
                    "type": "Trade Fee",
                    "amount": "$0.00",
                    "date": "Mar 1, 2020",
                    "balance": "$931.32",
                    "image": require('../../images/percent.png'),
                },
                {
                    "type": "Buy",
                    "amount": "$0.00",
                    "date": "Mar 1, 2020",
                    "balance": "$931.32",
                    "image": require('../../images/small.png'),
                },
                {
                    "type": "Trade Fee",
                    "amount": "-$4.17",
                    "date": "Mar 1, 2020",
                    "balance": "$931.32",
                    "image": require('../../images/percent.png'),
                },
            ]
        }
    }

    submitAmt() {
        if (this.state.amount !== 0) {
            this.setState({ modalVisible: false });
            if (this.state.type === 'Deposit') {
                var balance = Number(this.state.totAmt) + Number(this.state.amount);
                this.setState({ totAmt: balance });
                this.state.amountArr.push({
                    "type": "Deposited",
                    "amount": "$" + this.state.amount,
                    "date": "Aug 06, 2020",
                    "balance": balance,
                    "image": require('../../images/arrows.png'),
                });
            } else if (this.state.type === 'Withdraw') {
                var balance1 = this.state.totAmt - this.state.amount;
                this.setState({ totAmt: balance1 });
                this.state.amountArr.push({
                    "type": "Withdrew",
                    "amount": "$" + this.state.amount,
                    "date": "Aug 06, 2020",
                    "balance": balance1,
                    "image": require('../../images/arrows.png'),
                });
            }
        } else {
            this.refs.toast.show('Please enter the amount');
        }
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.background}>
                <StatusBar hidden={true} />

                <Text style={styles.amtTxt}>${this.state.totAmt}</Text>

                <View style={styles.rowView}>

                    <TouchableHighlight onPress={() => this.setState({ modalVisible: true, type: 'Deposit', amount: 0 })}>
                        <View style={styles.depositView}>
                            <Text style={styles.depositTxt}>Deposit</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.setState({ modalVisible: true, type: 'Withdraw', amount: 0 })}>
                        <View style={styles.depositView}>
                            <Text style={styles.depositTxt}>Withdraw</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <Text style={styles.txt1}>RECENT TRANSACTIONS</Text>

                <ScrollView horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ width: '100%', backgroundColor: '#000000', marginTop: 25 }}>
                    {this.state.amountArr.map((item, index) =>
                        <View style={styles.tView} key={index}>
                            <Image
                                source={item.image}
                                style={styles.logo1} />
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.typeTxt}>{item.type}</Text>
                                    <Text style={styles.dateTxt}>{item.date}</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={[styles.typeTxt, { textAlign: 'right' }]}>{item.amount}</Text>
                                    <Text style={[styles.dateTxt, { textAlign: 'right' }]}>{item.balance}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>

                <Modal animationType={"fade"} transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={styles.modalBg}>
                        <View style={styles.bg}>

                            <TextInput
                                style={styles.textInput}
                                onChangeText={(amount) => this.setState({ amount })}
                                returnKeyType={'done'}
                                keyboardType='numeric'
                                value={this.state.amount}
                                placeholder='Enter the amount'
                                placeholderTextColor='#000000'
                            />

                            <TouchableHighlight style={styles.btnView} onPress={() => this.submitAmt()}>
                                <Text style={styles.btnTxt}>{this.state.type}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <Toast ref="toast" />

                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000000',
    },
    amtTxt: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 45
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 45,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 55,
        alignItems: 'center'
    },
    depositView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 8
    },
    depositTxt: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    modalBg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingLeft: 25,
        paddingRight: 25
    },
    bg: {
        backgroundColor: '#ffffff',
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: 150,
        height: 45,
    },
    btnView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        width: 150,
        height: 45,
        borderRadius: 8,
        marginTop: 15
    },
    btnTxt: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    txt1: {
        marginTop: 55,
        color: '#999999',
        fontSize: 17,
        fontWeight: 'normal',
        paddingLeft: 15,
        letterSpacing: 1
    },
    tView: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    logo1: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#999999',
        marginLeft: 10,
        marginRight: 20
    },
    typeTxt: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    dateTxt: {
        color: '#999999',
        fontSize: 15
    }
});