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
*   [可用性](debug.html)
    *   [调试](debug.html)
    *   [性能](performance.html)
    *   [小游戏更新](update.html)
    *   [多线程 Worker](worker.html)
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

## 小游戏更新

小游戏启动会有两种情况，一种是「冷启动」，一种是「热启动」。 假如用户已经打开过某小游戏，然后在一定时间内再次打开该小游戏，此时无需重新启动，只需将后台态的小游戏切换到前台，这个过程就是热启动；冷启动指的是用户首次打开或小游戏被微信主动销毁后再次打开的情况，此时小游戏需要重新加载启动。

### 更新机制

小游戏冷启动时如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地已有的包进行启动，即新版本的小游戏需要等下一次冷启动才会应用上。 如果需要马上应用最新版本，可以使用 [wx.getUpdateManager()](../../document/update/wx.getUpdateManager.html) API 进行处理。

### getUpdateManager 的使用示例

v1.9.90 基础库以后，可以通过 [wx.getUpdateManager()](../../document/update/wx.getUpdateManager.html) 获取**全局唯一**的版本更新管理器，用于管理小游戏更新；另外请下载最新版本的开发者工具(1.02.1803130 以上)才支持在开发者工具上调试。

由于是新版本才支持的 API，请在使用前先判断是否支持，例如：

    if (wx.getUpdateManager) {
      console.log('支持 wx.getUpdateManager')
    }

获取到 updateManager 实例后，updateManager 包含以下方法：

<table>

<thead>

<tr>

<th>方法</th>

<th>参数</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>onCheckForUpdate</td>

<td>callback</td>

<td>当向微信后台请求完新版本信息，会进行回调</td>

</tr>

<tr>

<td>onUpdateReady</td>

<td>callback</td>

<td>当新版本下载完成，会进行回调</td>

</tr>

<tr>

<td>onUpdateFailed</td>

<td>callback</td>

<td>当新版本下载失败，会进行回调</td>

</tr>

<tr>

<td>applyUpdate</td>

<td></td>

<td>当新版本下载完成，调用该方法会强制当前小游戏应用上新版本并重启</td>

</tr>

</tbody>

</table>

**onCheckForUpdate(callback) 回调结果说明：**

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

<td>hasUpdate</td>

<td>Boolean</td>

<td>是否有新的版本</td>

</tr>

</tbody>

</table>

**注：** 检查更新操作由微信在小游戏冷启动时自动触发，不需由开发者主动触发，开发者只需监听检查结果即可。

**onUpdateReady(callback) 回调结果说明：**

当微信检查到小游戏有新版本，会主动触发下载操作（无需开发者触发），当下载完成后，会通过 `onUpdateReady` 告知开发者。

**onUpdateFailed(callback) 回调结果说明：**

当微信检查到小游戏有新版本，会主动触发下载操作（无需开发者触发），如果下载失败（可能是网络原因等），会通过 `onUpdateFailed` 告知开发者。

**applyUpdate() 说明：**

当小游戏新版本已经下载时（即收到 `onUpdateReady` 回调），可以通过这个方法强制重启小游戏并应用上最新版本。

### 完整使用示例

    if (typeof wx.getUpdateManager === 'function') {
      const updateManager = wx.getUpdateManager()

      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate)
      })

      updateManager.onUpdateReady(function () {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      })

      updateManager.onUpdateFailed(function () {
        // 新的版本下载失败
      })
    }

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

[](performance.html)[](worker.html)</div>

</div>