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

### 2018.06.08 更新日志

1.  `A` 新增 自动预览功能
2.  `A` 新增 远程调试 Network 面板
3.  `A` 新增 模拟器静音功能
4.  `A` 新增 代码断点检测及提示
5.  `A` 新增 支持插件页面
6.  `A` 新增 上传插件时推荐版本号
7.  `A` 新增 Storage 面板清除按钮及数据详情展示
8.  `A` 新增 项目详情 appid 复制按钮
9.  `F` 修复 Win10 1803 版本出现自动编译的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000eccb1c5c0f81579c6986175b000)
10.  `F` 修复 1.02.1805181 引入的组件中使用抽象节点 componentGenerics 时异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a245810cdc8ddeac6f40d451000)
11.  `F` 修复 因在循环中使用断点导致重新编译时提示重启耗时过久的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e04fde747882576c6092a05b400)
12.  `F` 修复 项目中引入新插件时报错，需要切换一下基础库才能使用的问题
13.  `F` 修复 navigationStyle 为 custom 时显示异常的问题
14.  `F` 修复 `wx.setTabbarItem` 后重新编译无法恢复的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0000e67eff0af04773d6352c95bc00)
15.  `F` 修复 远程调试 typescript 源文件内容丢失的问题
16.  `F` 修复 压缩后的 js 文件无法正常格式化的问题
17.  `F` 修复 小游戏视频广告在模拟器缩放的情况下尺寸异常的问题

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