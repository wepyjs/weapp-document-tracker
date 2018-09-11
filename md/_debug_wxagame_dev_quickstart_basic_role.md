<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18091122)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18091122)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18091122)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18091122)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18091122)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18091122)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18091122)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18091122)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/role.html?t=18091122)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/quickstart/basic/role.html?t=18091122)

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

*   [简易教程](../../)
*   [框架](../../framework/MINA.html)
*   [组件](../../component/)
*   [API](../../api/network/download/wx.downloadFile.html)
*   [工具](../../devtools/devtools.html)
*   [小程序·云开发](../../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/role.html?t=18091122)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/quickstart/basic/role.html?t=18091122)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [基础](../../)
    *   [起步](../../)
        *   [申请帐号](../../#申请帐号)
        *   [安装开发工具](../../#安装开发工具)
        *   [你的第一个小程序](../../#你的第一个小程序)
        *   [编译预览](../../#编译预览)
    *   [代码构成](./file.html)
        *   [JSON 配置](./file.html#json-配置)
        *   [WXML 模板](./file.html#wxml-模板)
        *   [WXSS 样式](./file.html#wxss-样式)
        *   [JS 逻辑交互](./file.html#js-交互逻辑)
    *   [小程序能力](./framework.html)
        *   [小程序的启动](./framework.html#小程序的启动)
        *   [程序与页面](./framework.html#程序与页面)
        *   [组件](./framework.html#组件)
        *   [API](./framework.html#api)
    *   [发布前的准备](./role.html)
        *   [用户身份](./role.html#用户身份)
        *   [预览](./role.html#预览)
        *   [上传代码](./role.html#上传代码)
        *   [小程序的版本](./role.html#小程序的版本)
    *   [上线](./release.html)
        *   [提交审核](./release.html#提交审核)
        *   [发布](./release.html#发布)
        *   [运营数据](./release.html#运营数据)
*   [体验小程序](../../demo.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

如果你只是一个人开发小程序，可以暂时先跳过这部分，如果是一个团队需要先了解一些概念。

### 用户身份

一个团队进行小程序的开发，那么团队成员的身份管理是很有必要的。

管理员可在小程序管理后台统一管理项目成员（包括开发者、体验者及其他成员）、设置项目成员的权限，包括：开发者/体验者权限、登录小程序管理后台、开发管理、查看小程序数据分析等。

管理入口位于：[小程序管理后台](https://mp.weixin.qq.com) - 用户身份 – 成员管理

![](https://developers.weixin.qq.com/miniprogram/dev/image/quickstart/role.jpg?t=18091122)

<table>

<thead>

<tr>

<th>权限</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>开发者权限</td>

<td>可使用小程序开发者工具及开发版小程序进行开发</td>

</tr>

<tr>

<td>体验者权限</td>

<td>可使用体验版小程序</td>

</tr>

<tr>

<td>登录</td>

<td>可登录小程序管理后台，无需管理员确认</td>

</tr>

<tr>

<td>数据分析</td>

<td>使用小程序数据分析功能查看小程序数据</td>

</tr>

<tr>

<td>开发管理</td>

<td>小程序提交审核、发布、回退</td>

</tr>

<tr>

<td>开发设置</td>

<td>设置小程序服务器域名、消息推送及扫描普通链接二维码打开小程序</td>

</tr>

<tr>

<td>暂停服务设置</td>

<td>暂停小程序线上服务</td>

</tr>

</tbody>

</table>

### 预览

使用开发者工具可以预览小程序，帮助开发者检查小程序在移动客户端上的真实表现。

点击开发者工具顶部操作栏的预览按钮，开发者工具会自动打包当前项目，并上传小程序代码至微信的服务器，成功之后会在界面上显示一个二维码。使用当前小程序开发者的微信扫码即可看到小程序在手机客户端上的真实表现。

### 上传代码

同预览不同，上传代码是用于提交体验或者审核使用的。

点击开发者工具顶部操作栏的上传按钮，填写版本号以及项目备注，需要注意的是，这里版本号以及项目备注是为了方便管理员检查版本使用的，开发者可以根据自己的实际要求来填写这两个字段。

上传成功之后，登录[小程序管理后台](https://mp.weixin.qq.com) - 开发管理 - 开发版本 就可以找到刚提交上传的版本了。

可以将这个版本设置 体验版 或者是 提交审核

### 小程序的版本

<table>

<thead>

<tr>

<th>版本</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>开发版本</td>

<td>使用开发者工具，可将代码上传到开发版本中。开发版本只保留每人最新的一份上传的代码。  
点击提交审核，可将代码提交审核。开发版本可删除，不影响线上版本和审核中版本的代码。</td>

</tr>

<tr>

<td>审核中版本</td>

<td>只能有一份代码处于审核中。有审核结果后可以发布到线上，也可直接重新提交审核，覆盖原审核版本。</td>

</tr>

<tr>

<td>线上版本</td>

<td>线上所有用户使用的代码版本，该版本代码在新版本代码发布后被覆盖更新。</td>

</tr>

</tbody>

</table>

可以使用小程序开发者助手方便快捷的预览和体验线上版本，体验版本以及开发版本。

![mydev](https://developers.weixin.qq.com/miniprogram/dev/image/quickstart/mydev.jpg?t=18091122)

在[下个章节](release.html)，我们来看看如何发布一个小程序，让你的成果被所有的微信用户所使用到。

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

[](./framework.html)[](./release.html)</div>

</div>