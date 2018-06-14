<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](javascript:;)
    *   [小程序数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)
    *   [小游戏数据](https://mp.weixin.qq.com/debug/wxagame/analysis/index.html)
*   [社区](https://developers.weixin.qq.com/)

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

*   [简易教程](../../)
*   [框架](../MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
*   [工具](../../devtools/devtools.html)
*   [腾讯云支持](../../qcloud/qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](../structure.html)
*   [配置](../config.html)
*   [逻辑层](../app-service/)
    *   [注册程序](../app-service/app.html)
    *   [场景值](../app-service/scene.html)
    *   [注册页面](../app-service/page.html)
    *   [路由](../app-service/route.html)
    *   [模块化](../app-service/module.html)
    *   [API](../app-service/api.html)
*   [视图层](../view/)
    *   [WXML](../view/wxml/)
        *   [数据绑定](../view/wxml/data.html)
        *   [列表渲染](../view/wxml/list.html)
        *   [条件渲染](../view/wxml/conditional.html)
        *   [模板](../view/wxml/template.html)
        *   [事件](../view/wxml/event.html)
        *   [引用](../view/wxml/import.html)
    *   [WXS](../view/wxs/)
        *   [模块](../view/wxs/01wxs-module.html)
        *   [变量](../view/wxs/02variate.html)
        *   [注释](../view/wxs/03annotation.html)
        *   [运算符](../view/wxs/04operator.html)
        *   [语句](../view/wxs/05statement.html)
        *   [数据类型](../view/wxs/06datatype.html)
        *   [基础类库](../view/wxs/07basiclibrary.html)
    *   [WXSS](../view/wxss.html)
    *   [组件](../view/component.html)
*   [自定义组件](./)
    *   [组件模版和样式](wxml-wxss.html)
    *   [Component构造器](component.html)
    *   [组件事件](events.html)
    *   [behaviors](behaviors.html)
    *   [组件间关系](relations.html)
    *   [抽象节点](generics.html)
*   [插件](../plugin/)
    *   [开发插件](../plugin/development.html)
    *   [使用插件](../plugin/using.html)
    *   [插件的限制](../plugin/api-limit.html)
*   [分包加载](../subpackages.html)
*   [多线程](../workers.html)
*   [基础库](../client-lib.html)
*   [兼容](../compatibility.html)
*   [运行机制](../operating-mechanism.html)
*   [性能](../performance/)
    *   [优化建议](../performance/tips.html)
    *   [分析工具](../performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 组件间通信与事件

## 组件间通信

组件间的基本通信方式有一下几种。

*   WXML 数据绑定：用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容数据（自基础库版本 [2.0.9](../compatibility.html "基础库 2.0.9 开始支持，低版本需做兼容处理。") 开始，还可以在数据中包含函数）。具体在 [组件模版和样式](wxml-wxss.html) 章节中介绍。
*   事件：用于子组件向父组件传递数据，可以传递任意数据。
*   如果以上两种方式不足以满足需要，父组件还可以通过 `this.selectComponent` 方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法。

## 监听事件

事件系统是组件间通信的主要方式之一。自定义组件可以触发任意的事件，引用组件的页面可以监听这些事件。关于事件的基本概念和用法，参见 [事件](../view/wxml/event.html) 。

监听自定义组件事件的方法与监听基础组件事件的方法完全一致：

**代码示例：**

    <!-- 当自定义组件触发“myevent”事件时，调用“onMyEvent”方法 -->
    <component-tag-name bindmyevent="onMyEvent" />
    <!-- 或者可以写成 -->
    <component-tag-name bind:myevent="onMyEvent" />

    Page({
      onMyEvent: function(e){
        e.detail // 自定义组件触发事件时提供的detail对象
      }
    })

## 触发事件

自定义组件触发事件时，需要使用 `triggerEvent` 方法，指定事件名、detail对象和事件选项：

**代码示例：**

[在开发者工具中预览效果](wechatide://minicode/DFfYSKmI6vZD)

    <!-- 在自定义组件中 -->
    <button bindtap="onTap">点击这个按钮将触发“myevent”事件</button>

    Component({
      properties: {}
      methods: {
        onTap: function(){
          var myEventDetail = {} // detail对象，提供给事件监听函数
          var myEventOption = {} // 触发事件的选项
          this.triggerEvent('myevent', myEventDetail, myEventOption)
        }
      }
    })

触发事件的选项包括：

<table>

<thead>

<tr>

<th>选项名</th>

<th>类型</th>

<th>是否必填</th>

<th>默认值</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>bubbles</td>

<td>Boolean</td>

<td>否</td>

<td>false</td>

<td>事件是否冒泡</td>

</tr>

<tr>

<td>composed</td>

<td>Boolean</td>

<td>否</td>

<td>false</td>

<td>事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部</td>

</tr>

<tr>

<td>capturePhase</td>

<td>Boolean</td>

<td>否</td>

<td>false</td>

<td>事件是否拥有捕获阶段</td>

</tr>

</tbody>

</table>

关于冒泡和捕获阶段的概念，请阅读 [事件](../view/wxml/event.html) 章节中的相关说明。

**代码示例：**

[在开发者工具中预览效果](wechatide://minicode/UGfljKm66zZ1)

    // 页面 page.wxml
    <another-component bindcustomevent="pageEventListener1">
      <my-component bindcustomevent="pageEventListener2"></my-component>
    </another-component>

    // 组件 another-component.wxml
    <view bindcustomevent="anotherEventListener">
      <slot />
    </view>

    // 组件 my-component.wxml
    <view bindcustomevent="myEventListener">
      <slot />
    </view>

    // 组件 my-component.js
    Component({
      methods: {
        onTap: function(){
          this.triggerEvent('customevent', {}) // 只会触发 pageEventListener2
          this.triggerEvent('customevent', {}, { bubbles: true }) // 会依次触发 pageEventListener2 、 pageEventListener1
          this.triggerEvent('customevent', {}, { bubbles: true, composed: true }) // 会依次触发 pageEventListener2 、 anotherEventListener 、 pageEventListener1
        }
      }
    })

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

[](component.html)[](behaviors.html)</div>

</div>