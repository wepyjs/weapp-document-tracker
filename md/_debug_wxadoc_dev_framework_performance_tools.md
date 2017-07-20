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
    *   [WXSS](../view/wxss.html)
    *   [组件](../view/component.html)
*   [基础库](../client-lib.html)
*   [兼容](../compatibility.html)
*   [运行机制](../operating-mechanism.html)
*   [性能](./)
    *   [优化建议](tips.html)
    *   [分析工具](tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 性能 Trace 工具

微信 Andoid 6.5.10 开始，我们提供了 Trace 导出工具，开发者可以在开发者工具 Trace Panel 中使用该功能。

## 使用方法

1.  PC 上需要先安装 `adb` 工具，可以参考一些主流教程进行安装，Mac 上可使用 brew 直接安装。
2.  确定 `adb` 工具已成功安装后，在开发者工具上打开 Trace Panel，将 Android 手机通过 USB 连接上 PC，点击「Choose Devices」，此时手机上可能弹出连接授权框，请点击「允许」。
3.  选择设备后，在手机上打开你需要调试的开发版小程序，通过右上角菜单，打开性能监控面板，重启小程序；
4.  重启后，在小程序上进行操作，完成操作后，通过右上角菜单，导出 Trace 数据；
5.  此时开发者工具 Trace Panel 上会自动拉取 Trace 文件，选择你要分析的 Trace 文件即可；

> 可以通过 `adb devices` 命令确定设备是否已和 PC 建立起连接

![image](../../image/performance/trace-tool.png)

# 性能面板

从微信 6.5.8 开始，我们提供了性能面板让开发者了解小程序的性能。开发者可以在开发版小程序下打开性能面板，打开方法：进入开发版小程序，进入右上角更多按钮，点击「显示性能窗口」。

![image](../../image/performance/panel.jpg)

## 性能面板指标说明

<table>

<thead>

<tr>

<th>指标</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>CPU</td>

<td>小程序进程的 CPU 占用率，仅 Android 下提供</td>

</tr>

<tr>

<td>内存</td>

<td>小程序进程的内存占用（Total Pss)，仅 Android 下提供</td>

</tr>

<tr>

<td>启动耗时</td>

<td>小程序启动总耗时</td>

</tr>

<tr>

<td>下载耗时</td>

<td>小程序包下载耗时，首次打开或资源包需更新时会进行下载</td>

</tr>

<tr>

<td>页面切换耗时</td>

<td>小程序页面切换的耗时</td>

</tr>

<tr>

<td>帧率/FPS</td>

<td></td>

</tr>

<tr>

<td>首次渲染耗时</td>

<td>页面次首次渲染的耗时</td>

</tr>

<tr>

<td>再次渲染耗时</td>

<td>页面再次渲染的耗时（通常由开发者的 setData 操作触发）</td>

</tr>

<tr>

<td>数据缓存</td>

<td>小程序通过 Storage 接口储存的缓存大小</td>

</tr>

</tbody>

</table>

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

[](tips.html)[](../../component/)</div>

</div>