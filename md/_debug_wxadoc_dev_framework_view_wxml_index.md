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

*   [简易教程](../../../)
*   [框架](../../MINA.html)
*   [组件](../../../component/)
*   [API](../../../api/)
*   [工具](../../../devtools/devtools.html)
*   [腾讯云支持](../../../qcloud/qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](../../structure.html)
*   [配置](../../config.html)
*   [逻辑层](../../app-service/)
    *   [注册程序](../../app-service/app.html)
    *   [场景值](../../app-service/scene.html)
    *   [注册页面](../../app-service/page.html)
    *   [路由](../../app-service/route.html)
    *   [模块化](../../app-service/module.html)
    *   [API](../../app-service/api.html)
*   [视图层](../)
    *   [WXML](./)
        *   [数据绑定](data.html)
        *   [列表渲染](list.html)
        *   [条件渲染](conditional.html)
        *   [模板](template.html)
        *   [事件](event.html)
        *   [引用](import.html)
    *   [WXS](../wxs/)
        *   [模块](../wxs/01wxs-module.html)
        *   [变量](../wxs/02variate.html)
        *   [注释](../wxs/03annotation.html)
        *   [运算符](../wxs/04operator.html)
        *   [语句](../wxs/05statement.html)
        *   [数据类型](../wxs/06datatype.html)
        *   [基础类库](../wxs/07basiclibrary.html)
    *   [WXSS](../wxss.html)
    *   [组件](../component.html)
*   [自定义组件](../../custom-component/)
    *   [组件模版和样式](../../custom-component/wxml-wxss.html)
    *   [Component构造器](../../custom-component/component.html)
    *   [组件事件](../../custom-component/events.html)
    *   [behaviors](../../custom-component/behaviors.html)
    *   [组件间关系](../../custom-component/relations.html)
    *   [抽象节点](../../custom-component/generics.html)
*   [插件](../../plugin/)
    *   [开发插件](../../plugin/development.html)
    *   [使用插件](../../plugin/using.html)
    *   [插件的限制](../../plugin/api-limit.html)
    *   [插件功能页](../../plugin/functional-pages.html)
*   [分包加载](../../subpackages.html)
*   [多线程](../../workers.html)
*   [基础库](../../client-lib.html)
*   [兼容](../../compatibility.html)
*   [运行机制](../../operating-mechanism.html)
*   [性能](../../performance/)
    *   [优化建议](../../performance/tips.html)
    *   [分析工具](../../performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# WXML

WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合[基础组件](../../../component/)、[事件系统](event.html)，可以构建出页面的结构。

用以下一些简单的例子来看看 WXML 具有什么能力：

### [数据绑定](data.html)

    <!--wxml-->
    <view> {{message}} </view>

    // page.js
    Page({
      data: {
        message: 'Hello MINA!'
      }
    })

### [列表渲染](list.html)

    <!--wxml-->
    <view wx:for="{{array}}"> {{item}} </view>

    // page.js
    Page({
      data: {
        array: [1, 2, 3, 4, 5]
      }
    })

### [条件渲染](conditional.html)

    <!--wxml-->
    <view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
    <view wx:elif="{{view == 'APP'}}"> APP </view>
    <view wx:else="{{view == 'MINA'}}"> MINA </view>

    // page.js
    Page({
      data: {
        view: 'MINA'
      }
    })

### [模板](template.html)

    <!--wxml-->
    <template name="staffName">
      <view>
        FirstName: {{firstName}}, LastName: {{lastName}}
      </view>
    </template>

    <template is="staffName" data="{{...staffA}}"></template>
    <template is="staffName" data="{{...staffB}}"></template>
    <template is="staffName" data="{{...staffC}}"></template>

    // page.js
    Page({
      data: {
        staffA: {firstName: 'Hulk', lastName: 'Hu'},
        staffB: {firstName: 'Shang', lastName: 'You'},
        staffC: {firstName: 'Gideon', lastName: 'Lin'}
      }
    })

### [事件](event.html)

    <view bindtap="add"> {{count}} </view>

    Page({
      data: {
        count: 1
      },
      add: function(e) {
        this.setData({
          count: this.data.count + 1
        })
      }
    })

具体的能力以及使用方式在以下章节查看：

[数据绑定](data.html)、[列表渲染](list.html)、[条件渲染](conditional.html)、[模板](template.html)、[事件](event.html)、[引用](import.html)

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

[](../)[](data.html)</div>

</div>