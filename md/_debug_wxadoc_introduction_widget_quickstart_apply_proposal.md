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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/proposal.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/apply/proposal.html?t=18092916)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/proposal.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/apply/proposal.html?t=18092916)

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

# 申请新接口

## 第一步：申请接口

根据实际情况，开发者在下拉列表中选择小程序所属的类目。在未找到合适接口的情况下，开发者可通过填写接口名称来进行新模板的申请，申请结果将作为反馈被收集，后续审核结果将在**模板与组件 - Widget - 模板管理 - 新接口提案**中展示。

![申请接口](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step1_new.png?t=18092916 "申请接口")

## 第二步：新增模板

在输入接口名称后，开发者需要选择一个或多个用以在客户端渲染数据的展示模板。此处将罗列当前所有的展示模板供开发者选择编辑。如果开发者发现当前模板均不符合自己的预期，可以选择自定义图片模板。

![新增模板](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step2_new.png?t=18092916 "新增模板")

*   ### 已有模板

对于所选择的已有模板，开发者需要进行进一步的编辑，包括模板名称以及搜索模式。此外，开发者也需要根据期望的模板内容，在文本框中输入对应字段的字段示例。微信侧则根据开发者所提交的自定义模板，给出接口协议文档。

![编辑已有模板](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step2_1_new.png?t=18092916 "编辑已有模板")

如图，以股票查询服务为例，此处的内容可以为：

> 模板名称：股票查询
> 
> 搜索模式：公司名 + 股价
> 
> 字段0：腾讯控股
> 
> 字段1：2018-01-01 10:00:00
> 
> 字段2：332.600
> 
> 字段3：涨跌额
> 
> 字段4：+8.600
> 
> 字段5：涨跌幅
> 
> 字段6：+2.65%
> 
> 字段7：市值
> 
> 字段8：3.17万亿

*   ### 自定义图片模板

对于自定义图片模板，开发者需要在编辑页面输入模板名称以及搜索模式，并上传自定义模板设计稿。

![自定义图片模版](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/apply/image/step2_2_new.png?t=18092916 "自定义图片模版")

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

</div>

</div>