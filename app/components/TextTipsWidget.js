import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    PixelRatio,
    Dimensions
} from 'react-native'

import Colors from '../common/Colors';
const { width }  = Dimensions.get('window');

export default class TextImageWidget extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount() {//加载资源
        this.icon= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA2ElEQVRYR+2W0Q3CMAxErxswQkdgFEZgBEZgBEZgFEZgBEZghOpJyW8VO5ZOoFrqX9R7OvucLDLXYtbXAfBzDqySPpVzE3XgKukk6VEFEQVAF/G3pGcFRAYAXcQ7yBRHFgDRl6RbcyMNMQPALOAEc/HNEswAoEkqgLhkIWYBgDg3F2hHuCoAEMUBPtoRqioARLt4KJ6VAD2epGMY4q8ArC2wDiExJILhBDA0szNgXUT2VWy9jKzX8b09y4aXzd5ujg6h/Ulmf5SGbrqRw9EWjPwzdOYAsDuwAem+IiG7g5jPAAAAAElFTkSuQmCC'
    }
    render() {
        return (
            <View style={styles.rowContainer}  >
                <View style={styles.row}>
                    <Text
                        numberOfLines={1}
                        style={styles.textInputTitle} >
                        {this.props.title}
                    </Text>
                    <View style={styles.textImage}>
                        <Image source={{uri:this.icon}} style={styles.image} />
                    </View>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    rowContainer: {
        width:width,
    },
    row: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
        borderBottomWidth: 0.5 / PixelRatio.get(),
        borderColor:Colors.$ddd

    },
    textInputTitle: {
        width: 80,
        fontSize: 13,
    },
    textImage: {
        flex: 1,
        height: 44,// @todo should be changed if underlined
        justifyContent:'flex-end',
        alignItems: 'center',
        flexDirection: 'row',

    },
    image:{
        width:20,
        height:20
    },
    rightArrow:{
        paddingLeft:10,
    }

});