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


import CenterItem from '../component/CenterItem';
import ImageButton from '../component/ImageButton';


let {height,width} =  Dimensions.get('window');

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
    componentWillMount() {//加载资源
        this.images.HomeLogo = require('../imgs/home_logo.png')
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>我的</Text>
                    </View>
                </View>

                <View style={{backgroundColor:'white'}}>
                    <View style={{flexDirection:'row',height:100}}>
                        <TouchableOpacity onPress={() => {this.loginButtonActiom()}} >
                        </TouchableOpacity>
                        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:10}}>
                            <Text>Julia Stone</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#ddd'}}>余额:</Text>
                                <Text style={{color:'#ddd'}}>¥2000</Text>
                            </View>
                        </View>
                        <View style={styles.modify_item}>
                            <ImageButton title='编辑' onPress={()=>{this.itemModifyAction()}}/>
                        </View>
                    </View>
                </View>

                <View style={styles.top_line}/>
                <CenterItem title='充值'  onPress={()=>this.itemActionIndex(0)}/>
                <View style={styles.top_line}/>

                <View style={[styles.top_line, {marginTop: 10}]}/>
                <CenterItem
                    title='地址管理'

                    onPress={()=>this.itemActionIndex(1)}/>
                <View style={[styles.top_line, styles.center_line]}/>
                <CenterItem
                    title='信用卡管理'
                    onPress={()=>this.itemActionIndex(2)}/>
                <View style={[styles.top_line, styles.center_line]}/>
                <CenterItem
                    title='收藏'
                    onPress={()=>this.itemActionIndex(3)}/>
                <View style={[styles.top_line,styles.center_line]}/>
                <CenterItem
                    title='商家合作'
                    onPress={()=>this.itemActionIndex(4)}/>
                <View style={[styles.top_line,styles.center_line]}/>

                <View style={[styles.top_line,{marginTop:10}]}/>
                <CenterItem
                    title='更多' icon={this.images.HomeLogo}
                    onPress={()=>this.itemActionIndex(5)}/>
                <View style={styles.top_line}/>

                <TouchableOpacity style={{height:45,width:width,backgroundColor:'white',marginTop:10,justifyContent:'center',}}>
                    <Text style={{alignSelf:'center'}}>客服电话:0513-88888888</Text>
                </TouchableOpacity>
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
