/**
 * 商城主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Style from '../common/Styles';
import Color from '../common/Colors';

import Order from './Order';
import Cart from './Cart';
import Center from './Center';

class AppMain extends Component {
    constructor(props) {
        super(props);
        this.images ={};
        this.state = {
	  	      selectedTab:'order'
	      };
    }
    componentWillMount() {//加载资源
        this.images={
            HomeLogo: require('../imgs/home_logo.png')
		}
    }
    render() {
        return (
          <TabNavigator>
			  <TabNavigator.Item
			  	title="订单"
			    selected={this.state.selectedTab === 'order'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={this.images.HomeLogo} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={this.images.HomeLogo} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'order' })}>
			    <Order {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="购物车"
			    selected={this.state.selectedTab === 'cart'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={this.images.HomeLogo} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={this.images.HomeLogo} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'cart' })}>
			    <Cart {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="我的"
			    selected={this.state.selectedTab === 'center'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={this.images.HomeLogo} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={this.images.HomeLogo} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'center' })}>
			    {/*<Center {...this.props}/>*/}
			  </TabNavigator.Item>
			</TabNavigator>
        );
    }
}
const styles=StyleSheet.create({
   iconStyle:{
       width:26,
       height:26,
   },
   textStyle:{
       color:Color.$999,
   },
   selectedTextStyle:{
       color:Color.black,
   }
});
export default AppMain;