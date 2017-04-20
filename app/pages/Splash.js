/**
 *
 */
import React, {Component} from 'react';
import {Animated,InteractionManager} from 'react-native';
import Home from './Home';
import {width, height} from '../common/Styles'
const image = {
    splash:require('../imgs/splash.jpg')
};
let time = 3e3;

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }
    componentDidMount() {
        const {navigator} = this.props;
        Animated.timing(this.state.bounceValue, {
            toValue: 1.05,
            duration: time
        }).start();
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: Home,
                    name: 'Home'
                });
            });
        }, time);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        return (
            <Animated.Image
                style={{
                    width,
                    height,
                    transform: [{scale: this.state.bounceValue}]
                }}
                source={image.splash}
            />
        );
    }
}

export default Splash;
