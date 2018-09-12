<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18091218)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18091218)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18091218)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18091218)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18091218)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18091218)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18091218)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18091218)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html?t=18091218)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/live-pusher.html?t=18091218)

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
*   [API](../api/network/download/wx.downloadFile.html)
*   [工具](../devtools/devtools.html)
*   [小程序·云开发](../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html?t=18091218)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/live-pusher.html?t=18091218)

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
    *   [cover-view](./cover-view.html)
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
    *   [audio](./audio.html#audio)
    *   [image](./image.html)
    *   [video](./video.html)
    *   [camera](./camera.html)
    *   [live-player](./live-player.html)
    *   [live-pusher](./live-pusher.html)
*   [地图](./map.html)
    *   [map](./map.html#map)
*   [画布](./canvas.html)
    *   [canvas](./canvas.html#canvas)
*   [开放能力](./open-data.html)
    *   [open-data](./open-data.html)
    *   [web-view](./web-view.html)
    *   [ad](./ad.html)
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

#### live-pusher

> 基础库 1.7.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

实时音视频录制。该组件是[原生组件](native-component.html)，使用时请注意相关限制。

需要[用户授权](../framework/open-ability/authorize.html) scope.camera、scope.record

暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

<table>

<thead>

<tr>

<th>一级类目</th>

<th>二级类目</th>

</tr>

</thead>

<tbody>

<tr>

<td>社交</td>

<td>直播</td>

</tr>

<tr>

<td>教育</td>

<td>在线教育</td>

</tr>

<tr>

<td>医疗</td>

<td>互联网医院，公立医院</td>

</tr>

<tr>

<td>政务民生</td>

<td>所有二级类目</td>

</tr>

<tr>

<td>金融</td>

<td>基金、信托、保险、银行、证券/期货、非金融机构自营小额贷款、征信业务、消费金融</td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>url</td>

<td>String</td>

<td></td>

<td>推流地址。目前仅支持 flv, rtmp 格式</td>

<td></td>

</tr>

<tr>

<td>mode</td>

<td>String</td>

<td>RTC</td>

<td>SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）</td>

<td></td>

</tr>

<tr>

<td>autopush</td>

<td>Boolean</td>

<td>false</td>

<td>自动推流</td>

<td></td>

</tr>

<tr>

<td>muted</td>

<td>Boolean</td>

<td>false</td>

<td>是否静音</td>

<td></td>

</tr>

<tr>

<td>enable-camera</td>

<td>Boolean</td>

<td>true</td>

<td>开启摄像头</td>

<td></td>

</tr>

<tr>

<td>auto-focus</td>

<td>Boolean</td>

<td>true</td>

<td>自动聚集</td>

<td></td>

</tr>

<tr>

<td>orientation</td>

<td>String</td>

<td>vertical</td>

<td>vertical，horizontal</td>

<td></td>

</tr>

<tr>

<td>beauty</td>

<td>Number</td>

<td>0</td>

<td>美颜</td>

<td></td>

</tr>

<tr>

<td>whiteness</td>

<td>Number</td>

<td>0</td>

<td>美白</td>

<td></td>

</tr>

<tr>

<td>aspect</td>

<td>String</td>

<td>9:16</td>

<td>宽高比，可选值有 3:4, 9:16</td>

<td></td>

</tr>

<tr>

<td>min-bitrate</td>

<td>Number</td>

<td>200</td>

<td>最小码率</td>

<td></td>

</tr>

<tr>

<td>max-bitrate</td>

<td>Number</td>

<td>1000</td>

<td>最大码率</td>

<td></td>

</tr>

<tr>

<td>waiting-image</td>

<td>String</td>

<td></td>

<td>进入后台时推流的等待画面</td>

<td></td>

</tr>

<tr>

<td>waiting-image-hash</td>

<td>String</td>

<td></td>

<td>等待画面资源的MD5值</td>

<td></td>

</tr>

<tr>

<td>zoom</td>

<td>Boolean</td>

<td>false</td>

<td>调整焦距</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>device-position</td>

<td>String</td>

<td>front</td>

<td>前置或后置，值为front, back</td>

<td>[2.3.0](../framework/compatibility.html "基础库 2.3.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>background-mute</td>

<td>Boolean</td>

<td>false</td>

<td>进入后台时是否静音</td>

<td></td>

</tr>

<tr>

<td>bindstatechange</td>

<td>EventHandle</td>

<td></td>

<td>状态变化事件，detail = {code}</td>

<td></td>

</tr>

<tr>

<td>bindnetstatus</td>

<td>EventHandle</td>

<td></td>

<td>网络状态通知，detail = {info}</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>binderror</td>

<td>EventHandle</td>

<td></td>

<td>渲染错误事件，detail = {errMsg, errCode}</td>

<td>[1.7.4](../framework/compatibility.html "基础库 1.7.4 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**注意：**

*   `<live-pusher />` 默认宽度为100%、无默认高度，请通过wxss设置宽高。
*   开发者工具上暂不支持。
*   相关api：[wx.createLivePusherContext](../api/media/live/wx.createLivePusherContext.html)

##### 错误码（errCode）

<table>

<thead>

<tr>

<th>代码</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>10001</td>

<td>用户禁止使用摄像头</td>

</tr>

<tr>

<td>10002</td>

<td>用户禁止使用录音</td>

</tr>

</tbody>

</table>

##### 状态码（code）

<table>

<thead>

<tr>

<th>代码</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>1001</td>

<td>已经连接推流服务器</td>

</tr>

<tr>

<td>1002</td>

<td>已经与服务器握手完毕,开始推流</td>

</tr>

<tr>

<td>1003</td>

<td>打开摄像头成功</td>

</tr>

<tr>

<td>1004</td>

<td>录屏启动成功</td>

</tr>

<tr>

<td>1005</td>

<td>推流动态调整分辨率</td>

</tr>

<tr>

<td>1006</td>

<td>推流动态调整码率</td>

</tr>

<tr>

<td>1007</td>

<td>首帧画面采集完成</td>

</tr>

<tr>

<td>1008</td>

<td>编码器启动</td>

</tr>

<tr>

<td>-1301</td>

<td>打开摄像头失败</td>

</tr>

<tr>

<td>-1302</td>

<td>打开麦克风失败</td>

</tr>

<tr>

<td>-1303</td>

<td>视频编码失败</td>

</tr>

<tr>

<td>-1304</td>

<td>音频编码失败</td>

</tr>

<tr>

<td>-1305</td>

<td>不支持的视频分辨率</td>

</tr>

<tr>

<td>-1306</td>

<td>不支持的音频采样率</td>

</tr>

<tr>

<td>-1307</td>

<td>网络断连，且经多次重连抢救无效，更多重试请自行重启推流</td>

</tr>

<tr>

<td>-1308</td>

<td>开始录屏失败，可能是被用户拒绝</td>

</tr>

<tr>

<td>-1309</td>

<td>录屏失败，不支持的Android系统版本，需要5.0以上的系统</td>

</tr>

<tr>

<td>-1310</td>

<td>录屏被其他应用打断了</td>

</tr>

<tr>

<td>-1311</td>

<td>Android Mic打开成功，但是录不到音频数据</td>

</tr>

<tr>

<td>-1312</td>

<td>录屏动态切横竖屏失败</td>

</tr>

<tr>

<td>1101</td>

<td>网络状况不佳：上行带宽太小，上传数据受阻</td>

</tr>

<tr>

<td>1102</td>

<td>网络断连, 已启动自动重连</td>

</tr>

<tr>

<td>1103</td>

<td>硬编码启动失败,采用软编码</td>

</tr>

<tr>

<td>1104</td>

<td>视频编码失败</td>

</tr>

<tr>

<td>1105</td>

<td>新美颜软编码启动失败，采用老的软编码</td>

</tr>

<tr>

<td>1106</td>

<td>新美颜软编码启动失败，采用老的软编码</td>

</tr>

<tr>

<td>3001</td>

<td>RTMP -DNS解析失败</td>

</tr>

<tr>

<td>3002</td>

<td>RTMP服务器连接失败</td>

</tr>

<tr>

<td>3003</td>

<td>RTMP服务器握手失败</td>

</tr>

<tr>

<td>3004</td>

<td>RTMP服务器主动断开，请检查推流地址的合法性或防盗链有效期</td>

</tr>

<tr>

<td>3005</td>

<td>RTMP 读/写失败</td>

</tr>

</tbody>

</table>

##### 网络状态数据（info）

<table>

<thead>

<tr>

<th>键名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>videoBitrate</td>

<td>当前视频编/码器输出的比特率，单位 kbps</td>

</tr>

<tr>

<td>audioBitrate</td>

<td>当前音频编/码器输出的比特率，单位 kbps</td>

</tr>

<tr>

<td>videoFPS</td>

<td>当前视频帧率</td>

</tr>

<tr>

<td>videoGOP</td>

<td>当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s</td>

</tr>

<tr>

<td>netSpeed</td>

<td>当前的发送/接收速度</td>

</tr>

<tr>

<td>netJitter</td>

<td>网络抖动情况，抖动越大，网络越不稳定</td>

</tr>

<tr>

<td>videoWidth</td>

<td>视频画面的宽度</td>

</tr>

<tr>

<td>videoHeight</td>

<td>视频画面的高度</td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/KvWD9mmA62Yk "在开发者工具中预览效果")

      <live-pusher url="https://domain/push_stream" mode="RTC" autopush bindstatechange="statechange" style="width: 300px; height: 225px;" />

    Page({
      statechange(e) {
        console.log('live-pusher code:', e.detail.code)
      }
    })

##### Bug & Tip

1.  请注意[原生组件使用限制](native-component.html#原生组件的使用限制)。
2.  `waiting-image` 属性在 2.3.0 起完整支持网络路径、临时文件和包内路径。

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

[](./live-player.html)</div>

</div>