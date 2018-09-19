<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18091911)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18091911)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18091911)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18091911)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18091911)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18091911)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18091911)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18091911)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html?t=18091911)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/swiper.html?t=18091911)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html?t=18091911)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/swiper.html?t=18091911)

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

#### swiper

滑块视图容器。

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

<td>indicator-dots</td>

<td>Boolean</td>

<td>false</td>

<td>是否显示面板指示点</td>

<td></td>

</tr>

<tr>

<td>indicator-color</td>

<td>Color</td>

<td>rgba(0, 0, 0, .3)</td>

<td>指示点颜色</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>indicator-active-color</td>

<td>Color</td>

<td>#000000</td>

<td>当前选中的指示点颜色</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>autoplay</td>

<td>Boolean</td>

<td>false</td>

<td>是否自动切换</td>

<td></td>

</tr>

<tr>

<td>current</td>

<td>Number</td>

<td>0</td>

<td>当前所在滑块的 index</td>

<td></td>

</tr>

<tr>

<td>current-item-id</td>

<td>String</td>

<td>""</td>

<td>当前所在滑块的 item-id ，不能与 current 被同时指定</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>interval</td>

<td>Number</td>

<td>5000</td>

<td>自动切换时间间隔</td>

<td></td>

</tr>

<tr>

<td>duration</td>

<td>Number</td>

<td>500</td>

<td>滑动动画时长</td>

<td></td>

</tr>

<tr>

<td>circular</td>

<td>Boolean</td>

<td>false</td>

<td>是否采用衔接滑动</td>

<td></td>

</tr>

<tr>

<td>vertical</td>

<td>Boolean</td>

<td>false</td>

<td>滑动方向是否为纵向</td>

<td></td>

</tr>

<tr>

<td>previous-margin</td>

<td>String</td>

<td>"0px"</td>

<td>前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>next-margin</td>

<td>String</td>

<td>"0px"</td>

<td>后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>display-multiple-items</td>

<td>Number</td>

<td>1</td>

<td>同时显示的滑块数量</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>skip-hidden-item-layout</td>

<td>Boolean</td>

<td>false</td>

<td>是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>current 改变时会触发 change 事件，event.detail = {current: current, source: source}</td>

<td></td>

</tr>

<tr>

<td>bindanimationfinish</td>

<td>EventHandle</td>

<td></td>

<td>动画结束时会触发 animationfinish 事件，event.detail 同上</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

从 [1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。") 开始，`change`事件返回`detail`中包含一个`source`字段，表示导致变更的原因，可能值如下：

*   `autoplay` 自动播放导致swiper变化；
*   `touch` 用户划动引起swiper变化；
*   其他原因将用空字符串表示。

**注意**：其中只可放置`<swiper-item/>`组件，否则会导致未定义的行为。

#### swiper-item

仅可放置在`<swiper/>`组件中，宽高自动设置为100%。

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

<td>item-id</td>

<td>String</td>

<td>""</td>

<td>该 swiper-item 的标识符</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/SeizywmX6gY0 "在开发者工具中预览效果")

    <swiper indicator-dots="{{indicatorDots}}"
      autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
      <block wx:for="{{imgUrls}}">
        <swiper-item>
          <image src="{{item}}" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <button bindtap="changeIndicatorDots"> indicator-dots </button>
    <button bindtap="changeAutoplay"> autoplay </button>
    <slider bindchange="intervalChange" show-value min="500" max="2000"/> interval
    <slider bindchange="durationChange" show-value min="1000" max="10000"/> duration

    Page({
      data: {
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000
      },
      changeIndicatorDots: function(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        })
      },
      changeAutoplay: function(e) {
        this.setData({
          autoplay: !this.data.autoplay
        })
      },
      intervalChange: function(e) {
        this.setData({
          interval: e.detail.value
        })
      },
      durationChange: function(e) {
        this.setData({
          duration: e.detail.value
        })
      }
    })

##### Bug & Tip

1.  `tip`: 如果在 `bindchange` 的事件回调函数中使用 `setData` 改变 `current` 值，则有可能导致 `setData` 被不停地调用，因而通常情况下请在改变 `current` 值前检测 `source` 字段来判断是否是由于用户触摸引起。

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

[](./scroll-view.html)[](./movable-view.html)</div>

</div>