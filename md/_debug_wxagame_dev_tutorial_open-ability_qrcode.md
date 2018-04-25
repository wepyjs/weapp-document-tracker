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

*   [教程](../../)
*   [API](../../document/render/canvas/wx.createCanvas.html)
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

*   [基础](../../)
    *   [快速上手](../../)
    *   [Adapter](../base/adapter.html)
    *   [对引擎的支持](../base/engine.html)
    *   [模块化](../base/module.html)
*   [能力](../ability/audio.html)
    *   [音频播放](../ability/audio.html)
    *   [文件系统](../ability/file-system.html)
*   [可用性](../usability/debug.html)
    *   [调试](../usability/debug.html)
    *   [性能](../usability/performance.html)
    *   [小游戏更新](../usability/update.html)
    *   [多线程 Worker](../usability/worker.html)
*   [开放能力](authorize.html)
    *   [用户授权](authorize.html)
    *   [用户登录态签名](http-signature.html)
    *   [米大师支付签名](midas-signature.html)
    *   [关系链数据使用指南](open-data.html)
    *   [虚拟支付](payment.html)
    *   [获取二维码](qrcode.html)
    *   [转发](share.html)
    *   [用户数据的签名验证和加解密](signature.html)
    *   [UnionID 机制说明](union-id.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 获取二维码

小游戏的二维码与小程序有着相同的样式和获取方式。通过后台接口可以获取小游戏的二维码，扫描该二维码可以直接进入小游戏。目前微信支持两种二维码，小程序码（左），小程序二维码（右），如下所示：

![](../images/qrcode.png)

### 获取小程序码

我们推荐生成并使用小程序码，它具有更好的辨识度。目前有两个接口可以生成小程序码，开发者可以根据自己的需要选择合适的接口。

接口A: 适用于需要的码数量较少的业务场景 接口地址：

    https://api.weixin.qq.com/wxa/getwxacode?access_token=ACCESS_TOKEN

获取 access_token 详见[文档](https://mp.weixin.qq.com/wiki?id=mp1421140183)

**POST 参数说明**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>path</td>

<td>String</td>

<td></td>

<td>不能为空，最大长度 128 字节。小游戏没有页面的概念，因此将 query 以 `?a=b&c=d` 形式传给此参数</td>

</tr>

<tr>

<td>width</td>

<td>Int</td>

<td>430</td>

<td>二维码的宽度</td>

</tr>

<tr>

<td>auto_color</td>

<td>Bool</td>

<td>false</td>

<td>自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调</td>

</tr>

<tr>

<td>line_color</td>

<td>Object</td>

<td>{"r":"0","g":"0","b":"0"}</td>

<td>auth_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"}</td>

</tr>

</tbody>

</table>

**注意：通过该接口生成的小程序码，永久有效，数量限制见文末说明，请谨慎使用。用户扫描该码进入小程序后，将直接进入 path 对应的页面。**

接口B：适用于需要的码数量极多，或仅临时使用的业务场景

接口地址：

    https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN

获取 access_token 详见[文档](https://mp.weixin.qq.com/wiki?id=mp1421140183)

**POST 参数说明**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>scene</td>

<td>String</td>

<td></td>

<td>最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#><'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）</td>

</tr>

<tr>

<td>width</td>

<td>Int</td>

<td>430</td>

<td>二维码的宽度</td>

</tr>

<tr>

<td>auto_color</td>

<td>Bool</td>

<td>false</td>

<td>自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调</td>

</tr>

<tr>

<td>line_color</td>

<td>Object</td>

<td>{"r":"0","g":"0","b":"0"}</td>

<td>auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"}</td>

</tr>

</tbody>

</table>

**注意：通过该接口生成的小程序码，永久有效，数量暂无限制。用户扫描该码进入小程序后，开发者需在对应页面获取的码中 scene 字段的值，再做处理逻辑。使用如下代码可以获取到二维码中的 scene 字段的值。调试阶段可以使用开发工具的条件编译自定义参数 scene=xxxx 进行模拟，开发工具模拟时的 scene 的参数值需要进行 urlencode**

    wx.onShow(function (option) {
        var scene = decodeURIComponent(option.query.scene)
    })

### 获取小程序二维码

接口 C：适用于需要的码数量较少的业务场景

接口地址：

    https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=ACCESS_TOKEN

获取 access_token 详见 [文档](https://mp.weixin.qq.com/wiki?id=mp1421140183)

**POST 参数说明**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>path</td>

<td>String</td>

<td></td>

<td>不能为空，最大长度 128 字节。小游戏没有页面的概念，因此只需要path的query部分，如 ?a=b&c=d</td>

</tr>

<tr>

<td>width</td>

<td>Int</td>

<td>430</td>

<td>二维码的宽度</td>

</tr>

</tbody>

</table>

**注意：通过该接口生成的小程序二维码，永久有效，数量限制见文末说明，请谨慎使用。**

**示例：**

    {
        "path": "?query=1", 
        "width": 430
    }

### Bug & Tip

1.  `tip`：通过该接口，仅能生成已发布的小程序的二维码。
2.  `tip`：可以在开发者工具预览时生成开发版的带参二维码。
3.  `tip`：接口 A 加上接口 C，总共生成的码数量限制为 100,000，请谨慎调用。
4.  `tip`: POST 参数需要转成 json 字符串，不支持 form 表单提交。
5.  `tip`: auto_color line_color 参数仅对小程序码生效。

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

[](payment.html)[](share.html)</div>

</div>