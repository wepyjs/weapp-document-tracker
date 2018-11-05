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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/dataview/index.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/dataview/index.html?t=18092916)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/dataview/index.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/dataview/index.html?t=18092916)

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
*   [快速启动](../apply/)
    *   [申请模板](../apply/)
        *   [申请新接口](../apply/proposal.html)
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
    *   [查看数据](.)
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

# 查看数据

## 查看业务数据

服务能力上线后, 可登录[微信公众平台](https://mp.weixin.qq.com/) **- 搜索开放平台** ，在**模板与组件 - Widget - 数据概况**入口查看整体数据和每项服务的业务数据，如曝光次数、点击次数和新老用户占比等。

![查看业务数据](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/dataview/image/service_data.png?t=18092916 "查看业务数据")

## 查看运维数据

服务能力上线后，可登录[小程序管理端](https://mp.weixin.qq.com/) **- 运维中心**查看线上运维数据，并设置监控报警信息。

#### 告警群设置：

在告警设置tab下选中**服务直达告警群**，页面会出现告警群的二维码，错误告警通过微信群来通知，每个服务直达对应唯一的告警群，扫码加入后即可接收告警通知。

![告警群设置](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/dataview/image/monitor_qrcode.png?t=18092916 "告警群设置")

#### 告警项设置：

在性能监控tab下选中**服务直达监控**，可以通过选择服务类型和时间段，查看对应的后台调用次数曲线。

在**异常项目**中可展开几个常规的告警项，如后台调用次数、调用失败次数等，展开后可查看对应的数据曲线、当前总数、昨日总数、偏差比例，以及设置是否微信通知，当打开了微信通知开关后，告警项的数据偏差或曲线变化超过一定阈值时，告警群中就会推送告警信息，及时知会到相关人员。

![告警项设置](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/dataview/image/monitor_setting.png?t=18092916 "告警项设置")

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

[](../release.html)</div>

</div>