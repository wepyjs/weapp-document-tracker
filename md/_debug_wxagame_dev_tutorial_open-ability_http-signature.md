<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小游戏开发](javascript:;)
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

微信小游戏开发文档

</div>

*   [教程](../../index.html)
*   [API](../../document/render/canvas/wx.createCanvas.html)
*   [工具](../../devtools/devtools.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [基础](../../index.html)
    *   [快速上手](../../index.html)
    *   [Adapter](../base/adapter.html)
    *   [对引擎的支持](../base/engine.html)
    *   [模块化](../base/module.html)
*   [能力](../ability/audio.html)
    *   [音频播放](../ability/audio.html)
    *   [文件系统](../ability/file-system.html)
*   [可用性](../usability/debug.html)
    *   [调试](../usability/debug.html)
    *   [性能](../usability/performance.html)
    *   [多线程 Worker](../usability/worker.html)
*   [开放能力](authorize.html)
    *   [用户授权](authorize.html)
    *   [用户登录态签名](http-signature.html)
    *   [获取二维码](qrcode.html)
    *   [转发](share.html)
    *   [用户数据的签名验证和加解密](signature.html)
    *   [关系链数据](open-data.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 用户登录态签名

小程序的一部分后台(HTTP)接口要求验证用户登录态。开发者在调用时需提供以session_key为密钥生成的签名。其中session_key是指通过wx.login 获得的登录态。

### 签名算法

目前支持的签名算法是 **hmac_sha256**。 对于POST请求，开发者生成签名的算法是：

    signature = hmac_sha256( post_data, session_key )

其中post_data为本次POST请求的数据包。特别地，对于GET请求，post_data等于长度为0的字符串。

    signature = hmac_sha256( "", session_key )

#### 签名示例

例如开发者需要请求的HTTP（POST）接口，其中请求包为一个json字符串。

    curl -d '{"foo":"bar"}' 'https://api.weixin.qq.com/some_api?access_token=xxx&openid=xxx&signature=???&sig_method=hmac_sha256'

开发者需要计算出signature参数。假设用户当前有效的session_key 为 ：

    'o0q0otL8aEzpcZL/FT9WsQ=='

则开发者生成签名应该是

    hmac_sha256('{"foo":"bar"}', 'o0q0otL8aEzpcZL/FT9WsQ==') = 654571f79995b2ce1e149e53c0a33dc39c0a74090db514261454e8dbe432aa0b

开发者服务器发起的HTTP请求

    curl -d '{"foo":"bar"}' 'https://api.weixin.qq.com/some_api?access_token=xxx&openid=xxx&signature=654571f79995b2ce1e149e53c0a33dc39c0a74090db514261454e8dbe432aa0b&sig_method=hmac_sha256'

### session_key 合法性校验

我们提供接口供开发者校验服务器所保存的登录态session_key是否合法。 为了保持session_key私密性，我们提供的校验接口本身不直接明文session_key，而是通过校验登录态签名完成。

#### 接口地址

请求方法：GET

    https://api.weixin.qq.com/wxa/checksession?access\_token=ACCESS\_TOKEN&signature=SIGNATURE&openid=OPENID&sig\_method=SIG\_METHOD

#### 调用示例

    curl -G 'https://api.weixin.qq.com/wxa/checksession?access_token=OsAoOMw4niuuVbfSxxxxxxxxxxxxxxxxxxx&signature=fefce01bfba4670c85b228e6ca2b493c90971e7c442f54fc448662eb7cd72509&openid=oGZUI0egBJY1zhBYw2KhdUfwVJJE&sig_method=hmac_sha256'

#### 参数说明

<table>

<thead>

<tr>

<th>参数</th>

<th>必填</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>access_token</td>

<td>是</td>

<td>接口调用凭证</td>

</tr>

<tr>

<td>openid</td>

<td>是</td>

<td>用户唯一标识符</td>

</tr>

<tr>

<td>signature</td>

<td>是</td>

<td>用户登录态签名</td>

</tr>

<tr>

<td>sig_method</td>

<td>是</td>

<td>用户登录态签名的哈希方法</td>

</tr>

<tr>

<td>buffer</td>

<td>是</td>

<td>托管数据，类型为字符串，长度不超过1000字节</td>

</tr>

</tbody>

</table>

#### 返回结果

正确时的返回JSON数据包如下：

    {"errcode":0,"errmsg":"ok"}

错误时的返回JSON数据包如下（示例为签名错误）：

    {"errcode":87009,"errmsg":"invalid signature"}

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
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9&)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](authorize.html)[](qrcode.html)</div>

</div>