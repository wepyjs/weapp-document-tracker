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
    *   [分包加载](subpackages.html)
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
*   [广告](../ad/banner-ad.html)
    *   [Banner 广告](../ad/banner-ad.html)
    *   [激励视频广告](../ad/rewarded-video-ad.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 分包加载

> 微信 6.6.7 客户端，2.1.0 及以上基础库开始支持，请更新至最新客户端版本，开发者工具请使用 1.02.1806120 及以上版本，可[点此下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

随着小游戏的玩法越来越丰富，开发者对于扩大包大小的需求越来越强烈，所以我们推出了小游戏分包加载这一个功能。 所谓的分包加载，即把游戏内容按一定规则拆分这几包，在首次启动时先下载必要的包，这个必要的包我们称为「主包」，开发者可以在主包内触发其它分包的下载，从而把首次启动的下载耗时分散到游戏运行中。

### 分包加载包大小的限制

目前小游戏分包大小有以下限制：

*   整个小游戏所有分包大小不超过 8M
*   单个分包/主包大小不能超过 4M

### 使用方法

### 1\. 分包配置

需要先在 `game.json` 配置分包信息。

假设游戏的目录结构如下：

    ├── game.js
    ├── game.json
    ├── images
    │   ├── a.png
    │   ├── b.png
    ├── stage1
    │   └── game.js
    │   └── images
    │       ├── 1.png
    │       ├── 2.png
    └── stage2.js

`game.json` 中的配置：

    {
      ...
      "subpackages": [
        {
          "name": "stage1",
          "root": "stage1/" // 可以指定一个目录，目录根目录下的 game.js 会作为入口文件，目录下所有资源将会统一打包
        }, {
          "name": "stage2",
          "root": "stage2.js" // 也可以指定一个 JS 文件
        }
      ]
      ...
    }

配置在 `subpackages` 字段内的目录或 js 文件，将按照配置打包成一个个「分包」，没有配置在 `subpackages` 中的目录和 js，将会被打包到主包中。

**注：目前不支持将开放数据域目录（即 `openDataContext` 配置目录）设置为分包或置于某个分包下。**

### 2\. 分包加载

我们提供了 [wx.loadSubpackage()](../../document/subpackages/wx.loadSubpackage.html) API 来触发分包的下载，调用 wx.loadSubpackage 后，将触发分包的下载与加载，在加载完成后，通过 wx.loadSubpackage 的 success 回调来通知加载完成。

同时，wx.loadSubpackage 会返回一个 [LoadSubpackageTask](../../document/subpackages/LoadSubpackageTask.html)，可以通过 LoadSubpackageTask 获取当前下载进度。

示例代码：

    const loadTask = wx.loadSubpackage({
      name: 'stage1', // name 可以填 name 或者 root
      success: function(res) {
        // 分包加载成功后通过 success 回调
      },
      fail: function(res) {
        // 分包加载失败通过 fail 回调
      }
    })

    loadTask.onProgressUpdate(res => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })

### 老版本兼容

由微信后台编译来处理旧版本客户端的兼容，后台会编译两份代码包，一份是分包后代码，另外一份是整包的兼容代码。对于老客户端，会去下载整包代码启动。

**开发者在基础库 2.1.0 以下的版本不需要调用 wx.loadSubpackage 触发加载，2.1.0 以下版本不存在 wx.loadSubpackage 方法。**

老版本下，需要开发者调用 `require` 触发分包入口文件的加载，例如：

    require('stage1/game.js')

如果不打算兼容老版本，开发者可以通过 mp 小程序后台配置端屏蔽 2.1.0 以下基础版的用户。

### 已知 BUG

目前 Android 无法加载分包下的字体文件，预计在下个微信客户端版本修复。

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](module.html)[](../ability/audio.html)</div>

</div>