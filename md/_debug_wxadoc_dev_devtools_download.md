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

## 最新版本下载地址 (1.01.1711160)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

### 2017.11.16 开发工具更新

1.  `F` 修复 导航条背景色错误时白屏问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=b36f663acb10612e4c7e352e87434117&token=557005191&lang=zh_CN)
2.  `F` 修复 小程序页面跳转时 WXML 面板可能空白的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=557005191&docid=fb21b3675263f8f059875f86e74fc06c)
3.  `F` 修复 修复计算上传代码包错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=557005191&docid=c038ed11b63330fe2430112de0b1bb33)
4.  `A` 新增 新建项目时可以选择创建腾讯云的 quick start 项目。
5.  `A` 新增 编辑器右键创建 Component 功能。
6.  `F` 修复 模拟器选择 offline 后，没有明确提示问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=8a89915204f492015b717674097afbf8)
7.  `F` 修复 `wx.downloadFile` 的 downloadTask.onProgressUpdate 缺少返回参数totalBytesWritten、totalBytesExpectedToWrite 的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=6fcbcc00aefa130248ef96f34604a820)
8.  `F` 修复 工具异常退出后仍然有进程未关闭并占用大量CPU资源的问题。
9.  `F` 修复 切换设备时 rpx 计算有误的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=e6210386d71f5ce63aead317e0af7f33)
10.  `F` 修复 websocket 自动断开时，未重置连接状态的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=8c82b9661034b9b778a2512012a9b853)
11.  `F` 修复 `<web-view />` 页面分享时 Page.onShareAppMessage 回调参数没有 webViewUrl 的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=e65163ec5fcd1ff96f775d7f89feec66)
12.  `F` 修复 `<web-view />` 中的网页有 iframe 导致网页主页面无法调用 JSSDK 的方法的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=5b269e9f217e2002a2d6cba5459cad26&token=890951119&lang=zh_CN)
13.  `F` 修复 `<web-view />` 没有校验 iframe 中链接合法性的问题
14.  `F` 修复 wxml style 列表无法滚动到底部的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=2140474170&docid=9087bfd028605c8d34395194735b08ad)
15.  `F` 修复 wxml 大量节点更新时导致调试器整体卡顿的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=72c9399c023d5ea753caf6eb4e268990&token=355961913&lang=zh_CN)
16.  `F` 修复 wxml 显示嵌套 `<text />` 出错的问题。
17.  `F` 修复 `wx.authorize` 用户拒绝依然回调 ok 的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=c5d8e9df01a0ee536b31bfc1f737a5d6)
18.  `F` 修复 自定义编译条件预览时自定义参数有误的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ef014ed43af2ad089f5aa17561a71153)
19.  `F` 修复 路由 API 在目标页面获取的参数与客户端不一致的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=132cf95b7dd95a14b8491a226fec5c6c)
20.  `U` 优化 项目列表的视觉展示。
21.  `U` 优化 编辑器显示目录树的功能图标位置固定。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=5170e2e6311c30b53e3109ac01ee1acc)
22.  `U` 优化 预览/上传前先计算项目代码包大小再进行编译打包处理，避免项目过大导致内存溢出。

### 上一版本下载地址 (1.01.1711020)

[windows 64](https://dldir1.qq.com/WechatWebDev/1.0.0/20171102/wechat_devtools_1.01.1711020_x64.exe) 、 [windows 32](https://dldir1.qq.com/WechatWebDev/1.0.0/20171102/wechat_devtools_1.01.1711020_ia32.exe) 、 [mac](https://dldir1.qq.com/WechatWebDev/1.0.0/20171102/wechat_devtools_1.01.1711020.dmg)

### 历史版本下载 2017.08.30 (0.22.203100)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_darwin&from=mpwiki)

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