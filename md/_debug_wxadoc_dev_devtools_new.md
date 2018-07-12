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

### 2018.07.12 开发者工具更新

1.  `A` 新增 多帐号调试 [详情](multiaccount.html)
2.  `A` 新增 iPad 及横屏调试
3.  `A` 新增 素材管理支持 svg 文件
4.  `A` 新增 编辑器全局搜索支持更多文本文件
5.  `U` 优化 编辑器菜单采用原生菜单，避免被其他界面遮盖导致显示不全
6.  `F` 修复 远程调试网络面板某些请求会有乱码的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00062eac0849301f0ef6e04e456000&highline=network)
7.  `F` 修复 自定义组件在 1.6.3 基础库开发者工具报错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1271211997&docid=0006ee3b930f30600f0783b2756400)
8.  `F` 修复 快速编译，快速弹出/收回模拟器导致开发者工具黑屏的问题
9.  `F` 修复 断网后点击登录会出现开发者工具白屏的问题
10.  `F` 修复 用户代码触发开发者工具上传的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=244138274&docid=000c6cc9da8930e5a5e6f02fe5b800)
11.  `F` 修复 `wx.setBackgroundColor` 和 `wx.setBackgroundTextStyle` 在页面生命周期使用会报错的问题
12.  `F` 修复 插件功能页 json 配置没有生效的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1553985152&docid=00000874b98458b575f64f2235bc00)
13.  `F` 修复 界面调试样式覆盖规则计算错误的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a4ae7cec2581962e6c49e45bc00&token=940403363&lang=zh_CN)
14.  `F` 修复 `wx.createAudioInstance` src 是本地项目文件，动态设置 volume = 0 再设置回 1 后没有声音的问题
15.  `F` 修复 小游戏分包加载时，分包大小只包含 JS 文件的问题
16.  `F` 修复 小游戏使用分包时，2.1.0 以下基础库无法调试的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=0000c4809ac1b0e0930765bb256800&highline=%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%88%86%E5%8C%85)
17.  `F` 修复 小游戏 `wx.createUserInfoButton` 无法使用本地图片的问题
18.  `F` 修复 通过二维码编译的场景值不符合预期的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000406dedf83d84f89d67245c5d000)
19.  `F` 修复 `wx.showToast` icon = 'none' 时无法穿透的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e60e87f8de0448df60e66356000&token=1196209900&lang=zh_CN)
20.  `F` 修复 自定义分析窗口无法再次打开的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=00062a02f68e40a996b65363951800&comment_lvl=3)
21.  `F` 修复 分包根目录名字后缀相同时报错的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1382542218&docid=0008e2c47f0f3018860775ff45c800)

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