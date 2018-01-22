<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
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
    *   [Adapter](../base/adapter.html)
    *   [对引擎的支持](../base/engine.html)
    *   [模块化](../base/module.html)
*   [能力](../ability/audio.html)
    *   [音频播放](../ability/audio.html)
    *   [文件系统](../ability/file-system.html)
*   [可用性](debug.html)
    *   [调试](debug.html)
    *   [性能](performance.html)
    *   [多线程 Worker](worker.html)
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

## 调试

### vConsole

在真机上，如果想要查看 console.log，console.error 等 API 输出的内容，需要在点击屏幕右上角的按钮打开的菜单里点击 `打开调试`。此时小程序会退出，重新打开后会发现右下角有一个 `vConsole` 按钮。点击 `vConsole` 按钮可以打开日志面板。

![](../images/vConsole.jpg)

在真机上 console.log 等 API 无法输出有循环引用的对象。假设按照如下代码，尝试输出有循环引用的对象 a

    var a = {}
    a.b = a
    console.log(a)

将会产生这样的错误

    An object width circular reference can't be logged

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

[](../ability/file-system.html)[](debug.html)</div>

</div>