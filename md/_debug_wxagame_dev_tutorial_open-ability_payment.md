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

*   [中文](https://developers.weixin.qq.com/minigame/dev/tutorial/open-ability/payment.html?t=18091022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/dev/tutorial/open-ability/payment.html?t=18091022)

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

*   [中文](https://developers.weixin.qq.com/minigame/dev/tutorial/open-ability/payment.html?t=18091022)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/minigame/en/dev/tutorial/open-ability/payment.html?t=18091022)

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

## 虚拟支付

小游戏为开发者提供游戏内虚拟物品的购买服务。

注：目前小游戏虚拟支付能力只支持在安卓Android系统内使用，暂不开放苹果iOS系统内虚拟支付功能。

### 在开通虚拟支付功能前，开发者需完成：

1.  开通小程序微信支付
2.  申请开通小游戏虚拟支付

[wx.requestMidasPayment()](../../api/midas-payment/wx.requestMidasPayment.html) 是我们提供购买游戏币的API：

    wx.requestMidasPayment(Object options)

现阶段我们支持以下价格等级的配置，详见 [wx.requestMidasPayment()](../../api/midas-payment/wx.requestMidasPayment.html) 中关于 buyQuantity 的限制说明

<table>

<thead>

<tr>

<th>价格等级（单位：人民币元）</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

</tr>

<tr>

<td>3</td>

</tr>

<tr>

<td>6</td>

</tr>

<tr>

<td>8</td>

</tr>

<tr>

<td>12</td>

</tr>

<tr>

<td>18</td>

</tr>

<tr>

<td>25</td>

</tr>

<tr>

<td>30</td>

</tr>

<tr>

<td>40</td>

</tr>

<tr>

<td>45</td>

</tr>

<tr>

<td>50</td>

</tr>

<tr>

<td>60</td>

</tr>

<tr>

<td>68</td>

</tr>

<tr>

<td>73</td>

</tr>

<tr>

<td>78</td>

</tr>

<tr>

<td>88</td>

</tr>

<tr>

<td>98</td>

</tr>

<tr>

<td>108</td>

</tr>

<tr>

<td>118</td>

</tr>

<tr>

<td>128</td>

</tr>

<tr>

<td>148</td>

</tr>

<tr>

<td>168</td>

</tr>

<tr>

<td>188</td>

</tr>

<tr>

<td>198</td>

</tr>

<tr>

<td>328</td>

</tr>

<tr>

<td>648</td>

</tr>

</tbody>

</table>

### 示例代码

    // 游戏币
    wx.requestMidasPayment({
        mode: 'game',
        offerId: '',
        buyQuantity: 10,
        zoneId: 1,
        success() {
            // 支付成功
        },
        fail({ errMsg, errCode }) {
            // 支付失败
            console.log(errMsg, errCode)
        }
    })

除此之外，我们提供用于测试验证与调试的沙箱测试环境，并相应提供以下API：

<table>

<thead>

<tr>

<th>接口名</th>

<th>功能</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>[midasGetBalance](../../api/midas-payment/midasGetBalance.html)</td>

<td>查询余额</td>

<td>查看某个用户的游戏币余额</td>

</tr>

<tr>

<td>[midasPay](../../api/midas-payment/midasPay.html)</td>

<td>扣除游戏币</td>

<td>扣除某个用户的游戏币</td>

</tr>

<tr>

<td>[midasCancelPay](../../api/midas-payment/midasCancelPay.html)</td>

<td>取消支付</td>

<td>在有效期内的订单，可以通过本接口取消该笔扣除游戏币的订单</td>

</tr>

<tr>

<td>[midasPresent](../../api/midas-payment/midasPresent.html)</td>

<td>游戏币赠送</td>

<td>向某个用户赠送游戏币</td>

</tr>

</tbody>

</table>

签名算法请参阅 [米大师支付签名](midas-signature.html)

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

[](./open-data.html)[](./qrcode.html)</div>

</div>