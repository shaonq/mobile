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

import {NavigationBar, Label,Badge,Checkbox,Input,Select,ListRow,Stepper } from 'teaset';
import Icon from '../common/Icon';
import Style,{Color,width,height,px} from '../common/Styles';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state ={
            checkedCustom:false
        };
        this.items = [
            'Apple',
            'Banana',
            'Cherry',
            'Durian',
            'Filbert',
            'Grape',
            'Hickory',
            'Lemon',
            'Mango',
        ];
    }
    //设置按钮
    settingButtonAction(){
        const {navigator} = this.props;

    }
    render() {
        /**
         * ListRow API：
         * title：标题
         * detail： 内容
         * detailMultiLine: 多行
         * icon ：左侧小图标
         * accessory ： 右侧符号
         * topSeparator/bottomSeparator ：
         *  full: 满行分隔线
         *  indent： 缩进分隔线
         * titlePlace：标题位置
         * */

        return (
            <View style={[Style.flex,Style.$f4f4f4]}>
                <View style={{width,height:44}}>
                    <NavigationBar title='个人中心'/>
                </View>
                <ScrollView style={[Style.flex]}>
                    <View style={{height: 20}} />
                    <ListRow title='普通' detail='说明文字' topSeparator='full' />
                    <ListRow title='徽章' topSeparator='indent' detail={
                        <Badge style={{backgroundColor: 'red', paddingLeft: 0, paddingRight: 0}}>
                            <Text style={{color: '#fff'}}>1</Text>
                        </Badge>
                    } />
                    <ListRow title='图标' topSeparator='indent' icon={<Icon name="g1" style={{height:20,width:20,marginRight:10}}/>} />
                    <ListRow title='多行文本' topSeparator='indent' detail={
                        'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
                    } titlePlace='top' />
                    <ListRow title='文本'  topSeparator='indent' detail={<Label text='文本' type='title' />} />
                    <ListRow title='复选框'  topSeparator='indent' detail={<Checkbox
                        title={this.state.checkedCustom?'YES':'NO'}
                        checked={this.state.checkedCustom}
                        onChange={checked => this.setState({checkedCustom: checked})}
                    />} />
                    <ListRow title='输入框'  topSeparator='indent' detail={
                        <Input style={{width: 200}} disabled={true} />
                    } />
                    <ListRow title='Select'  topSeparator='indent' detail={
                        <Select
                            style={{width: 200}}
                            value={this.state.value}
                            items={this.items}
                            placeholder='Select item'
                            pickerTitle='Default'
                            onSelected={(item, index) => this.setState({value: item})}
                        />
                    } />
                    <ListRow title='进步器'  topSeparator='indent' detail={
                        <Stepper defaultValue={1} min={1} max={10} />
                    } />
                    <ListRow title='Accessory indicator' topSeparator='indent' accessory='indicator' />
                    <ListRow title='Press able' onPress={() => alert('Press!')} bottomSeparator='full' />


                </ScrollView>
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
