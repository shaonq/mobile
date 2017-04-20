/**
 * Created by wangmi on 2017/4/20.
 */


import React, {Component} from 'react';
import{
    View,
    Text,
    ListView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    InteractionManager
} from 'react-native';

import {NavigationBar, Label} from 'teaset';
import Style from  '../common/Styles'

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Style.flex}>
                <NavigationBar title='举个栗子' leftView={<NavigationBar.BackButton title='返回'/>}/>
                <View style={Style.flex}>
                    <View style={[Style.flex,{alignItems: 'center', justifyContent: 'center'}]}>
                        <Label size='xl' text='Hello world!' />
                    </View>
                </View>
            </View>
        );
    }
}