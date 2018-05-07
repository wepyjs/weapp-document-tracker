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

## 转发

用户在使用小游戏过程中，可转发消息给其他用户或群聊。

### 转发菜单

点击右上角按钮，会弹出菜单，菜单中的“转发”选项默认不展示。通过 [wx.showShareMenu()](../../document/share/wx.showShareMenu.html) 和 [wx.hideShareMenu()](../../document/share/wx.hideShareMenu.html) 可动态显示、隐藏这个选项。

### 被动转发

用户点击右上角菜单中的“转发”选项后，会触发转发事件，如果小游戏通过 [wx.onShareAppMessage()](../../document/share/wx.onShareAppMessage.html) 监听了这个事件，可通过返回自定义转发参数来修改转发卡片的内容，否则使用默认内容。

    wx.onShareAppMessage(function () {
      // 用户点击了“转发”按钮
      return {
        title: '转发标题'
      }
    })

### 主动转发

游戏内可通过 [wx.shareAppMessage()](../../document/share/wx.shareAppMessage.html)接口直接调起转发界面，与被动转发类似，可以自定义转发卡片内容。

    wx.shareAppMessage({
      title: '转发标题'
    })

### 使用 Canvas 内容作为转发图片

如果不指定转发图片，默认会显示一个小程序的 logo。如果希望转发的时候显示 Canvas 的内容，可以使用 [Canvas.toTempFilePath()](../../document/render/canvas/Canvas.toTempFilePath.html) 或 [Canvas.toTempFilePathSync()](../../document/render/canvas/Canvas.toTempFilePathSync.html) 来生成一张本地图片，然后把图片路径传给 `imageUrl` 参数。

**转发出来的消息卡片中，图片的最佳显示比例是 5：4**。

    wx.onShareAppMessage(function () {
      return {
        title: '转发标题',
        imageUrl: canvas.toTempFilePathSync({
          destWidth: 500,
          destHeight: 400
        })
      }
    })

### withShareTicket 模式

通过 [wx.updateShareMenu](../../document/share/wx.updateShareMenu.html) 接口可修改转发属性。如果设置 `withShareTicket` 为 `true` ，会有以下效果

1.  选择联系人的时候只能选择一个目标，不能多选
2.  消息被转发出去之后，在会话窗口中无法被长按二次转发
3.  消息转发的目标如果是一个群聊，则
    1.  会在转发成功的时候获得一个 `shareTicket`
    2.  每次用户从这个消息卡片进入的时候，也会获得一个 `shareTicket`，通过调用 [wx.getShareInfo()](../../document/share/wx.getShareInfo.html) 接口传入 `shareTicket` 可以获取群相关信息

修改这个属性后，同时对主动转发和被动转发生效。

    // 设置 withShareTicket: true
    wx.updateShareMenu({
      withShareTicket: true
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

*   [关于腾讯](http://www.tencent.com/zh-cn/index.shtml)
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](qrcode.html)[](signature.html)</div>

</div>