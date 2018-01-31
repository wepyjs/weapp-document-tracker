<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小游戏开发](javascript:;)
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

<div class="top_title_wap"><span class="icon_title icon_dev"></span>

微信小游戏开发文档

</div>

*   [教程](../../index.html)
*   [API](../../document/render/canvas/wx.createCanvas.html)
*   [工具](../../devtools/devtools.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [基础](../../index.html)
    *   [快速上手](../../index.html)
    *   [Adapter](adapter.html)
    *   [对引擎的支持](engine.html)
    *   [模块化](module.html)
*   [能力](../ability/audio.html)
    *   [音频播放](../ability/audio.html)
    *   [文件系统](../ability/file-system.html)
*   [可用性](../usability/debug.html)
    *   [调试](../usability/debug.html)
    *   [性能](../usability/performance.html)
    *   [多线程 Worker](../usability/worker.html)
*   [开放能力](../open-ability/authorize.html)
    *   [用户授权](../open-ability/authorize.html)
    *   [用户登录态签名](../open-ability/http-signature.html)
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

## 模块化

小游戏提供了 CommonJS 风格的模块 API，可以通过 module.exports 和 exports 导出模块，通过 require 引入模块。假设代码包有如下结构，src/util 目录下的是一些在游戏中会反复用到的方法，res/image 目录下则是游戏中会用到一些图片。

    ├── game.js
    ├── game.json
    ├── src
    |   └── util
    |       ├── drawLogo.js
    |       └── ...
    └── res
        ├── image
        |   ├── logo.png
        |   └── ...
        └── music
            └── bgm.mp3

其中，**drawLogo.js** 模块封装的是一个用来把 logo 画到指定位置的方法。

    module.exports = function (canvas, x, y) {
        var image = new Image()
        image.onload = function () {
            var context = canvas.getContext('2d')
            context.drawImage(image, x, y)
        }
        image.src = 'res/image/logo.png'
    }

注意，当用加载本地的图片、音频、视频资源时，必须写从代码包根目录开始的绝对路径。如果写以 drawLogo.js 所在目录的相对路径，则会导致系统找不到资源文件，加载失败。

    image.src = '../../res/image/logo.png'

在 **game.js** 中 require **drawLogo**，就可以调用 **drawLogo** 模块导出的方法。

    var drawLogo = require('./src/util/drawLogo')
    var canvas = wx.createCanvas()
    drawLogo(canvas, 40, 40)

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
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9&)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](engine.html)[](../ability/audio.html)</div>

</div>