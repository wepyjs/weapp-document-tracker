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
*   [框架](../framework/MINA.html)
*   [组件](../component/)
*   [API](../api/)
*   [工具](devtools.html)
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

*   [概览](devtools.html)
*   [云测试](monkey-test.html)
*   [界面](page.html)
    *   [启动页](page.html#启动页)
    *   [菜单栏](page.html#菜单栏)
    *   [工具栏](page.html#工具栏)
    *   [模拟器](page.html#模拟器)
    *   [设置](settings.html)
        *   [外观设置](settings.html#外观设置)
        *   [编辑设置](settings.html#编辑设置)
        *   [通知设置](settings.html#通知设置)
        *   [代理设置](settings.html#代理设置)
    *   [项目页卡](project.html)
        *   [项目设置](project.html#项目设置)
        *   [域名信息](project.html#域名信息)
        *   [腾讯云状态](project.html#腾讯云状态)
*   [快捷键](shortcut.html)
*   [代码编辑](edit.html)
    *   [文件格式](edit.html#文件格式)
    *   [文件类型](edit.html#文件支持)
    *   [自动补全](edit.html#自动补全)
    *   [项目配置文件](edit.html#项目配置文件)
*   [小程序调试](debug.html)
    *   [模拟器](debug.html#模拟器)
    *   [自定义编译](debug.html#自定义编译)
    *   [前后台切换](debug.html#前后台切换)
    *   [调试工具](debug.html#调试工具)
        *   [Wxml Panel](debug.html#wxml-panel)
        *   [Sources Panel](debug.html#sources-panel)
        *   [AppData Panel](debug.html#appdata-panel)
        *   [Storage Panel](debug.html#storage-panel)
        *   [Network Panel](debug.html#network-panel)
        *   [Console Panel](debug.html#console-panel)
        *   [Sensor Panel](debug.html#sensor-panel)
    *   [自定义数据上报](debug.html#自定义数据上报)
    *   [特殊场景调试](different.html)
*   [第三方平台](ext.html)
*   [实现差异](details.html)
    *   [运行环境差异](details.html#运行环境差异)
    *   [ES6 支持情况](details.html#客户端es6-api-支持情况)
    *   [API 实现差异](notsupport.html)
*   [下载](download.html)
*   [历史更新日志](uplog.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 运行环境差异

微信小程序运行在三端：iOS、Android 和 用于调试的开发者工具。

三端的脚本执行环境以及用于渲染非原生组件的环境是各不相同的：

*   在 iOS 上，小程序的 javascript 代码是运行在 JavaScriptCore 中，是由 WKWebView 来渲染的，环境有 iOS8、iOS9、iOS10
*   在 Android 上，小程序的 javascript 代码是通过 X5 JSCore来解析，是由 [X5](https://x5.tencent.com/tbs/) 基于 Mobile Chrome 53/57 内核来渲染的
*   在 开发工具上， 小程序的 javascript 代码是运行在 nwjs 中，是由 Chrome Webview 来渲染的

尽管三端的环境是十分相似的，但是还是有些许区别：

*   `ES6` 语法支持不一致 语法上开发者可以通过开启 `ES6` 转 `ES5` 的功能来规避。[详情](project.html#es6-转-es5)

*   `wxss` 渲染表现不一致 尽管可以通过开启样式补全来规避大部分的问题 [详情](project.html#样式补全)，还是建议开发者需要在 iOS 和 Android 上分别检查小程序的真实表现。

### 客户端ES6 API 支持情况

微信小程序已经支持了绝大部分的 ES6 API，具体表格如下：

1.  `tip`: TBS 3.0 是指微信小程序 Android 运行环境
2.  `tip`: `Array.values` 不支持
3.  `tip`: `Proxy` 不支持

<table>

<thead>

<tr>

<th>String</th>

<th>iOS8</th>

<th>iOS9</th>

<th>iOS10</th>

<th>TBS3.0</th>

</tr>

</thead>

<tbody>

<tr>

<td>codePointAt</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>normalize</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>includes</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>startsWith</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>endsWith</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>repeat</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>String.fromCodePoint</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>Array</th>

<th>iOS8</th>

<th>iOS9</th>

<th>iOS10</th>

<th>TBS3.0</th>

</tr>

</thead>

<tbody>

<tr>

<td>copyWithin</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>find</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>findIndex</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>fill</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>entries</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>keys</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>values</td>

<td>✘</td>

<td></td>

<td></td>

<td>✘</td>

</tr>

<tr>

<td>includes</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Array.from</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Array.of</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>Number</th>

<th>iOS8</th>

<th>iOS9</th>

<th>iOS10</th>

<th>TBS3.0</th>

</tr>

</thead>

<tbody>

<tr>

<td>isFinite</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>isNaN</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>parseInt</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>parseFloat</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>isInteger</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>EPSILON</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>isSafeInteger</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>Math</th>

<th>iOS8</th>

<th>iOS9</th>

<th>iOS10</th>

<th>TBS3.0</th>

</tr>

</thead>

<tbody>

<tr>

<td>trunc</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>sign</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>cbrt</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>clz32</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>imul</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>fround</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>hypot</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>expm1</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>log1p</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>log10</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>log2</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>sinh</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>cosh</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>tanh</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>asinh</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>acosh</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>atanh</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>Object</th>

<th>iOS8</th>

<th>iOS9</th>

<th>iOS10</th>

<th>TBS3.0</th>

</tr>

</thead>

<tbody>

<tr>

<td>is</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>assign</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>getOwnPropertyDescriptor</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>keys</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>getOwnPropertyNames</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>getOwnPropertySymbols</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>Other</th>

<th>iOS8</th>

<th>iOS9</th>

<th>iOS10</th>

<th>TBS3.0</th>

</tr>

</thead>

<tbody>

<tr>

<td>Symbol</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Set</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Map</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Proxy</td>

<td>✘</td>

<td>✘</td>

<td></td>

<td>✘</td>

</tr>

<tr>

<td>Reflect</td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td>Promise</td>

<td></td>

<td></td>

<td></td>

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

[](ext.html)[](details.html#运行环境差异)</div>

</div>