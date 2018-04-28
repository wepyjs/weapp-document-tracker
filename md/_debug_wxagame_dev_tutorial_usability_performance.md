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
*   [可用性](debug.html)
    *   [调试](debug.html)
    *   [性能](performance.html)
    *   [小游戏更新](update.html)
    *   [多线程 Worker](worker.html)
*   [开放能力](../open-ability/authorize.html)
    *   [用户授权](../open-ability/authorize.html)
    *   [游戏圈使用指南](../open-ability/game-club.html)
    *   [用户登录态签名](../open-ability/http-signature.html)
    *   [米大师支付签名](../open-ability/midas-signature.html)
    *   [关系链数据使用指南](../open-ability/open-data.html)
    *   [虚拟支付](../open-ability/payment.html)
    *   [获取二维码](../open-ability/qrcode.html)
    *   [转发](../open-ability/share.html)
    *   [用户数据的签名验证和加解密](../open-ability/signature.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 性能

### 垃圾回收

小游戏中，JavaScript 中的每一个 Canvas 或 Image 对象都会有一个客户端层的实际纹理储存，实际纹理储存中存放着 Canvas、Image 的真实纹理，通常会占用相当一部分内存。 每个客户端实际纹理储存的回收时机依赖于 JavaScript 中的 Canvas、Image 对象回收。在 JavaScript 的 Canvas、Image 对象被回收之前，客户端对应的实际纹理储存不会被回收。通过调用 [wx.triggerGC()](../../document/performance/wx.triggerGC.html) 方法，可以加快触发 JavaScriptCore Garbage Collection（垃圾回收），从而触发 JavaScript 中没有引用的 Canvas、Image 回收，释放对应的实际纹理储存。 但 GC 具体触发时机还要取决于 JavaScriptCore 自身机制，并不能保证调用 [wx.triggerGC()](../../document/performance/wx.triggerGC.html) 能马上触发回收，建议在每局游戏开始或结束触发一下。

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

[](debug.html)[](update.html)</div>

</div>