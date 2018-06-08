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
*   [HTTP 调用](http.html)
*   [小程序开发助手](mydev.html)
*   [代码片段](minicode.html)
*   [第三方平台](ext.html)
*   [小程序插件开发](plugin.html)
*   [云测试](monkey-test.html)
*   [素材管理](../qcloud/material.html)
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

## 概述

小程序运营者，可以一键授权给第三方平台，通过第三方平台来完成业务。第三方平台在小程序的前后端开发上同直接开发小程序有所区别，其所拥有的各项 API 以及详细说明请查看 [代小程序实现业务](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489144594_DhNoV&token=&lang=zh_CN) ，其余部分请阅读下文。

开发第三方平台小程序具有一定的复杂性，首先需要确认三个概念：

*   open3rd：第三方平台，是小程序官方认可的第三方开发商 [详情](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419318292&token=&lang=zh_CN)
*   3rdMiniProgramAppid：第三方平台申请的并绑定在该平台上的小程序，用于开发小程序模板
*   extAppid：授权给第三方平台的小程序

第三方平台相关的小程序开发需要做一些特殊的处理：

*   小程序模板的开发
*   小程序模板结合 extAppid 的开发调试
*   使用 `directCommit` 直接提交至待审核列表 [详情](#directCommit)

最新版本的开发工具支持第三方平台小程序的开发和预览。

## 创建项目

与开发普通小程序一致，第三方平台开发者填入相关的 3rdMiniProgramAppid ，设定项目名称和选择项目目录即可创建项目。

对于第三方平台小程序，可以在项目页卡查看到相关的 open3rd 信息以及当前的第三方的 3rdMiniProgramAppid ，如若项目配置了相关的 extAppid ，那么项目页卡中也会有相关信息。

![ext](https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/ext.png)

## 小程序模板开发

与开发普通小程序一致，开发者在开发工具上开发好相关的业务逻辑之后，在项目页卡中提交预览既可以在微信中查看小程序的真实表现。

有所不同的是，第三方平台小程序的提交上传是上传至该第三方平台的 open 帐号下的模板草稿箱中，该平台的管理员需要自行对该模板进行相应的设置，更多请参考 [开放平台的文档](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489144594_DhNoV&token=&lang=zh_CN) 。

## extAppid 的开发调试

为了方便第三方平台的开发者引入 extAppid 的开发调试工作，需要引入 `ext.json` 的概念。

`ext.json` 是一个配置文件，放置在小程序项目的根目录下。

以下是一个包含了所有配置选项的 `ext.json` ：

    {
      "extEnable": true,
      "extAppid": "wxf9c4501a76931b33",
      "directCommit": false,
      "ext": {
        "name": "wechat",
        "attr": {
          "host": "open.weixin.qq.com",
          "users": [
            "user_1",
            "user_2"
          ]
        }
      },
      "extPages": {
        "pages/logs/logs": {
          "navigationBarTitleText": "logs"
        }
      },
      "window":{
        "backgroundTextStyle":"light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "Demo",
        "navigationBarTextStyle":"black"
      },
      "tabBar": {
        "list": [{
          "pagePath": "pages/index/index",
          "text": "首页"
        }, {
          "pagePath": "pages/logs/logs",
          "text": "日志"
        }]
      },
      "networkTimeout": {
        "request": 10000,
        "downloadFile": 10000
      }
    }

`ext.json`中的配置字段分为两种

*   特有的字段
*   同 `app.json` 相同的字段

## 特有的字段

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>必填</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>[extEnable](#extenable)</td>

<td>Boolean</td>

<td>是</td>

<td>配置 ext.json 是否生效</td>

</tr>

<tr>

<td>[extAppid](#extappid)</td>

<td>String</td>

<td>是</td>

<td>配置 extAppid</td>

</tr>

<tr>

<td>[ext](#ext)</td>

<td>Object</td>

<td>否</td>

<td>开发自定义的数据字段</td>

</tr>

<tr>

<td>[extPages](#extpages)</td>

<td>String Array</td>

<td>否</td>

<td>单独设置每个页面的 json</td>

</tr>

<tr>

<td>[directCommit](#directCommit)</td>

<td>Boolean</td>

<td>否</td>

<td>是否直接提交到待审核列表</td>

</tr>

</tbody>

</table>

### extEnable

`extEnable` 是一个 `Boolean` 类型的字段，用于规定当前的 `ext.json` 文件是否生效，开发者可以通过修改这个字段来开启和关闭 extAppid 的结合开发。

### extAppid

`extAppid` 是授权调试的 `AppID` ，例如开发者在此处填写的是 `wxf9c4501a76931b33` 那么在 `extEnable` 为真的情况下，后续的开发逻辑都会基于 `wxf9c4501a76931b33` 来运行。

### ext

`ext` 字段是开发自定义的数据字段，在小程序中可以通过 [wx.getExtConfigSync](../api/ext-api.html#wxgetextconfigsync) 或者 [wx.getExtConfig](../api/ext-api.html#wxgetextconfigobject) 获取到这些配置信息。

例如上面的例子中，通过 `wx.getExtConfigSync` 就可以获得 `ext` 字段的所有配置

    {
      "name": "wechat",
      "attr": {
        "host": "open.weixin.qq.com",
        "users": [
          "user_1",
          "user_2"
        ]
      }
    }

### extPages

`extPages` 是一个对象，对象中的每个 `key` 应该是该小程序模板 `app.json` 中定义的页面，每个 `key` 对应的 `value` 是 [page.json](../framework/config.html#page.json) 中所规定的各项配置。

当开发者设置这个配置以后，小程序框架会对应的修改相对应的 `page` 的配置信息。

### directCommit

`directCommit` 是一个 `Boolean` 类型的字段，用于规定当前的上传操作是否是直接上传到 extAppid 的审核列表中。

当 `directCommit` 为 `true` 真时，开发者在工具中的上传操作，会直接上传到对应的 extAppid 的审核列表，第三方平台只需要调用 `https://api.weixin.qq.com/wxa/submit_audit?access_token=TOKEN` 既可以提交审核。更多请参考 [第三方平台文档](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN)

当 `directCommit` 为 `false` 或者没有定义时，开发者在工具中的上传操作，会直接上传到对应的草稿箱中。

_tips: 可以使用工具的命令行接口 或者 http 接口来实现自动化的代码提交审核_

### 同 `app.json` 相同的字段

当 `ext.json` 中的字段同 `app.json` 中一致时，`ext.json` 的字段会覆盖 `app.json` 中的对应字段，例如以下的 `ext.json`

    {
      ········
      "window":{
        "backgroundTextStyle":"light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "ext navigationBarTitleText",
        "navigationBarTextStyle":"black"
      }
    }

那么该小程序最终的 `navigationBarTitleText` 应该是 `ext navigationBarTitleText` 。

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

[](minicode.html)[](plugin.html)</div>

</div>