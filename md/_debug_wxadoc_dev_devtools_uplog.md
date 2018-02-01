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

*   [概览](devtools.html)
*   [界面](page.html)
    *   [启动页](page.html#启动页)
    *   [菜单栏](page.html#菜单栏)
    *   [工具栏](page.html#工具栏)
    *   [模拟器](page.html#模拟器)
    *   [设置](settings.html)
        *   [外观设置](settings.html#外观设置)
        *   [编辑设置](settings.html#编辑设置)
        *   [通知设置](settings.html#通知设置)
        *   [代理设置](settings.html#代理设置)
    *   [项目页卡](project.html)
        *   [项目设置](project.html#项目设置)
        *   [域名信息](project.html#域名信息)
        *   [腾讯云状态](project.html#腾讯云状态)
*   [快捷键](shortcut.html)
*   [代码编辑](edit.html)
    *   [文件格式](edit.html#文件格式)
    *   [文件类型](edit.html#文件支持)
    *   [自动补全](edit.html#自动补全)
    *   [项目配置文件](edit.html#项目配置文件)
    *   [Git 状态展示](edit.html#Git 状态展示)
*   [小程序调试](debug.html)
    *   [模拟器](debug.html#模拟器)
    *   [自定义编译](debug.html#自定义编译)
    *   [前后台切换](debug.html#前后台切换)
    *   [调试工具](debug.html#调试工具)
        *   [Wxml Panel](debug.html#wxml-panel)
        *   [Sources Panel](debug.html#sources-panel)
        *   [AppData Panel](debug.html#appdata-panel)
        *   [Storage Panel](debug.html#storage-panel)
        *   [Network Panel](debug.html#network-panel)
        *   [Console Panel](debug.html#console-panel)
        *   [Sensor Panel](debug.html#sensor-panel)
    *   [自定义数据上报](debug.html#自定义数据上报)
    *   [特殊场景调试](different.html)
    *   [真机调试](remote-debug.html)
*   [命令行调用](cli.html)
*   [HTTP 调用](http.html)
*   [小程序开发助手](mydev.html)
*   [第三方平台](ext.html)
*   [云测试](monkey-test.html)
*   [实现差异](details.html)
    *   [运行环境差异](details.html#运行环境差异)
    *   [ES6 支持情况](details.html#客户端es6-api-支持情况)
    *   [API 实现差异](notsupport.html)
*   [下载](download.html)
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

### 历史版本下载 2017.08.30 (0.22.203100)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_darwin&from=mpwiki)

### 2018.01.24 基础库更新（1.9.5）

1.  `A` 新增 配置 `window.navigationStyle` 支持全屏显示小程序 [详情](../framework/config.html)
2.  `U` 更新 组件 `<button />` `open-type` 新增 `launchApp` 属性 [详情](../component/button.html)

### 2018.01.16 基础库更新（1.9.0）

1.  `A` 新增 API tabBar 相关接口 [详情](../api/ui-tabbar.html)
2.  `A` 新增 API `wx.canvasGetImageData` 可返回 `<canvas />` 的像素数据 [详情](../api/canvas/get-image-data.html)
3.  `A` 新增 API `wx.canvasPutImageData` 可将像素数据绘制到 `<canvas />` [详情](../api/canvas/put-image-data.html)
4.  `U` 更新 组件 `<swiper />` 增加 `current-item-id`、`previous-margin`、`next-margin`、`display-multiple-items`、`skip-hidden-item-layout`、`bindanimationfinish` 属性 [详情](../component/swiper.html)
5.  `U` 更新 组件 `<input />` 支持 selection 选区 [详情](../component/input.html)
6.  `U` 更新 组件 `<textarea />` 支持 selection 选区 [详情](../component/textarea.html)
7.  `U` 更新 组件 `<live-player />` 增加 `bindnetstatus` 事件 [详情](../component/live-player.html)
8.  `U` 更新 组件 `<live-pusher />` 增加 `bindnetstatus` 事件 [详情](../component/live-pusher.html)
9.  `U` 更新 组件 `<video />` 可对控制栏进行更细粒度控制 [详情](../component/video.html)
10.  `U` 更新 组件 `<slider />` 支持 `block-size` 设置滑块尺寸和 `block-color` 设置滑块颜色 [详情](../component/slider.html)
11.  `U` 更新 API 背景音频接口 `backgroundAudioManager` 支持直播流音频
12.  `U` 更新 API `canvasContext.drawImage` 支持从源图像裁剪后再画到 `<canvas />` [详情](../api/canvas/draw-image.html)
13.  `U` 更新 API `wx.showToast` 文本统一限制为 7 个汉字长度，并增加无 icon 类型 [详情](../api/api-react.html)
14.  `F` 修复 API `wx.chooseVideo` 接口的 `compressed` 参数不生效的问题
15.  `F` 修复 API WebSocket 接口在 Android 下服务连接失败的时候，没有立刻触发 `error` 和 `close` 事件，而是等到超时
16.  `F` 修复 API Android 背景音频接口 `backgroundAudioManager` 不能播放本地文件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=c7b223db52aff88b3c3a15f2fb5ddfc6)
17.  `F` 修复 API `wx.setEnableDebug` 接口在 Android 下会导致小程序一直在重启的问题
18.  `F` 修复 API `wx.showToast` 在 iOS 下连续调用两次再调用 `wx.hideToast` 时遮罩层没去掉的问题
19.  `F` 修复 API `wx.startPullDownRefresh` 在 iOS 下没有触发 `onPullDownRefresh` 事件的问题
20.  `F` 修复 API `wx.previewImage` 在 Android 下长按GIF发送后退出小程序的问题
21.  `F` 修复 API `wx.pageScrollTo` 导致 fixed 元素闪动的问题，并增加 `duration` 参数 [详情](../api/scroll.html)
22.  `F` 修复 自定义组件通过动态设置的回调方法时会执行两遍的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=915568549&docid=037127b97509bc7eff550b9e7b94765d)

### 2017.12.15 开发工具更新

1.  `A` 新增 命令行调用工具执行打开、预览、上传等功能 [详情](cli.html)
2.  `A` 新增 通过 HTTP 调用工具执行打开、预览、上传等功能 [详情](http.html)
3.  `A` 新增 编辑器 Git 展示支持 [详情](edit.html)
4.  `A` 新增 第三方平台 `ext.json` 新增 `directCommit` 字段,用于直接代小程序提交审核 [详情](ext.html)
5.  `A` 新增 WXML 面板属性自动补全
6.  `U` 更新 编辑器自动补全
7.  `U` 优化 提升预览上传性能，预览时展示正在编译的文件
8.  `U` 优化 增加预览上传队列，优化频繁预览上传的性能
9.  `U` 优化 项目列表小程序封面截图策略与性能
10.  `U` 优化 创建项目时目录不合法的提示

### 2017.12.07 基础库更新（1.7.0）

1.  `A` 新增 组件 `<camera />` 开发工具上的调试支持 [详情](../component/camera.html)
2.  `U` 更新 API `WebSocket` 支持创建多条 WebSocket 连接 [详情](../api/network-socket.html)
3.  `U` 更新 API `wx.request` 支持发送和接收 ArrayBuffer 类型的数据 [详情](../api/network-request.html)
4.  `U` 更新 API `wx.createCanvasContext` 的 `draw` 接口，回调通知渲染完成 [详情](../api/canvas/draw.html)
5.  `U` 更新 API `wx.canvasToTempFilePath` 支持设置输出图片格式与质量参数 [详情](../api/canvas/temp-file.html)
6.  `U` 更新 API `wx.createInnerAudioContext` 去掉切到前台时恢复播放的策略
7.  `U` 更新 组件 `<slider />` 增加 `bindchanging` 事件 [详情](../component/slider.html)
8.  `U` 更新 组件 `<progress />` 增加 `active-mode` 属性 [详情](../component/progress.html)
9.  `U` 更新 组件 `<video />` 在 `timeupdate` 事件回调中新增返回 `duration` 参数 [详情](../component/video.html)
10.  `U` 更新 组件 `<video />` 新增 `direction` 参数，支持全屏时设置画面方向 [详情](../component/video.html)
11.  `U` 更新 组件 `<scroll-view />` 优化 `scrolltoupper` 与 `scrolltolower` 事件的触发频率
12.  `U` 更新 组件 `<cover-view />` 优化在安卓下的渲染性能
13.  `F` 修复 API `wx.createInnerAudioContext` 接口返回参数的时间单位不正确的问题
14.  `F` 修复 API `wx.hideLoading` 会把 `wx.showToast` 给隐藏掉的问题
15.  `F` 修复 API `wx.hideLoading` 一调用立即消失的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=7ab07fac071fa04c3fdc56d52fc80309)
16.  `F` 修复 API `wx.canvasToTempFilePath` 在 `<canvas />` 不可见时导出失败以及导致crash的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=31fdba041e9797382c400a9017baa19e)
17.  `F` 修复 API `wx.uploadFile` 文件格式的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f46c4f8c9992a29a4d824cdfdccf9488)
18.  `F` 修复 API `wx.getRecorderManager` 在 iOS 下设置最大时长10分钟失效的问题
19.  `F` 修复 API `wx.getRecorderManager` 在安卓下小程序退到后台时，将默认行为从停止录音调整为暂停录音
20.  `F` 修复 组件 `<input />` disabled 时字体样式无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=b245c19a0bce8a8c1831f22c56cb4292)
21.  `F` 修复 组件 `<navigator />` 快速点击时会新开两个页面的问题
22.  `F` 修复 组件 `<cover-view />` 在 iOS 下圆角半径的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=d8a743cb8afbbe62dc3917d967a1eac4)
23.  `F` 修复 组件 `<cover-view />` 设置 `text-align: center` 在安卓上下也会居中的问题
24.  `F` 修复 组件 `<cover-image />` 总是显示在 `<cover-view />` 之上的问题
25.  `F` 修复 组件 `<audio />` 在播放结束的时候没有恢复背景音乐的问题
26.  `F` 修复 组件 `<picker />` 偶现需要点击两次才能收起的问题
27.  `F` 修复 组件 `<image />` `mode` 从 `widthFix` 改成其他值时高度没更新的问题
28.  `F` 修复 组件 `<scroll-view />` 滚动时出现闪动的问题
29.  `F` 修复 组件 `<video />` 在全屏后拉起系统控制面板时退出全屏的问题
30.  `F` 修复 trace 面板无法连接设备的问题

### 2017.11.30 开发工具更新

1.  `A` 新增 详情页中展示基础库用户使用率及线上版小程序设置的最低基础库
2.  `A` 新增 项目详情页显示业务域名（webview 可信域名）
3.  `A` 新增 开启不校验安全域名时，也不校验 webview 的业务域名
4.  `F` 修复 场景值为 1044 时，返回的 `scene` 字段是 `String` 类型而不是 `Number` 类型的问题
5.  `F` 修复 断网的时候 socket 没有提示信息的问题
6.  `F` 修复 安装包重复下载问题
7.  `F` 修复 `wx.downloadFile` 响应 404 时，没有返回 `tempFilePath` 的问题
8.  `F` 修复 project.config.json 中 miniprogramRoot 设置的路径以 / 结尾的话会导致编辑器保存自动编译不成功的问题
9.  `F` 修复 支持 sourcemap 文件在调试器中的加载。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ff21eb384464cb8e1ba5668651e51c63&highline=typescript&token=397816104&lang=zh_CN)
10.  `U` 优化 复制二维码的交互
11.  `U` 优化 创建项目页增加注册小程序的入口

### 2017.11.16 开发工具更新

1.  `F` 修复 导航条背景色错误时白屏问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=b36f663acb10612e4c7e352e87434117&token=557005191&lang=zh_CN)
2.  `F` 修复 小程序页面跳转时 WXML 面板可能空白的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=557005191&docid=fb21b3675263f8f059875f86e74fc06c)
3.  `F` 修复 修复计算上传代码包错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=557005191&docid=c038ed11b63330fe2430112de0b1bb33)
4.  `A` 新增 新建项目时可以选择创建腾讯云的 quick start 项目。
5.  `A` 新增 编辑器右键创建 Component 功能。
6.  `F` 修复 模拟器选择 offline 后，没有明确提示问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=8a89915204f492015b717674097afbf8)
7.  `F` 修复 `wx.downloadFile` 的 downloadTask.onProgressUpdate 缺少返回参数totalBytesWritten、totalBytesExpectedToWrite 的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=6fcbcc00aefa130248ef96f34604a820)
8.  `F` 修复 工具异常退出后仍然有进程未关闭并占用大量CPU资源的问题。
9.  `F` 修复 切换设备时 rpx 计算有误的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=e6210386d71f5ce63aead317e0af7f33)
10.  `F` 修复 websocket 自动断开时，未重置连接状态的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=8c82b9661034b9b778a2512012a9b853)
11.  `F` 修复 `<web-view />` 页面分享时 Page.onShareAppMessage 回调参数没有 webViewUrl 的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=e65163ec5fcd1ff96f775d7f89feec66)
12.  `F` 修复 `<web-view />` 中的网页有 iframe 导致网页主页面无法调用 JSSDK 的方法的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=5b269e9f217e2002a2d6cba5459cad26&token=890951119&lang=zh_CN)
13.  `F` 修复 `<web-view />` 没有校验 iframe 中链接合法性的问题
14.  `F` 修复 wxml style 列表无法滚动到底部的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=2140474170&docid=9087bfd028605c8d34395194735b08ad)
15.  `F` 修复 wxml 大量节点更新时导致调试器整体卡顿的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=72c9399c023d5ea753caf6eb4e268990&token=355961913&lang=zh_CN)
16.  `F` 修复 wxml 显示嵌套 `<text />` 出错的问题。
17.  `F` 修复 `wx.authorize` 用户拒绝依然回调 ok 的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1874444621&docid=c5d8e9df01a0ee536b31bfc1f737a5d6)
18.  `F` 修复 自定义编译条件预览时自定义参数有误的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ef014ed43af2ad089f5aa17561a71153)
19.  `F` 修复 路由 API 在目标页面获取的参数与客户端不一致的问题。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=132cf95b7dd95a14b8491a226fec5c6c)
20.  `U` 优化 项目列表的视觉展示。
21.  `U` 优化 编辑器显示目录树的功能图标位置固定。 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=5170e2e6311c30b53e3109ac01ee1acc)
22.  `U` 优化 预览/上传前先计算项目代码包大小再进行编译打包处理，避免项目过大导致内存溢出。

### 2017.11.02 开发工具更新

1.  `A` 新增 可以上传 php 代码到腾讯云，[QuickStart Demo 地址](https://github.com/tencentyun/wafer2-quickstart-php)
2.  `A` 新增 `<web-view />` 组件调试支持 [详情](../component/web-view.html)
3.  `A` 新增 自定义组件调试支持，需在项目配置中勾选 "预览/上传时使用新特性" 选项 [详情](../framework/custom-component/)
4.  `U` 优化 Storage Panel 大于 300 个项目时，不一次性展示全部
5.  `U` 优化 编辑器不补全 BOM、DOM 的接口
6.  `F` 修复 不打开 Storage Panel 的情况下调用 `wx.setStorage` 开发者工具内存泄露的问题
7.  `F` 修复 Storage Panel 存储非法值导致奔溃的问题
8.  `F` 修复 自定义编译条件当场景值为 1020、1035、1036、1043 允许填 appid
9.  `F` 修复 Wxml Panel 在节点替换的情况下，旧节点没有移除的问题
10.  `F` 修复 `wx.connectSocket` 接口在超过数量限制时表现与客户端不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=473639214&docid=2f8e4df7fe2ccb0f034b0818dc656ef3)
11.  `F` 修复 编辑器无法打开大写后缀名的图片的问题
12.  `F` 修复 1.01.171019 版本导致 `wx.getImageInfo` 报错的问题
13.  `F` 修复 `wx.downloadFile` 下载文件无法打开的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1017952110&docid=3337df5759a22b2dab42cea532f5394a)

### 2017.10.19 开发工具更新

1.  `F`: 修复 1.01.171013 版本更新导致的 `App.onLaunch` 中 API 调用没有回调的问题
2.  `F`: 修复 1.01.171013 windows 版本可执行文件数字签名异常的问题
3.  `F`: 修复 getPhoneNumber 需要短信验证时依旧回调成功的问题
4.  `F`: 修复 公众号网页调试无法添加自定义设备的问题

### 2017.10.18 开发工具更新

1.  `F`: 修复 管理项目时选择多个项目，界面异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=515252469&docid=2b5e2ade26baa5735252f293ff93b3d0)
2.  `F`: 修复 域名检查大小写敏感的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=515252469&docid=d849903e2ed342cec37f6e8c515f3aa7)
3.  `F`: 修复 1.01.171013 版本更新导致的 wxml panel 空白的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=515252469&docid=177ff3dbc7eead6cfce0b6f7a0109bec)
4.  `F`: 修复 编辑器全局搜索某些字符时可能崩溃的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=203b769635fa9784b01399445cc57118)

### 2017.10.16 开发工具更新

1.  `F`: 修复 `wx.canvasToTempFilePath` 出错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=ca4670585cd9574e83fded98fb21f7c4)
2.  `F`: 修复 创建项目时， `project.config.json` 没有兼容旧版 svr/client 字段的问题，新字段为 [qcloudRoot/miniprogramRoot](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/edit.html#%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
3.  `F`: 修复 `image` 组件 `src` 为空时有 404 提示的问题

### 更新概述 2017.10.13

*   新增相机组件，支持自定义拍照及录像界面
*   录音功能优化，支持更多格式和操作方式，支持自定义录音时长、采样率码率，支持边录边传
*   小程序内音频播放功能升级，支持更多格式和操作方式
*   video、map及canvas功能持续优化，cover-view支持简单的动画效果
*   onLaunch 及 onShow 时部分跳转小程序场景增加返回 referrerInfo.appId

### 开发工具更新

1.  `A`: 新增 清除全部缓存功能
2.  `A`: 新增 清除登录状态功能
3.  `A`: 新增 控制台输入 `showDecryptedInfo` 可以获取加解密信息，帮助开发者验证解密结果是否正确
4.  `A`: 新增 编辑代码时可自动补全 `require`、`import` 语句的 js 文件路径
5.  `F`: 修复 第一次编译模拟器白屏的问题
6.  `F`: 修复 编辑器文件重命名为已存在文件时直接覆盖的问题
7.  `F`: 修复 带端口的域名在域名检查没有错误提示的问题
8.  `F`: 修复 `page.json` 中 `disableScroll` 无效的问题
9.  `F`: 修复 `wx.openCard` 出错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=884195151&docid=6618f4cb1a6bba0912c4d26ba38c1e75)
10.  `F`: 修复 `wx.chooseVideo` 缺失返回值的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1948639319&docid=aa927770e2b465655812597bae1495e9)
11.  `F`: 修复 `wx.captureScreen` 失败的问题
12.  `F`: 修复 公众号网页调试缺失日志的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=afbadbd49c574073929e71ead0474869&token=1480217028&lang=zh_CN)
13.  `F`: 修复 下载并发数在重新编译后没有重置的问题
14.  `U`: 优化 模拟器加载小程序的方案调整为不通过代理直连本地服务器，减少代理设置异常对模拟器小程序加载的影响
15.  `U`: 优化 调试器 WXML、Storage 的某些内容展示方式

### 基础库更新 (1.6.0)

1.  `A` 新增 API `checkIsSoterEnrolledInDevice` 判断设备是否录入指纹等生物信息的接口 [详情](../api/checkIsSoterEnrolledInDevice.html)
2.  `A` 新增 API `getRecorderManager` 获取全局唯一的录音管理器 [详情](../api/getRecorderManager.html)
3.  `A` 新增 API `createInnerAudioContext` 创建并返回内部 audio 上下文 innerAudioContext 对象 [详情](../api/createInnerAudioContext.html)
4.  `A` 新增 组件 `<camera />` 相机组件 [详情](../component/camera.html)
5.  `U` 更新 API `startRecord` 增加 duration 参数用于设置最长录音时间 [详情](../api/media-record.html)
6.  `U` 更新 API `chooseVideo` 增加 compressed 参数，用于设置是否压缩用户选择的视频 [详情](../api/media-video.html#wxchoosevideoobject)
7.  `U` 更新 组件 `<map />` polyline 支持 arrowIconPath 参数，用于更换箭头图标 [详情](../component/map.html)
8.  `U` 更新 组件 `<map />` marker 的 label 参数增加样式设置 [详情](../component/map.html)
9.  `U` 更新 组件 `<map />` 新增渲染更新完成事件 bindupdated [详情](../component/map.html)
10.  `U` 更新 组件 `<video />` 支持 pageGesture 属性，控制非全屏模式下是否开启声音和亮度手势 [详情](../component/video.html)
11.  `U` 更新 组件 `<video />` 在 bindfullscreenchange 的 detail 中返回横竖屏信息 <a href="">详情</a>
12.  `U` 更新 组件 `<video />` 支持 initial-time 属性用于指定初始化播放的位置 [详情](../component/video.html)
13.  `U` 更新 组件 `<canvas />` 支持 clip 方法实现剪切 [详情](../api/canvas/clip.html)
14.  `U` 更新 组件 `<canvas />` 支持 setLineDash 方法实现设置虚线样式 [详情](../api/canvas/set-line-dash.html)
15.  `U` 更新 组件 `<cover-view />` 支持动画 [详情](../component/cover-view.html)
16.  `U` 更新 组件 `<cover-image />` iconPath 支持网络图片 [详情](../component/cover-view.html)
17.  `U` 更新 组件 `<textarea />` 支持 show-confirm-bar，用于设置是否显示键盘上方带有「完成」按钮那一栏 [详情](../component/textarea.html)
18.  `U` 更新 组件 `<textarea />` 支持在 bindblur 回调中返回 cursor，收起键盘时返回光标位置 [详情](../component/textarea.html)
19.  `U` 更新 组件 `<swiper />` 性能优化，支持隐藏当前页、前后页之外的页面，避免复杂页面切换卡顿
20.  `U` 更新 框架 `referrerInfo.appId` onLaunch 及 onShow 时部分跳转小程序场景增加返回 referrerInfo.appId [详情](../framework/app-service/app.html)
21.  `U` 更新 调试 vConsole WXML 面板支持显示 Computed Styles
22.  `F` 修复 API `openDocument` 在 iOS 下打开带密码的 PDF 文件时无法输入密码的问题
23.  `F` 修复 API `openDocument` 在 iOS 下打开 Excel 无法切换 tab 的问题
24.  `F` 修复 API `authorize` scope 为数组时，三端回调行为不一致问题
25.  `F` 修复 API `showActionSheet` cancel 时会同时回调 success 和 fail 问题
26.  `F` 修复 API `getSystemInfo` 在开发者工具上未返回 brand 字段的问题
27.  `F` 修复 API `chooseInvoiceTitle` 在开发者工具上未返回 invoiceTitleInfo 字段的问题
28.  `F` 修复 API `pageScrollTo` 在开发者工具上失效问题
29.  `F` 修复 API `startPullDownRefresh` 在开发者工具上失效问题
30.  `F` 修复 API `getFileInfo` 在开发者工具上只回调 complete 问题
31.  `F` 修复 API `startBluetoothDevicesDiscovery` 在开发者工具上返回值和真机不一致问题
32.  `F` 修复 API `onBluetoothDeviceFound` 在开发者工具 devices 错误返回二维数组问题
33.  `F` 修复 API `playBackgroundAudio` 在 iOS 下失败报 fail no current music，但音乐正常播放问题
34.  `F` 修复 API `request` 被 abort 后仍然占据并发数问题
35.  `F` 修复 API `createAnimation` backgroundColor 无法使用渐变背景色问题
36.  `F` 修复 API `setNavigationBarColor` 在 iOS 下会导致导航栏 title 和按钮变成透明问题
37.  `F` 修复 组件 `<image />` 在 devtools 提示 404 但不影响显示问题
38.  `F` 修复 组件 `<map />` 在初始化时在各端事件派发不一致问题
39.  `F` 修复 组件 `<map />` markers 的 callout 没有限制 borderRadius 取值范围问题
40.  `F` 修复 组件 `<map />` markers 的 title 和 callout 在各端表现不一致问题
41.  `F` 修复 组件 `<map />` 在 Android 下 marker 的 callout 下方无三角形问题
42.  `F` 修复 组件 `<input />` 在开发者工具上，bindinput 派发的事件对象 timestamp 不为 timeStamp 的问题
43.  `F` 修复 组件 `<canvas />` longtap 事件在工具上触发类型为 binglongtap 的问题，应为 longtap
44.  `F` 修复 组件 `<video />` 在 iOS 下在全屏播放时会出现一部分下一个视频的内容的问题
45.  `F` 修复 组件 `<video />` 在开发者工具点击播放后 controls 无法进行控制问题
46.  `F` 修复 组件 `<input />` 在 Android 下输入汉字时，bindinput 会带上当前正在输入的英文字母问题
47.  `F` 修复 组件 `<textarea />` 在 Android 下使用 setData 设置 value，auto-height 失效问题
48.  `F` 修复 组件 `<picker />` 在 Android 下省市区选择器缺少中山市、东莞市地域信息
49.  `F` 修复 组件 `<picker />` 在 Android 下 year 小于 1970 不生效问题
50.  `F` 修复 组件 `<textarea />` 两个 textarea 连续切换未触发第一个 textarea 的 blur 问题
51.  `F` 修复 组件 `<swiper />` 只展示其中一部分的 bug [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=318390035&docid=5faa1b7e895de9884a067273546aca22)
52.  `F` 修复 框架 iOS8 下 Promise 不会执行 resolve 的问题

### 2017.09.25 (1.01.170925)

1.  `A` 新增 `1.5.4` 基础库
2.  `A` 新增 点击模拟器状态栏可以复制相关参数的功能
3.  `A` 新增 创建项目时，工程目录下会自动生成 project.config.json 文件，方便导入时保留相关配置
4.  `A` 新增 可自定义常用功能的快捷键
5.  `U` 优化 新建项目默认打开自动补全样式的功能
6.  `U` 优化 进入项目后自动编译小程序
7.  `F` 修复 `wx.downloadFile` 当 URL 不合法时不执行回调的问题
8.  `F` 修复 调用某些 API 不触发 `onShow`、`onHide` 函数的问题
9.  `F` 修复 公众号网页调试 devtools 中无法点击链接打开网页的问题
10.  `F` 修复 格式化代码时将 `<text>` 标签内的内容缩进的问题
11.  `U` 优化 改良了编辑器在打开、删除、重命名文件时的表现行为
12.  `F` 修复 编辑器显示文件大小不正确的问题
13.  `U` 优化 部分界面外观优化，更易操作可读

### 2017.09.13 (1.01.170913)

1.  `A` 新增 `1.5.3` 基础库
2.  `U` 优化 为工具栏、模拟器、编辑器、目录树、调试器界面的显示隐藏切换增加快捷键
3.  `U` 优化 编辑器同时编辑若干同名文件时，文件标签的标题显示文件夹或路径名称来区分
4.  `U` 优化 上传代码时自动填写上次提交的版本号和备注
5.  `U` 修复 工具不支持 fiddler 和 charles 抓包的问题
6.  `F` 修复 创建项目时候判断是否空目录时 Mac 下未排除隐藏文件的问题
7.  `F` 修复 开发者工具内部错误导致的 crash 问题
8.  `F` 修复 工具栏隐藏后无法显示预览二维码的问题
9.  `F` 修复 选择旧基础库在重启工具后不生效的问题
10.  `F` 修复 API `wx.getWeRunData` 在未开通微信运动时未正确提示的问题
11.  `F` 修复 登录态失效时创建项目失败没有提示的问题
12.  `F` 修复 地理位置模拟只生效一次的问题
13.  `F` 修复 模拟器缩放时页面底部被遮住了一部分的问题
14.  `F` 修复 `app.json` 中 `unicode` 未正常展示的问题
15.  `F` 修复 点击腾讯云恢复开发环境没有提示的问题
16.  `F` 修复 模拟器缩放时切后台后的场景值列表样式异常的问题
17.  `F` 修复 编辑器目录在新建和右键点击时显示效果出错的问题
18.  `F` 修复 Picker 组件选择第一个值出错的问题
19.  `F` 修复 重新编译后 audio api 依然在播放音乐的问题
20.  `F` 修复 app.json 指定 tabBar 的`selectedColor`不生效的问题
21.  `F` 修复 Windows 系统下无法编辑和保存局域网内文件的问题

### 2017.09.06 (1.01.170906)

1.  `F` 修复 使用 `wx:key` 的 `warning` 重复出现的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1483282630&docid=bd07e03ef7b826574eba58406553bc1f)
2.  `F` 修复 使用 工具中自定义分享图功能无法使用的问题
3.  `F` 修复 从标签页跳转到新的页面，在跳转完成之前会显示其他标签页的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=182238138&docid=e727520d0b578edc6e49916bb3366b47)
4.  `F` 修复 公众号开发中 touch 模拟未生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1483282630&docid=44a661767e1e92c4924dc7ccc47b348a)
5.  `F` 修复 wxss编译错误提示不正确的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=182238138&docid=60c9b581ec34920804c0e9ef8aa17a81)
6.  `F` 修复 使用 `project.config.json` 导致右键新建页面失败的问题
7.  `F` 修复 编辑 wxml 文件缺失补全的问题
8.  `F` 修复 `navigationBarTextStyle` 默认值错误的问题
9.  `F` 修复 `wxml panel` 节点缺失的问题
10.  `F` 修复 `wxml panel` 选中元素会跳到之前选中的问题
11.  `F` 修复 `wx.request` 的 Referer 附带的 appid 不对的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1483282630&docid=b1b3cb258ff0896eb06ca1b3c22746fa)
12.  `F` 修复 `wx.chooseAddress` 没有模拟返回数据的问题
13.  `F` 修复 `wxml panel` 中鼠标手势不对的问题
14.  `F` 修复 分享无法使用自定义图片的问题
15.  `F` 修复 `.sql` 文件无法查看的问题
16.  `F` 修复 `storage panel` 显示出旧数据的问题
17.  `F` 修复 检查域名和 TLS 版本时，网络请求无法回调的问题
18.  `F` 修复 工具中 template 标签内的 wxml 无法格式化
19.  `F` 修复 `pageScrollTo` 调用没有效果的问题
20.  `F` 修复 新版工具中最小字号只能为 12px 的问题
21.  `F` 修复 错误提示框在错误过长的情况下无法关闭的问题
22.  `F` 修复 脚本文件名中有空格或者是中文文件名无法加载的问题
23.  `U` 优化 编译有错误，不主动弹出调试器
24.  `U` 优化 使用 `project.config.json` 修改 client 之外的文件，不触发编译
25.  `U` 优化 使用 Webview 复用，优化工具卡顿问题
26.  `U` 优化 删除 F8 F10 快捷键占用的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1691622661&docid=708a5cec8212f06eda3480f5d24120ab)
27.  `F` 修复 app.json 指定 borderStyle 不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=917843816&docid=691ae970397971e4b5e4717685def9a7)
28.  `U` 优化 编辑器的替换快捷键改为 Ctrl + Shift + R，避免与刷新 Ctrl + R 冲突

### 2017.09.01 开发工具更新

1.  `F` 修复 `wxml panel` 选中节点跳动的问题
2.  `F` 修复 `wxml panel` 鼠标为圆点的问题
3.  `F` 修复 编辑器快捷键格式化代码失效的问题
4.  `F` 修复 `<picker />` 选择第一个异常的问题
5.  `F` 修复 `wxml` 编译导致 `<radio-group/>` 在 `Page.setData` 之后选中状态被重置的问题
6.  `F` 修复 第三方平台小程序 `Refer` 异常的问题
7.  `F` 修复 公众号网页开发触摸模拟不生效的问题
8.  `F` 修复 公众号网页开发页面变大的问题
9.  `F` 修复 `console panel` 日志重复显示问题
10.  `F` 修复 上传代码时上次的输入没有记录的问题
11.  `F` 修复 保存文件自动编译时，文件保存没有生效的问题
12.  `F` 修复 ext.json 中 extEnable 为 false，到手机上预览依旧生效的问题
13.  `F` 修复 页面字体大小异常的问题
14.  `F` 修复 修复了在外部编辑器编辑了文件，工具不能检测到更改的问题
15.  `F` 修复 设备选择时 wx.getSystemInfo 的内容不对的问题

### 2017.08.31 开发工具更新

1.  `A` 新增 快捷键 `F8` 显示隐藏工具栏
2.  `U` 优化 当有错误的时候 `console` 面板不会自动弹出
3.  `F` 修复 保存时自动编译，编译时自动保存无法保存所有文件的问题
4.  `F` 修复 第三方平台小程序打开项目报错的问题
5.  `F` 修复 启动工具后显示网络连接错误，增加错误提示
6.  `F` 修复 模拟器在一些设备上显示模糊的问题
7.  `F` 修复 `wxss` 编译错误提示不正确的问题
8.  `F` 修复 某些第三方编辑器打开文件会触发工具自动编译的问题
9.  `F` 修复 网页调试 hash 变化会 load 页面的问题
10.  `F` 修复 网页调试 `alert`、`confirm` 不显示的问题
11.  `F` 修复 网页调试添加卡券屏幕缩放无效的问题
12.  `F` 修复 网页调试 `urlbar` 输入后自动匹配，按键盘向下键然后 `load` 不了

### 2017.08.30 开发工具更新

1.  `A` 新增 申请测试报告功能 [详情](monkey-test.html)
2.  `A` 新增 `WXS` 功能 [详情](../framework/view/wxs/)
3.  `A` 新增 发布腾讯云功能 [详情](https://mp.weixin.qq.com/debug/wxadoc/introduction/qcloud.html)
4.  `U` 优化 全新的视觉和交互体验
5.  `U` 优化 更新内核版本

### 基础库更新 (1.5.3)

1.  `F` 修复 组件 `<swiper />` 在 iOS 下首张图片在某些情况下初始不显示的问题
2.  `F` 修复 API `canIUse` 无法判断 `getPhoneNumber` 可用情况的问题

### 基础库更新 (1.5.2)

1.  `F` 修复 组件 `<map />` markers 里同时没有设置 callout 和 title 属性时，点击时报 Cannot read property 'always' of null 错误的问题
2.  `F` 修复 组件 `<image />` bindload 被重复执行两次的问题
3.  `F` 修复 组件 `<image />` 连续更新 src 会显示图片错误
4.  `F` 修复 API `chooseInvoiceTitle` 在工具上报错问题
5.  `F` 修复 API `SelectorQuery.selectViewport` 失效问题

### 基础库更新 (1.5.1)

1.  `F` 修复 组件 `<image />` 覆盖兄弟节点或图片圆角不显示问题

### 2017.08.21 开发工具更新

1.  `F` 修复 1.5.0 基础库造成开发工具 `AppData panel` 失效的问题
2.  `F` 修复 API `chooseInvoiceTitle` 出现脚本错误的问题

### 更新概述 2017.08.18

*   新增 4 个全新 API 包括获取发票抬头，指纹识别，主动触发下拉刷新等
*   更新 API `shareAppMessage` 支持分享时自定义卡片配图
*   更新 组件 `<button />` 支持客服会话分享小程序卡片及传入源页面信息
*   优化后台拉起小程序时 reLaunch 逻辑
*   新增 开发者工具预览版 [详情](beta.md)

### 基础库更新 (1.5.0)

1.  `A` 新增 API `checkIsSupportSoterAuthentication` `startSoterAuthentication` 生物认证接口 [详情](../api/checkIsSupportSoterAuthentication.html)
2.  `A` 新增 API `startPullDownRefresh` 主动触发下拉刷新接口 [详情](../api/pulldown.html#wx.startpulldownrefresh)
3.  `A` 新增 API `chooseInvoiceTitle` 选择发票抬头接口 [详情](../api/chooseInvoiceTitle.html)
4.  `A` 新增 框架 触摸类事件增加 capture 阶段 [详情](../framework/view/wxml/event.html)
5.  `A` 新增 框架 长按事件 `longpress` [详情](../framework/view/wxml/event.html)
6.  `A` 新增 框架 page.json 支持设置 onReachBottom 距离 [详情](../framework/config.html)
7.  `U` 更新 API `getSystemInfo` 增加 fontSizeSetting 支持读取用户字体大小设置 [详情](../api/systeminfo.html)
8.  `U` 更新 API `getSystemInfo` 增加 brand 支持读取手机品牌字段 [详情](../api/systeminfo.html)
9.  `F` 修复 API `getSystemInfo` 在华为或者魅族带虚拟按键的设备上获取 windowWidth 和 windowHeight 为 0 问题
10.  `U` 更新 API `writeBLECharacteristicValue` 根据写入属性特征值决定回调时机
11.  `U` 更新 API `shareAppMessage` 增加 imageUrl 参数支持分享自定义配图 [详情](../api/share.html)
12.  `U` 更新 API `getBluetoothDevices` `onBluetoothDeviceFound` 设备信息增加 localName 字段 [详情](../api/bluetooth.html#wxgetbluetoothdevicesobject)
13.  `F` 修复 API `switchTab` 在页面注册前调用会报错的问题
14.  `F` 修复 API `selectorQuery` movable-view 等组件无法在 selectorQuery 中被 class 选择器选中问题
15.  `F` 修复 API `setNavigationBarColor` 在 iOS 下被 app.json 里 navigationBarTextStyle 覆盖设置问题
16.  `F` 修复 API `getSetting` `openSetting` 在 iOS 下部分生命周期函数中调用失效
17.  `F` 修复 API `canvasToTempFilePath` 在 iOS 下导出的图片为白色背景的问题
18.  `F` 修复 API `captureScreen` 在 Android 下生成的文件扩展名为 unknown 问题
19.  `F` 修复 API `getBeacons` 在 Android 下未获取到设备时 beacons 字段缺失问题
20.  `F` 修复 API `chooseLocation` 在 Android 下回调函数 latitude、longitude 类型为 string 问题，应为 number
21.  `F` 修复 API `connectSocket` 在 Android 下接口的请求包 header 中没有 origin 问题
22.  `F` 修复 API `previewImage` 在 iOS 下导航栏没有显示当前图片索引位置(1/n)的问题
23.  `F` 修复 API `previewImage` 在 iOS 下横屏后退出，tabBar 漂移到页面中间问题
24.  `F` 修复 API `chooseImage` 在 Android 下未处理图片旋转的情况
25.  `F` 修复 API `showToast` `showLoading` 在 iOS 下异步 hide 后重新调用 show，show 不生效问题
26.  `F` 修复 API `pageScrollTo` 导致 video 组件错位问题
27.  `U` 更新 组件 `<picker />` 增加 custom-item，region 模式支持自定义项 [详情](../component/picker.html)
28.  `F` 修复 组件 `<picker />` 在 iOS 下 mode=year 时点击会 crash 问题
29.  `U` 更新 组件 `<picker-view />` 增加 mask-style、mask-class 支持自定义半透明蒙层的颜色 [详情](../component/picker-view.html)
30.  `F` 修复 组件 `<picker />` region 模式在 form submit 的 detail 没有应该返回省市区问题
31.  `U` 更新 组件 `<textarea />` `<input />` 增加 cursor 支持主动设置和读取光标位置 [详情](../component/textarea.html)
32.  `F` 修复 组件 `<textarea />` 在 iOS 下编辑时切换键盘，光标会跳到最后的问题
33.  `F` 修复 组件 `<textarea />` 在 Android 下页面 onLoad 中设置 value 无效问题
34.  `F` 修复 组件 `<textarea />` 在 Android 下设置 cursor-spacing 无效问题
35.  `F` 修复 组件 `<form />` 在 textarea input 同时使用时，先点击 textarea，再点击 input 后，无法提交表单的问题
36.  `F` 修复 组件 `<input />` 在 Android 下 bindinput 事件回调函数缺少 detail.cursor 参数问题
37.  `F` 修复 组件 `<input />` 在 Android 下与 auto-height 的 textarea 同时使用，不会弹出数字键盘问题
38.  `F` 修复 组件 `<input />` bindfocus 中调用 chooseLocation 并 setData，导致所有 input 失效问题
39.  `U` 更新 组件 `<button />` 增加 show-message-card 等属性，支持客服会话分享卡片 [详情](../component/button.html)
40.  `U` 更新 组件 `<image />` 支持图片懒加载
41.  `F` 修复 组件 `<image />` 传入本地文件路径在 iOS 上无法触发浏览器重绘的问题
42.  `F` 修复 组件 `<movable-view />`动态生成的 movable-view 定位不准确的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=506508913&docid=d1065522b9924526b012dd9d4b811dab)
43.  `F` 修复 组件 `<cover-view />` 通过 wx:if 控制不生效的问题
44.  `F` 修复 组件 `<map />` 在 iOS 下 bindcontroltap 事件同时会触发 bindtap 的问题
45.  `F` 修复 组件 `<canvas />` 在 iOS 下线条的渐变、宽度同时设置会丢掉线条宽度的问题
46.  `F` 修复 组件 `<cover-view />` 在 Android 下 border-radius 无效问题
47.  `F` 修复 组件 `<rich-text />` 自动 trim 问题
48.  `F` 修复 组件 `<video />` 在 Android 下，未开始播放时，组件上无法触发页面滑动问题
49.  `F` 修复 组件 `<cover-view />` 点击时会穿透到 map，触发 map 的 tap 事件问题
50.  `F` 修复 video 上下文 seek 秒数会被取整，无法精确定位问题
51.  `F` 修复 框架 `onReachBottom` handler 不存在的 warning 在某些情况下异常出现的问题
52.  `U` 更新 框架 `setData` 支持异步回调 [详情](../framework/app-service/page.html#pageprototypesetdata)
53.  `U` 更新 框架 `hover-stop-propagation` 支持拦截点击态 [详情](../component/view.html)
54.  `U` 更新 框架 后台拉起小程序时 reLaunch 优化
55.  `U` 更新 框架 页面跳转和弹窗授权类接口支持在 App onLaunch 时机调用
56.  `F` 修复 框架 在部分 Android 下出现页面放大的问题

### 工具更新

1.  `F` 修复 编辑器设置自动换行和主题不生效的问题。[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1429295584&docid=951b8851981f76e4c8b64fdf90461451)
2.  `F` 修复 网页调试 UA 不正确的问题

### 基础库更新（1.4.3）

1.  `A` 新增 API `setTopBarText` 设置置顶信息 [详情](../api/ui.html#wxsettopbartextobject)

### 基础库更新 (1.4.2)

1.  `F` 修复 组件 `<cover-view />` 在某些情况下真机上无法覆盖在 `<map />` 组件上的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=3966c31758ee359cd956cfaebd4e8683)
2.  `F` 修复 组件 `<open-data />` 请求数据顺序的问题
3.  `F` 修复 组件 `<canvas />` 动态变化大小后 `canvasToTempFilePath` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=21fb347ea7d9a0715faeb1e274c32a66)

### 基础库更新 (1.4.1)

1.  `U` 更新 API `createSelectorQuery` 可获取元素的属性
2.  `U` 更新 API `reLaunch` 逻辑，此版本开始 `reLaunch` 不可在小程序进入后台后调用
3.  `F` 修复 API `getBLEDeviceCharacteristics` 在开发者工具中请求失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=28012b227d377bcf8482702760c37ff5)
4.  `F` 修复 API `canvasToTempFilePath` 在 iOS 中坐标偏移的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=4ab78e3831f27bba978a9dd501ba9210)
5.  `F` 修复 组件 `<rich-text />` 没有检查参数为空的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f4c572208d66102411b9119a07c1cfd5)
6.  `F` 修复 组件 `<open-data />` 组件无法获取群名称的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=ffe8f510fffb57cd39aa520af5779071)
7.  `F` 修复 组件 `<map />` 在开发者工具中无法移动和触发事件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=8961072b9a2ebc7be89b6d62df8c8067)
8.  `F` 修复 组件 `<cover-image />` 在开发者工具中无法预览临时图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=f666e86c5871733ee41a0f7b5e3e4898)
9.  `F` 修复 组件 `<text-area />` 在 iOS 中设置 `color` 无效的问题 [详情](http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=c123349d20be1c79c565e852339c5aab)
10.  `F` 修复 基础框架 重新打开小程序的时 `App.onShow` 未正确获取 `path` 和 `query` 的问题

### 工具更新

1.  `A` 新增 功能 自定义数据上报调试 [详情](debug.html#自定义数据上报)
2.  `F` 修复 `<picker />` `bindchange` 事件选中 `value` 值不对的问题
3.  `F` 修复 编辑器设置自动换行和主题不生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1429295584&docid=951b8851981f76e4c8b64fdf90461451)

### 更新概述 2017.07.11

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
42.  `U` 更新 组件 `<video />` 增加 loop 属性支持循环播放 [详情](../component/video.html)
43.  `U` 更新 组件 `<video />` 增加 muted 属性支持静音播放 [详情](../component/video.html)
44.  `U` 更新 组件 `<video />` 增加 bindfullscreenchange 事件监听视频全屏变化 [详情](../component/video.html)
45.  `U` 更新 组件 `<video />` 支持手势操作控制音量和亮度
46.  `U` 更新 组件 `<video />` 支持视频拖动增加 icon 提示
47.  `U` 更新 组件 `<video />` 在 Android 下切换成原生播放器
48.  `F` 修复 组件 `<canvas />` 在 Devtools 中 disable-scroll 和文档描述不符的问题
49.  `F` 修复 组件 `<input />` 在 Android 中收起键盘同时 update 会更新失败的问题
50.  `F` 修复 组件 `<input />` 在 bindfocus 时更新 value 失效的问题
51.  `F` 修复 组件 `<map />` longitude latitude scale 属性更新后地图没有变化的问题
52.  `F` 修复 组件 `<map />` 事件没有带上 target 等信息的问题
53.  `F` 修复 组件 `<scroll-view />` 同时更新列表与 scroll-top 参数时，scroll-top 不立即生效的问题
54.  `F` 修复 组件 `<swpier />` 在 Android 和 Devtools 中的渲染延迟问题
55.  `F` 修复 组件 `<swiper />` 圆点区域滑动无效问题
56.  `F` 修复 组件 `<switch />` 因 label 点击而改变时没有触发 change 事件的问题
57.  `F` 修复 组件 `<textarea />` 设置了 auto-height 后底部出现多余空白的问题
58.  `F` 修复 组件 `<textarea />` disabled 变为 false 后更新不生效的问题
59.  `F` 修复 组件 `<video />` 视频续播退出后，位置不对的问题
60.  `F` 修复 组件 `<video />` 弹幕重叠问题
61.  `A` 新增 性能分析 开发者工具增加 Trace 功能 [详情](../framework/performance/tools.html)
62.  `A` 新增 性能建议文档 [详情](../framework/performance/tips.html)
63.  `A` 增加 页面事件 `onPageScroll` 监听页面滚动事件 [详情](../framework/app-service/page.html)
64.  `U` 更新 框架 小程序运行机制 [详情](../framework/operating-mechanism.html)
65.  `F` 修复 框架 app.json 中 backgroundColor 在 Android 设置错误问题
66.  `F` 修复 框架 背景音频播放在打开多个小程序时会被 kill 的问题
67.  `A` 新增 vConsole 加入 WXML 面板

### 工具更新 (0.19.191100)

1.  `A` 新增 基础库 1.4.0 调试支持
2.  `A` 新增 性能 Trace 工具 [详情](../framework/performance/tools.html)
3.  `A` 新增 Win 菜单栏 hover 时改变背景色 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=618904619&docid=663d3f9fe7791717faa67df5728ce424)
4.  `F` 修复 全局搜索结果页切换标签回来滚动位置不应回到顶部的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0f9c6e3dfe3bfa4e011c94fccf7e692c&highline=%E5%85%A8%E5%B1%80%E6%90%9C%E7%B4%A2&token=1433672993&lang=zh_CN)
5.  `F` 修复 文件大小写不一致问题导致部分文件系统大小写敏感用户开启工具白屏的问题
6.  `F` 修复 WXML 和 WXSS 代码格式化时缩进没有依据配置
7.  `F` 修复 微信授权窗口没有设置缺省头像的问题
8.  `F` 修复 使用 `button` 触发分享时候工具会有两次 `onShareAppMessage` 事件的问题

### 2017.06.22 更新日志

1.  `F` 修复 开发工具中　`wx.uploadFile` header　设置无效的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=19f5b374735b2b4a0cbb8d649d469652)
2.  `F` 修复 开发者工具打开公众号网页报项目属性获取失败错误的问题

### 2017.06.21 更新日志

### 基础库更新 (1.3.0)

1.  `A` 新增 `wx.navigateToMiniProgram` 从一个小程序打开另一个小程序[详情](../api/navigateToMiniProgram.html)
2.  `A` 新增 `wx.navigateBackMiniProgram` 返回到上一个小程序[详情](../api/navigateBackMiniProgram.html)

### 工具更新 (0.18.182100)

1.  `A` 新增 基础库 1.3.0 调试支持
2.  `A` 新增 编辑器状态栏显示文件大小
3.  `A` 新增 编辑器增加跳转到左边 / 右边文件的快捷键 `Ctrl(Command) + PageUp` 和 `Ctrl(Command) + PageDown`
4.  `A` 新增 显示图片时状态栏右侧会给出图片大小信息
5.  `U` 优化 编辑器中删除文件不会硬盘删除而是移到回收站
6.  `U` 优化 上传代码的交互，去除扫码确认，并给予默认 `项目备注`
7.  `F` 修复 `tabbar` 图标工具上错误支持了 svg 图片的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=97aadd788150cc951c46099914169882)
8.  `F` 修复 windows 设置 http_proxy 环境变量可能导致无法登陆问题
9.  `F` 修复 新建 `Page` 时 `app.json` 中路径添加出错的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=63f8b1d685aa8c57f962b4e50c160c65)
10.  `F` 修复 `wx.uploadFile` `wx.downloadFile` 设置 networkTimeout 无效的问题
11.  `F` 修复 提交预览或者上传时，检查 `tabbar` icon 超过 40kb 返回的错误码有误的问题[详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=7606af9c39030997693f53be8d30e182)
12.  `F` 修复 开启自动保存后 app.json 修改后立刻关闭再打开后内容被置空的问题的问题
13.  `F` 修复 开发者工具中可以使用 `Image` 但是移动设备中无法使用的问题
14.  `F` 修复 某些情况下上传代码会出现二维码无效提示的问题
15.  `F` 修复 上传成功后没有提示的问题

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
59.  `A` 新增 开发体验 客户端增加性能面板 [详情](../framework/performance.md)
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

    ### 2017.05.09 更新日志

### 工具更新

1.  `F` 修复 RapidSSL 证书被判断为非法证书的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=555b9b103527edf9ea14edc3473e67bf&token=1782263126&lang=zh_CN)
2.  `F` 修复 `wxss` 压缩导致 @import 文件丢失文件的问题
3.  `F` 修复 模拟器内容高度错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=162237890&docid=4c9346f5f16112089e3313baa681ee34)
4.  `F` 修复 清楚数据缓存功能失效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=aa3468335bace4b9305c5d54b748e330&token=803117483&lang=zh_CN)
5.  `F` 修复 `app.json` 中添加新页面不会自动创建页面的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=829105299&docid=ddb330c5c11bc1476293da1d7c564c8a)
6.  `F` 修复 文件光标定位问题和从 wxss 栏打开文件双开问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1646378300&docid=b6307a94b190f4fae728b75d36c7b1c2&comment_lvl=1)
7.  `F` 修复 设置了文件名字大小写敏感的系统，无法打开开发工具的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=bf5974232a1bcf2d1e973f6a5644c1e8&highline=%E7%99%BD%E5%B1%8F&token=&lang=zh_CN)

### 2017.05.08 更新日志

### 工具更新

1.  `A` 新增 `wx.addCard`、`wx.openCard` 调试支持
2.  `A` 新增 `wx.request` 时 `https` 证书的校验，非法证书将会请求失败
3.  `A` 新增 获取更多转发信息的调试支持 [详情](../api/share.html#获取更多转发信息)
4.  `A` 新增 基础库切换[详情](project.html#基础库版本切换)
5.  `A` 新增 脚本断点提示，当有断点时，在 devtools 上方会有相关的提示以及操作区
6.  `A` 新增 开发者社区新消息的提醒的功能
7.  `A` 新增 详细的菜单项
8.  `A` 新增 设备切换为 Android 后支持自定义宽高的功能
9.  `A` 新增 wxss文件代码压缩功能
10.  `A` 新增 编辑器设置页：支持外观配置，编译配置 [详情](settings.html#编辑器外观配置)
11.  `A` 新增 编辑器配置: tab 是否转空格、tab 的大小[详情](settings.html#编辑配置支持)
12.  `A` 新增 编辑器配置：修改时自动保存、编译时自动保存、文件变化时刷新小程序[详情](settings.html#编辑配置支持)
13.  `A` 新增 编辑器右键新建 Page 的功能
14.  `A` 新增 编辑器 ctrl + n 新建临时文件
15.  `U` 优化 编辑器自动补全的体验
16.  `U` 优化 编辑器获取系统字体缓慢的问题
17.  `U` 优化 编辑器全局搜索结果 Tab 位置可移动
18.  `U` 优化 编辑器顶部文件栏标签宽度自适应文件名字
19.  `U` 优化 编辑器全局搜索的体验问题
20.  `U` 优化 编辑器新建文件的体验问题
21.  `U` 优化 开发者工具页面切换的速度
22.  `U` 优化 wxml panel 的操作体验
23.  `F` 修复 `wx.request` 在没有设置超时时间的情况下，超时时没有返回的问题
24.  `F` 修复 某些情况下新建目录失败的问题
25.  `F` 修复 开发工具中 `wxss` 文件 `background-image` 可以使用本地图片同客户端不一致的问题
26.  `F` 修复 wxml panel 对于 `text` 从空值动态添加文本会显示错误的问题
27.  `F` 修复 windows 版开发工具在扫码登录页无法关闭应用的问题
28.  `F` 修复 登录二维码过期无法自动刷新的问题
29.  `F` 修复 编辑器目录树单击打开文件时文件没有获得焦点的问题
30.  `F` 修复 编辑器文件列表底部右键菜单显示不全的问题
31.  `F` 修复 编辑器跳转文件时，文件名前空白字符时无法搜索文件的问题
32.  `F` 修复 编辑器全局搜索结果打开文件失败的问题
33.  `F` 修复 `wx.createCanvasContext` 自动补全出错的问题
34.  `F` 修复 `wx.chooseAddress` 不会弹授权框以及返回缺失 `telNumber` 的问题
35.  `F` 修复 `wx.uploadFile`、`wx.downloadFile` 在 url 格式错误时没有回调的问题
36.  `F` 修复 `wx.uploadFile`、`wx.downloadFile` header 中没有 referer 的问题
37.  `F` 修复 `wx.request` 在检查 TLS 版本时出现内存泄漏的问
38.  `F` 修复 `wx.getSystemInfo` 宽高与真实设备不一致的问题
39.  `F` 修复 `wx.getLocation` 返回值缺少 speed、accuracy 的问题
40.  `F` 修复 `wx.showModal` 点击取消按钮 res.cancel 为 false 的问题
41.  `F` 修复 `wx.scanCode` 网络切换为 `none` 时与客户端表现不一致的问题
42.  `F` 修复 `App.onLaunch` 获取的场景值为字符串与客户端不一致的问题
43.  `F` 修复 自定义条件编译的参数在 Page.onLoad 中获取的 query 与客户端不一致的问题
44.  `F` 修复 使用轮询调用 setData 会导致内存泄露的问题
45.  `F` 修复 tabBar iconPath 以 / 或者 ./ 开头，编译出错的问题
46.  `F` 修复 自定义预览未填写 启动页面 字段时候，生成的二维码未带上自定义参数的问题
47.  `F` 修复 wxml panel 在某些情况下不能正常显示的问题
48.  `F` 修复 对 `TrustAsia` 证书判断错误的问题

    ### 2017.04.17 基础库版本更新(1.1.1)

49.  `A` 新增 API `wx.canIUse` 获取兼容性 [详情](../api/api-caniuse.html)
50.  `U` 优化 代码包限制从 1m 提高至 2m ，开发者可以点击工具 `项目-配置信息-刷新` 来更新项目配置
51.  `F` 修复 API `wx.reLaunch` 无法使用相对路径的问题
52.  `F` 修复 组件 `<swiper />` 动画中断时状态更新错误的问题
53.  `F` 修复 组件 `<scroll-view />` 横向滚动初次渲染高度错误的问题
54.  `F` 修复 组件 `<pick-view />` 触发多余事件的问题
55.  `F` 修复 框架能力 `App.onLaunch` 和 `App.onShow` 的 `query` 没有缺省值的问题

### 2017.03.29 更新日志

### 工具更新

1.  `F` 修复 windows 版工具缺失文件的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=89d55205f6bea555fe4a08f01bd3f4c8)
2.  `F` 修复 `wx.scanCode` 失败的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=d0cdda0d26216d6084106059c56a6d96)
3.  `F` 修复 API `wx.redirect` 第一次无效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=b4c5413fa13a569c949a77e8678ffacf)
4.  `F` 修复 无 tabbar 的项目页面栈层数异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=2e4454a2ca365f49cbff2e0d3b8059e1)
5.  `F` 修复 默认场景值为 0 的问题

### 2017.03.28 更新日志

### 更新概述

*   支持绝大部分的 ES6 API [详情](details.html#ES6-APi-支持情况)
*   新增 36 个全新的 API 包括蓝牙、卡券、收货地址等接口能力
*   拓展了两大框架能力，包括场景值以及转发状态获取
*   更新以及优化若干组件的体验问题
*   开发者工具支持大部分新增 API 的调试支持，及修复若干 bug
*   优化预览调试逻辑，预览生成的二维码，可被当前 AppID 绑定的任一开发者使用

### 基础库更新(1.1.0)

1.  `A` 新增 18 个蓝牙相关的 API [详情](../api/bluetooth.html)
2.  `A` 新增 API `wx.chooseAddress` 获取收货地址 [详情](../api/address.html)
3.  `A` 新增 API `wx.openSetting` 打开小程序设置界面 [详情](../api/setting.html)
4.  `A` 新增 API `wx.reLaunch` [详情](../api/ui-navigate.html#wxrelaunchobject)
5.  `A` 新增 API `wx.arrayBufferToBase64`、`wx.base64ToArrayBuffer` [详情](../api/api-util.md)
6.  `A` 新增 API `wx.showLoading`、`wx.hideLoading` [详情](../api/api-react.html#wxshowloadingobject)
7.  `A` 新增 API `wx.startAccelerometer`、`wx.stopAccelerometer` [详情](../api/accelerometer.html)
8.  `A` 新增 API `wx.startCompass`、`wx.stopCompass` [详情](../api/compass.html)
9.  `A` 新增 API `wx.getClipboardData`、`wx.setClipboardData` 操作剪贴板 [详情](../api/clipboard.html)
10.  `A` 新增 API `wx.addCard`、`wx.openCard` 支持微信卡券 [详情](../api/card.html)
11.  `A` 新增 API `wx.onNetworkStatusChange` 监听网络变化 [详情](../api/device.html#wxonnetworkstatuschangecallback)
12.  `A` 新增 API `wx.hideShareMenu` `wx.showShareMenu` [详情](../api/share.html)
13.  `A` 新增 API `CanvasContext.setTextAlign` 文字的对齐 API [详情](../api/canvas/set-text-align.html)
14.  `U` 更新 API `wx.getSystemInfo` 返回 `screenWidth`、`screenHeight` `SDKVersion` [详情](../api/systeminfo.html)
15.  `U` 更新 API `wx.showModal` 在用户点击取消情况下的返回值 [详情](../api/api-react.html#wxshowmodal)
16.  `U` 更新 API `wx.showToast` 支持 `image` 参数自定义提示框图片 [详情](../api/api-react.html#wxshowtoastobject)
17.  `U` 更新 API `wx.getUserInfo` 增加参数 `withCredentials` [详情](../api/open.html)
18.  `F` 修复 API `wx.showNavigationBarLoading` 在 `iOS` 下首次调用可能失败的问题
19.  `F` 修复 API 成功调用 `wx.requestPayment` 并完成支付后用户未点击本次支付的完成按钮时，模板消息无法下放的问题
20.  `F` 修复 API `wx.onBackgroundAudioStop` 在锁屏情况下偶现无法触发回调的问题
21.  `F` 修复 API `wx.playBackgroundAudio` 在 `Android` 环境中，某些情况无法继续播放已暂停音乐的问题
22.  `F` 修复 API `wx.previewImage` 在 `Android` 下返回的时候会触发 `page.onShow` 的问题
23.  `F` 修复 API `wx.chooseImage` 在选择图片的时候若对图片编辑会导致返回结果中没有图片地址的问题
24.  `F` 修复 API `wx.onBackgroundAudioStop` 在调用 `wx.seekBackgroundAudio` 时会意外触发的问题
25.  `F` 修复 API `wx.getBackgroundAudioPlayerState` 回调结果不统一的问题
26.  `A` 新增 框架能力 可通过 `App.onLaunch`、`App.onShow` 获取进入小程序的场景值 [详情](../framework/app-service/app.html#场景值)
27.  `U` 优化 框架能力 支持获取用户转发状态 [详情](../api/share.html)
28.  `U` 更新 组件 `<swiper />` 属性 `indicator-color`、 `indicator-active-color` 支持修改面板指示点颜色 [详情](../component/swiper.html)
29.  `U` 更新 组件 `<input />` 属性 `confirm-type`、`confirm-hold` [详情](../component/input.html)
30.  `U` 更新 组件 `<video />` 属性 `duration` [详情](../component/video.html)
31.  `U` 更新 组件 `<text />` 的 `selectable` 属性支持长按选择 [详情](../component/text.html)
32.  `U` 更新 组件 `<navigator />` 的属性 `open-type` 的可选值 `reLaunch`、`navigateBack` [详情](../component/navigator.html)
33.  `U` 更新 组件 `<picker-view />` 的 `indicator-class` 属性
34.  `U` 优化 组件 `<map />` 的 `iconPath` `marker`、`controls` 支持临时文件
35.  `U` 优化 组件 `<video />` 的 `src` 属性错误时候，频繁触发 `timeupdate` 事件的问题
36.  `U` 优化 组件 `<image />` 支持 `.svg` 文件
37.  `U` 优化 组件 `<video />` 控制条的体验问题
38.  `U` 优化 组件 `picker-view` 的使用体验，支持快速滚动到所点击项
39.  `U` 优化 组件 `<swiper />` 在用户右滑返回时候的体验问题
40.  `U` 优化 组件 `<slider/>` 和 `<process/>` 统一颜色设置的属性名 [详情](../component/slider.html)
41.  `F` 修复 组件 `<form />` 在拉起键盘时候，可能无法触发提交的问题
42.  `F` 修复 组件 `<slider />` 无法通过数据绑定来设置默认值的问题
43.  `F` 修复 组件 `<video />` 动态设置 `danmuList` 不生效的问题
44.  `F` 修复 组件 `<textarea />` 不支持样式 `min-height`、`max-height` 的问题
45.  `F` 修复 组件 `<picker-view />` 外层有hidden变化时显示空白的问题
46.  `F` 修复 组件 `<video />` 封面图片在 iOS 下会未自适应的问题
47.  `F` 修复 组件 `<video />` 在偶现播放视屏时候出现加载图标的问题
48.  `F` 修复 组件 `<swiper />` 在某些情况下图片无法显示的问题
49.  `F` 修复 组件 `<picker/>` iOS 日期选择器，第二次选择只更新年份的情况下，对应月份没有更新的问题
50.  `F` 修复 组件属性 `hover-class` 由 none 变为其他值时点击态无效的问题
51.  `F` 修复 组件 `<textarea />` disabled 属性在默认隐藏再显示情况下不生效的问题
52.  `F` 修复 组件 `<swiper/>` 内嵌 `<swiper/>` 时内部 `<swiper/>` 无法正常使用的问题
53.  `F` 修复 Android客户端 某些情况下调用 `wx.request` 返回 `fail:interrupted` 的问题
54.  `F` 修复 iOS客户端 打开个人热点并有连接时，tabBar 显示异常的问题

### 工具新增功能

1.  `A` 新增 mac 版开发工具支持蓝牙调试
2.  `A` 新增 `wx.reLaunch` `wx.chooseAddress` `wx.openSetting` `wx.getClipboardData` `wx.setClipboardData` `wx.arrayBufferToBase64` `wx.base64ToArrayBuffer` `wx.showLoading` `wx.hideLoading` `wx.startAccelerometer` `wx.stopAccelerometer` `wx.onNetworkStatusChange` `wx.hideShareMenu` `wx.showShareMenu` `CanvasContext.setTextAlign` 等 API 的调试支持
3.  `A` 新增 小程序项目列表页支持删除项目
4.  `A` 新增 自定义编译新增场景值调试支持
5.  `A` 新增 后台切换进入前台时的场景值调试支持
6.  `A` 新增 进入开发者社区的入口
7.  `A` 新增 可在项目列表删除所选项目的功能
8.  `A` 新增 svg 格式文件的支持
9.  `U` 优化 编辑器 wxml 代码自动补全的体验
10.  `U` 优化 可信域名出错时候的错误提示
11.  `U` 优化 合并 清除工具授权数据 和 清除手机授权数据 选项为 **清除授权数据**
12.  `F` 修复 自定义编译时候启动页面的 `json` 配置失效的问题
13.  `F` 修复 开发者工具被缩放时候工具显示错乱的问题
14.  `F` 修复 页面文件目录中带 `.` 时，该目录下的样式文件无法找到的问题
15.  `F` 修复 `Page.onLoad` 返回的参数被多 decode 一次的问题
16.  `F` 修复 小程序页面栈超过 5 层没有正确报错的问题
17.  `F` 修复 `wx.chooseImage` 会在某些情况下会返回两个相同的 `localId` 的问题
18.  `F` 修复 `<input />` 组件在开发工具无法自动聚焦的问题
19.  `F` 修复 关闭项目后再进入时工具大小异常的问题
20.  `F` 修复 代码中使用 `print` 会跳出打印窗口的问题
21.  `F` 修复 某些情况下压缩代码出错的问题
22.  `F` 修复 `wx.canvasToTempFilePath` 不生效的问题

### 2017.02.06 更新日志

### 基础库更新(1.0.0)

1.  `A` 新增 API `wx.getNetworkType` 在无网络返回状态 [详情](../api/device.html#wxgetnetworktypeobject)
2.  `F` 修复 API `wx.request` `wx.uploadFile` `wx.downloadFile` 在 Android 下 `statusCode` 不是 `Number` 类型的问题
3.  `F` 修复 API `wx.scanCode` 在 iOS 下取消扫码没有回调的问题
4.  `F` 修复 API `wx.switchTab` 在某些情况下未调用 `onShow` 的问题
5.  `F` 修复 API `wx.reqeust` data 中有特殊字符时无法发起请求的问题
6.  `F` 修复 API `wx.getNetworkType` 在 iOS 下返回参数错误的问题
7.  `F` 修复 API `wx.downloadFile` 在 iOS 下没有处理 `header` 参数的问题
8.  `F` 修复 API `wx.playBackgroundAudio` 在音乐暂停后不会正确播放其他音乐的问题
9.  `F` 修复 API `wx.playBackgroundAudio` 在 Android 下播放结束后会触发两次 `onBackgroundAudioStop` 的问题
10.  `F` 修复 API `<video />` 在 Android 下 seek 后播放失败的问题
11.  `F` 修复 API 需要授权弹框时，弹框重叠的问题
12.  `F` 修复 组件 `<video />` 在 iOS 全屏播放后无法使用控制栏的问题
13.  `F` 修复 组件 `<video />` 在 Android 下 seek 后播放失败的问题
14.  `U` 优化 `App.onError` 不捕获 API 的 `fail` 回调
15.  `F` 修复 `wx:for` 在遇到 `wx:key` 相同的场景时，出现渲染异常的问题
16.  `F` 修复 `wx:for` 在设置了 `wx:key` 并且数据发生添加、删除或者位置改变的时候出现 `wx:index` 错乱的问题
17.  `F` 修复 组件 `<picker-view-column />` 中内容动态变化后高度不正确的问题

### 工具新增功能

1.  `A` 新增 地理位置模拟的功能 [详情](debug.html#sensor-panel)
2.  `A` 新增 移动设备重力感应模拟的功能 [详情](debug.html#sensor-panel)
3.  `A` 新增 模拟器网络状态中新增无网络状态模拟的功能
4.  `A` 新增 显示当前调试页面的路径以及参数的功能
5.  `A` 新增 当系统中存在代理软件，导致工具无法正常启动时候的提示
6.  `A` 新增 控制台方法 `showSystemInfo()` 显示工具运行状态
7.  `U` 优化 `代码压缩上传` 的功能，提高代码压缩率
8.  `U` 优化 预览和上传代码的速度
9.  `U` 优化 工具的网络请求，支持开发者使用 `Charles` 抓包调试
10.  `F` 修复 mac 下 `清除缓存菜单` 被 `tabbar` 挡住的问题
11.  `F` 修复 `wx.showToast` 在 `mask` 为 `true` 时候层级错误的问题
12.  `F` 修复 调用 `wx.stopBackgroundAudio` 后没有触发 `onBackgroundAudioStop`的问题
13.  `F` 修复 新建项目时 `appid` 不存在的提示不正确的问题
14.  `F` 修复 项目目录中遇到无权限读取的文件时候工具假死的问题
15.  `F` 修复 未勾选 `监听文件变化，自动刷新开发者工具` 在编辑模式下仍然自动刷新的问题
16.  `F` 修复 自动更新失败的问题（需下个版本完全解决）
17.  `F` 修复 取消授权，工具返回未同移动设备保持一致的问题
18.  `F` 修复 `.wxml` `.wxss` 文件格式化后无法 `undo` 的问题
19.  `F` 修复 `wx.previewImage` 不支持 `localid` 的问题
20.  `F` 修复 `tabbar` 页面调用 `wx.navigateback` 后出现 `webviewid` 错误的问题
21.  `F` 修复 编辑器中 `wx.createCanvasContext` 补全不正确的问题
22.  `F` 修复 工具闪退后可能无法启动的问题
23.  `F` 修复 控制台没有输出 `ES6` 语法错误的问题
24.  `F` 修复 `windows 10`中右键关闭工具会导致 crash 的问题
25.  `F` 修复 授权按钮颜色不正确的问题
26.  `F` 修复 `wx.downloadFile` 未处理 URL 中 query 导致获取到的 `localid` 无法使用的问题
27.  `F` 修复 获取用户信息时，取消授权没有保存到后台的问题
28.  `F` 修复 `navigationBarTextStyle` 未对颜色进行校验的问题

### 2017.01.06 更新日志

1.  `U`: 更新 获取小程序页面二维码接口的调用总次数为 十万 次 [详情](../api/qrcode.html)

### 2017.01.05 更新日志

### 基础库更新

1.  `F`: 修复 touch 事件在开发工具上出现 `preventDefault inside passive event` 的问题

### 2017.01.04 更新日志

### 基础库更新

1.  `U` 更新 API `wx.getLocation` `wx.getUserInfo` `wx.chooseLocation` `wx.startRecord` 调用时需要用户授权确认，当用户拒绝授权时，回调 "`${APIName}:fail auth deny`"
2.  `U` 更新 API `wx.scanCode` 新增 charSet、scanType、path 返回参数 [详情](../api/scancode.html)
3.  `U` 更新 组件 `<video />` 全屏按钮显示的逻辑（跟随 controls 属性显示）
4.  `F` 修复 API `wx.switchTab` 后 `getCurrentPages` 不正确的问题
5.  `F` 修复 API `wx.uploadFile` 的时候，`formData` 传入数字的时候，会变成 `[object Number]` 的问题
6.  `F` 修复 API `wx.navigateTo` 接口在 iOS 上页面未显示时调用失败的问题
7.  `F` 修复 API `wx.checkSession` 接口在部分 Android 机器上没有回调的问题
8.  `F` 修复 API `wx.reqeust` `wx.downloadFile` 接口在客户端未检查 301 重定向后的域名合法性的问题
9.  `F` 修复 组件 `<textarea />` 在 Android 动态设置 `focus` 无效的问题
10.  `F` 修复 组件 `<picker />` 在 iOS 上点击取消也触发 `bindchange` 事件的问题
11.  `F` 修复 组件 `<textarea />` `<input />` 在 Android 上 maxlength <= 0 时异常的问题
12.  `F` 修复 组件 `<video />` 在 Android 上播放 m3u8 直播视频时，duration 显示异常的问题
13.  `F` 修复 组件 `<video />` 在 iOS 进度条时长没显示完整的问题
14.  `F` 修复 组件 `<audio />` 先 seek 后 play 异常的问题
15.  `F` 修复 组件 `<radio-group />` 中的 `<radio />` 被全部置为 false 时的状态同步错误的问题
16.  `F` 修复 组件 `<swiper />`同时设置 `current` 和 `children` 时，`current` 可能失效的问题
17.  `F` 修复 组件属性 `placeholder-class` `hover-class` 为带空格的字符串时样式设置无效的问题
18.  `F` 修复 连续 `setData` 时序异常的问题
19.  `F` 修复 iOS8 上大量引用本地路径图片会导致页面卡死的问题

### 工具新增功能

1.  `A` 新增 **清除手机授权数据** (缓存-清除手机授权数据) 功能
2.  `A` 新增 提交预览或者上传代码时候校验文件编码功能 [详情](details.html#代码文件必须-UTF8-编码)
3.  `U` 升级 [nwjs](http://nwjs.io/blog/v0.19.4/) 到 19.4 版本, 更新至 [Chrome55](http://v8project.blogspot.com/2016/10/v8-release-55.html) 内核
4.  `U` 更新 与客户端一致，在`<scroll-view />` 中不会触发下拉刷新
5.  `F` 修复 组件 `<picker/>` 在开发工具上初始值设置不对的问题
6.  `F` 修复 工具去除 `fetch` api，与微信客户端保持一致
7.  `F` 修复 `wx.navigateBack` 出现 webviewID not exist 错误的问题
8.  `F` 修复 添加或者删除 `app.wxss` 工具编译缓存没有更新的问题
9.  `F` 修复 `wxml` 文件最后一行编译出错导致工具卡死的问题
10.  `F` 修复 `wxml` 标签未闭合，没有错误提示的问题
11.  `F` 修复 编辑器全局搜索点击搜索结果没有跳转到文件对应行的问题
12.  `F` 修复 Appdata panel 对数组数据更新处理错误的问题
13.  `F` 修复 一些工具的其他 bug

### 其他

1.  `A` 新增 ES6 API 支持列表 [详情](details.html#ES6-APi-支持情况)

## 更新日志 0.11.112301

### 2016-12-22 基础库更新内容

1.  `F` 修复 `<input/>` 组件在开发者工具上失去焦点时清空内容的问题
2.  `F` 修复 开发者工具在项目编译后不触发 `App.onShow` 的问题
3.  `F` 修复 在 `<template />` 中使用 `wx:for` 中取不到 `data` 中的值的问题

## 更新日志 0.11.122100

*   新增转发、模板消息、客服消息、扫一扫、带参数二维码（当前仅限开发者和体验者使用）等功能
*   新增 4 个新 API， 2个新组件
*   拓展了 11 个组件属性，新增 6 个组件事件
*   修复数十个 API 以及组件 bug，优化部分交互体验
*   开发者工具增加新 API 及组件的调试支持
*   开发者工具增加微信支付的调试支持

详细更新日志如下：

### 基础库更新

1.  `A` 新增 API `wx.switchTab` [详情](../api/ui-navigate.html#wxswitchtabobject)
2.  `A` 新增 API `wx.scanCode` [详情](../api/scancode.html)
3.  `A` 新增 API `wx.createMapContext` [详情](../api/api-map.html)
4.  `A` 新增 API `wx.createCanvasContext` [详情](../api/canvas/create-canvas-context.html)
5.  `A` 新增 API `wx.showToast` 调用参数 mask [详情](../api/api-react.html)
6.  `A` 新增 页面方法 `Page.onShareAppMessage` 用于自定义转发内容 [详情](../api/share.html)
7.  `A` 新增 框架方法 `App.onError` [详情](../framework/app-service/app.html)
8.  `A` 新增 页面配置 `disabelScroll` [详情](../framework/config.html#pagejson)
9.  `A` 新增 `<picker-view/>` 组件 [详情](../component/picker-view.html)
10.  `A` 新增 `<contact-button/>` 组件，用于显示客服会话按钮 [详情](../component/contact-button.md)
11.  `A` 新增 `<navigator/>` 组件属性 openType [详情](../component/navigator.html)
12.  `A` 新增 `<switch/>` `<checkbox/>` `<radio/>` 组件属性 color
13.  `A` 新增 `<video/>` 组件属性 objectFit [详情](../component/video.html)
14.  `A` 新增 `<map/>` 组件属性 markers polyline circles include-points controls show-location [详情](../component/map.html)
15.  `A` 新增 `<swiper/>` 组件属性 circular 控制衔接滑动 [详情](../component/swiper.html)
16.  `A` 新增 `<input/>` 组件属性 cursor-spacing [详情](../component/input.html)
17.  `A` 新增 `<textarea/>` 组件属性 cursor-spacing [详情](../component/textarea.html)
18.  `A` 新增 `<picker/>` 组件属性 disabled [详情](../component/picker.html)
19.  `A` 新增 `<view/>` 组件属性 hover-class [详情](../component/view.html)
20.  `A` 新增 `<slider/>` 组件属性 `color`、`selected-color` [详情](../component/slider.html)
21.  `A` 新增 `<scroll-view/>` 组件属性 scroll-x, scroll-y 动态修改支持 [详情](../component/scroll-view.html)
22.  `A` 新增 `<map/>` 组件事件 bindtap bindmarkertap bindcontrolstap bindregionchange [详情](../component/map.html)
23.  `A` 新增 `<input/>`组件事件 bindconfirm [详情](../component/input.html)
24.  `A` 新增 `<video/>` 组件事件 bindtimeupdate [详情](../component/video.html)
25.  `A` 新增 `<textarea/>` 组件事件 bindconfirm [详情](../component/textarea.html)
26.  `A` 新增 `<textarea/>` 组件事件 bindinput [详情](../component/textarea.html)
27.  `A` 新增 `<canvas/>` 组件事件 bindlongtap [详情](../component/canvas.html)
28.  `A` 新增 `AudioContext.setSrc()` 上下文 API [详情](../api/api-audio.html#audiocontext)
29.  `A` 新增 `CanvasContext` 上下文 [详情](../api/canvas/intro.html)
30.  `A` 新增 `CanvasContext.arc()` 上下文 API [详情](../api/canvas/arc.html)
31.  `A` 新增 `CanvasContext.fillRect()` 上下文 API [详情](../api/canvas/fill-rect.html)
32.  `A` 新增 `CanvasContext.strokeRect()` 上下文 API [详情](../api/canvas/stroke-rect.html)
33.  `A` 新增 `CanvasContext.createLinearGradient()` 上下文 API [详情](../api/canvas/create-linear-gradient.html)
34.  `A` 新增 `CanvasContext.createCircularGradient()` 上下文 API [详情](../api/canvas/create-circular-gradient.html)
35.  `A` 新增 `<scroll-view/>` 组件表现 滚动时禁止将页面滚动
36.  `U` 更新 API `wx.getSystemInfo` 新增 platform 返回参数 [详情](../api/systeminfo.html)
37.  `U` 更新 API `wx.downloadFile` 当 HTTP 状态码为 200 或 304 的时候会返回 tmpFilePath [详情](../api/network-file.html#wxdownloadfileobject)
38.  `U` 更新 API `wx.showModal` 调用参数 confirmText cancelText 的字数限制 [详情](../api/api-react.html#wxshowmodalobject)
39.  `U` 更新 API `wx.navigateTo` `wx.redirectTo` 不允许跳转到 tabbar 页面，请使用 `wx.switchTab` [详情](../api/ui-navigate.html#wxswitchtabobject)
40.  `U` 更新 WXML dataset 返回 支持 Object 和 Array
41.  `U` 更新 `<image/>` 组件属性 mode 可选 widthFix [详情](../component/image.html)
42.  `U` 更新 `<picker/>` 组件属性 range 增加 ObjectArray 类型支持 [详情](../component/picker.html)
43.  `U` 更新 `<switch/>` `<checkbox/>` `<radio/>` 默认样式
44.  `U` 更新 `CanvasContext.save()` `CanvasContext.restore()` 上下文 API 保存画笔 style
45.  `U` 更新 `CanvasContext.arc()` 上下文 API 参数调整，新增 `eAngle`, `counterclockwise`，去除 `sweepAngle` [详情](../api/canvas/arc.html)
46.  `U` 优化 `<swiper/>` 滑动体验
47.  `U` 优化 `<swiper/>` `<slider/>` 在 `<scroll-view/>` 交互体验
48.  `U` 优化 `<navigator/>` `<button/>` 组件点击体验
49.  `F` 修复 `wx.request` 在 Android 上 method 只能用大写值的问题
50.  `F` 修复 `wx.uploadFile` 在 iOS 上无法设置 header 的问题
51.  `F` 修复 `wx.getLocation` type=gcj02 在 iOS 上不生效的问题
52.  `F` 修复 `wx.showToast` 退出小程序后依然显示的问题
53.  `F` 修复 `wx.showModal` 返回参数在 Android 和 iOS 不一致的问题
54.  `F` 修复 `wx.showModal` content 太长时或 title 为空时，布局错乱的问题
55.  `F` 修复 `wx.showModal` cancelText 和 confirmText 为空时，没有显示默认值的问题
56.  `F` 修复 `wx.showModal` 期间，键盘弹出，无法收起键盘的问题
57.  `F` 修复 `wx.getImageInfo` 在 Android 无法获取 http 链接图片的问题
58.  `F` 修复 `wx.getSystemInfo` 因为 tabbar 出现导致获取的屏幕高度不一致的问题
59.  `F` 修复 `wx.downloadFile` 在 Android 上下载后图片无法显示的问题
60.  `F` 修复 `wx.request` 没有对请求数据正确 encode 的问题
61.  `F` 修复 `wx.login` 在 iOS 中 App.onLaunch 没有回调的问题
62.  `F` 修复 `wx.createAnimationContext` 设置 transformOrigin 异常及动画不能进行下一步的问题
63.  `F` 修复 `wx.navigateTo` `wx.redirectTo` 在 iOS 上，Page.onLoad 无法调用的问题
64.  `F` 修复 `catch` 阻止事件的默认行为失效的问题
65.  `F` 修复 `setInterval` 在 iOS 传参错误导致页面卡死的问题
66.  `F` 修复 `onReachBottom` 触发多次的问题
67.  `F` 修复 `<swiper/>` 拥有文本节点后代时出错的问题
68.  `F` 修复 `<switch/>` `<radio/>` `<checkbox/>` `<image/>` `<video/>` hidden 属性不生效的问题
69.  `F` 修复 `<checkbox/>` `<radio/>` label 无法生效的问题
70.  `F` 修复 `<scroll-view/>` 滑动到顶部或底部闪屏的问题
71.  `F` 修复 `<video/>` 在 iOS 上事件不生效的问题
72.  `F` 修复 `<video/>` 在 iOS 被移除了声音会继续存在的问题
73.  `F` 修复 `<text/>` 内嵌不会动态更新 class 和 style 的问题
74.  `F` 修复 `<button/>` disabled 时文字颜色不对的问题
75.  `F` 修复 `<input/>` focus 属性无效的问题
76.  `F` 修复 `<input/>` 在 iOS9 使用 display:flex 的时候，第一次输入不显示的问题
77.  `F` 修复 `<input/>` 初始值为 undefined 时显示异常的问题
78.  `F` 修复 `<input/>` placeholder 重影的问题
79.  `F` 修复 `<input/>` `<textare/>` 聚焦前后颜色异常的问题
80.  `F` 修复 `<textarea/>` position:fixed 定位异常的问题
81.  `F` 修复 `<textarea/>` 在打开 picker 后不触发 blur 事件的问题
82.  `F` 修复 `<textarea/>` 设置 auto-height 时高度变化的问题
83.  `F` 修复 `<textarea/>` 销毁异常的问题
84.  `F` 修复 `<video/>` 在 Android 全屏按钮点击两次才能生效的问题
85.  `F` 修复 `<audio/>` 在多个页面中使用相同 id 冲突的问题
86.  `F` 修复 `<canvas/>` drawImage 无法正常显示的问题
87.  `F` 修复 `<image/>` 在 bindload 事件里面 setData 会出现死循环的问题
88.  `F` 修复 `<scroll-view/>` scroll-into-view 失效的问题
89.  `F` 修复 `<form/>` submit 取不到 input 的内容的问题
90.  `D` 即将移除 `<navigator/>` redirect 属性
91.  `D` 即将移除 `wx.createContext` 接口
92.  `D` 即将移除 `<input/>` auto-focus 属性，直接使用 focus 属性即可
93.  `D` 即将移除 `<map />` covers 属性

### 开发者工具基础功能

1.  `A` 新增 `wx.switchTab` 的调试支持
2.  `A` 新增 `wx.startRecord` `wx.stopRecord` `wx.playVoice` `wx.pauseVoice` `wx.stopVoice` API 调试支持
3.  `A` 新增 微信支付调试支持 [详情](details.html#微信支付的调试)
4.  `A` 新增 二维码扫码调试支持
5.  `A` 新增 app.json 重复定义页面文件导致提交预览错误的提示
6.  `A` 新增 模拟器加载图片网络错误的提示信息
7.  `A` 新增 编译时候设置初始化页面以及参数的功能
8.  `A` 新增 提交预览时候设置初始化页面以及参数的功能
9.  `F` 优化 appdata panel 分页面查看数据，支持动态更新以及 `code` 模式显示
10.  `F` 修复 `wx.getBackgroundAudioPlayerState` 在没有音乐播放的时候无返回的问题
11.  `F` 修复 `wx.getBackgroundAudioPlayerState` 获取 status 不正确的问题
12.  `F` 修复 wxml panel 某些情况下白屏的问题
13.  `F` 修复 wxml panel 属性无法复制，并且复制带有回车的问题
14.  `F` 修复 wxml panel 单一文本节点展示没有对齐的问题
15.  `F` 修复 app.json 中 tabbar 的 position 设置为 top 时模拟器显示错误的问题
16.  `F` 修复 devtools 和编辑器中点击外部链接错误的问题
17.  `F` 修复 `wx.requst` 因为缓存无法发送请求的问题

### 更新概述

修复若干bug

详细更新日志如下：

### 开发者工具基础功能

1.  `F` 修复 `wx.request` 在某些情况下重复触发的问题
2.  `F` 修复 wxml panel rpx 调试失效的问题
3.  `F` 修复 编辑器 textarea 组件 提示错误的问题

## 更新日志 0.11.112300

### 更新概述

修复 TLS 版本校验出错的问题

详细更新日志如下：

### 开发者工具基础功能

1.  `A` 增加 控制台指令 `showRequestInfo()` 显示 `wx.request` 请求详细信息
2.  `F` 修复 修复 TLS 版本校验出错，导致 `wx.request` 失败的问题

## 更新日志 0.11.112200

### 更新概述

本次更新只涉及开发者工具

详细更新日志如下：

### 开发者工具基础功能

1.  `A` 增加 上传代码时样式自动补全选项，默认开启，开发者可以主动关闭 [详情](project.html#样式补全)
2.  `A` 增加 开发环境不校验请求安全域名以及 TLS 版本选项，默认关闭，开发者可以主动开启 [详情](project.html#不校验请求域名及-tls-版本)
3.  `A` 增加 Page 页面脚本错误的提示信息
4.  `A` 增加 同客户的保持一致，校验 `wx.request、wx.downloadFile、wx.uploadFile` 的 TLS 版本
5.  `A` 增加 工具窗口位置以及大小的自动保存功能
6.  `A` 增加 显示模拟器中的错误信息的功能
7.  `A` 增加 wxml panel 双击标签名展开的功能
8.  `A` 增加 打开本地开发目录的功能
9.  `A` 增加 当前 AppId 的网络配置信息表
10.  `F` 修复 同客户端保持一致，移除 `Promise`，开发者需要自行引入兼容库
11.  `F` 修复 某些情况下，事件被发布多次的 bug
12.  `F` 修复 在 devtools 中使用 Ctrl + R 或者 F5 导致模拟器出现错误的问题
13.  `F` 修复 wxml panel 在 mac 中白屏的问题
14.  `F` 修复 wxml panel 在 inspect 模式下卡顿的问题
15.  `F` 修复 wxml panel 在某些情况下假死的问题
16.  `F` 修复 wxml panel sytle 面板文字重叠的问题
17.  `F` 修复 wxml panel 无法取消多个样式规则的问题
18.  `F` 修复 `wx.request` 设置 content-type 错误的问题
19.  `F` 修复 `wx.downloadFile、wx.uploadFile` 未校验可信域名的问题
20.  `F` 修复 git 切换分支或者文件大量改变时候模拟器白屏的问题
21.  `F` 修复 wxml 文件不存在的时候没有报错信息的问题

### 编辑模块

1.  `A` 增加 wxml、wxss 文件格式化代码的功能
2.  `A` 增加 使用 Ctrl + Shift + f 搜索代码的功能
3.  `A` 增加 文件树右键功能
4.  `A` 增加 关闭右侧文件的功能
5.  `A` 增加 使用 Ctrl + p 文件跳转支持模糊搜索
6.  `A` 增加 wxml 代码自动补全的和文档显示的功能 [详情](edit.html#自动补全)
7.  `A` 增加 gif 类型文件的显示功能
8.  `A` 增加 在硬盘上打开文件的功能
9.  `A` 增加 保存 app.json 后，自动创建对应 page.js 和 page.wxml 文件的功能
10.  `F` 修复 wxml 自动补全错误的问题
11.  `F` 修复 文件过多时候，在 tabbar 上无法点击的问题
12.  `F` 修复 修改目录名字可能失败的问题

## 更新日志 0.10.102800

### 更新概述

*   新增 20 个全新的 API （目前可以在开发工具上正常使用，客户端需要等待 6.3.30 版本发布）
*   拓展了 4 个组件属性，修复了数十个组件 bug
*   开发者工具添加实时刷新功能等 7 个功能
*   编辑模块增加自动保存、实时预览等 8 个功能

详细更新日志如下：

### 基础库更新(2016.10.31)

1.  `F` 修复 `<button/>` 组件的部分事件调用的问题
2.  `F` 修复 动态变更 `<swiper-item/>` 组件列表时存在的 `<swiper>` 组件更新的问题
3.  `F` 修复 部分 rpx 无效

### 基础库更新(2016.10.28)

1.  `F` 修复 `page.prototype.setData` 在 `onLoad` 和 `onShow` 中未及时设置的问题
2.  `F` 修复 `wx.navigateTo` 在某些情况下失效的问题
3.  `F` 修复 `wx.getStorageInfoSync` 返回值中有多余 `errMsg` 的问题

### 基础功能

1.  `A` 增加 四个文件管理 API `wx.getSavedFileList`、`wx.getSavedFileInfo`、`wx.removeSavedFile`、`wx.openDocument` [详情](../api/file.html)
2.  `A` 增加 四个数据管理 API `wx.removeStorage`、`wx.removeStorageSync`、`wx.getStorageInfo`、`wx.getStorageInfoSync` [详情](../api/data.html)
3.  `A` 新增 四个交互反馈 API `wx.showToast`、`wx.showModal`、`wx.hideModal`、`wx.showActionSheet` [详情](../api/api-react.html)
4.  `A` 新增 选择地理位置 API `wx.chooseLocation` [详情](../api/location.html#wxchooselocationobject)
5.  `A` 新增 获取图片信息 API `wx.getImageInfo` [详情](../api/media-picture.html#wxgetimageinfoobject)
6.  `A` 新增 音频组件控制 API `wx.createAudioContext` [详情](../api/api-audio.html)
7.  `A` 新增 视频组件控制 API `wx.createVideoContext` [详情](../api/api-video.html)
8.  `A` 新增 两个设备 API `wx.getSystemInfoSync`、`wx.makePhoneCall` [详情](../api/device.html#wxgetsysteminfosync)
9.  `A` 新增 绘图 API `wx.canvasToTempFilePath` [详情](../api/canvas/temp-file.html#wxcanvastotempfilepathobject)
10.  `A` 新增 开放能力 API `wx.checkSession` [详情](../api/api-login.html)
11.  `A` 新增 `wx.navigateBack` delta 参数，支持多层级返回 [详情](../api/ui-navigate.html#wxnavigatebackobject)
12.  `A` 新增 `wx.sendSocketMessage`、`wx.onSocketMessage` 支持收发 ArrayBuffer 数据类型
13.  `A` 新增 `getCurrentPages()` 方法， 获取页面栈 [详情](../framework/app-service/page.html#getcurrentpages)
14.  `A` 新增 `Page.onReachBottom()` 方法，监听页面到达底部 [详情](../framework/app-service/page.html)
15.  `A` 新增 事件对象增加 changedTouches 列表，反应手指触摸位置的变化 [详情](../framework/view/wxml/event.html)
16.  `A` 新增 `<textarea/>` 组件 [详情](../component/textarea.html)
17.  `A` 新增 `<canvas/>` 多点触摸 [详情](../component/canvas.html)
18.  `A` 新增 `<canvas/>` disable-scroll 属性 [详情](../component/canvas.html)
19.  `A` 新增 `<image/>` bindload 事件返回图片宽高 [详情](../component/image.html)
20.  `A` 新增 `<text/>` 嵌套 `<text/>` 功能 [详情](../component/text.html)
21.  `A` 新增 `<video/>` controls autoplay 属性 [详情](../component/video.html)
22.  `A` 新增 `<video/>` 支持设置弹幕、发送弹幕 [详情](../component/video.html)
23.  `A` 新增 `<video/>` 播放类事件 [详情](../api/api-video.html)
24.  `A` 新增 WXML `wx:key` 支持，提升列表渲染时性能 [详情](../framework/view/wxml/list.html#wxkey)
25.  `A` 新增 WXML 关键字、数据路径计算 [详情](../framework/view/wxml/data.html)
26.  `U` 新增 app.json `tabBar` 属性 `position` 用于指定显示位置 [详情](../framework/config.html#tabbar)
27.  `F` 修复 `wx.navigateTo` api 超过 5 个页面，调用失败无返回的问题
28.  `U` 修复 `<navigator/>` 设置 `display: flex` 失效的问题
29.  `F` 修复 `<input/>` `text-align:center`、`text-align:right` 不支持的问题
30.  `F` 修复 `<input/>` 聚焦时异常的问题
31.  `F` 修复 `<image/>` base64 图片显示的问题
32.  `F` 修复 动态节点更新导致表单组件重置问题
33.  `F` 修复 使用 rpx 单位部分手机出现边框显示不全的问题
34.  `F` 修复 不同页面中相同的 `canvas-id` 共享同一个绘图上下文的问题
35.  `F` 修复 page 里面的属性对象内的 function 失效的问题
36.  `F` 修复 `wx.drawCanvas` 在 canvas 宽高为 0 的情况下画不出来的问题
37.  `F` 修复 `wx.request` header 设置 'Content-Type' 异常的问题
38.  `D` 即将移除 `App.prototype.getCurrentPage`，可使用更功能更强大的 `getCurrentPages` 替代 [详情](../framework/app-service/app.html#appprototypegetcurrentpage)
39.  `D` 即将移除 `<audio/>` action 属性，可使用更方便的音频组件控制 API 替代 [详情](../api/api-audio.html)
40.  `D` 即将移除组件： `<toast/>` `<loading/>` `<action-sheet/>` `<modal/>`, 可使用更方便的交互反馈 API 替代 [详情](../api/api-react.html)

### 开发者工具基础功能

1.  `A` 增加 监听文件变化，实时刷新模拟器，默认开启，开发者可以在项目中主动关闭
2.  `A` 增加 登录界面增加代理配置、切换账号
3.  `A` 增加 所有新增 API 以及 组件的调试功能
4.  `A` 增加 更友好的错误提示功能
5.  `A` 增加 wxml panel rpx 调试支持
6.  `A` 增加 wxml panel 实时修改同步模拟器的功能
7.  `A` 增加 `wx.previewImage` API 调试支持
8.  `F` 修复 工具中无法模拟字体小于 12px 的问题
9.  `F` 修复 picker 组件的 start、end 无效的问题
10.  `F` 修复 video 组件无法滑动进度条的问题
11.  `F` 修复 `wx.getSystemInfo` 再有 tabbar 情况下获取高度错误的问题
12.  `F` 修复 `wx.chooseImage` 设置count无效的问题
13.  `F` 修复 Page.onLoad 时调用 wx.setNavigationBarTitle 失败的问题
14.  `F` 修复 wxml panel 空白以及选择时候卡顿的问题
15.  `F` 修复 脚本文件名字为中文时候的编译错误问题
16.  `F` 修复 关闭项目时候没有关闭媒体播放的问题

### 编辑模块

1.  `A` 增加 文件自动保存功能 [详情](edit.html)
2.  `A` 增加 编辑显示模拟器并且实时刷新
3.  `A` 增加 Ctrl + \ 文件树展开和收起
4.  `A` 增加 Ctrl + w 关闭当前编辑页面
5.  `A` 增加 Ctrl + p 文件跳转
6.  `A` 增加 Ctrl + m 打开或者关闭模拟器
7.  `A` 增加 编辑器底部状态栏
8.  `A` 增加 json wxml 代码自动补全以及提示功能
9.  `F` 修复光标丢失的问题

## 更新日志（0.10.101400）小版本更新

### 开发者工具基础功能

1.  `F` 修复 下拉刷新无法使用的问题
2.  `F` 修复 app.json 文件修改后开发工具没有及时更新的问题

## 更新日志（0.10.101100）大版本更新

### 基础功能

1.  `A` 增加 `<video/>` Android 添加了默认的控件
2.  `A` 增加 模块化中可使用 `exports` 对外暴露接口
3.  `A` 增加 模块化中 `require` 可不写 `.js` 后缀
4.  `F` 修复 `<swiper/>` 滑动灵敏度
5.  `F` 修复 `<toast/>` 中图标位置偏上，没有居中的问题
6.  `F` 修复 `<view/>` 标签 hidden 属性失效的问题
7.  `F` 修复 `<input/>` iOS10 下首次输入不显示的问题
8.  `F` 修复 `<button/>` type="mini" 的问题
9.  `F` 修复 `<button/>` 出现 loading 时，loading和文字对齐的问题
10.  `F` 修复 `<canvas/>` drawImage 图片路径不正确的问题
11.  `F` 修复 Page 中 data 之外的数据无法被重置的问题
12.  `F` 修复 大小写导致的 wx.request 的 header 参数属性被重复设置的问题
13.  `F` 修复 app.js 中无法使用 `require` 的问题
14.  `R` 移除 `<switch/>` 组件多余点击态
15.  `R` 移除 `<view/>` 标签 inline 属性
16.  `R` 移除 `<page/>` 标签的 height 100% 的默认样式

### 开发者工具基础功能

1.  `A` 增加 ES6 到 ES5 的转换，默认开启，开发者可以在项目中主动关闭
2.  `A` 增加 提交代码时候可选压缩代码，默认关闭，开发者可以在项目中主动开启
3.  `A` 增加 `wx.uploadFile` 和 `wx.downloadFile` 调试支持
4.  `A` 增加 下拉刷新的调试支持
5.  `A` 增加 `<form/>` reportSubmit 模式模拟返回 formId 调试支持
6.  `A` 增加 `<video/>` 添加了滑动进度条的功能
7.  `A` 增加 `<picker/>` mode=time mode=date
8.  `F` 修复 打开地图导致错误的问题
9.  `F` 修复 `<map/>` 组件不显示的问题
10.  `F` 修复 `<canvas/>` 中 drawImage 闪烁的问题
11.  `F` 修复 json 中 `navigationBarTextStyle` 缺省值设置出错的问题
12.  `F` 修复 `<picker/>` 在表单提交事件中 value 为空的问题
13.  `F` 修复 背景音乐停止时会触发一次 `wx.onBackgroundAudioPause` 的问题
14.  `F` 修复 `wx.request` 超时会触发两次 `fail` 和 `complete` 回调的问题
15.  `F` 修复 小屏幕下开发者工具无法拖动到底部的问题
16.  `F` 修复 `wx.setStorage` 没有限制大小的问题
17.  `F` 修复 某些情况下修改了代码文件但工具没有更新的问题

### 编辑模块

1.  `A` 增加 侧边栏可以拖拽位置保存
2.  `A` 增加 快捷键 `ctrl + \` or `command + \` 隐藏侧边栏
3.  `A` 增加 文件页卡可以拖动排序的功能
4.  `F` 修复 `wx.setNavitionBarTitle` 提示错误的问题
5.  `F` 修复 某些情况下文件修改不生效的问题

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

[](download.html)[](../qa.html)</div>

</div>