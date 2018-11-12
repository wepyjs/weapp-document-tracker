<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18111222)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18111222)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18111222)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18111222)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18111222)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18111222)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18111222)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18111222)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/label.html?t=18111222)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/label.html?t=18111222)

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
*   [API](../api/)
*   [工具](../devtools/devtools.html)
*   [小程序·云开发](../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/label.html?t=18111222)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/label.html?t=18111222)

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
    *   [audio](./audio.html)
    *   [image](./image.html)
    *   [video](./video.html)
    *   [camera](./camera.html)
    *   [live-player](./live-player.html)
    *   [live-pusher](./live-pusher.html)
*   [地图](./map.html)
    *   [map](./map.html)
*   [画布](./canvas.html)
    *   [canvas](./canvas.html)
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

#### label

用来改进表单组件的可用性，使用`for`属性找到对应的`id`，或者将控件放在该标签下，当点击时，就会触发对应的控件。

`for`优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。

目前可以绑定的控件有：`<button/>`, `<checkbox/>`, `<radio/>`, `<switch/>`。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>for</td>

<td>String</td>

<td>绑定控件的 id</td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/alak1cmR6JYU "在开发者工具中预览效果")

    <view class="section section_gap">
    <view class="section__title">表单组件在label内</view>
    <checkbox-group class="group" bindchange="checkboxChange">
      <view class="label-1" wx:for="{{checkboxItems}}">
        <label>
          <checkbox hidden value="{{item.name}}" checked="{{item.checked}}"></checkbox>
          <view class="label-1__icon">
            <view class="label-1__icon-checked" style="opacity:{{item.checked ? 1: 0}}"></view>
          </view>
          <text class="label-1__text">{{item.value}}</text>
        </label>
      </view>
    </checkbox-group>
    </view>

    <view class="section section_gap">
    <view class="section__title">label用for标识表单组件</view>
    <radio-group class="group" bindchange="radioChange">
      <view class="label-2" wx:for="{{radioItems}}">
        <radio id="{{item.name}}" hidden value="{{item.name}}" checked="{{item.checked}}"></radio>
        <view class="label-2__icon">
          <view class="label-2__icon-checked" style="opacity:{{item.checked ? 1: 0}}"></view>
        </view>
        <label class="label-2__text" for="{{item.name}}"><text>{{item.name}}</text></label>
      </view>
    </radio-group>
    </view>

    Page({
      data: {
        checkboxItems: [
          {name: 'USA', value: '美国'},
          {name: 'CHN', value: '中国', checked: 'true'},
          {name: 'BRA', value: '巴西'},
          {name: 'JPN', value: '日本', checked: 'true'},
          {name: 'ENG', value: '英国'},
          {name: 'TUR', value: '法国'},
        ],
        radioItems: [
          {name: 'USA', value: '美国'},
          {name: 'CHN', value: '中国', checked: 'true'},
          {name: 'BRA', value: '巴西'},
          {name: 'JPN', value: '日本'},
          {name: 'ENG', value: '英国'},
          {name: 'TUR', value: '法国'},
        ],
        hidden: false
      },
      checkboxChange: function(e) {
        var checked = e.detail.value
        var changed = {}
        for (var i = 0; i < this.data.checkboxItems.length; i ++) {
          if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
            changed['checkboxItems['+i+'].checked'] = true
          } else {
            changed['checkboxItems['+i+'].checked'] = false
          }
        }
        this.setData(changed)
      },
      radioChange: function(e) {
        var checked = e.detail.value
        var changed = {}
        for (var i = 0; i < this.data.radioItems.length; i ++) {
          if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
            changed['radioItems['+i+'].checked'] = true
          } else {
            changed['radioItems['+i+'].checked'] = false
          }
        }
        this.setData(changed)
      }
    })

    .label-1, .label-2{
        margin-bottom: 15px;
    }
    .label-1__text, .label-2__text {
        display: inline-block;
        vertical-align: middle;
    }

    .label-1__icon {
        position: relative;
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        width: 18px;
        height: 18px;
        background: #fcfff4;
    }

    .label-1__icon-checked {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 12px;
        height: 12px;
        background: #1aad19;
    }

    .label-2__icon {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        width: 18px;
        height: 18px;
        background: #fcfff4;
        border-radius: 50px;
    }

    .label-2__icon-checked {
        position: absolute;
        left: 3px;
        top: 3px;
        width: 12px;
        height: 12px;
        background: #1aad19;
        border-radius: 50%;
    }

    .label-4_text{
        text-align: center;
        margin-top: 15px;
    }

![label](../image/pic/label.png)

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

[](./input.html)[](./picker.html)</div>

</div>