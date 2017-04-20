import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Platform
} from 'react-native';

/*import {Provider} from 'react-redux'
import configureStore from './store/configure-store'*/

import App from './app'

/*const store = configureStore();*/
/*<Provider store={store}>
 <App/>
 </Provider>*/

class rootApp extends Component {
    render() {
        return (
            <App/>
        )
    }
}
export default rootApp;