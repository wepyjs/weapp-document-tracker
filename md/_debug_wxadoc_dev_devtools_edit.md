<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017621)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017621)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=2017621)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=2017621)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017621)

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

编辑区可以对当前项目进行代码编写和文件的添加、删除以及重命名等基本操作。

## 文件支持

工具目前提供了4种文件的编辑：wxml、wxss、js、json以及图片文件的预览。

## 实时预览

如果设置中开启了“文件保存时自动编译小程序”（位置在：设置 - 编辑 - 文件保存时自动编译小程序），那么当 js, json, wxml 或 wxss 文件修改时，可以通过模拟器实时预览编辑的情况：

![edit](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit/edit1.png?t=2017621)

## 自动保存

书写代码后，工具会自动帮助用户保存当前的代码编辑状态，直接关闭工具或者切换到别的项目，并不会丢失已经编辑的文件状态，但需要注意的是，只有保存文件，修改内容才会真实的写到硬盘上。可以在设置（设置 - 编辑）中配置开启“修改文件时自动保存”已达到修改文件时自动保存而无需手动保存的效果，也可开启“编译时自动保存所有文件”以达到点击编译时自动帮助保存所有文件的效果。

## 自动补全

同大部分编辑器一样，工具提供了较为完善的自动补全

*   js 文件编辑会帮助开发补全所有的 API 及相关的注释解释，并提供代码模板支持
*   wxml 文件编辑会帮助开发者直接写出相关的标签和标签中的属性
*   json 文件编辑会帮助开发者补全相关的配置，并给出实时的提示

js 补全

![3](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit1_1.gif?t=2017621)

代码模板支持

![3](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit1_2.gif?t=2017621)

json 补全

![3](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit3.gif?t=2017621)

wxml 补全

![3](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit4.gif?t=2017621)

## 快捷键

见工具菜单栏

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017621)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](different.html)[](settings.html)</div>

</div>