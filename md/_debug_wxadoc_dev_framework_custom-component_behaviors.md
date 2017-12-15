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

*   [简易教程](../../)
*   [框架](../MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
*   [工具](../../devtools/devtools.html)
*   [Q&A](../../qa.html)

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

# behaviors

## 定义和使用 behaviors

`behaviors` 是用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”。

每个 `behavior` 可以包含一组属性、数据、生命周期函数和方法，组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。每个组件可以引用多个 `behavior` 。 `behavior` 也可以引用其他 `behavior` 。

`behavior` 需要使用 `Behavior()` 构造器定义。

**代码示例：**

    // my-behavior.js
    module.exports = Behavior({
      behaviors: [],
      properties: {
        myBehaviorProperty: {
          type: String
        }
      },
      data: {
        myBehaviorData: {}
      },
      attached: function(){},
      methods: {
        myBehaviorMethod: function(){}
      }
    })

组件引用时，在 `behaviors` 定义段中将它们逐个列出即可。

**代码示例：**

    // my-component.js
    var myBehavior = require('my-behavior')
    Component({
      behaviors: [myBehavior],
      properties: {
        myProperty: {
          type: String
        }
      },
      data: {
        myData: {}
      },
      attached: function(){},
      methods: {
        myMethod: function(){}
      }
    })

在上例中， `my-component` 组件定义中加入了 `my-behavior` ，而 `my-behavior` 中包含有 `myBehaviorProperty` 属性、 `myBehaviorData` 数据字段、 `myBehaviorMethod` 方法和一个 `attached` 生命周期函数。这将使得 `my-component` 中最终包含 `myBehaviorProperty` 、 `myProperty` 两个属性， `myBehaviorData` 、 `myData` 两个数据字段，和 `myBehaviorMethod` 、 `myMethod` 两个方法。当组件触发 `attached` 生命周期时，会依次触发 `my-behavior` 中的 `attached` 生命周期函数和 `my-component` 中的 `attached` 生命周期函数。

## 字段的覆盖和组合规则

组件和它引用的 `behavior` 中可以包含同名的字段，对这些字段的处理方法如下：

*   如果有同名的属性或方法，组件本身的属性或方法会覆盖 `behavior` 中的属性或方法，如果引用了多个 `behavior` ，在定义段中靠后 `behavior` 中的属性或方法会覆盖靠前的属性或方法；
*   如果有同名的数据字段，如果数据是对象类型，会进行对象合并，如果是非对象类型则会进行相互覆盖；
*   生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。如果同一个 `behavior` 被一个组件多次引用，它定义的生命周期函数只会被执行一次。

## 内置 behaviors

自定义组件可以通过引用内置的 `behavior` 来获得内置组件的一些行为。

**代码示例：**

    Component({
      behaviors: ['wx://form-field']
    })

在上例中， `wx://form-field` 代表一个内置 `behavior` ，它使得这个自定义组件有类似于表单控件的行为。

内置 `behavior` 往往会为组件添加一些属性。在没有特殊说明时，组件可以覆盖这些属性来改变它的 `type` 或添加 `observer` 。

### wx://form-field

使自定义组件有类似于表单控件的行为。 form 组件可以识别这些自定义组件，并在 submit 事件中返回组件的字段名及其对应字段值。这将为它添加以下两个属性。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>描述</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>name</td>

<td>String</td>

<td>在表单中的字段名</td>

<td>[1.6.7](../compatibility.html "基础库 1.6.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>value</td>

<td>任意</td>

<td>在表单中的字段值</td>

<td>[1.6.7](../compatibility.html "基础库 1.6.7 开始支持，低版本需做兼容处理。")</td>

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](events.html)[](relations.html)</div>

</div>