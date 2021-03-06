import Dimensions from 'Dimensions';
import React from 'react';
import {
    PixelRatio,
    ActivityIndicator
} from 'react-native';

const Util = {
    navigationHeight: 44,
    navigationBarBGColor:'#3497FF',
    statusBarHeight: 20,
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    /**
     * 基于fetch的get方法
     * @method post
     * @param {string} url
     * @param successCallback
     * @param failCallback
     */
    get: function(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
                successCallback(JSON.parse(responseText));
            })
            .catch(function(err){
                failCallback(err);
            });
    },
    //post请求
    post: function (url, data, callback) {
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            });
    },
    /*loading效果*/
    // 如是使用ActivityIndicatorIOS 系统会有提示，建议你使用 ActivityIndicator ， 所以这才使用
    loading: <ActivityIndicator color="#3E00FF" size="large" style={{marginTop:40}}/>

};


export default Util;
