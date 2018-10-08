<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18100816)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18100816)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18100816)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18100816)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18100816)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18100816)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18100816)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18100816)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html?t=18100816)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/live-player.html?t=18100816)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html?t=18100816)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/live-player.html?t=18100816)

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

#### live-player

> 基础库 1.7.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

实时音视频播放。该组件是[原生组件](native-component.html)，使用时请注意相关限制。

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

<td>src</td>

<td>String</td>

<td></td>

<td>音视频地址。目前仅支持 flv, rtmp 格式</td>

<td></td>

</tr>

<tr>

<td>mode</td>

<td>String</td>

<td>live</td>

<td>live（直播），RTC（实时通话）</td>

<td></td>

</tr>

<tr>

<td>autoplay</td>

<td>Boolean</td>

<td>false</td>

<td>自动播放</td>

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

<td>orientation</td>

<td>String</td>

<td>vertical</td>

<td>画面方向，可选值有 vertical，horizontal</td>

<td></td>

</tr>

<tr>

<td>object-fit</td>

<td>String</td>

<td>contain</td>

<td>填充模式，可选值有 contain，fillCrop</td>

<td></td>

</tr>

<tr>

<td>background-mute</td>

<td>Boolean</td>

<td>false</td>

<td>进入后台时是否静音（已废弃，默认退台静音）</td>

<td></td>

</tr>

<tr>

<td>min-cache</td>

<td>Number</td>

<td>1</td>

<td>最小缓冲区，单位s</td>

<td></td>

</tr>

<tr>

<td>max-cache</td>

<td>Number</td>

<td>3</td>

<td>最大缓冲区，单位s</td>

<td></td>

</tr>

<tr>

<td>bindstatechange</td>

<td>EventHandle</td>

<td></td>

<td>播放状态变化事件，detail = {code}</td>

<td></td>

</tr>

<tr>

<td>bindfullscreenchange</td>

<td>EventHandle</td>

<td></td>

<td>全屏变化事件，detail = {direction, fullScreen}</td>

<td></td>

</tr>

<tr>

<td>bindnetstatus</td>

<td>EventHandle</td>

<td></td>

<td>网络状态通知，detail = {info}</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**注意：**

*   `<live-player />` 默认宽度300px、高度225px，可通过wxss设置宽高。
*   开发者工具上暂不支持。
*   相关api：[wx.createLivePlayerContext](../api/media/live/wx.createLivePlayerContext.html)

##### 状态码

<table>

<thead>

<tr>

<th>代码</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>2001</td>

<td>已经连接服务器</td>

</tr>

<tr>

<td>2002</td>

<td>已经连接服务器,开始拉流</td>

</tr>

<tr>

<td>2003</td>

<td>网络接收到首个视频数据包(IDR)</td>

</tr>

<tr>

<td>2004</td>

<td>视频播放开始</td>

</tr>

<tr>

<td>2005</td>

<td>视频播放进度</td>

</tr>

<tr>

<td>2006</td>

<td>视频播放结束</td>

</tr>

<tr>

<td>2007</td>

<td>视频播放Loading</td>

</tr>

<tr>

<td>2008</td>

<td>解码器启动</td>

</tr>

<tr>

<td>2009</td>

<td>视频分辨率改变</td>

</tr>

<tr>

<td>-2301</td>

<td>网络断连，且经多次重连抢救无效，更多重试请自行重启播放</td>

</tr>

<tr>

<td>-2302</td>

<td>获取加速拉流地址失败</td>

</tr>

<tr>

<td>2101</td>

<td>当前视频帧解码失败</td>

</tr>

<tr>

<td>2102</td>

<td>当前音频帧解码失败</td>

</tr>

<tr>

<td>2103</td>

<td>网络断连, 已启动自动重连</td>

</tr>

<tr>

<td>2104</td>

<td>网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀</td>

</tr>

<tr>

<td>2105</td>

<td>当前视频播放出现卡顿</td>

</tr>

<tr>

<td>2106</td>

<td>硬解启动失败，采用软解</td>

</tr>

<tr>

<td>2107</td>

<td>当前视频帧不连续，可能丢帧</td>

</tr>

<tr>

<td>2108</td>

<td>当前流硬解第一个I帧失败，SDK自动切软解</td>

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

<td>3005</td>

<td>RTMP 读/写失败</td>

</tr>

</tbody>

</table>

##### 网络状态数据

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

[在开发者工具中预览效果](wechatide://minicode/UzWEzmm763Y4 "在开发者工具中预览效果")

    <live-player src="https://domain/pull_stream" mode="RTC" autoplay bindstatechange="statechange" binderror="error" style="width: 300px; height: 225px;" />

    Page({
      statechange(e) {
        console.log('live-player code:', e.detail.code)
      },
      error(e) {
      	console.error('live-player error:', e.detail.errMsg)
      }
    })

##### Bug & Tip

1.  请注意[原生组件使用限制](native-component.html#原生组件的使用限制)。

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

[](./camera.html)[](./live-pusher.html)</div>

</div>