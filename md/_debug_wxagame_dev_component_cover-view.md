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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html?t=18101919)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/cover-view.html?t=18101919)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html?t=18101919)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/cover-view.html?t=18101919)

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

#### cover-view

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

覆盖在原生组件之上的文本视图，可覆盖的原生组件包括`map`、`video`、`canvas`、`camera`、`live-player`、`live-pusher`，只支持嵌套`cover-view`、`cover-image`，可在`cover-view`中使用`button`。

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

<td>scroll-top</td>

<td>Number</td>

<td></td>

<td>设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

#### cover-image

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

覆盖在原生组件之上的图片视图，可覆盖的原生组件同`cover-view`，支持嵌套在cover-view里。

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

<td>src</td>

<td>String</td>

<td></td>

<td>图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。</td>

<td></td>

</tr>

<tr>

<td>bindload</td>

<td>EventHandle</td>

<td></td>

<td>图片加载成功时触发</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>binderror</td>

<td>EventHandle</td>

<td></td>

<td>图片加载失败时触发</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

##### Bug & Tips

1.  `tip`: 基础库 2.2.4 起支持 touch 相关事件，也可使用 hover-class 设置点击态
2.  `tip`: 基础库 2.1.0 起支持设置 `scale` `rotate` 的 css 样式，包括 transition 动画
3.  `tip`: 基础库 1.9.90 起 `cover-view` 支持 `overflow: scroll`，但不支持动态更新 `overflow`
4.  `tip`: 基础库 1.9.90 起最外层 `cover-view` 支持 `position: fixed`
5.  `tip`: 基础库 1.9.0 起支持插在 `view` 等标签下。在此之前只可嵌套在原生组件`map`、`video`、`canvas`、`camera`内，避免嵌套在其他组件内。
6.  `tip`: 基础库 1.6.0 起支持css transition动画，`transition-property`只支持`transform (translateX, translateY)`与`opacity`。
7.  `tip`: 基础库 1.6.0 起支持css opacity。
8.  `tip`: 事件模型遵循冒泡模型，但不会冒泡到原生组件。
9.  `tip`: 文本建议都套上cover-view标签，避免排版错误。
10.  `tip`: 只支持基本的定位、布局、文本样式。不支持设置`单边的border`、`background-image`、`shadow`、`overflow: visible`等。
11.  `tip`: 建议子节点不要溢出父节点
12.  `tip`: 默认设置的样式有：`white-space: nowrap;` `line-height: 1.2;` `display: block;`
13.  `bug`: 自定义组件嵌套 `cover-view` 时，自定义组件的 slot 及其父节点暂不支持通过 wx:if 控制显隐，否则会导致 `cover-view` 不显示

**示例：**

[在开发者工具中预览效果](wechatide://minicode/IBYfximo6AYL "在开发者工具中预览效果")

    <video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" controls="{{false}}" event-model="bubble">
      <cover-view class="controls">
        <cover-view class="play" bindtap="play">
          <cover-image class="img" src="/path/to/icon_play" />
        </cover-view>
        <cover-view class="pause" bindtap="pause">
          <cover-image class="img" src="/path/to/icon_pause" />
        </cover-view>
        <cover-view class="time">00:00</cover-view>
      </cover-view>
    </video>

    .controls {
      position: relative;
      top: 50%;
      height: 50px;
      margin-top: -25px;
      display: flex;
    }
    .play,.pause,.time {
      flex: 1;
      height: 100%;
    }
    .time {
      text-align: center;
      background-color: rgba(0, 0, 0, .5);
      color: white;
      line-height: 50px;
    }
    .img {
      width: 40px;
      height: 40px;
      margin: 5px auto;
    }

    Page({
      onReady() {
        this.videoCtx = wx.createVideoContext('myVideo')
      },
      play() {
        this.videoCtx.play()
      },
      pause() {
        this.videoCtx.pause()
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

[](./movable-view.html)</div>

</div>