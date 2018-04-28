<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
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

微信小程序开发文档

</div>

*   [简易教程](../)
*   [框架](../framework/MINA.html)
*   [组件](./)
*   [API](../api/)
*   [工具](../devtools/devtools.html)
*   [腾讯云支持](../qcloud/qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [视图容器](view.html)
    *   [view](view.html)
    *   [scroll-view](scroll-view.html)
    *   [swiper](swiper.html)
    *   [movable-view](movable-view.html)
    *   [cover-view](cover-view.html)
*   [基础内容](icon.html)
    *   [icon](icon.html)
    *   [text](text.html)
    *   [rich-text](rich-text.html)
    *   [progress](progress.html)
*   [表单组件](button.html)
    *   [button](button.html)
    *   [checkbox](checkbox.html)
    *   [form](form.html)
    *   [input](input.html)
    *   [label](label.html)
    *   [picker](picker.html)
    *   [picker-view](picker-view.html)
    *   [radio](radio.html)
    *   [slider](slider.html)
    *   [switch](switch.html)
    *   [textarea](textarea.html)
*   [导航](navigator.html)
    *   [navigator](navigator.html)
*   [媒体组件](audio.html)
    *   [audio](audio.html#audio)
    *   [image](image.html)
    *   [video](video.html)
    *   [camera](camera.html)
    *   [live-player](live-player.html)
    *   [live-pusher](live-pusher.html)
*   [地图](map.html)
    *   [map](map.html#map)
*   [画布](canvas.html)
    *   [canvas](canvas.html#canvas)
*   [开放能力](open-data.html)
    *   [open-data](open-data.html)
    *   [web-view](web-view.html)
    *   [ad](ad.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

#### image

图片。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>src</td>

<td>String</td>

<td></td>

<td>图片资源地址</td>

<td></td>

</tr>

<tr>

<td>mode</td>

<td>String</td>

<td>'scaleToFill'</td>

<td>图片裁剪、缩放的模式</td>

<td></td>

</tr>

<tr>

<td>lazy-load</td>

<td>Boolean</td>

<td>false</td>

<td>图片懒加载。只针对page与scroll-view下的image有效</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>binderror</td>

<td>HandleEvent</td>

<td></td>

<td>当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}</td>

<td></td>

</tr>

<tr>

<td>bindload</td>

<td>HandleEvent</td>

<td></td>

<td>当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}</td>

</tr>

</tbody>

</table>

**注：image组件默认宽度300px、高度225px**

**mode 有效值：**

mode 有 13 种模式，其中 4 种是缩放模式，9 种是裁剪模式。

<table>

<thead>

<tr>

<th>模式</th>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>缩放</td>

<td>scaleToFill</td>

<td>不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素</td>

</tr>

<tr>

<td>缩放</td>

<td>aspectFit</td>

<td>保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。</td>

</tr>

<tr>

<td>缩放</td>

<td>aspectFill</td>

<td>保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。</td>

</tr>

<tr>

<td>缩放</td>

<td>widthFix</td>

<td>宽度不变，高度自动变化，保持原图宽高比不变</td>

</tr>

<tr>

<td>裁剪</td>

<td>top</td>

<td>不缩放图片，只显示图片的顶部区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>bottom</td>

<td>不缩放图片，只显示图片的底部区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>center</td>

<td>不缩放图片，只显示图片的中间区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>left</td>

<td>不缩放图片，只显示图片的左边区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>right</td>

<td>不缩放图片，只显示图片的右边区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>top left</td>

<td>不缩放图片，只显示图片的左上边区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>top right</td>

<td>不缩放图片，只显示图片的右上边区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>bottom left</td>

<td>不缩放图片，只显示图片的左下边区域</td>

</tr>

<tr>

<td>裁剪</td>

<td>bottom right</td>

<td>不缩放图片，只显示图片的右下边区域</td>

</tr>

</tbody>

</table>

**示例：**

[在开发者工具中预览效果](wechatide://minicode/8Mc01cmS6WY)

    <view class="page">
      <view class="page__hd">
        <text class="page__title">image</text>
        <text class="page__desc">图片</text>
      </view>
      <view class="page__bd">
        <view class="section section_gap" wx:for="{{array}}" wx:for-item="item">
          <view class="section__title">{{item.text}}</view>
          <view class="section__ctn">
            <image style="width: 200px; height: 200px; background-color: #eeeeee;" mode="{{item.mode}}" src="{{src}}"></image>
          </view>
        </view>
      </view>
    </view>

    Page({
      data: {
        array: [{
          mode: 'scaleToFill',
          text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
        }, { 
          mode: 'aspectFit',
          text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
        }, { 
          mode: 'aspectFill',
          text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
        }, { 
          mode: 'top',
          text: 'top：不缩放图片，只显示图片的顶部区域' 
        }, {      
          mode: 'bottom',
          text: 'bottom：不缩放图片，只显示图片的底部区域'
        }, { 
          mode: 'center',
          text: 'center：不缩放图片，只显示图片的中间区域'
        }, { 
          mode: 'left',
          text: 'left：不缩放图片，只显示图片的左边区域'
        }, { 
          mode: 'right',
          text: 'right：不缩放图片，只显示图片的右边边区域'
        }, { 
          mode: 'top left',
          text: 'top left：不缩放图片，只显示图片的左上边区域' 
        }, { 
          mode: 'top right',
          text: 'top right：不缩放图片，只显示图片的右上边区域'
        }, { 
          mode: 'bottom left',
          text: 'bottom left：不缩放图片，只显示图片的左下边区域'
        }, { 
          mode: 'bottom right',
          text: 'bottom right：不缩放图片，只显示图片的右下边区域'
        }],
        src: '../../resources/cat.jpg'
      },
      imageError: function(e) {
        console.log('image3发生error事件，携带值为', e.detail.errMsg)
      }
    })

##### 原图

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg)

##### scaleToFill

不保持纵横比缩放图片，使图片完全适应

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png)

##### aspectFit

保持纵横比缩放图片，使图片的长边能完全显示出来

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/2.png)

##### aspectFill

保持纵横比缩放图片，只保证图片的短边能完全显示出来

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/3.png)

##### top

不缩放图片，只显示图片的顶部区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/4.png)

##### bottom

不缩放图片，只显示图片的底部区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/5.png)

##### center

不缩放图片，只显示图片的中间区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/6.png)

##### left

不缩放图片，只显示图片的左边区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/7.png)

##### right

不缩放图片，只显示图片的右边边区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/8.png)

##### top left

不缩放图片，只显示图片的左上边区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/9.png)

##### top right

不缩放图片，只显示图片的右上边区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/10.png)

##### bottom left

不缩放图片，只显示图片的左下边区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/11.png)

##### bottom right

不缩放图片，只显示图片的右下边区域

![image](https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/12.png)

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

[](audio.html#audio)[](video.html)</div>

</div>