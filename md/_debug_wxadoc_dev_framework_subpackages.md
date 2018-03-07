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

*   [简易教程](../)
*   [框架](MINA.html)
*   [组件](../component/)
*   [API](../api/)
*   [工具](../devtools/devtools.html)
*   [Q&A](../qa.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](structure.html)
*   [配置](config.html)
*   [逻辑层](app-service/)
    *   [注册程序](app-service/app.html)
    *   [场景值](app-service/scene.html)
    *   [注册页面](app-service/page.html)
    *   [路由](app-service/route.html)
    *   [模块化](app-service/module.html)
    *   [API](app-service/api.html)
*   [视图层](view/)
    *   [WXML](view/wxml/)
        *   [数据绑定](view/wxml/data.html)
        *   [列表渲染](view/wxml/list.html)
        *   [条件渲染](view/wxml/conditional.html)
        *   [模板](view/wxml/template.html)
        *   [事件](view/wxml/event.html)
        *   [引用](view/wxml/import.html)
    *   [WXS](view/wxs/)
        *   [模块](view/wxs/01wxs-module.html)
        *   [变量](view/wxs/02variate.html)
        *   [注释](view/wxs/03annotation.html)
        *   [运算符](view/wxs/04operator.html)
        *   [语句](view/wxs/05statement.html)
        *   [数据类型](view/wxs/06datatype.html)
        *   [基础类库](view/wxs/07basiclibrary.html)
    *   [WXSS](view/wxss.html)
    *   [组件](view/component.html)
*   [自定义组件](custom-component/)
    *   [组件模版和样式](custom-component/wxml-wxss.html)
    *   [Component构造器](custom-component/component.html)
    *   [组件事件](custom-component/events.html)
    *   [behaviors](custom-component/behaviors.html)
    *   [组件间关系](custom-component/relations.html)
*   [分包加载](subpackages.html)
*   [多线程](workers.html)
*   [基础库](client-lib.html)
*   [兼容](compatibility.html)
*   [运行机制](operating-mechanism.html)
*   [性能](performance/)
    *   [优化建议](performance/tips.html)
    *   [分析工具](performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 分包加载

> 微信 6.6 客户端，1.7.3 及以上基础库开始支持，请更新至最新客户端版本，开发者工具请使用 1.01.1712150 及以上版本，可[点此下载](../devtools/download.html)

某些情况下，开发者需要将小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。

在构建小程序分包项目时，构建会输出一个或多个功能的分包，其中每个分包小程序必定含有一个**主包**，所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本，而**分包**则是根据开发者的配置进行划分。

在小程序启动时，默认会下载主包并启动主包内页面，如果用户需要打开分包内某个页面，客户端会把对应分包下载下来，下载完成后再进行展示。

目前小程序分包大小有以下限制：

*   整个小程序所有分包大小不超过 4M
*   单个分包/主包大小不能超过 2M

对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。

## 使用方法

假设支持分包的小程序目录结构如下：

    ├── app.js
    ├── app.json
    ├── app.wxss
    ├── packageA
    │   └── pages
    │       ├── cat
    │       └── dog
    ├── packageB
    │   └── pages
    │       ├── apple
    │       └── banana
    ├── pages
    │   ├── index
    │   └── logs
    └── utils

开发者通过在 app.json `subPackages` 字段声明项目分包结构：

    {
      "pages":[
        "pages/index",
        "pages/logs"
      ],
      "subPackages": [
        {
          "root": "packageA",
          "pages": [
            "pages/cat",
            "pages/dog"
          ]
        }, {
          "root": "packageB",
          "pages": [
            "pages/apple",
            "pages/banana"
          ]
        }
      ]
    }

## 打包原则

*   声明 `subPackages` 后，将按 `subPackages` 配置路径进行打包，`subPackages` 配置路径外的目录将被打包到 app（主包） 中
*   app（主包）也可以有自己的 pages（即最外层的 pages 字段）
*   `subPackage` 的根目录不能是另外一个 `subPackage` 内的子目录
*   首页的 TAB 页面必须在 app（主包）内

## 引用原则

*   `packageA` 无法 require `packageB` JS 文件，但可以 require `app`、自己 package 内的 JS 文件
*   `packageA` 无法 import `packageB` 的 template，但可以 require `app`、自己 package 内的 template
*   `packageA` 无法使用 `packageB` 的资源，但可以使用 app、自己 package 内的资源

## 低版本兼容

由微信后台编译来处理旧版本客户端的兼容，后台会编译两份代码包，一份是分包后代码，另外一份是整包的兼容代码。 新客户端用分包，老客户端还是用的整包，完整包会把各个 subpackage 里面的路径放到 pages 中。

## 示例项目

[下载 小程序示例分包加载版源码](../demo/demo-subpackages.zip)

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

[](custom-component/relations.html)[](workers.html)</div>

</div>