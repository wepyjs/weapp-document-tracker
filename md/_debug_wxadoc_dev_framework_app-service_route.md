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
*   [逻辑层](./)
    *   [注册程序](app.html)
    *   [场景值](scene.html)
    *   [注册页面](page.html)
    *   [路由](route.html)
    *   [模块化](module.html)
    *   [API](api.html)
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
*   [自定义组件](../custom-component/)
    *   [组件模版和样式](../custom-component/wxml-wxss.html)
    *   [Component构造器](../custom-component/component.html)
    *   [组件事件](../custom-component/events.html)
    *   [behaviors](../custom-component/behaviors.html)
    *   [组件间关系](../custom-component/relations.html)
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

# 页面路由

在小程序中所有页面的路由全部由框架进行管理。

### 页面栈

框架以栈的形式维护了当前的所有页面。 当发生路由切换的时候，页面栈的表现如下：

<table>

<thead>

<tr>

<th>路由方式</th>

<th>页面栈表现</th>

</tr>

</thead>

<tbody>

<tr>

<td>初始化</td>

<td>新页面入栈</td>

</tr>

<tr>

<td>打开新页面</td>

<td>新页面入栈</td>

</tr>

<tr>

<td>页面重定向</td>

<td>当前页面出栈，新页面入栈</td>

</tr>

<tr>

<td>页面返回</td>

<td>页面不断出栈，直到目标返回页，新页面入栈</td>

</tr>

<tr>

<td>Tab 切换</td>

<td>页面全部出栈，只留下新的 Tab 页面</td>

</tr>

<tr>

<td>重加载</td>

<td>页面全部出栈，只留下新的页面</td>

</tr>

</tbody>

</table>

### getCurrentPages()

`getCurrentPages()` 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**Tip：不要尝试修改页面栈，会导致路由以及页面状态错误。**

### 路由方式

对于路由的触发方式以及页面生命周期函数如下：

<table>

<thead>

<tr>

<th>路由方式</th>

<th>触发时机</th>

<th>路由前页面</th>

<th>路由后页面</th>

</tr>

</thead>

<tbody>

<tr>

<td>初始化</td>

<td>小程序打开的第一个页面</td>

<td></td>

<td>onLoad, onShow</td>

</tr>

<tr>

<td>打开新页面</td>

<td>调用 API [`wx.navigateTo`](../../api/ui-navigate.html#wxnavigatetoobject) 或使用组件 [`<navigator open-type="navigateTo"/>`](../../component/navigator.html)</td>

<td>onHide</td>

<td>onLoad, onShow</td>

</tr>

<tr>

<td>页面重定向</td>

<td>调用 API [`wx.redirectTo`](../../api/ui-navigate.html#wxredirecttoobject) 或使用组件 [`<navigator open-type="redirectTo"/>`](../../component/navigator.html)</td>

<td>onUnload</td>

<td>onLoad, onShow</td>

</tr>

<tr>

<td>页面返回</td>

<td>调用 API [`wx.navigateBack`](../../api/ui-navigate.html#wxnavigateback) 或使用组件[`<navigator open-type="navigateBack">`](../../component/navigator.html)或用户按左上角返回按钮</td>

<td>onUnload</td>

<td>onShow</td>

</tr>

<tr>

<td>Tab 切换</td>

<td>调用 API [`wx.switchTab`](../../api/ui-navigate.html#wxswitchtab) 或使用组件 [`<navigator open-type="switchTab"/>`](../../component/navigator.html) 或用户切换 Tab</td>

<td></td>

<td>各种情况请参考下表</td>

</tr>

<tr>

<td>重启动</td>

<td>调用 API [`wx.reLaunch`](../../api/ui-navigate.html#wxrelaunch) 或使用组件 [`<navigator open-type="reLaunch"/>`](../../component/navigator.html)</td>

<td>onUnload</td>

<td>onLoad, onShow</td>

</tr>

</tbody>

</table>

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

<table>

<thead>

<tr>

<th>当前页面</th>

<th>路由后页面</th>

<th>触发的生命周期（按顺序）</th>

</tr>

</thead>

<tbody>

<tr>

<td>A</td>

<td>A</td>

<td>Nothing happend</td>

</tr>

<tr>

<td>A</td>

<td>B</td>

<td>A.onHide(), B.onLoad(), B.onShow()</td>

</tr>

<tr>

<td>A</td>

<td>B（再次打开）</td>

<td>A.onHide(), B.onShow()</td>

</tr>

<tr>

<td>C</td>

<td>A</td>

<td>C.onUnload(), A.onShow()</td>

</tr>

<tr>

<td>C</td>

<td>B</td>

<td>C.onUnload(), B.onLoad(), B.onShow()</td>

</tr>

<tr>

<td>D</td>

<td>B</td>

<td>D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()</td>

</tr>

<tr>

<td>D（从转发进入）</td>

<td>A</td>

<td>D.onUnload(), A.onLoad(), A.onShow()</td>

</tr>

<tr>

<td>D（从转发进入）</td>

<td>B</td>

<td>D.onUnload(), B.onLoad(), B.onShow()</td>

</tr>

</tbody>

</table>

**Tips**:

*   `navigateTo`, `redirectTo` 只能打开非 tabBar 页面。
*   `switchTab` 只能打开 tabBar 页面。
*   `reLaunch` 可以打开任意页面。
*   页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
*   调用页面路由带的参数可以在目标页面的`onLoad`中获取。

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

[](page.html)[](module.html)</div>

</div>