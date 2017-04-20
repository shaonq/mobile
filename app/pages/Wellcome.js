'use strict';

import React,{Component} from 'react';
import {
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

import Home from './Home';

import {Height, Width} from '../common/Styles';

class Wellcome extends Component {
  constructor(props) {
    super(props);
      this.images ={};
  }
  componentDidMount() {
    const {navigator} = this.props;
     this.timer=setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: Home,
          name: 'Home'
        });
      });
    }, 0);
  }
  componentWillUnmount() {
      this.images.HomeLogo = require('../imgs/home_logo.png');
      this.timer && clearTimeout(this.timer);
  }
 
  render() {
    return (
      <View style={{flex:1}}>
      <Image
        style={{width:Width,height:Height}}
        source={this.images.HomeLogo}
      />
      </View>
    );
  }
}
export default Wellcome;