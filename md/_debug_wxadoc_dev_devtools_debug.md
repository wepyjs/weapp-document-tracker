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
    *   [自定义数据上报](debug.html#自定义数据上报)
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

程序调试主要有三大功能区：模拟器、调试工具和小程序操作区

## 模拟器

模拟器模拟微信小程序在客户端真实的逻辑表现，对于绝大部分的 API 均能够在模拟器上呈现出正确的状态。

![emulat](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/2.png)

## 编译代码

点击工具左下角的编译按钮或者使用快捷键 Ctrl(Command) + B，可以编译当前代码，并自动刷新模拟器。

同时为了帮助开发者调试具体页面或者进入的场景值，如图，开发者可以选择自定义编译模式。

![wxml](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/8.png)

## 调试工具

调试工具分为 7 大功能模块：Wxml、Console、Sources、Network、Appdata、Storage、Sensor

### Wxml panel

Wxml panel 用于帮助开发者开发 Wxml 转化后的界面。在这里可以看到真实的页面结构以及结构对应的 wxss 属性，同时可以通过修改对应 wxss 属性，在模拟器中实时看到修改的情况。通过调试模块左上角的选择器，还可以快速找到页面中组件对应的 wxml 代码。

![wxml](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/wxml.gif)

### Sources panel

Sources panel 用于显示当前项目的脚本文件，同浏览器开发不同，微信小程序框架会对脚本文件进行编译的工作，所以在 Sources panel 中开发者看到的文件是经过处理之后的脚本文件，开发者的代码都会被包裹在 define 函数中，并且对于 Page 代码，在尾部会有 require 的主动调用。

![sources](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/sources.png)

### Network panel

Network Panel 用于观察和显示 request 和 socket 的请求情况

![network](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/network.png)

**注：uploadFile 和 downloadFile 暂时不支持在 Network Panel 中查看**

### Appdata panel

Appdata panel 用于显示当前项目当前时刻 appdata 具体数据，实时地反馈项目数据情况，可以在此处编辑数据，并及时地反馈到界面上。

![appdata](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/appdata.gif)

### Storage panel

Storage panel 用于显示当前项目的使用 wx.setStorage 或者 wx.setStorageSync 后的数据存储情况。

![storage](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/storage.gif)

### Console panel

Console panel 有两大功能：

*   开发者可以在此输入和调试代码

    ![console](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/console1.gif)

*   小程序的错误输出，会显示在此处

    ![4](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/4.png)

### Sensor panel

Sensor panel 有两大功能：

*   开发者可以在这里选择模拟地理位置

    ![location](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/location.gif)

*   开发可以在这里模拟移动设备表现，用于调试重力感应 API

    ![4](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/accelerometerchange.gif)

## 小程序操作区

小程序操作区帮助开发者模拟一些客户端的环境操作。例如当用户从小程序中回到聊天窗口，会触发一个小程序被设置为后台的api。

![5](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/5.png)

当小程序使用到多窗口的时候，可以在顶部操作区进行页面切换，需要注意的是这个操作只是为了方便开发者才存在的，在真实的微信客户端中是不会有的。

![7](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/7.png)

## 自定义数据上报

开发者工具上可以编辑和调试[自定义分析](https://mp.weixin.qq.com/debug/wxadoc/analysis/custom/)的数据上报功能，点击菜单栏中的 “工具 - 自定义分析” 即可弹窗打开自定义分析：

![8](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/event_list.png)

在页面中可以新建、查看或修改事件，在修改事件的页面中编辑完毕后，点击底部的保存并测试按钮将保存当前配置，同时工具将在调试器上提示收到最新配置，并展示配置信息，展示的内容包括事件的 ID 和名称，以及每个动作的触发条件和上报数据：

![9](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/begin_test.png) ![10](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/on_app_config.png)

接着可以在模拟器中操作和触发事件。在模拟器中刷新小程序也将获取该测试配置，除非窗口被关闭。窗口关闭后模拟器不会再收到配置。当事件被触发上报时，工具上会展示上报信息，包括事件 ID、触发页面、触发方式、触发时动作、以及上报的字段值和数据：

![11](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/report_ide.png)

同时可以在窗口中点击 “同步结果” 会同步显示上报的数据： ![12](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/report_mp.png)

关闭窗口后，配置将全部失效，模拟器不再收到配置并不再触发上报（小程序中使用 `wx.reportAnalytics` API 进行的数据上报仍会在工具中输出）。 测试成功后，可到小程序后台发布事件配置，即可正式生效收集所定义的事件数据。

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

[](devtools.html)[](debug.html#模拟器)</div>

</div>