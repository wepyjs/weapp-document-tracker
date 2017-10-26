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
    *   [camera](camera.html)
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

#### open-data

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

用于展示微信开放的数据。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>type</td>

<td>String</td>

<td></td>

<td>开放数据类型</td>

</tr>

<tr>

<td>open-gid</td>

<td>String</td>

<td></td>

<td>当 type="groupName" 时生效, 群id</td>

</tr>

</tbody>

</table>

**type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>groupName</td>

<td>拉取群名称</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**Tips:** 只有当前用户在此群内才能拉取到群名称

    <open-data type="groupName" open-gid="xxxxxx"></open-data>

**Tips:** 关于open-gid的获取请查看 [转发](../api/share.html#wxgetshareinfoobject)

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

[](canvas.html#canvas)[](open-data.html)</div>

</div>