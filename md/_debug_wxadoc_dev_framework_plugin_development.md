<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)

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
*   [框架](../MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
*   [工具](../../devtools/devtools.html)
*   [Q&A](../../qa.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](../structure.html)
*   [配置](../config.html)
*   [逻辑层](../app-service/)
    *   [注册程序](../app-service/app.html)
    *   [场景值](../app-service/scene.html)
    *   [注册页面](../app-service/page.html)
    *   [路由](../app-service/route.html)
    *   [模块化](../app-service/module.html)
    *   [API](../app-service/api.html)
*   [视图层](../view/)
    *   [WXML](../view/wxml/)
        *   [数据绑定](../view/wxml/data.html)
        *   [列表渲染](../view/wxml/list.html)
        *   [条件渲染](../view/wxml/conditional.html)
        *   [模板](../view/wxml/template.html)
        *   [事件](../view/wxml/event.html)
        *   [引用](../view/wxml/import.html)
    *   [WXS](../view/wxs/)
        *   [模块](../view/wxs/01wxs-module.html)
        *   [变量](../view/wxs/02variate.html)
        *   [注释](../view/wxs/03annotation.html)
        *   [运算符](../view/wxs/04operator.html)
        *   [语句](../view/wxs/05statement.html)
        *   [数据类型](../view/wxs/06datatype.html)
        *   [基础类库](../view/wxs/07basiclibrary.html)
    *   [WXSS](../view/wxss.html)
    *   [组件](../view/component.html)
*   [自定义组件](../custom-component/)
    *   [组件模版和样式](../custom-component/wxml-wxss.html)
    *   [Component构造器](../custom-component/component.html)
    *   [组件事件](../custom-component/events.html)
    *   [behaviors](../custom-component/behaviors.html)
    *   [组件间关系](../custom-component/relations.html)
    *   [抽象节点](../custom-component/generics.html)
*   [插件](./)
    *   [开发插件](development.html)
    *   [使用插件](using.html)
    *   [插件的限制](api-limit.html)
*   [分包加载](../subpackages.html)
*   [多线程](../workers.html)
*   [基础库](../client-lib.html)
*   [兼容](../compatibility.html)
*   [运行机制](../operating-mechanism.html)
*   [性能](../performance/)
    *   [优化建议](../performance/tips.html)
    *   [分析工具](../performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 开发插件

开发插件前，请阅读了解[《小程序插件接入指南》](../../../introduction/plugin.html)了解开通流程及开放范围，并开通插件功能。如果未开通插件功能，将无法上传插件。

## 创建插件项目

插件类型的项目可以在开发者工具中直接创建。[详情](../../devtools/plugin.html)

![创建插件](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/createplugin.png)

新建插件类型的项目后，如果创建示例项目，则项目中将包含两个目录：

*   `plugin` 目录：插件代码目录。
*   `miniprogram` 目录：放置一个小程序，用于调试插件。

后者可以当成普通小程序来编写，用于插件调试、预览和审核。下面的内容主要介绍前者的编写方法。

## 插件目录结构

一个插件可以包含若干个自定义组件，和一组js接口。插件的目录内容如下：

    ├── components
    │   ├── hello-component.js   // 插件提供的自定义组件（可以有多个）
    │   ├── hello-component.json
    │   ├── hello-component.wxml
    │   └── hello-component.wxss
    ├── index.js                 // 插件的 js 接口
    └── plugin.json              // 插件配置文件

## 插件配置文件

插件配置文件 `plugin.json` 主要说明有哪些自定义组件可以供插件外部调用，并标识哪个js文件是插件的js接口文件，如：

**代码示例：**

    {
      "publicComponents": {
        "hello-component": "components/hello-component"
      },
      "main": "index.js"
    }

## 插件对外接口

插件内的自定义组件与普通的自定义组件相仿。插件可以定义若干个自定义组件，这些自定义组件都可以在插件内相互引用。其中，提供给外部使用的自定义组件，必须在插件配置文件中显式声明。

插件的 js 接口文件 `index.js` 中可以 export 一些 js 接口，插件的使用者可以使用 `requirePlugin` 来获得这些接口。

**代码示例：**

    module.exports = {
      hello: function() {
        console.log('Hello plugin!')
      }
    }

## 上传和发布

插件可以像小程序一样预览和上传，但插件没有体验版。

插件会同时有多个线上版本，由使用插件的小程序决定具体使用的版本号。

## 插件请求签名

插件在使用 `wx.request` 等 API 发送网络请求时，将会额外携带一个签名 `HostSign` ，用于验证请求来源于小程序插件。这个签名位于请求头中，形如：

    X-WECHAT-HOSTSIGN: {"noncestr":"NONCESTR", "timestamp":"TIMESTAMP", "signature":"SIGNATURE"}

其中， `NONCESTR` 和 `TIMESTAMP` 是是用于计算签名 `SIGNATRUE` 的参数，签名算法为：

    SIGNATURE = sha1(APPID + NONCESTR + TIMESTAMP + TOKEN)

插件开发者可以在服务器上使用这个算法校验签名。其中， `APPID` 是所在小程序的 AppId ； `TOKEN` 是插件 Token ，可以在小程序插件基本设置中找到。

**Tips:**

*   目前，手机预览插件时将使用一个特殊分配的小程序 appid （与插件的 appid 不同）。

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./)[](using.html)</div>

</div>