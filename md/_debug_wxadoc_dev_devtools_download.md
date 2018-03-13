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
    *   [项目配置文件](edit.html#项目配置文件)
    *   [Git 状态展示](edit.html#git-状态展示)
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

## 最新版本下载地址 (1.02.1803130)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

### 2018.03.13 更新日志

1.  `A` 新增 小程序插件开发支持 [详情](plugin.html)
2.  `A` 新增 小程序代码片段功能 [详情](minicode.html)
3.  `A` 新增 通过二维码调试功能，可以调试[获取二维码](../api/qrcode.html)所生成的二维码
4.  `A` 新增 `Network` 面板显示 `wx.uploadFile`、`wx.downloadFile` 的内容
5.  `A` 新增 `wx.getImageInfo` 返回图片的方向和类型
6.  `F` 修复 界面调试没有显示 padding、margin 的问题
7.  `F` 修复 `wx.request` 没有校验 `method` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0002e41c52cb08098b46bb3af5b400&token=998348858&lang=zh_CN)
8.  `F` 修复 项目列表页中没有按最近使用时间排序的问题
9.  `F` 修复 小游戏编译条件场景值为 `1044` 时没有 `shareInfo` 的问题
10.  `F` 修复 网页调试 `devicePixelRatio` 不正确的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1462950566&docid=0004e245b9cf984a276639ee356000&inwindow=1)
11.  `F` 修复 tabbar 没有 icon 是文字没有居中对齐的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1304261213&docid=000a0ac7dec6c84d6f46afa7152800&inwindow=1)
12.  `F` 修复 腾讯云恢复开发环境后，选择智能上传时，没有全量上传的问题
13.  `F` 修复 开发者工具可以新建名称为 "." 的文件夹的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=2020845980&docid=00088874174698f68e6696eb151c00&inwindow=1)
14.  `F` 修复 公众号网页调试地址栏下拉选择错误的问题
15.  `U` 优化 开发者工具卡顿的问题

### 上一版本下载地址 (1.02.1802270)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&download_version=1021802270) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&download_version=1021802270) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki&download_version=1021802270)

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