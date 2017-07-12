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
*   [框架](../framework/MINA.html)
*   [组件](./)
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
*   [地图](map.html)
    *   [map](map.html#map)
*   [画布](canvas.html)
    *   [canvas](canvas.html#canvas)
*   [开放数据](open-data.html)
    *   [open-data](open-data.html)
*   [客服会话](contact-button.html)
    *   [contact-button](contact-button.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

#### audio

音频。

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

<td>id</td>

<td>String</td>

<td></td>

<td>audio 组件的唯一标识符</td>

</tr>

<tr>

<td>src</td>

<td>String</td>

<td></td>

<td>要播放音频的资源地址</td>

</tr>

<tr>

<td>loop</td>

<td>Boolean</td>

<td>false</td>

<td>是否循环播放</td>

</tr>

<tr>

<td>controls</td>

<td>Boolean</td>

<td>true</td>

<td>是否显示默认控件</td>

</tr>

<tr>

<td>poster</td>

<td>String</td>

<td></td>

<td>默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效</td>

</tr>

<tr>

<td>name</td>

<td>String</td>

<td>未知音频</td>

<td>默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效</td>

</tr>

<tr>

<td>author</td>

<td>String</td>

<td>未知作者</td>

<td>默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效</td>

</tr>

<tr>

<td>binderror</td>

<td>EventHandle</td>

<td></td>

<td>当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}</td>

</tr>

<tr>

<td>bindplay</td>

<td>EventHandle</td>

<td></td>

<td>当开始/继续播放时触发play事件</td>

</tr>

<tr>

<td>bindpause</td>

<td>EventHandle</td>

<td></td>

<td>当暂停播放时触发 pause 事件</td>

</tr>

<tr>

<td>bindtimeupdate</td>

<td>EventHandle</td>

<td></td>

<td>当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}</td>

</tr>

<tr>

<td>bindended</td>

<td>EventHandle</td>

<td></td>

<td>当播放到末尾时触发 ended 事件</td>

</tr>

</tbody>

</table>

**MediaError.code**

<table>

<thead>

<tr>

<th>返回错误码</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>MEDIA_ERR_ABORTED</td>

<td>获取资源被用户禁止</td>

</tr>

<tr>

<td>MEDIA_ERR_NETWORD</td>

<td>网络错误</td>

</tr>

<tr>

<td>MEDIA_ERR_DECODE</td>

<td>解码错误</td>

</tr>

<tr>

<td>MEDIA_ERR_SRC_NOT_SUPPOERTED</td>

<td>不合适资源</td>

</tr>

</tbody>

</table>

**示例代码：**

    <!-- audio.wxml -->
    <audio poster="{{poster}}" name="{{name}}" author="{{author}}" src="{{src}}" id="myAudio" controls loop></audio>

    <button type="primary" bindtap="audioPlay">播放</button>
    <button type="primary" bindtap="audioPause">暂停</button>
    <button type="primary" bindtap="audio14">设置当前播放时间为14秒</button>
    <button type="primary" bindtap="audioStart">回到开头</button>

    // audio.js
    Page({
      onReady: function (e) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio')
      },
      data: {
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        author: '许巍',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      },
      audioPlay: function () {
        this.audioCtx.play()
      },
      audioPause: function () {
        this.audioCtx.pause()
      },
      audio14: function () {
        this.audioCtx.seek(14)
      },
      audioStart: function () {
        this.audioCtx.seek(0)
      }
    })

![audio](https://mp.weixin.qq.com/debug/wxadoc/dev/image/pic/audio.png)

相关api：[wx.createAudioContext](../api/api-audio.html)

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

[](navigator.html)[](audio.html#audio)</div>

</div>