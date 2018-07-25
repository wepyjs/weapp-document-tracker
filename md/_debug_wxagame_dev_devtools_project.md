<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小游戏开发](javascript:;)
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

微信小游戏开发文档

</div>

*   [教程](../)
*   [API](../document/render/canvas/wx.createCanvas.html)
*   [工具](devtools.html)
*   [腾讯云支持](../qcloud/qcloud.html)

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
        *   [Git 状态展示](edit.html#Git 状态展示)
*   [调试](debug.html)
    *   [模拟器](debug.html#模拟器)
    *   [自定义编译](debug.html#自定义编译)
    *   [前后台切换](debug.html#前后台切换)
    *   [调试工具](debug.html#调试工具)
        *   [Sources Panel](debug.html#sources-panel)
        *   [Storage Panel](debug.html#storage-panel)
        *   [Network Panel](debug.html#network-panel)
        *   [Console Panel](debug.html#console-panel)
*   [命令行调用](cli.html)
*   [HTTP 调用](http.html)
*   [下载](download.html)

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

包括图标、AppID、第三方平台名（只有第三方平台的开发小程序才会显示）、目录信息、上次提交代码的时间以及代码包大小。

## 基础库版本切换

开发者可以在此选择任意基础库版本，用于开发和调试旧版本兼容问题。

![clientlib](https://developers.weixin.qq.com/minigame/dev/image/devtools2/clientlib.png)

### ES6 转 ES5

在 0.10.101000 以及之后版本的开发工具中，会默认使用 `babel` 将开发者 `ES6` 语法代码转换为三端都能很好支持的 `ES5` 的代码，帮助开发者解决环境不同所带来的开发问题。

需要注意的是：

*   为了提高代码质量，在开启 `ES6` 转换功能的情况下，默认启用 `javasctipt` 严格模式，请参考 ["use strict"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

### 压缩代码

开启此选项，开发工具在上传代码时候将会帮助开发者压缩 `javascript` 代码，减小代码包体积。

**Tips**

*   目前如果单个文件超过 500kb ，会引起工具内存的大量占用，所以超过 500kb 的文件将不会被压缩 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=000e0696f084e0b0f21613f6a51804)

### 不校验请求域名及 TLS 版本

正式发布的小程序的网络请求是需要校验合法域名以及域名的 TLS 版本，可以在 mp 管理后台进行配置。 在开发过程中可以开启此选项，开发工具将不会校验安全域名，以及 TLS 版本，帮助在开发过程中更方便的完成调试工作。

![edit](https://developers.weixin.qq.com/minigame/dev/image/devtools2/righttools.png)

## 域名信息

将显示小程序的安全域名信息，合法域名可在 mp 管理后台进行设置。

![host](https://developers.weixin.qq.com/minigame/dev/image/devtools2/host.png)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](settings.html#代理设置)[](shortcut.html)</div>

</div>