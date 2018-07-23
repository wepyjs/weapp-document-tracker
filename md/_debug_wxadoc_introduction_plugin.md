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
*   [社区](https://developers.weixin.qq.com/)

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

*   [微信小程序接入指南](./)
*   [客服功能使用指南](custom.html)
*   [扫码打开小程序接入指南](qrcode.html)
*   [插件接入指南](plugin.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [小程序插件功能介绍](plugin.html#小程序插件功能介绍)
*   [开发插件](plugin.html#开发插件)
    *   [开放范围及服务类目](plugin.html#开放范围及服务类目)
    *   [插件开发流程](plugin.html#插件开发流程)
*   [使用插件](plugin.html#使用插件)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 小程序插件功能介绍

插件，是可被添加到小程序内直接使用的功能组件。开发者可以像开发小程序一样开发一个插件，供其他小程序使用。同时，小程序开发者可直接在小程序内使用插件，无需重复开发，为用户提供更丰富的服务。

如需开发插件，请阅读[开发插件](#开发插件)部分；如需使用插件，请阅读[使用插件](#使用插件)部分。

## 开发插件

### 开放范围及服务类目

开放范围：企业、媒体、政府及其他组织主体的小程序

开发者可选择当前小程序帐号已选类目中的一个，作为插件的服务类目。以下为当前已开放的插件服务类目，将逐步开放更多类目。

<table>

<thead>

<tr>

<th>一级类目</th>

<th style="text-align:left">二级类目</th>

<th>特殊说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>快递业与邮政</td>

<td style="text-align:left">所有二级类目</td>

<td></td>

</tr>

<tr>

<td>医疗</td>

<td style="text-align:left">就医服务、互联网医院</td>

<td>仅医疗类小程序可使用</td>

</tr>

<tr>

<td>政务民生</td>

<td style="text-align:left">所有二级类目</td>

<td></td>

</tr>

<tr>

<td>金融业</td>

<td style="text-align:left">征信业务</td>

<td></td>

</tr>

<tr>

<td>出行与交通</td>

<td style="text-align:left">所有二级类目</td>

<td></td>

</tr>

<tr>

<td>生活服务</td>

<td style="text-align:left">票务、生活缴费</td>

<td></td>

</tr>

<tr>

<td>IT科技</td>

<td style="text-align:left">所有二级类目</td>

<td></td>

</tr>

<tr>

<td>餐饮</td>

<td style="text-align:left">点评与推荐、菜谱、餐厅排队、点餐平台、外卖平台</td>

<td></td>

</tr>

<tr>

<td>旅游</td>

<td style="text-align:left">所有二级类目</td>

<td></td>

</tr>

<tr>

<td>文娱</td>

<td style="text-align:left">视频、FM/电台、音乐、有声读物、动漫</td>

<td></td>

</tr>

<tr>

<td>工具</td>

<td style="text-align:left">记账、投票、日历、天气、备忘录、办公、字典、计算类、报价/比价、发票查询、企业管理</td>

<td></td>

</tr>

<tr>

<td>电商平台</td>

<td style="text-align:left">电商平台</td>

<td></td>

</tr>

<tr>

<td>商业服务</td>

<td style="text-align:left">招聘/求职</td>

<td></td>

</tr>

<tr>

<td>汽车</td>

<td style="text-align:left">所有二级类目</td>

</tr>

</tbody>

</table>

### 插件开发流程

以下为插件开发接入流程：

1.  [开通插件功能](#开通插件功能)
2.  [填写开发信息并开发](#填写开发信息并完成开发)
3.  [提交审核、发布](#提交审核、发布)
4.  [管理插件使用申请](#管理插件使用申请)

#### 开通插件功能

小程序开发者无需重新注册帐号，可直接在小程序管理后台开通插件功能，完成基本信息填写后完成开通。

开通入口：小程序管理后台-小程序插件

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_1.png)

填写插件基本信息，插件的基本信息将在插件申请流程、小程序基本信息页中展示。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_2.png)

#### 填写开发信息并完成开发

设置插件的服务器域名及Token信息后，即可在开发者工具中开发插件。

开发者工具内设置请见：[《插件开发指南》](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/plugin.html)

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_3.png)

#### 插件版本管理

开发者可在开发者工具内上传代码并在小程序插件开发助手内完成插件的开发和调试。请注意：插件暂不支持在体验版中体验

在开发者工具上传代码后，开发者可”小程序管理后台-小程序插件-开发管理“内管理插件版本。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_4.png)

#### 提交版本审核

插件发布前需要提交微信小程序团队审核，审核通过后才可发布。

提交审核时，插件开发者需要填写以下信息：插件服务类目、标签及功能描述。

插件服务类目：插件可从当前小程序已通过的服务类目中选择一个。已开放类目表格见[插件开放范围及类目](#开放范围及服务类目)。

标签：请填写与插件提供的服务相关的标签

功能描述：为便于审核团队体验及审核插件功能，请开发者填写基本介绍及插件的使用说明。

#### 版本发布

插件审核通过后，可在管理后台操作发布。插件发布后才可以被其他小程序搜索并添加。

插件支持多个线上版本同时存在。

#### 使用申请管理

小程序使用插件需要经过插件开发者的同意。

开发者可在”小程序管理后台-小程序插件-申请管理“内处理插件的接入申请。插件开发者可在24小时内选择”通过“或”拒绝“申请方使用插件。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_5.png)

## 使用插件

小程序开发者可便捷地把插件添加到自己的小程序内，丰富小程序的服务。当用户在使用小程序时，将可以在小程序内使用插件提供的服务。

#### 开放范围

所有小程序

#### 接入流程

1.  在小程序管理后台添加插件

    小程序开发者可在“小程序管理后台-设置-第三方服务-插件管理”中查找需要的插件，并申请使用。插件开发者在24小时内通过后，小程序开发者可在小程序内使用该插件。

    ![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_6.png)

2.  在小程序代码中使用插件

    详见[《插件开发文档》](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/plugin/index.html)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](qrcode.html#发布)</div>

</div>