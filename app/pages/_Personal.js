
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


/** comm */
import Style,{Color} from '../common/Styles';


/** mod */
import TextTipsWidget from '../component/TextTipsWidget'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.name
        };
    }
    render() {
        return(
            <View style={Style.flex}>
                <TextTipsWidget title={"你好"}/>
                <TextTipsWidget title={"你好"}/>
                <TextTipsWidget title={"你好"}/>
                <TextTipsWidget title={"你好"}/>
            </View>
        );
    }
};
