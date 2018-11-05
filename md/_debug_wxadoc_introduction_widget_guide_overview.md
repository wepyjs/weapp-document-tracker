<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [小程序介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18092916)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18092916)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18092916)
*   [开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18092916)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18092916)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18092916)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18092916)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18092916)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/overview.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/guide/overview.html?t=18092916)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title icon_doc"></span>

微信小程序接入指南

</div>

*   [微信小程序接入指南](../../)
*   [客服功能使用指南](../../custom.html)
*   [扫码打开小程序接入指南](../../qrcode.html)
*   [插件接入指南](../../plugin.html)
*   [搜索Widget接入指南](../)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/overview.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/guide/overview.html?t=18092916)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [开发前必读](../)
    *   [概述](../)
    *   [接入指引](./overview.html)
    *   [整体时序图](./flowgraph.html)
    *   [更新日志](./log.html)
*   [快速启动](../quickstart/apply/)
    *   [申请模板](../quickstart/apply/)
        *   [申请新接口](../quickstart/apply/proposal.html)
    *   [实现模板](../quickstart/implement/)
        *   [导入意图数据](../quickstart/implement/import/)
        *   [配置后台测试接口](../quickstart/implement/testconfig.html)
        *   [开发后台接口](../quickstart/implement/server/overview.html)
        *   [调试](../quickstart/implement/debug.html)
    *   [提交测试](../quickstart/test/)
        *   [导入数据检测](../quickstart/test/datatest.html)
        *   [后台性能测试](../quickstart/test/stresstest.html)
        *   [展示效果测试](../quickstart/test/uitest.html)
    *   [发布上线](../quickstart/release.html)
    *   [查看数据](../quickstart/dataview/)
*   [附录](../appendix/question.html)
    *   [常见问题](../appendix/question.html)
    *   [问题反馈](../appendix/feedback.html)
    *   [运营规则](../appendix/rule.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 接入指引

![接入流程](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/image/pipeline.png?t=18092916 "接入流程")

## 开通服务

开发者可登录[公众号管理端](https://mp.weixin.qq.com/)，点击**功能**菜单的**添加功能插件**，进入功能插件列表，添加**搜索开放平台**插件。公众号需要满足指定的申请条件（如开通微信认证等），才可申请开通搜索开放平台。在使用搜索开放平台的过程中，必须遵守微信公众账号相关的各项协议、规则，包括但不限于[《微信公众平台服务协议》](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1503979103&version=1&lang=zh_CN&platform=2)[《微信电子商务服务协议》](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1503978995&version=1&lang=zh_CN&platform=2&token=1986977940)[《微信品牌官方区功能服务条款》](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&announce_id=1515744281&version=1&lang=zh_CN&platform=2&token=1986977940)[《服务直达区功能服务条款》](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&announce_id=1519915203&version=5&lang=zh_CN&platform=2)等。

## 申请模板

当开发者确认开通搜索开放平台后，便可以开始[申请模板](../quickstart/apply/index.html)。对于不同的类目和接口，我们提供了多种模板。开发者可以选择与当前公众号关联的小程序，并根据类目和接口类型选择合适的模板。

## 实现模板

开发者需要首先使用在[申请模板](../quickstart/apply/index.html)一节中所选择的小程序的账号密码登陆[小程序管理端](https://mp.weixin.qq.com)，在**设置 - 开发设置选项卡**中启用并设置消息推送配置。配置指引可参考[接入概述](https://developers.weixin.qq.com/miniprogram/dev/api/custommsg/callback_help.html?t=18092916)。

微信后台会将用户触发的搜索请求推送给开发者，开发者需按照约定的数据格式响应请求。关于后台开发的详细指引，参见[开发后台接口/整体开发流程](../quickstart/implement/server/overview.html#整体开发流程)。

## 提交测试

为了保证服务的质量，我们建立了一套自助测试流程并要求开发者进行相应的[后台性能测试](../quickstart/test/stresstest.html)和[展示效果测试](../quickstart/test/uitest.html)。具体的测试工具以及测试流程，参考本文档的[提交测试](../quickstart/test/index.html)一节。

## 发布上线

开发者完成上述步骤后，即可正式[发布上线](../quickstart/release.html)。

## 查看数据

服务上线后，公众号运营者可以登陆[公众号管理端](https://mp.weixin.qq.com)[查看数据](../quickstart/dataview/index.html)。

![搜索开放平台](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/image/guide1.jpg?t=18092916 "搜索开放平台")

<table>

<thead>

<tr>

<th>标记</th>

<th>内容</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>搜索开放平台</td>

<td>搜索开放的接入和运营</td>

</tr>

<tr>

<td>2</td>

<td>添加功能插件</td>

<td>由此入口添加**搜索开放平台**插件</td>

</tr>

<tr>

<td>3</td>

<td>Widget</td>

<td>搜索Widget的相关操作</td>

</tr>

</tbody>

</table>

![模板与组件](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/image/guide2.jpg?t=18092916 "模板与组件")

<table>

<thead>

<tr>

<th>标记</th>

<th>内容</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>模板与组件</td>

<td>模板与组件的相关操作</td>

</tr>

<tr>

<td>2</td>

<td>模板管理</td>

<td>搜索Widget的查看、申请等操作</td>

</tr>

<tr>

<td>3</td>

<td>数据概况</td>

<td>开发者或运营者可在此处查看Widget的各项数据</td>

</tr>

<tr>

<td>4</td>

<td>已上线模板</td>

<td>查看已上线模板的情况</td>

</tr>

<tr>

<td>5</td>

<td>新接口提案</td>

<td>查看所提案的新接口的情况（如微信侧的审核结果）</td>

</tr>

<tr>

<td>6</td>

<td>模板申请单</td>

<td>模板的申请、实现、测试以及上线</td>

</tr>

</tbody>

</table>

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

[](../)[](./flowgraph.html)</div>

</div>