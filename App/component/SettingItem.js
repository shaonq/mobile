/**
 * 设置界面Item布局
 */
'use strict';
import React, {PropTypes} from 'react';
import{ 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

import Base64png, { ArrowRight } from '../common/Base64png'
//const ArrowRight = Base64png.ArrowRight;
const SettingItem = ({ onPress, title}) => (
  <TouchableOpacity style={styles.wrap_style} onPress={onPress}>
     <View style={{flexDirection:'row'}}>
        <View style={styles.item_view}><Text style={{marginLeft:10,fontSize:13}}>{title}</Text></View>
        <View style={styles.item_arrow_view}>
            <Image source={{uri:ArrowRight}}
                   style={{width:12,height:18}}/>
        </View>
     </View>
  </TouchableOpacity>
);
const styles=StyleSheet.create({
    wrap_style:{
       height:45,
       backgroundColor:'white',
    },
    item_view:{
       height:45,
       justifyContent:'center',
    },
    item_arrow_view:{
       height:45,
       justifyContent:'center',
       flex:1,
       alignItems:'flex-end',
       marginRight:8
    }
});

export default SettingItem;