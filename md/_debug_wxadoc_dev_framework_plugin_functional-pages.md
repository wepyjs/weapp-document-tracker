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

*   [简易教程](../../)
*   [框架](../MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
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
    *   [插件功能页](functional-pages.html)
*   [分包加载](../subpackages.html)
*   [多线程](../workers.html)
*   [基础库](../client-lib/)
    *   [版本分布](../client-lib/version.html)
    *   [与客户端版本对应关系](../client-lib/client.html)
*   [兼容](../compatibility.html)
*   [运行机制](../operating-mechanism.html)
*   [性能](../performance/)
    *   [优化建议](../performance/tips.html)
    *   [分析工具](../performance/tools.html)
*   [基础库更新日志](../release.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 插件功能页

插件功能页从小程序基础库版本 [2.1.0](../compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。") 开始支持。

插件不能直接调用 `wx.login` 等较为敏感的接口。在需要访问一些敏感接口时，可以使用插件功能页的方式。使用插件功能页可以实现以下这些功能：

*   获取用户信息，包括 `openid` 和昵称等（相当于 `wx.login` 和 `wx.getUserInfo` 的功能）。
*   支付（相当于 `wx.requestPayment` ）。

需要注意的是：插件使用支付功能，需要进行额外的权限申请，申请位置位于[管理后台](https://mp.weixin.qq.com)的“小程序插件 -> 基本设置 -> 支付能力”设置项中。另外，无论是否通过申请，主体为个人小程序在使用插件时，都无法正常使用插件里的支付功能。

在具体使用功能页时，插件可以在插件的自定义组件中放置一个 `<functional-page-navigator>` 组件，用户在点击这个组件区域时，可以跳转到一个固定的页面，允许用户执行登录或其他操作。

## 激活功能页特性

功能页是 **插件所有者小程序** 中的一个特殊页面。

插件所有者小程序，指的是与插件 AppID 相同的小程序。例如，“小程序示例”小程序开发了一个“小程序示例插件”，无论这个插件被哪个小程序使用，这个插件的插件所有者小程序都是“小程序示例”。

启用插件功能页时，需要在插件所有者小程序 `app.json` 文件中添加 `functionalPages` 定义段，其值为 `true` 。

    {
      "functionalPages": true
    }

注意，新增或改变这个字段时，需要这个小程序发布新版本，才能在正式环境中使用插件功能页。

## 跳转到功能页

在插件需要登录时，可以在插件的自定义组件中放置一个 `<functional-page-navigator>` 组件。

**代码示例：**

    <functional-page-navigator name="loginAndGetUserInfo" args="" version="develop" bind:success="loginSuccess">
      <button>登录到插件</button>
    </functional-page-navigator>

用户在点击这个区域时，会自动跳转到插件所有者小程序的功能页。功能页会提示用户进行登录或其他相应的操作。操作结果会以组件事件的方式返回。

具体用法和支持的功能页列表详见 [组件说明](../../component/functional-page-navigator.html) 。

## 真机开发测试的常规步骤

目前，功能页的跳转目前不支持在开发者工具中调试，请在真机上测试。初次进行真机开发测试时，通常步骤如下。

1.  在开发者工具上的 **普通小程序项目** 模式创建或编辑插件所有者小程序项目，在 `app.json` 中设置 `"functionalPages": true` 来激活功能页特性，并点击“预览”。
2.  用测试用的真机扫一下预览二维码，此时会进入插件所有者小程序，进入后可以直接退出这个小程序。
3.  在开发者工具上另开一个 **插件项目** 来创建或编辑插件，放置 `functional-page-navigator` 组件并将属性设置为 `version="develop"` 。
4.  此时点击预览可以生成插件预览二维码，用测试用的真机扫码即可预览功能页；如果更改了插件代码，通常重复3、4两个步骤即可。
5.  如果过了一段时间之后，跳转功能页时出现“开发版已过期”这样的提示，从第1步开始重试一次。

注意，在插件提审前，需要：

1.  确保已发布设置了 `"functionalPages": true` 的插件所有者小程序；
2.  确保所有的 `functional-page-navigator` 组件属性设置为 `version="release"` 。

## 功能页函数

在使用支付功能页时，插件所有者小程序需要提供一个函数来响应支付请求。这个响应函数应当写在小程序根目录中的 `functional-pages/request-payment.js` 文件中，名为 `beforeRequestPayment` 。如果不提供这段代码，将通过 fail 事件返回失败。

**注意：功能页函数不应 require 其他非 functional-pages 目录中的文件，其他非 functional-pages 目录中的文件也不应 require 这个目录中的文件。这样的 require 调用在未来将不被支持。**

**代码示例：**

    // functional-pages/request-payment.js
    exports.beforeRequestPayment = function(paymentArgs, callback) {
      paymentArgs // 就是 functional-page-navigator 的 args 属性中 paymentArgs

      // 在这里可以执行一些支付前的参数处理逻辑，包括通知后台调用统一下单接口

      // 在 callback 中需要返回两个参数： err 和 requestPaymentArgs
      // err 应为 null （或者一些失败信息）
      // requestPaymentArgs 将被用于调用 wx.requestPayment
      callback(null, {
        // 这里的参数与 wx.requestPayment 相同，除了 success/fail/complete 不被支持
        timeStamp: timeStamp,
        nonceStr: nonceStr,
        package: package,
        signType: signType,
        paySign: paySign,
      })
    }

**这个目录和文件应当被放置在插件所有者小程序代码中（而非插件代码中），它是插件所有者小程序的一部分（而非插件的一部分）。** 如果需要新增或更改这段代码，需要发布插件所有者小程序，才能在正式版中生效；需要重新预览插件所有者小程序，才能在开发版中生效。

## 功能页常见问题 FAQ

*   Q：如何正确编辑插件所有者小程序？
*   A：应该在开发者工具的“小程序”类型项目中编辑，而不是在“插件”类型的项目中编辑。比如，“小程序示例插件”的所有者小程序是“小程序示例”，它们的 AppID 都是 `wxidxxxxxxxxxxxxxx` ，如果是初次开发“小程序示例”小程序，可以在开发者工具中创建一个小程序项目，其 AppID 为 `wxidxxxxxxxxxxxxxx` ；如果之前开发过“小程序示例”小程序，直接打开之前的小程序项目即可。

*   Q：点击 `<functional-page-navigator>` 之后没有任何反应。

*   A：请检查引用插件的小程序和插件本身是不是同一个 AppID ，如果是，这种情况下使用 `<functional-page-navigator>` 不会有任何反应。

*   Q：点击 `<functional-page-navigator>` 之后，展示了一个页面提示“页面不存在”。

*   A：这种情况是因为插件所有者小程序没有正确设置 `"functionalPages": true` 。如果 `functional-page-navigator` 的 `version="develop"` ，这部手机需要扫码并进入插件所有者小程序一次；如果 `version="release"` ，请确保包含 `"functionalPages": true` 的插件所有者小程序已被发布。

*   Q：点击 `<functional-page-navigator version="develop">` 之后，弹窗提示“小程序开发版已过期”。

*   A：遇到这种情况，重新扫码并进入插件所有者小程序一次即可。

*   Q：点击 `<functional-page-navigator name="requestPayment">` 之后，展示了一个页面提示“该功能无法使用”。

*   A：在使用插件功能页时，小程序不能是个人小程序，同时，插件也需要额外的步骤申请开通插件支付权限（位于 [管理后台](https://mp.weixin.qq.com) -> 小程序插件 -> 基本设置 -> 支付能力 ）。

*   Q：点击 `<functional-page-navigator name="requestPayment">` 之后，点击页面中的“支付”按钮，立刻退出了支付功能页。

*   A：这通常是因为没有找到功能页函数 `beforeRequestPayment` ，请检查插件所有者小程序的 `functional-pages/request-payment.js` 文件和其中的 `beforeRequestPayment` 函数是否存在。

*   Q：点击 `<functional-page-navigator>` 之后，展示了一个仅有返回按钮的页面。

*   A：请检查 `<functional-page-navigator>` 的 `name` 属性是否被正确设置。

*   Q：开发版可以正常跳转，但审核反馈不能跳转。

*   A：请发布设置了 `"functionalPages": true` 的插件所有者小程序，且所有的 `functional-page-navigator` 组件属性设置为 `version="release"` 。

#### Bugs & Tips

*   Tip：如果使用插件的小程序就是插件所有者小程序，插件功能页不能使用。
*   Bug：在微信版本 6.6.7 中，功能页被拉起时会触发 App 的部分生命周期并使得功能页启动时间变得比较长。在后续的微信版本中这一行为会发生变更，使 App 生命周期不再被触发。

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](api-limit.html)[](../subpackages.html)</div>

</div>