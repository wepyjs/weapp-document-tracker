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
*   [命令行调用](cli.html)
*   [HTTP 调用](http.html)
*   [小程序开发助手](mydev.html)
*   [第三方平台](ext.html)
*   [云测试](monkey-test.html)
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

## 最新版本下载地址 (1.02.1801081)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

### 2018.01.16 基础库更新（1.9.0）

1.  `A` 新增 API tabBar 相关接口 [详情](../api/ui-tabbar.html)
2.  `A` 新增 API `wx.canvasGetImageData` 可返回 `<canvas />` 的像素数据 [详情](../api/canvas/get-image-data.html)
3.  `A` 新增 API `wx.canvasPutImageData` 可将像素数据绘制到 `<canvas />` [详情](../api/canvas/put-image-data.html)
4.  `U` 更新 组件 `<swiper />` 增加 `current-item-id`、`previous-margin`、`next-margin`、`display-multiple-items`、`skip-hidden-item-layout`、`bindanimationfinish` 属性 [详情](../component/swiper.html)
5.  `U` 更新 组件 `<input />` 支持 selection 选区 [详情](../component/input.html)
6.  `U` 更新 组件 `<textarea />` 支持 selection 选区 [详情](../component/textarea.html)
7.  `U` 更新 组件 `<live-player />` 增加 `bindnetstatus` 事件 [详情](../component/live-player.html)
8.  `U` 更新 组件 `<live-pusher />` 增加 `bindnetstatus` 事件 [详情](../component/live-pusher.html)
9.  `U` 更新 组件 `<video />` 可对控制栏进行更细粒度控制 [详情](../component/video.html)
10.  `U` 更新 组件 `<slider />` 支持 `block-size` 设置滑块尺寸和 `block-color` 设置滑块颜色 [详情](../component/slider.html)
11.  `U` 更新 API 背景音频接口 `backgroundAudioManager` 支持直播流音频
12.  `U` 更新 API `canvasContext.drawImage` 支持从源图像裁剪后再画到 `<canvas />` [详情](../api/canvas/draw-image.html)
13.  `U` 更新 API `wx.showToast` 文本统一限制为 7 个汉字长度，并增加无 icon 类型 [详情](../api/api-react.html)
14.  `F` 修复 API `wx.chooseVideo` 接口的 `compressed` 参数不生效的问题
15.  `F` 修复 API WebSocket 接口在 Android 下服务连接失败的时候，没有立刻触发 `error` 和 `close` 事件，而是等到超时
16.  `F` 修复 API Android 背景音频接口 `backgroundAudioManager` 不能播放本地文件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=c7b223db52aff88b3c3a15f2fb5ddfc6)
17.  `F` 修复 API `wx.setEnableDebug` 接口在 Android 下会导致小程序一直在重启的问题
18.  `F` 修复 API `wx.showToast` 在 iOS 下连续调用两次再调用 `wx.hideToast` 时遮罩层没去掉的问题
19.  `F` 修复 API `wx.startPullDownRefresh` 在 iOS 下没有触发 `onPullDownRefresh` 事件的问题
20.  `F` 修复 API `wx.previewImage` 在 Android 下长按GIF发送后退出小程序的问题
21.  `F` 修复 API `wx.pageScrollTo` 导致 fixed 元素闪动的问题，并增加 `duration` 参数 [详情](../api/scroll.html)
22.  `F` 修复 自定义组件通过动态设置的回调方法时会执行两遍的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=915568549&docid=037127b97509bc7eff550b9e7b94765d)

### 上一版本下载地址 (1.01.1712150)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&download_version=1011712150) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1011712150) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki&download_version=1011712150)

## 历史更新日志

[历史更新日志](uplog.html)

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

[](notsupport.html)[](uplog.html)</div>

</div>