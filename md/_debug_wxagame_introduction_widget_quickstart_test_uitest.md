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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/uitest.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/test/uitest.html?t=18092916)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/uitest.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/test/uitest.html?t=18092916)

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
    *   [提交测试](.)
        *   [导入数据检测](./datatest.html)
        *   [后台性能测试](./stresstest.html)
        *   [展示效果测试](./uitest.html)
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

# 展示效果测试

![展示效果测试](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/image/ui_test.png?t=18092916 "展示效果测试")

在后台开发完成后，开发者可通过搜索相关关键词，自测服务直达功能的可用性。

待自测通过后，开发者需整理相关截图，提交至微信测进行审核（[提交文件示例](material/展示效果测试.pdf)）。

对于每一类搜索模式，应包含**3个或3个以上**搜索样例的搜索结果页截图以及对应的小程序落地页截图。

以下列举了在测试过程中常见的问题，建议开发者在自测过程中予以注意。

1 **相关性**

开发者应提高展示内容与搜索词的相关性，完全不相关或只有极少相关的结果无法通过测评。

典型负例：

![典型负例1](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/image/bad_case1.png?t=18092916 "典型负例1")

2 **地域性**

如果搜索词明确包含“附近XX”，要求返回显示的结果距用户GPS定位的最远距离为5公里。

如果搜索词明确包含某个具体地点，要求返回显示的结果距用户给定地点的最远距离为2公里。

3 **时效性**

对于时效性要求很强的类目，需要高频更新。

如果搜索词明确包含“XX日期”，要求返回显示的结果必须满足对应的条件。

4 **一致性**

搜索结果页和小程序落地页需保持一致，既包括排序上的一致性，也包括结果数量和具体内容的一致性。

典型负例：

![典型负例2](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/image/bad_case2.png?t=18092916 "典型负例2")

5 **稳定性**

服务需要保持稳定，不能出现时有时无的现象。

在一定时间内，除部分强时效性的类目，同一用户相同搜索词的搜索结果应基本一致。

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

[](./stresstest.html)</div>

</div>