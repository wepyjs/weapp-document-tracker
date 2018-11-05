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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/flowgraph.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/guide/flowgraph.html?t=18092916)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/flowgraph.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/guide/flowgraph.html?t=18092916)

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

# 整体时序图

为了使开发者对搜索Widget具有更加直观的认识，以下给出了搜索Widget的整体时序图。

![整体时序图](https://developers.weixin.qq.com/miniprogram/introduction/widget/guide/image/develop.jpeg?t=18092916 "整体时序图")

a. 用户输入搜索词进行搜索后，微信后台根据搜索词进行意图识别，若发现用户搜索符合某项意图，且该意图无对应的有效缓存，则对提供该类直达服务的小程序后台发起事件，告知服务提供者用户搜索了小程序所提供的服务；

b. 小程序后台根据a通知事件的参数，返回数据到微信后台；

c. 客户端对widget进行绘制，并将小程序后台返回微信后台的数据缓存push到小程序widget中进行展示；

d. 客户端以一定的时间间隔，不断地轮循请求微信后台，微信后台检查小程序缓存数据是否过期，若已过期则发送更新事件给小程序后台，以得到最新的数据；

e. 客户端拿到最新数据后，将数据push到小程序widget中进行更新。

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

[](./overview.html)[](./log.html)</div>

</div>