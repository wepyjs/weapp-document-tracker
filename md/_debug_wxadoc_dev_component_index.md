<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017621)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017621)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=2017621)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=2017621)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017621)

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
*   [基础内容](icon.html)
    *   [icon](icon.html)
    *   [text](text.html)
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

# 基础组件

框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。

什么是组件：

*   组件是视图层的基本组成单元。
*   组件自带一些功能与微信风格的样式。
*   一个组件通常包括`开始标签`和`结束标签`，`属性`用来修饰这个组件，`内容`在两个标签之内。

        <tagname property="value">
          Content goes here ...
        </tagename>

    **注意：所有组件与属性都是小写，以连字符`-`连接**

### 属性类型

<table>

<thead>

<tr>

<th>类型</th>

<th>描述</th>

<th>注解</th>

</tr>

</thead>

<tbody>

<tr>

<td>Boolean</td>

<td>布尔值</td>

<td>组件写上该属性，不管该属性等于什么，其值都为`true`，只有组件上没有写该属性时，属性值才为`false`。如果属性值为变量，变量的值会被转换为Boolean类型</td>

</tr>

<tr>

<td>Number</td>

<td>数字</td>

<td>`1`, `2.5`</td>

</tr>

<tr>

<td>String</td>

<td>字符串</td>

<td>`"string"`</td>

</tr>

<tr>

<td>Array</td>

<td>数组</td>

<td>`[ 1, "string" ]`</td>

</tr>

<tr>

<td>Object</td>

<td>对象</td>

<td>`{ key: value }`</td>

</tr>

<tr>

<td>EventHandler</td>

<td>事件处理函数名</td>

<td>`"handlerName"` 是 [Page](../framework/app-service/page.html)中定义的事件处理函数名</td>

</tr>

<tr>

<td>Any</td>

<td>任意属性</td>

</tr>

</tbody>

</table>

### 共同属性类型

所有组件都有的属性：

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>描述</th>

<th>注解</th>

</tr>

</thead>

<tbody>

<tr>

<td>id</td>

<td>String</td>

<td>组件的唯一标示</td>

<td>保持整个页面唯一</td>

</tr>

<tr>

<td>class</td>

<td>String</td>

<td>组件的样式类</td>

<td>在对应的 WXSS 中定义的样式类</td>

</tr>

<tr>

<td>style</td>

<td>String</td>

<td>组件的内联样式</td>

<td>可以动态设置的内联样式</td>

</tr>

<tr>

<td>hidden</td>

<td>Boolean</td>

<td>组件是否显示</td>

<td>所有组件默认显示</td>

</tr>

<tr>

<td>data-*</td>

<td>Any</td>

<td>自定义属性</td>

<td>组件上触发的事件时，会发送给事件处理函数</td>

</tr>

<tr>

<td>bind* / catch*</td>

<td>EventHandler</td>

<td>组件的事件</td>

<td>详见[事件](../framework/view/wxml/event.html)</td>

</tr>

</tbody>

</table>

### 特殊属性

几乎所有组件都有各自定义的属性，可以对该组件的功能或样式进行修饰，请参考各个[组件](#组件列表)的定义。

### 组件列表

基础组件分为以下七大类：

**视图容器(View Container)：**

<table>

<thead>

<tr>

<th>组件名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[view](view.html)</td>

<td>视图容器</td>

</tr>

<tr>

<td>[scroll-view](scroll-view.html)</td>

<td>可滚动视图容器</td>

</tr>

<tr>

<td>[swiper](swiper.html)</td>

<td>滑块视图容器</td>

</tr>

</tbody>

</table>

**基础内容(Basic Content)：**

<table>

<thead>

<tr>

<th>组件名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[icon](icon.html)</td>

<td>图标</td>

</tr>

<tr>

<td>[text](text.html)</td>

<td>文字</td>

</tr>

<tr>

<td>[progress](progress.html)</td>

<td>进度条</td>

</tr>

</tbody>

</table>

**表单(Form)：**

<table>

<thead>

<tr>

<th>标签名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[button](button.html)</td>

<td>按钮</td>

</tr>

<tr>

<td>[form](form.html)</td>

<td>表单</td>

</tr>

<tr>

<td>[input](input.html)</td>

<td>输入框</td>

</tr>

<tr>

<td>[checkbox](checkbox.html)</td>

<td>多项选择器</td>

</tr>

<tr>

<td>[radio](radio.html)</td>

<td>单项选择器</td>

</tr>

<tr>

<td>[picker](picker.html)</td>

<td>列表选择器</td>

</tr>

<tr>

<td>[picker-view](picker-view.html)</td>

<td>内嵌列表选择器</td>

</tr>

<tr>

<td>[slider](slider.html)</td>

<td>滚动选择器</td>

</tr>

<tr>

<td>[switch](switch.html)</td>

<td>开关选择器</td>

</tr>

<tr>

<td>[label](label.html)</td>

<td>标签</td>

</tr>

</tbody>

</table>

**导航(Navigation)：**

<table>

<thead>

<tr>

<th>组件名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[navigator](navigator.html)</td>

<td>应用链接</td>

</tr>

</tbody>

</table>

**多媒体(Media)：**

<table>

<thead>

<tr>

<th>组件名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[audio](audio.html)</td>

<td>音频</td>

</tr>

<tr>

<td>[image](image.html)</td>

<td>图片</td>

</tr>

<tr>

<td>[video](video.html)</td>

<td>视频</td>

</tr>

</tbody>

</table>

**地图(Map)：**

<table>

<thead>

<tr>

<th>组件名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[map](map.html)</td>

<td>地图</td>

</tr>

</tbody>

</table>

**画布(Canvas)：**

<table>

<thead>

<tr>

<th>组件名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[canvas](canvas.html)</td>

<td>画布</td>

</tr>

</tbody>

</table>

**客服会话：**

<table>

<thead>

<tr>

<th>组件名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[contact-button](contact-button.html)</td>

<td>进入客服会话按钮</td>

</tr>

</tbody>

</table>

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017621)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](../framework/performance.html)[](view.html)</div>

</div>