<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
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

#### map

地图。

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

<td>longitude</td>

<td>Number</td>

<td></td>

<td>中心经度</td>

<td></td>

</tr>

<tr>

<td>latitude</td>

<td>Number</td>

<td></td>

<td>中心纬度</td>

<td></td>

</tr>

<tr>

<td>scale</td>

<td>Number</td>

<td>16</td>

<td>缩放级别，取值范围为5-18</td>

<td></td>

</tr>

<tr>

<td>markers</td>

<td>Array</td>

<td></td>

<td>标记点</td>

<td></td>

</tr>

<tr>

<td>covers</td>

<td>Array</td>

<td></td>

<td>**即将移除，请使用 markers**</td>

<td></td>

</tr>

<tr>

<td>polyline</td>

<td>Array</td>

<td></td>

<td>路线</td>

<td></td>

</tr>

<tr>

<td>circles</td>

<td>Array</td>

<td></td>

<td>圆</td>

<td></td>

</tr>

<tr>

<td>controls</td>

<td>Array</td>

<td></td>

<td>控件</td>

<td></td>

</tr>

<tr>

<td>include-points</td>

<td>Array</td>

<td></td>

<td>缩放视野以包含所有给定的坐标点</td>

<td></td>

</tr>

<tr>

<td>show-location</td>

<td>Boolean</td>

<td></td>

<td>显示带有方向的当前定位点</td>

<td></td>

</tr>

<tr>

<td>bindmarkertap</td>

<td>EventHandle</td>

<td></td>

<td>点击标记点时触发</td>

<td></td>

</tr>

<tr>

<td>bindcallouttap</td>

<td>EventHandle</td>

<td></td>

<td>点击标记点对应的气泡时触发</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindcontroltap</td>

<td>EventHandle</td>

<td></td>

<td>点击控件时触发</td>

<td></td>

</tr>

<tr>

<td>bindregionchange</td>

<td>EventHandle</td>

<td></td>

<td>视野发生变化时触发</td>

<td></td>

</tr>

<tr>

<td>bindtap</td>

<td>EventHandle</td>

<td></td>

<td>点击地图时触发</td>

<td></td>

</tr>

<tr>

<td>bindupdated</td>

<td>EventHandle</td>

<td></td>

<td>在地图渲染更新完成时触发</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**注意: covers 属性即将移除，请使用 markers 替代**

##### markers

标记点用于在地图上显示标记的位置

<table>

<thead>

<tr>

<th>属性</th>

<th>说明</th>

<th>类型</th>

<th>必填</th>

<th>备注</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>id</td>

<td>标记点id</td>

<td>Number</td>

<td>否</td>

<td>marker点击事件回调会返回此id。**建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。**</td>

<td></td>

</tr>

<tr>

<td>latitude</td>

<td>纬度</td>

<td>Number</td>

<td>是</td>

<td>浮点数，范围 -90 ~ 90</td>

<td></td>

</tr>

<tr>

<td>longitude</td>

<td>经度</td>

<td>Number</td>

<td>是</td>

<td>浮点数，范围 -180 ~ 180</td>

<td></td>

</tr>

<tr>

<td>title</td>

<td>标注点名</td>

<td>String</td>

<td>否</td>

<td></td>

<td></td>

</tr>

<tr>

<td>iconPath</td>

<td>显示的图标</td>

<td>String</td>

<td>是</td>

<td>项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径</td>

<td></td>

</tr>

<tr>

<td>rotate</td>

<td>旋转角度</td>

<td>Number</td>

<td>否</td>

<td>顺时针旋转的角度，范围 0 ~ 360，默认为 0</td>

<td></td>

</tr>

<tr>

<td>alpha</td>

<td>标注的透明度</td>

<td>Number</td>

<td>否</td>

<td>默认1，无透明</td>

<td></td>

</tr>

<tr>

<td>width</td>

<td>标注图标宽度</td>

<td>Number</td>

<td>否</td>

<td>默认为图片实际宽度</td>

<td></td>

</tr>

<tr>

<td>height</td>

<td>标注图标高度</td>

<td>Number</td>

<td>否</td>

<td>默认为图片实际高度</td>

<td></td>

</tr>

<tr>

<td>callout</td>

<td>自定义标记点上方的气泡窗口</td>

<td>Object</td>

<td>否</td>

<td>支持的属性见下表，可识别换行符。</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>label</td>

<td>为标记点旁边增加标签</td>

<td>Object</td>

<td>否</td>

<td>支持的属性见下表，可识别换行符。</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>anchor</td>

<td>经纬度在标注图标的锚点，默认底边中点</td>

<td>Object</td>

<td>否</td>

<td>{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

##### marker 上的气泡 callout

<table>

<thead>

<tr>

<th>属性</th>

<th>说明</th>

<th>类型</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>content</td>

<td>文本</td>

<td>String</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>color</td>

<td>文本颜色</td>

<td>String</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>fontSize</td>

<td>文字大小</td>

<td>Number</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>borderRadius</td>

<td>callout边框圆角</td>

<td>Number</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bgColor</td>

<td>背景色</td>

<td>String</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>padding</td>

<td>文本边缘留白</td>

<td>Number</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>display</td>

<td>'BYCLICK':点击显示; 'ALWAYS':常显</td>

<td>String</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>textAlign</td>

<td>文本对齐方式。有效值: left, right, center</td>

<td>String</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

##### marker 上的气泡 label

<table>

<thead>

<tr>

<th>属性</th>

<th>说明</th>

<th>类型</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>content</td>

<td>文本</td>

<td>String</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>color</td>

<td>文本颜色</td>

<td>String</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>fontSize</td>

<td>文字大小</td>

<td>Number</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>x</td>

<td>label的坐标，原点是 marker 对应的经纬度</td>

<td>Number</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>y</td>

<td>label的坐标，原点是 marker 对应的经纬度</td>

<td>Number</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>borderWidth</td>

<td>边框宽度</td>

<td>Number</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>borderColor</td>

<td>边框颜色</td>

<td>String</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>borderRadius</td>

<td>边框圆角</td>

<td>Number</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bgColor</td>

<td>背景色</td>

<td>String</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>padding</td>

<td>文本边缘留白</td>

<td>Number</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>textAlign</td>

<td>文本对齐方式。有效值: left, right, center</td>

<td>String</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

##### polyline

指定一系列坐标点，从数组第一项连线至最后一项

<table>

<thead>

<tr>

<th>属性</th>

<th>说明</th>

<th>类型</th>

<th>必填</th>

<th>备注</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>points</td>

<td>经纬度数组</td>

<td>Array</td>

<td>是</td>

<td>[{latitude: 0, longitude: 0}]</td>

<td></td>

</tr>

<tr>

<td>color</td>

<td>线的颜色</td>

<td>String</td>

<td>否</td>

<td>8位十六进制表示，后两位表示alpha值，如：#000000AA</td>

<td></td>

</tr>

<tr>

<td>width</td>

<td>线的宽度</td>

<td>Number</td>

<td>否</td>

<td></td>

<td></td>

</tr>

<tr>

<td>dottedLine</td>

<td>是否虚线</td>

<td>Boolean</td>

<td>否</td>

<td>默认false</td>

<td></td>

</tr>

<tr>

<td>arrowLine</td>

<td>带箭头的线</td>

<td>Boolean</td>

<td>否</td>

<td>默认false，开发者工具暂不支持该属性</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>arrowIconPath</td>

<td>更换箭头图标</td>

<td>String</td>

<td>否</td>

<td>在arrowLine为true时生效</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>borderColor</td>

<td>线的边框颜色</td>

<td>String</td>

<td>否</td>

<td></td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>borderWidth</td>

<td>线的厚度</td>

<td>Number</td>

<td>否</td>

<td></td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

##### circles

在地图上显示圆

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

<td>latitude</td>

<td>纬度</td>

<td>Number</td>

<td>是</td>

<td>浮点数，范围 -90 ~ 90</td>

</tr>

<tr>

<td>longitude</td>

<td>经度</td>

<td>Number</td>

<td>是</td>

<td>浮点数，范围 -180 ~ 180</td>

</tr>

<tr>

<td>color</td>

<td>描边的颜色</td>

<td>String</td>

<td>否</td>

<td>8位十六进制表示，后两位表示alpha值，如：#000000AA</td>

</tr>

<tr>

<td>fillColor</td>

<td>填充颜色</td>

<td>String</td>

<td>否</td>

<td>8位十六进制表示，后两位表示alpha值，如：#000000AA</td>

</tr>

<tr>

<td>radius</td>

<td>半径</td>

<td>Number</td>

<td>是</td>

<td></td>

</tr>

<tr>

<td>strokeWidth</td>

<td>描边的宽度</td>

<td>Number</td>

<td>否</td>

</tr>

</tbody>

</table>

##### controls

在地图上显示控件，控件不随着地图移动

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

<td>id</td>

<td>控件id</td>

<td>Number</td>

<td>否</td>

<td>在控件点击事件回调会返回此id</td>

</tr>

<tr>

<td>position</td>

<td>控件在地图的位置</td>

<td>Object</td>

<td>是</td>

<td>控件相对地图位置</td>

</tr>

<tr>

<td>iconPath</td>

<td>显示的图标</td>

<td>String</td>

<td>是</td>

<td>项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径</td>

</tr>

<tr>

<td>clickable</td>

<td>是否可点击</td>

<td>Boolean</td>

<td>否</td>

<td>默认不可点击</td>

</tr>

</tbody>

</table>

###### position

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

<td>left</td>

<td>距离地图的左边界多远</td>

<td>Number</td>

<td>否</td>

<td>默认为0</td>

</tr>

<tr>

<td>top</td>

<td>距离地图的上边界多远</td>

<td>Number</td>

<td>否</td>

<td>默认为0</td>

</tr>

<tr>

<td>width</td>

<td>控件宽度</td>

<td>Number</td>

<td>否</td>

<td>默认为图片宽度</td>

</tr>

<tr>

<td>height</td>

<td>控件高度</td>

<td>Number</td>

<td>否</td>

<td>默认为图片高度</td>

</tr>

</tbody>

</table>

地图组件的经纬度必填, 如果不填经纬度则默认值是北京的经纬度。

**示例：**

    <!-- map.wxml -->
    <map id="map" longitude="113.324520" latitude="23.099994" scale="14" controls="{{controls}}" bindcontroltap="controltap" markers="{{markers}}" bindmarkertap="markertap" polyline="{{polyline}}" bindregionchange="regionchange" show-location style="width: 100%; height: 300px;"></map>

    // map.js
    Page({
      data: {
        markers: [{
          iconPath: "/resources/others.png",
          id: 0,
          latitude: 23.099994,
          longitude: 113.324520,
          width: 50,
          height: 50
        }],
        polyline: [{
          points: [{
            longitude: 113.3245211,
            latitude: 23.10229
          }, {
            longitude: 113.324520,
            latitude: 23.21229
          }],
          color:"#FF0000DD",
          width: 2,
          dottedLine: true
        }],
        controls: [{
          id: 1,
          iconPath: '/resources/location.png',
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }]
      },
      regionchange(e) {
        console.log(e.type)
      },
      markertap(e) {
        console.log(e.markerId)
      },
      controltap(e) {
        console.log(e.controlId)
      }
    })

相关api：[wx.createMapContext](../api/api-map.html)

##### Bug & Tip

1.  `tip`: `map` 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。
2.  `tip`: 请勿在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用 `map` 组件。
3.  `tip`: `css` 动画对 `map` 组件无效。
4.  `tip`: `map` 组件使用的经纬度是火星坐标系，调用 `wx.getLocation` 接口需要指定 `type` 为 `gcj02`

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

[](live-pusher.html)[](map.html#map)</div>

</div>