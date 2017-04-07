/**
 * Created by wangmi on 2017/4/7.
 */
import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const ITEM_HEIGHT = Dimensions.get('window').width/3-11;

export default class GridItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row,
        };
    }

    render(){
        return(
            <TouchableOpacity onPress={() => this.props.onClick()} >
                <View style={styles.item}>
                   {/* <GridItemImage icon={this.state.row.priority}/>*/}
                    <Text style={styles.itemText}>{this.state.row.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: ITEM_HEIGHT,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        margin: 5,
    },

    itemText: {
    },
});
