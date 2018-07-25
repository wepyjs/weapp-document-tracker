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
    *   [分包加载](../base/subpackages.html)
*   [能力](audio.html)
    *   [音频播放](audio.html)
    *   [文件系统](file-system.html)
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

## 音频播放

小游戏内只有一种音频播放的方式，即使用 [InnerAudioContext](../../document/media/audio/InnerAudioContext.html) 来播放。

### 使用 InnerAudioContext 播放

通过 [wx.createInnerAudioContext()](../../document/media/audio/wx.createInnerAudioContext.html) 接口可以创建一个音频实例 [innerAudioContext](../../document/media/audio/InnerAudioContext.html) ，通过这个实例可以播放音频。

    var audio = wx.createInnerAudioContext()
    audio.src = url // src 可以设置 http(s) 的路径，本地文件路径或者代码包文件路径
    audio.play()

在 iOS 系统上，默认遵循静音键设置。如果希望在静音时也能播放声音，可以设置 `obeyMuteSwitch` 为 `false`。

    audio.obeyMuteSwitch = false

### 自动播放和循环播放

设置 `autoplay` 和 `loop` 属性可以自动播放和循环播放音频，一般适用于背景音乐。

    var bgm = wx.createInnerAudioContext()
    bgm.autoplay = true
    bgm.loop = true
    bgm.src = url

### 回到前台时恢复背景音乐

当小游戏被隐藏到后台时，所有音频会被暂停，并在回到前台之前都不能再播放成功。

回到前台之后，被暂停的音频不会自动继续播放，如果小游戏有背景音乐的话，需要监听回到前台事件，并在收到回到前台事件之后调用背景音乐继续播放。

    wx.onShow(function () {
      bgm.play()
    })

### 处理音频中断事件

音频中断事件指的是在游戏期间，音频被系统打断时触发的事件。音频中断事件分为中断开始和中断结束事件，分别使用 [wx.onAudioInterruptionBegin()](../../document/system/system-event/wx.onAudioInterruptionBegin.html) 和 [wx.onAudioInterruptionEnd()](../../document/system/system-event/wx.onAudioInterruptionEnd.html) 来监听。

以下事件会触发音频中断开始事件：接到电话、闹钟响起、系统提醒、收到微信好友的语音/视频通话请求。被中断之后，小游戏内所有音频会被暂停，并在中断结束之前都不能再播放成功。

中断结束之后，被暂停的音频不会自动继续播放，如果小游戏有背景音乐的话，需要监听音频中断结束事件，并在收到中断结束事件之后调用背景音乐继续播放。

    wx.onAudioInterruptionEnd(function () {
      bgm.play()
    })

如果小游戏的逻辑强依赖音乐的播放，则需要在音频开始中断的时候暂停游戏

    wx.onAudioInterruptionBegin(function () {
      // 暂停游戏
    })

### 兼容性说明

目前两个平台完全支持的音频格式有 mp3、aac、wav。其他格式存在系统差异，不保证支持。

### 最佳实践

#### 复用已有的音频实例

对于相同的音效，应该复用已有的音频实例，而不是重新创建一个音频实例。

#### 及时销毁不需要的音频实例

如果一个音频不再需要使用了，可以调用 [InnerAudioContext.destroy()](../../document/media/audio/InnerAudioContext.destroy.html) 接口提前销毁这个实例。

#### Android 同时播放的音频数量限制

由于系统限制，在 Android 上最多同时播放 10 个音频，超过的部分会做有损处理，对开发者来说不感知，但开发者应尽量避免同时播放过多音频。

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

[](../base/subpackages.html)[](file-system.html)</div>

</div>