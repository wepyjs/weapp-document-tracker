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

## 界面

## 启动页

### 登录页

在登录页，可以使用微信扫码登陆开发者工具，开发者工具将使用这个微信帐号的信息进行小程序的开发和调试。

![登录](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/login.png)

### 模式选择

开发者工具提供两种开发模式的选择。

1.  公众号网页调试。选择公众号网页调试，将直接进入公众号网页项目调试界面，在地址栏输入 URL，即可调试该网页的微信授权以及微信 JS-SDK 功能。
2.  小程序调试。选择小程序调试，将进入小程序本地项目管理页，可以新建、删除本地的项目，或者选择进入已存在的本地项目。

![模式选择](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/mode.png)

### 新建项目

当符合以下条件时，可以在本地创建一个小程序项目

1.  需要一个小程序的 [AppID](../#1-获取微信小程序的-appid)；如没有 AppID，可以选择体验模式，但**体验模式无法进行代码真机预览和上传等操作，部分 API 无法正常调用**；
2.  登录的微信号需要是该 AppID 的开发者；
3.  需要选择一个空目录，或者选择的非空目录下存在 [`app.json`](../framework/config.html) 或者 `project.config.json`。当选择空目录时，可以选择是否在该目录下生成一个简单的项目。

![新建项目](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/addproject.png)

### 管理项目

对本地项目进行删除和批量删除

![管理项目](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/projectmanage.png)

## 主界面

开发者工具主界面，从上到下，从左到右，分别为：菜单栏、工具栏、模拟器、编辑器、调试器 五大部分。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/parts.png)

### 菜单栏

微信web开发者工具

> 切换账号：快速切换登录用户
> 
> 关于：关于开发者工具
> 
> 检查更新：检查版本更新
> 
> 开发者论坛：前往[开发者论坛](https://developers.weixin.qq.com/)
> 
> 开发者文档：前往开发者文档
> 
> **调试：调试开发者工具、调试编辑器；如果遇到疑似开发者工具或者编辑器的 bug，可以打开调试工具查看是否有出错日志，欢迎在论坛上反馈相关问题**
> 
> 更换开发模式：快速切换公众号网页调试和小程序调试
> 
> 退出：退出开发者工具

项目

> 新建项目：快速新建项目
> 
> 打开最近：可以查看最近打开的项目列表，并选择是否进入对应项目
> 
> 查看所有项目：新窗口打开启动页的项目列表页
> 
> 关闭当前项目：关闭当前项目，回到启动页的项目列表页

文件

> 新建文件
> 
> 保存
> 
> 保存所有
> 
> 关闭文件

编辑：可以查看编辑相关的操作和快捷键

工具

> 编译：编译当前小程序项目
> 
> 刷新：与编译的功能一致，由于历史原因保留对应的快捷键 ctrl(⌘) + R
> 
> 编译配置：可以选择普通编译或自定义编译条件
> 
> 前后台切换：模拟客户端小程序进入后台运行和返回前台的操作
> 
> 清除缓存：清除文件缓存、数据缓存、以及授权数据

界面：控制主界面窗口模块的显示与隐藏

设置：

> 外观设置：控制编辑器的配色主题、字体、字号、行距
> 
> 编辑设置：控制文件保存的行为，编辑器的表现
> 
> 代理设置：选择直连网络、系统代理和手动设置代理
> 
> 通知设置：设置是否接受某种类型的通知

### 工具栏

点击用户头像可以打开个人中心，在这里可以便捷的切换用户和查看开发者工具收到的消息。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/noticecenter.png)

用户头像右侧是控制主界面模块显示/隐藏的按钮。至少需要有一个模块显示。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/showandhide.gif)

工具栏中间，可以选择普通编译，也可以新建并选择自定义条件进行编译和预览。

通过切后台按钮，可以模拟小程序进入后台的情况

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/background.png)

工具栏上提供了清缓存的快速入口。可以便捷的清除工具上的文件缓存、数据缓存、还有后台的授权数据，方便开发者调试。

工具栏右侧是开发辅助功能的区域，在这里可以上传代码、申请测试、上传腾讯云、查看项目信息

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/righttools.png)

### 模拟器

模拟器可以模拟小程序在微信客户端的表现。小程序的代码通过编译后可以在模拟器上直接运行。

开发者可以选择不同的设备，也可以添加自定义设备来调试小程序在不同尺寸机型上的适配问题。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/device.png)

在模拟器底部的状态栏，可以直观地看到当前运行小程序的场景值，页面路径及页面参数

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

[](devtools.html)[](page.html#启动页)</div>

</div>