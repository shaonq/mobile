
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

/* comm */
import Colors from '../common/Colors';
import Css from  '../common/Css';

/* mod */
import TextTipsWidget from '../components/TextTipsWidget'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.name
        };
    }
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
            <View style={Css.flex}>
                <NavBar>
                    <NavTitle >
                        {this.state.name}
                    </NavTitle>
                    <NavGroup>
                        <NavButton onPress={this.onBackAndroid}>
                            <NavButtonText> {"后退"} </NavButtonText>
                        </NavButton>
                    </NavGroup>
                </NavBar>
                <View style={styles.phone}>
                    <TextTipsWidget title={"你好"}/>
                    <TextTipsWidget title={"你好"}/>
                    <TextTipsWidget title={"你好"}/>
                    <TextTipsWidget title={"你好"}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    background:{
        flex: 1
    },

});
