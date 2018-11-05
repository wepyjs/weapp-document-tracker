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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/index.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/apply/index.html?t=18092916)

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

*   [微信小程序接入指南](../../../)
*   [客服功能使用指南](../../../custom.html)
*   [扫码打开小程序接入指南](../../../qrcode.html)
*   [插件接入指南](../../../plugin.html)
*   [搜索Widget接入指南](../../)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/index.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/apply/index.html?t=18092916)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [开发前必读](../../)
    *   [概述](../../)
    *   [接入指引](../../guide/overview.html)
    *   [整体时序图](../../guide/flowgraph.html)
    *   [更新日志](../../guide/log.html)
*   [快速启动](.)
    *   [申请模板](.)
        *   [申请新接口](./proposal.html)
    *   [实现模板](../implement/)
        *   [导入意图数据](../implement/import/)
        *   [配置后台测试接口](../implement/testconfig.html)
        *   [开发后台接口](../implement/server/overview.html)
        *   [调试](../implement/debug.html)
    *   [提交测试](../test/)
        *   [导入数据检测](../test/datatest.html)
        *   [后台性能测试](../test/stresstest.html)
        *   [展示效果测试](../test/uitest.html)
    *   [发布上线](../release.html)
    *   [查看数据](../dataview/)
*   [附录](../../appendix/question.html)
    *   [常见问题](../../appendix/question.html)
    *   [问题反馈](../../appendix/feedback.html)
    *   [运营规则](../../appendix/rule.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 申请模板

## 第一步：选择小程序

开发者在**模板与组件 - Widget - 模板管理**处点击**申请模板**，即可申请开通服务搜索接口。微信公众平台将列出当前公众号所有已关联的小程序，开发者可选择用于提供服务的小程序（当用户在微信客户端点击对应的搜索结果页时，将跳转进入该小程序）。

![选择小程序](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step1.png?t=18092916 "选择小程序")

## 第二步：选择接口

在下拉列表中选择小程序所对应的类目，同时在类目下方将显示当前类目下已有的所有接口类型。开发者可以预览各接口类型下所有的模板，并根据需要选择服务的接口类型。如果开发者在列表中并未找到合适的接口，可以选择[申请新接口](proposal.html)。

![选择接口](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step2.jpg?t=18092916 "选择接口")

## 第三步：选择模板

某一接口可能具有多种搜索模式，不同的搜索模式需要客户端展示不同的内容，因而可能具有多个模板。以接口**天气查询服务**为例，该接口具有三种搜索模式，“_城市+天气_”、“_一周+天气_”以及“_省份+天气_”，其中“_城市+天气_”需要显示当天查询城市的天气情况，“_一周+天气_”需要显示连续数日本地的天气情况，“_省份+天气_”需要显示当天查询省份各城市的天气情况，因而具有三种模板。开发者可以根据实际情况，有选择地实现部分或者全部搜索模式，并在此处进行设置，选择将要实现的搜索模式以及对应的模板。

![选择模板](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step3.png?t=18092916 "选择模板")

对于每一模板，开发者可以进一步编辑。编辑区域中的每一行对应模板上某个部分所渲染的内容，左侧的下拉列表则罗列了当前模板所有可用的接口字段。开发者通过对不同接口字段的选择，从而自定义最终在客户端显示渲染的模板内容。

![编辑模板](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step4.png?t=18092916 "编辑模板")

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

[](../../)[](../../appendix/question.html)</div>

</div>