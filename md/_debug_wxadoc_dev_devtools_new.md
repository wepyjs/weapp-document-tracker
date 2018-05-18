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

### 2018.05.18 更新日志

1.  `F` 修复 1.02.1805150 引入的 `<web-view/>` 组件显示异常的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1701153588&docid=00048ae52006b8894ac6e9a3153c00)
2.  `F` 修复 1.02.1805150 引入的小屏幕电脑上模拟器容器没有滚动条的问题
3.  `F` 修复 小程序 iPhoneX 模拟器刘海丢失的问题
4.  `F` 修复 覆盖安装后启动的工具版本号还是旧版本的问题
5.  `F` 修复 windows 安装界面乱码的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e8c961101d84ecb969822353400&highline=%E5%AE%89%E8%A3%85%20%E4%B9%B1%E7%A0%81)
6.  `F` 修复 自定义组件中节点动态删除导致 wxml 面板白屏的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0008a8f45b4e18ba44c66907651c00&token=1501432787&lang=zh_CN)
7.  `F` 修复 小游戏调用 `wx.setPreferredFramesPerSecond` 后丢帧的问题
8.  `F` 修复 小游戏使用 fs.writeFileSync 写入一个 ArrayBuffer 类型的数据，encoding 指定为 binary 时会导致写入的文件内容错误的问题
9.  `F` 修复 使用插件时，插件中的图片没有显示的问题
10.  `F` 修复 小程序中带有 sourcemap 时解析失败导致上传报错的问题

### 2018.05.15 更新日志

1.  `A` 新增 素材管理功能 [详情](../qcloud/material.html)
2.  `A` 新增 工具栏右键进行工具栏管理 [详情](page.html#工具栏管理)
3.  `A` 新增 独立窗口显示模拟器和调试器的功能 [详情](page.html#独立窗口)
4.  `A` 新增 可以在工具栏切换小程序模式和插件模式
5.  `A` 新增 小程序使用的插件有更新时，在控制台提示插件更新
6.  `A` 新增 小游戏 `wx.createUserInfoButton` 调试支持（基础库需选择2.0.6）
7.  `A` 新增 当插件有更新时，在插件使用者的调试器控制台提示更新
8.  `A` 新增 插件 README.md 文档编辑及上传功能
9.  `A` 新增 小游戏广告展示
10.  `U` 优化 多核编译的实现方案
11.  `U` 优化 开发者工具中基础库的更新逻辑，实时获取最新的基础库
12.  `F` 修复 1.02.1804251 引入的修改 `game.json` 中的 `deviceOrientation` 不生效的问题
13.  `F` 修复 1.02.1804251 引入的小游戏重新编译时音效没有重置的问题
14.  `F` 修复 1.02.1804251 引入的 `addEventListener` 报错导致无法显示页面的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a0e8625c090a6b1a6a0a775b000)
15.  `F` 修复 小游戏 `wx.getUpdateManager` 无效的问题
16.  `F` 修复 小游戏 `wx.onShow` 偶尔不触发的问题
17.  `F` 修复 小游戏默认背景颜色与真机不一致的问题
18.  `F` 修复 小游戏 状态栏位置异常的问题
19.  `F` 修复 小程序业务逻辑（复杂计算或死循环）导致重新编译无效的问题
20.  `F` 修复 横屏时 iPhoneX 刘海位置异常的问题
21.  `F` 修复 `wx.showModal` 在页面路由之后消失的问题
22.  `F` 修复 开启自动保存修改时，在 `app.json` 中新增 `page` 出现多个中间页面的问题
23.  `F` 修复 开发者工具 1.6.0 基础库调用 `wx.createInnerAudioContext` 无效的问题
24.  `F` 修复 `<picker fields="year" value="2018"/>` 显示 1970 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1324768068&docid=000860735d8a68eb7fa6f2a0351c00&inwindow=1&comment_lvl=1)
25.  `F` 修复 开发者工具支持 HTTP2 而真机不支持 HTTP2，导致网络 Response Headers 大小写不一致的问题
26.  `F` 修复 不处理 `wx.authorize` 授权窗，直接重新编译，再也无法弹出授权窗，清除缓存编译也无法弹出的问题
27.  `F` 修复 多开项目时社区消息会重复通知的问题
28.  `F` 修复 命令行调用无法打开游客模式的项目的问题
29.  `F` 修复 点击胶囊关闭按钮，不会触发 `App.onHide` 的问题
30.  `F` 修复 自带背景音乐播放器窗口没有播放按钮的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=769370567&docid=000c224e904dd096bea6a3e1556000&inwindow=1&comment_lvl=1)
31.  `F` 修复 快速修改 text 节点时在 WXML 面板中显示异常的问题
32.  `F` 修复 referrerInfo.extraData 类型与文档不一致的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00024622e1c778d5dab68f54d51000&comment_lvl=1)
33.  `F` 修复 `<web-view />` src 没有更新的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0006cc97e3c38065eeb69eeee5b800&token=1532068018&devtools=1&comment_lvl=12)

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