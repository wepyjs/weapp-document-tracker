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
5.  `A` 新增 API `wx.arrayBufferToBase64`、`wx.base64ToArrayBuffer` [详情](../api/api-util.html)
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
10.  `A` 新增 `<contact-button/>` 组件，用于显示客服会话按钮 [详情](../component/contact-button.html)
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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017616)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](details.html)[](../qa.html)</div>

</div>