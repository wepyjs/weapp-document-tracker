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
*   [组件](../component/)
*   [API](../api/)
*   [工具](devtools.html)
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

### 2018.06.14 基础库更新（2.1.0）

1.  `A` 新增 API `wx.loadFontFace` 支持动态加载字体 [详情](../api/media-fontFace.html)
2.  `A` 新增 API `wx.getLogManager` 可记录用户操作日志，供用户提交意见反馈内容时，提交给开发者协助定位问题 [详情](../api/getLogManager.html)
3.  `A` 新增 组件 `<camera />` 的 `scanCode` 模式，支持识别一维码 [详情](../component/camera.html)
4.  `U` 更新 API `wx.createSelectorQuery` 可获取节点的样式信息 [详情](../api/wxml-nodes-info.html)
5.  `U` 更新 API `wx.scanCode` 返回参数新增 `rawData` 字段 [详情](../api/scancode.html)
6.  `U` 更新 API `wx.createLivePusher` 新增 `toggleTorch` 方法支持切换闪光灯 [详情](../api/api-live-pusher.html)
7.  `A` 新增 API `wx.getAvailableAudioSources` 获取当前可用的音频输入源 [详情](../api/getAvaliableAudioSources.md)
8.  `A` 新增 API `wx.getMenuButtonBoundingClientRect` 获取菜单按钮布局信息接口 [详情](https://developers.weixin.qq.com/minigame/dev/document/ui/wx.getMenuButtonBoundingClientRect.html)
9.  `A` 新增 API `wx.onDeviceOrientationChange` 监听屏幕方向的改变 [详情](https://developers.weixin.qq.com/minigame/dev/document/device/orientation/wx.onDeviceOrientationChange.html)
10.  `A` 新增 API `FileSystemManager.appendFile` 追加文件内容 [详情](https://developers.weixin.qq.com/minigame/dev/document/file/FileSystemManager.appendFile.html)
11.  `A` 新增小游戏 API `wx.updateKeyboard` 更新键盘 [详情](https://developers.weixin.qq.com/minigame/dev/document/ui/keyboard/wx.updateKeyboard.html)
12.  `A` 新增小游戏 API `wx.loadSubpackage` 加载分包 [详情](https://developers.weixin.qq.com/minigame/dev/tutorial/base/subpackages.html)
13.  `U` 更新 组件 `<button />` 可以嵌套在原生组件内，显示在原生组件之上 [详情](../component/button.html)
14.  `U` 更新 组件 `<button />` 新增 `open-type` 值为 `feedback`，打开“意见反馈”页面 [详情](../component/button.html)
15.  `U` 更新 组件 `<cover-view />` `<cover-image />` 新增 `scroll-top` 属性 [详情](../component/cover-view.html)
16.  `U` 更新 组件 `<cover-view />` `<cover-image />` 支持 rotate 和 scale 的样式设置 [详情](../component/cover-view.html)
17.  `U` 更新 组件 `<cover-image />` 新增 `bindload` 和 `binderror` 事件 [详情](../component/cover-view.html)
18.  `U` 更新 组件 `<movable-view />` 新增 `animation` 属性 [详情](../component/movable-view.html)
19.  `U` 更新 组件 `<live-pusher />` 新增 `zoom` 属性支持调整焦距 [详情](../component/live-pusher.html)
20.  `U` 更新 组件 `<input />` 在 `bindinput` 时返回 `keyCode` 键值 [详情](../component/input.html)
21.  `U` 更新 API `wx.startAccelerometer` 新增 `interval` 参数指定回调频率 [详情](../api/accelerometer.html#wxstartaccelerometerobject)
22.  `F` 修复 API `wx.reportAnalytics` 在插件下调用异常的问题
23.  `F` 修复 API `wx.hideToast` 在 iOS 下无法让前面的 `showLoading` 消失的问题
24.  `F` 修复 组件 `<image />` 在连续更新src时导致显示不正确的问题
25.  `F` 修复 组件 `<image />` 设置 border-radius 出现闪动的问题
26.  `F` 修复 组件 `<canvas />` 设置的shadow会影响fillStyle的问题
27.  `F` 修复 组件 `<movable-view />` 缩放的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000ecad1f3c210c5bbc67ea8750000)
28.  `F` 修复 组件 `<input />` 在某些情况下未被正常销毁的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a8c18c480908ed8c641ac75f400)
29.  `F` 修复 组件 `<video />` 设置 playbackRate 为 1.25 无效的问题
30.  `F` 修复 组件 `<map />` 在开发者工具双击地图缩放不触发 `bindregionchange` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c64a0f388b0f19fa6fe2cb51c00)
31.  `F` 修复 框架 在 video 全屏后有setData操作时导致字体变大的问题

### 2018.06.12 更新日志

1.  `A` 新增 TGit 工具栏入口 [详情](../qcloud/tgit.html)
2.  `F` 修复 远程调试分包中使用插件报错的问题

### 2018.06.08 更新日志

1.  `A` 新增 自动预览功能 [详情](debug.html#自动预览)
2.  `A` 新增 远程调试 Network 面板
3.  `A` 新增 模拟器静音功能
4.  `A` 新增 代码断点检测及提示
5.  `A` 新增 支持插件页面
6.  `A` 新增 上传插件时推荐版本号
7.  `A` 新增 Storage 面板清除按钮及数据详情展示
8.  `A` 新增 项目详情 appid 复制按钮
9.  `F` 修复 Win10 1803 版本出现自动编译的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000eccb1c5c0f81579c6986175b000)
10.  `F` 修复 1.02.1805181 引入的组件中使用抽象节点 componentGenerics 时异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a245810cdc8ddeac6f40d451000)
11.  `F` 修复 因在循环中使用断点导致重新编译时提示重启耗时过久的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e04fde747882576c6092a05b400)
12.  `F` 修复 项目中引入新插件时报错，需要切换一下基础库才能使用的问题
13.  `F` 修复 navigationStyle 为 custom 时显示异常的问题
14.  `F` 修复 `wx.setTabbarItem` 后重新编译无法恢复的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0000e67eff0af04773d6352c95bc00)
15.  `F` 修复 远程调试 typescript 源文件内容丢失的问题
16.  `F` 修复 压缩后的 js 文件无法正常格式化的问题
17.  `F` 修复 小游戏视频广告在模拟器缩放的情况下尺寸异常的问题

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