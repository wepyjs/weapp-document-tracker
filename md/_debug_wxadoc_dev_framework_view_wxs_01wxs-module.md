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
    *   [WXML](../wxml/)
        *   [数据绑定](../wxml/data.html)
        *   [列表渲染](../wxml/list.html)
        *   [条件渲染](../wxml/conditional.html)
        *   [模板](../wxml/template.html)
        *   [事件](../wxml/event.html)
        *   [引用](../wxml/import.html)
    *   [WXS](./)
        *   [模块](01wxs-module.html)
        *   [变量](02variate.html)
        *   [注释](03annotation.html)
        *   [运算符](04operator.html)
        *   [语句](05statement.html)
        *   [数据类型](06datatype.html)
        *   [基础类库](07basiclibrary.html)
    *   [WXSS](../wxss.html)
    *   [组件](../component.html)
*   [自定义组件](../../custom-component/)
    *   [组件模版和样式](../../custom-component/wxml-wxss.html)
    *   [Component构造器](../../custom-component/component.html)
    *   [组件事件](../../custom-component/events.html)
    *   [behaviors](../../custom-component/behaviors.html)
    *   [组件间关系](../../custom-component/relations.html)
    *   [抽象节点](../../custom-component/generics.html)
*   [插件](../../plugin/)
    *   [开发插件](../../plugin/development.html)
    *   [使用插件](../../plugin/using.html)
    *   [插件的限制](../../plugin/api-limit.html)
*   [分包加载](../../subpackages.html)
*   [多线程](../../workers.html)
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

# WXS 模块

WXS 代码可以编写在 wxml 文件中的 `<wxs>` 标签内，或以 `.wxs` 为后缀名的文件内。

## 模块

每一个 `.wxs` 文件和 `<wxs>` 标签都是一个单独的模块。

每个模块都有自己独立的作用域。即在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见。

一个模块要想对外暴露其内部的私有变量与函数，只能通过 `module.exports` 实现。

## .wxs 文件

在**微信开发者工具**里面，右键可以直接创建 `.wxs` 文件，在其中直接编写 WXS 脚本。

**示例代码：**

    // /pages/comm.wxs

    var foo = "'hello world' from comm.wxs";
    var bar = function(d) {
      return d;
    }
    module.exports = {
      foo: foo,
      bar: bar
    };

上述例子在 `/pages/comm.wxs` 的文件里面编写了 WXS 代码。该 `.wxs` 文件可以被其他的 `.wxs` 文件 或 WXML 中的 `<wxs>` 标签引用。

### module 对象

每个 `wxs` 模块均有一个内置的 `module` 对象。

#### 属性

*   `exports`: 通过该属性，可以对外共享本模块的私有变量与函数。

**示例代码：**

    // /pages/tools.wxs

    var foo = "'hello world' from tools.wxs";
    var bar = function (d) {
      return d;
    }
    module.exports = {
      FOO: foo,
      bar: bar,
    };
    module.exports.msg = "some msg";

    <!-- page/index/index.wxml -->

    <wxs src="./../tools.wxs" module="tools" />
    <view> {{tools.msg}} </view>
    <view> {{tools.bar(tools.FOO)}} </view>

页面输出：

    some msg
    'hello world' from tools.wxs

### require函数

在`.wxs`模块中引用其他 `wxs` 文件模块，可以使用 `require` 函数。

引用的时候，要注意如下几点：

*   只能引用 `.wxs` 文件模块，且必须使用相对路径。
*   `wxs` 模块均为单例，`wxs` 模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个 `wxs` 模块对象。
*   如果一个 `wxs` 模块在定义之后，一直没有被引用，则该模块不会被解析与运行。

**示例代码：**

    // /pages/tools.wxs

    var foo = "'hello world' from tools.wxs";
    var bar = function (d) {
      return d;
    }
    module.exports = {
      FOO: foo,
      bar: bar,
    };
    module.exports.msg = "some msg";

    // /pages/logic.wxs

    var tools = require("./tools.wxs");

    console.log(tools.FOO);
    console.log(tools.bar("logic.wxs"));
    console.log(tools.msg);

    <!-- /page/index/index.wxml -->

    <wxs src="./../logic.wxs" module="logic" />

控制台输出：

    'hello world' from tools.wxs
    logic.wxs
    some msg

## `<wxs>` 标签

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

<td>module</td>

<td>String</td>

<td></td>

<td>当前 `<wxs>` 标签的模块名。必填字段。</td>

</tr>

<tr>

<td>src</td>

<td>String</td>

<td></td>

<td>引用 .wxs 文件的相对路径。仅当本标签为**单闭合标签**或**标签的内容为空**时有效。</td>

</tr>

</tbody>

</table>

### module 属性

module 属性是当前 `<wxs>` 标签的模块名。在单个 wxml 文件内，建议其值唯一。有重复模块名则按照先后顺序覆盖（后者覆盖前者）。不同文件之间的 wxs 模块名不会相互覆盖。

module 属性值的命名必须符合下面两个规则：

*   首字符必须是：字母（a-zA-Z），下划线（_）
*   剩余字符可以是：字母（a-zA-Z），下划线（_）， 数字（0-9）

**示例代码：**

    <!--wxml-->

    <wxs module="foo">
    var some_msg = "hello world";
    module.exports = {
        msg : some_msg,
    }
    </wxs>
    <view> {{foo.msg}} </view>

页面输出：

    hello world

上面例子声明了一个名字为 `foo` 的模块，将 `some_msg` 变量暴露出来，供当前页面使用。

### src 属性

src 属性可以用来引用其他的 `wxs` 文件模块。

引用的时候，要注意如下几点：

*   只能引用 `.wxs` 文件模块，且必须使用相对路径。
*   `wxs` 模块均为单例，`wxs` 模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个 `wxs` 模块对象。
*   如果一个 `wxs` 模块在定义之后，一直没有被引用，则该模块不会被解析与运行。

**示例代码：**

    // /pages/index/index.js

    Page({
      data: {
        msg: "'hello wrold' from js",
      }
    })

    <!-- /pages/index/index.wxml -->

    <wxs src="./../comm.wxs" module="some_comms"></wxs>
    <!-- 也可以直接使用单标签闭合的写法
    <wxs src="./../comm.wxs" module="some_comms" />
    -->

    <!-- 调用 some_comms 模块里面的 bar 函数，且参数为 some_comms 模块里面的 foo -->
    <view> {{some_comms.bar(some_comms.foo)}} </view>
    <!-- 调用 some_comms 模块里面的 bar 函数，且参数为 page/index/index.js 里面的 msg -->
    <view> {{some_comms.bar(msg)}} </view>

页面输出：

    'hello world' from comm.wxs
    'hello wrold' from js

上述例子在文件 `/page/index/index.wxml` 中通过 `<wxs>` 标签引用了 `/page/comm.wxs` 模块。

### 注意

*   `<wxs>` 模块只能在定义模块的 WXML 文件中被访问到。使用 `<include>` 或 `<import>` 时，`<wxs>` 模块不会被引入到对应的 WXML 文件中。
*   `<template>` 标签中，只能使用定义该 `<template>` 的 WXML 文件中定义的 `<wxs>` 模块。

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

[](./)[](02variate.html)</div>

</div>