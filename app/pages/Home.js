import React, { Component } from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

//import lineItem from '../components/lineItem'

import Home2 from './Home2';
import about from './about';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {　//接收路由　props（请勿更改名称）　＝　params
            id:props.id||0
        };
    }
    routeHome() { //传递路由
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
    routeAbout() { //传递路由
        const { navigator } = this.props;
        navigator && navigator.push({
            name: 'about',
            component: about,
            params:{　//传递路由　params（请勿更改名称）　＝　props
                id: this.state.id
            }
        })
    }
    render() {
        return (
            <ScrollView  style={{flex: 1}} >
         {/*       <Image style={styles.image}
                       source={require('tx01.jpg')} />*/}
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <TouchableOpacity onPress={this.routeAbout.bind(this)} style={{flex: 1}}>
                    <View style={{backgroundColor:'white',width:440,height: 36,marginTop: 2,flexDirection:'row',alignItems: 'center',justifyContent: 'space-around',}} >
                        <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe762;</Text>
                        <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe762;</Text>
                        <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe762;</Text>
                        <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe762;</Text>
                        <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe762;</Text>
                        <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe762;</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    wrapper: {
    },
    image: {
        width: 400,
        height: 250,
        opacity: 0.9
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});