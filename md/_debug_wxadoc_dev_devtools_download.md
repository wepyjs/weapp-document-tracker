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
*   [云测试](monkey-test.html)
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
*   [第三方平台](ext.html)
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

## 最新版本下载地址 (1.01.171019)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki)

## 上版本下载地址 (1.01.170925)

[windows 64](https://dldir1.qq.com/WechatWebDev/1.0.0/20170925/wechat_devtools_1.01.170925_x64.exe) 、 [windows 32](https://dldir1.qq.com/WechatWebDev/1.0.0/20170925/wechat_devtools_1.01.170925_ia32.exe) 、 [mac](https://dldir1.qq.com/WechatWebDev/1.0.0/20170925/wechat_devtools_1.01.170925.dmg)

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

### 历史版本下载 2017.08.30 (0.22.203100)

[windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_x64&from=mpwiki) 、 [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_ia32&from=mpwiki) 、 [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=old_darwin&from=mpwiki)

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

[](notsupport.html)[](uplog.html)</div>

</div>