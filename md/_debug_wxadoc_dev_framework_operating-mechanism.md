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

*   [简易教程](../)
*   [框架](MINA.html)
*   [组件](../component/)
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

*   [目录结构](structure.html)
*   [配置](config.html)
*   [逻辑层](app-service/)
    *   [注册程序](app-service/app.html)
    *   [场景值](app-service/scene.html)
    *   [注册页面](app-service/page.html)
    *   [路由](app-service/route.html)
    *   [模块化](app-service/module.html)
    *   [API](app-service/api.html)
*   [视图层](view/)
    *   [WXML](view/wxml/)
        *   [数据绑定](view/wxml/data.html)
        *   [列表渲染](view/wxml/list.html)
        *   [条件渲染](view/wxml/conditional.html)
        *   [模板](view/wxml/template.html)
        *   [事件](view/wxml/event.html)
        *   [引用](view/wxml/import.html)
    *   [WXS](view/wxs/)
        *   [模块](view/wxs/01wxs-module.html)
        *   [变量](view/wxs/02variate.html)
        *   [注释](view/wxs/03annotation.html)
        *   [运算符](view/wxs/04operator.html)
        *   [语句](view/wxs/05statement.html)
        *   [数据类型](view/wxs/06datatype.html)
        *   [基础类库](view/wxs/07basiclibrary.html)
    *   [WXSS](view/wxss.html)
    *   [组件](view/component.html)
*   [基础库](client-lib.html)
*   [兼容](compatibility.html)
*   [运行机制](operating-mechanism.html)
*   [性能](performance/)
    *   [优化建议](performance/tips.html)
    *   [分析工具](performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 运行机制

### 运行机制

*   小程序没有重启的概念
*   当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后（目前是5分钟）会被微信主动销毁
*   置顶的小程序不会被微信主动销毁
*   当收到系统内存告警也会进行小程序的销毁

### 再次打开逻辑

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](compatibility.html)

用户打开小程序的预期有以下两类场景：

A. 打开首页： [场景值](app-service/scene.html)有 1001, 1019, 1022, 1023, 1038, 1056

B. 打开小程序指定的某个页面： 场景值为除 A 以外的其他

当再次打开一个小程序逻辑如下：

<table>

<thead>

<tr>

<th>上一次的场景</th>

<th>当前打开的场景</th>

<th>效果</th>

</tr>

</thead>

<tbody>

<tr>

<td>A</td>

<td>A</td>

<td>保留原来的状态</td>

</tr>

<tr>

<td>B</td>

<td>A</td>

<td>清空原来的页面栈，打开首页（相当于执行 wx.reLaunch 到首页）</td>

</tr>

<tr>

<td>A 或 B</td>

<td>B</td>

<td>清空原来的页面栈，打开指定页面（相当于执行 wx.reLaunch 到指定页）</td>

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

[](compatibility.html)[](performance/)</div>

</div>