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

### 快捷键

<table>

<thead>

<tr>

<th>Mac OS 快捷键</th>

<th>Windows 快捷键</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>⌘ + Q</td>

<td></td>

<td>退出开发者工具</td>

</tr>

<tr>

<td>⇧ + ⌘ + N</td>

<td>shift + ctrl + N</td>

<td>新建项目</td>

</tr>

<tr>

<td>⇧ + ⌘ + W</td>

<td>shift + ctrl + W</td>

<td>关闭当前项目</td>

</tr>

<tr>

<td>**文件**</td>

<td></td>

<td></td>

</tr>

<tr>

<td>⌘ + N</td>

<td>ctrl + N</td>

<td>新建文件</td>

</tr>

<tr>

<td>⌘ + S</td>

<td>ctrl + S</td>

<td>保存文件</td>

</tr>

<tr>

<td>⇧ + ⌘ + S</td>

<td>shift + ctrl + S</td>

<td>保存所有文件</td>

</tr>

<tr>

<td>⌘ + W</td>

<td>ctrl + W</td>

<td>关闭当前文件</td>

</tr>

<tr>

<td>**编辑**</td>

<td></td>

<td></td>

</tr>

<tr>

<td>⌘ + Z</td>

<td>ctrl + Z</td>

<td>撤销</td>

</tr>

<tr>

<td>⇧ + ⌘ + Z</td>

<td>shift + ctrl + Z</td>

<td>重做</td>

</tr>

<tr>

<td>⌘ + C</td>

<td>ctrl + C</td>

<td>复制</td>

</tr>

<tr>

<td>⌘ + X</td>

<td>ctrl + X</td>

<td>剪切</td>

</tr>

<tr>

<td>⌘ + V</td>

<td>ctrl + V</td>

<td>粘贴</td>

</tr>

<tr>

<td>⌘ + [</td>

<td>ctrl + [</td>

<td>代码左缩进</td>

</tr>

<tr>

<td>⌘ + ]</td>

<td>ctrl + ]</td>

<td>代码右缩进</td>

</tr>

<tr>

<td>⇧ + ⌥ + F</td>

<td>shift + alt + F</td>

<td>格式化代码</td>

</tr>

<tr>

<td>⌥ + ⬆</td>

<td>alt + ⬆</td>

<td>代码上移一行</td>

</tr>

<tr>

<td>⌥ + ⬇</td>

<td>alt + ⬆</td>

<td>代码上移一行</td>

</tr>

<tr>

<td>⇧ + ⌥ + ⬆</td>

<td>shift + alt + ⬆</td>

<td>复制并向上粘贴</td>

</tr>

<tr>

<td>⇧ + ⌥ + ⬇</td>

<td>shift + alt + ⬆</td>

<td>复制并向下粘贴</td>

</tr>

<tr>

<td>⌘ + P</td>

<td>ctrl + P</td>

<td>跳到文件</td>

</tr>

<tr>

<td>⌘ + E</td>

<td>ctrl + E</td>

<td>跳到最近文件</td>

</tr>

<tr>

<td>⌘ + ⌥ + ⬅</td>

<td>ctrl + alt + ⬅</td>

<td>打开当前文件编辑器左边的文件</td>

</tr>

<tr>

<td>⌘ + ⌥ + ➡</td>

<td>ctrl + alt + ➡</td>

<td>打开当前文件编辑器右边的文件</td>

</tr>

<tr>

<td>⌘ + F</td>

<td>ctrl + F</td>

<td>文件内搜索</td>

</tr>

<tr>

<td>⇧ + ⌘ + F</td>

<td>shift + ctrl + F</td>

<td>项目内搜索</td>

</tr>

<tr>

<td>⇧ + ⌘ + R</td>

<td>shift + ctrl + R</td>

<td>焦点在编辑器内，表示替换</td>

</tr>

<tr>

<td>**工具**</td>

<td></td>

<td></td>

</tr>

<tr>

<td>⌘ + B</td>

<td>ctrl + B</td>

<td>编译项目</td>

</tr>

<tr>

<td>⌘ + R</td>

<td>ctrl + R</td>

<td>焦点在编辑器外，编译项目</td>

</tr>

<tr>

<td>⇧ + ⌘ + P</td>

<td>shift + ctrl + P</td>

<td>预览代码</td>

</tr>

<tr>

<td>⇧ + ⌘ + U</td>

<td>shift + ctrl + U</td>

<td>上传代码</td>

</tr>

<tr>

<td>**界面**</td>

<td></td>

<td></td>

</tr>

<tr>

<td>⌘ + ,</td>

<td>ctrl + ,</td>

<td>打开设置窗口</td>

</tr>

</tbody>

</table>

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

[](project.html#腾讯云状态)[](edit.html)</div>

</div>