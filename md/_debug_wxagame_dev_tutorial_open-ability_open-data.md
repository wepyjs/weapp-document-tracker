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
    *   [转发](share.html)
    *   [用户数据的签名验证和加解密](signature.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 关系链数据使用指南

一个微信用户的关系链数据包括两部分：

*   该用户好友的用户数据
*   该用户所在的某个群的群成员的用户数据。

为了丰富游戏的社交玩法，我们提供了获取关系链数据的 API：

*   [wx.getFriendCloudStorage()](../../document/open-api/data/wx.getFriendCloudStorage.html) 获取当前用户也玩该小游戏的好友的用户数据
*   [wx.getGroupCloudStorage()](../../document/open-api/data/wx.getGroupCloudStorage.html) 获取当前用户在某个群中也玩该小游戏的成员的用户数据

这两个 API 的返回结果都是一个对象数组，数组的每一个元素都是一个表示用户数据的对象，其结构如下：

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

<td>openId</td>

<td>string</td>

<td>用户的 openId</td>

</tr>

<tr>

<td>avatarUrl</td>

<td>string</td>

<td>用户的微信头像 url</td>

</tr>

<tr>

<td>nickName</td>

<td>string</td>

<td>用户的微信昵称</td>

</tr>

<tr>

<td>data</td>

<td>Object</td>

<td>用户的游戏数据</td>

</tr>

</tbody>

</table>

用户的 `游戏数据` 指的是用户的段位、战绩等游戏业务特有的数据，通过调用 [wx.setUserCloudStorage()](../../document/open-api/data/wx.setUserCloudStorage.html) 可以将当前用户的游戏数据托管在微信后台。只有被托管过数据的用户，才会被视为 `玩过` 该小游戏的用户，才会出现在 [wx.getFriendCloudStorage()](../../document/open-api/data/wx.getFriendCloudStorage.html) 和 [wx.getGroupCloudStorage()](../../document/open-api/data/wx.getGroupCloudStorage.html) 返回的对象数组中。

除此之外，我们还提供了以下 API：

*   [wx.removeUserCloudStorage()](../../document/open-api/data/wx.removeUserCloudStorage.html) 删除用户托管数据中指定字段的数据
*   [wx.getUserCloudStorage()](../../document/open-api/data/wx.getUserCloudStorage.html) 获取当前用户的托管数据

[wx.getUserCloudStorage](../../document/open-api/data/wx.getUserCloudStorage.html)、[wx.getFriendCloudStorage()](../../document/open-api/data/wx.getFriendCloudStorage.html) 和 [wx.getGroupCloudStorage()](../../document/open-api/data/wx.getGroupCloudStorage.html) 只能在 `开放数据域` 中调用。  
[wx.setUserCloudStorage()](../../document/open-api/data/wx.setUserCloudStorage.html) 和 [wx.removeUserCloudStorage()](../../document/open-api/data/wx.removeUserCloudStorage.html) 可以同时在 `主域` 和开放数据域中调用。

## 开放数据域

`开放数据域` 是一个封闭、独立的 JavaScript 作用域。要让代码运行在开放数据域，需要在 game.json 中添加配置项 `openDataContext` 指定开放数据域的代码目录。添加该配置项表示**小游戏启用了开放数据域**，这将会导致一些 [限制](#限制)。

    {
      "deviceOrientation": "portrait",
      "openDataContext": "src/myOpenDataContext"
    }

同时还需要在该目录下创建 index.js 作为开放数据域的入口文件，其代码运行在开放数据域。game.js 是整个游戏的入口文件，其代码运行在 `主域`。对应以上配置，应该有如下的目录结构：

    ├── src  
    |   └── myOpenDataContext
    |       ├── index.js
    |       └── ...
    ├── game.js
    ├── game.json
    └── ...

src/myOpenDataContext 是 `开放数据域的代码目录`，除 src/myOpenDataContext 以外是 `主域的代码目录`。

主域和开放数据域中的代码不能相互 require。以如下的目录结构为例：

    ├── src  
    |   └── myOpenDataContext
    |       ├── index.js
    |       ├── util.js
    |       └── ...
    ├── lib
    |   └── render.js
    └── game.js

在 game.js 中不能 `require('src/myOpenDataContext/util')`  
在 src/myOpenDataContext/index.js 中不能 `require('../../lib/render.js')`

## 主域和开放数据域的通信

开放数据域不能向主域发送消息。

主域可以向开放数据域发送消息。调用 [wx.getOpenDataContext()](../../document/open-api/context/wx.getOpenDataContext.html) 方法可以获取开放数据域实例，调用实例上的 [OpenDataContext.postMessage()](../../document/open-api/context/OpenDataContext.postMessage.html) 方法可以向开放数据域发送消息。

    // game.js
    let openDataContext = wx.getOpenDataContext()
    openDataContext.postMessage({
      text: 'hello',
      year: (new Date()).getFullYear()
    })

在开放数据域中通过 [wx.onMessage()](../../document/open-api/context/wx.onMessage.html) 方法可以监听从主域发来的消息。

    // src/myOpenDataContext/index.js
    wx.onMessage(data => {
      console.log(data)
      /* {
        text: 'hello',
        year: 2018
      } */
    })

## 展示关系链数据

如果想要展示通过关系链 API 获取到的用户数据，如绘制排行榜等业务场景，需要将排行榜绘制到 `sharedCanvas` 上，再在主域将 sharedCanvas 渲染上屏。

![](../images/open-data/data-flow.png)

    // src/myOpenDataContext/index.js
    let sharedCanvas = wx.getSharedCanvas()

    function drawRankList (data) {
      data.forEach((item, index) => {
        // ...
      })
    }

    wx.getFriendUserGameData({
      success: res => {
        let data = res.data
        drawRankList(data)
      }
    })

sharedCanvas 是主域和开放数据域都可以访问的一个离屏画布。在开放数据域调用 wx.getSharedCanvas() 将返回 sharedCanvas。

    // src/myOpenDataContext/index.js
    let sharedCanvas = wx.getSharedCanvas()
    let context = sharedCanvas.getContext('2d')
    context.fillStyle = 'red'
    context.fillRect(0, 0, 100, 100)

在主域中可以通过开放数据域实例访问 sharedCanvas，通过 drawImage() 方法可以将 sharedCanvas 绘制到上屏画布。

    // game.js
    let openDataContext = wx.getOpenDataContext()
    let sharedCanvas = openDataContext.canvas

    let canvas = wx.createCanvas()
    let context = canvas.getContext('2d')
    context.drawImage(sharedCanvas, 0, 0)

## 限制

当小游戏启动开放数据域，即在 game.json 中添加 openDataContext 配置项时。小游戏环境会对主域和开放数据域应用一些限制。

### 主域

1.  sharedCanvas 只能被绘制到上屏 canvas 上。
2.  上屏 canvas 不能调用 toDataURL，其 context 不能调用 getImageData。
3.  sharedCanvas 不能调用 toDataURL 和 getContext。
4.  不能将上屏 canvas 和 sharedCanvas 以任意形式绘制到其他 canvas 上，包括 drawImage、createPattern、texImage2D、texSubImage2D。

![](../images/open-data/canvas-limit.png)

### 开放数据域

开放数据域只能调用有限的 API，如下所示：

**帧率**

*   [requestAnimationFrame()](../../document/render/frame/requestAnimationFrame.html)
*   [cancelAnimationFrame()](../../document/render/frame/cancelAnimationFrame.html)

**Timer**

*   [setTimeout()](../../document/timer/setTimeout.html)
*   [clearTimeout()](../../document/timer/clearTimeout.html)
*   [setInterval()](../../document/timer/setInterval.html)
*   [clearInterval()](../../document/timer/clearInterval.html)

**触摸事件**

*   [wx.onTouchStart()](../../document/system/touch-event/wx.onTouchStart.html)
*   [wx.onTouchMove()](../../document/system/touch-event/wx.onTouchMove.html)
*   [wx.onTouchEnd()](../../document/system/touch-event/wx.onTouchEnd.html)
*   [wx.onTouchCancel()](../../document/system/touch-event/wx.onTouchCancel.html)
*   [wx.offTouchStart()](../../document/system/touch-event/wx.offTouchStart.html)
*   [wx.offTouchMove()](../../document/system/touch-event/wx.offTouchMove.html)
*   [wx.offTouchEnd()](../../document/system/touch-event/wx.offTouchEnd.html)
*   [wx.offTouchCancel()](../../document/system/touch-event/wx.offTouchCancel.html)

**画布**

*   [wx.createCanvas()](../../document/render/canvas/wx.createCanvas.html)

开放数据域的所有 canvas 只支持 `2d` 渲染模式

**图片**

*   [wx.createImage()](../../document/render/image/wx.createImage.html)

开放数据域的 Image 只能使用本地或微信 CDN 的图片，不能使用开发者自己服务器上的图片。

**开放数据**

*   [wx.getFriendCloudStorage()](../../document/open-api/data/wx.getFriendCloudStorage.html)
*   [wx.getGroupCloudStorage()](../../document/open-api/data/wx.getGroupCloudStorage.html)
*   [wx.getUserCloudStorage()](../../document/open-api/data/wx.getUserCloudStorage.html)
*   [wx.setUserCloudStorage()](../../document/open-api/data/wx.setUserCloudStorage.html)
*   [wx.removeUserCloudStorage()](../../document/open-api/data/wx.removeUserCloudStorage.html)

**监听主域消息**

*   [wx.onMessage()](../../document/open-api/context/wx.onMessage.html)

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

[](midas-signature.html)[](payment.html)</div>

</div>