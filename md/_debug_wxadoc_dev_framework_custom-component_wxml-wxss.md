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

# 组件模版和样式

类似于页面，自定义组件拥有自己的 `wxml` 模版和 `wxss` 样式。

### 组件模版

组件模版的写法与页面模板相同。组件模版与组件数据结合后生成的节点树，将被插入到组件的引用位置上。

在组件模板中可以提供一个 `<slot>` 节点，用于承载组件引用时提供的子节点。

**代码示例：**

[在开发者工具中预览效果](wechatide://minicode/1udXLnmi6KY2)

    <!-- 组件模板 -->
    <view class="wrapper">
      <view>这里是组件的内部节点</view>
      <slot></slot>
    </view>

    <!-- 引用组件的页面模版 -->
    <view>
      <component-tag-name>
        <!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
        <view>这里是插入到组件slot中的内容</view>
      </component-tag-name>
    </view>

注意，在模版中引用到的自定义组件及其对应的节点名需要在 `json` 文件中显式定义，否则会被当作一个无意义的节点。除此以外，节点名也可以被声明为[抽象节点](../plugin/generics.md)。

### 模版数据绑定

与普通的 WXML 模版类似，可以使用数据绑定，这样就可以向子组件的属性传递动态数据。

**代码示例：**

    <!-- 引用组件的页面模版 -->
    <view>
      <component-tag-name prop-a="{{dataFieldA}}" prop-b="{{dataFieldB}}">
        <!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
        <view>这里是插入到组件slot中的内容</view>
      </component-tag-name>
    </view>

在以上例子中，组件的属性 `propA` 和 `propB` 将收到页面传递的数据。页面可以通过 `setData` 来改变绑定的数据字段。

注意：这样的数据绑定只能传递 JSON 兼容数据。自基础库版本 [2.0.9](../compatibility.html "基础库 2.0.9 开始支持，低版本需做兼容处理。") 开始，还可以在数据中包含函数（但这些函数不能在 WXML 中直接调用，只能传递给子组件）。

### 组件wxml的slot

在组件的wxml中可以包含 `slot` 节点，用于承载组件使用者提供的wxml结构。

默认情况下，一个组件的wxml中只能有一个slot。需要使用多slot时，可以在组件js中声明启用。

    Component({
      options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
      },
      properties: { /* ... */ },
      methods: { /* ... */ }
    })

此时，可以在这个组件的wxml中使用多个slot，以不同的 `name` 来区分。

    <!-- 组件模板 -->
    <view class="wrapper">
      <slot name="before"></slot>
      <view>这里是组件的内部细节</view>
      <slot name="after"></slot>
    </view>

使用时，用 `slot` 属性来将节点插入到不同的slot上。

    <!-- 引用组件的页面模版 -->
    <view>
      <component-tag-name>
        <!-- 这部分内容将被放置在组件 <slot name="before"> 的位置上 -->
        <view slot="before">这里是插入到组件slot name="before"中的内容</view>
        <!-- 这部分内容将被放置在组件 <slot name="after"> 的位置上 -->
        <view slot="after">这里是插入到组件slot name="after"中的内容</view>
      </component-tag-name>
    </view>

### 组件样式

组件对应 `wxss` 文件的样式，只对组件wxml内的节点生效。编写组件样式时，需要注意以下几点：

*   组件和引用组件的页面不能使用id选择器（`#a`）、属性选择器（`[a]`）和标签名选择器，请改用class选择器。
*   组件和引用组件的页面中使用后代选择器（`.a .b`）在一些极端情况下会有非预期的表现，如遇，请避免使用。
*   子元素选择器（`.a>.b`）只能用于 `view` 组件与其子节点之间，用于其他组件可能导致非预期的情况。
*   继承样式，如 `font` 、 `color` ，会从组件外继承到组件内。
*   除继承样式外， `app.wxss` 中的样式、组件所在页面的的样式对自定义组件无效。

    #a { } /* 在组件中不能使用 */
    [a] { } /* 在组件中不能使用 */
    button { } /* 在组件中不能使用 */
    .a > .b { } /* 除非 .a 是 view 组件节点，否则不一定会生效 */

除此以外，组件可以指定它所在节点的默认样式，使用 `:host` 选择器（需要包含基础库 [1.7.2](../compatibility.html "基础库 1.7.2 开始支持，低版本需做兼容处理。") 或更高版本的开发者工具支持）。

**代码示例：**

[在开发者工具中预览效果](wechatide://minicode/jAgvwKm16bZD)

    /* 组件 custom-component.wxss */
    :host {
      color: yellow;
    }

    <!-- 页面的 WXML -->
    <custom-component>这段文本是黄色的</custom-component>

### 外部样式类

有时，组件希望接受外部传入的样式类（类似于 `view` 组件的 `hover-class` 属性）。此时可以在 `Component` 中用 `externalClasses` 定义段定义若干个外部样式类。这个特性从小程序基础库版本 [1.9.90](../compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。") 开始支持。

**注意：在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的，因此最好避免这种情况。**

**代码示例：**

    /* 组件 custom-component.js */
    Component({
      externalClasses: ['my-class']
    })

    <!-- 组件 custom-component.wxml -->
    <custom-component class="my-class">这段文本的颜色由组件外的 class 决定</custom-component>

这样，组件的使用者可以指定这个样式类对应的 class ，就像使用普通属性一样。

**代码示例：**

[在开发者工具中预览效果](wechatide://minicode/rbgNNKmE6bZK)

    <!-- 页面的 WXML -->
    <custom-component my-class="red-text" />

    .red-text {
      color: red;
    }

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

[](./)[](component.html)</div>

</div>