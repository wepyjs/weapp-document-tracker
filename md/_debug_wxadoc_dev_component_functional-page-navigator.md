<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18102614)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18102614)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18102614)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18102614)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18102614)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18102614)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18102614)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18102614)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html?t=18102614)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/functional-page-navigator.html?t=18102614)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html?t=18102614)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/functional-page-navigator.html?t=18102614)

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

#### functional-page-navigator

这个组件从小程序基础库版本 [2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。") 开始支持。

仅在插件的自定义组件中有效，用于跳转到插件功能页。

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

<td>version</td>

<td>String</td>

<td>release</td>

<td>跳转到的小程序版本，有效值 `develop`（开发版），`trial`（体验版），`release`（正式版）；**线上版本必须设置为 `release`**</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>name</td>

<td>String</td>

<td></td>

<td>要跳转到的功能页</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>args</td>

<td>Object</td>

<td>null</td>

<td>功能页参数，参数格式与具体功能页相关</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindsuccess</td>

<td>EventHandler</td>

<td></td>

<td>功能页返回，且操作成功时触发， detail 格式与具体功能页相关</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindfail</td>

<td>EventHandler</td>

<td></td>

<td>功能页返回，且操作失败时触发， detail 格式与具体功能页相关</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**目前支持的功能页和name 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>功能页</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>loginAndGetUserInfo</td>

<td>[用户信息功能页](../framework/plugin/functional-pages/user-info.html)</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>requestPayment</td>

<td>[支付功能页](../framework/plugin/functional-pages/request-payment.html)</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**示例代码：**

    <!-- sample.wxml -->
    <functional-page-navigator name="loginAndGetUserInfo" bind:success="loginSuccess">
      <button>登录到插件</button>
    </functional-page-navigator>

    // redirect.js navigator.js
    Component({
      methods: {
        loginSuccess: function(e) {
          console.log(e.detail.code) // wx.login 的 code
          console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
        }
      }
    })

**Tips:**

*   功能页是插件所有者小程序中的一个特殊页面，开发者不能自定义这个页面的外观。
*   在功能页展示时，一些与界面展示相关的接口将被禁用（接口调用返回 fail ）。
*   这个组件本身可以在开发者工具中使用，但功能页的跳转目前不支持在开发者工具中调试，请在真机上测试。

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

[](./navigator.html)</div>

</div>