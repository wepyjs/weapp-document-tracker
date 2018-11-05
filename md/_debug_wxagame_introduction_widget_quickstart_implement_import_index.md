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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/import/index.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/implement/import/index.html?t=18092916)

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

*   [微信小程序接入指南](../../../../)
*   [客服功能使用指南](../../../../custom.html)
*   [扫码打开小程序接入指南](../../../../qrcode.html)
*   [插件接入指南](../../../../plugin.html)
*   [搜索Widget接入指南](../../../)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/import/index.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/implement/import/index.html?t=18092916)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [开发前必读](../../../)
    *   [概述](../../../)
    *   [接入指引](../../../guide/overview.html)
    *   [整体时序图](../../../guide/flowgraph.html)
    *   [更新日志](../../../guide/log.html)
*   [快速启动](../../apply/)
    *   [申请模板](../../apply/)
        *   [申请新接口](../../apply/proposal.html)
    *   [实现模板](../)
        *   [导入意图数据](.)
        *   [配置后台测试接口](../testconfig.html)
        *   [开发后台接口](../server/overview.html)
        *   [调试](../debug.html)
    *   [提交测试](../../test/)
        *   [导入数据检测](../../test/datatest.html)
        *   [后台性能测试](../../test/stresstest.html)
        *   [展示效果测试](../../test/uitest.html)
    *   [发布上线](../../release.html)
    *   [查看数据](../../dataview/)
*   [附录](../../../appendix/question.html)
    *   [常见问题](../../../appendix/question.html)
    *   [问题反馈](../../../appendix/feedback.html)
    *   [运营规则](../../../appendix/rule.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 导入意图数据

开发者可在**模板与组件 - Widget - 模板管理 - 模板申请单 - 实现模板 - 导入意图数据**下载导入数据协议文档，并根据协议文档，导入搜索意图数据，同时在**配置**中同意添加微信官方测试人员到当前小程序体验者权限，以便测试人员验收服务直达功能。测试人员并不占用已有小程序体验人数名额。

![导入意图数据](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/import/image/import_data.jpg?t=18092916 "导入意图数据")

通过定期导入搜索意图数据，微信能够获取第三方离线数据，用于了解第三方服务内容，有利于第三方获取更多搜索流量。

导入的意图数据格式由微信侧根据具体类目定制，除了对应类目所需字段外，一般需要包含别名字段(alias)和小程序内搜索或点击热度字段(hot)，用于微信侧优化意图识别结果。

意图数据导入的方式有两种：API导入与文件导入。

## 方式一：API导入

### 1\. 获取ACCESS_TOKEN

开发者需要获取ACCESS_TOKEN作为接口调用凭证，文档详见[获取access_token](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183)。 （注意，access_token需要使用小程序的AppID和AppSecret进行获取）

### 2.组建json

开发者根据约定的数据格式来组装json，参考格式如下：

<table>

<thead>

<tr>

<th>字段名称</th>

<th>字段类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>lifespan</td>

<td>unsigned int32</td>

<td>数据有效时间，秒为单位，一般为86400，一天一次导入的频率</td>

</tr>

<tr>

<td>query</td>

<td>string</td>

<td>固定为"{"type":XXXXX}"，用于标识数据所属的服务类目，**注意该字段为string类型而不是object**</td>

</tr>

<tr>

<td>scene</td>

<td>int32</td>

<td>1代表用于搜索的数据</td>

</tr>

<tr>

<td>data</td>

<td>string</td>

<td>推送到微信后台的数据列表，该数据被微信用于流量分配，**注意该字段为string类型而不是object**</td>

</tr>

</tbody>

</table>

    {
        "lifespan": 86400,
        "query": "{\"type\":XXXXXX}",
        "scene": 1,
        "data": "your custom data to push"
    }

### 3\. 导入数据

第三方通过调用微信API，将数据写入到setdynamicdata这个API。每个Post数据包不超过5K，若数据过多可开多进（线）程并发导入数据（例如：数据量为十万量级可以开50个线程并行导数据）。

    http请求方式：POST
    http(s)://api.weixin.qq.com/wxa/setdynamicdata?access_token=ACCESS_TOKEN

    {"lifespan": 86400,"query": "{\"type\":XXXXXX}","scene": 1,"data": "your custom data to push"}

### 4\. 代码示例

以股票查询服务为例，query字段中type定义为：

<table>

<thead>

<tr>

<th>key</th>

<th>说明</th>

<th>定义</th>

</tr>

</thead>

<tbody>

<tr>

<td>type</td>

<td>类型编号</td>

<td>1000001</td>

</tr>

</tbody>

</table>

data字段的定义：

<table>

<thead>

<tr>

<th>字段名称</th>

<th>字段类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>items</td>

<td>array</td>

<td>数据内容见items数组数据定义</td>

</tr>

<tr>

<td>attribute</td>

<td>object</td>

<td>{"id":"XXX", "seq": i, "count": M, "totalcount": N}.  
id为此批数据的唯一id，注意同一批数据可能分多次api推送，这多次推送的id必须是一致的；  
seq为多次推送的递增序列，为0到n-1，第一次推送seq为0，第二次推送seq为1，以此类推；  
count为此次api推送的数据条数；  
totalcount为此批数据的总条数，sum(count(0).size() + ... +count(n-1).size())，即所有api推送数据条数总和。</td>

</tr>

</tbody>

</table>

items数组中数据定义为：

<table>

<thead>

<tr>

<th>key</th>

<th>说明</th>

<th>示例</th>

</tr>

</thead>

<tbody>

<tr>

<td>stock_code</td>

<td>股票代码</td>

<td>例如：0700</td>

</tr>

<tr>

<td>stock_name</td>

<td>股票名称</td>

<td>例如：腾讯控股</td>

</tr>

<tr>

<td>stock_market</td>

<td>股票市场</td>

<td>例如：hk</td>

</tr>

</tbody>

</table>

最终导入股票查询意图数据：

    https://api.weixin.qq.com/wxa/setdynamicdata?access_token=ACCESS_TOKEN

    {
        "lifespan": 86400,
        "query": "{\"type\":100001}",
        "scene": 1,
        "data": "{\"items\":[{\"stock_name\":\"腾讯控股\", \"stock_code\":\"00700\", \"stock_market\":\"hk\"}], \"attribute\":{\"count\":2, \"totalcount\": 100, \"id\": \"XXX\", \"seq\": 0}}"
    }

## 方式二：文件导入

开发者通过xls格式文件导入数据，具体数据字段由微信侧根据具体类目定制，示例见[导入数据文件示例](导入数据文件示例.xls)。

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

[](../testconfig.html)</div>

</div>