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
*   [小游戏数据](javascript:;)
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

微信小游戏数据分析

</div>

*   [功能概述](./index.html)
*   [常规分析](Analysis.html)
*   [小游戏数据助手](assistant.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s undefined"></span><span class="s_title_2">数据分析首页</span></a></div>

<nav role="navigation">

*   [概况](Analysis.html#概况)
    *   [昨日概况](Analysis.html#昨日概况)
    *   [趋势概况](Analysis.html#趋势概况)
*   [实时统计](Analysis.html#实时统计)
*   [访问分析](Analysis.html#访问分析)
    *   [访问趋势](Analysis.html#访问趋势)
    *   [访问来源](Analysis.html#访问来源)
    *   [访问留存](Analysis.html#访问留存)
*   [收入分析](Analysis.html#用户画像)
    *   [收入趋势](Analysis.html#收入趋势)
*   [用户画像](Analysis.html#用户画像)
    *   [性别及年龄分布](Analysis.html#性别及年龄分布)
    *   [地区分布](Analysis.html#地区分布)
    *   [终端及机型分布](Analysis.html#终端及机型分布)

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

![](image/a.png)

查看昨日关键用户指标，反映小游戏昨日用户活跃概况，以及对比一天前、一周前、一月前的增长率。

## 趋势概况

![](image/b.png)

查看关键指标的趋势，包括近30天访问趋势（活跃用户、新增注册用户、付费用户费、首次付费用户数）和近30天收入趋势（参见【指标解释】）。

# 实时统计

![](image/c.png)

查看实时用户访问数据，以及访问趋势。为了更好地查看数据趋势，时间粒度为5分钟时

# 访问分析

## 访问趋势

![](image/d.png)

查看游戏的用户访问趋势，包括累计注册用户、活跃用户数、访问次数、新增注册用户数、人均停留时长、分析用户数 （参见【指标解释】）

可以选择时间粒度，按天、周、月汇总查看。当时间粒度为周或月时，次数为累计汇总值，人数去重。

## 访问来源

![](image/e.png)

访问来源，即用户访问小游戏的具体场景，如小程序历史列表、二维码等。你可以查看各个场景的小游戏打开次数，分析游戏的用户渠道。

## 访问留存

![](image/f.png)

查看选定时间范围内，小游戏用户的访问留存情况。可以选择时间粒度，按天、周、月查看。当时间粒度为周或月时，人数去重。

新增留存，统计指定时间新增（即首次访问小游戏）的用户，在之后的第N天（或周、月），再次访问小程序的用户数占比；例如1月1日首次访问小游戏的用户数为100，1月2日这些用户中仍有10人访问小程序，则次日留存率为10.0%。

活跃留存，统计指定时间活跃（即访问小游戏）的用户，在之后的第N天（或周、月），再次访问小程序的用户数占比。例如1月1日访问小程序的用户数为1000，1月2日这些用户中仍有300人访问小程序，则次日留存率为30.0%。

# 收入分析

## 收入趋势

![](image/g.png)

查看小游戏相关的收入数据趋势，包括单日总收入、累计总收入、付费用户数、首次付费用户数、渗透率、平均付费用户收入、平均用户收入、首付占比

# 用户画像

看选定时间范围内，新增或活跃用户的画像分布。支持查看昨天、最近7天、最近30天的数据。其中，新增用户数为选定时间范围内首次访问小游戏的去重用户数，活跃用户数为选定时间范围内访问过小游戏的去重用户数。

## 性别及年龄分布

![](image/h.png) 查看新增或活跃用户的性别及年龄分布，由于部分用户属性数据缺失，可能出现“未知”。

## 地区分布

![](image/i.png)

查看新增或活跃用户的主要省份分布，图表仅展示用户数最多的top10

查看新增或活跃用户的主要城市分布，可以在页面底部查看或下载完整数据进一步分析。由于部分用户属性数据缺失，可能出现“未知”。

## 终端及机型分布

![](image/j.png)

查看新增或活跃用户的终端及机型分布，其中终端包括iPhone、Android和其他。由于部分用户机型数据缺失，可能出现“未知”。

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
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9&)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./index.html#指标解释)[](Analysis.html#概况)</div>

</div>