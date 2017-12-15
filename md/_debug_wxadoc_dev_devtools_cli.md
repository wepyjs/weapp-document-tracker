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

开发者工具提供了命令行与 HTTP 服务两种接口供外部调用，开发者可以通过命令行或 HTTP 请求指示工具进行登录、预览、上传等操作。

## 命令行

通过命令行调用安装完成的工具可执行文件，完成登录、预览、上传、自动化测试等操作。调用返回码为 0 时代表正常，为 -1 时错误。

命令行工具所在位置：

macOS: `<安装路径>/Contents/Resources/app.nw/bin/cli`

Windows: `<安装路径>/cli.bat`

### 1\. 命令行启动工具

**`-o, --open [projectpath]`**: 打开工具，如果不带 projectpath，只是打开工具。如果带 project path，则打开路径中的项目，每次执行都会自动编译刷新，并且自动打开模拟器和调试器。projectpath 不能是相对路径。项目路径中必须含正确格式的 project.config.json 且其中有 appid 和 projectname 字段。

示例：

    # 打开工具
    cli -o
    # 打开路径 /Users/username/demo 下的项目
    cli -o base64@/Users/username/demo

### 2\. 命令行登录

命令行提供两种登录方式：一是将登录二维码转成 base64 给用户，让用户自己集成到自己系统中使用；二是将二维码打印在命令行中。

**`-l, --login`**: 启动登录逻辑。

**`--login-qr-output [format[@path]]`**: 指定二维码输出形式，format 可选值包括 terminal（命令行输出）, base64, image。如果有填 path，表示结果输出到指定路径的文件中。如果没填 path，表示将结果输出到命令行。不使用此选项或使用了但没有填 format 的话则默认为命令行打印。

示例：

    # 登录，在终端中打印登录二维码
    cli -l
    # 登录，在终端中打印登录 base64 形式的二维码
    cli -l --login-qr-output base64
    # 登录，二维码转成 base64 并存到文件 /Users/username/code.txt 
    cli -l --login-qr-output base64@/Users/username/code.txt

### 3\. 命令行提交预览

预览时必须处于登录状态，如果没有登录，会提示需先登录。预览的二维码可命令行打印也可以转成 base64。ES6 等项目配置从 project.config.json 读。

**`-p, --preview <project_root>`**: 预览代码，project_root 指定项目根路径。

**`--preview-qr-output [format[@path]]`**: 指定二维码输出形式，语义同登录用的选项 --login-qr-output。

示例：

    # 预览，在终端中打印登录二维码
    cli -p /Users/username/demo
    # 预览，二维码转成 base64 并存到文件 /Users/username/code.txt
    cli -p /Users/username/demo --preview-qr-output base64@/Users/username/code.txt

### 4\. 命令行上传代码

上传代码时必须处于登录状态，如果没有登录，会提示需先登录。

上传代码需要的信息包括项目根目录、版本号、以及可选的版本备注。

**`-u, --upload <version@project_root>`**: 上传代码，version 指定版本号，project_root 指定项目根路径。

**`--upload-desc <desc>`**: 上传代码时的备注。

示例：

    # 上传路径 /Users/username/demo 下的项目，指定版本号为 1.0.0，版本备注为 initial release
    cli -u 1.0.0@/Users/username/demo --upload-desc 'initial release'

### 5\. 支持自动化测试

**`-t, --test <project_root>`**: 提交自动化测试，project_root 指定项目根路径。

示例：

    # 提交测试路径 /Users/username/demo 下的项目
    cli -t /Users/username/demo

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

[](different.html)[](http.html)</div>

</div>