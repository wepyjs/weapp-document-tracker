<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [小程序介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18101612)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18101612)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18101612)
*   [开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101612)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18101612)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18101612)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18101612)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18101612)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/qrcode.html?t=18101612)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/qrcode.html?t=18101612)

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

*   [微信小程序接入指南](.)
*   [客服功能使用指南](./custom.html)
*   [扫码打开小程序接入指南](./qrcode.html)
*   [插件接入指南](./plugin.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/qrcode.html?t=18101612)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/qrcode.html?t=18101612)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [功能介绍](./qrcode.html#功能介绍)
*   [开放范围](./qrcode.html#开放范围)
*   [二维码跳转规则](./qrcode.html#二维码跳转规则)
*   [二维码内容获取](./qrcode.html#二维码内容获取)
*   [配置流程](./qrcode.html#配置流程)
    *   [二维码规则](./qrcode.html#二维码规则)
    *   [前缀占用规则](./qrcode.html#前缀占用规则)
    *   [校验文件](./qrcode.html#校验文件)
    *   [小程序功能页面](./qrcode.html#小程序功能页面)
    *   [测试调试](./qrcode.html#测试调试)
        *   [测试链接](./qrcode.html#测试链接)
        *   [测试范围](./qrcode.html#测试范围)
    *   [发布](./qrcode.html#发布)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 扫普通链接二维码打开小程序

为了方便小程序开发者更便捷地推广小程序，兼容线下已有的二维码，微信公众平台开放扫描普通链接二维码跳转小程序能力。

## 功能介绍

普通链接二维码，是指开发者使用工具对网页链接进行编码后生成的二维码。

线下商户可不需更换线下二维码，在小程序后台完成配置后，即可在用户扫描普通链接二维码时打开小程序，使用小程序的功能。

对于普通链接二维码，目前支持使用微信“扫一扫”或微信内长按识别二维码跳转小程序。

## 开放范围

企业、媒体、政府及其他组织类型小程序。

## 二维码跳转规则

注意：从2017年5月开始，微信客户端支持二维码规则根据“子路径匹配”。如原有二维码链接为 `http://www.qq.com/a/123456` ，其中12345为业务参数，则可配置规则 `http://www.qq.com/a/` 实现扫码打开小程序。

微信客户端扫码将按以下匹配规则控制跳转：

1.  二维码链接的协议、域名与已配置的二维码规则一致。
2.  二维码链接属于后台配置的二维码规则的子路径。（如需支持子路径匹配，请确认后台配置的二维码规则以`/`结尾）
3.  如果二维码规则包含参数，链接`?`后为参数部分，参数要求前缀匹配。

常见匹配错误类型：

<table>

<thead>

<tr>

<th style="text-align:center">**后台已配置的二维码规则**</th>

<th style="text-align:center">**线下二维码完整链接**</th>

<th>错误原因</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:center">http://www.qq.com/a/b</td>

<td style="text-align:center">https://www.qq.com/a/b</td>

<td>协议不一致</td>

</tr>

<tr>

<td style="text-align:center">https://www.qq.com/a/b</td>

<td style="text-align:center">https://www.weixin.qq.com/a/b</td>

<td>域名不一</td>

</tr>

<tr>

<td style="text-align:center">https://www.qq.com/a/b?id=123</td>

<td style="text-align:center">https://www.qq.com/a/b?id=132</td>

<td>参数不满足前缀匹配</td>

</tr>

<tr>

<td style="text-align:center">https://www.qq.com/a/b</td>

<td style="text-align:center">https://www.qq.com/a/bc</td>

<td>不属于子路径</td>

</tr>

<tr>

<td style="text-align:center">https://www.qq.com/a/b</td>

<td style="text-align:center">https://www.qq.com/a/b/123</td>

<td>规则没有以`/`结尾，不支持子路径匹配</td>

</tr>

</tbody>

</table>

## 二维码内容获取

在小程序后台配置二维码跳转小程序规则之后即可使用微信（6.5.6及其以上客户端版本）扫码打开小程序。

二维码链接内容会以参数`q`的形式带给页面，在onLoad事件中提取`q`参数并自行`decodeURIComponent`一次，即可获取原二维码的完整内容。

## 配置流程

登录小程序后台，进入“设置-开发设置-扫普通链接二维码打开小程序”，开启功能后即可配置二维码规则。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/qrcode0.png?t=18101612)

![](https://developers.weixin.qq.com/miniprogram/introduction/image/qrcode1.png?t=18101612)

### 二维码规则

根据二维码跳转规则，开发者需要填写需要跳转小程序的二维码规则。要求如下：

1.  二维码规则的域名须通过ICP备案的验证。

2.  支持http、https、ftp开头的链接（如：`http://wx.qq.com`、`https://wx.qq.com/mp/`、`https://wx.qq.com/mp?id=123`）。

3.  一个小程序帐号可配置不多于10个二维码前缀规则。

### 前缀占用规则

开发者可选择是否占用符合二维码匹配规则的所有子规则。如选择占用，则其他帐号不可申请使用满足该前缀匹配规则的其他子规则。

如：若开发者A配置二维码规则：`https://wx.qq.com/mp?id=123`，并选择“占用所有子规则“，其他开发者将不可以配置满足前缀匹配的子规则如`https://wx.qq.com/mp?id=1234`。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/qrcode5.png?t=18101612)

如提示“此规则已被占用”，请联系对应小程序开发者沟通解决。

### 校验文件

下载随机校验文件，并将文件上传至服务器指定位置的目录下，方可通过所属权校验。

验证文件放置规则： 放置于URL中声明的最后一级子目录下，若无子目录，则放置于host所属服务器的顶层目录下。请根据页面提示将验证文件放置在指定的目录下。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/qrcode3.png?t=18101612)

### 小程序功能页面

配置扫描二维码后打开的小程序功能页面路径，如：`pages/index/index`。

### 测试调试

开发者可对已配置的二维码规则进行测试和调试。

测试仅对指定的测试链接和测试范围内的微信用户生效，其他用户扫码后跳转网页，不影响全网用户正常使用。在二维码规则发布后，开发者仍然可以选择在指定版本（开发版/体验版/线上版本）下测试。

#### 测试范围

开发者可根据开发进度选择在开发板/体验版/线上版本测试“普通二维码跳转小程序”的功能。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/qrcode7.png?t=18101612)

#### 测试链接

填写符合二维码前缀匹配规则的二维码完整链接用于测试，如包括参数，请完整填写。

一个规则可以填写不多于5个测试链接，可多次修改。若二维码与测试链接匹配，且用户微信号是小程序指定的管理员/开发者/体验者，将打开指定版本的小程序。

### 发布

测试完成后开发者可将二维码跳转规则发布现网，发布后扫描所有符合匹配规则的二维码，将跳转至指定的小程序页面。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/qrcode4.png?t=18101612)

为确保用户体验，小程序必须先发布代码才可以发布二维码跳转规则。

一个小程序帐号一个月可发布不多于20次二维码跳转规则。

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

[](./custom.html)[](./plugin.html)</div>

</div>