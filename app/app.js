/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Platform
} from 'react-native';

import Style from './common/Styles';
import {NaviGoBack} from './utils/CommonUtils';   //后退
import Splash from  './pages/Splash';   // 主页
import AV from 'leancloud-storage';
export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25);
export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19;

class App extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.goBack = this.goBack.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
    componentDidMount() {
       // registerApp('wxb24c445773822c79');
        AV.init({
            appId: 'EaVxQno9WCP7SNf6kjhigDqg-gzGzoHsz',
            appKey: 'mGputNtx6DTqlMMC8LBf09oC'
        });
    }
    goBack() {  //back
        return NaviGoBack(this._navigator);
    }

    renderScene(route, navigator) { // params
        let Component = route.component;
        this._navigator = navigator;
        return (
            <Component {...route.params} navigator={navigator} route={route}/>
        );
    }

    configureScene(route, routeStack) { // 页切动画
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <View style={Style.flex}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    style={{height: STATUS_BAR_HEIGHT}}
                />
                <Navigator
                    ref='navigator'
                    style={Style.flex}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component: Splash,
                        name: 'Splash'
                    }}
                />
            </View>
        );
    }
}
export default App;