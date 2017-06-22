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

## 下载地址

### 最新版本 2017.06.21 (0.18.182100)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

### 2017.06.21 更新日志

### 基础库更新 (1.3.0)

1.  `A` 新增 `wx.navigateToMiniProgram` 从一个小程序打开另一个小程序[详情](../api/navigateToMiniProgram.html)
2.  `A` 新增 `wx.navigateBackMiniProgram` 返回到上一个小程序[详情](../api/navigateBackMiniProgram.html)

### 工具更新 (0.18.182100)

1.  `A` 新增 基础库 1.3.0 调试支持
2.  `A` 新增 编辑器状态栏显示文件大小
3.  `A` 新增 编辑器增加跳转到左边 / 右边文件的快捷键 `Ctrl(Command) + PageUp` 和 `Ctrl(Command) + PageDown`
4.  `A` 新增 显示图片时状态栏右侧会给出图片大小信息
5.  `U` 优化 编辑器中删除文件不会硬盘删除而是移到回收站
6.  `U` 优化 上传代码的交互，去除扫码确认，并给予默认 `项目备注`
7.  `F` 修复 `tabbar` 图标工具上错误支持了 svg 图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=97aadd788150cc951c46099914169882)
8.  `F` 修复 windows 设置 http_proxy 环境变量可能导致无法登陆问题
9.  `F` 修复 新建 `Page` 时 `app.json` 中路径添加出错的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=63f8b1d685aa8c57f962b4e50c160c65)
10.  `F` 修复 `wx.uploadFile` `wx.downloadFile` 设置 networkTimeout 无效的问题
11.  `F` 修复 提交预览或者上传时，检查 `tabbar` icon 超过 40kb 返回的错误码有误的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=7606af9c39030997693f53be8d30e182)
12.  `F` 修复 开启自动保存后 app.json 修改后立刻关闭再打开后内容被置空的问题的问题
13.  `F` 修复 开发者工具中可以使用 `Image` 但是移动设备中无法使用的问题
14.  `F` 修复 某些情况下上传代码会出现二维码无效提示的问题
15.  `F` 修复 上传成功后没有提示的问题

### 2017.05.26 更新日志

### 工具更新

1.  `A` 新增 基础库 1.2.2 调试支持
2.  `F` 修复 基础库切换导致异常的问题
3.  `F` 修复 页面内分享会调用两次 Page.onShareAppMessage 的问题
4.  `F` 修复 工具外部修改代码文件或文件夹时出现编译异常的问题
5.  `F` 修复 `wx.uploadFile` 网络状态码不为 200 回调 fail 与客户端不一致的问题

### 基础库更新(1.2.2)

1.  `F` 修复 API `wx.getBackgroundAudioPlayerState` 在开发工具音乐开始播放后也回调 fail 的问题
2.  `F` 修复 API `mapContext.getCenterLocation` 在开发者工具上无 success 回调问题

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017621)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](ext.html)[](details.html)</div>

</div>