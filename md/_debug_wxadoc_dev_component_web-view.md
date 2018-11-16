<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18111620)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18111620)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18111620)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18111620)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18111620)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18111620)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18111620)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18111620)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html?t=18111620)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/web-view.html?t=18111620)

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

*   [简易教程](../)
*   [框架](../framework/MINA.html)
*   [组件](.)
*   [API](../api/)
*   [工具](../devtools/devtools.html)
*   [小程序·云开发](../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html?t=18111620)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/web-view.html?t=18111620)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [视图容器](./view.html)
    *   [view](./view.html)
    *   [scroll-view](./scroll-view.html)
    *   [swiper](./swiper.html)
    *   [movable-view](./movable-view.html)
        *   [movable-area](./movable-view.html#movable-area)
    *   [cover-view](./cover-view.html)
    *   [cover-image](./cover-view.html#cover-image)
*   [基础内容](./icon.html)
    *   [icon](./icon.html)
    *   [text](./text.html)
    *   [rich-text](./rich-text.html)
    *   [progress](./progress.html)
*   [表单组件](./button.html)
    *   [button](./button.html)
    *   [checkbox](./checkbox.html)
    *   [form](./form.html)
    *   [input](./input.html)
    *   [label](./label.html)
    *   [picker](./picker.html)
    *   [picker-view](./picker-view.html)
    *   [radio](./radio.html)
    *   [slider](./slider.html)
    *   [switch](./switch.html)
    *   [textarea](./textarea.html)
*   [导航](./navigator.html)
    *   [navigator](./navigator.html)
    *   [functional-page-navigator](./functional-page-navigator.html)
*   [媒体组件](./audio.html)
    *   [audio](./audio.html)
    *   [image](./image.html)
    *   [video](./video.html)
    *   [camera](./camera.html)
    *   [live-player](./live-player.html)
    *   [live-pusher](./live-pusher.html)
*   [地图](./map.html)
    *   [map](./map.html)
*   [画布](./canvas.html)
    *   [canvas](./canvas.html)
*   [开放能力](./open-data.html)
    *   [open-data](./open-data.html)
    *   [web-view](./web-view.html)
    *   [ad](./ad.html)
    *   [official-account](./official-account.html)
*   [原生组件说明](./native-component.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

#### web-view

> 基础库 1.6.4 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

web-view 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面。**个人类型与海外类型的小程序暂不支持使用。**

> 客户端 6.7.2 版本开始，[`navigationStyle: custom`](../framework/config.html#window) 对 `<web-view>` 组件无效

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>src</td>

<td>String</td>

<td></td>

<td>webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录[小程序管理后台](https://mp.weixin.qq.com/)配置业务域名。</td>

</tr>

<tr>

<td>bindmessage</td>

<td>EventHandler</td>

<td></td>

<td>网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }</td>

</tr>

<tr>

<td>bindload</td>

<td>EventHandler</td>

<td></td>

<td>网页加载成功时候触发此事件。e.detail = { src }</td>

</tr>

<tr>

<td>binderror</td>

<td>EventHandler</td>

<td></td>

<td>网页加载失败的时候触发此事件。e.detail = { src }</td>

</tr>

</tbody>

</table>

示例代码：

    <!-- wxml -->
    <!-- 指向微信公众平台首页的web-view -->
    <web-view src="https://mp.weixin.qq.com/"></web-view>

##### 相关接口 1

`<web-view/>`网页中可使用[JSSDK 1.3.2](https://res.wx.qq.com/open/js/jweixin-1.3.2.js)提供的接口返回小程序页面。 支持的接口有：

<table>

<thead>

<tr>

<th>接口名</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>wx.miniProgram.navigateTo</td>

<td>参数与小程序接口一致</td>

<td>[1.6.4](../framework/compatibility.html "基础库 1.6.4 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>wx.miniProgram.navigateBack</td>

<td>参数与小程序接口一致</td>

<td>[1.6.4](../framework/compatibility.html "基础库 1.6.4 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>wx.miniProgram.switchTab</td>

<td>参数与小程序接口一致</td>

<td>[1.6.5](../framework/compatibility.html "基础库 1.6.5 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>wx.miniProgram.reLaunch</td>

<td>参数与小程序接口一致</td>

<td>[1.6.5](../framework/compatibility.html "基础库 1.6.5 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>wx.miniProgram.redirectTo</td>

<td>参数与小程序接口一致</td>

<td>[1.6.5](../framework/compatibility.html "基础库 1.6.5 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>wx.miniProgram.postMessage</td>

<td>向小程序发送消息</td>

<td>[1.7.1](../framework/compatibility.html "基础库 1.7.1 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>wx.miniProgram.getEnv</td>

<td>获取当前环境</td>

<td>[1.7.1](../framework/compatibility.html "基础库 1.7.1 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

示例代码：

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/aRVmcimz66Yb "在开发者工具中预览效果")

    <!-- html -->
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>

    // javascript
    wx.miniProgram.navigateTo({url: '/path/to/page'})
    wx.miniProgram.postMessage({ data: 'foo' })
    wx.miniProgram.postMessage({ data: {foo: 'bar'} })
    wx.miniProgram.getEnv(function(res) { console.log(res.miniprogram) // true })

##### 相关接口 2

`<web-view/>`网页中**仅支持以下JSSDK接口**：

<table>

<thead>

<tr>

<th>接口模块</th>

<th>接口说明</th>

<th>具体接口</th>

</tr>

</thead>

<tbody>

<tr>

<td>判断客户端是否支持js</td>

<td></td>

<td>checkJSApi</td>

</tr>

<tr>

<td>图像接口</td>

<td>拍照或上传</td>

<td>chooseImage</td>

</tr>

<tr>

<td></td>

<td>预览图片</td>

<td>previewImage</td>

</tr>

<tr>

<td></td>

<td>上传图片</td>

<td>uploadImage</td>

</tr>

<tr>

<td></td>

<td>下载图片</td>

<td>downloadImage</td>

</tr>

<tr>

<td></td>

<td>获取本地图片</td>

<td>getLocalImgData</td>

</tr>

<tr>

<td>音频接口</td>

<td>开始录音</td>

<td>startRecord</td>

</tr>

<tr>

<td></td>

<td>停止录音</td>

<td>stopRecord</td>

</tr>

<tr>

<td></td>

<td>监听录音自动停止</td>

<td>onVoiceRecordEnd</td>

</tr>

<tr>

<td></td>

<td>播放语音</td>

<td>playVoice</td>

</tr>

<tr>

<td></td>

<td>暂停播放</td>

<td>pauseVoice</td>

</tr>

<tr>

<td></td>

<td>停止播放</td>

<td>stopVoice</td>

</tr>

<tr>

<td></td>

<td>监听语音播放完毕</td>

<td>onVoicePlayEnd</td>

</tr>

<tr>

<td></td>

<td>上传接口</td>

<td>uploadVoice</td>

</tr>

<tr>

<td></td>

<td>下载接口</td>

<td>downloadVoice</td>

</tr>

<tr>

<td>智能接口</td>

<td>识别音频</td>

<td>translateVoice</td>

</tr>

<tr>

<td>设备信息</td>

<td>获取网络状态</td>

<td>getNetworkType</td>

</tr>

<tr>

<td>地理位置</td>

<td>使用内置地图</td>

<td>getLocation</td>

</tr>

<tr>

<td></td>

<td>获取地理位置</td>

<td>openLocation</td>

</tr>

<tr>

<td>摇一摇周边</td>

<td>开启ibeacon</td>

<td>startSearchBeacons</td>

</tr>

<tr>

<td></td>

<td>关闭ibeacon</td>

<td>stopSearchBeacons</td>

</tr>

<tr>

<td></td>

<td>监听ibeacon</td>

<td>onSearchBeacons</td>

</tr>

<tr>

<td>微信扫一扫</td>

<td>调起微信扫一扫</td>

<td>scanQRCode</td>

</tr>

<tr>

<td>微信卡券</td>

<td>拉取使用卡券列表</td>

<td>chooseCard</td>

</tr>

<tr>

<td></td>

<td>批量添加卡券接口</td>

<td>addCard</td>

</tr>

<tr>

<td></td>

<td>查看微信卡包的卡券</td>

<td>openCard</td>

</tr>

<tr>

<td>长按识别</td>

<td>小程序圆形码</td>

<td>无</td>

</tr>

</tbody>

</table>

##### 相关接口 3

用户分享时可获取当前`<web-view/>`的URL，即在`onShareAppMessage`回调中返回`webViewUrl`参数。

示例代码：

    Page({
      onShareAppMessage(options) {
        console.log(options.webViewUrl)
      }
    })

##### 相关接口 4

在网页内可通过`window.__wxjs_environment`变量判断是否在小程序环境，建议在`WeixinJSBridgeReady`回调中使用，也可以使用[JSSDK 1.3.2](https://res.wx.qq.com/open/js/jweixin-1.3.2.js)提供的`getEnv`接口。

示例代码：

    // web-view下的页面内
    function ready() {
      console.log(window.__wxjs_environment === 'miniprogram') // true
    }
    if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
      document.addEventListener('WeixinJSBridgeReady', ready, false)
    } else {
      ready()
    }

    // 或者
    wx.miniProgram.getEnv(function(res) {
      console.log(res.miniprogram) // true
    })

##### Bug & Tip

1.  **网页内iframe的域名也需要配置到域名白名单。**
2.  开发者工具上，可以在 `<web-view/>` 组件上通过右键 - 调试，打开 `<web-view/>` 组件的调试。
3.  每个页面只能有一个`<web-view/>`，`<web-view/>`会自动铺满整个页面，并覆盖其他组件。
4.  `<web-view/>`网页与小程序之间不支持除JSSDK提供的接口之外的通信。
5.  在iOS中，若存在JSSDK接口调用无响应的情况，可在`<web-view/>`的src后面加个#wechat_redirect解决。

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

*   [关于腾讯](https://www.tencent.com/)
*   [文档中心](https://developers.weixin.qq.com/miniprogram/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo)
*   [客服中心](https://kf.qq.com/product/wx_xcx.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./open-data.html)[](./ad.html)</div>

</div>