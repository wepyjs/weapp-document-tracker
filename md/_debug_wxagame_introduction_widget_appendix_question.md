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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/appendix/question.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/appendix/question.html?t=18092916)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/appendix/question.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/appendix/question.html?t=18092916)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [开发前必读](../)
    *   [概述](../)
    *   [接入指引](../guide/overview.html)
    *   [整体时序图](../guide/flowgraph.html)
    *   [更新日志](../guide/log.html)
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
*   [附录](./question.html)
    *   [常见问题](./question.html)
    *   [问题反馈](./feedback.html)
    *   [运营规则](./rule.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 常见问题

## 开发后台接口

1.  ### 加解密

正常情况下，在[调试页面](https://mp.weixin.qq.com/debug)可以正常展示后台返回的解密结果。若出现PARSE 3rd json/xml fail错误，可能导致的原因如下：

1.  返回的数据格式不正确，请检查文档中各个步骤的数据格式要求。
2.  微信侧数据解密失败。加解密失败常见原因包括：

<pre>a、用微信侧提供的java包加解密失败，报异常java.security.InvalidKeyException:illegal Key Size。解决方案见java加解密包中的readme.txt。
b、自行开发加解密逻辑，微信侧解密失败。请检查AES填充方式，注意微信侧的AES加解密采用CBC模式，秘钥长度为32个字节（256位），数据采用PKCS#7填充。</pre>

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

[](../quickstart/apply/)[](./feedback.html)</div>

</div>