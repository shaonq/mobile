/**
 * 页面公用组件
 */
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
class nav extends Component {
    render() {
        return (
            <View style={{height:44}}>
                <NavigationBar title={this.props.title}/>
            </View>
        );
    }
}
export default {
    nav,
}