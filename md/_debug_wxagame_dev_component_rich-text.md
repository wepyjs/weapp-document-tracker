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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html?t=18092914)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/rich-text.html?t=18092914)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html?t=18092914)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/rich-text.html?t=18092914)

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

#### rich-text

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

富文本。

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>nodes</td>

<td>Array / String</td>

<td>[]</td>

<td>节点列表 / HTML String</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

支持默认事件，包括：`tap`、`touchstart`、`touchmove`、`touchcancel`、`touchend`和`longtap`

**nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降**

##### nodes

现支持两种节点，通过type来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的HTML节点

**元素节点：type = node**

<table>

<thead>

<tr>

<th>属性</th>

<th>说明</th>

<th>类型</th>

<th>必填</th>

<th>备注</th>

</tr>

</thead>

<tbody>

<tr>

<td>name</td>

<td>标签名</td>

<td>String</td>

<td>是</td>

<td>支持部分受信任的HTML节点</td>

</tr>

<tr>

<td>attrs</td>

<td>属性</td>

<td>Object</td>

<td>否</td>

<td>支持部分受信任的属性，遵循Pascal命名法</td>

</tr>

<tr>

<td>children</td>

<td>子节点列表</td>

<td>Array</td>

<td>否</td>

<td>结构和nodes一致</td>

</tr>

</tbody>

</table>

**文本节点：type = text**

<table>

<thead>

<tr>

<th>属性</th>

<th>说明</th>

<th>类型</th>

<th>必填</th>

<th>备注</th>

</tr>

</thead>

<tbody>

<tr>

<td>text</td>

<td>文本</td>

<td>String</td>

<td>是</td>

<td>支持entities</td>

</tr>

</tbody>

</table>

##### 受信任的HTML节点及属性

全局支持class和style属性，**不支持id属性**。

<table>

<thead>

<tr>

<th>节点</th>

<th>属性</th>

</tr>

</thead>

<tbody>

<tr>

<td>a</td>

<td></td>

</tr>

<tr>

<td>abbr</td>

<td></td>

</tr>

<tr>

<td>b</td>

<td></td>

</tr>

<tr>

<td>blockquote</td>

<td></td>

</tr>

<tr>

<td>br</td>

<td></td>

</tr>

<tr>

<td>code</td>

<td></td>

</tr>

<tr>

<td>col</td>

<td>span，width</td>

</tr>

<tr>

<td>colgroup</td>

<td>span，width</td>

</tr>

<tr>

<td>dd</td>

<td></td>

</tr>

<tr>

<td>del</td>

<td></td>

</tr>

<tr>

<td>div</td>

<td></td>

</tr>

<tr>

<td>dl</td>

<td></td>

</tr>

<tr>

<td>dt</td>

<td></td>

</tr>

<tr>

<td>em</td>

<td></td>

</tr>

<tr>

<td>fieldset</td>

<td></td>

</tr>

<tr>

<td>h1</td>

<td></td>

</tr>

<tr>

<td>h2</td>

<td></td>

</tr>

<tr>

<td>h3</td>

<td></td>

</tr>

<tr>

<td>h4</td>

<td></td>

</tr>

<tr>

<td>h5</td>

<td></td>

</tr>

<tr>

<td>h6</td>

<td></td>

</tr>

<tr>

<td>hr</td>

<td></td>

</tr>

<tr>

<td>i</td>

<td></td>

</tr>

<tr>

<td>img</td>

<td>alt，src，height，width</td>

</tr>

<tr>

<td>ins</td>

<td></td>

</tr>

<tr>

<td>label</td>

<td></td>

</tr>

<tr>

<td>legend</td>

<td></td>

</tr>

<tr>

<td>li</td>

<td></td>

</tr>

<tr>

<td>ol</td>

<td>start，type</td>

</tr>

<tr>

<td>p</td>

<td></td>

</tr>

<tr>

<td>q</td>

<td></td>

</tr>

<tr>

<td>span</td>

<td></td>

</tr>

<tr>

<td>strong</td>

<td></td>

</tr>

<tr>

<td>sub</td>

<td></td>

</tr>

<tr>

<td>sup</td>

<td></td>

</tr>

<tr>

<td>table</td>

<td>width</td>

</tr>

<tr>

<td>tbody</td>

<td></td>

</tr>

<tr>

<td>td</td>

<td>colspan，height，rowspan，width</td>

</tr>

<tr>

<td>tfoot</td>

<td></td>

</tr>

<tr>

<td>th</td>

<td>colspan，height，rowspan，width</td>

</tr>

<tr>

<td>thead</td>

<td></td>

</tr>

<tr>

<td>tr</td>

<td></td>

</tr>

<tr>

<td>ul</td>

<td></td>

</tr>

</tbody>

</table>

**示例：**

[在开发者工具中预览效果](wechatide://minicode/zPVmpim46wYQ "在开发者工具中预览效果")

    <!-- rich-text.wxml -->
    <rich-text nodes="{{nodes}}" bindtap="tap"></rich-text>

    // rich-text.js
    Page({
      data: {
        nodes: [{
          name: 'div',
          attrs: {
            class: 'div_class',
            style: 'line-height: 60px; color: red;'
          },
          children: [{
            type: 'text',
            text: 'Hello&nbsp;World!'
          }]
        }]
      },
      tap() {
        console.log('tap')
      }
    })

##### Bug & Tip

1.  `tip`: nodes 不推荐使用 String 类型，性能会有所下降。
2.  `tip`: `rich-text` 组件内屏蔽所有节点的事件。
3.  `tip`: attrs 属性不支持 id ，支持 class 。
4.  `tip`: name 属性大小写不敏感。
5.  `tip`: 如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。
6.  `tip`: img 标签仅支持网络图片。
7.  `tip`: 如果在自定义组件中使用 `rich-text` 组件，那么仅自定义组件的 wxss 样式对 `rich-text` 中的 class 生效。

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

[](./text.html)[](./progress.html)</div>

</div>