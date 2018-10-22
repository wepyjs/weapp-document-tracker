<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18102216)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18102216)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18102216)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18102216)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18102216)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18102216)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18102216)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18102216)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html?t=18102216)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/canvas.html?t=18102216)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html?t=18102216)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/canvas.html?t=18102216)

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

#### canvas

画布。该组件是[原生组件](native-component.html)，使用时请注意相关限制。

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

<td>canvas-id</td>

<td>String</td>

<td></td>

<td>canvas 组件的唯一标识符</td>

</tr>

<tr>

<td>disable-scroll</td>

<td>Boolean</td>

<td>false</td>

<td>当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新</td>

</tr>

<tr>

<td>bindtouchstart</td>

<td>EventHandle</td>

<td></td>

<td>手指触摸动作开始</td>

</tr>

<tr>

<td>bindtouchmove</td>

<td>EventHandle</td>

<td></td>

<td>手指触摸后移动</td>

</tr>

<tr>

<td>bindtouchend</td>

<td>EventHandle</td>

<td></td>

<td>手指触摸动作结束</td>

</tr>

<tr>

<td>bindtouchcancel</td>

<td>EventHandle</td>

<td></td>

<td>手指触摸动作被打断，如来电提醒，弹窗</td>

</tr>

<tr>

<td>bindlongtap</td>

<td>EventHandle</td>

<td></td>

<td>手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动</td>

</tr>

<tr>

<td>binderror</td>

<td>EventHandle</td>

<td></td>

<td>当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}</td>

</tr>

</tbody>

</table>

**注：**

1.  **canvas 标签默认宽度300px、高度225px**
2.  **同一页面中的 canvas-id 不可重复，如果使用一个已经出现过的 canvas-id，该 canvas 标签对应的画布将被隐藏并不再正常工作**

**示例代码：[下载](../demo/api-canvas.zip)**

[在开发者工具中预览效果](wechatide://minicode/oyVplmmG6xYt "在开发者工具中预览效果")

    <!-- canvas.wxml -->
    <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas>
    <!-- 当使用绝对定位时，文档流后边的 canvas 的显示层级高于前边的 canvas -->
    <canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas"></canvas>
    <!-- 因为 canvas-id 与前一个 canvas 重复，该 canvas 不会显示，并会发送一个错误事件到 AppService -->
    <canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" binderror="canvasIdErrorCallback"></canvas>

    // canvas.js
    Page({
      canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg)
      },
      onReady: function (e) {
        // 使用 wx.createContext 获取绘图上下文 context
        var context = wx.createCanvasContext('firstCanvas')

        context.setStrokeStyle("#00ff00")
        context.setLineWidth(5)
        context.rect(0, 0, 200, 200)
        context.stroke()
        context.setStrokeStyle("#ff0000")
        context.setLineWidth(2)
        context.moveTo(160, 100)
        context.arc(100, 100, 60, 0, 2 * Math.PI, true)
        context.moveTo(140, 100)
        context.arc(100, 100, 40, 0, Math.PI, false)
        context.moveTo(85, 80)
        context.arc(80, 80, 5, 0, 2 * Math.PI, true)
        context.moveTo(125, 80)
        context.arc(120, 80, 5, 0, 2 * Math.PI, true)
        context.stroke()
        context.draw()
      }
    })

相关api：[wx.createCanvasContext](../api/canvas/wx.createCanvasContext.html)

##### Bug & Tip

1.  请注意[原生组件使用限制](native-component.html#原生组件的使用限制)。
2.  `bug`: 避免设置过大的宽高，在安卓下会有crash的问题

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

[](./map.html)[](./open-data.html)</div>

</div>