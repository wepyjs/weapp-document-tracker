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
*   [广告](banner-ad.html)
    *   [Banner 广告](banner-ad.html)
    *   [激励视频广告](rewarded-video-ad.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## Banner 广告

Banner 广告组件是由客户端原生的图片、文本控件组成的原生组件，层级最高，会覆盖在上屏 Canvas 上。

开发者可以调用 [wx.createBannerAd](../../document/ad/wx.createBannerAd.html) 创建 Banner 广告组件。Banner 广告组件在创建后会自动拉取广告数据并进行渲染，开发者只需要控制 Banner 广告组件的位置和显示/隐藏即可。

    let bannerAd = wx.createBannerAd({
      adUnitId: 'xxxx',
      style: {
        left: 10,
        top: 76,
        width: 320
      }
    })

    bannerAd.show()

### 显示/隐藏

Banner 广告组件默认是隐藏的，需要调用 <a href="">BannerAd.show()</a> 进行显示。

    bannerAd.show()

当切换到没有 Banner 广告组件的场景或页面时，调用 <a href="">BannerAd.hide()</a> 隐藏 Banner 广告组件。

    bannerAd.hide()

### 广告拉取成功与失败

BannerAd 在创建后会拉取广告。如果拉取失败，通过 <a href="">BannerAd.onError()</a> 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。

    bannerAd.onError(err => {
      console.log(err)
    })

<a href="">BannerAd.show()</a> 返回的 Promise 也会是一个 rejected Promise。

    bannerAd.show()
    .catch(err => console.log(err))

反之，如果拉取成功。<a href="">BannerAd.onLoad()</a> 会执行，<a href="">BannerAd.show()</a> 返回的 Promise 也会是一个 resolved Promise。两者的回调函数中都没有参数传递。

    bannerAd.onLoad(() => {
      console.log('banner 广告加载成功')
    })

    bannerAd.show()
    .then(() => console.log('banner 广告显示'))

### onResize

开发者在创建 BannerAd 时设置宽高，也可以在创建后设置。

    let bannerAd = wx.createBannerAd({
      adUnitId: 'xxxx',
      style: {
        left: 10,
        top: 76,
        width: 320
      }
    })

    bannerAd.show()
    bannerAd.style.width = 400

Banner 广告组件的尺寸会根据开发者设置的宽度，即 `style.width` 进行等比缩放，缩放的范围是 300 到 `屏幕宽度`。屏幕宽度是以逻辑像素为单位的宽度，通过 [wx.getSystemInfoSync()](../../document/system/system-info/wx.getSystemInfoSync.html) 可以获取到。

    let { screenWidth } = wx.getSystemInfoSync()

当 `style.width` 小于 300 时，会取作 300。 当 `style.width` 大于屏幕宽度时，会取作屏幕宽度。  
在组件内部会以此值为基准，根据 Banner 广告的标准尺寸，进行缩放。

每当缩放发生且缩放后的尺寸不同时，通过 <a href="">BannerAd.onResize()</a> 注册的回调函数就会执行。回调函数的参数是一个包含 BannerAd 缩放后的宽和高的对象。BannerAd 的 `style.realWidth` 和 `style.realHeight` 到经过缩放后的宽和高。

    bannerAd.onResize(res => {
      console.log(res.width, res.height)
      console.log(bannerAd.style.realWidth, bannerAd.style.realHeight)
    })

如果在 onResize 的回调函数中重设 width 且总是与上一次缩放后的 width 不同，那么可能会导致 onResize 的回调函数一直触发，并卡死在 onResize 的回调函数中。

    bannerAd.onResize(res => {
      bannerAd.style.width = res.width + Math.random()*10
    })

### 创建新的 BannerAd，销毁旧的 BannerAd

每个 BannerAd 实例在创建后会去拉取一次广告数据并进行渲染，在此之后不再更新。如果想要展示其他内容的 BannerAd，需要创建新的 BannerAd 并将之前的 BannerAd 进行销毁。

如果不对废弃的 BannerAd 进行销毁，则会导致其上的事件监听器无法释放。当没有释放的 BannerAd 积累过多时，将会产生性能问题。

    oldBannerAd.destroy()
    let newBannerAd = wx.createBannerAd({
      // ...
    })
    newBannerAd.show()

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

[](../open-ability/union-id.html)[](banner-ad.html)</div>

</div>