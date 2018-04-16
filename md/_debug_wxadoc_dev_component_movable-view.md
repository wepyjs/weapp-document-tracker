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

#### movable-area

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

`movable-view` 的可移动区域

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

<td>scale-area</td>

<td>Boolean</td>

<td>false</td>

<td>当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**注意：movable-area 必须设置width和height属性，不设置默认为10px**

#### movable-view

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

可移动的视图容器，在页面中可以拖拽滑动

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

<td>direction</td>

<td>String</td>

<td>none</td>

<td>movable-view的移动方向，属性值有all、vertical、horizontal、none</td>

<td></td>

</tr>

<tr>

<td>inertia</td>

<td>Boolean</td>

<td>false</td>

<td>movable-view是否带有惯性</td>

<td></td>

</tr>

<tr>

<td>out-of-bounds</td>

<td>Boolean</td>

<td>false</td>

<td>超过可移动区域后，movable-view是否还可以移动</td>

<td></td>

</tr>

<tr>

<td>x</td>

<td>Number / String</td>

<td></td>

<td>定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画</td>

<td></td>

</tr>

<tr>

<td>y</td>

<td>Number / String</td>

<td></td>

<td>定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画</td>

<td></td>

</tr>

<tr>

<td>damping</td>

<td>Number</td>

<td>20</td>

<td>阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快</td>

<td></td>

</tr>

<tr>

<td>friction</td>

<td>Number</td>

<td>2</td>

<td>摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值</td>

<td></td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>scale</td>

<td>Boolean</td>

<td>false</td>

<td>是否支持双指缩放，默认缩放手势生效区域是在movable-view内</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>scale-min</td>

<td>Number</td>

<td>0.5</td>

<td>定义缩放倍数最小值</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>scale-max</td>

<td>Number</td>

<td>10</td>

<td>定义缩放倍数最大值</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>scale-value</td>

<td>Number</td>

<td>1</td>

<td>定义缩放倍数，取值范围为 0.5 - 10</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>完成一次拖动后触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindscale</td>

<td>EventHandle</td>

<td></td>

<td>完成一次拖动后触发的事件，event.detail = {scale: scale}</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

除了基本事件外，movable-view提供了两个特殊事件

<table>

<thead>

<tr>

<th>类型</th>

<th>触发条件</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>htouchmove</td>

<td>初次手指触摸后移动为横向的移动，如果catch此事件，则意味着touchmove事件也被catch</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>vtouchmove</td>

<td>初次手指触摸后移动为纵向的移动，如果catch此事件，则意味着touchmove事件也被catch</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

> movable-view 必须设置width和height属性，不设置默认为10px
> 
> movable-view 默认为绝对定位，top和left属性为0px
> 
> 当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）

**注意**：movable-view必须在`<movable-area/>`组件中，并且必须是直接子节点，否则不能移动。

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/7QWXwimf6PYG)

    <view class="section">
      <view class="section__title">movable-view区域小于movable-area</view>
      <movable-area style="height: 200px; width: 200px; background: red;">
        <movable-view style="height: 50px; width: 50px; background: blue;" x="{{x}}" y="{{y}}" direction="all">
        </movable-view>
      </movable-area>
      <view class="btn-area">
        <button size="mini" bindtap="tap">click me to move to (30px, 30px)</button>
      </view>
      <view class="section__title">movable-view区域大于movable-area</view>
      <movable-area style="height: 100px; width: 100px; background: red;">
        <movable-view style="height: 200px; width: 200px; background: blue;" direction="all">
        </movable-view>
      </movable-area>
      <view class="section__title">可放缩</view>
      <movable-area style="height: 200px; width: 200px; background: red;" scale-area>
        <movable-view style="height: 50px; width: 50px; background: blue;" direction="all" bindchange="onChange" bindscale="onScale" scale scale-min="0.5" scale-max="4" scale-value="2">
        </movable-view>
      </movable-area>
    </view>

    Page({
      data: {
        x: 0,
        y: 0
      },
      tap: function(e) {
        this.setData({
          x: 30,
          y: 30
        });
      },
      onChange: function(e) {
        console.log(e.detail)
      },
      onScale: function(e) {
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

[](swiper.html)[](cover-view.html)</div>

</div>