## 环境搭建 [API](https://github.com/shaonq/mobile/blob/master/md/)

### 开始前的准备工作
#### API：
>+ [react](https://tianxiangbing.github.io/react-cn/)
>+ [react-native](http://reactnative.cn/docs/0.40/activityindicator.html#content)

#### 下载 Java SDK

>- 下载        
>- 添加系统变量 `JAVA_HOME` Java sdk路径        
>- 添加系统变量 `path`  `%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin`

#### 下载一些工具
> `webStorm`,`nodejs`,`android-sdk`,`git`

### 安装环境

* ~~安装chocolatey安装工具~~
>- ~~[官网文档](https://chocolatey.org/install)~~
>- ~~安装，用管理员运行powershell 执行~~
>- ~~`set-executionpolicy remotesigned`~~
>- ~~`iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex`~~
>- ~~`set-executionpolicy  Restricted`~~

 
* ~~使用chocolatey安装python2, Nodejs ,Git~~ 
 >- ~~`choco install python2`~~
 >- ~~`choco install nodejs.install`~~
 >- `#切换淘宝npm源`
 >>- `npm config set registry https://registry.npm.taobao.org --global`
 >>- `npm config set disturl https://npm.taobao.org/dist --global`
 >- ~~`choco install git`~~
 

*  安装 React Native
 > `npm install -g  react-native-cli`

*  安装 Android SDK
	>- [安装文档](https://dsx.bugly.qq.com/repository/1)
    >- 添加系统变量 `ANDROID_HOME` 安卓sdk路径
    >-  添加系统变量 `path`  `%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`
    ![](https://pic3.zhimg.com/6eb6f5d2fd7e3ecbafd0c55f6878ebd2_b.png)
* 模拟器

    > - 下载 [genymotion](https://www.genymotion.com/download/) 
	> - 注册 genymotion 账号

* Gradle Daemon
	> ~~cmd 运行
`(if not exist "%USERPROFILE%/.gradle" mkdir "%USERPROFILE%/.gradle") && (echo org.gradle.daemon=true >> "%USERPROFILE%/.gradle/gradle.properties")`~~

### 测试安装
依赖包
 >+ Tools: `Android SDK Tools`,`Android SDK Platform-tools`,`Android SDK Build-tools`
 >+ Android 6.0(API23): `SDK Platform`,`Intel x86 Atom System Image`
 >+ Extras: `Android Support repository`, ~~`Android Support library`~~ 


Windows用户请注意，请不要在命令行默认的System32目录中`init`项目！会有各种权限限制导致不能运行！

官方`demo git clone  https://github.com/facebook/react-native.git`
打开一个空的webStorm项目，在Terminal（或者在项目路径cmd） 执行
```
react-native init App
cd App
```
 启动服务
 
 `react-native start`

新开Terminal 运行项目

`react-native run-android`

如果你碰到了`ERROR Watcher took too long to load`的报错，请尝试将这个文件中的`MAX_WAIT_TIME`值改得更大一些 (文件在`node_modules/react-native/`目录下)。

错误：`unable to downlaod bundle` 

报错请访问 [http://localhost:8081/index.android.bundle?platform=android](http://localhost:8081/index.android.bundle?platform=android)

无法访问请 `react-native start`,代码错误会直接显示提示



>Debug
 Google浏览器插件 [react-developer-tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon)
 安卓5.0以上机器链接

`adb adb devices`查看可调式设备



现在你已经成功运行了项目，我们可以开始尝试动手改一改了：


> - 在`index.android.js`并随便改上几行
> - `react-native run-android`
> - `react-native start`
> - 设备上 `Reload Js` ，只有进入项目才可以出现菜单，没进app就别折腾。
> - ~~`adb 位于系统 ANDROID_HOME 变量`~~

### 打包APK文件

1, 签名
>  `[key]` 密钥名称 `[alias]` 密钥别名
 ```
keytool -genkey -v -keystore [key].keystore  -alias [alias] -keyalg RSA -keysize 2048 -validity 10000
```
然后根据提示输入`password`,`CN=, OU=, O=, L=, ST=, C=`等就可以得到位于项目根目录的 `[key].keystore`了

2, 配置签名
`copy `一份`[key].keystore`到 `android/app/`目录
打开`android/app/build.gradle`,添加`signingConfigs`,修改`buildTypes`

```
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file("[key].keystore")
            storePassword [password]
            keyAlias [alias]
            keyPassword [password]
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

3, 代码混淆
```
enableProguardInReleaseBuilds = true
```
等

4,使用`curl`工具保存`index.android.bundle`文件，或者网页另存为加新建目录

`curl -k "http//localhost:8081/index.android.bundle" >android/app/src/main/assets/index.android.bundle`

5,安装`gradle`
查看`android\gradle\wrapper\gradle-wrapper.properties`下面的gradle地址，安装一致版本
`https://services.gradle.org/distributions/gradle-2.4-all.zip`

`cd android`

`gradle clean` 失败后先清除

`gradle assembleRelease` 编译

`gradlew assembleRelease` 下载同意版本gradle后编译（慢）

@[:app:packageRelease FAILED](http://www.tuicool.com/articles/zuMZfyM)


6，编译
在`android`同一下执行`gradle assembleRelease`

