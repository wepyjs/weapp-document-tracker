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

*   [概览](devtools.html)
*   [界面](page.html)
    *   [启动页](page.html#启动页)
    *   [菜单栏](page.html#菜单栏)
    *   [工具栏](page.html#工具栏)
    *   [工具栏管理](page.html#工具栏管理)
    *   [模拟器](page.html#模拟器)
    *   [独立窗口](page.html#独立窗口)
    *   [设置](settings.html)
        *   [外观设置](settings.html#外观设置)
        *   [编辑设置](settings.html#编辑设置)
        *   [代理设置](settings.html#代理设置)
        *   [通知设置](settings.html#通知设置)
    *   [项目页卡](project.html)
        *   [项目设置](project.html#项目设置)
        *   [域名信息](project.html#域名信息)
        *   [腾讯云状态](project.html#腾讯云状态)
*   [快捷键](shortcut.html)
*   [代码编辑](edit.html)
    *   [文件格式](edit.html#文件格式)
    *   [文件类型](edit.html#文件支持)
    *   [自动补全](edit.html#自动补全)
    *   [Git 状态展示](edit.html#git-状态展示)
    *   [项目配置文件](projectconfig.html)
*   [小程序调试](debug.html)
    *   [模拟器](debug.html#模拟器)
    *   [自定义编译](debug.html#自定义编译)
    *   [自定义预处理](debug.html#自定义预处理)
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
    *   [自动预览](debug.html#自动预览)
    *   [特殊场景调试](different.html)
    *   [真机调试](remote-debug.html)
*   [命令行调用](cli.html)
*   [测试号](sandbox.html)
*   [HTTP 调用](http.html)
*   [小程序开发助手](mydev.html)
*   [代码片段](minicode.html)
*   [第三方平台](ext.html)
*   [小程序插件开发](plugin.html)
*   [云测试](monkey-test.html)
*   [素材管理](../qcloud/material.html)
*   [代码托管](../qcloud/tgit.html)
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

编辑区可以对当前项目进行代码编写和文件的添加、删除以及重命名等基本操作。

## 文件格式

因 iOS 下仅支持 **UTF8** 编码格式，最新版本的开发者工具会在上传代码时候对代码文件做一次编码格式校验。

## 文件支持

工具目前提供了 5 种文件的编辑：`wxml`、`wxss`、`js`、`json`、`wxs` 以及图片文件的预览。

## 文件操作

新建页面有两种方式

1.  在目录树上右键，选择新建 Page，将自动生成页面所需要的 `wxml`、`wxss`、`js`、`json`

2.  在 app.json 的 pages 字段，添加需要新建的页面的路径，将会自动生成该页面所需要的文件

## 自动保存

编辑代码后，工具会自动帮助用户保存当前的代码编辑状态，直接关闭工具或者切换到别的项目，并不会丢失已经编辑的文件状态，但需要注意的是，只有用户主动保存文件，修改内容才会真实的写到硬盘上。

如果设置中开启了 “修改文件时自动保存”（设置-编辑设置-修改文件自动保存），工具在修改文件时会自动保存到硬盘中，无需手动保存的效果。

设置中开启 “编译时自动保存所有文件”（设置-编译设置-编译时自动保存所有文件），在点击编译时自动保存所有文件的效果。

## 实时预览

如果设置中开启了 “文件保存时自动编译小程序”（设置-编辑设置-保存时自动编译小程序），那么当 `wxml`、`wxss`、`js`、`json` 文件修改时，可以通过模拟器实时预览编辑的情况：

**注意：如果同时开启了 ”修改文件时自动保存“ 的设置，编译动作会有一定的延迟，来避免频繁的编译，手动点击编译按钮将立即编译。**

## 自动补全

同大部分编辑器一样，工具提供了较为完善的自动补全

*   js 文件编辑会帮助开发补全所有的 API 及相关的注释解释，并提供代码模板支持
*   wxml 文件编辑会帮助开发者直接写出相关的标签和标签中的属性
*   json 文件编辑会帮助开发者补全相关的配置，并给出实时的提示

js 补全

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/jsautocomplete2.gif)

代码模板支持

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/jsautocomplete.gif)

json 补全

![3](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/jsoncomplete.gif)

wxml 补全

![3](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit4.gif)

## Git 状态展示

如果所在的小程序工程目录（`project.config.json` 所在目录）存在 Git 仓库，编辑器可以展示目前的 Git 状态。

### 目录树

如图所示，当某些文件存在变动时，目录树的文件右侧将展示相应的图标来表明这一状态。当某一处于收起状态的目录下存在有变动的文件时，此目录的右侧亦会展示一个圆点图标表明此情况。

文件图标状态的含义如下：

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/git/directory.jpg)

<table>

<thead>

<tr>

<th style="text-align:center">图标</th>

<th>含义</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:center">U</td>

<td>文件未追踪（Untracked）</td>

</tr>

<tr>

<td style="text-align:center">A</td>

<td>新文件（Added, Staged）</td>

</tr>

<tr>

<td style="text-align:center">M</td>

<td>文件有修改（Modified）</td>

</tr>

<tr>

<td style="text-align:center">+M</td>

<td>文件有修改（Modified, Staged）</td>

</tr>

<tr>

<td style="text-align:center">C</td>

<td>文件有冲突（Conflict）</td>

</tr>

<tr>

<td style="text-align:center">D</td>

<td>文件被删除（Deleted）</td>

</tr>

</tbody>

</table>

文件夹目录图标状态的含义如下：

<table>

<thead>

<tr>

<th style="text-align:center">图标</th>

<th>含义</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:center">小红点</td>

<td>目录下至少存在一个删除状态的文件</td>

</tr>

<tr>

<td style="text-align:center">小橙点</td>

<td>目录下至少存在一个冲突状态的文件</td>

</tr>

<tr>

<td style="text-align:center">小蓝点</td>

<td>目录下至少存在一个未追踪状态的文件</td>

</tr>

<tr>

<td style="text-align:center">小绿点</td>

<td>目录下至少存在一个修改状态的文件</td>

</tr>

</tbody>

</table>

如果某一文件存在修改（Modified），可以右键点击此文件，并选择 “与上一版本比较”，则可以查看当前工作区文件与 HEAD 版本的比较。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/git/contextmenu.jpg)

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/git/diff.jpg)

### 文件编辑

存在 Git 仓库时，状态栏会展示此 Git 仓库目前的分支信息。例如，下图表明目前 Git 仓库处于 `v2` 分支。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/git/statusbar.jpg)

同时，编辑文件内容时，将会在所编辑代码左侧实时显示相对于上一版本内容的比较。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/git/linediff.jpg)

样式说明如下：

文件夹目录图标状态的含义如下：

<table>

<thead>

<tr>

<th style="text-align:center">样式</th>

<th>含义</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:center">蓝色线条</td>

<td>此处的代码有变动</td>

</tr>

<tr>

<td style="text-align:center">绿色线条</td>

<td>此处的代码是新增的</td>

</tr>

<tr>

<td style="text-align:center">红色三角箭头</td>

<td>此处有代码被删除</td>

</tr>

</tbody>

</table>

### Windows 风格回车设置

如需忽略 Windows 风格的回车符，可以前往 “设置” - “编辑”，并勾选 “Git 比较文件内容时，忽略 Windows 风格回车符”。

勾选后，在编辑文件进行内容比较时，所有 Windows 风格的回车符将被当作 Unix 风格的回车符对待。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/git/windowsreturnsettings.jpg)

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

[](shortcut.html)[](projectconfig.html)</div>

</div>