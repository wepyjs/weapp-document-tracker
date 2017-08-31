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

### 2017.08.22 开发工具更新

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
2.  `A` 新增 API `startPullDownRefresh` 主动触发下拉刷新接口 [详情](../api/pulldown.html#wxstartpulldownrefresh)
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