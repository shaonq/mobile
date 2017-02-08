React
----
* createClass
> 创建一个组件， 创建阶段，实例化阶段，更新阶段，销毁阶段

    ```
        var list = React.createClass({
            // 1 创建阶段
            getDefaultProps:function() {
                console.log("创建阶段",this);
                return {}
            },
            // 2 实例化阶段
            // 2.1 获取this.state
            getInitialState:function() {
                console.log("实例化阶段",this);
                return {}
            },
            // 2.2 render之前,逻辑书在这里
            componentWillMount:function() {
                console.log("render之前",this);
            },
            // 2.3 渲染虚拟DOM
            render:function() { 
                // 显示，请避免书写逻辑
              return (<div>{this.props.name}</div>)
            },
            // 2.4 render之后
            componentDidMount:function() {
                // this.getDOMNote() 获取组件节点
                console.log("render之后",this);
            },
            // 3 更新阶段
            // 3.1 this.props修改或父组件调用this.setProps()
            componentWillReceiveProps:function() {
                //this.setProps()
                console.log("this.props",this.props)
            },
            // 3.2 是否需要更新组件
            shouldComponentUpdate:function() {
                console.log("是否需要更新",this);
                return true
            },
            // 3.3 将要更新
            componentWillUpdate:function() {
                console.log("将要更新",this);  
            },
            // 3.4 更新完毕
            componentDidUpdate:function() {
                console.log("更新完毕",this);
            },
            // 4 销毁阶段
            componentWillUnmount:function() {
               console.log("销毁",this);
            }                 
        })
    ```
* render 
> 渲染组件

```
    React.render(
        <List name="hello word!"></List>,
        document.getElementById("container")
    );
```
React Native
----
* Navigator
```
    <Navigator
        initialRoute={{name: defaultName, component: defaultComponent}}
        configureScene={(route) => {//定义跳转的方式,禁用手势拖动跳转
                return {...Navigator.SceneConfigs.FadeAndroid, gestures: false};
        }}
        renderScene={(route, navigator) => {
                let Component = route.component;
                //路由的参数和navigator都传入到跳转的component内
                return <Component {...route} navigator={navigator}/>
                //{...route} 将route的每个属性都传过去
        }}
    />
```
* View
```
    <View style={{flexDirection: 'row', height: 100, padding: 20}}>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />
      <MyCustomComponent {...customProps} />
    </View>
```


