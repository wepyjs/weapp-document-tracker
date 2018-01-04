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
*   [视图层](./)
    *   [WXML](wxml/)
        *   [数据绑定](wxml/data.html)
        *   [列表渲染](wxml/list.html)
        *   [条件渲染](wxml/conditional.html)
        *   [模板](wxml/template.html)
        *   [事件](wxml/event.html)
        *   [引用](wxml/import.html)
    *   [WXS](wxs/)
        *   [模块](wxs/01wxs-module.html)
        *   [变量](wxs/02variate.html)
        *   [注释](wxs/03annotation.html)
        *   [运算符](wxs/04operator.html)
        *   [语句](wxs/05statement.html)
        *   [数据类型](wxs/06datatype.html)
        *   [基础类库](wxs/07basiclibrary.html)
    *   [WXSS](wxss.html)
    *   [组件](component.html)
*   [自定义组件](../custom-component/)
    *   [组件模版和样式](../custom-component/wxml-wxss.html)
    *   [Component构造器](../custom-component/component.html)
    *   [组件事件](../custom-component/events.html)
    *   [behaviors](../custom-component/behaviors.html)
    *   [组件间关系](../custom-component/relations.html)
*   [分包加载](../subpackages.html)
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

# WXSS

WXSS(WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式。

WXSS 用来决定 WXML 的组件应该怎么显示。

为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。

与 CSS 相比，WXSS 扩展的特性有：

*   尺寸单位
*   样式导入

### 尺寸单位

*   rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

<table>

<thead>

<tr>

<th>设备</th>

<th>rpx换算px (屏幕宽度/750)</th>

<th>px换算rpx (750/屏幕宽度)</th>

</tr>

</thead>

<tbody>

<tr>

<td>iPhone5</td>

<td>1rpx = 0.42px</td>

<td>1px = 2.34rpx</td>

</tr>

<tr>

<td>iPhone6</td>

<td>1rpx = 0.5px</td>

<td>1px = 2rpx</td>

</tr>

<tr>

<td>iPhone6 Plus</td>

<td>1rpx = 0.552px</td>

<td>1px = 1.81rpx</td>

</tr>

</tbody>

</table>

**建议：** 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。

**注意：** 在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况。

### 样式导入

使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束。

**示例代码：**

    /** common.wxss **/
    .small-p {
      padding:5px;
    }

    /** app.wxss **/
    @import "common.wxss";
    .middle-p {
      padding:15px;
    }

### 内联样式

框架组件上支持使用 style、class 属性来控制组件的样式。

*   style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。

    <view style="color:{{color}};" />

*   class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上`.`，样式类名之间用空格分隔。

    <view class="normal_view" />

### 选择器

目前支持的选择器有：

<table>

<thead>

<tr>

<th>选择器</th>

<th>样例</th>

<th>样例描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>.class</td>

<td>`.intro`</td>

<td>选择所有拥有 class="intro" 的组件</td>

</tr>

<tr>

<td>#id</td>

<td>`#firstname`</td>

<td>选择拥有 id="firstname" 的组件</td>

</tr>

<tr>

<td>element</td>

<td>`view`</td>

<td>选择所有 view 组件</td>

</tr>

<tr>

<td>element, element</td>

<td>`view, checkbox`</td>

<td>选择所有文档的 view 组件和所有的 checkbox 组件</td>

</tr>

<tr>

<td>::after</td>

<td>`view::after`</td>

<td>在 view 组件后边插入内容</td>

</tr>

<tr>

<td>::before</td>

<td>`view::before`</td>

<td>在 view 组件前边插入内容</td>

</tr>

</tbody>

</table>

### 全局样式与局部样式

定义在 app.wxss 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器。

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

[](wxs/07basiclibrary.html)[](component.html)</div>

</div>