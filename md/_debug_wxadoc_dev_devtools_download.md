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

*   [简易教程](../)
*   [框架](../framework/MINA.html)
*   [组件](../component/)
*   [API](../api/)
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
        *   [代理设置](settings.html#代理设置)
        *   [通知设置](settings.html#通知设置)
    *   [项目页卡](project.html)
        *   [项目设置](project.html#项目设置)
        *   [域名信息](project.html#域名信息)
        *   [腾讯云状态](project.html#腾讯云状态)
*   [快捷键](shortcut.html)
*   [代码编辑](edit.html)
    *   [文件格式](edit.html#文件格式)
    *   [文件类型](edit.html#文件支持)
    *   [自动补全](edit.html#自动补全)
    *   [Git 状态展示](edit.html#git-状态展示)
    *   [项目配置文件](projectconfig.html)
*   [小程序调试](debug.html)
    *   [模拟器](debug.html#模拟器)
    *   [自定义编译](debug.html#自定义编译)
    *   [自定义预处理](debug.html#自定义预处理)
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
    *   [真机调试](remote-debug.html)
*   [命令行调用](cli.html)
*   [HTTP 调用](http.html)
*   [小程序开发助手](mydev.html)
*   [代码片段](minicode.html)
*   [第三方平台](ext.html)
*   [小程序插件开发](plugin.html)
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

## 最新版本下载地址 (1.02.1804120)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

### 2018.04.12 更新日志

1.  `F` 修复 1.02.1804080 引入的编译条件为分包内页面时无法加载的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1149299852&docid=000202572c8060847796a59cc5b000)
2.  `F` 修复 1.02.1804080 引入的页面白屏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1093803632&docid=0006ecb698cbd8a85b9649d895b400&inwindow=1)
3.  `F` 修复 未使用插件时，出现 `[non-writable]` 的提示的问题
4.  `F` 修复 `navigationStyle` 为 `'custom'` 时，获取的 `windowHeight` 与真机不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=713615538&docid=000ca2632108607676965713b56000&inwindow=1)
5.  `F` 修复 `wx.showModal` 没有覆盖 tabbar 的问题

### 2018.04.08 更新日志

1.  `A` 新增 编辑器文件标签打开策略设置
2.  `A` 新增 iPhone X 刘海效果
3.  `A` 新增 `App.onPageNotFound` 的调试支持 [详情](../framework/app-service/app.html)
4.  `A` 新增 远程调试带插件的小程序支持
5.  `A` 新增 `project.config.json` 的 `ignore` 字段 [详情](projectconfig.html#packoptions)
6.  `A` 新增 项目设置中展示插件信息、分包大小
7.  `A` 新增 自定义预处理命令 [详情](debug.html#自定义预处理)
8.  `A` 新增 支持分包中使用插件
9.  `F` 修复 同步 API 导致内存泄漏的问题
10.  `F` 修复 `<web-view />` 链接带 `#wechat_redirect` 无法加载的问题
11.  `F` 修复 在 tabbar 页面调用 `wx.redirectTo` 后再调用 `wx.switchTab` 到同一 tabbar，页面出错的问题
12.  `F` 修复 网络请求 API 没有带上对应模拟器设备的 `userAgent` 的问题
13.  `F` 修复 项目管理删除无效项目不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0008ec35474c704a5e76d3ab156400)
14.  `F` 修复 只有设置页面时，无法关闭开发者工具的问题
15.  `F` 修复 当项目目录在 `node_modules` 下时，无法感知文件变更的问题
16.  `F` 修复 1.02.1803210 版本导致的 `WXML` 面板，某些情况下不显示子节点的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=892177389&docid=000a40b7b5c5d0b01286dc4dd56c00&inwindow=1&comment_lvl=17)
17.  `F` 修复 远程调试 CanvasContext.measureText 报错的问题
18.  `F` 修复 `WXML` 面板无法审查自定义组件内节点的问题
19.  `F` 修复 `WXSS` 文件解析异常导致无法查看节点样式的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000264dc12cd005b637621e775b400&comment_lvl=4)
20.  `F` 修复 某些情况下新增编译条件无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=653286445&docid=00082ef4904f20d21686ea3ea5bc00)
21.  `F` 修复 切换模拟器网络为 offline 后，Socket接口还能正常发送的问题。
22.  `F` 修复 BackgroundAudioManager 不回调 onCanplay 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000086896d45d85e6776edfbe54c00)

### 上一版本下载地址 (1.02.1803210)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&download_version=1021803210) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1021803210) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki&download_version=1021803210)

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