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

## 下载地址

### 最新版本 2017.07.11 (0.19.191100)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

### 基础库更新 (1.4.2)

1.  `F` 修复 组件 `<cover-view />` 在某些情况下真机上无法覆盖在 `<map />` 组件上的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=3966c31758ee359cd956cfaebd4e8683)
2.  `F` 修复 组件 `<open-data />` 请求数据顺序的问题
3.  `F` 修复 组件 `<canvas />` 动态变化大小后 `canvasToTempFilePath` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=21fb347ea7d9a0715faeb1e274c32a66)

### 基础库更新 (1.4.1)

1.  `U` 更新 API `createSelectorQuery` 可获取元素的属性
2.  `U` 更新 API `reLaunch` 逻辑，此版本开始 `reLaunch` 不可在小程序进入后台后调用
3.  `F` 修复 API `getBLEDeviceCharacteristics` 在开发者工具中请求失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=28012b227d377bcf8482702760c37ff5)
4.  `F` 修复 API `canvasToTempFilePath` 在 iOS 中坐标偏移的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=4ab78e3831f27bba978a9dd501ba9210)
5.  `F` 修复 组件 `<rich-text />` 没有检查参数为空的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f4c572208d66102411b9119a07c1cfd5)
6.  `F` 修复 组件 `<open-data />` 组件无法获取群名称的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ffe8f510fffb57cd39aa520af5779071)
7.  `F` 修复 组件 `<map />` 在开发者工具中无法移动和触发事件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=8961072b9a2ebc7be89b6d62df8c8067)
8.  `F` 修复 组件 `<cover-image />` 在开发者工具中无法预览临时图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f666e86c5871733ee41a0f7b5e3e4898)
9.  `F` 修复 组件 `<text-area />` 在 iOS 中设置 `color` 无效的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=c123349d20be1c79c565e852339c5aab)
10.  `F` 修复 基础框架 重新打开小程序的时 `App.onShow` 未正确获取 `path` 和 `query` 的问题

### 工具更新

1.  `A` 新增 功能 自定义数据上报调试 [详情](debug.html#自定义数据上报)
2.  `F` 修复 `<picker />` `bindchange` 事件选中 `value` 值不对的问题
3.  `F` 修复 编辑器设置自动换行和主题不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1429295584&docid=951b8851981f76e4c8b64fdf90461451)

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

[](ext.html)[](details.html)</div>

</div>