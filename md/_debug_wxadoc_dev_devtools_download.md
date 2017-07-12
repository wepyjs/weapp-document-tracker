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

*   [概览](devtools.html)
*   [程序调试](debug.html)
    *   [模拟器](debug.html#模拟器)
    *   [调试工具](debug.html#调试工具)
        *   [Wxml Panel](debug.html#wxml-panel)
        *   [Sources Panel](debug.html#sources-panel)
        *   [Network Panel](debug.html#network-panel)
        *   [Appdata Panel](debug.html#appdata-panel)
        *   [Storage Panel](debug.html#storage-panel)
        *   [Console Panel](debug.html#console-panel)
        *   [Sensor Panel](debug.html#sensor-panel)
    *   [小程序操作区](debug.html#小程序操作区)
*   [特殊 API 的调试](different.html)
*   [代码编辑](edit.html)
*   [设置](settings.html)
*   [项目预览](project.html)
*   [第三方平台](ext.html)
*   [下载](download.html)
*   [细节点](details.html)
*   [历史更新日志](uplog.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 下载地址

### 最新版本 2017.07.11 (0.19.191100)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

### 更新概述

*   新增 7 个全新 API 包括获取页面布局，页面滚动，监听截图事件等
*   新增 `<cover-view />` 可以覆盖在原生组件之上
*   新增 `<open-data />` 可以展示微信开放数据
*   新增 `<rich-text />` 可以展示富文本
*   优化小程序启动逻辑

### 基础库更新 (1.4.0)

1.  `A` 新增 API `createSelectorQuery` 获取元素布局信息 [详情](../api/wxml-nodes-info.html#wxcreateselectorquery)
2.  `A` 新增 API `getFileInfo` 获取文件信息 [详情](../api/getFileInfo.html)
3.  `A` 新增 API `onUserCaptureScreen` 监听用户进行截屏事件 [详情](../api/onUserCaptureScreen.html#wxonusercapturescreen)
4.  `A` 新增 API `pageScrollTo` 使页面滚动到指定位置 [详情](../api/scroll.html)
5.  `A` 新增 API `setNavigationBarColor` 支持小程序修改标题栏颜色 [详情](../api/setNavigationBarColor.html)
6.  `A` 新增 API `setEnableDebug` 控制线上版本 vConsole 的打开关闭 [详情](../api/setEnableDebug.html)
7.  `A` 新增 API `setKeepScreenOn` 允许小程序设置屏幕保持常亮 [详情](../api/setKeepScreenOn.html)
8.  `U` 更新 API `closeSocket` 新增 code, reason 参数 [详情](../api/network-socket.html#wxclosesocketobject)
9.  `U` 更新 API `connectSocket` 接口增加 支持 protocols 参数定义子协议 [详情](../api/network-socket.html)
10.  `U` 更新 API `getUserInfo` 增加 lang 参数指定返回用户信息语言 [详情](../api/open.html)
11.  `U` 更新 API `openDocument` 增加 fileType 参数用于指定文件类型 [详情](../api/file.html#wxopendocumentobject)
12.  `U` 更新 API `request` 超过并发限制做队列处理
13.  `U` 更新 API `request` 返回 requestTask 支持 abort 操作 [详情](../api/network-request.html#返回值)
14.  `U` 更新 API `uploadFile` `downloadFile` 返回 uploadTask/downloadTask 支持监听进度更新及 abort 操作 [详情](../api/network-file.html#返回值)
15.  `F` 修复 API `canvasToTempFilePath` 在 iOS 下保存图片不清晰的问题
16.  `F` 修复 API `chooseLocation` 直接选第一个默认地址，成功后返回信息为空的问题
17.  `F` 修复 API `chooseVideo` 当录制视频超过 10s 时，播放结束会导致进度条错误的问题
18.  `F` 修复 API `getSystemInfo` 在 App 的 onLaunch 和 onShow 中返回不正确的 windowHeight 的问题
19.  `F` 修复 API `onBluetoothDeviceFound` 返回数据格式不正确的问题
20.  `F` 修复 API `reLaunch` 在客户端上跳转不成功的问题
21.  `F` 修复 API `request` 在 Android Http 状态码是 302 时异常的问题
22.  `F` 修复 API `showToast` 在 iOS 上页面滚动时出现会随着页面滚动的问题
23.  `A` 新增 canvas 上下文 `setTextBaseline` 接口 设置绘制文本时的文本基线 [详情](../api/canvas/set-text-baseline.html)
24.  `F` 修复 canvas 上下文 `setTextAlign` iOS 中文字过长时 center 对齐方式失效的问题
25.  `F` 修复 canvas 上下文 `disable-scroll` 在客户端上设置失败的问题
26.  `F` 修复 canvas 上下文 `drawImage` 在工具中同时多次绘制相同图片时只生效一个的问题
27.  `A` 新增 map 上下文 `translateMarker` 增加 rotate 参数 [详情](../api/api-map.html)
28.  `A` 新增 map 上下文 `getScale` `getRegion` 接口 支持返回当前缩放级别和视野范围 [详情](../api/api-map.html)
29.  `F` 修复 map 上下文 `translateMarker` 接口自动旋转计算出错的问题
30.  `F` 修复 map 上下文 `includeMapPoint` 接口的 padding 参数单位错误的问题
31.  `A` 新增 video 上下文 `requestFullScreen` `exitFullScreen` 接口 支持全屏 [详情](../api/api-video.html)
32.  `A` 新增 video 上下文 `playbackRate` 接口 支持倍速播放 [详情](../api/api-video.html)
33.  `F` 修复 video 上下文 `seek` 接口 在播放前设置无效的问题
34.  `A` 新增 组件 `<cover-view />` 原生组件上显示基础原生视图 [详情](../component/cover-view.html)
35.  `A` 新增 组件 `<open-data>` 实现展示微信开放数据 [详情](../component/open-data.html)
36.  `A` 新增 组件 `<rich-text />` 支持富文本 [详情](../component/rich-text.html)
37.  `U` 更新 组件 `<map />` 改变 scale 时增加动画过渡效果
38.  `U` 更新 组件 `<picker />` 新增多列模式和省市区类型 [详情](../component/picker.html)
39.  `U` 更新 组件 `<swiper />` 在 change 事件的返回值中增加 `source` 字段表示引起变化的原因
40.  `U` 更新 组件 `<text />` 增加 space 属性支持多空格显示 [详情](../component/text.html)
41.  `U` 更新 组件 `<text />` 增加 decode 属性支持将 `&nbsp;` 转成对应字符 [详情](../component/text.html)
42.  `U` 更新 组件 `<textarea />` 增加支持 `line-height` 的wxss设置
43.  `U` 更新 组件 `<video />` 增加 loop 属性支持循环播放 [详情](../component/video.html)
44.  `U` 更新 组件 `<video />` 增加 muted 属性支持静音播放 [详情](../component/video.html)
45.  `U` 更新 组件 `<video />` 增加 bindfullscreenchange 事件监听视频全屏变化 [详情](../component/video.html)
46.  `U` 更新 组件 `<video />` 支持手势操作控制音量和亮度
47.  `U` 更新 组件 `<video />` 支持视频拖动增加 icon 提示
48.  `U` 更新 组件 `<video />` 在 Android 下切换成原生播放器
49.  `F` 修复 组件 `<canvas />` 在 Devtools 中 disable-scroll 和文档描述不符的问题
50.  `F` 修复 组件 `<input />` 在 Android 中收起键盘同时 update 会更新失败的问题
51.  `F` 修复 组件 `<input />` 在 bindfocus 时更新 value 失效的问题
52.  `F` 修复 组件 `<map />` longitude latitude scale 属性更新后地图没有变化的问题
53.  `F` 修复 组件 `<map />` 事件没有带上 target 等信息的问题
54.  `F` 修复 组件 `<scroll-view />` 同时更新列表与 scroll-top 参数时，scroll-top 不立即生效的问题
55.  `F` 修复 组件 `<swpier />` 在 Android 和 Devtools 中的渲染延迟问题
56.  `F` 修复 组件 `<swiper />` 圆点区域滑动无效问题
57.  `F` 修复 组件 `<switch />` 因 label 点击而改变时没有触发 change 事件的问题
58.  `F` 修复 组件 `<textarea />` 设置了 auto-height 后底部出现多余空白的问题
59.  `F` 修复 组件 `<textarea />` disabled 变为 false 后更新不生效的问题
60.  `F` 修复 组件 `<video />` 视频续播退出后，位置不对的问题
61.  `F` 修复 组件 `<video />` 弹幕重叠问题
62.  `A` 新增 性能分析 开发者工具增加 Trace 功能 [详情](../framework/performance/tools.html)
63.  `A` 新增 性能建议文档 [详情](../framework/performance/tips.html)
64.  `A` 增加 页面事件 `onPageScroll` 监听页面滚动事件 [详情](../framework/app-service/page.html)
65.  `U` 更新 框架 小程序运行机制 [详情](../framework/operating-mechanism.html)
66.  `F` 修复 框架 app.json 中 backgroundColor 在 Android 设置错误问题
67.  `F` 修复 框架 背景音频播放在打开多个小程序时会被 kill 的问题
68.  `A` 新增 vConsole 加入 WXML 面板

### 工具更新 (0.19.191100)

1.  `A` 新增 基础库 1.4.0 调试支持
2.  `A` 新增 性能 Trace 工具 [详情](../framework/performance/tools.html)
3.  `A` 新增 Win 菜单栏 hover 时改变背景色 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=618904619&docid=663d3f9fe7791717faa67df5728ce424)
4.  `F` 修复 全局搜索结果页切换标签回来滚动位置不应回到顶部的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0f9c6e3dfe3bfa4e011c94fccf7e692c&highline=%E5%85%A8%E5%B1%80%E6%90%9C%E7%B4%A2&token=1433672993&lang=zh_CN)
5.  `F` 修复 文件大小写不一致问题导致部分文件系统大小写敏感用户开启工具白屏的问题
6.  `F` 修复 WXML 和 WXSS 代码格式化时缩进没有依据配置
7.  `F` 修复 微信授权窗口没有设置缺省头像的问题
8.  `F` 修复 使用 `button` 触发分享时候工具会有两次 `onShareAppMessage` 事件的问题

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

[](ext.html)[](details.html)</div>

</div>