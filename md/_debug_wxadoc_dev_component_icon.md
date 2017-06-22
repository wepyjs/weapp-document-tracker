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

#### icon

图标。

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

<td>icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear</td>

</tr>

<tr>

<td>size</td>

<td>Number</td>

<td>23</td>

<td>icon的大小，单位px</td>

</tr>

<tr>

<td>color</td>

<td>Color</td>

<td></td>

<td>icon的颜色，同css的color</td>

</tr>

</tbody>

</table>

**示例：**

    <view class="group">
      <block wx:for="{{iconSize}}">
        <icon type="success" size="{{item}}"/>
      </block>
    </view>

    <view class="group">
      <block wx:for="{{iconType}}">
        <icon type="{{item}}" size="40"/>
      </block>
    </view>

    <view class="group">
      <block wx:for="{{iconColor}}">
        <icon type="success" size="40" color="{{item}}"/>
      </block>
    </view>

    Page({
      data: {
        iconSize: [20, 30, 40, 50, 60, 70],
        iconColor: [
          'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
        ],
        iconType: [
          'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
        ]
      }
    })

![icon](https://mp.weixin.qq.com/debug/wxadoc/dev/image/pic/icon.png?t=2017621)

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

[](movable-view.html)[](icon.html)</div>

</div>