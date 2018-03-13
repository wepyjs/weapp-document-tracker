<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)

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
*   [腾讯云支持](qcloud.html)
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

*   [功能介绍](custom.html#功能介绍)
*   [下发条件说明](custom.html#下发条件说明)
*   [调用客服消息接口发送客服消息](custom.html#调用客服消息接口发送客服消息)
    *   [填写消息推送配置](custom.html#填写消息推送配置)
    *   [接口调用](custom.html#接口调用)
*   [网页版客服工具](custom.html#网页版客服工具)
    *   [绑定客服人员](custom.html#绑定客服人员)
    *   [客服工具使用说明](custom.html#客服工具使用说明)
        *   [登录并接入](custom.html#登录并接入)
        *   [切换客服状态](custom.html#切换客服状态)
        *   [接收消息](custom.html#接收消息)
        *   [发送消息](custom.html#发送消息)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 客服消息使用指南

为丰富小程序的服务能力，提高服务质量，微信为小程序提供客服消息能力，以便小程序用户可以方便快捷地与小程序服务提供方进行沟通。

## 功能介绍

用户可使用小程序客服消息功能，与小程序的客服人员进行沟通。

客服消息会话入口有两个：

1、小程序内：开发者在小程序内添加[客服消息按钮组件](https://mp.weixin.qq.com/debug/wxadoc/dev/component/contact-button.html)，用户可在小程序内唤起客服会话页面，给小程序发消息；

2、已使用过的小程序客服消息会聚合显示在微信会话“小程序客服消息”内，用户可以在小程序外查看历史客服消息，并给小程序客服发消息。

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/x11.png)

客服消息下发条件：小程序用户在小程序内唤起客服会话或用户给小程序客服发送消息，具体下发时间有效期及消息条数限制见客服消息[下发条件说明](#下发条件说明)

客服消息类型：目前支持文本及图片类型消息

为尽量满足小程序开发者的需求，小程序可通过以下两种方式下发客服消息：1、调用发送客服消息接口；2、使用公众平台网页版客服工具

## 下发条件说明

当用户和小程序客服产生特定动作的交互时（具体动作列表请见下方说明），小程序可向用户下发客服消息。

目前允许的动作列表如下，不同动作触发后，允许下发消息条数和下发时限不同。下发条数达到上限后，会返回错误码。

<table>

<thead>

<tr>

<th>用户动作</th>

<th>允许下发条数限制</th>

<th>下发时限</th>

</tr>

</thead>

<tbody>

<tr>

<td>用户通过客服消息按钮进入会话</td>

<td>1条</td>

<td>1分钟</td>

</tr>

<tr>

<td>用户发送信息</td>

<td>5条</td>

<td>48小时</td>

</tr>

</tbody>

</table>

可发送客服消息条数不累加，上述用户动作会触发可下发条数及可下发时限的更新，可下发消息条数更新为当前可下发条数限制的最大值，有效下发时间限制也更新为最长有效时间。

## 调用客服消息接口发送客服消息

当用户在小程序内打开客服会话，或是给小程序客服发消息，微信服务器会将消息（或事件）的数据包（JSON或者XML格式）POST到开发者填写的URL。开发者收到请求后可以调用接口进行异步回复。

**如小程序的客服消息权限集已授权给第三方平台，则所有的客服消息将推送到第三方平台的服务器，不再推送到开发者的服务器或推送到网页版客服工具**

### 填写消息推送配置

登录小程序，在“设置-开发设置-消息推送”启用消息推送功能并完成相关信息配置（包括服务器地址、Token、及加密方式等）。

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/c1.png)

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/b1.png)

启用并设置服务器配置后，用户发送的消息以及开发者需要的事件推送，都将被微信转发至开发者URL中。

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/d1.png)

### 接口调用

[小程序客服消息API文档](https://mp.weixin.qq.com/debug/wxadoc/dev/api/custommsg/receive.html)

## 网页版客服工具

小程序也可以直接使用[微信公众平台网页版客服工具](https://mpkf.weixin.qq.com)进行客服消息回复。

若小程序没有启用消息推送，则用户发送的消息将会被转发至网页版客服工具，客服人员可在网页版客服工具中接入并回复用户。

**如小程序的客服消息权限集已授权给第三方平台，则所有的客服消息将推送到第三方平台的服务器，不再推送到开发者的服务器或推送到网页版客服工具。**

**注意：“用户通过客服消息按钮进入会话”事件将不会转发至网页版客服工具。**

### 绑定客服人员

使用网页版客服工具前，小程序管理员需在小程序后台完成客服人员的绑定。目前小程序支持绑定不多于100个客服人员。

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/a1.png)

### 客服工具使用说明

#### 登录并接入

已被绑定的小程序客服人员可扫码登录[微信公众平台网页版客服工具](https://mpkf.weixin.qq.com)，并选择对应的小程序帐号，登录后即可看到与小程序对话的用户，可选择接入对话。

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/i1.png)

#### 切换客服状态

点击在线状态，可以选择在线状态、离开状态或退出登录

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/f1.png)

#### 接收消息

手动接入：客服人员上线后，点击“待接入”，即可在“待接入”列表中，手动接入待回复的对话

自动接入：当待接入的对话太多时，可以在设置/接入设置中，开启自动接入

重新接入：退出登录，或对话超过半小时，需要重新接入，激活对话

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/m1.png)

#### 发送消息

已经接入的会话，客服人员可以在48小时内和用户进行对话，目前支持发送文本、图片类型的消息。

![](https://mp.weixin.qq.com/debug/wxadoc/introduction/image/h1.png)

## 使用规范

小程序客服消息使用除必须遵守[微信小程序平台运营规范](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)外，还不能违反以下规则，包括但不限于：

1.  不允许恶意诱导用户进行可能触发客服消息下发的操作，以达到可向用户下发客服消息目的
2.  不允许恶意骚扰，下发与用户发送的消息没有关联的、对用户造成骚扰的消息
3.  不允许恶意营销，下发内容涉嫌虚假夸大、违法类营销信息
4.  不允许使用客服消息向用户下发虚假、色情、暴力等违反国家法律规定的信息

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

[](./#公众号关联小程序)[](custom.html#功能介绍)</div>

</div>