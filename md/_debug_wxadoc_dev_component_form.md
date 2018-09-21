<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18092022)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18092022)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18092022)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18092022)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18092022)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18092022)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18092022)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18092022)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/form.html?t=18092022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/form.html?t=18092022)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/form.html?t=18092022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/form.html?t=18092022)

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

#### form

表单，将组件内的用户输入的`<switch/>` `<input/>` `<checkbox/>` `<slider/>` `<radio/>` `<picker/>` 提交。

当点击 `<form/>` 表单中 formType 为 submit 的 `<button/>` 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>report-submit</td>

<td>Boolean</td>

<td>是否返回 formId 用于发送[模板消息](../framework/open-ability/template-message.html)</td>

<td></td>

</tr>

<tr>

<td>bindsubmit</td>

<td>EventHandle</td>

<td>携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}</td>

<td></td>

</tr>

<tr>

<td>bindreset</td>

<td>EventHandle</td>

<td>表单重置时会触发 reset 事件</td>

<td></td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/MUaz7cmy6AYq "在开发者工具中预览效果")

    <form bindsubmit="formSubmit" bindreset="formReset">
      <view class="section section_gap">
        <view class="section__title">switch</view>
        <switch name="switch"/>
      </view>
      <view class="section section_gap">
        <view class="section__title">slider</view>
        <slider name="slider" show-value ></slider>
      </view>

      <view class="section">
        <view class="section__title">input</view>
        <input name="input" placeholder="please input here" />
      </view>
      <view class="section section_gap">
        <view class="section__title">radio</view>
        <radio-group name="radio-group">
          <label><radio value="radio1"/>radio1</label>
          <label><radio value="radio2"/>radio2</label>
        </radio-group>
      </view>
      <view class="section section_gap">
        <view class="section__title">checkbox</view>
        <checkbox-group name="checkbox">
          <label><checkbox value="checkbox1"/>checkbox1</label>
          <label><checkbox value="checkbox2"/>checkbox2</label>
        </checkbox-group>
      </view>
      <view class="btn-area">
        <button formType="submit">Submit</button>
        <button formType="reset">Reset</button>
      </view>
    </form>

    Page({
      formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
      },
      formReset: function() {
        console.log('form发生了reset事件')
      }
    })

![form](https://developers.weixin.qq.com/miniprogram/dev/image/pic/form.png?t=18092022)

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

[](./checkbox.html)[](./input.html)</div>

</div>