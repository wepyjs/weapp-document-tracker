<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017616)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017616)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=2017616)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=2017616)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017616)

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

#### button

按钮。

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

<td>size</td>

<td>String</td>

<td>default</td>

<td>按钮的大小</td>

<td></td>

</tr>

<tr>

<td>type</td>

<td>String</td>

<td>default</td>

<td>按钮的样式类型</td>

<td></td>

</tr>

<tr>

<td>plain</td>

<td>Boolean</td>

<td>false</td>

<td>按钮是否镂空，背景色透明</td>

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

<td>loading</td>

<td>Boolean</td>

<td>false</td>

<td>名称前是否带 loading 图标</td>

<td></td>

</tr>

<tr>

<td>form-type</td>

<td>String</td>

<td></td>

<td>用于 `<form/>` 组件，点击分别会触发 submit/reset 事件</td>

<td></td>

</tr>

<tr>

<td>open-type</td>

<td>String</td>

<td></td>

<td>微信开放能力</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>hover-class</td>

<td>String</td>

<td>button-hover</td>

<td>指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果</td>

<td></td>

</tr>

<tr>

<td>hover-start-time</td>

<td>Number</td>

<td>20</td>

<td>按住后多久出现点击态，单位毫秒</td>

<td></td>

</tr>

<tr>

<td>hover-stay-time</td>

<td>Number</td>

<td>70</td>

<td>手指松开后点击态保留时间，单位毫秒</td>

</tr>

</tbody>

</table>

**注：`button-hover` 默认为`{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`**

**size 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>default</td>

<td></td>

</tr>

<tr>

<td>mini</td>

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

<td>primary</td>

<td></td>

</tr>

<tr>

<td>default</td>

<td></td>

</tr>

<tr>

<td>warn</td>

</tr>

</tbody>

</table>

**form-type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>submit</td>

<td>提交表单</td>

</tr>

<tr>

<td>reset</td>

<td>重置表单</td>

</tr>

</tbody>

</table>

**open-type 有效值：**

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

<td>contact</td>

<td>打开客服会话</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>share</td>

<td>触发用户转发，使用前建议先阅读[使用指引](../api/share.html#使用指引)</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**示例代码：**

    /** wxss **/
    /** 修改button默认的点击态样式类**/
    .button-hover {
      background-color: red;
    }
    /** 添加自定义button点击态样式类**/
    .other-button-hover {
      background-color: blue;
    }

    <button type="default" size="{{defaultSize}}" loading="{{loading}}" plain="{{plain}}"
            disabled="{{disabled}}" bindtap="default" hover-class="other-button-hover"> default </button>
    <button type="primary" size="{{primarySize}}" loading="{{loading}}" plain="{{plain}}"
            disabled="{{disabled}}" bindtap="primary"> primary </button>
    <button type="warn" size="{{warnSize}}" loading="{{loading}}" plain="{{plain}}"
            disabled="{{disabled}}" bindtap="warn"> warn </button>
    <button bindtap="setDisabled">点击设置以上按钮disabled属性</button>
    <button bindtap="setPlain">点击设置以上按钮plain属性</button>
    <button bindtap="setLoading">点击设置以上按钮loading属性</button>
    <button open-type="contact">进入客服会话</button>

    var types = ['default', 'primary', 'warn']
    var pageObject = {
      data: {
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disabled: false,
        plain: false,
        loading: false
      },
      setDisabled: function(e) {
        this.setData({
          disabled: !this.data.disabled
        })
      },
      setPlain: function(e) {
        this.setData({
          plain: !this.data.plain
        })
      },
      setLoading: function(e) {
        this.setData({
          loading: !this.data.loading
        })
      }
    }

    for (var i = 0; i < types.length; ++i) {
      (function(type) {
        pageObject[type] = function(e) {
          var key = type + 'Size'
          var changedData = {}
          changedData[key] =
            this.data[key] === 'default' ? 'mini' : 'default'
          this.setData(changedData)
        }
      })(types[i])
    }

    Page(pageObject)

![button](https://mp.weixin.qq.com/debug/wxadoc/dev/image/pic/button.png?t=2017616)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017616)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](progress.html)[](button.html)</div>

</div>