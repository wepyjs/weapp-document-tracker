<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](javascript:;)
    *   [小程序数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)
    *   [小游戏数据](https://mp.weixin.qq.com/debug/wxagame/analysis/index.html)
*   [社区](https://developers.weixin.qq.com/)

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
*   [腾讯云支持](../qcloud/qcloud.html)

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
    *   [functional-page-navigator](functional-page-navigator.html)
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
    *   [ad](ad.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

#### camera

> 基础库 1.6.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

系统相机。

需要[用户授权](../api/authorize-index.html) scope.camera

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

<td>mode</td>

<td>String</td>

<td>normal</td>

<td>有效值为 normal, scanCode</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>device-position</td>

<td>String</td>

<td>back</td>

<td>前置或后置，值为front, back</td>

<td></td>

</tr>

<tr>

<td>flash</td>

<td>String</td>

<td>auto</td>

<td>闪光灯，值为auto, on, off</td>

<td></td>

</tr>

<tr>

<td>scan-area</td>

<td>Array</td>

<td></td>

<td>扫码识别区域，格式为[x, y, w, h]，x,y是相对于camera显示区域的左上角，w,h为区域宽度，单位px，仅在 mode="scanCode" 时生效</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindstop</td>

<td>EventHandle</td>

<td></td>

<td>摄像头在非正常终止时触发，如退出后台等情况</td>

<td></td>

</tr>

<tr>

<td>binderror</td>

<td>EventHandle</td>

<td></td>

<td>用户不允许使用摄像头时触发</td>

<td></td>

</tr>

<tr>

<td>bindscancode</td>

<td>EventHandle</td>

<td></td>

<td>在成功识别到一维码时触发，仅在 mode="scanCode" 时生效</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

相关api：[wx.createCameraContext](../api/api-camera.html)

##### Bug & Tip

1.  `tip`: `camera` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。可使用 `cover-view` `cover-image`覆盖在上面。
2.  `tip`: 同一页面只能插入一个 `camera` 组件。
3.  `tip`: 请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `camera` 组件。
4.  `bug`: `scan-area` 属性目前存在识别区域不准的问题，建议先不指定

**示例：**

[在开发者工具中预览效果](wechatide://minicode/VBZ3Jim26zYu)

    <!-- camera.wxml -->
    <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
    <button type="primary" bindtap="takePhoto">拍照</button>
    <view>预览</view>
    <image mode="widthFix" src="{{src}}"></image>

    // camera.js
    Page({
        takePhoto() {
            const ctx = wx.createCameraContext()
            ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                    this.setData({
                        src: res.tempImagePath
                    })
                }
            })
        },
        error(e) {
            console.log(e.detail)
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

[](video.html)[](live-player.html)</div>

</div>