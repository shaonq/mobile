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
import Style , { Color } from '../common/Styles';

/** util */
const {width, height} = Dimensions.get('window');


/** pages */
import Selle from './Selle';
import Personal from './Personal';
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
                component: WebViewDetails,
                name: 'WebViewDetails',
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

    componentWillMount() {//加载资源
        this.images.HomeLogo = require('../imgs/home_logo.png')
    }

    render() {
        return (
            <View style={[Style.flex]}>
                <Image style={[styles.image, {flex: 3, width: width}]} source={this.images.HomeLogo}/>
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