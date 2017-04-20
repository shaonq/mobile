/**
 *
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import {TabView} from 'teaset';

import Style, {Color} from '../common/Styles';
import Icon, {Img} from '../common/Icon';
import AV from 'leancloud-storage';


import Order from './Order';
import Cart from './Cart';
import User from './User';

class AppMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TabView style={[Style.flex]} type='carousel'>
                <TabView.Sheet
                    title='订单'
                    icon={<Icon name="g1" style={styles.iconStyle}/>}
                    activeIcon={<Icon name="b1" style={styles.iconStyle}/>}
                >
                    <Order {...this.props}/>
                </TabView.Sheet>
                <TabView.Sheet
                    title='交易'
                    icon={<Icon name="g2" style={styles.iconStyle}/>}
                    activeIcon={<Icon name="b2" style={styles.iconStyle}/>}
                >
                    <Cart {...this.props}/>
                </TabView.Sheet>
                <TabView.Sheet
                    title='个人中心'
                    icon={<Icon name="g3" style={styles.iconStyle}/>}
                    activeIcon={<Icon name="b3" style={styles.iconStyle}/>}
                    badge={1}
                >
                    <User {...this.props}/>
                </TabView.Sheet>
            </TabView>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: Color.$999,
    },
    selectedTextStyle: {
        color: Color.black,
    }
});
export default AppMain;