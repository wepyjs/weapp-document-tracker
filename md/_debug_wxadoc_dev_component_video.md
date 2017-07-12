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

#### video

视频。

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

<td>要播放视频的资源地址</td>

<td></td>

</tr>

<tr>

<td>duration</td>

<td>Number</td>

<td></td>

<td>指定视频时长</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>controls</td>

<td>Boolean</td>

<td>true</td>

<td>是否显示默认播放控件（播放/暂停按钮、播放进度、时间）</td>

<td></td>

</tr>

<tr>

<td>danmu-list</td>

<td>Object Array</td>

<td></td>

<td>弹幕列表</td>

<td></td>

</tr>

<tr>

<td>danmu-btn</td>

<td>Boolean</td>

<td>false</td>

<td>是否显示弹幕按钮，只在初始化时有效，不能动态变更</td>

<td></td>

</tr>

<tr>

<td>enable-danmu</td>

<td>Boolean</td>

<td>false</td>

<td>是否展示弹幕，只在初始化时有效，不能动态变更</td>

<td></td>

</tr>

<tr>

<td>autoplay</td>

<td>Boolean</td>

<td>false</td>

<td>是否自动播放</td>

<td></td>

</tr>

<tr>

<td>loop</td>

<td>Boolean</td>

<td>false</td>

<td>是否循环播放</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>muted</td>

<td>Boolean</td>

<td>false</td>

<td>是否静音播放</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindplay</td>

<td>EventHandle</td>

<td></td>

<td>当开始/继续播放时触发play事件</td>

<td></td>

</tr>

<tr>

<td>bindpause</td>

<td>EventHandle</td>

<td></td>

<td>当暂停播放时触发 pause 事件</td>

<td></td>

</tr>

<tr>

<td>bindended</td>

<td>EventHandle</td>

<td></td>

<td>当播放到末尾时触发 ended 事件</td>

<td></td>

</tr>

<tr>

<td>bindtimeupdate</td>

<td>EventHandle</td>

<td></td>

<td>播放进度变化时触发，event.detail = {currentTime: '当前播放时间'} 。触发频率应该在 250ms 一次</td>

<td></td>

</tr>

<tr>

<td>bindfullscreenchange</td>

<td>EventHandle</td>

<td></td>

<td>当视频进入和退出全屏是触发，event.detail = {fullScreen: '当前全屏状态'}</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>objectFit</td>

<td>String</td>

<td>contain</td>

<td>当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖</td>

<td></td>

</tr>

<tr>

<td>poster</td>

<td>String</td>

<td></td>

<td>默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效</td>

</tr>

</tbody>

</table>

video标签认宽度300px、高度225px，设置宽高需要通过wxss设置width和height。

**示例代码：**

    <view class="section tc">
      <video src="{{src}}"   controls ></video>
      <view class="btn-area">
        <button bindtap="bindButtonTap">获取视频</button>
      </view>
    </view>

    <view class="section tc">
      <video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" danmu-list="{{danmuList}}" enable-danmu danmu-btn controls></video>
      <view class="btn-area">
        <button bindtap="bindButtonTap">获取视频</button>
        <input bindblur="bindInputBlur"/>
        <button bindtap="bindSendDanmu">发送弹幕</button>
      </view>
    </view>

    function getRandomColor () {
      let rgb = []
      for (let i = 0 ; i < 3; ++i){
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
      }
      return '#' + rgb.join('')
    }

    Page({
      onReady: function (res) {
        this.videoContext = wx.createVideoContext('myVideo')
      },
      inputValue: '',
        data: {
            src: '',
        danmuList: [
          {
            text: '第 1s 出现的弹幕',
            color: '#ff0000',
            time: 1
          },
          {
            text: '第 3s 出现的弹幕',
            color: '#ff00ff',
            time: 3
        }]
        },
      bindInputBlur: function(e) {
        this.inputValue = e.detail.value
      },
      bindButtonTap: function() {
        var that = this
        wx.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 60,
          camera: ['front','back'],
          success: function(res) {
            that.setData({
              src: res.tempFilePath
            })
          }
        })
      },
      bindSendDanmu: function () {
        this.videoContext.sendDanmu({
          text: this.inputValue,
          color: getRandomColor()
        })
      }
    })

![video](https://mp.weixin.qq.com/debug/wxadoc/dev/image/pic/video.png)

相关api：[wx.createVideoContext](../api/api-video.html)

##### Bug & Tip

1.  `tip`: `video` 组件是由客户端创建的原生组件，它的层级是最高的。
2.  `tip`: 请勿在 `scroll-view` 中使用 `video` 组件。
3.  `tip`: `css` 动画对 `video` 组件无效。

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

[](image.html)[](map.html)</div>

</div>