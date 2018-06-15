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

*   [教程](tutorial/ad/banner-ad.html)
*   [API](document/render/canvas/wx.createCanvas.html)
*   [工具](devtools/devtools.html)
*   [腾讯云支持](qcloud/qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [广告](tutorial/ad/banner-ad.html)
    *   [Banner 广告](tutorial/ad/banner-ad.html)
    *   [激励视频广告](tutorial/ad/rewarded-video-ad.html)
*   [基础](./)
    *   [快速上手](./)
    *   [Adapter](tutorial/base/adapter.html)
    *   [对引擎的支持](tutorial/base/engine.html)
    *   [模块化](tutorial/base/module.html)
    *   [分包加载](tutorial/base/subpackages.html)
*   [能力](tutorial/ability/audio.html)
    *   [音频播放](tutorial/ability/audio.html)
    *   [文件系统](tutorial/ability/file-system.html)
*   [可用性](tutorial/usability/debug.html)
    *   [调试](tutorial/usability/debug.html)
    *   [性能](tutorial/usability/performance.html)
    *   [小游戏更新](tutorial/usability/update.html)
    *   [多线程 Worker](tutorial/usability/worker.html)
*   [开放能力](tutorial/open-ability/authorize.html)
    *   [用户授权](tutorial/open-ability/authorize.html)
    *   [游戏圈使用指南](tutorial/open-ability/game-club.html)
    *   [用户登录态签名](tutorial/open-ability/http-signature.html)
    *   [米大师支付签名](tutorial/open-ability/midas-signature.html)
    *   [关系链数据使用指南](tutorial/open-ability/open-data.html)
    *   [虚拟支付](tutorial/open-ability/payment.html)
    *   [获取二维码](tutorial/open-ability/qrcode.html)
    *   [排行榜配置指引](tutorial/open-ability/ranklist.html)
    *   [转发](tutorial/open-ability/share.html)
    *   [用户数据的签名验证和加解密](tutorial/open-ability/signature.html)
    *   [UnionID 机制说明](tutorial/open-ability/union-id.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 快速上手

### 安装开发工具

前往 [开发者工具下载页面](devtools/download.html) ，根据自己的操作系统下载对应的安装包进行安装。

### 你的第一个小游戏

新建项目选择小程序项目，选择代码存放的硬盘路径，并输入 AppId。

你可以前往 [小游戏注册](https://developers.weixin.qq.com/minigame/introduction/index.html#%E5%B0%8F%E6%B8%B8%E6%88%8F%E6%B3%A8%E5%86%8C) 通过注册小游戏帐号来获得 AppId，也可以使用无 AppId 的体验模式。给你的项目起一个好听的名字，最后，勾选“建立游戏快速启动模板”（注意：你要选择一个空的目录才会有这个选项），点击确定，你就得到了你的第一个小游戏了。 ![](tutorial/images/select-game.jpg)

点击顶部菜单编译就可以在 IDE 预览你的第一个小游戏。

![](tutorial/images/first-game.jpg)

### 真机预览

点击工具上的编译按钮，可以在工具的左侧模拟器界面看到这个小游戏的表现。点击预览按钮，通过微信的扫一扫在手机上体验你的第一个小游戏。

![](tutorial/images/phone-preview.jpg)

### 文件结构

小游戏只有以下两个必要文件：

    ├── game.js
    └── game.json

1.  `game.js` 小游戏入口文件
2.  `game.json` 配置文件

### 代码包大小限制

每个小游戏允许上传的代码包总大小为 4MB。

### 配置

小游戏开发者通过在根目录编写一个 `game.json` 文件进行配置，开发者工具和客户端需要读取这个配置，完成相关界面渲染和属性设置。

<table>

<thead>

<tr>

<th>key</th>

<th>数据类型</th>

<th>说明</th>

<th>默认值</th>

</tr>

</thead>

<tbody>

<tr>

<td>[deviceOrientation](#deviceorientation)</td>

<td>String</td>

<td>支持的屏幕方向</td>

<td>portrait</td>

</tr>

<tr>

<td>showStatusBar</td>

<td>Boolean</td>

<td>是否显示状态栏</td>

<td>false</td>

</tr>

<tr>

<td>networkTimeout</td>

<td>Number</td>

<td>网络请求的超时时间，单位：毫秒</td>

<td>60000</td>

</tr>

<tr>

<td>networkTimeout.request</td>

<td>Number</td>

<td>wx.request 的超时时间，单位：毫秒</td>

<td>60000</td>

</tr>

<tr>

<td>networkTimeout.connectSocket</td>

<td>Number</td>

<td>wx.connectSocket 的超时时间，单位：毫秒</td>

<td>60000</td>

</tr>

<tr>

<td>networkTimeout.uploadFile</td>

<td>Number</td>

<td>wx.uploadFile 的超时时间，单位：毫秒</td>

<td>60000</td>

</tr>

<tr>

<td>networkTimeout.downloadFile</td>

<td>Number</td>

<td>wx.downloadFile 的超时时间，单位：毫秒</td>

<td>60000</td>

</tr>

<tr>

<td>workers</td>

<td>String</td>

<td>多线程 Worker 配置项，详细请参考 [Worker文档](tutorial/usability/worker.html)</td>

<td>无</td>

</tr>

</tbody>

</table>

### deviceOrientation

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>portrait</td>

<td>竖屏</td>

</tr>

<tr>

<td>landscape</td>

<td>横屏</td>

</tr>

</tbody>

</table>

### 示例配置

    {
        "deviceOrientation": "portrait",
        "networkTimeout": {
            "request": 5000,
            "connectSocket": 5000,
            "uploadFile": 5000,
            "downloadFile": 5000
        }
    }

### wx API

你只能使用 JavaScript 来编写小游戏。小游戏的运行环境是一个 绑定了一些方法的 JavaScript VM。不同于浏览器，这个运行环境没有 BOM 和 DOM API，只有 wx API。接下来我们将介绍如何用 wx API 来完成创建画布、绘制图形、显示图片以及响应用户交互等基础功能。

#### 创建 Canvas

调用 [wx.createCanvas()](document/render/canvas/wx.createCanvas.html) 接口，可以创建一个 [Canvas](document/render/canvas/Canvas.html) 对象。

    var canvas = wx.createCanvas()

此时创建的 canvas 是一个上屏 Canvas，已经显示在了屏幕上，且与屏幕等宽等高。

    console.log(canvas.width, canvas.height)

在整个小游戏代码中首次调用 wx.createCanvas() 创建的是上屏 Canvas，之后调用则创建的是离屏 Canvas。如果你的项目中使用了官方提供的 [Adapter](tutorial/base/adapter.html) 即 weapp-adapter.js（关于什么是 Adpater 请参考官方教程 [Adapter](tutorial/base/adapter.html)），那么你此时创建的会是一个离屏 Canvas。因为在 weapp-adapter.js 已经调用了一次 wx.createCanvas()，并把返回的 canvas 作为全局变量暴露出来。假设你的项目目录结构如下：

    ├── game.js
    ├── weapp-adapter.js
    └── game.json

在 weapp-adapter.js 中已经调用了一次 wx.createCanvas()，并把返回的 canvas 作为全局变量暴露出来。

    // weapp-adapter
    canvas = wx.createCanvas()

如果你在 require weapp-adapter.js 之后再调用 wx.createCanvas()，那么创建的 Canvas 会是一个离屏的 Canvas，因为此时已经不是对该 API 的首次调用。

    require('./weapp-adapter')
    var myCanvas = wx.createCanvas()

#### 在 Canvas 上进行绘制

但是由于没有在 canvas 上进行绘制，所以 canvas 是透明的。使用 2d 渲染上下文的进行简单的绘制，可以在屏幕左上角看到一个 100x100 的红色矩形。

    var context = canvas.getContext('2d')
    context.fillStyle = 'red'
    context.fillRect(0, 0, 100, 100)

通过 [Canvas.getContext()](document/render/canvas/Canvas.getContext.html) 方法可以获取 2d 或 WebGL 渲染上下文 [RenderingContext](document/render/canvas/RenderingContext.html)，调用渲染上下文的绘制方法可以在 Canvas 上进行绘制。小游戏基本上支持 2d 和 WebGL 1.0 所有的属性和方法，详情请见 [RenderingContext](document/render/canvas/RenderingContext.html)。由于使用 WebGL 的绘制过程较为复杂，所以本文中的示例代码都以 2d 渲染上下文的绘制方法编写。

通过设置 width 和 height 属性可以改变 Canvas 对象的宽高，但这也会导致 Canvas 内容的清空和渲染上下文的重置。

    canvas.width = 300
    canvas.height = 300

#### 显示图片

通过 [wx.createImage()](document/render/image/wx.createImage.html) 接口，可以创建一个 [Image](document/render/image/Image.html) 对象。Image 对象可以加载图片。当 Image 对象被绘制到 Canvas 上时，图片才会显示在屏幕上。

    var image = wx.createImage()

设置 Image 对象的 src 属性可以加载一张本地图片或网络图片，当图片加载完毕时会执行注册的 onload 回调函数，此时可以将 Image 对象绘制到 Canvas 上。

    image.onload = function () {
        console.log(image.width, image.height)
        context.drawImage(image, 0, 0)
    }
    image.src = 'logo.png'

#### 创建多个 Canvas

在整个小游戏运行期间，首次调用 wx.createCanvas 接口创建的是一个上屏 Canvas。在这个 canvas 上绘制的内容都将显示在屏幕上。而第二次、第三次等后几次调用 wx.createCanvas 创建的都会是离屏 Canvas。在离屏 Canvas 上绘制的内容仅仅只是绘制到了这个离屏 Canvas 上，并不会显示在屏幕上。

以如下代码为例，运行后会发现屏幕上并没有在 (0, 0) 的位置显示 100x100 的红色矩形。因为我们是在一个离屏的 Canvas 绘制的。

    var screenCanvas = wx.createCanvas()
    var offScreenCanvas = wx.createCanvas()
    var offContext = offScreenCanvas.getContext('2d')
    offContext.fillStyle = 'red'
    offContext.fillRect(0, 0, 100, 100)

为了让这个红色矩形显示在屏幕上，我们需要把离屏的 offScreenCanvas 绘制到上屏的 screenCanvas 上。

    var screenContext = screenCanvas.getContext('2d')
    screenContext.drawImage(offScreenCanvas, 0, 0)

#### 动画

在 JavaScript 中，一般通过 setInterval/setTimeout/requestAnimationFrame 来实现动画效果。小游戏对这些 API 提供了支持：

*   [setInterval()](document/timer/setInterval.html)
*   [setTimeout()](document/timer/setTimeout.html)
*   [requestAnimationFrame()](document/render/frame/requestAnimationFrame.html)
*   [clearInterval()](document/timer/clearInterval.html)
*   [clearTimeout()](document/timer/clearTimeout.html)
*   [cancelAnimationFrame()](document/render/frame/cancelAnimationFrame.html)

另外，还可以通过 [wx.setPreferredFramesPerSecond()](document/render/frame/wx.setPreferredFramesPerSecond.html) 修改执行 requestAnimationFrame 回调函数的频率，以降低性能消耗。

#### 触摸事件

响应用户与屏幕的交互是游戏中必不可少的部分，小游戏参照 DOM 中的 TouchEvent 提供了以下监听触摸事件的 API：

*   [wx.onTouchStart()](document/system/touch-event/wx.onTouchStart.html)
*   [wx.onTouchMove()](document/system/touch-event/wx.onTouchMove.html)
*   [wx.onTouchEnd()](document/system/touch-event/wx.onTouchEnd.html)
*   [wx.onTouchCancel()](document/system/touch-event/wx.onTouchCancel.html)

    wx.onTouchStart(function (e) {
        console.log(e.touches)
    })

    wx.onTouchMove(function (e) {
        console.log(e.touches)
    })

    wx.onTouchEnd(function (e) {
        console.log(e.touches)
    })

    wx.onTouchCancel(function (e) {
        console.log(e.touches)
    })

#### 全局对象

window 对象是浏览器环境下的全局对象。小游戏的运行环境中没有 BOM API，因此没有 window 对象。但是提供了全局对象 GameGlobal，所有全局定义的变量都是 GameGlobal 的属性。

    console.log(GameGlobal.setTimeout === setTimeout)
    console.log(GameGlobal.requestAnimationFrame === requestAnimationFrame)
    // true

开发者可以根据需要把自己封装的类和函数挂载到 GameGlobal 上。

    GameGlobal.render = function () {
        //省略方法的具体实现...
    }

    render()

GameGlobal 是一个全局对象，本身也是一个存在循环引用的对象。

    console.log(GameGlobal === GameGlobal.GameGlobal)

console.log 无法在真机上将存在循环引用的对象输出到 vConsole 中。因此真机调试时请注释 console.log(GameGlobal) 这样的代码，否则将会产生这样的错误

    An object width circular reference can't be logged

### 文件类型限制

小游戏限制了可以上传的文件类型。只有在以下列表中的文件可以上传成功：

1.  png
2.  jpg
3.  jpeg
4.  gif
5.  svg
6.  js
7.  json
8.  cer
9.  obj
10.  dae
11.  fbx
12.  mtl
13.  stl
14.  3ds
15.  mp3
16.  pvr
17.  wav
18.  plist
19.  ttf
20.  fnt
21.  gz
22.  ccz
23.  m4a
24.  mp4
25.  bmp
26.  atlas
27.  swf
28.  ani
29.  part
30.  proto
31.  bin
32.  sk
33.  mipmaps
34.  txt
35.  zip
36.  tt
37.  map
38.  ogg
39.  silk
40.  dbbin
41.  dbmv
42.  etc
43.  lmat
44.  lm
45.  ls
46.  lh
47.  lani
48.  lav
49.  lsani
50.  ltc

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

[](tutorial/ad/rewarded-video-ad.html)[](tutorial/base/adapter.html)</div>

</div>