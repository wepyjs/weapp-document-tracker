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

*   [教程](../../)
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

*   [基础](../../)
    *   [快速上手](../../)
    *   [Adapter](../base/adapter.html)
    *   [对引擎的支持](../base/engine.html)
    *   [模块化](../base/module.html)
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

## 游戏圈使用指南

开发者可以通过游戏圈组件，在小游戏内为用户提供游戏交流、用户互动、反馈收集等社区能力。

#### 接入方式

开发者可直接调用 [wx.createGameClubButton()](../../document/open-api/game-club/wx.createGameClubButton.html) 创建打开游戏圈的按钮。

同时，根据游戏界面的不同UI风格，我们在组件内提供以下 4 种 icon 样式可供选择：

<table>

<thead>

<tr>

<th>值</th>

<th>图标</th>

</tr>

</thead>

<tbody>

<tr>

<td>dark</td>

<td>![](../images/game-club/dark.png)</td>

</tr>

<tr>

<td>green</td>

<td>![](../images/game-club/green.png)</td>

</tr>

<tr>

<td>white</td>

<td>![](../images/game-club/white.png) （灰色背景仅用作显示图标，图标本身为白色）</td>

</tr>

<tr>

<td>light</td>

<td>![](../images/game-club/light.png)</td>

</tr>

</tbody>

</table>

#### 运营与管理

除此之外，我们为开发者提供了游戏圈社区能力的运营与管理能力，开发者可以在MP管理后台配置游戏圈管理员。游戏圈管理员可以在手机端操作帖子置顶、沉底、屏蔽等权限，管理和维护健康的游戏圈内容与社区环境。

*   MP管理后台游戏圈配置界面

![mp](../images/game-club/mp.jpg)

*   移动端游戏圈管理员操作界面

![mp](../images/game-club/mobile.jpg)

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

[](authorize.html)[](http-signature.html)</div>

</div>