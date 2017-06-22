<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
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
*   [基础内容](icon.html)
    *   [icon](icon.html)
    *   [text](text.html)
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
*   [地图](map.html)
    *   [map](map.html#map)
*   [画布](canvas.html)
    *   [canvas](canvas.html#canvas)
*   [客服会话](contact-button.html)
    *   [contact-button](contact-button.html)

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

画布。

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

<td>当在 canvas 中移动时，禁止屏幕滚动以及下拉刷新</td>

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

**示例代码：[下载](../../demo/api-canvas.zip)**

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

相关api：[wx.createCanvasContext](../api/canvas/create-canvas-context.html)

#### Bug & Tip

1.  `tip`: `canvas` 组件是由客户端创建的原生组件，它的层级是最高的。
2.  `tip`: 请勿在 `scroll-view` 中使用 `canvas` 组件。
3.  `tip`: `css` 动画对 `canvas` 组件无效。

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

[](map.html#map)[](canvas.html#canvas)</div>

</div>