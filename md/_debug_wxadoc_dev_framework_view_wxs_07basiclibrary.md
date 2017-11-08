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

# 基础类库

## console

`console.log` 方法用于在 console 窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。

## Math

### 属性

*   `E`
*   `LN10`
*   `LN2`
*   `LOG2E`
*   `LOG10E`
*   `PI`
*   `SQRT1_2`
*   `SQRT2`

> 以上属性的具体使用请参考 `ES5` 标准。

### 方法

*   `abs`
*   `acos`
*   `asin`
*   `atan`
*   `atan2`
*   `ceil`
*   `cos`
*   `exp`
*   `floor`
*   `log`
*   `max`
*   `min`
*   `pow`
*   `random`
*   `round`
*   `sin`
*   `sqrt`
*   `tan`

> 以上方法的具体使用请参考 `ES5` 标准。

## JSON

### 方法

*   `stringify(object)`: 将 `object` 对象转换为 `JSON` 字符串，并返回该字符串。
*   `parse(string)`: 将 `JSON` 字符串转化成对象，并返回该对象。

**示例代码：**

    console.log(undefined === JSON.stringify());
    console.log(undefined === JSON.stringify(undefined));
    console.log("null"===JSON.stringify(null));

    console.log("111"===JSON.stringify(111));
    console.log('"111"'===JSON.stringify("111"));
    console.log("true"===JSON.stringify(true));
    console.log(undefined===JSON.stringify(function(){}));

    console.log(undefined===JSON.parse(JSON.stringify()));
    console.log(undefined===JSON.parse(JSON.stringify(undefined)));
    console.log(null===JSON.parse(JSON.stringify(null)));

    console.log(111===JSON.parse(JSON.stringify(111)));
    console.log("111"===JSON.parse(JSON.stringify("111")));
    console.log(true===JSON.parse(JSON.stringify(true)));

    console.log(undefined===JSON.parse(JSON.stringify(function(){})));

## Number

### 属性

*   `MAX_VALUE`
*   `MIN_VALUE`
*   `NEGATIVE_INFINITY`
*   `POSITIVE_INFINITY`

> 以上属性的具体使用请参考 `ES5` 标准。

## Global

### 属性

*   `NaN`
*   `Infinity`
*   `undefined`

> 以上属性的具体使用请参考 `ES5` 标准。

### 方法

*   `parseInt`
*   `parseFloat`
*   `isNaN`
*   `isFinite`
*   `decodeURI`
*   `decodeURIComponent`
*   `encodeURI`
*   `encodeURIComponent`

> 以上方法的具体使用请参考 `ES5` 标准。

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

[](06datatype.html)[](../wxss.html)</div>

</div>