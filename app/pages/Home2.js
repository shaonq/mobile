import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    route() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();　//返回
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.route.bind(this)}>
                    <Text>Home2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}