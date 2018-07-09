<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](javascript:;)
    *   [小程序数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)
    *   [小游戏数据](https://mp.weixin.qq.com/debug/wxagame/analysis/index.html)
*   [社区](https://developers.weixin.qq.com/)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title icon_dev"></span>

微信小程序开发文档

</div>

*   [简易教程](../../)
*   [框架](../MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
*   [工具](../../devtools/devtools.html)
*   [腾讯云支持](../../qcloud/qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](../structure.html)
*   [配置](../config.html)
*   [逻辑层](../app-service/)
    *   [注册程序](../app-service/app.html)
    *   [场景值](../app-service/scene.html)
    *   [注册页面](../app-service/page.html)
    *   [路由](../app-service/route.html)
    *   [模块化](../app-service/module.html)
    *   [API](../app-service/api.html)
*   [视图层](../view/)
    *   [WXML](../view/wxml/)
        *   [数据绑定](../view/wxml/data.html)
        *   [列表渲染](../view/wxml/list.html)
        *   [条件渲染](../view/wxml/conditional.html)
        *   [模板](../view/wxml/template.html)
        *   [事件](../view/wxml/event.html)
        *   [引用](../view/wxml/import.html)
    *   [WXS](../view/wxs/)
        *   [模块](../view/wxs/01wxs-module.html)
        *   [变量](../view/wxs/02variate.html)
        *   [注释](../view/wxs/03annotation.html)
        *   [运算符](../view/wxs/04operator.html)
        *   [语句](../view/wxs/05statement.html)
        *   [数据类型](../view/wxs/06datatype.html)
        *   [基础类库](../view/wxs/07basiclibrary.html)
    *   [WXSS](../view/wxss.html)
    *   [组件](../view/component.html)
*   [自定义组件](../custom-component/)
    *   [组件模版和样式](../custom-component/wxml-wxss.html)
    *   [Component构造器](../custom-component/component.html)
    *   [组件事件](../custom-component/events.html)
    *   [behaviors](../custom-component/behaviors.html)
    *   [组件间关系](../custom-component/relations.html)
    *   [抽象节点](../custom-component/generics.html)
*   [插件](./)
    *   [开发插件](development.html)
    *   [使用插件](using.html)
    *   [插件的限制](api-limit.html)
    *   [插件功能页](functional-pages.html)
*   [分包加载](../subpackages.html)
*   [多线程](../workers.html)
*   [基础库](../client-lib.html)
*   [兼容](../compatibility.html)
*   [运行机制](../operating-mechanism.html)
*   [性能](../performance/)
    *   [优化建议](../performance/tips.html)
    *   [分析工具](../performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 插件调用 API 的限制

插件可以调用的 API 与小程序不同，主要有两个区别：

*   插件的请求域名列表与小程序相互独立；
*   一些 API 不允许插件调用（这些函数不存在于 `wx` 对象下）。

注意，虽然一些 API 无法调用，但可以用组件来实现相应的功能。典型的例子是 `wx.navigateTo` 。

目前，允许插件调用的 API 及其对应版本要求如下。

<table>

<thead>

<tr>

<th>API</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>`wx.addPhoneContact`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.arrayBufferToBase64`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.base64ToArrayBuffer`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.canvasGetImageData`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.canvasPutImageData`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.canvasToTempFilePath`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.chooseImage`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.chooseLocation`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.chooseVideo`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.closeBLEConnection`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.closeBluetoothAdapter`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.connectSocket`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createAnimation`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createAudioContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createBLEConnection`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createCameraContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createCanvasContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createInnerAudioContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createIntersectionObserver`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createLivePlayerContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createLivePusherContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createMapContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createSelectorQuery`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.createVideoContext`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.downloadFile`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getBLEDeviceCharacteristics`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getBLEDeviceServices`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getBackgroundAudioManager`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getBackgroundAudioPlayerState`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getBeacons`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getBluetoothAdapterState`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getBluetoothDevices`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getClipboardData`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getConnectedBluetoothDevices`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getHCEState`</td>

<td>[2.1.0](../compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getImageInfo`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getLocation`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getNetworkType`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getRecorderManager`</td>

<td>[1.9.94](../compatibility.html "基础库 1.9.94 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getScreenBrightness`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getStorage`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getStorageSync`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getSystemInfo`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.getSystemInfoSync`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.hideLoading`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.hideToast`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.makePhoneCall`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.makeVoIPCall`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.navigateBack`</td>

<td>[2.1.0](../compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.notifyBLECharacteristicValueChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.notifyBLECharacteristicValueChanged`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onAccelerometerChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBLECharacteristicValueChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBLEConnectionStateChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBLEConnectionStateChanged`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBackgroundAudioPause`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBackgroundAudioPlay`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBackgroundAudioStop`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBeaconServiceChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBeaconUpdate`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBluetoothAdapterStateChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onBluetoothDeviceFound`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onCompassChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onHCEMessage`</td>

<td>[2.1.0](../compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onNetworkStatusChange`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.onUserCaptureScreen`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.openBluetoothAdapter`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.openLocation`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.pauseBackgroundAudio`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.pauseVoice`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.playBackgroundAudio`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.playVoice`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.previewImage`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.readBLECharacteristicValue`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.removeStorage`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.removeStorageSync`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.reportAnalytics`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。") （见下方备注）</td>

</tr>

<tr>

<td>`wx.request`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.saveImageToPhotosAlbum`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.saveVideoToPhotosAlbum`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.scanCode`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.seekBackgroundAudio`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.sendHCEMessage`</td>

<td>[2.1.0](../compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.setClipboardData`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.setKeepScreenOn`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.setScreenBrightness`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.setStorage`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.setStorageSync`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.showActionSheet`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.showLoading`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.showModal`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.showToast`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.startAccelerometer`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.startBeaconDiscovery`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.startBluetoothDevicesDiscovery`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.startCompass`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.startHCE`</td>

<td>[2.1.0](../compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.startRecord`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopAccelerometer`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopBackgroundAudio`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopBeaconDiscovery`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopBluetoothDevicesDiscovery`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopCompass`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopHCE`</td>

<td>[2.1.0](../compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopRecord`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.stopVoice`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.uploadFile`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.vibrateLong`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.vibrateShort`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>`wx.writeBLECharacteristicValue`</td>

<td>[1.9.6](../compatibility.html "基础库 1.9.6 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

#### Bugs & Tips

*   `wx.reportAnalytics` 可以被正常调用，但目前不会进行统计展示。

</section>

</div>

<div class="search-results">

<div class="has-results">

# <span class="search-results-count"></span>个结果 "<span class="search-query"></span>"

</div>

<div class="no-results">

# 没有找到相关内容 "<span class="search-query"></span>"

</div>

</div>

</div>

</div>

</div>

<div class="foot" id="footer">

*   [关于腾讯](http://www.tencent.com/zh-cn/index.shtml)
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](using.html)[](functional-pages.html)</div>

</div>