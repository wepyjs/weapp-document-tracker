<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18110517)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18110517)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18110517)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18110517)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18110517)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18110517)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18110517)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18110517)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18110517)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/index.html?t=18110517)

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

*   [简易教程](.)
*   [框架](./framework/MINA.html)
*   [组件](./component/)
*   [API](./api/)
*   [工具](./devtools/devtools.html)
*   [小程序·云开发](./wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18110517)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/index.html?t=18110517)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [基础](.)
    *   [起步](.)
        *   [申请帐号](.#申请帐号)
        *   [安装开发工具](.#安装开发工具)
        *   [你的第一个小程序](.#你的第一个小程序)
        *   [编译预览](.#编译预览)
    *   [代码构成](./quickstart/basic/file.html)
        *   [JSON 配置](./quickstart/basic/file.html#json-配置)
        *   [WXML 模板](./quickstart/basic/file.html#wxml-模板)
        *   [WXSS 样式](./quickstart/basic/file.html#wxss-样式)
        *   [JS 逻辑交互](./quickstart/basic/file.html#js-交互逻辑)
    *   [小程序能力](./quickstart/basic/framework.html)
        *   [小程序的启动](./quickstart/basic/framework.html#小程序的启动)
        *   [程序与页面](./quickstart/basic/framework.html#程序与页面)
        *   [组件](./quickstart/basic/framework.html#组件)
        *   [API](./quickstart/basic/framework.html#api)
    *   [发布前的准备](./quickstart/basic/role.html)
        *   [用户身份](./quickstart/basic/role.html#用户身份)
        *   [预览](./quickstart/basic/role.html#预览)
        *   [上传代码](./quickstart/basic/role.html#上传代码)
        *   [小程序的版本](./quickstart/basic/role.html#小程序的版本)
    *   [上线](./quickstart/basic/release.html)
        *   [提交审核](./quickstart/basic/release.html#提交审核)
        *   [发布](./quickstart/basic/release.html#发布)
        *   [运营数据](./quickstart/basic/release.html#运营数据)
*   [体验小程序](./demo.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

开发小程序的第一步，你需要拥有一个小程序帐号，通过这个帐号你就可以管理你的小程序。

跟随这个教程，开始你的小程序之旅吧！

### 申请帐号

点击 [https://mp.weixin.qq.com/wxopen/waregister?action=step1](https://mp.weixin.qq.com/wxopen/waregister?action=step1) 根据指引填写信息和提交相应的资料，就可以拥有自己的小程序帐号。

![](https://developers.weixin.qq.com/miniprogram/dev/image/quickstart/basic/register.png?t=18110517)

在这个小程序管理平台，你可以管理你的小程序的权限，查看数据报表，发布小程序等操作。

登录 [https://mp.weixin.qq.com](https://mp.weixin.qq.com) ，我们可以在菜单 “设置”-“开发设置” 看到小程序的 **AppID** 了 。

![](https://developers.weixin.qq.com/miniprogram/dev/image/quickstart/basic/setting.png?t=18110517)

小程序的 AppID 相当于小程序平台的一个身份证，后续你会在很多地方要用到 AppID （注意这里要区别于服务号或订阅号的 AppID）。

有了小程序帐号之后，我们需要一个工具来开发小程序。

### 安装开发工具

前往 [开发者工具下载页面](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=18110517) ，根据自己的操作系统下载对应的安装包进行安装，有关开发者工具更详细的介绍可以查看 [《开发者工具介绍》](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html?t=18110517) 。

打开小程序开发者工具，用微信扫码登录开发者工具，准备开发你的第一个小程序吧！

### 你的第一个小程序

新建项目选择小程序项目，选择代码存放的硬盘路径，填入刚刚申请到的小程序的 AppID，给你的项目起一个好听的名字，最后，勾选 "创建 QuickStart 项目" （注意: 你要选择一个空的目录才会有这个选项），点击确定，你就得到了你的第一个小程序了，点击顶部菜单编译就可以在微信开发者工具中预览你的第一个小程序。

![](https://developers.weixin.qq.com/miniprogram/dev/image/quickstart/basic/first-program.png?t=18110517)

接下来我们来预览一下这个小程序的效果。

### 编译预览

点击工具上的编译按钮，可以在工具的左侧模拟器界面看到这个小程序的表现，也可以点击预览按钮，通过微信的扫一扫在手机上体验你的第一个小程序。

![](https://developers.weixin.qq.com/miniprogram/dev/image/quickstart/basic/preview.jpg?t=18110517)

通过这个章节，你已经成功创建了你的第一个小程序，并且在微信客户端上体验到它流畅的表现。

[下个章节](quickstart/basic/file.html)，我们一起来看看这个小程序的代码构成。

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

*   [关于腾讯](https://www.tencent.com/)
*   [文档中心](https://developers.weixin.qq.com/miniprogram/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo)
*   [客服中心](https://kf.qq.com/product/wx_xcx.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./framework/MINA.html)</div>

</div>