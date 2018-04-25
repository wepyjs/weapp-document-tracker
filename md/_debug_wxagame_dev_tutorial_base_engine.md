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
    *   [Adapter](adapter.html)
    *   [对引擎的支持](engine.html)
    *   [模块化](module.html)
*   [能力](../ability/audio.html)
    *   [音频播放](../ability/audio.html)
    *   [文件系统](../ability/file-system.html)
*   [可用性](../usability/debug.html)
    *   [调试](../usability/debug.html)
    *   [性能](../usability/performance.html)
    *   [小游戏更新](../usability/update.html)
    *   [多线程 Worker](../usability/worker.html)
*   [开放能力](../open-ability/authorize.html)
    *   [用户授权](../open-ability/authorize.html)
    *   [用户登录态签名](../open-ability/http-signature.html)
    *   [米大师支付签名](../open-ability/midas-signature.html)
    *   [关系链数据使用指南](../open-ability/open-data.html)
    *   [虚拟支付](../open-ability/payment.html)
    *   [获取二维码](../open-ability/qrcode.html)
    *   [转发](../open-ability/share.html)
    *   [用户数据的签名验证和加解密](../open-ability/signature.html)
    *   [UnionID 机制说明](../open-ability/union-id.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 对引擎的支持

### 支持情况

许多开发者对小游戏对 Cocos、Egret、Laya、Unity 等游戏引擎的支持情况非常关心。但是小游戏是一个不同于浏览器的 JavaScript 运行环境，没有 BOM 和 DOM API。然而，基本上所有基于 HTML5 的游戏引擎都是依赖浏览器提供的 BOM 和 DOM API 的。所以如果要在小游戏中使用引擎，需要对引擎进行改造。

目前，Cocos、Egret、Laya 已经完成了自身引擎及其工具对小游戏的适配和支持，对应的官方文档已经对接入小游戏开发做了介绍。

*   Cocos：[http://docs.cocos.com/creator/manual/zh/publish/publish-wechatgame.html](http://docs.cocos.com/creator/manual/zh/publish/publish-wechatgame.html)
*   Egret：[http://developer.egret.com/cn/github/egret-docs/Engine2D/minigame/introduction/index.html](http://developer.egret.com/cn/github/egret-docs/Engine2D/minigame/introduction/index.html)
*   LayaBox：[https://ldc.layabox.com/doc/?nav=zh-as-5-0-1](https://ldc.layabox.com/doc/?nav=zh-as-5-0-1)

Unity 目前还没有对小游戏进行适配。不过小游戏提供了对大部分 Canvas 2d 和 WebGL 1.0 特性的支持，支持情况参见 [RenderingContext](../../document/render/canvas/RenderingContext.html)，有能力的开发者可以尝试自行适配。

### 小游戏是一个不同于浏览器的运行环境

无论是怎样的引擎，最终在游戏运行时所做的大部分事情都是 **随着用户的交互更新画面和播放声音**。小游戏的开发语言是 JavaScript，那么在引擎的底层就需要通过 JavaScript 调用绘制 API 和音频 API。

一段 JavaScript 代码在运行时可以调用的 API 是依赖于 `宿主环境` 的。我们最常用的 `console.log` 甚至都不是 JavaScript 语言核心的一部分，而是浏览器这个宿主环境提供的。常见的宿主环境有浏览器、Node.js 等。浏览器有 BOM 和 DOM API，而 Node.js 则没有；Node.js 有 fs、net 等 Node.js 核心模块提供的文件、网络 API，而浏览器则不具备这些模块。例如，下面这段在浏览器中可以正常运行的代码，在 Node.js 中运行就会报错。

    let canvas = document.createElement('canvas')

因为 Node.js 这个宿主环境根本没有提供 document 这个内置的全局变量。

    ReferenceError: document is not defined

小游戏的运行环境是一个不同于浏览器的宿主环境，没有提供 BOM 和 DOM API，提供的是 wx API。通过 wx API，开发者可以调用 Native 提供的绘制、音视频、网络、文件等能力。

![](../images/framework-1.png)

如果你想创建画布，你需要调用 [wx.createCanvas()](../../document/render/canvas/wx.createCanvas.html)

    let canvas = wx.createCanvas()
    let context = canvas.getContext('2d')

如果你想创建一个音频对象，你需要调用 [wx.createInnerAudioContext()](../../document/media/audio/wx.createInnerAudioContext.html)

    let audio = wx.createInnerAudioContext()
    // src 地址仅作演示，并不真实存在
    audio.src = 'bgm.mp3'
    audio.play()

如果你想获取屏幕的宽高，你需要调用 [wx.getSystemInfoSync()](../../document/system/system-info/wx.getSystemInfoSync.html)

    let { screenWidth, screenHeight } = wx.getSystemInfoSync()

但是基于 HTML5 的游戏引擎会通过以下方式去创建画布、音频，获取屏幕宽高

    let canvas = document.createElement('canvas')
    let audio = document.createElement('audio')
    console.log(window.innerWidth)
    console.log(window.innerHeight)

此时会产生错误，理由如前文所述，小游戏这个宿主环境根本没有提供 document 和 window 这两个在浏览器中内置的全局变量。因为小游戏环境是一个不同于浏览器的宿主环境。

    ReferenceError: document is not defined
    ReferenceError: window is not defined

所以，基本上所有基于 HTML5 的游戏引擎都不能直接迁移到小游戏中使用，因为引擎可能或多或少都用到了 BOM 和 DOM 这些浏览器环境特有的 API。只有对引擎进行改造，将对 BOM 和 DOM API 的调用改成 wx API 的调用，引擎才能运行在小游戏环境中。

除了修改引擎，还有一种适配方式，即在引擎和游戏逻辑代码之间加一层模拟 BOM 和 DOM API 的适配层，我们称之为 Adapter。这层适配层在全局通过 wx API 模拟了引擎会访问到的那部分 window 和 document 对象的属性和方法，使引擎感受不到环境的差异。

![](../images/framework-2.png)

Adapter 是用户代码，不是基础库的一部分。关于 Adapter 的介绍，参见教程 [Adapter](adapter.html)。

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

[](adapter.html)[](module.html)</div>

</div>