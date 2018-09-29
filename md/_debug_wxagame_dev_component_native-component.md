<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18092914)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18092914)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18092914)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18092914)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18092914)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18092914)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18092914)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18092914)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html?t=18092914)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/native-component.html?t=18092914)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html?t=18092914)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/native-component.html?t=18092914)

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

## 原生组件

小程序中的部分组件是由客户端创建的原生组件，这些组件有：

*   [`camera`](camera.html)
*   [`canvas`](canvas.html)
*   [`input`](input.html)
*   [`live-player`](live-player.html)
*   [`live-pusher`](live-pusher.html)
*   [`map`](map.html)
*   [`textarea`](textarea.html)
*   [`video`](video.html)

## 原生组件的使用限制

由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：

*   原生组件的层级是**最高**的，所以页面中的其他组件无论设置 `z-index` 为多少，都无法盖在原生组件上。
    *   后插入的原生组件可以覆盖之前的原生组件。
*   原生组件还无法在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用。
*   部分CSS样式无法应用于原生组件，例如：
    *   无法对原生组件设置 CSS 动画
    *   无法定义原生组件为 `position: fixed`
    *   不能在父级节点使用 `overflow: hidden` 来裁剪原生组件的显示区域
*   原生组件的事件监听不能使用 `bind:eventname` 的写法，只支持 `bindeventname`。原生组件也不支持 catch 和 capture 的事件绑定方式。
*   在iOS下，原生组件暂时不支持触摸相关事件。
*   原生组件会遮挡 vConsole 弹出的调试面板。

**在工具上，原生组件是用web组件模拟的，因此很多情况并不能很好的还原真机的表现，建议开发者在使用到原生组件时尽量在真机上进行调试。**

## cover-view 与 cover-image

为了解决原生组件层级最高的限制。小程序专门提供了 [`cover-view`](cover-view.html#cover-view) 和 [`cover-image`](cover-view.html#cover-image) 组件，可以覆盖在**部分**原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。

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

[](./open-data.html)</div>

</div>