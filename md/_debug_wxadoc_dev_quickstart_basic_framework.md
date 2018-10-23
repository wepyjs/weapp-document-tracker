<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18102320)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18102320)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18102320)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18102320)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18102320)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18102320)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18102320)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18102320)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/framework.html?t=18102320)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/quickstart/basic/framework.html?t=18102320)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title icon_dev"></span>

微信小程序开发文档

</div>

*   [简易教程](../../)
*   [框架](../../framework/MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
*   [工具](../../devtools/devtools.html)
*   [小程序·云开发](../../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/framework.html?t=18102320)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/quickstart/basic/framework.html?t=18102320)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [基础](../../)
    *   [起步](../../)
        *   [申请帐号](../../#申请帐号)
        *   [安装开发工具](../../#安装开发工具)
        *   [你的第一个小程序](../../#你的第一个小程序)
        *   [编译预览](../../#编译预览)
    *   [代码构成](./file.html)
        *   [JSON 配置](./file.html#json-配置)
        *   [WXML 模板](./file.html#wxml-模板)
        *   [WXSS 样式](./file.html#wxss-样式)
        *   [JS 逻辑交互](./file.html#js-交互逻辑)
    *   [小程序能力](./framework.html)
        *   [小程序的启动](./framework.html#小程序的启动)
        *   [程序与页面](./framework.html#程序与页面)
        *   [组件](./framework.html#组件)
        *   [API](./framework.html#api)
    *   [发布前的准备](./role.html)
        *   [用户身份](./role.html#用户身份)
        *   [预览](./role.html#预览)
        *   [上传代码](./role.html#上传代码)
        *   [小程序的版本](./role.html#小程序的版本)
    *   [上线](./release.html)
        *   [提交审核](./release.html#提交审核)
        *   [发布](./release.html#发布)
        *   [运营数据](./release.html#运营数据)
*   [体验小程序](../../demo.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

上一章中我们把小程序涉及到的文件类型阐述了一遍，我们结合 QuickStart 这个项目来讲一下这些文件是怎么配合工作的。

### 小程序的启动

微信客户端在打开小程序之前，会把整个小程序的代码包下载到本地。

紧接着通过 `app.json` 的 `pages` 字段就可以知道你当前小程序的所有页面路径:

    {
      "pages":[
        "pages/index/index",
        "pages/logs/logs"
      ]
    }

这个配置说明在 QuickStart 项目定义了两个页面，分别位于 `pages/index/index` 和 `pages/logs/logs`。而写在 `pages` 字段的第一个页面就是这个小程序的首页（打开小程序看到的第一个页面）。

于是微信客户端就把首页的代码装载进来，通过小程序底层的一些机制，就可以渲染出这个首页。

小程序启动之后，在 `app.js` 定义的 `App` 实例的 `onLaunch` 回调会被执行:

    App({
      onLaunch: function () {
        // 小程序启动之后 触发
      }
    })

整个小程序只有一个 App 实例，是全部页面共享的，更多的事件回调参考文档 [注册程序 App](../../framework/app-service/app.html) 。

接下来我们简单看看小程序的一个页面是怎么写的。

### 程序与页面

你可以观察到 `pages/logs/logs` 下其实是包括了4种文件的，微信客户端会先根据 `logs.json` 配置生成一个界面，顶部的颜色和文字你都可以在这个 `json` 文件里边定义好。紧接着客户端就会装载这个页面的 `WXML` 结构和 `WXSS` 样式。最后客户端会装载 `logs.js`，你可以看到 `logs.js` 的大体内容就是:

    Page({
      data: { // 参与页面渲染的数据
        logs: []
      },
      onLoad: function () {
        // 页面渲染后 执行
      }
    })

`Page` 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 `data` 数据和 `index.wxml` 一起渲染出最终的结构，于是就得到了你看到的小程序的样子。

在渲染完界面之后，页面实例就会收到一个 `onLoad` 的回调，你可以在这个回调处理你的逻辑。

有关于 `Page` 构造器更多详细的文档参考 [注册页面 Page](../../framework/app-service/page.html) 。

### 组件

小程序提供了丰富的基础组件给开发者，开发者可以像搭积木一样，组合各种组件拼合成自己的小程序。

就像 `HTML` 的 `div`, `p` 等标签一样，在小程序里边，你只需要在 `WXML` 写上对应的组件标签名字就可以把该组件显示在界面上，例如，你需要在界面上显示地图，你只需要这样写即可：

    <map></map>

使用组件的时候，还可以通过属性传递值给组件，让组件可以以不同的状态去展现，例如，我们希望地图一开始的中心的经纬度是广州，那么你需要声明地图的 longitude（中心经度） 和 latitude（中心纬度）两个属性:

    <map longitude="广州经度" latitude="广州纬度"></map>

组件的内部行为也会通过事件的形式让开发者可以感知，例如用户点击了地图上的某个标记，你可以在 `js` 编写 `markertap` 函数来处理：

    <map bindmarkertap="markertap" longitude="广州经度" latitude="广州纬度"></map>

当然你也可以通过 `style` 或者 `class` 来控制组件的外层样式，以便适应你的界面宽度高度等等。

更多的组件可以参考 [小程序的组件](../../component/)。

### API

为了让开发者可以很方便的调起微信提供的能力，例如获取用户信息、微信支付等等，小程序提供了很多 API 给开发者去使用。

要获取用户的地理位置时，只需要：

    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
      }
    })

调用微信扫一扫能力，只需要：

    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })

需要注意的是：多数 API 的回调都是异步，你需要处理好代码逻辑的异步问题。

更多的 API 能力见 [小程序的API](../../framework/app-service/api.html)。

通过这个章节你已经大概了解了小程序运行的一些基本概念，当你开发完一个小程序之后，你就需要发布你的小程序。在[下个章节](role.html)，你会知道发布前需要做什么准备。

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

[](./file.html)[](./role.html)</div>

</div>