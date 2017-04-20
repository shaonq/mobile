import React, {Component} from 'react';
import {
    View,
    Button,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
    StyleSheet
} from 'react-native';

/** comm */
import Style , { Color,width, height } from '../common/Styles';


/** pages */

import Launch from './Launch';

import AppMain from './AppMain';
import WebViewDetails from './WebViewDetails';

/** text */
const text = {
    sellerBtn: '发起订单',
    sellerPage: '发起订单',
    personalBtn: '我要参团',
    personalPage: '我要参团',
    main: '进入主页',
};
const homeLogo = require('../imgs/home_logo.png');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.routeSelle = this.routeSelle.bind(this);
        this.routePersonal = this.routePersonal.bind(this);
        this.routeMain = this.routeMain.bind(this);
        this.images = {};
        this.state = {　//定义参数

        };
    }

    routeSelle() { //传递路由
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: Launch,
                name: 'Launch',
            });
        });
    }
    routePersonal() { //传递路由
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: Personal,
                name: 'Personal'
            });
        });
    }

    routeMain() { //传递路由
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: AppMain,
                name: 'AppMain'
            });
        });
    }
    render() {
        return (
            <View style={[Style.flex]}>
                <Image style={[styles.image, {flex: 3, width: width}]} source={homeLogo}/>
                <View style={[Style.flex, {flexDirection: 'row'}]}>

                    <View style={styles.btnView}>
                        <Button
                            onPress={this.routeSelle}
                            title={text.sellerBtn}
                            color={Color.blue}
                        />
                    </View>
                    <View style={styles.btnView}>
                        <Button
                            onPress={this.routeMain}
                            title={text.personalBtn}
                            color={Color.orange}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btnView: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    }
});