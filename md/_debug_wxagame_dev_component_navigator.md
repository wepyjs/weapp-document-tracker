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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html?t=18111620)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/navigator.html?t=18111620)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html?t=18111620)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/navigator.html?t=18111620)

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

#### navigator

页面链接。

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

<td>target</td>

<td>String</td>

<td>self</td>

<td>在哪个目标上发生跳转，默认当前小程序，可选值self/miniProgram</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>url</td>

<td>String</td>

<td></td>

<td>当前小程序内的跳转链接</td>

<td></td>

</tr>

<tr>

<td>open-type</td>

<td>String</td>

<td>navigate</td>

<td>跳转方式</td>

<td></td>

</tr>

<tr>

<td>delta</td>

<td>Number</td>

<td></td>

<td>当 open-type 为 'navigateBack' 时有效，表示回退的层数</td>

<td></td>

</tr>

<tr>

<td>app-id</td>

<td>String</td>

<td></td>

<td>当target="miniProgram"时有效，要打开的小程序 appId</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>path</td>

<td>String</td>

<td></td>

<td>当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>extra-data</td>

<td>Object</td>

<td></td>

<td>当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据。[详情](../framework/app-service/app.html)</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>version</td>

<td>version</td>

<td>release</td>

<td>当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>hover-class</td>

<td>String</td>

<td>navigator-hover</td>

<td>指定点击时的样式类，当`hover-class="none"`时，没有点击态效果</td>

<td></td>

</tr>

<tr>

<td>hover-stop-propagation</td>

<td>Boolean</td>

<td>false</td>

<td>指定是否阻止本节点的祖先节点出现点击态</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>hover-start-time</td>

<td>Number</td>

<td>50</td>

<td>按住后多久出现点击态，单位毫秒</td>

<td></td>

</tr>

<tr>

<td>hover-stay-time</td>

<td>Number</td>

<td>600</td>

<td>手指松开后点击态保留时间，单位毫秒</td>

<td></td>

</tr>

<tr>

<td>bindsuccess</td>

<td>String</td>

<td></td>

<td>当target="miniProgram"时有效，跳转小程序成功</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindfail</td>

<td>String</td>

<td></td>

<td>当target="miniProgram"时有效，跳转小程序失败</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindcomplete</td>

<td>String</td>

<td></td>

<td>当target="miniProgram"时有效，跳转小程序完成</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**open-type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>navigate</td>

<td>对应 `wx.navigateTo` 或 `wx.navigateToMiniProgram` 的功能</td>

<td></td>

</tr>

<tr>

<td>redirect</td>

<td>对应 `wx.redirectTo` 的功能</td>

<td></td>

</tr>

<tr>

<td>switchTab</td>

<td>对应 `wx.switchTab` 的功能</td>

<td></td>

</tr>

<tr>

<td>reLaunch</td>

<td>对应 `wx.reLaunch` 的功能</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>navigateBack</td>

<td>对应 `wx.navigateBack` 的功能</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>exit</td>

<td>退出小程序，target="miniProgram"时生效</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

#### 使用限制

##### 需要用户确认跳转

从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。

##### 每个小程序可跳转的其他小程序数量限制为不超过 10 个

从 2.4.0 版本以及指定日期（具体待定）开始，开发者提交新版小程序代码时，如使用了跳转其他小程序功能，则需要在代码配置中声明将要跳转的小程序名单，限定不超过 10 个，否则将无法通过审核。该名单可在发布新版时更新，不支持动态修改。配置方法详见 [配置](../framework/config.html)。调用此接口时，所跳转的 appId 必须在配置列表中，否则回调 `fail appId "${appId}" is not in navigateToMiniProgramAppIdList`。

#### 关于调试

*   在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功。[详情](../devtools/different.html#跳转小程序调试支持)
*   开发者工具上支持被跳转的小程序处理接收参数的调试。[详情](../devtools/different.html#跳转小程序调试支持)

**注：`navigator-hover` 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, `<navigator/>` 的子节点背景色应为透明色**

**示例代码：**

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/2Ec11cmI6BY1 "在开发者工具中预览效果")

    /** wxss **/
    /** 修改默认的navigator点击态 **/
    .navigator-hover {
      color:blue;
    }
    /** 自定义其他点击态样式类 **/
    .other-navigator-hover {
      color:red;
    }

    <!-- sample.wxml -->
    <view class="btn-area">
      <navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">跳转到新页面</navigator>
      <navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</navigator>
      <navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</navigator>
      <navigator target="miniProgram" open-type="navigate" app-id="" path="" extra-data="" version="release">打开绑定的小程序</navigator>
    </view>

    <!-- navigator.wxml -->
    <view style="text-align:center"> {{title}} </view>
    <view> 点击左上角返回回到之前页面 </view>

    <!-- redirect.wxml -->
    <view style="text-align:center"> {{title}} </view>
    <view> 点击左上角返回回到上级页面 </view>

    // redirect.js navigator.js
    Page({
      onLoad: function(options) {
        this.setData({
          title: options.title
        })
      }
    })

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

[](./button.html)[](./audio.html)</div>

</div>