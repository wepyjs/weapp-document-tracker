<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18100816)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18100816)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18100816)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18100816)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18100816)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18100816)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18100816)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18100816)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/input.html?t=18100816)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/input.html?t=18100816)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/input.html?t=18100816)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/input.html?t=18100816)

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

#### input

输入框。该组件是[原生组件](native-component.html)，使用时请注意相关限制。

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

<td>输入框的初始内容</td>

<td></td>

</tr>

<tr>

<td>type</td>

<td>String</td>

<td>"text"</td>

<td>input 的类型</td>

<td></td>

</tr>

<tr>

<td>password</td>

<td>Boolean</td>

<td>false</td>

<td>是否是密码类型</td>

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

<td>"input-placeholder"</td>

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

<td>cursor-spacing</td>

<td>Number</td>

<td>0</td>

<td>指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离</td>

<td></td>

</tr>

<tr>

<td>auto-focus</td>

<td>Boolean</td>

<td>false</td>

<td>(即将废弃，请直接使用 focus )自动聚焦，拉起键盘</td>

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

<td>confirm-type</td>

<td>String</td>

<td>"done"</td>

<td>设置键盘右下角按钮的文字，仅在type='text'时生效</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>confirm-hold</td>

<td>Boolean</td>

<td>false</td>

<td>点击键盘右下角按钮时是否保持键盘不收起</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>cursor</td>

<td>Number</td>

<td></td>

<td>指定focus时的光标位置</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

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

<td>bindinput</td>

<td>EventHandle</td>

<td></td>

<td>键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。</td>

<td></td>

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

<td>输入框失去焦点时触发，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>bindconfirm</td>

<td>EventHandle</td>

<td></td>

<td>点击完成按钮时触发，event.detail = {value: value}</td>

<td></td>

</tr>

</tbody>

</table>

**type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>text</td>

<td>文本输入键盘</td>

</tr>

<tr>

<td>number</td>

<td>数字输入键盘</td>

</tr>

<tr>

<td>idcard</td>

<td>身份证输入键盘</td>

</tr>

<tr>

<td>digit</td>

<td>带小数点的数字键盘</td>

</tr>

</tbody>

</table>

**confirm-type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>send</td>

<td>右下角按钮为“发送”</td>

</tr>

<tr>

<td>search</td>

<td>右下角按钮为“搜索”</td>

</tr>

<tr>

<td>next</td>

<td>右下角按钮为“下一个”</td>

</tr>

<tr>

<td>go</td>

<td>右下角按钮为“前往”</td>

</tr>

<tr>

<td>done</td>

<td>右下角按钮为“完成”</td>

</tr>

</tbody>

</table>

*   注：confirm-type的最终表现与手机输入法本身的实现有关，部分安卓系统输入法和第三方输入法可能不支持或不完全支持。

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/JYwgZ6ml6rYP "在开发者工具中预览效果")

    <!--input.wxml-->
    <view class="section">
      <input placeholder="这是一个可以自动聚焦的input" auto-focus/>
    </view>
    <view class="section">
      <input placeholder="这个只有在按钮点击的时候才聚焦" focus="{{focus}}" />
      <view class="btn-area">
        <button bindtap="bindButtonTap">使得输入框获取焦点</button>
      </view>
    </view>
    <view class="section">
      <input  maxlength="10" placeholder="最大输入长度10" />
    </view>
    <view class="section">
      <view class="section__title">你输入的是：{{inputValue}}</view>
      <input  bindinput="bindKeyInput" placeholder="输入同步到view中"/>
    </view>
    <view class="section">
      <input  bindinput="bindReplaceInput" placeholder="连续的两个1会变成2" />
    </view>
    <view class="section">
      <input password type="number" />
    </view>
    <view class="section">
      <input password type="text" />
    </view>
    <view class="section">
      <input type="digit" placeholder="带小数点的数字键盘"/>
    </view>
    <view class="section">
      <input type="idcard" placeholder="身份证输入键盘" />
    </view>
    <view class="section">
      <input placeholder-style="color:red" placeholder="占位符字体是红色的" />
    </view>

    //input.js
    Page({
      data: {
        focus: false,
        inputValue: ''
      },
      bindButtonTap: function() {
        this.setData({
          focus: true
        })
      },
      bindKeyInput: function(e) {
        this.setData({
          inputValue: e.detail.value
        })
      },
      bindReplaceInput: function(e) {
        var value = e.detail.value
        var pos = e.detail.cursor
        if(pos != -1){
          //光标在中间
          var left = e.detail.value.slice(0,pos)
          //计算光标的位置
          pos = left.replace(/11/g,'2').length
        }

        //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
        return {
          value: value.replace(/11/g,'2'),
          cursor: pos
        }

        //或者直接返回字符串,光标在最后边
        //return value.replace(/11/g,'2'),
      }
    })

![input](https://developers.weixin.qq.com/miniprogram/dev/image/pic/input.png?t=18100816)

#### Bug & Tip

1.  请注意[原生组件使用限制](native-component.html#原生组件的使用限制)。
2.  `bug` : 微信版本 `6.3.30`, focus 属性设置无效；
3.  `bug` : 微信版本 `6.3.30`, placeholder 在聚焦时出现重影问题；
4.  `tip` : input 组件是一个原生组件，字体是系统字体，所以无法设置 font-family；
5.  `tip` : 在 input 聚焦期间，避免使用 css 动画；
6.  `tip` : 对于将 `input` 封装在自定义组件中、而 `from` 在自定义组件外的情况， `form` 将不能获得这个自定义组件中 `input` 的值。此时需要使用自定义组件的 [内置 behaviors](../framework/custom-component/behaviors.html) `wx://form-field`。

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

[](./form.html)[](./label.html)</div>

</div>