import React, { Component } from 'react';
import {View,Button,Text,Image,Dimensions,ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

/* comm */
import Color from '../common/Colors';
import Css from '../common/Css';
const {width,height} = Dimensions.get('window');

/* mod */
//import lineItem from '../components/lineItem'

/* pages */
import sellerPage from './sellePage';
import personalPage from './personalPage';

/* text */
const text = {
    sellerBtn:'发起订单',
    sellerPage:'发起订单',
    personalBtn:'我要参团',
    personalPage:'我要参团',
};

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {　//定义参数

        };
    }
    routeSelle() { //传递路由
        const { navigator } = this.props;
        /**
         *  为什么这里可以取得
         *  <Component {...route.params} navigator={navigator} />
         *  这里传递了navigator作为props
         */
        if(navigator) {
            navigator.push({
                component: sellerPage,
                params:{　//传递路由　params
                    name:text.sellerPage
                }
            })
        }
    }
    routePersonal() { //传递路由
        const { navigator } = this.props;
        navigator && navigator.push({
            component: personalPage,
            params:{
                name: text.personalPage
            }
        })
    }
    componentWillMount() {//加载资源
        this.image= require('../imgs/home_logo.png')
    }
    render() {
        return (
            <View  style={[Css.flex]} >
                <Image style={[styles.image,{flex:3,width:width}]} source={this.image} />
                <View style={[Css.flex,{flexDirection: 'row'}]}>
                    <View style={styles.btnView} >
                        <Button
                            onPress={this.routeSelle.bind(this)}
                            title={text.sellerBtn}
                            color={Color.blue}
                        />
                    </View>
                    <View style={styles.btnView} >
                        <Button
                            onPress={this.routePersonal.bind(this)}
                            title={text.personalBtn}
                            color={Color.blue}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btnView:{
        flex: 1,
        padding:20,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});