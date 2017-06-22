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

小程序开发者工具是对微信客户端的模拟，受限于桌面设备同移动设备不同，以及微信的一些特有数据，同时考虑到开发的便捷性，那么有部分 API 在工具和微信中是有所不同的。

## 扫码接口

同手机端直接调用摄像头来扫码不同，在 PC 或者 Mac 上调用摄像头来扫码完成调试是一个低效的行为，所以在开发工具上调用二维码扫码 API 后，开发者可以选择一个本地的图片来进行后续的逻辑调试，而不是真正的启用摄像头来扫码，流程有所不同，但是接口的输入和输出是一致的。

## 微信支付

最新版本的开发者工具已经支持微信支付的调试，但是为了兼顾到安全，同手机上直接调用微信支付有所不同：

*   新绑定的开发者需要 24 小时后才有权限进行微信支付的调试
*   开发者在工具上调用微信支付的 API 后，开发工具会出现一个二维码，开发者必须使用当前开发所使用的微信号扫码后在手机上完成支付的流程
*   工具会同步移动端微信支付的回包到工具中，开发者自行进行后续的操作

使用的交互有所不同，但是接口的输入输出工具同客户端是保持一致的。

## 普通的转发

开发者工具上调用转发是一个模拟的行为，并不会真实的转发给用户，开发可以通过这个模拟行为判断是否正确的调用了转发 API。

## 带 shareTicket 的转发

带 `shareTicket` 的转发可以获取到更多的转发信息，例如群聊的名称以及群的标识 `openGId`。在小程序开发者工具上，开发者可以通过以下方式来调试带 `shareTicket` 的转发。

调用 `wx.showShareMenu` 的参数 `withShareTicket` 为 `true` 时，点击模拟器右上角菜单后出现的转发按钮，会出现一个测试群列表，如图：

![withShareTicket](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/different/4.png)

开发者点击选取任何一个群，可以通过接口的回包获取到 `shareTicket` ，通过调用 `wx.getShareInfo` 可以获取到相关转发的信息

当开发者需要调试从某一个群点开，并且带有 `shareTicket` 的场景时，可以使用自定义编译中的 `1044:群聊会话中的小程序消息卡片（带 shareTicket）` 同时可以选择任一模拟测试群，如图

![withShareTicket](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/different/5.png)

## 进入场景值

在微信客户端中，用户可能在各个场景下打开小程序 [详情](../framework/app-service/scene.html#场景值) 然而在开发者工具中是没有真实的环境去模拟这些场景的。开发者可以通过条件编译的方式来达到调试不同场景的目的。

![sence](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/different/1.png)

## 启动使用自定义参数

在日常使用中，用户可以打开一个小程序，并且依据传入的 `path` 跳转到对应的小程序页面而非启动页面，或者可以通过 `参数` 使得小程序区别默认开打状态，开发者工具中，开发者同样可以通过条件编译的方式来达到调试不同 `path` 和 `参数` 的目的。

例如下图是选择进入页面是 `pages/name/name` `参数` 是 `name=linchao`

![args](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/different/2.png)

## 预览使用自定义参数

同 **启动使用自定义参数** 相同，提交预览时，开发者可以通过自定义预览的方式来达到在移动设备上调试不同 `path` 和 `参数` 的目的。

例如下图是选择进入页面是 `pages/name/name` `参数` 是 `name=linchao`

![uplodfortest](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/different/3.png)

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

[](debug.html#小程序操作区)[](edit.html)</div>

</div>