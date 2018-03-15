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

*   [基础](../quickstart/basic/getting-started.html)
    *   [起步](../quickstart/basic/getting-started.html)
        *   [申请帐号](../quickstart/basic/getting-started.html#申请帐号)
        *   [安装开发工具](../quickstart/basic/getting-started.html#安装开发工具)
        *   [我的第一个小程序](../quickstart/basic/getting-started.html#你的第一个小程序)
        *   [编译预览](../quickstart/basic/getting-started.html#编译预览)
    *   [代码构成](../quickstart/basic/file.html)
        *   [JSON 配置](../quickstart/basic/file.html#JSON-配置)
        *   [WXML 模板](../quickstart/basic/file.html#WXML-模板)
        *   [WXSS 样式](../quickstart/basic/file.html#WXSS-样式)
        *   [JS 逻辑交互](../quickstart/basic/file.html#JS-交互逻辑)
    *   [小程序能力](../quickstart/basic/framework.html)
        *   [小程序的启动](../quickstart/basic/framework.html#小程序的启动)
        *   [程序与页面](../quickstart/basic/framework.html#程序与页面)
        *   [组件](../quickstart/basic/framework.html#组件)
        *   [API](../quickstart/basic/framework.html#API)
    *   [发布前的准备](../quickstart/basic/role.html)
        *   [用户身份](../quickstart/basic/role.html#用户身份)
        *   [预览](../quickstart/basic/role.html#预览)
        *   [上传代码](../quickstart/basic/role.html#上传代码)
        *   [小程序的版本](../quickstart/basic/role.html#小程序的版本)
    *   [上线](../quickstart/basic/release.html)
        *   [提交审核](../quickstart/basic/release.html#提交审核)
        *   [发布](../quickstart/basic/release.html#发布)
        *   [运营数据](../quickstart/basic/release.html#运营数据)
*   [体验小程序](../demo.html)
*   [更新日志](new.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

### 2018.03.15 更新日志

1.  `F` 修复 上报更新导致 `wx.uploadFile` 返回值异常的问题
2.  `F` 修复 申请测试报告时报错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=456208041&docid=0004e4ef488c883650762672756c00)
3.  `F` 修复 频繁调用 `wx.downloadFile` 后 `wx.saveFile` 于同一网络图片时，可能出错的问题
4.  `F` 修复 `wx.setTabBarItem` 不支持图标地址绝对路径的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1212819401&docid=0008ee6f0f0ad8b606765929f59c00&inwindow=1&comment_lvl=2)
5.  `F` 修复 onShareAppMessage 不能展示临时图片的问题
6.  `F` 修复 插件中自定义组件样式丢失的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c4c032807b8c750764d66756800&comment_lvl=13)
7.  `F` 修复 审查节点时，WXML 面板没有高亮对应节点的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=456208041&docid=000eeac2444e48c65b768d5dc5a400)
8.  `F` 修复 工具覆盖安装后出现无法监听文件变更的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1566714570&docid=000a26cda68a88a55d767b2ce56c00&inwindow=1)

### 2018.03.13 更新日志

1.  `A` 新增 小程序插件开发支持 [详情](plugin.html)
2.  `A` 新增 小程序代码片段功能 [详情](minicode.html)
3.  `A` 新增 通过二维码调试功能，可以调试[获取二维码](../api/qrcode.html)所生成的二维码
4.  `A` 新增 `Network` 面板显示 `wx.uploadFile`、`wx.downloadFile` 的内容
5.  `A` 新增 `wx.getImageInfo` 返回图片的方向和类型
6.  `A` 新增 小程序强制更新 `wx.getUpdateManager` 功能调试
7.  `F` 修复 界面调试没有显示 padding、margin 的问题
8.  `F` 修复 `wx.request` 没有校验 `method` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0002e41c52cb08098b46bb3af5b400&token=998348858&lang=zh_CN)
9.  `F` 修复 项目列表页中没有按最近使用时间排序的问题
10.  `F` 修复 小游戏编译条件场景值为 `1044` 时没有 `shareInfo` 的问题
11.  `F` 修复 网页调试 `devicePixelRatio` 不正确的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1462950566&docid=0004e245b9cf984a276639ee356000&inwindow=1)
12.  `F` 修复 tabbar 没有 icon 时文字没有居中对齐的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1304261213&docid=000a0ac7dec6c84d6f46afa7152800&inwindow=1)
13.  `F` 修复 腾讯云恢复开发环境后，选择智能上传时，没有全量上传的问题
14.  `F` 修复 开发者工具可以新建名称为 "." 的文件夹的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=2020845980&docid=00088874174698f68e6696eb151c00&inwindow=1)
15.  `U` 优化 开发者工具卡顿的问题

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

[](../demo.html)[](../framework/MINA.html)</div>

</div>