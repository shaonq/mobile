'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    InteractionManager,
    Dimensions,
    StyleSheet,
    ToastAndroid,
} from 'react-native';

import Style,{Color,width,height,px} from '../common/Styles'
import {NavigationBar, Label} from 'teaset';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.images ={};
        this.settingButtonAction=this.settingButtonAction.bind(this);
        this.itemActionIndex=this.itemActionIndex.bind(this);
        this.itemModifyAction=this.itemModifyAction.bind(this);
        this.loginButtonActiom=this.loginButtonActiom.bind(this);
    }
    //设置按钮
    settingButtonAction(){
        const {navigator} = this.props;

    }
    //登录
    loginButtonActiom(){
        const {navigator} = this.props;

    }
    //判断当前点击了那个按钮
    itemActionIndex(position){
        const {navigator} = this.props;

    }
    //编辑按钮
    itemModifyAction(){
        const {navigator} = this.props;

    }
    render() {
        return (
            <View style={[Style.flex,Style.$f4f4f4]}>
                <NavigationBar title='个人中心' />

            </View>
        );
    }
}
const styles=StyleSheet.create({
    top_line:{
        height:1,
        backgroundColor:'#ccc'
    },
    center_line:{
        marginLeft:8,
        marginRight:8,
    },
    modify_item:{
        alignItems:'flex-end',
        flex:1,
        marginRight:10,
        marginTop:15
    }
});
