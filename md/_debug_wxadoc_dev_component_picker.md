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

#### picker

从底部弹起的滚动选择器，现支持三种选择器，通过mode来区分，分别是普通选择器，时间选择器，日期选择器，默认是普通选择器。

**普通选择器：mode = selector**

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

<td>range</td>

<td>Array / Object Array</td>

<td>[]</td>

<td>mode为 selector 时，range 有效</td>

<td></td>

</tr>

<tr>

<td>range-key</td>

<td>String</td>

<td></td>

<td>当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容</td>

<td></td>

</tr>

<tr>

<td>value</td>

<td>Number</td>

<td>0</td>

<td>value 的值表示表示选择了 range 中的第几个（下标从 0 开始）。</td>

<td></td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

</tr>

</tbody>

</table>

**时间选择器：mode = time**

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

<td>value</td>

<td>String</td>

<td></td>

<td>表示选中的时间，格式为"hh:mm"</td>

</tr>

<tr>

<td>start</td>

<td>String</td>

<td></td>

<td>表示有效时间范围的开始，字符串格式为"hh:mm"</td>

</tr>

<tr>

<td>end</td>

<td>String</td>

<td></td>

<td>表示有效时间范围的结束，字符串格式为"hh:mm"</td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value}</td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

</tr>

</tbody>

</table>

**日期选择器：mode = date**

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

<td>0</td>

<td>表示选中的日期，格式为"YYYY-MM-DD"</td>

<td></td>

</tr>

<tr>

<td>start</td>

<td>String</td>

<td></td>

<td>表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"</td>

<td></td>

</tr>

<tr>

<td>end</td>

<td>String</td>

<td></td>

<td>表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"</td>

<td></td>

</tr>

<tr>

<td>fields</td>

<td>String</td>

<td>day</td>

<td>有效值 year,month,day，表示选择器的粒度</td>

<td></td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

</tr>

</tbody>

</table>

**fields 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>year</td>

<td>选择器粒度为年</td>

</tr>

<tr>

<td>month</td>

<td>选择器粒度为月份</td>

</tr>

<tr>

<td>day</td>

<td>选择器粒度为天</td>

</tr>

</tbody>

</table>

**注意：**开发工具暂时只支持mode = selector。

**示例代码：**

    <view class="section">
      <view class="section__title">地区选择器</view>
      <picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
        <view class="picker">
          当前选择：{{array[index]}}
        </view>
      </picker>
    </view>
    <view class="section">
      <view class="section__title">时间选择器</view>
      <picker mode="time" value="{{time}}" start="09:01" end="21:01" bindchange="bindTimeChange">
        <view class="picker">
          当前选择: {{time}}
        </view>
      </picker>
    </view>

    <view class="section">
      <view class="section__title">日期选择器</view>
      <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="bindDateChange">
        <view class="picker">
          当前选择: {{date}}
        </view>
      </picker>
    </view>

    Page({
      data: {
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
          {
            id: 0,
            name: '美国'
          },
          {
            id: 1,
            name: '中国'
          },
          {
            id: 2,
            name: '巴西'
          },
          {
            id: 3,
            name: '日本'
          }
        ],
        index: 0,
        date: '2016-09-01',
        time: '12:01'
      },
      bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
      bindDateChange: function(e) {
        this.setData({
          date: e.detail.value
        })
      },
      bindTimeChange: function(e) {
        this.setData({
          time: e.detail.value
        })
      }
    })

![picker](https://mp.weixin.qq.com/debug/wxadoc/dev/image/pic/picker.png?t=2017616)

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

[](label.html)[](picker-view.html)</div>

</div>