<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017621)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017621)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=2017621)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=2017621)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017621)

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
*   [程序调试](debug.html)
    *   [模拟器](debug.html#模拟器)
    *   [调试工具](debug.html#调试工具)
        *   [Wxml Panel](debug.html#wxml-panel)
        *   [Sources Panel](debug.html#sources-panel)
        *   [Network Panel](debug.html#network-panel)
        *   [Appdata Panel](debug.html#appdata-panel)
        *   [Storage Panel](debug.html#storage-panel)
        *   [Console Panel](debug.html#console-panel)
        *   [Sensor Panel](debug.html#sensor-panel)
    *   [小程序操作区](debug.html#小程序操作区)
*   [特殊 API 的调试](different.html)
*   [代码编辑](edit.html)
*   [设置](settings.html)
*   [项目预览](project.html)
*   [第三方平台](ext.html)
*   [下载](download.html)
*   [细节点](details.html)
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

项目页卡主要有三大功能

## 显示当前项目细节

包括图标、AppID、目录信息，以及上次提交代码的时间以及代码包大小。

## 提交预览和提交上传

*   点击预览功能，工具会上传源代码到微信服务器，成功后将会显示一个二维码，当前 AppID 绑定的任意开发者用新版微信扫描二维码即可在手机上看到相应项目的真实表现。
*   点击上传，工具会上传源代码到微信服务器，开发者可以在 mp 管理后台看到本次提交的情况。 需要注意的是，**代码上传** 功能仅管理员微信号可操作

## 项目配置

### ES6 转 ES5

在 0.10.101000 以及之后版本的开发工具中，会默认使用 `babel` 将开发者代码 `ES6` 语法转换为三端都能很好支持的 `ES5` 的代码，帮助开发者解决环境不同所带来的开发问题。开发者可以在项目设置中关闭这个功能。[详情](details.html#javascript)

需要注意的是：

*   为了提高代码质量，在开启 `ES6` 转换功能的情况下，默认启用 `javasctipt` 严格模式，请参考 ["use strict"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) 。

### 监听文件变化，自动刷新开发者工具

开启此选项，和当前项目相关的文件发生改变时候，会自动帮助开发者刷新调试模拟器，从而提高开发效率。

### 压缩代码

开启此选项，开发工具在上传代码时候将会帮助开发者压缩 `javascript` 代码，减小代码包体积。

### 样式补全

开启此选项，开发工具会自动检测并补全缺失样式，保证在 iOS8 上的正常显示。

### 不校验请求域名及 TLS 版本

开启此选项，开发工具将不会校验安全域名，以及 TLS 版本，帮助在开发过程中更好的完成调试工作。

![edit](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit/project1.png?t=2017621)

### 基础库版本切换

开发者可以在此选择任意基础库版本，用于开发和调试旧版本兼容。

![project](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/project/1.png?t=2017621)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017621)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](settings.html)[](ext.html)</div>

</div>