<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
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
*   [地图](map.html)
    *   [map](map.html#map)
*   [画布](canvas.html)
    *   [canvas](canvas.html#canvas)
*   [开放数据](open-data.html)
    *   [open-data](open-data.html)
*   [客服会话](contact-button.html)
    *   [contact-button](contact-button.html)

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

多行输入框。

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

<td>bindfocus</td>

<td>EventHandle</td>

<td></td>

<td>输入框聚焦时触发，event.detail = {value: value}</td>

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

<td>当键盘输入时，触发 input 事件，event.detail = {value: value}， **bindinput 处理函数的返回值并不会反映到 textarea 上**</td>

<td></td>

</tr>

<tr>

<td>bindconfirm</td>

<td>EventHandle</td>

<td></td>

<td>点击完成时， 触发 confirm 事件，event.detail = {value: value}</td>

</tr>

</tbody>

</table>

**示例代码：**

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

1.  `bug`: 微信版本 `6.3.30`，`textarea` 在列表渲染时，新增加的 `textarea` 在自动聚焦时的位置计算错误。
2.  `tip`: `textarea` 的 `blur` 事件会晚于页面上的 `tap` 事件，如果需要在 `button` 的点击事件获取 `textarea`，可以使用 `form` 的 `bindsubmit`。
3.  `tip`: 不建议在多行文本上对用户的输入进行修改，所以 `textarea` 的 `bindinput` 处理函数并不会将返回值反映到 `textarea` 上。
4.  `tip`: `textarea` 组件是由客户端创建的原生组件，它的层级是最高的。
5.  `tip`: 请勿在 `scroll-view` 中使用 `textarea` 组件。
6.  `tip`: `css` 动画对 `textarea` 组件无效。

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

[](switch.html)[](navigator.html)</div>

</div>