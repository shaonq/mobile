## 环境搭建 [API](https://github.com/shaonq/mobile/blob/master/md/)
```
# git 
git remote add origin https://github.com/shaonq/mobile.git
git push -u origin master
```

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

```
# Windows用户请注意，请不要在命令行默认的System32目录中init项目！会有各种权限限制导致不能运行！
#打开一个空的webStorm项目，在Terminal 执行
# react-native init AwesomeProject
# cd AwesomeProject

git clone https://github.com/X-FAN/reactnativelearn.git
cd reactnativelearn
npm install
react-native run-android

# 有个常见的问题是在你运行react-native run-android命令后，Packager可能不会自动运行。此时你可以手动启动它：
#cd AwesomeProject
cd reactnativelearn
react-native start

# 如果你碰到了ERROR Watcher took too long to load的报错，请尝试将这个文件中的MAX_WAIT_TIME值改得更大一些 (文件在node_modules/react-native/目录下)。

```
### 测试环境
Google浏览器安装 [react-developer-tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon)

安卓5.0以上机器链接
```
adb reverse tcp:8081 tcp:8081
# react-native start

```
现在你已经成功运行了项目，我们可以开始尝试动手改一改了：


> - 在index.android.js并随便改上几行
> - 按两下R键，或是用Menu键（通常是F2，在Genymotion模拟器中是?+M）打开开发者菜单，然后选择 Reload JS 就可以看到你的最新修改。
> - 在终端下运行adb logcat *:S ReactNative:V 
> -  ReactNativeJS:V可以看到你的应用的日志。
> - ~~`adb 位于系统 ANDROID_HOME 变量`~~

### 打包APK文件

>- `cd android`
>- `gradlew assembleRelease`
>- `download` `=>` `android\app\build\outputs\apk`


  
