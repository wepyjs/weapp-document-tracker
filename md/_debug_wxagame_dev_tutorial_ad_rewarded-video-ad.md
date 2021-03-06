<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18091022)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18091022)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18091022)
*   [小游戏开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18091022)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18091022)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18091022)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18091022)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18091022)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/minigame/dev/tutorial/ad/rewarded-video-ad.html?t=18091022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/dev/tutorial/ad/rewarded-video-ad.html?t=18091022)

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
*   [API](../../api/render/canvas/wx.createCanvas.html)
*   [工具](../../devtools/devtools.html)
*   [小程序·云开发](../../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/minigame/dev/tutorial/ad/rewarded-video-ad.html?t=18091022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/dev/tutorial/ad/rewarded-video-ad.html?t=18091022)

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
*   [广告](./banner-ad.html)
    *   [Banner 广告](./banner-ad.html)
    *   [激励视频广告](./rewarded-video-ad.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 激励视频广告

激励视频广告组件是由客户端原生的图片、文本、视频控件组成的，层级最高，会覆盖在上屏 Canvas 上。

开发者可以调用 [wx.createRewardedVideoAd](../../api/ad/wx.createRewardedVideoAd.html) 创建激励视频广告组件。该方法返回的是一个全局单例。

    let video1 = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
    let video2 = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
    console.log(video1 === video2)
    // true

激励视频广告组件默认是隐藏的，因此可以提前创建，以提前初始化组件。

    let rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })

### 显示/隐藏

激励视频广告组件默认是隐藏的，需要调用 [RewardedVideoAd.show()](../../api/ad/RewardedVideoAd.show.html) 进行显示。

    bannerAd.show()

只有在用户点击激励视频广告组件上的 `关闭广告` 按钮时，广告才会关闭。开发者不可控制激励视频广告组件的隐藏。

### 广告拉取成功与失败

激励视频广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户点击 `关闭广告` 后会去拉取下一条广告。

如果拉取成功。[RewardedVideoAd.onLoad()](../../api/ad/RewardedVideoAd.onLoad.html) 会执行，[RewardedVideoAd.show()](../../api/ad/RewardedVideoAd.show.html) 返回的 Promise 也会是一个 resolved Promise。两者的回调函数中都没有参数传递。

    rewardedVideoAd.onLoad(() => {
      console.log('激励视频 广告加载成功')
    })

    rewardedVideoAd.show()
    .then(() => console.log('激励视频 广告显示'))

如果拉取失败，通过 [RewardedVideoAd.onError()](../../api/ad/RewardedVideoAd.onError.html) 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。[常见异常错误参考文档](../../api/ad/RewardedVideoAd.onError.html)

    rewardedVideoAd.onError(err => {
      console.log(err)
    })

[RewardedVideoAd.show()](../../api/ad/RewardedVideoAd.show.html) 返回的 Promise 也会是一个 rejected Promise。

    rewardedVideoAd.show()
    .catch(err => console.log(err))

### 拉取失败，重新拉取

如果组件的某次自动拉取失败，那么之后调用的 show() 将会被 reject。此时可以调用 [RewardedVideoAd.load()](../../api/ad/RewardedVideoAd.load.html) 手动重新拉取广告。

    rewardedVideoAd.show()
    .catch(err => {
        rewardedVideoAd.load()
        .then(() => rewardedVideoAd.show())
    })

如果组件的自动拉取是成功的，那么调用 load() 方法会直接返回一个 resolved Promise，而不会去拉取广告。

    rewardedVideoAd.load()
    .then(() => rewardedVideoAd.show())

### 监听用户关闭广告

只有在用户点击激励视频广告组件上的 `关闭广告` 按钮时，广告才会关闭。这个事件可以通过 [RewardedVideoAd.onClose()](../../api/ad/RewardedVideoAd.onClose.html) 监听。

小于 2.1.0 的基础库版本，`关闭按钮` 是在激励式视频播放结束后才出现，所以触发 onClose 时已经播放结束，`onClose` 触发时可以认为用户已经看完了广告。

大于等于 2.1.0 的基础库版本，`关闭按钮` 将会常驻，如下图所示

![](https://developers.weixin.qq.com/minigame/dev/tutorial/image/ad/rewarded-video-ad-landscape.png?t=18091022)

[RewardedVideoAd.onClose()](../../api/ad/RewardedVideoAd.onClose.html) 的回调函数会传入一个参数 res，`res.isEnded` 描述广告被关闭时的状态。

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>isEnded</td>

<td>boolean</td>

<td>视频是否是在用户完整观看的情况下被关闭的，true 表示用户是在视频播放完以后关闭的视频，false 表示用户在视频播放过程中关闭了视频</td>

</tr>

</tbody>

</table>

大于等于 2.1.0 的基础库版本，开发者需要根据 `res.isEnded` 判断是否视频是否播放结束、可以向用户下发奖励。

    rewardedVideoAd.onClose(res => {
        // 用户点击了【关闭广告】按钮
        // 小于 2.1.0 的基础库版本，res 是一个 undefined
        if (res && res.isEnded || res === undefined) {
          // 正常播放结束，可以下发游戏奖励
        }
        else {
            // 播放中途退出，不下发游戏奖励
        }
    })

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

*   [关于腾讯](https://www.tencent.com/)
*   [文档中心](https://developers.weixin.qq.com/miniprogram/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo)
*   [客服中心](https://kf.qq.com/product/wx_xcx.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./banner-ad.html)</div>

</div>