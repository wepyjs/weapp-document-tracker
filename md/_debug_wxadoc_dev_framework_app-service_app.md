<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
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
*   [逻辑层](./)
    *   [注册程序](app.html)
    *   [场景值](scene.html)
    *   [注册页面](page.html)
    *   [路由](route.html)
    *   [模块化](module.html)
    *   [API](api.html)
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

# App

### App()

`App()` 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。

**object参数说明：**

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>描述</th>

<th>触发时机</th>

</tr>

</thead>

<tbody>

<tr>

<td>onLaunch</td>

<td>Function</td>

<td>生命周期函数--监听小程序初始化</td>

<td>当小程序初始化完成时，会触发 onLaunch（全局只触发一次）</td>

</tr>

<tr>

<td>onShow</td>

<td>Function</td>

<td>生命周期函数--监听小程序显示</td>

<td>当小程序启动，或从后台进入前台显示，会触发 onShow</td>

</tr>

<tr>

<td>onHide</td>

<td>Function</td>

<td>生命周期函数--监听小程序隐藏</td>

<td>当小程序从前台进入后台，会触发 onHide</td>

</tr>

<tr>

<td>onError</td>

<td>Function</td>

<td>错误监听函数</td>

<td>当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息</td>

</tr>

<tr>

<td>其他</td>

<td>Any</td>

<td></td>

<td>开发者可以添加任意的函数或数据到 Object 参数中，用 `this` 可以访问</td>

</tr>

</tbody>

</table>

**前台、后台定义：** 当用户点击左上角关闭，或者按了设备 Home 键离开微信，小程序并没有直接销毁，而是进入了后台；当再次进入微信或再次打开小程序，又会从后台进入前台。需要注意的是：只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。

关闭小程序(基础库版本1.1.0开始支持)： 当用户从扫一扫、转发等入口([场景值](scene.html)为1007, 1008, 1011, 1025)进入小程序，且没有置顶小程序的情况下退出，小程序会被销毁。 **小程序运行机制在基础库版本 1.4.0 有所改变：** 上一条关闭逻辑在新版本已不适用，[详情](../operating-mechanism.html)

**示例代码：**

    App({
      onLaunch: function(options) {
        // Do something initial when launch.
      },
      onShow: function(options) {
          // Do something when show.
      },
      onHide: function() {
          // Do something when hide.
      },
      onError: function(msg) {
        console.log(msg)
      },
      globalData: 'I am global data'
    })

### onLaunch, onShow 参数

<table>

<thead>

<tr>

<th>字段</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>path</td>

<td>String</td>

<td>打开小程序的路径</td>

</tr>

<tr>

<td>query</td>

<td>Object</td>

<td>打开小程序的query</td>

</tr>

<tr>

<td>scene</td>

<td>Number</td>

<td>打开小程序的场景值</td>

</tr>

<tr>

<td>shareTicket</td>

<td>String</td>

<td>shareTicket，详见 [获取更多转发信息](../../api/share.html#获取更多转发信息)</td>

</tr>

<tr>

<td>referrerInfo</td>

<td>Object</td>

<td>当场景为由另一个小程序打开时，返回此字段</td>

</tr>

<tr>

<td>referrerInfo.appId</td>

<td>String</td>

<td>来源小程序的 appId</td>

</tr>

<tr>

<td>referrerInfo.extraData</td>

<td>Object</td>

<td>来源小程序传过来的数据</td>

</tr>

</tbody>

</table>

场景值 [详见](scene.html)。

### getApp()

我们提供了全局的 `getApp()` 函数，可以获取到小程序实例。

    // other.js
    var appInstance = getApp()
    console.log(appInstance.globalData) // I am global data

**注意：**

`App()` 必须在 `app.js` 中注册，且不能注册多个。

不要在定义于 `App()` 内的函数中调用 `getApp()` ，使用 `this` 就可以拿到 app 实例。

不要在 onLaunch 的时候调用 `getCurrentPages()`，此时 page 还没有生成。

通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。

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

[](./)[](scene.html)</div>

</div>