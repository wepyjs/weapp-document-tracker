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
    *   [WXSS](view/wxss.html)
    *   [组件](view/component.html)
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

# 基础库

### 基础库与客户端之间的关系

小程序的能力需要微信客户端来支撑，每一个基础库都只能在对应的客户端版本上运行，高版本的基础库无法兼容低版本的微信客户端。

关于基础库的兼容方法，可以查看「[兼容处理](compatibility.html)」章节。

### 基础库更新时机

为了避免新版本的基础库给线上小程序带来未知的影响，微信客户端都是携带 **上一个稳定版** 的基础库发布的。

在新版本客户端发布后，我们再通过后台灰度新版本基础库，灰度时长一般为 12 小时，在灰度结束后，用户设备上才会有新版本的基础库。

以微信 6.5.8 为例，客户端在发布时携带的是 1.1.1 基础库(6.5.7 上已全量的稳定版)发布，在 6.5.8 发布后，我们再通过后台灰度 1.2.0 基础库。

### 基础库版本分布

#### iOS

<table>

<thead>

<tr>

<th>基础库版本</th>

<th>用户占比</th>

</tr>

</thead>

<tbody>

<tr>

<td>1.4.0</td>

<td>1.88%</td>

</tr>

<tr>

<td>1.3.0</td>

<td>80.74%</td>

</tr>

<tr>

<td>1.2.6</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.5</td>

<td>7.29%</td>

</tr>

<tr>

<td>1.2.4</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.3</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.2</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.1</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.0</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.1.1</td>

<td>6.75%</td>

</tr>

<tr>

<td>1.1.0</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.0.1</td>

<td>3.34%</td>

</tr>

<tr>

<td>1.0.0</td>

<td>0.00%</td>

</tr>

</tbody>

</table>

(数据截止 2017-07-10)

#### Android

<table>

<thead>

<tr>

<th>基础库版本</th>

<th>用户占比</th>

</tr>

</thead>

<tbody>

<tr>

<td>1.4.0</td>

<td>3.20%</td>

</tr>

<tr>

<td>1.3.0</td>

<td>51.24%</td>

</tr>

<tr>

<td>1.2.6</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.5</td>

<td>37.03%</td>

</tr>

<tr>

<td>1.2.4</td>

<td>0.58%</td>

</tr>

<tr>

<td>1.2.3</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.2</td>

<td>0.02%</td>

</tr>

<tr>

<td>1.2.1</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.2.0</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.1.1</td>

<td>4.33%</td>

</tr>

<tr>

<td>1.1.0</td>

<td>0.00%</td>

</tr>

<tr>

<td>1.0.1</td>

<td>2.05%</td>

</tr>

<tr>

<td>1.0.0</td>

<td>1.55%</td>

</tr>

</tbody>

</table>

(数据截止 2017-07-10)

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

[](view/component.html)[](compatibility.html)</div>

</div>