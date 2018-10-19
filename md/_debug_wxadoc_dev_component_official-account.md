<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18101919)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18101919)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18101919)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101919)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18101919)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18101919)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18101919)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18101919)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html?t=18101919)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/official-account.html?t=18101919)

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
*   [API](../api/network/upload/wx.uploadFile.html)
*   [工具](../devtools/devtools.html)
*   [小程序·云开发](../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html?t=18101919)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/official-account.html?t=18101919)

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

#### official-account

> 基础库 2.3.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

用户扫码打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内。

**Tips:**

1.  使用组件前，需前往小程序后台，在“设置”->“接口设置”->“公众号关注组件”中设置要展示的公众号。

    **注：设置的公众号需与小程序主体一致。**

2.  在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号组件的能力:

    *   当小程序从扫二维码场景（场景值1011）打开时
    *   当小程序从扫小程序码场景（场景值1047）打开时
    *   当小程序从聊天顶部场景（场景值1089）中的“最近使用”内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态
    *   当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态

1.  每个页面只能配置一个该组件。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>bindload</td>

<td>EventHandle</td>

<td>组件加载成功时触发</td>

</tr>

<tr>

<td>binderror</td>

<td>EventHandle</td>

<td>组件加载失败时触发</td>

</tr>

</tbody>

</table>

#### detail对象

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>status</td>

<td>Number</td>

<td>状态码</td>

</tr>

<tr>

<td>errMsg</td>

<td>String</td>

<td>错误信息</td>

</tr>

</tbody>

</table>

#### 状态码

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>-2</td>

<td>网络错误</td>

</tr>

<tr>

<td>-1</td>

<td>数据解析错误</td>

</tr>

<tr>

<td>0</td>

<td>加载成功</td>

</tr>

<tr>

<td>1</td>

<td>小程序关注公众号功能被封禁</td>

</tr>

<tr>

<td>2</td>

<td>关联公众号被封禁</td>

</tr>

<tr>

<td>3</td>

<td>关联关系解除或未选中关联公众号</td>

</tr>

<tr>

<td>4</td>

<td>未开启关注公众号功能</td>

</tr>

</tbody>

</table>

**示例：**

    <official-account></official-account>

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

[](./ad.html)</div>

</div>