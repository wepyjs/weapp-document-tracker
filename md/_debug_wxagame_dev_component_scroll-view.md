<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18102520)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18102520)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18102520)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18102520)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18102520)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18102520)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18102520)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18102520)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html?t=18102520)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/scroll-view.html?t=18102520)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html?t=18102520)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/scroll-view.html?t=18102520)

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

#### scroll-view

可滚动视图区域。

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

<td>scroll-x</td>

<td>Boolean</td>

<td>false</td>

<td>允许横向滚动</td>

</tr>

<tr>

<td>scroll-y</td>

<td>Boolean</td>

<td>false</td>

<td>允许纵向滚动</td>

</tr>

<tr>

<td>upper-threshold</td>

<td>Number</td>

<td>50</td>

<td>距顶部/左边多远时（单位px），触发 scrolltoupper 事件</td>

</tr>

<tr>

<td>lower-threshold</td>

<td>Number</td>

<td>50</td>

<td>距底部/右边多远时（单位px），触发 scrolltolower 事件</td>

</tr>

<tr>

<td>scroll-top</td>

<td>Number</td>

<td></td>

<td>设置竖向滚动条位置</td>

</tr>

<tr>

<td>scroll-left</td>

<td>Number</td>

<td></td>

<td>设置横向滚动条位置</td>

</tr>

<tr>

<td>scroll-into-view</td>

<td>String</td>

<td></td>

<td>值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素</td>

</tr>

<tr>

<td>scroll-with-animation</td>

<td>Boolean</td>

<td>false</td>

<td>在设置滚动条位置时使用动画过渡</td>

</tr>

<tr>

<td>enable-back-to-top</td>

<td>Boolean</td>

<td>false</td>

<td>iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向</td>

</tr>

<tr>

<td>bindscrolltoupper</td>

<td>EventHandle</td>

<td></td>

<td>滚动到顶部/左边，会触发 scrolltoupper 事件</td>

</tr>

<tr>

<td>bindscrolltolower</td>

<td>EventHandle</td>

<td></td>

<td>滚动到底部/右边，会触发 scrolltolower 事件</td>

</tr>

<tr>

<td>bindscroll</td>

<td>EventHandle</td>

<td></td>

<td>滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}</td>

</tr>

</tbody>

</table>

使用竖向滚动时，需要给`<scroll-view/>`一个固定高度，通过 WXSS 设置 height。

**示例代码：**

    <view class="section">
      <view class="section__title">vertical scroll</view>
      <scroll-view scroll-y style="height: 200px;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">
        <view id="green" class="scroll-view-item bc_green"></view>
        <view id="red"  class="scroll-view-item bc_red"></view>
        <view id="yellow" class="scroll-view-item bc_yellow"></view>
        <view id="blue" class="scroll-view-item bc_blue"></view>
      </scroll-view>

      <view class="btn-area">
        <button size="mini" bindtap="tap">click me to scroll into view </button>
        <button size="mini" bindtap="tapMove">click me to scroll</button>
      </view>
    </view>
    <view class="section section_gap">
      <view class="section__title">horizontal scroll</view>
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <view id="green" class="scroll-view-item_H bc_green"></view>
        <view id="red"  class="scroll-view-item_H bc_red"></view>
        <view id="yellow" class="scroll-view-item_H bc_yellow"></view>
        <view id="blue" class="scroll-view-item_H bc_blue"></view>
      </scroll-view>
    </view>

    var order = ['red', 'yellow', 'blue', 'green', 'red']
    Page({
      data: {
        toView: 'red',
        scrollTop: 100
      },
      upper: function(e) {
        console.log(e)
      },
      lower: function(e) {
        console.log(e)
      },
      scroll: function(e) {
        console.log(e)
      },
      tap: function(e) {
        for (var i = 0; i < order.length; ++i) {
          if (order[i] === this.data.toView) {
            this.setData({
              toView: order[i + 1]
            })
            break
          }
        }
      },
      tapMove: function(e) {
        this.setData({
          scrollTop: this.data.scrollTop + 10
        })
      }
    })

![scroll-view](https://developers.weixin.qq.com/miniprogram/dev/image/pic/scroll-view.png?t=18102520)

##### Bug & Tip

1.  `tip`: 请勿在 `scroll-view` 中使用 `textarea`、`map`、`canvas`、`video` 组件
2.  `tip`: `scroll-into-view` 的优先级高于 `scroll-top`
3.  `tip`: 在滚动 `scroll-view` 时会阻止页面回弹，所以在 `scroll-view` 中滚动，是无法触发 `onPullDownRefresh`
4.  `tip`: 若要使用下拉刷新，请使用页面的滚动，而不是 `scroll-view` ，这样也能通过点击顶部状态栏回到页面顶部

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

[](./view.html)[](./swiper.html)</div>

</div>