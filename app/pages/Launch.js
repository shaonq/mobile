/**
 * 发起订单
 */
'use strict';
import React, {Component} from 'react';
import{
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    InteractionManager,
    Dimensions,
    StyleSheet,
    ToastAndroid,
} from 'react-native';

import {NavigationBar, Label,Button,Badge,Checkbox,Input,Select,ListRow,Stepper } from 'teaset';
import {NaviGoBack} from '../utils/CommonUtils';   //后退
import Icon from '../common/Icon';
import Style,{Color,width,height,NAV_HEIGHT,Check} from '../common/Styles';


export default class User extends Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
        this.submit = this.submit.bind(this);
        this.state= {
            remark: '',
            ddName: null,
            link: null,
            money: null,
            added: null,
        }
    }
    back(){
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }
    submit(){
        let go ;
        alert(JSON.stringify(this.state))
    }
    render(){
        return (
            <View style={[Style.flex,Style.$f4f4f4]}>
                <View style={{width,height:NAV_HEIGHT}}>
                    <NavigationBar title='发起订单' leftView={<NavigationBar.BackButton title='返回' onPress = {this.back} />}/>
                </View>
                <View style={[Style.flex]}>
                    <View>
                        <View style={{height: 20}} />
                        <ListRow title='订单名称' topSeparator='full' detail={
                            <Input style={{width:200}} onChangeText={(ddName) => this.setState({ddName})}
                                   value={this.state.ddName} />
                        } />
                        <ListRow title='起送金额' topSeparator='indent' detail={
                            <Input style={{width:200}}  onChangeText={(money) => this.setState({money})}
                                   value={this.state.money} />
                        } />
                        <ListRow title='配送金额' topSeparator='indent' detail={
                            <Input style={{width:200}}   onChangeText={(added) => this.setState({added})}
                                   value={this.state.added} />
                        } />
                        <ListRow title='外卖链接'   topSeparator='indent' detail={
                            <Input style={{width:200}} onChangeText={(link) => this.setState({link})}
                                   value={this.state.link} />
                        } />
                        <ListRow title='备注' bottomSeparator='full'  detail={
                            <View>
                                <Input style={{width:200,height:60}} onChangeText={(remark) => this.setState({remark})}
                                   value={this.state.remark} placeholder="请输入备注" multiline={true} maxLength={200} />
                                <Text>{this.state.remark.length}/200 </Text>
                            </View>
                        } />
                    </View>
                    <View style={[Style.flex,Style.bottom,{marginLeft:20,marginRight:20,marginBottom:50}]}>
                        <Button type='primary' style={{backgroundColor:Color.blue}} title='确 定' onPress={this.submit}/>
                    </View>
                </View>
            </View>
        );
    }
}

