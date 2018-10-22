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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html?t=18102216)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/textarea.html?t=18102216)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html?t=18102216)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/textarea.html?t=18102216)

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

#### textarea

多行输入框。该组件是[原生组件](native-component.html)，使用时请注意相关限制。

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

<td>value</td>

<td>String</td>

<td></td>

<td>输入框的内容</td>

<td></td>

</tr>

<tr>

<td>placeholder</td>

<td>String</td>

<td></td>

<td>输入框为空时占位符</td>

<td></td>

</tr>

<tr>

<td>placeholder-style</td>

<td>String</td>

<td></td>

<td>指定 placeholder 的样式</td>

<td></td>

</tr>

<tr>

<td>placeholder-class</td>

<td>String</td>

<td>textarea-placeholder</td>

<td>指定 placeholder 的样式类</td>

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

<td>maxlength</td>

<td>Number</td>

<td>140</td>

<td>最大输入长度，设置为 -1 的时候不限制最大长度</td>

<td></td>

</tr>

<tr>

<td>auto-focus</td>

<td>Boolean</td>

<td>false</td>

<td>自动聚焦，拉起键盘。</td>

<td></td>

</tr>

<tr>

<td>focus</td>

<td>Boolean</td>

<td>false</td>

<td>获取焦点</td>

<td></td>

</tr>

<tr>

<td>auto-height</td>

<td>Boolean</td>

<td>false</td>

<td>是否自动增高，设置auto-height时，style.height不生效</td>

<td></td>

</tr>

<tr>

<td>fixed</td>

<td>Boolean</td>

<td>false</td>

<td>如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true</td>

<td></td>

</tr>

<tr>

<td>cursor-spacing</td>

<td>Number</td>

<td>0</td>

<td>指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离</td>

<td></td>

</tr>

<tr>

<td>cursor</td>

<td>Number</td>

<td></td>

<td>指定focus时的光标位置</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>show-confirm-bar</td>

<td>Boolean</td>

<td>true</td>

<td>是否显示键盘上方带有”完成“按钮那一栏</td>

<td>[1.6.0](../framework/compatibility.html "基础库 1.6.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>selection-start</td>

<td>Number</td>

<td>-1</td>

<td>光标起始位置，自动聚集时有效，需与selection-end搭配使用</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>selection-end</td>

<td>Number</td>

<td>-1</td>

<td>光标结束位置，自动聚集时有效，需与selection-start搭配使用</td>

<td>[1.9.0](../framework/compatibility.html "基础库 1.9.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>adjust-position</td>

<td>Boolean</td>

<td>true</td>

<td>键盘弹起时，是否自动上推页面</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindfocus</td>

<td>EventHandle</td>

<td></td>

<td>输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持</td>

<td></td>

</tr>

<tr>

<td>bindblur</td>

<td>EventHandle</td>

<td></td>

<td>输入框失去焦点时触发，event.detail = {value, cursor}</td>

<td></td>

</tr>

<tr>

<td>bindlinechange</td>

<td>EventHandle</td>

<td></td>

<td>输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}</td>

<td></td>

</tr>

<tr>

<td>bindinput</td>

<td>EventHandle</td>

<td></td>

<td>当键盘输入时，触发 input 事件，event.detail = {value, cursor}，**bindinput 处理函数的返回值并不会反映到 textarea 上**</td>

<td></td>

</tr>

<tr>

<td>bindconfirm</td>

<td>EventHandle</td>

<td></td>

<td>点击完成时， 触发 confirm 事件，event.detail = {value: value}</td>

<td></td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/QAwRn6m86tYu "在开发者工具中预览效果")

    <!--textarea.wxml-->
    <view class="section">
      <textarea bindblur="bindTextAreaBlur" auto-height placeholder="自动变高" />
    </view>
    <view class="section">
      <textarea placeholder="placeholder颜色是红色的" placeholder-style="color:red;"  />
    </view>
    <view class="section">
      <textarea placeholder="这是一个可以自动聚焦的textarea" auto-focus />
    </view>
    <view class="section">
      <textarea placeholder="这个只有在按钮点击的时候才聚焦" focus="{{focus}}" />
      <view class="btn-area">
        <button bindtap="bindButtonTap">使得输入框获取焦点</button>
      </view>
    </view>
    <view class="section">
      <form bindsubmit="bindFormSubmit">
        <textarea placeholder="form 中的 textarea" name="textarea"/>
        <button form-type="submit"> 提交 </button>
      </form>
    </view>

    //textarea.js
    Page({
      data: {
        height: 20,
        focus: false
      },
      bindButtonTap: function() {
        this.setData({
          focus: true
        })
      },
      bindTextAreaBlur: function(e) {
        console.log(e.detail.value)
      },
      bindFormSubmit: function(e) {
        console.log(e.detail.value.textarea)
      }
    })

##### Bug & Tip

1.  请注意[原生组件使用限制](native-component.html#原生组件的使用限制)。
2.  `bug`: 微信版本 `6.3.30`，`textarea` 在列表渲染时，新增加的 `textarea` 在自动聚焦时的位置计算错误。
3.  `tip`: `textarea` 的 `blur` 事件会晚于页面上的 `tap` 事件，如果需要在 `button` 的点击事件获取 `textarea`，可以使用 `form` 的 `bindsubmit`。
4.  `tip`: 不建议在多行文本上对用户的输入进行修改，所以 `textarea` 的 `bindinput` 处理函数并不会将返回值反映到 `textarea` 上。

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

[](./switch.html)</div>

</div>