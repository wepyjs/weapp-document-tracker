<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017616)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017616)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=2017616)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=2017616)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017616)

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

*   [简易教程](../)
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

### 2017.05.26 更新日志

### 工具更新

1.  `A` 新增 基础库 1.2.2 调试支持
2.  `F` 修复 基础库切换导致异常的问题
3.  `F` 修复 页面内分享会调用两次 Page.onShareAppMessage 的问题
4.  `F` 修复 工具外部修改代码文件或文件夹时出现编译异常的问题
5.  `F` 修复 `wx.uploadFile` 网络状态码不为 200 回调 fail 与客户端不一致的问题

### 基础库更新(1.2.2)

1.  `F` 修复 API `wx.getBackgroundAudioPlayerState` 在开发工具音乐开始播放后也回调 fail 的问题
2.  `F` 修复 API `mapContext.getCenterLocation` 在开发者工具上无 success 回调问题

### 2017.05.19 更新日志

### 更新概述

*   支持 18 个全新的 API 包括 iBeacon、授权、屏幕亮度、振动等接口
*   新增拖拽组件 `<movable-view>`
*   对 `<map />` 地图组件做了大量更新
*   对 `<video />` 视频组件修复了大量体验问题
*   增加性能面板，方便查看小程序运行时性能
*   优化小程序 crash 问题

### 基础库更新(1.2.1)

1.  `A` 新增 API 6 个 iBeacon 相关接口 [详情](../api/iBeacon.html)
2.  `A` 新增 API `wx.getSetting` 获取小程序的授权设置 [详情](../api/setting.html#wxgetsettingobject)
3.  `A` 新增 API `wx.authorize` 提前授权 [详情](../api/authorize.html#wxauthorizeobject)
4.  `A` 新增 API `wx.getScreenBrightness` 获取屏幕亮度 [详情](../api/device.html#wxgetscreenbrightnessobject)
5.  `A` 新增 API `wx.setScreenBrightness` 设置屏幕亮度 [详情](../api/device.html#wxsetscreenbrightnessobject)
6.  `A` 新增 API `wx.addPhoneContact` 保存联系人到系统通讯录 [详情](../api/device.html#wxaddphonecontactobject)
7.  `A` 新增 API `wx.updateShareMenu` 动态更新转发菜单设置 [详情](../api/share.html#wxupdatesharemenuobject)
8.  `A` 新增 API `wx.vibrateShort` `wx.vibrateLong` 振动 [详情](../api/device.html#wxvibratelongobject)
9.  `A` 新增 API `wx.getWeRunData` 获取微信运动数据 [详情](../api/we-run.html#wxgetwerundataobject)
10.  `A` 新增 API `wx.saveImageToPhotosAlbum` 保存图片到系统相册 [详情](../api/media-picture.html#wxsaveimagetophotosalbumobject)
11.  `A` 新增 API `wx.saveVideoToPhotosAlbum` 保存视频到系统相册 [详情](../api/media-picture.html#wxsavevideotophotosalbumobject)
12.  `A` 新增 API `wx.getBackgroundAudioManager` 获取背景音频管理器 [详情](../api/getBackgroundAudioManager.html)
13.  `U` 更新 API `wx.canvasToTempFilePath` 增加 `x` `y` `width` `height` `destWidth` `destHeight` 参数 [详情](../api/canvas/temp-file.html)
14.  `U` 更新 API `wx.getLocation` 支持返回高度，水平/垂直精度 [详情](../api/location.html#wxgetlocationobject)
15.  `U` 更新 API `wx.scanCode` 新增 `onlyFromCamera` 参数，指定扫码不能从相册选择 [详情](../api/scancode.html#wxscancodeobject)
16.  `F` 修复 API `wx.getBluetoothDevices` Android 上回调错误的问题
17.  `F` 修复 API `wx.getLocation` 在安卓上调用，移动后返回的位置不更新问题
18.  `F` 修复 API `wx.makePhoneCall` 在 Android 无法调用分机问题
19.  `F` 修复 API `wx.setNavigationBarTitle` 异常问题
20.  `A` 新增 组件 `<movable-view />` 实现拖拽能力 [详情](../component/movable-view.html)
21.  `U` 更新 组件 `<button />` `open-type` 新增 `share` 属性 [详情](../component/button.html)
22.  `U` 更新 组件 `<map />` `marker` 上方支持气泡窗口 [详情](../component/map.html)
23.  `U` 更新 组件 `<map />` `marker` 可以增加 label 标签 [详情](../component/map.html)
24.  `U` 更新 组件 `<map />` 可以改变经纬度在 `marker` 图标的锚点 [详情](../component/map.html)
25.  `U` 更新 组件 `<map />` 新增箭头样式路线 [详情](../component/map.html)
26.  `U` 更新 组件 `<map />` 可以设置路线边框 [详情](../component/map.html)
27.  `U` 更新 组件 `<map />` `mapContext` 新增 translateMarker 接口，支持 marker 平移动画 [详情](../api/api-map.html)
28.  `U` 更新 组件 `<map />` `mapContext` 新增 includePoints 接口，可以设置 padding [详情](../api/api-map.html)
29.  `U` 优化 组件 `<scroll-view />` `scroll-into-view` 支持横向定位 [详情](../component/scroll-view.html)
30.  `U` 优化 组件 `<switch />` 增加振动反馈 [详情](../component/switch.html)
31.  `U` 优化 组件 `<picker-view />` 滚动时增加声音和振动反馈 [详情](../component/picker-view.html)
32.  `F` 修复 组件 `<picker-view />` 中同时改变列表和 value 时显示不正确的问题
33.  `F` 修复 组件 `<scroll-view />` 横向滚动在频繁 setData 时卡顿的问题 [详情](../component/scroll-view.html)
34.  `F` 修复 组件 `<scroll-view />` 横向滚动设置了 `min-height` 滚动异常问题
35.  `F` 修复 组件 `<scroll-view />` 通过 `wx:if` 隐藏后显示， `enable-back-to-top` 失效问题
36.  `F` 修复 组件 `<scroll-view />` 滑动时停止并快速点击，不触发 `touch*` 事件的问题
37.  `F` 修复 组件 `<swiper />` Android 下第一个指示点残缺问题
38.  `F` 修复 组件 `<image />` 动态设置 `src=""` 已显示的图片没有消失的问题
39.  `F` 修复 组件 `<image />` src 属性带有空格导致微信中无法显示图片的问题
40.  `F` 修复 组件 `<image />` 在 iOS 中连续设置本地图片和网络图片的时序问题
41.  `F` 修复 组件 `<input />` 失焦的时候文本重影问题
42.  `F` 修复 组件 `<input />` 在 Android 下切换到另一个 `<input />` 时键盘不显示的问题
43.  `F` 修复 组件 `<input />` 密码类型重影问题
44.  `F` 修复 组件 `<video />` 在 iOS 中关闭屏幕锁定方向后开启全屏，视频方向不正常的问题
45.  `F` 修复 组件 `<video />` iOS 拍摄的视频在 Android 中播放方向颠倒问题
46.  `F` 修复 组件 `<video />` Android 中切换视频，上一个视频的弹幕任然显示的问题
47.  `F` 修复 组件 `<video />` 视频在全屏状态下弹幕不生效问题
48.  `F` 修复 组件 `<video />` iOS 最底部弹幕被进度条遮挡问题
49.  `F` 修复 组件 `<video />` iOS 全屏状态下进度条断层，并且闪烁的问题
50.  `F` 修复 组件 `<video />` iOS 播放器默认显示弹幕按钮的问题
51.  `F` 修复 组件 `<video />` iOS 播放时点击右上角查看小程序信息，返回后播放器卡住问题
52.  `F` 修复 组件 `<video />` iOS 播放过程中断网，已缓冲视频播放完后画面停止，但是进度条还在走动问题
53.  `F` 修复 组件 `<video />` iOS 在全屏播放的情况下，无法切换视频地址
54.  `F` 修复 组件 `<video />` 弹幕文字重叠的问题
55.  `F` 修复 组件 `<video />` 直播视频操作进度条问题
56.  `F` 修复 组件 `<video />` 全屏后导致原生组件层级错乱问题
57.  `A` 增加 框架能力 在 `Page` 实例中可以通过 `route` 字段获取页面路径 [详情](../framework/app-service/page.html)
58.  `A` 新增 开发体验 体验版支持打开 vConsole 调试
59.  `A` 新增 开发体验 客户端增加性能面板 [详情](../framework/performance.html)
60.  `U` 优化 系统能力 Android 在锁屏情况下小程序被关闭
61.  `U` 优化 系统能力 iOS 下页面 crash 重启
62.  `F` 修复 自定义分析 在页面初始化之前的上报失败问题

### 工具更新

1.  `A` 新增 基础库 `1.2.1` 调试支持。
2.  `U` 优化 `App` 和 `Page` 中的函数自动补全
3.  `F` 修复 条件编译中的 query 在 `App.onLaunch` 时多 decode 一次的问题
4.  `F` 修复 首页的 json 文件出错，且 tabbar 中有空路径时工具无法启动的问题
5.  `F` 修复 开启上传代码样式文件自动补全时，wxss 文件有误导致一直在上传中的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=a71468267c33fb46b1745ee4cddb281e&highline=%E4%B8%8A%E4%BC%A0%E4%B8%AD&token=56565699&lang=zh_CN)
6.  `F` 修复 `wx.previewImage` 中参数为非字符串时工具异常的问题
7.  `F` 修复 网页调试中刷新和下拉地址栏按钮无效
8.  `F` 修复 网页调试菜单栏缺失跳转按钮、Mac 下缺失后退、前进、选中地址栏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0ed970224f4bc91746baec86d95d7c7e&highline=%E5%90%8E%E9%80%80&token=56565699&lang=zh_CN)
9.  `F` 修复 使用"关闭其他标签"后，使用 `Ctrl+s` 保存当前文件，会恢复之前关闭的其他标签的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1908977334&docid=eab58703fefba9341c076ed548722d46)
10.  `F` 修复 有时外部修改文件保存后自动编译时报网络错误的问题
11.  `F` 修复 有 tabbar 的小程序启动时还未加载完时快速切换到另一个 tab 然后马上切换回来会出错的问题

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017616)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](../demo.html)[](../framework/MINA.html)</div>

</div>