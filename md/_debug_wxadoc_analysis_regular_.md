<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](javascript:;)
    *   [小程序数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)
    *   [小游戏数据](https://mp.weixin.qq.com/debug/wxagame/analysis/index.html)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title undefined"></span>

微信小程序数据分析

</div>

*   [功能概述](../)
*   [常规分析](./)
*   [自定义分析](../custom/)
*   [小程序数据助手](../assistant/)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s undefined"></span><span class="s_title_2">数据分析首页</span></a></div>

<nav role="navigation">

*   [概况](./#概况)
    *   [昨日概况](./#昨日概况)
    *   [趋势概况](./#趋势概况)
    *   [Top页面](./#Top页面)
*   [实时统计](./#实时统计)
*   [访问分析](./#访问分析)
    *   [访问趋势](./#访问趋势)
    *   [访问分布](./#访问分布)
    *   [访问留存](./#访问留存)
    *   [访问页面](./#访问页面)
*   [用户画像](./#用户画像)
    *   [性别及年龄分布](./#性别及年龄分布)
    *   [地区分布](./#地区分布)
    *   [终端及机型分布](./#终端及机型分布)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 概况

## 昨日概况

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/2_1.png)

查看昨日关键用户指标，反映小程序昨日用户活跃概况，以及对比一天前、一周前、一月前的增长率。

## 趋势概况

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/2_2.png)

查看关键指标的趋势，包括累计访问用户数、打开次数、访问次数、访问人数、新访问用户数、分享次数、分享人数、人均停留时长、次均停留时长（参见【指标解释】），可选择时间进行对比。

## Top页面

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/2_3.png)

查看用户最常访问的页面，以及页面访问次数和占比（单个页面访问次数/总访问次数），区分入口页和受访页。其中，入口页指用户进入小程序访问的第一个页面；受访页指用户访问的每一个页面。

# 实时统计

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/3_1.png)

查看实时用户访问数据，可以选择所有页面或单个页面为分析对象，可以选择具体的时间粒度（1分钟、5分钟、10分钟、30分钟、1小时），可以按时间进行对比。为了更好地查看数据趋势，时间粒度为分钟时，请注意合理选择时间范围。

详情数据查看每一个页面在所选时间范围内的总访问次数及占比。

# 访问分析

## 访问趋势

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/4_1.png)

查看小程序的用户访问趋势，包括打开次数、访问次数、访问人数、新用户数、人均访问时长、次均访问时长、平均访问深度。（参见【指标解释】）

可以选择时间粒度，按天、周、月汇总查看。当时间粒度为周或月时，次数为累计汇总值，人数去重。

## 访问分布

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/4_2.png)

访问来源，即用户访问小程序的具体场景，如小程序历史列表、二维码等。你可以查看各个场景的小程序打开次数，分析小程序的用户渠道。

访问时长，即用户从打开小程序，到主动关闭或超时退出小程序的过程中停留的时长，你可以查看各个时长区间的打开次数，分析用户对小程序的喜爱或依赖程度。

访问深度，即用户从打开小程序，到主动关闭或超时退出小程序的过程中访问的去重页面数，你可以查看各个访问深度区间的打开次数，了解小程序的普通用户、深度用户分布。

## 访问留存

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/4_4.png)

查看选定时间范围内，小程序用户的访问留存情况。可以选择时间粒度，按天、周、月查看。当时间粒度为周或月时，人数去重。

新增留存，统计指定时间新增（即首次访问小程序）的用户，在之后的第N天（或周、月），再次访问小程序的用户数占比；例如1月1日首次访问小程序的用户数为100，1月3日这些用户中仍有10人访问小程序，则2天后留存率为10.0%。

活跃留存，统计指定时间活跃（即访问小程序）的用户，在之后的第N天（或周、月），再次访问小程序的用户数占比。例如1月1日访问小程序的用户数为1000，1月3日这些用户中仍有300人访问小程序，则2天后留存率为30.0%。

## 访问页面

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/4_3.png)

查看选定时间范围内，每个小程序页面的访问次数、访问人数、次均使用时长、入口页次数、退出页次数、退出率、分享次数、分享人数。（参见【指标解释】）

以上指标均为时间范围内的累计值。可以按单个指标排序显示。

# 用户画像

查看选定时间范围内，新增或活跃用户的画像分布。支持查看昨天、最近7天、最近30天的数据。其中，新增用户数为选定时间范围内首次访问小程序的去重用户数，活跃用户数为选定时间范围内访问过小程序的去重用户数。可以下载详情数据进一步分析。

## 性别及年龄分布

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/6_1.png) 查看新增或活跃用户的性别及年龄分布，由于部分用户属性数据缺失，可能出现“未知”。

## 地区分布

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/6_2.png)

查看新增或活跃用户的主要省份分布，图表仅展示用户数最多的top10，可以在页面底部查看或下载完整数据进一步分析。由于部分用户属性数据缺失，可能出现“未知”。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/6_3.png) 查看新增或活跃用户的主要城市分布，支持筛选展示全国或单个省份下的城市数据，可以在页面底部查看或下载完整数据进一步分析。由于部分用户属性数据缺失，可能出现“未知”。

## 终端及机型分布

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/6_4.png)

查看新增或活跃用户的终端及机型分布，其中终端包括iPhone、Android和其他，机型暂只提供用户数最多的top20。由于部分用户机型数据缺失，可能出现“未知”。

详情数据表汇总以上年龄、性别、省份、城市、终端、机型数据，可以下载后进一步分析。 ![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/6_5.png)

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

*   [关于腾讯](http://www.tencent.com/zh-cn/index.shtml)
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](../#指标解释)[](./#概况)</div>

</div>