import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import Home2 from './Home2';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {　//接收路由　props（请勿更改名称）　＝　params
            id:props.id||0
        };
    }
    route() { //传递路由
        const { navigator } = this.props;

        /**
         *  为什么这里可以取得
         *  <Component {...route.params} navigator={navigator} />
         *  这里传递了navigator作为props
         */

        if(navigator) {
            navigator.push({
                name: 'Home2',
                component: Home2,
                params:{　//传递路由　params（请勿更改名称）　＝　props
                    id: this.state.id
                }
            })
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.route.bind(this)}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}