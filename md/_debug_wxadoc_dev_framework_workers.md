<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
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

微信小程序开发文档

</div>

*   [简易教程](../)
*   [框架](MINA.html)
*   [组件](../component/)
*   [API](../api/)
*   [工具](../devtools/devtools.html)
*   [腾讯云支持](../qcloud/qcloud.html)

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
    *   [抽象节点](custom-component/generics.html)
*   [插件](plugin/)
    *   [开发插件](plugin/development.html)
    *   [使用插件](plugin/using.html)
    *   [插件的限制](plugin/api-limit.html)
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

## 多线程 Worker

一些异步处理的任务，可以放置于 Worker 中运行，待运行结束后，再把结果返回到小程序主线程。Worker 运行于一个单独的全局上下文与线程中，不能直接调用主线程的方法。 Worker 与主线程之间的数据传输，双方使用 [Worker.postMessage()](../api/createWorker.html) 来发送数据，[Worker.onMessage()](../api/createWorker.html) 来接收数据，传输的数据并不是直接共享，而是被复制的。

#### 步骤

##### 1\. 配置 Worker 信息

在 `app.json` 中可配置 `Worker` 代码放置的目录，目录下的代码将被打包成一个文件：

配置示例：

    {
      "workers": "workers"
    }

##### 2\. 添加 Worker 代码文件

根据步骤 1 中的配置，在代码目录下新建以下两个入口文件：

    workers/request/index.js
    workers/request/utils.js
    workers/response/index.js

添加后，目录结构如下：

    ├── app.js
    ├── app.json
    ├── project.config.json
    └── workers
        ├── request
        │   ├── index.js
        │   └── utils.js
        └── response
            └── index.js

#### 3\. 编写 Worker 代码

在 `workers/request/index.js` 编写 Worker 响应代码

    var utils = require('./utils')

    // 在 Worker 线程执行上下文会全局暴露一个 `worker` 对象，直接调用 worker.onMeesage/postMessage 即可
    worker.onMessage(function (res) {
      console.log(res)
    })

#### 4\. 在主线程中初始化 Worker

在主线程的代码 app.js 中初始化 Worker

    var worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径

#### 5\. 主线程向 Worker 发送消息

    worker.postMessage({
      msg: 'hello worker'
    })

worker 对象的其它接口请看 [worker接口说明](../api/createWorker.html)

#### Tips

1.  Worker 最大并发数量限制为 1 个，创建下一个前请用 [Worker.terminate()](../api/createWorker.html) 结束当前 Worker
2.  Worker 内代码只能 require 指定 Worker 路径内的文件，无法引用其它路径
3.  Worker 的入口文件由 [wx.createWorker()](../api/createWorker.html) 时指定，开发者可动态指定 Worker 入口文件
4.  Worker 内不支持 `wx` 系列的 API
5.  Workers 之间不支持发送消息

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

[](subpackages.html)[](client-lib.html)</div>

</div>