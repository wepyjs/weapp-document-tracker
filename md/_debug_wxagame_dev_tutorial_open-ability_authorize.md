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
    *   [用户登录态签名](http-signature.html)
    *   [米大师支付签名](midas-signature.html)
    *   [关系链数据使用指南](open-data.html)
    *   [虚拟支付](payment.html)
    *   [获取二维码](qrcode.html)
    *   [排行榜配置指引](ranklist.html)
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

## 用户授权

部分接口需要经过用户授权同意才能调用。我们把这些接口按使用范围分成多个 `scope` ，用户选择对 `scope` 来进行授权，当授权给一个 `scope` 之后，其对应的所有接口都可以直接使用。

### 调用接口发起授权

第一次使用某个 `scope` 下的接口时，会弹窗询问用户，“XXX申请获得以下权限：_（权限描述）_”。如果用户点击允许，则可获得此 `scope` 的接口权限。并且接口调用成功，否则接口调用失败。

    wx.login({
      success: function () {
        wx.getUserInfo()
      }
    })

![](../images/authorize-API.jpg)

### 提前发起授权

如果需要提前发起授权获得用户同意，则可调用 [wx.authorize()](../../document/open-api/authorize/wx.authorize.html) 来提前发起授权。

    wx.authorize({
      scope: 'scope.record'
    })

![](../images/pre-authorize.jpg)

### 处理用户拒绝授权

用户有可能拒绝小程序发起的授权申请，需要处理这种情况。

    wx.login({
      success: function () {
        wx.getUserInfo({
          fail: function (res) {
            // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
            if (res.errMsg.indexOf('auth deny') > -1 ||     res.errMsg.indexOf('auth denied') > -1 ) {
              // 处理用户拒绝授权的情况
            }
          }
        })
      }
    })

    wx.authorize({
      scope: 'scope.record',
      fail: function (res) {
        // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
        if (res.errMsg.indexOf('auth deny') > -1 ||     res.errMsg.indexOf('auth denied') > -1 ) {
          // 处理用户拒绝授权的情况
        }    
      }
    })

### 获取用户授权设置

通过调用 [wx.getSetting()](../../document/open-api/setting/wx.getSetting.html) 接口可以获取用户当前的授权处理信息。

    wx.getSetting({
      success: function (res) {
        var authSetting = res.authSetting
        if (authSetting['scope.userInfo'] === true) {
          // 用户已授权，可以直接调用相关 API
        } else if (authSetting['scope.userInfo'] === false){
          // 用户已拒绝授权，再调用相关 API 或者 wx.authorize 会失败，需要引导用户到设置页面打开授权开关
        } else {
          // 未询问过用户授权，调用相关 API 或者 wx.authorize 会弹窗询问用户
        }
      }
    })

### 引导用户重新授权

如果用户拒绝过某个 `scope` 的授权申请，则后续这个 `scope` 下的相关 API 调用都会直接失败，用 [wx.authorize()](../../document/open-api/authorize/wx.authorize.html) 申请此 `scope` 也会直接失败，而不会弹窗询问用户。这种情况下，需要引导用户主动到设置页面打开相应的 `scope` 权限。

授权页面的进入路径为：右上角菜单->关于（小程序名字）->右上角菜单->设置

**注意：只有申请过授权的 `scope` 会出现在设置页面。**

![](../images/authorize-setting.jpg)

### 重置授权记录

如果用户在小程序列表中删除了当前小程序，则所有允许过和拒绝过的授权记录都会被清空。

### Scope 列表

<table>

<thead>

<tr>

<th>scope</th>

<th>对应 API</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>scope.userInfo</td>

<td>[wx.getUserInfo()](../../document/open-api/data/wx.getUserInfo.html)</td>

<td>用户信息</td>

</tr>

<tr>

<td>scope.userLocation</td>

<td>[wx.getLocation()](../../document/location/wx.getLocation.html)</td>

<td>地理位置</td>

</tr>

<tr>

<td>scope.werun</td>

<td>[wx.getWeRunData()](../../document/open-api/werun/wx.getWeRunData.html)</td>

<td>微信运动步数</td>

</tr>

<tr>

<td>scope.record</td>

<td><a href="">wx.startRecord()</a>、[RecorderManager.start()](../../document/media/recorder/RecorderManager.start.html)</td>

<td>录音功能</td>

</tr>

<tr>

<td>scope.writePhotosAlbum</td>

<td>[wx.saveImageToPhotosAlbum()](../../document/media/image/wx.saveImageToPhotosAlbum.html)</td>

<td>保存到相册</td>

</tr>

</tbody>

</table>

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

[](../usability/worker.html)[](authorize.html)</div>

</div>