<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
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

微信小程序开发文档

</div>

*   [简易教程](../)
*   [框架](../framework/MINA.html)
*   [组件](../component/)
*   [API](../api/)
*   [工具](devtools.html)
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

*   [基础](../quickstart/basic/getting-started.html)
    *   [起步](../quickstart/basic/getting-started.html)
        *   [申请帐号](../quickstart/basic/getting-started.html#申请帐号)
        *   [安装开发工具](../quickstart/basic/getting-started.html#安装开发工具)
        *   [我的第一个小程序](../quickstart/basic/getting-started.html#你的第一个小程序)
        *   [编译预览](../quickstart/basic/getting-started.html#编译预览)
    *   [代码构成](../quickstart/basic/file.html)
        *   [JSON 配置](../quickstart/basic/file.html#JSON-配置)
        *   [WXML 模板](../quickstart/basic/file.html#WXML-模板)
        *   [WXSS 样式](../quickstart/basic/file.html#WXSS-样式)
        *   [JS 逻辑交互](../quickstart/basic/file.html#JS-交互逻辑)
    *   [小程序能力](../quickstart/basic/framework.html)
        *   [小程序的启动](../quickstart/basic/framework.html#小程序的启动)
        *   [程序与页面](../quickstart/basic/framework.html#程序与页面)
        *   [组件](../quickstart/basic/framework.html#组件)
        *   [API](../quickstart/basic/framework.html#API)
    *   [发布前的准备](../quickstart/basic/role.html)
        *   [用户身份](../quickstart/basic/role.html#用户身份)
        *   [预览](../quickstart/basic/role.html#预览)
        *   [上传代码](../quickstart/basic/role.html#上传代码)
        *   [小程序的版本](../quickstart/basic/role.html#小程序的版本)
    *   [上线](../quickstart/basic/release.html)
        *   [提交审核](../quickstart/basic/release.html#提交审核)
        *   [发布](../quickstart/basic/release.html#发布)
        *   [运营数据](../quickstart/basic/release.html#运营数据)
*   [体验小程序](../demo.html)
*   [更新日志](new.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

### 2018.03.07 基础库更新 (1.9.92)

1.  `A` 新增 API `wx.createWorker` 可创建多线程 Worker [详情](../api/createWorker.html)
2.  `A` 新增 API `wx.getUpdateManager` 提供小程序强制更新机制 [详情](../api/getUpdateManager.md)
3.  `A` 新增 API `canvasContext.measureText` 支持查看文本在当前canvas状态下的大小 [详情](../api/canvas/measure-text.html)
4.  `A` 新增 API `canvasContext.globalCompositeOperation` 支持设置要在绘制新形状时应用的合成操作的类型 [详情](../api/canvas/global-composite-operation.html)
5.  `A` 新增 API `canvasContext.arcTo` 可根据控制点和半径绘制圆弧路径 [详情](../api/canvas/arc-to.html)
6.  `A` 新增 API `canvasContext.strokeText` 提供绘制文本的方法 [详情](../api/canvas/stroke-text.html)
7.  `A` 新增 API `canvasContext.lineDashOffset` 可设置虚线偏移量 [详情](../api/canvas/line-dash-offset.html)
8.  `A` 新增 API `canvasContext.createPattern` 可对指定的图像创建模式 [详情](../api/canvas/create-pattern.html)
9.  `A` 新增 API `canvasContext.shadowBlur/shadowColor/shadowOffsetX/shadowOffsetY` 可设置阴影的相关样式 [详情](../api/canvas/set-shadow.html)
10.  `A` 新增 API `canvasContext.font` 可设置当前字体样式 [详情](../api/canvas/font.html)
11.  `A` 新增 API `canvasContext.transform` 可使用矩阵多次叠加当前变换 [详情](../api/canvas/transform.md)
12.  `A` 新增 API `canvasContext.setTransform` 使用矩阵重新设置（覆盖）当前变换 [详情](../api/canvas/set-transform.html)
13.  `A` 新增 API `LivePusherContext.snapshot` 可在推流中进行拍照 [详情](../api/api-live-pusher.html)
14.  `A` 新增 配置 `window.backgroundColorTop` `window.backgroundColorBottom` 可分别设置窗口顶部和底部的背景颜色 [详情](../framework/config.html)
15.  `U` 更新 API `wx.createInnerAudioContext` 新增 `volumn` 属性，可调节音量 [详情](../api/createInnerAudioContext.html)
16.  `U` 更新 API `wx.login` `wx.getUserInfo` `wx.getShareInfo` `wx.getWeRunData` 新增 `timeout` 参数，可设置超时时间 [详情](../api/api-login.html)
17.  `U` 更新 API `wx.getImageInfo` 增加返回 `orientation` 和 `type` 值 [详情](../api/media-picture.html#wxgetimageinfoobject)
18.  `U` 更新 组件 `<cover-view />` 支持设置 `overflow: scroll` 产生局部滚动区域 [详情](../component/cover-view.html)
19.  `U` 更新 组件 `<cover-view />` 支持设置 `position: fixed` 使之相对窗口固定 [详情](../component/cover-view.html)
20.  `U` 更新 组件 `<open-data />` 支持渲染 userInfo 相关信息 [详情](../component/open-data.html)
21.  `U` 更新 组件 `<movable-view />` 新增 `bindchange` 事件 [详情](../component/movable-view.html)
22.  `U` 更新 组件 `<movable-view />` 支持缩放手势 [详情](../component/movable-view.html)
23.  `U` 更新 组件 `<movable-view />` 新增 `bindvtouchmove` `bindvtouchmove` 事件 [详情](../component/movable-view.html)
24.  `U` 更新 组件 `<movable-view />` 新增 `disabled` 属性以禁用滑动 [详情](../component/movable-view.html)
25.  `U` 更新 组件 `<input />` `<textarea />` 新增 `adjust-position` 属性控制是否自动上推页面 [详情](../component/input.html)
26.  `U` 更新 组件 `<input />` `<textarea />` 在 `bindfocus` 事件回调里返回键盘高度 [详情](../component/input.html)
27.  `U` 更新 组件 `<picker />` 新增 `bindcancel` 事件 [详情](../component/picker.html)
28.  `U` 更新 组件 新增 `bindtouchforcechange` 事件 [详情](../framework/view/wxml/event.html)
29.  `U` 更新 自定义组件 样式前缀化支持类名传递 [详情](../framework/custom-component/wxml-wxss.html)
30.  `F` 修复 API `wx.showModal` 的 `cancelText` 和 `confirmText` 只能输入 4 个英文字符的问题
31.  `F` 修复 组件 `<live-player />` 无法停止播放的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e2242cc0df08455263ce9651800)
32.  `F` 修复 组件 `<input />` 多个空格在失焦时只显示一个空格的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00080a60a547780f8a26543ec51400)
33.  `F` 修复 组件 `<input />` 在 disabled 状态下设置 color 无效的问题
34.  `F` 修复 组件 `<slider />` 设置 transform 导致滑块滑动异常的问题
35.  `F` 修复 组件 `<form />` 在安卓下键盘弹起时不触发 submit 事件的问题
36.  `F` 修复 框架 在安卓滚动时点击会触发 tap 事件的问题
37.  `F` 修复 框架 `onReachBottom` 事件在快速滑动出现触发次数异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0071cf5e4aa19bbc146c9ff964db7fb5)
38.  `F` 修复 框架 转换 rpx 单位无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=2a21c3154dacc19a16550b6627e86a55)

## 历史更新日志

[历史更新日志](uplog.html)

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

[](../demo.html)[](../framework/MINA.html)</div>

</div>