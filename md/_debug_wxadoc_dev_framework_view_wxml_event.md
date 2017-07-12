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

*   [简易教程](../../../)
*   [框架](../../MINA.html)
*   [组件](../../../component/)
*   [API](../../../api/)
*   [工具](../../../devtools/devtools.html)
*   [Q&A](../../../qa.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](../../structure.html)
*   [配置](../../config.html)
*   [逻辑层](../../app-service/)
    *   [注册程序](../../app-service/app.html)
    *   [场景值](../../app-service/scene.html)
    *   [注册页面](../../app-service/page.html)
    *   [路由](../../app-service/route.html)
    *   [模块化](../../app-service/module.html)
    *   [API](../../app-service/api.html)
*   [视图层](../)
    *   [WXML](./)
        *   [数据绑定](data.html)
        *   [列表渲染](list.html)
        *   [条件渲染](conditional.html)
        *   [模板](template.html)
        *   [事件](event.html)
        *   [引用](import.html)
    *   [WXSS](../wxss.html)
    *   [组件](../component.html)
*   [基础库](../../client-lib.html)
*   [兼容](../../compatibility.html)
*   [运行机制](../../operating-mechanism.html)
*   [性能](../../performance/)
    *   [优化建议](../../performance/tips.html)
    *   [分析工具](../../performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 事件

## 什么是事件

*   事件是视图层到逻辑层的通讯方式。
*   事件可以将用户的行为反馈到逻辑层进行处理。
*   事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
*   事件对象可以携带额外信息，如 id, dataset, touches。

## 事件的使用方式

*   在组件中绑定一个事件处理函数。

如`bindtap`，当用户点击该组件的时候会在该页面对应的Page中找到相应的事件处理函数。

    <view id="tapTest" data-hi="WeChat" bindtap="tapName"> Click me! </view>

*   在相应的Page定义中写上相应的事件处理函数，参数是event。

    Page({
      tapName: function(event) {
        console.log(event)
      }
    })

*   可以看到log出来的信息大致如下：

        {
        "type":"tap",
        "timeStamp":895,
        "target": {
          "id": "tapTest",
          "dataset":  {
            "hi":"WeChat"
          }
        },
        "currentTarget":  {
          "id": "tapTest",
          "dataset": {
            "hi":"WeChat"
          }
        },
        "detail": {
          "x":53,
          "y":14
        },
        "touches":[{
          "identifier":0,
          "pageX":53,
          "pageY":14,
          "clientX":53,
          "clientY":14
        }],
        "changedTouches":[{
          "identifier":0,
          "pageX":53,
          "pageY":14,
          "clientX":53,
          "clientY":14
        }]
        }

## 事件详解

### 事件分类

事件分为冒泡事件和非冒泡事件：

1.  冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
2.  非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

WXML的冒泡事件列表：

<table>

<thead>

<tr>

<th>类型</th>

<th>触发条件</th>

</tr>

</thead>

<tbody>

<tr>

<td>touchstart</td>

<td>手指触摸动作开始</td>

</tr>

<tr>

<td>touchmove</td>

<td>手指触摸后移动</td>

</tr>

<tr>

<td>touchcancel</td>

<td>手指触摸动作被打断，如来电提醒，弹窗</td>

</tr>

<tr>

<td>touchend</td>

<td>手指触摸动作结束</td>

</tr>

<tr>

<td>tap</td>

<td>手指触摸后马上离开</td>

</tr>

<tr>

<td>longtap</td>

<td>手指触摸后，超过350ms再离开</td>

</tr>

</tbody>

</table>

**注：除上表之外的其他组件自定义事件如无特殊申明都是非冒泡事件，如[`<form/>`](../../../component/form.html)的`submit`事件，[`<input/>`](../../../component/input.html)的`input`事件，[`<scroll-view/>`](../../../component/scroll-view.html)的`scroll`事件，(详见各个[组件](../../../component/))**

### 事件绑定

事件绑定的写法同组件的属性，以 key、value 的形式。

*   key 以`bind`或`catch`开头，然后跟上事件的类型，如`bindtap`, `catchtouchstart`
*   value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。

`bind`事件绑定不会阻止冒泡事件向上冒泡，`catch`事件绑定可以阻止冒泡事件向上冒泡。

如在下边这个例子中，点击 inner view 会先后触发`handleTap3`和`handleTap2`(因为tap事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发`handleTap2`，点击 outter view 会触发`handleTap1`。

    <view id="outter" bindtap="handleTap1">
      outer view
      <view id="middle" catchtap="handleTap2">
        middle view
        <view id="inner" bindtap="handleTap3">
          inner view
        </view>
      </view>
    </view>

### 事件对象

如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

**BaseEvent 基础事件对象属性列表：**

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[type](#type)</td>

<td>String</td>

<td>事件类型</td>

</tr>

<tr>

<td>[timeStamp](#timeStamp)</td>

<td>Integer</td>

<td>事件生成时的时间戳</td>

</tr>

<tr>

<td>[target](#target)</td>

<td>Object</td>

<td>触发事件的组件的一些属性值集合</td>

</tr>

<tr>

<td>[currentTarget](#currenttarget)</td>

<td>Object</td>

<td>当前组件的一些属性值集合</td>

</tr>

</tbody>

</table>

**CustomEvent 自定义事件对象属性列表（继承 BaseEvent）：**

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[detail](#detail)</td>

<td>Object</td>

<td>额外的信息</td>

</tr>

</tbody>

</table>

**TouchEvent 触摸事件对象属性列表（继承 BaseEvent）：**

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[touches](#touches)</td>

<td>Array</td>

<td>触摸事件，当前停留在屏幕中的触摸点信息的数组</td>

</tr>

<tr>

<td>[changedTouches](#changedTouches)</td>

<td>Array</td>

<td>触摸事件，当前变化的触摸点信息的数组</td>

</tr>

</tbody>

</table>

**特殊事件： `<canvas/>` 中的触摸事件不可冒泡，所以没有 currentTarget。**

### type

代表事件的类型。

### timeStamp

页面打开到触发事件所经过的毫秒数。

### target

触发事件的源组件。

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>id</td>

<td>String</td>

<td>事件源组件的id</td>

</tr>

<tr>

<td>tagName</td>

<td>String</td>

<td>当前组件的类型</td>

</tr>

<tr>

<td>[dataset](#dataset)</td>

<td>Object</td>

<td>事件源组件上由`data-`开头的自定义属性组成的集合</td>

</tr>

</tbody>

</table>

### currentTarget

事件绑定的当前组件。

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>id</td>

<td>String</td>

<td>当前组件的id</td>

</tr>

<tr>

<td>tagName</td>

<td>String</td>

<td>当前组件的类型</td>

</tr>

<tr>

<td>[dataset](#dataset)</td>

<td>Object</td>

<td>当前组件上由`data-`开头的自定义属性组成的集合</td>

</tr>

</tbody>

</table>

**说明： target 和 currentTarget 可以参考上例中，点击 inner view 时，`handleTap3` 收到的事件对象 target 和 currentTarget 都是 inner，而 `handleTap2` 收到的事件对象 target 就是 inner，currentTarget 就是 middle。**

#### dataset

在组件中可以定义数据，这些数据将会通过事件传递给 SERVICE。 书写方式： 以`data-`开头，多个单词由连字符`-`链接，不能有大写(大写会自动转成小写)如`data-element-type`，最终在 event.currentTarget.dataset 中会将连字符转成驼峰`elementType`。

**示例：**

    <view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap"> DataSet Test </view>

    Page({
      bindViewTap:function(event){
        event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
        event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写
      }
    })

### touches

touches 是一个数组，每个元素为一个 Touch 对象（canvas 触摸事件中携带的 touches 是 CanvasTouch 数组）。 表示当前停留在屏幕上的触摸点。

#### Touch 对象

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>identifier</td>

<td>Number</td>

<td>触摸点的标识符</td>

</tr>

<tr>

<td>pageX, pageY</td>

<td>Number</td>

<td>距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴</td>

</tr>

<tr>

<td>clientX, clientY</td>

<td>Number</td>

<td>距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴</td>

</tr>

</tbody>

</table>

#### CanvasTouch 对象

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

<th>特殊说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>identifier</td>

<td>Number</td>

<td>触摸点的标识符</td>

<td></td>

</tr>

<tr>

<td>x, y</td>

<td>Number</td>

<td>距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为X轴，纵向为Y轴</td>

</tr>

</tbody>

</table>

### changedTouches

changedTouches 数据格式同 touches。 表示有变化的触摸点，如从无变有（touchstart），位置变化（touchmove），从有变无（touchend、touchcancel）。

### detail

自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入，媒体的错误事件会携带错误信息，详见[组件](wxml/wxml-component.md)定义中各个事件的定义。

点击事件的`detail` 带有的 x, y 同 pageX, pageY 代表距离文档左上角的距离。

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

[](template.html)[](import.html)</div>

</div>