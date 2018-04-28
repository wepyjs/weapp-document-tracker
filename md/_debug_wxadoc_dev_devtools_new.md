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

### 2018.04.25 更新日志

1.  `A` 新增 搜索动态页 [详情](https://mp.weixin.qq.com/servicezone/apidocs/html/%E5%BC%80%E5%8F%91%E5%89%8D%E5%BF%85%E8%AF%BB/%E4%BD%93%E9%AA%8Cdemo.html)
2.  `A` 新增 `wx.getUserInfo` 升级提示
3.  `F` 修复 小游戏使用自定义编译条件预览时，真机没有 query 的问题
4.  `F` 修复 `2.0.0` 基础库 `<button open-type="getUserInfo"></button>` 无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=000e66816e4e68694da68dc8b56c00)

### 2018.04.12 基础库更新 (2.0.0)

1.  `A` 新增 `require` 支持循环依赖
2.  `A` 新增小游戏 API `wx.onMemoryWarning` 监听内存告警事件 [详情](https://developers.weixin.qq.com/minigame/dev/document/performance/wx.onMemoryWarning.html)
3.  `U` 更新 API `wx.saveImageToPhotosAlbum` 支持保存包内文件
4.  `U` 更新 API `wx.onSocketOpen`、`SocketTask.onOpen` 新增回调参数 header [详情](https://developers.weixin.qq.com/miniprogram/dev/api/network-socket.html#wxonsocketopen)
5.  `U` 更新 API `wx.setClipboardData` 交互，在调用成功之后会弹出提示“内容已复制”
6.  `F` 修复 API `wx.hideTabBar` 第一次调用失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000ea2e6db4e50f0c8763741756000)
7.  `F` 修复 API `wx.showToast` 在插件中无法设置自定义图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000484c9cac770ca5d7660cd255c00)
8.  `F` 修复 API `wx.closeBluetoothAdapter` 在安卓端没有释放资源的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000668b26bcdb053d9769ac7651400)
9.  `F` 修复 API `wx.chooseVideo` 在 iOS 上使用前置摄像头拍摄的视频没有声音的问题
10.  `F` 修复 API `wx.getBackgroundAudioManager` 在 iOS 播放音频文件完毕之后，播放视频四秒后会自动暂停的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c4a5065c3d8a25166124445a400)
11.  `F` 修复 API `wx.openDocument` 在安卓上海外用户调用会直接报错的问题
12.  `F` 修复 API `wx.previewImage` 在安卓第二次会失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000862deb50f50463046e502054c00)
13.  `F` 修复 API `wx.getSystemInfo` 在进行首次 tab 切换时返回的 `screenHeight` 数值错误的问题
14.  `F` 修复 组件 `<map />` 在开发工具上手动改变经纬度不会触发 regionchange 的问题
15.  `F` 修复 组件 `<cover-image />` 在图片加载完没有自动调整高度的问题
16.  `F` 修复 组件 `<textarea />` 在设置 `adjust-position="false"` 时，无法触发 `bindfocus` 事件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000caccf9bc9707af976b3f8456000)
17.  `F` 修复 组件 `<video />` 在全屏时隐藏 video 不会自动退出全屏的问题
18.  `F` 修复 组件 `<canvas />` 在自定义组件的 `ready` 生命周期里调用 `drawImage` 无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000064ef124e88ba5b764f6eb51800)
19.  `F` 修复 组件 `<canvas />` 在 iOS 上调用 `setTextAlign` 接口居中后，调用 `wx.canvasToTempFilePath` 接口导出的图片出现错位的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a6efbb6ceb0ed73263c4d151000)
20.  `F` 修复 组件 `<picker />` 在 iOS 上字体适配的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=421986b2a6e1e9c6da9fc4d4d6ddd11a)
21.  `F` 修复 在插件中无法使用 Behavior 的问题
22.  `F` 修复 在 iOS 上配置里设置 `backgroundColorTop` 会使 `backgroundColor` 失效的问题
23.  `F` 修复 生命周期 `onItemTap` 、`onShow` 的触发时序在 iOS 和安卓没对齐的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&&docid=0008ca834f4108b4bf66a46ef56000)
24.  `F` 修复 iOS 在自定义标题栏模式下在聚集输入框弹起键盘时导致顶部胶囊上移的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a44e15045507d3d6605a4556400)
25.  `F` 修复 tabBar 在 iOS、安卓、开发工具上三端展示不对齐的问题
26.  `F` 修复小游戏 API `Canvas2DRenderingContext.drawImage` 在 dHeight 参数为负数时，图片会发生 180° 旋转的问题
27.  `F` 修复小游戏 API `WebGLRenderingContext.VERSION` 在 Android 平台下返回 undefined 的问题

### 2018.04.12 更新日志

1.  `F` 修复 1.02.1804080 引入的编译条件为分包内页面时无法加载的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1149299852&docid=000202572c8060847796a59cc5b000)
2.  `F` 修复 1.02.1804080 引入的页面白屏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1093803632&docid=0006ecb698cbd8a85b9649d895b400&inwindow=1)
3.  `F` 修复 未使用插件时，出现 `[non-writable]` 的提示的问题
4.  `F` 修复 `navigationStyle` 为 `'custom'` 时，获取的 `windowHeight` 与真机不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=713615538&docid=000ca2632108607676965713b56000&inwindow=1)
5.  `F` 修复 `wx.showModal` 没有覆盖 tabbar 的问题

### 2018.04.08 更新日志

1.  `A` 新增 编辑器文件标签打开策略设置
2.  `A` 新增 iPhone X 刘海效果
3.  `A` 新增 `App.onPageNotFound` 的调试支持 [详情](../framework/app-service/app.html)
4.  `A` 新增 远程调试带插件的小程序支持
5.  `A` 新增 `project.config.json` 的 `ignore` 字段 [详情](projectconfig.html#packoptions)
6.  `A` 新增 项目设置中展示插件信息、分包大小
7.  `A` 新增 自定义预处理命令 [详情](debug.html#自定义预处理)
8.  `A` 新增 支持分包中使用插件
9.  `F` 修复 同步 API 导致内存泄漏的问题
10.  `F` 修复 `<web-view />` 链接带 `#wechat_redirect` 无法加载的问题
11.  `F` 修复 在 tabbar 页面调用 `wx.redirectTo` 后再调用 `wx.switchTab` 到同一 tabbar，页面出错的问题
12.  `F` 修复 网络请求 API 没有带上对应模拟器设备的 `userAgent` 的问题
13.  `F` 修复 项目管理删除无效项目不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0008ec35474c704a5e76d3ab156400)
14.  `F` 修复 只有设置页面时，无法关闭开发者工具的问题
15.  `F` 修复 当项目目录在 `node_modules` 下时，无法感知文件变更的问题
16.  `F` 修复 1.02.1803210 版本导致的 `WXML` 面板，某些情况下不显示子节点的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=892177389&docid=000a40b7b5c5d0b01286dc4dd56c00&inwindow=1&comment_lvl=17)
17.  `F` 修复 远程调试 CanvasContext.measureText 报错的问题
18.  `F` 修复 `WXML` 面板无法审查自定义组件内节点的问题
19.  `F` 修复 `WXSS` 文件解析异常导致无法查看节点样式的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000264dc12cd005b637621e775b400&comment_lvl=4)
20.  `F` 修复 某些情况下新增编译条件无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=653286445&docid=00082ef4904f20d21686ea3ea5bc00)
21.  `F` 修复 切换模拟器网络为 offline 后，Socket接口还能正常发送的问题。
22.  `F` 修复 BackgroundAudioManager 不回调 onCanplay 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000086896d45d85e6776edfbe54c00)

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