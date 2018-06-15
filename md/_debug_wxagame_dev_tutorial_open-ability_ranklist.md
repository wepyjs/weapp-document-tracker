<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小游戏开发](javascript:;)
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

<div class="top_title_wap"><span class="icon_title icon_dev"></span>

微信小游戏开发文档

</div>

*   [教程](../ad/banner-ad.html)
*   [API](../../document/render/canvas/wx.createCanvas.html)
*   [工具](../../devtools/devtools.html)
*   [腾讯云支持](../../qcloud/qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [广告](../ad/banner-ad.html)
    *   [Banner 广告](../ad/banner-ad.html)
    *   [激励视频广告](../ad/rewarded-video-ad.html)
*   [基础](../../)
    *   [快速上手](../../)
    *   [Adapter](../base/adapter.html)
    *   [对引擎的支持](../base/engine.html)
    *   [模块化](../base/module.html)
    *   [分包加载](../base/subpackages.html)
*   [能力](../ability/audio.html)
    *   [音频播放](../ability/audio.html)
    *   [文件系统](../ability/file-system.html)
*   [可用性](../usability/debug.html)
    *   [调试](../usability/debug.html)
    *   [性能](../usability/performance.html)
    *   [小游戏更新](../usability/update.html)
    *   [多线程 Worker](../usability/worker.html)
*   [开放能力](authorize.html)
    *   [用户授权](authorize.html)
    *   [游戏圈使用指南](game-club.html)
    *   [用户登录态签名](http-signature.html)
    *   [米大师支付签名](midas-signature.html)
    *   [关系链数据使用指南](open-data.html)
    *   [虚拟支付](payment.html)
    *   [获取二维码](qrcode.html)
    *   [排行榜配置指引](ranklist.html)
    *   [转发](share.html)
    *   [用户数据的签名验证和加解密](signature.html)
    *   [UnionID 机制说明](union-id.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 排行榜配置指引

### 定义

此处配置的排行榜是指：由开发者按标准格式要求数据上报后，在搜索、小游戏中心等微信场景下，可以展现同玩好友的排行榜。

注：该配置只影响搜索、小游戏中心的排行榜展现。并不影响利用托管数据、主域和开放数据域的方式实现的游戏内好友排行榜。

### 场景

该配置影响的场景目前有：微信搜索、小游戏中心。

*   微信搜索

![search](../../image/search.png)

*   小游戏中心

![PortalRankList1](../../image/PortalRankList1.png)

![PortalRankList2](../../image/PortalRankList2.png)

### 配置步骤与相关字段说明

#### 1\. 完成规范格式的后台数据上报

上报接口文档地址：[wx.setUserCloudStorage](../../document/open-api/data/wx.setUserCloudStorage.html) （前端接口)、[setUserStorage](../../document/open-api/data/setUserStorage.html) （后台接口)

#### 2\. 登录mp管理后台后，在游戏设置-排行榜配置中完成配置

![RanklistConfig](../../image/RankListConfig.png)

<table>

<thead>

<tr>

<th>字段</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>排行榜唯一标识</td>

<td>指在后台上报时设置的key值，用于识别上报分数</td>

</tr>

<tr>

<td>排行榜名称</td>

<td>如分数排行榜，会在小游戏中心上展示</td>

</tr>

<tr>

<td>更新周期</td>

<td>按照一定周期过滤上报数据。  
即每周一过滤刷新用户分数</td>

</tr>

<tr>

<td>排行榜数据类型</td>

<td>用于配置排行榜显示数据类型  
整数型：按实际上报的数值显示，如100，99，98  
枚举值：按照上报数值转义后的文本内容显示，如钻石级，黄金级</td>

</tr>

<tr>

<td>排行榜顺序</td>

<td>升序：自小而大，数值小的排行靠前  
降序：自大而小，数值大的排行靠前</td>

</tr>

<tr>

<td>数据单位后缀</td>

<td>支持个性化单位，如分、秒、等级等</td>

</tr>

</tbody>

</table>

#### 3\. 完成提交后，需经微信审核通过，才可生效。

![ConfigApperance](../../image/ConfigApperance.png)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](qrcode.html)[](share.html)</div>

</div>