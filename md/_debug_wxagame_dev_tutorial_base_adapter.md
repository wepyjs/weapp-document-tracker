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
    *   [游戏圈使用指南](../open-ability/game-club.html)
    *   [用户登录态签名](../open-ability/http-signature.html)
    *   [米大师支付签名](../open-ability/midas-signature.html)
    *   [关系链数据使用指南](../open-ability/open-data.html)
    *   [虚拟支付](../open-ability/payment.html)
    *   [获取二维码](../open-ability/qrcode.html)
    *   [排行榜配置指引](../open-ability/ranklist.html)
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

## Adapter

小游戏的运行环境在 iOS 上是 [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)，在 Android 上是 [V8](https://developers.google.com/v8/)，都是没有 BOM 和 DOM 的运行环境，没有全局的 document 和 window 对象。因此当你希望使用 DOM API 来创建 Canvas 和 Image 等元素的时候，会引发错误。

    var canvas = document.createElement('canvas')

但是我们可以使用 wx.createCanvas 和 wx.createImage 来封装一个 document。

    var document = {
        createElement: function (tagName) {
            tagName = tagName.toLowerCase()
            if (tagName === 'canvas') {
                return wx.createCanvas()
            }
            else if (tagName === 'image') {
                return wx.createImage()
            }
        }
    }

这时代码就可以像在浏览器中创建元素一样创建 Canvas 和 Image 了。

    var canvas = document.createElement('canvas')
    var image = document.createImage('image')

同样，如果想实现 new Image() 的方式创建 Image 对象，只须添加如下代码。

    function Image () {
        return wx.createImage()
    }

这些使用 wx API 模拟 BOM 和 DOM 的代码组成的库称之为 Adapter。顾名思义，这是对基于浏览器环境的游戏引擎在小游戏运行环境下的一层适配层，使游戏引擎在调用 DOM API 和访问 DOM 属性时不会产生错误。Adapter 是一个抽象的代码层，并不特指某一个适配小游戏的第三方库，每位开发者都可以根据自己的项目需要实现相应的 Adapter。官方实现了一个 Adapter 名为 **weapp-adapter**， 并提供了完整的源码，供开发者使用和参考。

**Adapter 下载地址** [weapp-adapter.zip](../weapp-adapter.zip)

weapp-adapter 会预先调用 wx.createCanvas() 创建一个上屏 Canvas，并暴露为一个全局变量 canvas。

    require('./weapp-adapter')
    var context = canvas.getContext('2d')
    context.fillStyle = 'red'
    context.fillRect(0, 0, 100, 100)

除此之外 weapp-adapter 还模拟了以下对象和方法：

*   document.createElement
*   canvas.addEventListener
*   localStorage
*   Audio
*   Image
*   WebSocket
*   XMLHttpRequest
*   等等...

需要强调的是，weapp-adapter 对浏览器环境的模拟远不完整的，仅仅只针对游戏引擎可能访问的属性和调用的方法进行了模拟，也不保证所有游戏引擎都能通过 weapp-adapter 顺利无缝接入小游戏。直接将 weapp-adapter 提供给开发者，更多地是作为参考，开发者可以根据需要在 weapp-adapter 的基础上进行扩展，以适配自己项目使用的游戏引擎。

### weapp-adapter 不是小游戏基础库的一部分

小游戏基础库只提供 wx.createCanvas 和 wx.createImage 等 wx API 以及 setTimeout/setInterval/requestAnimationFrame 等常用的 JS 方法。在此之上的 weapp-adapter 是为了让基于浏览器环境的第三方代码更快地适配小游戏运行环境的一层适配层，并不是基础库的一部分。更准确地说，我们将 weapp-adapter 视为和游戏引擎都视为第三方库，需要开发者在小游戏项目中自行引入。

目前，Cocos、Egret、Laya 已经完成了自身引擎及其工具对小游戏的适配和支持，访问对应的官方文档可以更快地接入小游戏的开发。

*   Cocos：[http://docs.cocos.com/creator/manual/zh/publish/publish-wechatgame.html](http://docs.cocos.com/creator/manual/zh/publish/publish-wechatgame.html)
*   Egret：[http://developer.egret.com/cn/github/egret-docs/Engine2D/minigame/introduction/index.html](http://developer.egret.com/cn/github/egret-docs/Engine2D/minigame/introduction/index.html)
*   Laya：[https://ldc.layabox.com/doc/?nav=zh-as-3-4-5](https://ldc.layabox.com/doc/?nav=zh-as-3-4-5)

再次强调，weapp-adapter 不是小游戏基础库的一部分，今后官方也将不再对 weapp-adapter 进行更新和维护。开发者应该根据自己使用的游戏引擎，实现自己的 Adapter 来使所用的游戏引擎适配小游戏的运行环境。

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

[](../../)[](engine.html)</div>

</div>