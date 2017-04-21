'use strict';

import React  from 'react';
import {PixelRatio, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
let Color = {
    theme: '#E29C45',//主题色
    $666: '#666',
    $eee: '#eee',
    $e2e2e2: '#e1e4e8',
    $f4f4f4: '#f5f5f5',
    $f8f8f8: '#f6f8fa',
    $ddd: '#d1d5da',
    $999: '#999',
    $fff: '#fff',
    blue: '#1780fb',
    green: '#5bd9b3',
    orange: '#F7B824',
    red: '#f75b43',
    black: '#504d47'
};

export default StyleSheet.create({
    flex: {
        flex: 1
    },
    top: {
        justifyContent: 'flex-start',
    },
    bottom: {
        justifyContent: 'flex-end',
    },
    middle: {
        justifyContent: 'center',
    },
    left: {
        alignItems: 'flex-start'
    },
    right: {
        alignItems: 'flex-end'
    },
    center: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
});

let px = 0.5 / PixelRatio.get();

let NAV_HEIGHT = 40;

const Check = {
    phone: function (v) {
        return /^1\d{10}$/g.test(v) ? void 0 : "手机格式不合法"
    },
    pass: function (v) {
        return /[a-z0-9]{6,}/g.test(v) ? void 0 : "密码太过简单"
    },
    repass: function (v, val) {
        return val === v ? void 0 : "两次密码不一致"
    },
    email: function (v) {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v) ? void 0 : "邮箱格式不正确"
    },
    url: function (v) {
        return /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/.test(v) ? void 0 : "链接格式不正确"
    },
    date: function (v) {
        return /^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/.test(v) ? void 0 : "日期格式不正确"
    },
    number: function (v) {
        return /^\d+$/.test(v) ? void 0 : "只能填写数字"
    },
    identity: function (v) {
        return /(^\d{15}$)|(^\d{17}(x|X|\d)$)/.test(v) ? void 0 : "请输入正确的身份证号"
    },
    checked: function (v) {
        return this.checked ? void 0 : v || ""
    },
    required: function (v, val) {
        return "" !== v.replace(/\s/g, "") ? void 0 : (val || "此项不能为空")
    }
};

export {Color, width, height, px,Check,NAV_HEIGHT}