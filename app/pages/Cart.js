/**
 * 购物车页面
 */
'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    InteractionManager,
} from 'react-native';
import {NavigationBar,} from 'teaset';
import Style,{height, width} from '../common/Styles';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.payItemAction=this.payItemAction.bind(this);

    }
    //结算按钮
    payItemAction(){
        const {navigator} = this.props;
        /*InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: OrderConfirm,
                name: 'OrderConfirm'
            });
        });*/
    }
    render() {
        return (
            <View style={[Style.flex,Style.$f4f4f4]}>
                <View style={{width,height:50}}>
                    <NavigationBar title='购物车'/>
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <View style={{backgroundColor:'white',width:width,height:40}}>
                        <View style={{flexDirection:'row',marginLeft:15,marginTop:5}}>
                            <Text style={{fontSize:11,color:'black',flex:1}}>预估小计</Text>
                            <View style={{flex:1,alignItems:'flex-end',marginRight:15}}>
                                <Text style={{color:'red',fontSize:11}}>¥116</Text>
                            </View>
                        </View>
                        <View style={{marginLeft:15,marginTop:3}}>
                            <Text style={{color:'#777',fontSize:11}}>实际总计将以商家收据为准,为保证您的权益,请于配货员联系.</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>{this.payItemAction()}}>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cart;