<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18110517)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18110517)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18110517)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18110517)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18110517)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18110517)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18110517)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18110517)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html?t=18110517)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/slider.html?t=18110517)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html?t=18110517)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/slider.html?t=18110517)

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

#### slider

滑动选择器。

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

<td>min</td>

<td>Number</td>

<td>0</td>

<td>最小值</td>

<td></td>

</tr>

<tr>

<td>max</td>

<td>Number</td>

<td>100</td>

<td>最大值</td>

<td></td>

</tr>

<tr>

<td>step</td>

<td>Number</td>

<td>1</td>

<td>步长，取值必须大于 0，并且可被(max - min)整除</td>

<td></td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td></td>

</tr>

<tr>

<td>value</td>

<td>Number</td>

<td>0</td>

<td>当前取值</td>

<td></td>

</tr>

<tr>

<td>color</td>

<td>Color</td>

<td>#e9e9e9</td>

<td>背景条的颜色（请使用 backgroundColor）</td>

<td></td>

</tr>

<tr>

<td>selected-color</td>

<td>Color</td>

<td>#1aad19</td>

<td>已选择的颜色（请使用 activeColor）</td>

<td></td>

</tr>

<tr>

<td>activeColor</td>

<td>Color</td>

<td>#1aad19</td>

<td>已选择的颜色</td>

<td></td>

</tr>

<tr>

<td>backgroundColor</td>

<td>Color</td>

<td>#e9e9e9</td>

<td>背景条的颜色</td>

<td></td>

</tr>

<tr>

<td>block-size</td>

<td>Number</td>

<td>28</td>

<td>滑块的大小，取值范围为 12 - 28</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>block-color</td>

<td>Color</td>

<td>#ffffff</td>

<td>滑块的颜色</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>show-value</td>

<td>Boolean</td>

<td>false</td>

<td>是否显示当前 value</td>

<td></td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>完成一次拖动后触发的事件，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>bindchanging</td>

<td>EventHandle</td>

<td></td>

<td>拖动过程中触发的事件，event.detail = {value: value}</td>

<td>[1.7.0](../framework/compatibility.html "基础库 1.7.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/3NbqVcm56OYS "在开发者工具中预览效果")

    <view class="section section_gap">
      <text class="section__title">设置step</text>
      <view class="body-view">
        <slider bindchange="slider2change" step="5"/>
      </view>
    </view>

    <view class="section section_gap">
      <text class="section__title">显示当前value</text>
      <view class="body-view">
        <slider bindchange="slider3change" show-value/>
      </view>
    </view>

    <view class="section section_gap">
      <text class="section__title">设置最小/最大值</text>
      <view class="body-view">
        <slider bindchange="slider4change" min="50" max="200" show-value/>
      </view>
    </view>

    var pageData = {}
    for (var i = 1; i < 5; i++) {
      (function (index) {
        pageData['slider' + index + 'change'] = function(e) {
          console.log('slider' + 'index' + '发生 change 事件，携带值为', e.detail.value)
        }
      })(i)
    }
    Page(pageData)

![slider](https://developers.weixin.qq.com/miniprogram/dev/image/pic/slider.png?t=18110517)

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

[](./radio.html)[](./switch.html)</div>

</div>