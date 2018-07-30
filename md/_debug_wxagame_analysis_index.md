<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18073100)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18073100)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18073100)
*   [开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18073100)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18073100)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18073100)
*   [小游戏数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18073100)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18073100)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18073100)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/analysis/index.html?t=18073100)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title icon_doc"></span>

微信小游戏数据分析

</div>

*   [功能概述](.)
*   [常规分析](./Analysis.html)
*   [小游戏数据助手](./assistant.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18073100)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/analysis/index.html?t=18073100)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">数据分析首页</span></a></div>

<nav role="navigation">

*   [功能概述](.#功能概述)
*   [名词解释](.#名词解释)
*   [指标解释](.#指标解释)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 功能概述

小游戏数据分析，是面向小游戏开发者、运营者的数据分析工具，提供关键指标统计、实时访问监控、收入分析等，帮助小游戏迭代优化和运营。主要功能包括每日例行统计的标准分析和趋势分析。

## 常规分析

**概况**：提供小游戏关键指标趋势以及top页面访问数据，快速了解小游戏概况；

**访问分析**：提供小游戏用户访问规模、来源、频次、时长、深度、留存以及页面详情等数据，具体分析用户新增、活跃和留存情况；

**实时统计**：提供小游戏实时访问数据，满足实时监控需求；

**收入分析**：提供小游戏收入数据，包括单日总收入、首次付费用户、付费渗透率等；

**用户画像**：提供小游戏的用户画像数据，包括用户年龄、性别、地区、终端及机型分布。

# 名词解释

**用户**：使用过小游戏的微信用户，根据openid来判断。

**页面**：小程序的页面，以页面路径表示，如index,  product/list。

**受访页**：用户访问的所有小程序页面均可称为受访页。

**入口页**：用户打开小程序时首先进入的页面称为入口页，例如用户从页面A进入小程序，跳转到页面B，A为入口页，B不是。

**退出页**：用户离开小程序时最后访问的页面称为退出页，例如用户从页面A跳转到页面B，从页面B退出小程序，B为退出页，A不是

**场景**：用户打开小游戏时的场景，如通过扫描二维码打开小程序，场景为二维码。

**访问**：用户浏览小游戏的行为。

**分享**：用户点击小游戏内或小游戏外菜单，将小游戏及其页面分享给好友的行为。

**新增**：用户首次访问小游戏，即称为新增。

**活跃**：用户在一段时间内访问过小游戏即称为活跃。

**留存**：某个时间段内新增或活跃的用户，经过一段时间后仍然使用小游戏，即称为留存。

**事件**：自定义分析中进行用户行为数据收集和分析的模型，表示某个用户行为。

# 指标解释

**累计注册用户数**：历史累计登录的用户数，同一用户多次访问不重复计。

**活跃用户数**：访问小游戏的总用户数，同一用户多次访问不重复计。

**新增注册用户数**：首次登录的用户数，同一用户多次访问不重复计。

**人均停留时长**：平均每个用户停留在小游戏的总时长，即小游戏停留总时长/访问人数。

**活跃用户数**：登录小游戏的总用户数，同一用户多次访问不重复计。

**新增注册用户数**：首次登录的用户数，同一用户多次访问不重复计。

**付费用户数**：在小游戏内付费的用户数，同一用户多次付费不重复计。

**首次付费用户数**：首次在小游戏内付费的用户数，同一用户多次付费不重复计。

**单日总收入**：所有用户在小游戏内付费总金额。

**单日安卓收入**：安卓平台，所有用户在小游戏内付费总金额。

**单日iOS收入**：iOS平台，所有用户在小游戏内付费总金额。

**单日新增付费用户收入**：首次在小游戏付费的用户，在小游戏内付费总金额。

**实时访问次数**：实时数据处理同步可能有15分钟以内的延迟，只统计已发布的线上版本使用数据。

**累计注册用户数**：历史累计登录的用户数，同一用户多次访问不重复计。

**活跃用户数**：访问小游戏的总用户数，同一用户多次访问不重复计。

**访问次数**：访问小游戏总次数，用户每打开小游戏计为一次。

**新增注册用户数**：首次登录的用户数，同一用户多次访问不重复计。

**人均停留时长**：平均每个用户停留在小游戏的总时长，即小游戏停留总时长/访问人数。

**分享次数**：分享小游戏的总次数。

**分享用户数**：分享小游戏的总用户数，同一用户多次分享不重复计。

**新增用户留存**：指定时间新增（即首次访问小游戏）的用户，在之后的第N天（或周、月），再次访问小游戏的用户数占比。

**活跃用户留存**：指定时间活跃（即访问小游戏）的用户，在之后的第N天（或周、月），再次访问小游戏的用户数占比。

**付费新增用户留存**：指定时间新增（即首次访问小游戏）的付费用户，在之后的第N天（或周、月），再次访问小游戏的用户数占比。

**付费活跃用户留存**：指定时间活跃（即访问小游戏）的付费用户，在之后的第N天（或周、月），再次访问小游戏的用户数占比。

**单日总收入**：所有用户在小游戏内付费总金额。

**累计总收入**：历史累计所有用户在小游戏内付费总金额。

**付费用户数**：在小游戏内付费的用户数，同一用户多次付费不重复计。

**首次付费用户数**：首次在小游戏内付费的用户数，同一用户多次付费不重复计。

**渗透率**：平均付费用户数的比例，即当天付费用户数/当天活跃用户数。

**平均付费用户收入**：平均每个付费用户数付费金额，即小游戏收入/小游戏付费用户数。

**平均用户收入**：平均每个用户数付费金额，即小游戏收入/小游戏注册用户数。

**首付占比**：平均首次付费用户数占付费用户数比例，即首次付费用户数/付费用户数。

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

*   [关于腾讯](https://www.tencent.com/zh-cn/index.html)
*   [文档中心](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=1484641676)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./Analysis.html)</div>

</div>