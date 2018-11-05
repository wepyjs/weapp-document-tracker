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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/debug.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/implement/debug.html?t=18092916)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/debug.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/implement/debug.html?t=18092916)

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
    *   [实现模板](.)
        *   [导入意图数据](./import/)
        *   [配置后台测试接口](./testconfig.html)
        *   [开发后台接口](./server/overview.html)
        *   [调试](./debug.html)
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

# 调试

## 页面调试

开发者在[调试页面](https://mp.weixin.qq.com/debug)中设置接口类型（`消息接口调试`），接口列表（`小程序widget事件消息`），`安全模式`可以调试消息通路，包括签名和加解密等，支持xml和json数据格式。

调试页面模拟了微信侧向开发者配置的服务器地址推送小程序widget事件消息的过程（详见[消息同步示例](server/overview.html#消息同步示例)）。开发者在文本框中输入对应的参数值，并点击**检查问题**即可完成一次微信侧与后台的消息传递。开发者可以在后台调试打印微信侧发送的消息，也可以在调试页面上看到后台返回的结果。

![调试页面](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/image/test_web.jpg?t=18092916 "调试页面")

<table>

<thead>

<tr>

<th>标记</th>

<th>内容</th>

<th>内容说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td>-</td>

<td>接口类型、接口列表、MsgType、Event、加密调试等如图设置</td>

</tr>

<tr>

<td>2</td>

<td>URL</td>

<td>调试时将消息推送至该URL上</td>

</tr>

<tr>

<td>3</td>

<td>ToUserName</td>

<td>开发者微信号，模拟数据</td>

</tr>

<tr>

<td>4</td>

<td>FromUserName</td>

<td>发送方账号，模拟数据</td>

</tr>

<tr>

<td>5</td>

<td>CreateTime</td>

<td>消息创建时间，模拟数据</td>

</tr>

<tr>

<td>6</td>

<td>Query</td>

<td>消息Query参数，模拟数据</td>

</tr>

<tr>

<td>7</td>

<td>Scene</td>

<td>场景值，固定为1</td>

</tr>

<tr>

<td>8</td>

<td>Appid</td>

<td>小程序Appid</td>

</tr>

<tr>

<td>9</td>

<td>Token</td>

<td>开发者在小程序管理端的配置，见[接入指南](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421135319)</td>

</tr>

<tr>

<td>10</td>

<td>EncodingAESKey</td>

<td>开发者在小程序管理端的配置，见[接入指南](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421135319)</td>

</tr>

</tbody>

</table>

## 真机调试

完成[配置后台测试接口](testconfig.html)且[导入数据检测](../test/datatest.html)通过后，开发者在开发过程中可在客户端输入相关的搜索词体验搜索结果页。

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

[](./server/overview.html)</div>

</div>