/**
 * 发起订单
 */
'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    InteractionManager,
    Dimensions,
    StyleSheet,
    ToastAndroid,
} from 'react-native';

import Style,{Color,width,height,px} from '../common/Styles'
import {NavigationBar, Label} from 'teaset';

export default class User extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <View style={[Style.flex,Style.$f4f4f4]}>
                <View style={{width,height:50}}>
                    <NavigationBar title='发起订单'/>
                </View>
                <View style={[Style.flex]}>

                </View>
            </View>
        );
    }
}

