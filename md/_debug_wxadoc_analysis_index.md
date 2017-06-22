<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)

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

*   [功能概述](./)
*   [常规分析](regular/)
*   [自定义分析](custom/)
*   [小程序数据助手](assistant/)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s undefined"></span><span class="s_title_2">数据分析首页</span></a></div>

<nav role="navigation">

*   [功能概述](./#功能概述)
*   [名词解释](./#名词解释)
*   [指标解释](./#指标解释)

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

小程序数据分析，是面向小程序开发者、运营者的数据分析工具，提供关键指标统计、实时访问监控、自定义分析等，帮助小程序产品迭代优化和运营。主要功能包括每日例行统计的标准分析，以及满足用户个性化需求的自定义分析。

## 常规分析

**概况：**提供小程序关键指标趋势以及top页面访问数据，快速了解小程序发展概况；

**访问分析：**提供小程序用户访问规模、来源、频次、时长、深度、留存以及页面详情等数据，具体分析用户新增、活跃和留存情况；

**实时统计：**提供小程序实时访问数据，满足实时监控需求；

**用户画像：**提供小程序的用户画像数据，包括用户年龄、性别、地区、终端及机型分布。

详情查看[常规分析](https://mp.weixin.qq.com/debug/wxadoc/analysis/regular/)

## 自定义分析

**自定义分析：**配置自定义上报，精细跟踪用户在小程序内的行为，结合用户属性、系统属性、事件属性进行灵活多维的事件分析和漏斗分析，满足小程序的个性化分析需求。

详情查看[自定义分析](https://mp.weixin.qq.com/debug/wxadoc/analysis/custom/)

# 名词解释

**用户：**使用过小程序的微信用户，根据openid来判断。

**页面：**小程序的页面，以页面路径表示，如index, product/list。

**受访页：**用户访问的所有小程序页面均可称为受访页。

**入口页：**用户打开小程序时首先进入的页面称为入口页，例如用户从页面A进入小程序，跳转到页面B，A为入口页，B不是。

**退出页：**用户离开小程序时最后访问的页面称为退出页，例如用户从页面A跳转到页面B，从页面B退出小程序，B为退出页，A不是

**场景：**用户打开小程序时的场景，如通过扫描二维码打开小程序，场景为二维码。

**访问：**用户浏览小程序页面的行为。

**分享：**用户点击小程序内或小程序外菜单，将小程序及其页面分享给好友的行为。

**新增：**用户首次访问小程序页面，即称为新增。_**_

**活跃：**用户在一段时间内访问过小程序即称为活跃。

**停留：**用户从打开小程序内页面，到主动关闭或超时退出小程序的过程。切换到后台、显示到聊天顶部，均不算停留在小程序。

**留存：**区分新增留存和活跃留存，某个时间段内新增或活跃的用户，经过一段时间后仍然使用小程序，即称为留存。

**事件：**自定义分析中进行用户行为数据收集和分析的模型，表示某个用户行为。

**漏斗：**自定义分析中由一系列事件组成的数据分析模型，用于分析业务流程中每个步骤的用户转化与流失。

# 指标解释

**打开次数：**打开小程序总次数。用户从打开小程序到主动关闭或超时退出小程序的过程，计为一次。

**访问次数：**访问小程序页面的总次数。多个页面之间跳转、同一页面的重复访问计为多次访问。

**访问人数：**访问小程序页面的总用户数，同一用户多次访问不重复计。

**新用户数：**首次访问小程序页面的用户数，同一用户多次访问不重复计。

**人均停留时长：**平均每个用户停留在小程序页面的总时长，即总停留时长/访问人数。

**次均停留时长：**平均每次打开小程序停留在小程序页面的总时长，即总停留时长/打开次数。

**平均访问深度：**平均每次打开小程序访问的去重页面数。

**入口页次数：**小程序页面作为入口页的访问次数，例如用户从页面A进入小程序，跳转到页面B，A为入口页，B不是。

**退出页次数：**小程序页面作为退出页的访问次数，例如用户从页面A跳转到页面B，从页面B退出小程序，B为退出页，A不是。

**退出率：**小程序页面作为退出页的访问次数占比，即退出页次数/访问次数。

**分享次数：**分享小程序页面的总次数。

**分享人数：**分享小程序页面的总人数，同一用户多次分享不重复计。

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

[](./#功能概述)</div>

</div>