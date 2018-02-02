<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)

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
*   [组件](./)
*   [API](../api/)
*   [工具](../devtools/devtools.html)
*   [Q&A](../qa.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [视图容器](view.html)
    *   [view](view.html)
    *   [scroll-view](scroll-view.html)
    *   [swiper](swiper.html)
    *   [movable-view](movable-view.html)
    *   [cover-view](cover-view.html)
*   [基础内容](icon.html)
    *   [icon](icon.html)
    *   [text](text.html)
    *   [rich-text](rich-text.html)
    *   [progress](progress.html)
*   [表单组件](button.html)
    *   [button](button.html)
    *   [checkbox](checkbox.html)
    *   [form](form.html)
    *   [input](input.html)
    *   [label](label.html)
    *   [picker](picker.html)
    *   [picker-view](picker-view.html)
    *   [radio](radio.html)
    *   [slider](slider.html)
    *   [switch](switch.html)
    *   [textarea](textarea.html)
*   [导航](navigator.html)
    *   [navigator](navigator.html)
*   [媒体组件](audio.html)
    *   [audio](audio.html#audio)
    *   [image](image.html)
    *   [video](video.html)
    *   [camera](camera.html)
    *   [live-player](live-player.html)
    *   [live-pusher](live-pusher.html)
*   [地图](map.html)
    *   [map](map.html#map)
*   [画布](canvas.html)
    *   [canvas](canvas.html#canvas)
*   [开放能力](open-data.html)
    *   [open-data](open-data.html)
    *   [web-view](web-view.html)

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

<td>url</td>

<td>String</td>

<td></td>

<td>应用内的跳转链接</td>

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

<td>对应 `wx.navigateTo` 的功能</td>

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

</tbody>

</table>

**注：`navigator-hover` 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`, `<navigator/>` 的子节点背景色应为透明色**

**示例代码：**

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

*   [关于腾讯](http://www.tencent.com/zh-cn/index.shtml)
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](textarea.html)[](navigator.html)</div>

</div>