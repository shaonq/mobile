
import React,{Component} from 'react';
import { Image,View, Text, StyleSheet } from 'react-native';

const Img = {
    g1:require('../imgs/icon/g1.png'),
    g2:require('../imgs/icon/g2.png'),
    g3:require('../imgs/icon/g3.png'),
    g4:require('../imgs/icon/g4.png'),
    g5:require('../imgs/icon/g5.png'),
    b1:require('../imgs/icon/b1.png'),
    b2:require('../imgs/icon/b2.png'),
    b3:require('../imgs/icon/b3.png'),
    b4:require('../imgs/icon/b4.png'),
    b5:require('../imgs/icon/b5.png'),
};
export default class Icon extends Component {
    render() {
        return (
            <Image source={this.props.name in Img ? Img[this.props.name] :Img.g1 } style={this.props.style} />
        );
    }
}

export { Img }