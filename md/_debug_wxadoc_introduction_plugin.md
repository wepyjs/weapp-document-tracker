<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [小程序介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18101516)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18101516)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18101516)
*   [开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101516)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18101516)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18101516)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18101516)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18101516)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/plugin.html?t=18101516)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/plugin.html?t=18101516)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/plugin.html?t=18101516)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/plugin.html?t=18101516)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [小程序插件功能介绍](./plugin.html#小程序插件功能介绍)
*   [开发插件](./plugin.html#开发插件)
    *   [开放范围及服务类目](./plugin.html#开放范围及服务类目)
    *   [插件开发接入流程](./plugin.html#插件开发接入流程)
        *   [开通插件功能](./plugin.html#开通插件功能)
        *   [填写开发信息并完成开发](./plugin.html#填写开发信息并完成开发)
        *   [完善基本信息](./plugin.html#完善基本信息)
        *   [插件版本管理](./plugin.html#插件版本管理)
        *   [使用申请管理](./plugin.html#使用申请管理)
*   [插件支付功能简介](./plugin.html#插件支付功能简介)
*   [使用插件](./plugin.html#使用插件)
    *   [开放范围](./plugin.html#开放范围)
    *   [接入流程](./plugin.html#接入流程)

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

开放范围：企业、媒体、政府及其他组织主体

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

<td>教育</td>

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

<td style="text-align:left">征信业务、保险</td>

<td></td>

</tr>

<tr>

<td>出行与交通</td>

<td style="text-align:left">所有二级类目</td>

<td></td>

</tr>

<tr>

<td>生活服务</td>

<td style="text-align:left">票务、生活缴费、休闲娱乐</td>

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

<td style="text-align:left">记账、投票、日历、天气、备忘录、办公、字典、计算类、报价/比价、发票查询、企业管理、预约/报名、图片/音频/视频、信息查询</td>

<td></td>

</tr>

<tr>

<td>电商平台</td>

<td style="text-align:left">电商平台</td>

<td></td>

</tr>

<tr>

<td>社交</td>

<td style="text-align:left">笔记、问答、社区/论坛、陌生人社交</td>

<td>仅限社交类目小程序使用</td>

</tr>

<tr>

<td>社交</td>

<td style="text-align:left">直播</td>

<td>仅限电商平台、教育类目小程序使用</td>

</tr>

<tr>

<td>商业服务</td>

<td style="text-align:left">招聘/求职</td>

<td></td>

</tr>

<tr>

<td>汽车</td>

<td style="text-align:left">所有二级类目</td>

<td></td>

</tr>

</tbody>

</table>

### 插件开发接入流程

以下为插件开发接入流程：

1.  [开通插件功能](#开通插件功能)
2.  [填写开发信息并开发](#填写开发信息并完成开发)
3.  [完善基本信息](#完善基本信息)
4.  [提交审核、发布](#提交审核、发布)
5.  [管理插件使用申请](#管理插件使用申请)

#### 开通插件功能

小程序开发者无需重新注册帐号，可直接在小程序管理后台开通插件功能，完成基本信息填写后完成开通。

开通入口：小程序管理后台-小程序插件

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_1.png?t=18101516)

填写插件基本信息，插件的基本信息将在插件申请流程、小程序基本信息页中展示。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_2.png?t=18101516)

#### 填写开发信息并完成开发

设置插件的服务器域名及Token信息后，即可在开发者工具中开发插件。

开发者工具内设置请见：[《插件开发指南》](https://developers.weixin.qq.com/miniprogram/dev/devtools/plugin.html?t=18101516)

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_3.png?t=18101516)

#### 完善基本信息

插件在提交审核前，请确认已设置插件名称、插件头像、插件简介等信息，并已上传插件开发文档，便于开发者接入插件。

##### 基本信息完善

登录小程序管理后台-小程序插件-基本设置，确认名称、头像、简介、添加方式、客服联系方式等信息都已完备。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/plugin1.png?t=18101516)

##### 插件开发文档编辑、上传

为便于小程序开发者快速接入插件服务，插件开发者可上传、发布插件开发文档，供接入方查看。

**（1）编辑**

除了插件代码本身，小程序开发者可以另外上传一份插件开发文档。这份文档必须放置在插件项目根目录中的 `doc` 目录下，目录结构如下：

    doc
    ├── README.md   // 插件文档，应为 markdown 格式
    └── picture.jpg // 其他资源文件，仅支持图片

其中，引用到的图片资源不能是网络图片，必须放在这个目录下。

**（2）上传**

编辑 `README.md` 之后，可以使用开发者工具预览插件文档和单独上传插件文档。

上传入口位置：README.md文档右下角

![](https://developers.weixin.qq.com/miniprogram/introduction/image/plugin2.png?t=18101516)

**（3）发布**

在开发者工具中上传文档之后，文档不会立刻发布。此时可以使用帐号和密码登录 [插件管理后台](https://mp.weixin.qq.com/) ，在 小程序插件 > 基本设置 中预览、发布插件文档。

文档发布后，可多次更新修改。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/plugin3.png?t=18101516)

#### 插件版本管理

开发者可在开发者工具内上传代码并在小程序插件开发助手内完成插件的开发和调试。请注意：插件暂不支持在体验版中体验

在开发者工具上传代码后，开发者可”小程序管理后台-小程序插件-开发管理“内管理插件版本。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_4.png?t=18101516)

插件发布前需要提交微信小程序团队审核，审核通过后才可发布。

提交审核时，插件开发者需要填写以下信息：插件服务类目、标签、预览图及功能描述。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/plugin4.png?t=18101516)

插件服务类目：插件可从当前小程序已通过的服务类目中选择一个。已开放类目表格见[插件开放范围及类目](#开放范围及服务类目)。

标签：请填写与插件提供的服务相关的标签。

预览图：可上传插件的预览图，发布后将展示在插件详情页帮助用户提前了解插件功能

功能描述：为便于审核团队体验及审核插件功能，请开发者填写基本介绍及插件的使用说明。

#### 使用申请管理

开发者可在”小程序管理后台-小程序插件-申请管理“内处理插件的接入申请。插件开发者可在24小时内选择”通过“或”拒绝“申请方使用插件。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_5.png?t=18101516)

## 插件支付功能简介

插件内可使用支付能力，帮助插件开发者完成服务闭环。

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p22.png?t=18101516)

以下为接入流程

（1）插件所在小程序开通微信支付能力，查看[小程序开通微信支付指南](https://developers.weixin.qq.com/miniprogram/introduction/?t=18101516#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%94%B3%E8%AF%B7%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98)

（2）根据使用场景，参照下表选择合适的支付模式

<table>

<thead>

<tr>

<th>支付模式</th>

<th>适用范围</th>

<th>典型使用场景</th>

<th>接入流程</th>

</tr>

</thead>

<tbody>

<tr>

<td>服务商</td>

<td>插件内涉及为入驻商家提供商品销售、代收款等服务，即销售的商品不是插件开发者提供的。</td>

<td>电商平台为入驻商户提供货架、购物车等服务；餐饮平台为线下入驻商户提供点餐、买单服务</td>

<td>1\. 申请成为微信支付服务商，查看[《微信支付服务商功能介绍》](http://kf.qq.com/faq/161220euUvyE161220riaMrI.html)、[《微信支付服务商接入指引》](http://kf.qq.com/faq/161220iqeAfA1612202yeURB.html)  
2\. 为商户创建子商户号  
3\. 绑定子商户号及插件所在的小程序帐号，查看[《开发文档》](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=20_3&index=3)  
4\. 在插件内使用子商户号发起支付</td>

</tr>

<tr>

<td>普通商户</td>

<td>插件内付费服务/商品由插件开发者生产、销售</td>

<td></td>

<td>在插件支付申请页面，必须提供已有线上服务信息（包括但不限于公众号、网站、APP、小程序等），并提供自营货品生产、销售等证明材料，如采购发票等。</td>

</tr>

</tbody>

</table>

（3）在插件管理后台提交插件支付能力申请，审核通过后将可在插件内使用微信支付能力

![](https://developers.weixin.qq.com/miniprogram/introduction/image/p66.png?t=18101516)

## 使用插件

小程序开发者可便捷地把插件添加到自己的小程序内，丰富小程序的服务。当用户在使用小程序时，将可以在小程序内使用插件提供的服务。

#### 开放范围

所有小程序

#### 接入流程

1.  在小程序管理后台添加插件

    小程序开发者可在“小程序管理后台-设置-第三方服务-插件管理”中查找需要的插件，并申请使用。插件开发者在24小时内通过后，小程序开发者可在小程序内使用该插件。

    ![](https://developers.weixin.qq.com/miniprogram/introduction/image/p_6.png?t=18101516)

2.  在小程序代码中使用插件

    详见[《插件开发文档》](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/index.html?t=18101516)

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

[](./qrcode.html)</div>

</div>