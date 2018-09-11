<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18091022)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18091022)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18091022)
*   [小游戏开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18091022)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18091022)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18091022)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18091022)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18091022)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/minigame/dev/tutorial/open-ability/midas-signature.html?t=18091022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/dev/tutorial/open-ability/midas-signature.html?t=18091022)

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
*   [API](../../api/render/canvas/wx.createCanvas.html)
*   [工具](../../devtools/devtools.html)
*   [小程序·云开发](../../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/minigame/dev/tutorial/open-ability/midas-signature.html?t=18091022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/dev/tutorial/open-ability/midas-signature.html?t=18091022)

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
    *   [分包加载](../base/subpackages.html)
*   [能力](../ability/audio.html)
    *   [音频播放](../ability/audio.html)
    *   [文件系统](../ability/file-system.html)
*   [可用性](../usability/debug.html)
    *   [调试](../usability/debug.html)
    *   [性能](../usability/performance.html)
    *   [小游戏更新](../usability/update.html)
    *   [多线程 Worker](../usability/worker.html)
*   [开放能力](./authorize.html)
    *   [用户授权](./authorize.html)
    *   [游戏圈使用指南](./game-club.html)
    *   [用户登录态签名](./http-signature.html)
    *   [米大师支付签名](./midas-signature.html)
    *   [关系链数据使用指南](./open-data.html)
    *   [虚拟支付](./payment.html)
    *   [获取二维码](./qrcode.html)
    *   [排行榜配置指引](./ranklist.html)
    *   [转发](./share.html)
    *   [用户数据的签名验证和加解密](./signature.html)
    *   [UnionID 机制说明](./union-id.html)
*   [广告](../ad/banner-ad.html)
    *   [Banner 广告](../ad/banner-ad.html)
    *   [激励视频广告](../ad/rewarded-video-ad.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 米大师支付签名

**以查询余额的接口为例**

*   原始请求信息

1.  米大师密钥：zNLgAGgqsEWJOg1nFVaO5r7fAlIQxr1u
2.  HTTP请求方式: POST
3.  请求的URI： /cgi-bin/midas/getbalance

*   sig签名

1.  参与米大师签名请求参数

        "openid":"odkx20ENSNa2w5y3g_qOkOvBNM1g",
        "appid":"wx1234567",
        "offer_id":"12345678",
        "ts":1507530737,
        "zone_id":"1",
        "pf":"android"

1.  对参与米大师签名的参数按照key=value的格式，并按照参数名ASCII字典序升序排序如下：

    stringA="appid=wx1234567&offer_id=12345678&openid=odkx20ENSNa2w5y3g_qOkOvBNM1g&pf=android&ts=1507530737&zone_id=1"

1.  拼接uri、method和米大师密钥：

    stringSignTemp=stringA+"&org_loc=/cgi-bin/midas/getbalance&method=POST&secret=zNLgAGgqsEWJOg1nFVaO5r7fAlIQxr1u"

1.  把米大师密钥作为key，使用HMAC-SHA256得到签名。

    sig=hmac_sha256(key,stringSignTemp)
       ="1ad64e8dcb2ec1dc486b7fdf01f4a15159fc623dc3422470e51cf6870734726b"

*   mp_sig签名

1.  参与开平签名请求参数

        "access_token":"ACCESSTOKEN",
        "openid":"odkx20ENSNa2w5y3g_qOkOvBNM1g",
        "appid":"wx1234567",
        "offer_id":"12345678",
        "ts":1507530737,
        "zone_id":"1",
        "pf":"android",
        "sig":"1ad64e8dcb2ec1dc486b7fdf01f4a15159fc623dc3422470e51cf6870734726b"

1.  对参与开平签名的参数按照key=value的格式，并按照参数名ASCII字典序升序排序如下：

    stringA="access_token=ACCESSTOKEN&appid=wx1234567&offer_id=12345678&openid=odkx20ENSNa2w5y3g_qOkOvBNM1g&pf=android&sig=1ad64e8dcb2ec1dc486b7fdf01f4a15159fc623dc3422470e51cf6870734726b&ts=1507530737&zone_id=1"

1.  拼接uri、method和session_key：

    stringSignTemp=stringA+"&org_loc=/cgi-bin/midas/getbalance&method=POST&session_key=V7Q38/i2KXaqrQyl2Yx9Hg=="

1.  把session_key作为key，使用HMAC-SHA256得到签名。

    mp_sig=hmac_sha256(key,stringSignTemp)
          ="ff4c5bb39dea1002a8f03be0438724e1a8bcea5ebce8f221f9b9fea3bcf3bf76"

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

*   [关于腾讯](https://www.tencent.com/)
*   [文档中心](https://developers.weixin.qq.com/miniprogram/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo)
*   [客服中心](https://kf.qq.com/product/wx_xcx.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./http-signature.html)[](./open-data.html)</div>

</div>