'use strict';

import React  from 'react';
import {PixelRatio, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
let Color = {
    theme: '#E29C45',//主题色
    $666: '#666',
    $eee: '#eee',
    $e2e2e2: '#e1e4e8',
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

export {Color, width, height, px}