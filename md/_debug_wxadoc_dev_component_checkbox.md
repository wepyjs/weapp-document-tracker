<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18092914)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18092914)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18092914)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18092914)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18092914)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18092914)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18092914)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18092914)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html?t=18092914)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/checkbox.html?t=18092914)

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

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html?t=18092914)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/checkbox.html?t=18092914)

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

#### checkbox-group

多项选择器，内部由多个`checkbox`组成。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>`<checkbox-group/>`中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}</td>

</tr>

</tbody>

</table>

#### checkbox

多选项目。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>value</td>

<td>String</td>

<td></td>

<td>`<checkbox/>`标识，选中时触发`<checkbox-group/>`的 change 事件，并携带 `<checkbox/>` 的 value</td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

</tr>

<tr>

<td>checked</td>

<td>Boolean</td>

<td>false</td>

<td>当前是否选中，可用来设置默认选中</td>

</tr>

<tr>

<td>color</td>

<td>Color</td>

<td></td>

<td>checkbox的颜色，同css的color</td>

</tr>

</tbody>

</table>

**示例：**

[在开发者工具中预览效果](wechatide://minicode/hGa3DcmW6qYw "在开发者工具中预览效果")

    <checkbox-group bindchange="checkboxChange">
      <label class="checkbox" wx:for="{{items}}">
        <checkbox value="{{item.name}}" checked="{{item.checked}}"/>{{item.value}}
      </label>
    </checkbox-group>

    Page({
      data: {
        items: [
          {name: 'USA', value: '美国'},
          {name: 'CHN', value: '中国', checked: 'true'},
          {name: 'BRA', value: '巴西'},
          {name: 'JPN', value: '日本'},
          {name: 'ENG', value: '英国'},
          {name: 'TUR', value: '法国'},
        ]
      },
      checkboxChange: function(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      }
    })

![checkbox](https://developers.weixin.qq.com/miniprogram/dev/image/pic/checkbox.png?t=18092914)

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

[](./button.html)[](./form.html)</div>

</div>