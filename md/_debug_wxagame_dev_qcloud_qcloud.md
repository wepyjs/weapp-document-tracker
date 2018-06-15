<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小游戏开发](javascript:;)
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

微信小游戏开发文档

</div>

*   [教程](../tutorial/ad/banner-ad.html)
*   [API](../document/render/canvas/wx.createCanvas.html)
*   [工具](../devtools/devtools.html)
*   [腾讯云支持](qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [介绍](qcloud.html#介绍)
*   [开发环境](qcloud.html#开发环境)
*   [生产环境](qcloud.html#生产环境)
*   [通过微信公众平台授权登录腾讯云](qcloud.html#通过微信公众平台授权登录腾讯云)
*   [安装开发工具](qcloud.html#安装开发工具)
*   [导入 NodeJS DEMO](qcloud.html#导入-NodeJS-DEMO-和配置)
*   [导入 PHP DEMO](qcloud.html#导入-PHP-DEMO-和配置)
*   [其他](qcloud.html#其他具体开发文档)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

### 介绍

腾讯云为开发者提供免费的开发环境和生产环境，更加方便、快速、可靠的构建你的小程序。

目前服务端支持 NodeJS 和 PHP 两种语言,开发者可以使用开发者工具同时进行服务端和小程序的开发。

### 开发环境

*   免费使用
*   自动分配测试用二级域名：xxxxxxx.qcloud.la
*   自动部署免费 HTTPS
*   仅可用于线上调试，不可发布
*   代码部署、运行和数据库与生产环境完全分开
*   与微信开发工具打通，可一键部署、调试、重启和恢复代码

### 生产环境

*   免费使用
*   用户需购买或使用已有的腾讯云域名
*   自动部署免费 HTTPS
*   用于线上发布，不可调试
*   使用微信开发工具上传代码，在腾讯云控制台操作部署，上传和发布分离，降低误操作风险

### 通过微信公众平台授权登录腾讯云

打开 [微信公众平台](https://mp.weixin.qq.com) 注册并登录小程序，按如下步骤操作：

*   单击左侧菜单栏中的【设置】
*   单击右侧 Tab 栏中的【开发者工具】
*   单击【腾讯云】，进入腾讯云工具页面，单击【开通】
*   使用小程序绑定的微信扫码即可将小程序授权给腾讯云，开通之后会自动进去腾讯云微信小程序控制台，显示开发环境已开通，此时可以进行后续操作

> **注意：**
> 
> 此时通过小程序开发者工具查看腾讯云状态并不会显示已开通，已开通状态会在第一次部署开发环境之后才会同步到微信开发者工具上。

![进入微信公众平台后台](../image/qcloud/1.png)

![开通腾讯云](../image/qcloud/2.png)

![腾讯云微信小程序控制台](../image/qcloud/3.png)

### 安装开发工具

下载并安装最新版本的 [微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html) ，使用小程序绑定的微信号扫码登录开发者工具。

![微信开发者工具](../image/qcloud/4.png)

### 导入 NodeJS DEMO 和配置

1.  打开第二步安装的微信开发者工具，点击【小程序项目】按钮。

2.  输入小程序 AppID，项目目录选择一个 **空的目录** ，接着选择【建立腾讯云 Node.js 启动模板】，点击确定创建小程序项目。

    ![微信开发者工具](../image/qcloud/5.png)

3.  安装依赖

    > 为方便本地调试，建议您在本地安装依赖。你也可以跳过这步直接使用开发者工具的“腾讯云”菜单中的“安装依赖”直接在线上安装依赖。

    在您刚刚选择的目录打开 CMD 安装依赖：

        cd server && npm install

    ![安装依赖](../image/qcloud/6.png)

4.  点击界面右上角的【腾讯云】图标，在下拉的菜单栏中选择【上传测试代码】。

    ![上传按钮](../image/qcloud/7.png)

5.  首次使用推荐使用，选择【模块上传】并勾选全部选项，然后勾选【部署后自动安装依赖】，点击【确定】开始上传代码。后续修改服务端代码后，推荐选择智能上传，工具仅仅上传有修改过的代码。

    ![选择模块](../image/qcloud/8.png)

    ![上传成功](../image/qcloud/9.png)

6.  上传代码完成之后，点击右上角的【详情】按钮，接着选择【腾讯云状态】即可看到腾讯云自动分配给你的开发环境域名：

    ![查看开发域名](../image/qcloud/10.png)

7.  如果当前小程序是首次使用腾讯云小程序服务，需要完整复制（包括 `https://`）开发环境 request 域名，然后在编辑器中打开 `client/config.js` 文件，将复制的域名填入 `host` 中并保存，保存之后编辑器会自动编译小程序，左边的模拟器窗口即可实时显示出客户端的 Demo：

    ![修改客户端配置](../image/qcloud/11.png)

8.  在模拟器中点击【登录】，看到显示“登录成功”，即为开通完成，可以开始你的其他开发了。

    ![登录测试](../image/qcloud/12.png)

### 导入 PHP DEMO 和配置

1.  打开第二步安装的微信开发者工具，点击【小程序项目】按钮。

    **tips:需要注意的是，如果当前小程序已经开通了 NodeJS 环境，需要点击工具右上角详情按钮，选择腾讯云状态，点击切换语言**

    ![微信开发者工具](../image/qcloud/changelanguage.png)

    **在腾讯云管理后台中可以选择切换语言环境**

    ![微信开发者工具](../image/qcloud/changelanguage2.png)

2.  输入小程序 AppID，项目目录选择一个**空的目录**，接着选择【建立腾讯云 PHP 启动模板】，点击确定创建小程序项目。

    ![微信开发者工具](../image/qcloud/13.png)

3.  再次点击【确定】进入开发者工具。

    ![开发者工具](../image/qcloud/14.png)

4.  点击界面右上角的【腾讯云】图标，在下拉的菜单栏中选择【上传测试代码】。

    ![上传按钮](../image/qcloud/15.png)

5.  上传代码完成之后，点击右上角的【详情】按钮，接着选择【腾讯云状态】即可看到腾讯云自动分配给你的开发环境域名。

    ![查看开发域名](../image/qcloud/10.png)

6.  完整复制（包括 `https://`）开发环境 request 域名，然后在编辑器中打开 `client/config.js` 文件，将复制的域名填入 `host` 中并保存，保存之后编辑器会自动编译小程序，左边的模拟器窗口即可实时显示出客户端的 Demo。

    ![修改客户端配置](../image/qcloud/11.png)

7.  在模拟器中点击【登录】，看到显示“登录成功”，即为开通完成，可以开始你的其他开发了。

    ![登录测试](../image/qcloud/12.png) ```

### 其他具体开发文档

服务端、客户端的 Demo、SDK 的具体文档：

*   [开发环境和生产环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%92%8C%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83)
*   [自行部署](https://github.com/tencentyun/wafer2-startup/wiki/%E8%87%AA%E8%A1%8C%E9%83%A8%E7%BD%B2)
*   [一站式部署](https://github.com/tencentyun/wafer2-startup/blob/master/README.md)
*   [常见问题](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
    *   [如何部署代码到开发环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E4%BB%A3%E7%A0%81%E5%88%B0%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
    *   [如何重启服务器](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E9%87%8D%E5%90%AF%E6%9C%8D%E5%8A%A1%E5%99%A8)
    *   [如何恢复初始化环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E6%81%A2%E5%A4%8D%E5%88%9D%E5%A7%8B%E5%8C%96%E7%8E%AF%E5%A2%83)
    *   [如何远程调试后台代码](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E8%BF%9C%E7%A8%8B%E8%B0%83%E8%AF%95%E5%90%8E%E5%8F%B0%E4%BB%A3%E7%A0%81)
    *   [如何查看后台日志](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E5%90%8E%E5%8F%B0%E6%97%A5%E5%BF%97)
    *   [如何修改数据库密码](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%86%E7%A0%81)
    *   [如何新建和修改数据库的库表](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E6%96%B0%E5%BB%BA%E5%92%8C%E4%BF%AE%E6%94%B9%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%BA%93%E8%A1%A8)
    *   [如何上传图片](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87)
    *   [如何部署 Demo 到自己的服务器](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2-demo-%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8)
    *   [如何快速新建路由](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E5%BF%AB%E9%80%9F%E6%96%B0%E5%BB%BA%E8%B7%AF%E7%94%B1)
    *   [微信后台如何配置客服消息推送接口](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%BE%AE%E4%BF%A1%E5%90%8E%E5%8F%B0%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%9C%8D%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%E6%8E%A5%E5%8F%A3)
    *   [如何使用服务端 SDK 连接和操作数据库](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8A%A1%E7%AB%AF-sdk-%E8%BF%9E%E6%8E%A5%E5%92%8C%E6%93%8D%E4%BD%9C%E6%95%B0%E6%8D%AE%E5%BA%93)
    *   [本地如何搭建开发环境](https://github.com/tencentyun/wafer2-startup/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#%E6%9C%AC%E5%9C%B0%E5%A6%82%E4%BD%95%E6%90%AD%E5%BB%BA%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
*   [服务端 Demo 文档](server/README.md)
*   [服务端 Demo 工具文档](server/tools.md)
*   [客户端 Demo 文档](client/README.md)
*   [服务端 SDK 使用文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/README.md)
*   [服务端 SDK API 文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/API.md)
*   [客户端 SDK 使用文档](https://github.com/tencentyun/wafer2-client-sdk/blob/master/README.md)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](../devtools/download.html)</div>

</div>