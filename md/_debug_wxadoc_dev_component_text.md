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

#### text

文本。

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

<td>selectable</td>

<td>Boolean</td>

<td>false</td>

<td>文本是否可选</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>space</td>

<td>String</td>

<td>false</td>

<td>显示连续空格</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>decode</td>

<td>Boolean</td>

<td>false</td>

<td>是否解码</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**space 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>ensp</td>

<td>中文字符空格一半大小</td>

</tr>

<tr>

<td>emsp</td>

<td>中文字符空格大小</td>

</tr>

<tr>

<td>nbsp</td>

<td>根据字体设置的空格大小</td>

</tr>

</tbody>

</table>

##### Tips

*   decode可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`
*   各个操作系统的空格标准并不一致。
*   `<text/>` 组件内只支持 `<text/>` 嵌套。
*   除了文本节点以外的其他节点都无法长按选中。

**示例：**

    <view class="btn-area">
      <view class="body-view">
        <text>{{text}}</text>
        <button bindtap="add">add line</button>
        <button bindtap="remove">remove line</button>
      </view>
    </view>

    var initData = 'this is first line\nthis is second line'
    var extraLine = [];
    Page({
      data: {
        text: initData
      },
      add: function(e) {
        extraLine.push('other line')
        this.setData({
          text: initData + '\n' + extraLine.join('\n')
        })
      },
      remove: function(e) {
        if (extraLine.length > 0) {
          extraLine.pop()
          this.setData({
            text: initData + '\n' + extraLine.join('\n')
          })
        }
      }
    })

![text](https://mp.weixin.qq.com/debug/wxadoc/dev/image/pic/text.png)

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

[](icon.html)[](rich-text.html)</div>

</div>