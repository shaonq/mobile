
import React, { Component,Stylesheet } from 'react';
import { View, Text } from 'react-native';


class Flex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'a'
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item,styles.center]}>
                    <Text>{this.state.name}</Text>
                </View>
                <View style={[styles.item,styles.center]}> <Text>酒店</Text> </View>
                <View style={[styles.item,styles.center]}> <Text>酒店</Text> </View>
            </View>
        );
    }
}
/**
 * 样式封装
 */

const styles = Stylesheet.create({
    container:{
        flex:1,
        borderWidth:1,
        borderColor:'#e2e2e2',
        flexDirection:'row'
    },
    item:{
        flex:1,
        height:80,
        borderColor:'#e2e2e2',
        borderWidth:1
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    flex:{
        flex:1
    }
});
export default  Flex;