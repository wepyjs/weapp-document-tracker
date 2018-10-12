<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18101214)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18101214)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18101214)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101214)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18101214)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18101214)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18101214)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18101214)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html?t=18101214)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/ad.html?t=18101214)

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
*   [框架](../framework/MINA.html)
*   [组件](.)
*   [API](../api/network/download/wx.downloadFile.html)
*   [工具](../devtools/devtools.html)
*   [小程序·云开发](../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html?t=18101214)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/ad.html?t=18101214)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [视图容器](./view.html)
    *   [view](./view.html)
    *   [scroll-view](./scroll-view.html)
    *   [swiper](./swiper.html)
    *   [movable-view](./movable-view.html)
    *   [cover-view](./cover-view.html)
*   [基础内容](./icon.html)
    *   [icon](./icon.html)
    *   [text](./text.html)
    *   [rich-text](./rich-text.html)
    *   [progress](./progress.html)
*   [表单组件](./button.html)
    *   [button](./button.html)
    *   [checkbox](./checkbox.html)
    *   [form](./form.html)
    *   [input](./input.html)
    *   [label](./label.html)
    *   [picker](./picker.html)
    *   [picker-view](./picker-view.html)
    *   [radio](./radio.html)
    *   [slider](./slider.html)
    *   [switch](./switch.html)
    *   [textarea](./textarea.html)
*   [导航](./navigator.html)
    *   [navigator](./navigator.html)
    *   [functional-page-navigator](./functional-page-navigator.html)
*   [媒体组件](./audio.html)
    *   [audio](./audio.html#audio)
    *   [image](./image.html)
    *   [video](./video.html)
    *   [camera](./camera.html)
    *   [live-player](./live-player.html)
    *   [live-pusher](./live-pusher.html)
*   [地图](./map.html)
    *   [map](./map.html#map)
*   [画布](./canvas.html)
    *   [canvas](./canvas.html#canvas)
*   [开放能力](./open-data.html)
    *   [open-data](./open-data.html)
    *   [web-view](./web-view.html)
    *   [ad](./ad.html)
    *   [official-account](./official-account.html)
*   [原生组件说明](./native-component.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

#### ad

> 基础库 1.9.94 开始支持，低版本需做[兼容处理](../framework/compatibility.html)。

广告。**目前暂时以邀请制开放申请，请留意后续模板消息的通知**

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>unit-id</td>

<td>String</td>

<td></td>

<td>广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com)的流量主模块新建</td>

<td></td>

</tr>

<tr>

<td>bindload</td>

<td>Handler</td>

<td></td>

<td>广告加载成功的回调</td>

<td>[2.2.1](../framework/compatibility.html "基础库 2.2.1 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>binderror</td>

<td>Handler</td>

<td></td>

<td>当广告发生错误时，触发的事件，可以通过该事件获取错误码及原因，事件对象event.detail = {errCode: 1002}</td>

<td>[2.2.1](../framework/compatibility.html "基础库 2.2.1 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**注1：监听到error回调后，开发者可以针对性的处理，比如隐藏广告组件的父容器，以保证用户体验，但不要移除广告组件，否则将无法收到bindload的回调。**

#### 错误码信息与解决方案表

错误码是通过binderror回调获取到的错误信息。

<table>

<thead>

<tr>

<th>代码</th>

<th>异常情况</th>

<th>理由</th>

<th>解决方案</th>

</tr>

</thead>

<tbody>

<tr>

<td>1000</td>

<td>后端错误调用失败</td>

<td>该项错误不是开发者的异常情况</td>

<td>一般情况下忽略一段时间即可恢复。</td>

</tr>

<tr>

<td>1001</td>

<td>参数错误</td>

<td>使用方法错误</td>

<td>可以前往developers.weixin.qq.com确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。</td>

</tr>

<tr>

<td>1002</td>

<td>广告单元无效</td>

<td>可能是拼写错误、或者误用了其他APP的广告ID</td>

<td>请重新前往mp.weixin.qq.com确认广告位ID。</td>

</tr>

<tr>

<td>1003</td>

<td>内部错误</td>

<td>该项错误不是开发者的异常情况</td>

<td>一般情况下忽略一段时间即可恢复。</td>

</tr>

<tr>

<td>1004</td>

<td>无适合的广告</td>

<td>广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告</td>

<td>属于正常情况，且开发者需要针对这种情况做形态上的兼容。</td>

</tr>

<tr>

<td>1005</td>

<td>广告组件审核中</td>

<td>你的广告正在被审核，无法展现广告</td>

<td>请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。</td>

</tr>

<tr>

<td>1006</td>

<td>广告组件被驳回</td>

<td>你的广告审核失败，无法展现广告</td>

<td>请前往mp.weixin.qq.com确认审核状态，且开发者需要针对这种情况做形态上的兼容。</td>

</tr>

<tr>

<td>1007</td>

<td>广告组件被驳回</td>

<td>你的广告能力已经被封禁，封禁期间无法展现广告</td>

<td>请前往mp.weixin.qq.com确认小程序广告封禁状态。</td>

</tr>

<tr>

<td>1008</td>

<td>广告单元已关闭</td>

<td>该广告位的广告能力已经被关闭</td>

<td>请前往mp.weixin.qq.com重新打开对应广告位的展现。</td>

</tr>

</tbody>

</table>

##### 注意

1.  目前可以给 `ad` 标签设置 wxss 样式调整广告宽度，以使广告与页面更融洽，但请遵循[小程序流量主应用规范](https://wximg.qq.com/wxp/pdftool/get.html?id=rynYA8o3f&pa=10&name=miniprogramAds_supplier_guidance)
2.  在无广告展示时，`ad` 标签不会占用高度
3.  `ad` 组件不支持触发 `bindtap` 等触摸相关事件

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

[](./web-view.html)[](./official-account.html)</div>

</div>