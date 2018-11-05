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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/stresstest.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/test/stresstest.html?t=18092916)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/stresstest.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/test/stresstest.html?t=18092916)

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

# 后台性能测试

![](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/test/image/server_test.png?t=18092916)

开发者在完成后台开发后，在**模板与组件 - Widget - 模板管理 - 模板申请单 - 提交测试 - 后台性能测试**提交如下内容：

*   自测用例
*   自测结果
*   压测时间 && 压测服务器

## 1\. 自测用例

测试用例由**正常用例**和**异常用例**组成。

正常用例应覆盖服务接口的所有功能，并通过脚本构造出不同的用例值来避免命中cache。

异常用例则是构造参数不在白名单内或者参数范围超过允许值的用例，以监控在异常参数情况下服务的稳定性。

### 1.1\. 压测自测用例数量

根据业务数据量大小需要最多3000条压测用例，如果业务数据量本身不大，那么尽量多提供即可。

*   案例1: 某查询快递服务，因为快递单子数量很大(百万、千万级别)，所以仅需抽样提供3000条。
*   案例2: 某查询地铁路线服务，因为国内地铁路线总共在几百条，此处只需要提供这几百条数据。

### 1.2\. 自测用例示例

以股票查询服务（type = 1）为例，其数据格式定义为：

<table>

<thead>

<tr>

<th>key</th>

<th>类型</th>

<th>示例</th>

</tr>

</thead>

<tbody>

<tr>

<td>stock_code</td>

<td>string</td>

<td>00700</td>

</tr>

<tr>

<td>stock_market</td>

<td>string</td>

<td>hk</td>

</tr>

</tbody>

</table>

微信在收到用户的query并进行意图识别之后，生成的数据包中未经`json_encode`的query字段为（见[消息同步示例](../implement/server/overview.html#消息同步示例)）：

    {"type": 1, "slot_list": [{"key": "stock_code", "value": "00700"}, {"key": "stock_market", "value": "hk"}]}

开发者模拟这一字段（未经`json_encode`）生成自测用例，示例如下：

    {"type": 1, "slot_list": [{"key": "stock_code", "value": "00700"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "00248"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "01041"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "00004"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "00197"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "00648"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "01271"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "11638"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "10231"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "00001"}, {"key": "stock_market", "value": "hk"}]}
    {"type": 1, "slot_list": [{"key": "stock_code", "value": "10001"}, {"key": "stock_market", "value": "hk"}]}
    ...
    ...

## 2\. 自测结果

由于此处是逻辑比较简单的http服务，所以采用业界比较成熟的压测工具即可，比如:

*   JMeter(http://jmeter.apache.org/)
*   ab (https://httpd.apache.org/docs/2.4/programs/ab.html)

参考官方要求时延验收标准

> 在QPS 200的情况下，持续压测半小时，做到95% 的请求要求在 300ms 内返回，而超过1000ms的请求不超过 1%。

预留来回网络传输最坏情况 `120ms` 的时延以及 `10ms`的加解密，开发者自测要求做到:

**在QPS 200的情况下，本地持续压测半小时，做到95%以上的请求要求在 170ms 内后台处理完成，而后台处理超过 870 ms 的比例不超过 1%**

<table>

<thead>

<tr>

<th>校验点</th>

<th style="text-align:center">耗时比例</th>

<th style="text-align:right">预期结果</th>

</tr>

</thead>

<tbody>

<tr>

<td>170ms内处理</td>

<td style="text-align:center">待填写</td>

<td style="text-align:right">>= 95%</td>

</tr>

<tr>

<td>超过 870 ms处理</td>

<td style="text-align:center">待填写</td>

<td style="text-align:right"><= 1%</td>

</tr>

</tbody>

</table>

自测报告示例:

<table>

<thead>

<tr>

<th>校验点</th>

<th style="text-align:center">耗时比例</th>

<th style="text-align:right">预期结果</th>

</tr>

</thead>

<tbody>

<tr>

<td>170ms内处理</td>

<td style="text-align:center">98.2%</td>

<td style="text-align:right">>= 95%</td>

</tr>

<tr>

<td>超过 870 ms处理</td>

<td style="text-align:center">0.72%</td>

<td style="text-align:right"><= 1%</td>

</tr>

</tbody>

</table>

## 3.压测时间 && 压测服务器

开发者选择合适的时间段（当多家服务提供者申请在同一时间段内压测时，微信侧可能会进行分批测试。为了保证测试的质量，此处建议尽可能选择较长的时间段），微信侧将在该时间段内对生产环境（生产环境的配置见[接入概述](https://developers.weixin.qq.com/miniprogram/dev/api/custommsg/callback_help.html?t=18092916)）进行为期半小时的压力测试，测试结果将在**模板申请单**中展示。

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

[](./datatest.html)[](./uitest.html)</div>

</div>