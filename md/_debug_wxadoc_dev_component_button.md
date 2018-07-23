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
    *   [functional-page-navigator](functional-page-navigator.html)
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

#### button

按钮。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>生效时机</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>size</td>

<td>String</td>

<td>default</td>

<td>按钮的大小</td>

<td></td>

<td></td>

</tr>

<tr>

<td>type</td>

<td>String</td>

<td>default</td>

<td>按钮的样式类型</td>

<td></td>

<td></td>

</tr>

<tr>

<td>plain</td>

<td>Boolean</td>

<td>false</td>

<td>按钮是否镂空，背景色透明</td>

<td></td>

<td></td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td></td>

<td></td>

</tr>

<tr>

<td>loading</td>

<td>Boolean</td>

<td>false</td>

<td>名称前是否带 loading 图标</td>

<td></td>

<td></td>

</tr>

<tr>

<td>form-type</td>

<td>String</td>

<td></td>

<td>用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件</td>

<td></td>

<td></td>

</tr>

<tr>

<td>open-type</td>

<td>String</td>

<td></td>

<td>微信开放能力</td>

<td></td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>hover-class</td>

<td>String</td>

<td>button-hover</td>

<td>指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果</td>

<td></td>

<td></td>

</tr>

<tr>

<td>hover-stop-propagation</td>

<td>Boolean</td>

<td>false</td>

<td>指定是否阻止本节点的祖先节点出现点击态</td>

<td></td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>hover-start-time</td>

<td>Number</td>

<td>20</td>

<td>按住后多久出现点击态，单位毫秒</td>

<td></td>

<td></td>

</tr>

<tr>

<td>hover-stay-time</td>

<td>Number</td>

<td>70</td>

<td>手指松开后点击态保留时间，单位毫秒</td>

<td></td>

<td></td>

</tr>

<tr>

<td>lang</td>

<td>String</td>

<td>en</td>

<td>指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。</td>

<td>open-type="getUserInfo"</td>

<td>[1.3.0](../framework/compatibility.html "基础库 1.3.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindgetuserinfo</td>

<td>Handler</td>

<td></td>

<td>用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与[wx.getUserInfo](../api/open.html#wxgetuserinfoobject)返回的一致</td>

<td>open-type="getUserInfo"</td>

<td>[1.3.0](../framework/compatibility.html "基础库 1.3.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>session-from</td>

<td>String</td>

<td></td>

<td>会话来源</td>

<td>open-type="contact"</td>

<td>[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>send-message-title</td>

<td>String</td>

<td>当前标题</td>

<td>会话内消息卡片标题</td>

<td>open-type="contact"</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>send-message-path</td>

<td>String</td>

<td>当前分享路径</td>

<td>会话内消息卡片点击跳转小程序路径</td>

<td>open-type="contact"</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>send-message-img</td>

<td>String</td>

<td>截图</td>

<td>会话内消息卡片图片</td>

<td>open-type="contact"</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>show-message-card</td>

<td>Boolean</td>

<td>false</td>

<td>显示会话内消息卡片</td>

<td>open-type="contact"</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindcontact</td>

<td>Handler</td>

<td></td>

<td>客服消息回调</td>

<td>open-type="contact"</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindgetphonenumber</td>

<td>Handler</td>

<td></td>

<td>获取用户手机号回调</td>

<td>open-type="getPhoneNumber"</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>app-parameter</td>

<td>String</td>

<td></td>

<td>打开 APP 时，向 APP 传递的参数</td>

<td>open-type="launchApp"</td>

<td>[1.9.5](../framework/compatibility.html "基础库 1.9.5 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>binderror</td>

<td>Handler</td>

<td></td>

<td>当使用开放能力时，发生错误的回调</td>

<td>open-type="launchApp"</td>

<td>[1.9.5](../framework/compatibility.html "基础库 1.9.5 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindopensetting</td>

<td>Handler</td>

<td></td>

<td>在打开授权设置页后回调</td>

<td>open-type="openSetting"</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

*   **注1：`button-hover` 默认为`{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`**
*   **注2：`bindgetphonenumber` 从1.2.0 开始支持，但是在1.5.3以下版本中无法使用`wx.canIUse`进行检测，建议使用基础库版本进行判断。**
*   **注3：在`bindgetphonenumber` 等返回加密信息的回调中调用 `wx.login` 登录，可能会刷新登录态。此时服务器使用 code 换取的 sessionKey 不是加密时使用的 sessionKey，导致解密失败。建议开发者提前进行 `login`；或者在回调中先使用 `checkSession` 进行登录态检查，避免 `login` 刷新登录态。**
*   **注4：从 2.1.0 起，button 可作为原生组件的子节点嵌入，以便在原生组件上使用 `open-type` 的能力**

**size 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>default</td>

<td>默认大小</td>

</tr>

<tr>

<td>mini</td>

<td>小尺寸</td>

</tr>

</tbody>

</table>

**type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>primary</td>

<td>绿色</td>

</tr>

<tr>

<td>default</td>

<td>白色</td>

</tr>

<tr>

<td>warn</td>

<td>红色</td>

</tr>

</tbody>

</table>

**form-type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>submit</td>

<td>提交表单</td>

</tr>

<tr>

<td>reset</td>

<td>重置表单</td>

</tr>

</tbody>

</table>

**open-type 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>contact</td>

<td>打开客服会话</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>share</td>

<td>触发用户转发，使用前建议先阅读[使用指引](../api/share.html#使用指引)</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>getUserInfo</td>

<td>获取用户信息，可以从bindgetuserinfo回调中获取到用户信息</td>

<td>[1.3.0](../framework/compatibility.html "基础库 1.3.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>getPhoneNumber</td>

<td>获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，[具体说明](../api/getPhoneNumber.html)</td>

<td>[1.2.0](../framework/compatibility.html "基础库 1.2.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>launchApp</td>

<td>打开APP，可以通过app-parameter属性设定向APP传的参数[具体说明](../api/launchApp.html)</td>

<td>[1.9.5](../framework/compatibility.html "基础库 1.9.5 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>openSetting</td>

<td>打开授权设置页</td>

<td>[2.0.7](../framework/compatibility.html "基础库 2.0.7 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>feedback</td>

<td>打开“意见反馈”页面，用户可提交反馈内容并上传[日志](../api/getLogManager.html)，开发者可以登录[小程序管理后台](https://mp.weixin.qq.com/)后进入左侧菜单“客服反馈”页面获取到反馈内容</td>

<td>[2.1.0](../framework/compatibility.html "基础库 2.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/ZHrWZqm66cZy)

    /** wxss **/
    /** 修改button默认的点击态样式类**/
    .button-hover {
      background-color: red;
    }
    /** 添加自定义button点击态样式类**/
    .other-button-hover {
      background-color: blue;
    }

    <button type="default" size="{{defaultSize}}" loading="{{loading}}" plain="{{plain}}"
            disabled="{{disabled}}" bindtap="default" hover-class="other-button-hover"> default </button>
    <button type="primary" size="{{primarySize}}" loading="{{loading}}" plain="{{plain}}"
            disabled="{{disabled}}" bindtap="primary"> primary </button>
    <button type="warn" size="{{warnSize}}" loading="{{loading}}" plain="{{plain}}"
            disabled="{{disabled}}" bindtap="warn"> warn </button>
    <button bindtap="setDisabled">点击设置以上按钮disabled属性</button>
    <button bindtap="setPlain">点击设置以上按钮plain属性</button>
    <button bindtap="setLoading">点击设置以上按钮loading属性</button>
    <button open-type="contact">进入客服会话</button>
    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
    <button open-type="openSetting">打开授权设置页</button>

    var types = ['default', 'primary', 'warn']
    var pageObject = {
      data: {
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disabled: false,
        plain: false,
        loading: false
      },
      setDisabled: function(e) {
        this.setData({
          disabled: !this.data.disabled
        })
      },
      setPlain: function(e) {
        this.setData({
          plain: !this.data.plain
        })
      },
      setLoading: function(e) {
        this.setData({
          loading: !this.data.loading
        })
      },
      onGotUserInfo: function(e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.userInfo)
        console.log(e.detail.rawData)
      },
    }

    for (var i = 0; i < types.length; ++i) {
      (function(type) {
        pageObject[type] = function(e) {
          var key = type + 'Size'
          var changedData = {}
          changedData[key] =
            this.data[key] === 'default' ? 'mini' : 'default'
          this.setData(changedData)
        }
      })(types[i])
    }

    Page(pageObject)

![button](https://developers.weixin.qq.com/miniprogram/dev/image/pic/button.png)

##### Bug & Tip

1.  `tip`: 目前，设置了 `form-type` 的 `button` 只会对当前组件中的 `form` 有效。因而，将 `button` 封装在自定义组件中，而 `from` 在自定义组件外，将会使这个 `button` 的 `form-type` 失效。

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](progress.html)[](checkbox.html)</div>

</div>