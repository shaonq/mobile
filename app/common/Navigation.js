import React from 'react';
import {Navigator, View} from 'react-native';

import Home from  '../pages/Home';

const Navigation = React.createClass({
    render () {
        let defaultName = 'Home';
        let defaultComponent = Home;
        return (
            <Navigator
                initialRoute={{
                    name: defaultName,
                    component: defaultComponent,
                    params:{

                    }
                }}
                configureScene={
                    () => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }
                }
                renderScene={(route, navigator) => {
                    console.log(route);
                    let Component = route.component;
                    //路由的参数和navigator都传入到跳转的component内
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
});
export default Navigation;
