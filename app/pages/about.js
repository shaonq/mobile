
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    Image,
    View,
    Platform,
    BackAndroid,
} from 'react-native';

import NavBar, { NavButton, NavButtonText,NavGroup, NavTitle } from 'react-native-nav'
import Colors from '../common/Colors';

export default class About extends Component {
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        const { navigator } = this.props;
        const nav = navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    };
    render() {
        return(
            <View style={styles.background}>
                <NavBar>
                    <NavTitle >
                        {"关于我"}
                    </NavTitle>
                </NavBar>
                <View style={styles.phone}>
                    <Text style={styles.phoneText}>这是一个学习demo</Text>
                    <Text style={styles.phoneNumber}>就是这样</Text>
                </View>
                <Text style={styles.endText}>@YanYujiangnan</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: Colors.mainBackground,
    },
    phone:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneText:{
        marginTop: 5,
        color: '#999',
        fontSize: 14,
    },
    phoneNumber:{
        color: '#e55500',
        fontSize: 16,
        marginTop: 10,
    },
    endText: {
        fontSize: 12,
        color: '#999',
        alignSelf: 'center',
        marginBottom: 40,
    }

});
