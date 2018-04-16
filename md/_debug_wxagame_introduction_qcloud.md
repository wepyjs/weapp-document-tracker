<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [小游戏介绍](javascript:;)
    *   [小程序介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
    *   [小游戏介绍](https://mp.weixin.qq.com/debug/wxagame/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)
*   [数据](javascript:;)
    *   [小程序数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html)
    *   [小游戏数据](https://mp.weixin.qq.com/debug/wxagame/analysis/index.html)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title icon_doc"></span>

微信小游戏接入指南

</div>

*   [微信小游戏接入指南](./index.html)
*   [扫码打开小程序接入指南](qrcode.html)
*   [腾讯云支持](qcloud.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [介绍](qcloud.html#介绍)
*   [开发环境](qcloud.html#开发环境)
*   [生产环境](qcloud.html#生产环境)
*   [通过微信公众平台授权登录腾讯云](qcloud.html#通过微信公众平台授权登录腾讯云)
*   [安装开发工具](qcloud.html#安装开发工具)
*   [导入 NodeJS DEMO](qcloud.html#Wafer2 微信小游戏快速开发 Demo - NodeJS)
*   [导入 PHP DEMO](qcloud.html#Wafer2 微信小游戏快速开发 Demo - PHP)
*   [其他](qcloud.html#相关开发文档)

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

腾讯云为开发者提供免费的开发环境和生产环境，更加方便、快速、可靠的构建您的小程序。

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

打开 [微信公众平台](https://mp.weixin.qq.com/index.html) 注册并登录小程序，按如下步骤操作：

*   单击左侧菜单栏中的【设置】
*   单击右侧 Tab 栏中的【开发者工具】
*   单击【腾讯云】，进入腾讯云工具页面，单击【开通】
*   使用小程序绑定的微信扫码即可将小程序授权给腾讯云，开通之后会自动进去腾讯云微信小程序控制台，显示开发环境已开通，此时可以进行后续操作

> **注意：**
> 
> 此时通过小程序开发者工具查看腾讯云状态并不会显示已开通，已开通状态会在第一次部署开发环境之后才会同步到微信开发者工具上。

![进入微信公众平台后台](image/qcloud/1.png)

![开通腾讯云](image/qcloud/2.png)

![腾讯云微信小程序控制台](image/qcloud/3.png)

### 安装开发工具

下载并安装最新版本的 [微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html) ，使用小程序绑定的微信号扫码登录开发者工具。

![微信开发者工具](image/qcloud/4.png)

# 微信小游戏快速开发 Demo - Nodejs

本仓库是最简版的 Wafer2 开发套件，建议配合腾讯云微信小程序（游戏）开发者工具解决方案一起使用。适用于想要使用 Wafer SDK 开发的开发者，Demo 对 SDK 进行了详细的使用和介绍，降低开发者的学习成本。

## 腾讯云一站式部署开通指引

只需要四步即可部署属于自己的小程序(游戏)**开发环境**。

### 一、通过微信公众平台授权登录腾讯云

打开[微信公众平台](https://mp.weixin.qq.com/index.html)注册并登录小程序(游戏)，按如下步骤操作：

注意：在跳转到腾讯云前，请先在微信开放平台选择小程序类目为“游戏”类型

1.  单击左侧菜单栏中的【设置】。
2.  单击右侧 Tab 栏中的【开发者工具】。
3.  单击【腾讯云】，进入腾讯云工具页面，单击【开通】。
4.  使用小程序（游戏）绑定的微信扫码即可将小程序（游戏）授权给腾讯云，开通之后会自动进去腾讯云微信小程序（游戏）控制台，显示开发环境已开通，此时可以进行后续操作。

> **注意：**
> 
> 此时通过小程序（游戏）开发者工具查看腾讯云状态并不会显示已开通，已开通状态会在第一次部署开发环境之后才会同步到微信开发者工具上。

![进入微信公众平台后台](https://mc.qcloudimg.com/static/img/a3ca2891b23cfce7d3678cd05a4e14fe/13.jpg)

![开通腾讯云](https://mc.qcloudimg.com/static/img/53e34b52e098ee3a0a02ecc8fbb68a54/14.jpg)

![腾讯云微信小程序控制台](https://mc.qcloudimg.com/static/img/032d0b2b99dfcfdf4234db911e93b60f/15.png)

### 二、安装开发工具

下载并安装最新版本的[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，使用小程序绑定的微信号扫码登录开发者工具。

![微信开发者工具](https://main.qcloudimg.com/raw/bb57ee98c4ab67864303416fe9ab87f3.jpg)

### 三、下载 Demo

你可以通过两个途径访问 Github 上 `wafer2-game-quickstart-nodejs` 项目下载 Demo 代码：

1.  访问[仓库主页](https://github.com/pxunl/wafer2-game-quickstart-nodejs.git)，单机 `clone or download` 按钮，再单击 `Download ZIP` 下载打包好的 Demo 代码：

    ![下载代码](https://mc.qcloudimg.com/static/img/5b589d4ef12202175304e7c47a920235/11.png)

2.  通过 git clone 下载代码：

        git clone https://github.com/pxunl/wafer2-game-quickstart-nodejs.git

### 四、上传和部署代码

1.  打开第二步安装的微信开发者工具，点击【小程序项目】按钮。

2.  输入小程序(游戏) AppID，项目目录选择上一步下载下来的代码目录，点击确定创建小程序(游戏)项目。

3.  再次点击【确定】进入开发者工具。

    > **注意：**
    > 
    > 目录请选择 `wafer2-game-quickstart-nodejs` 根目录。包含有 `project.config.json`，请不要只选择 `client` 目录！

    ![上传代码](https://main.qcloudimg.com/raw/1c00c367989a6ee5d094427d5bc4ccf2.png)

    ![开发者工具](https://main.qcloudimg.com/raw/5d4ab9c8ba7a678f93df0a841d8b31af.jpg)

4.  打开 Demo 代码中 `server` 目录下的 `config.js` 文件，将其中的 `mysql` 配置项的密码 `pass` 改成你的微信小程序(游戏) AppID，并**保存**。

    ![修改 MySQL 密码](https://main.qcloudimg.com/raw/846bae43fb4e5346de703a9c292349f7.png)

5.  点击界面右上角的【腾讯云】图标，在下拉的菜单栏中选择【上传测试代码】。

    ![上传按钮](https://mc.qcloudimg.com/static/img/52c7ff501a13da3cb327df3f5d1ba284/2.png)

6.  选择【模块上传】并勾选全部选项，然后勾选【部署后自动安装依赖】，点击【确定】开始上传代码。

    ![选择模块](https://mc.qcloudimg.com/static/img/f2e00aecfc06e5b275f204f501b2b848/3.jpg)

    ![上传成功](https://mc.qcloudimg.com/static/img/8038e62426a6b74eb2ddbb3f04b7f093/4.jpg)

7.  上传代码完成之后，点击右上角的【详情】按钮，接着选择【腾讯云状态】即可看到腾讯云自动分配给你的开发环境域名：

    ![查看开发域名](https://mc.qcloudimg.com/static/img/04a97a0551d28a25aa066352e74e0443/8.png)

8.  完整复制（包括 `https://`）开发环境 request 域名，然后在编辑器中打开 `client/config.js` 文件，将复制的域名填入 `host` 中并保存，保存之后编辑器会自动编译小程序(游戏)，左边的模拟器窗口即可实时显示出客户端的 Demo： (注意，如果在真机上调试，请将域名手动写入到微信开放平台对应app的地址配置中，否则需要在客户端开启debug模式才能正常体验)

    ![修改客户端配置](https://mc.qcloudimg.com/static/img/ea2fbd580634be4b514f3afe13113c66/config_url.png)

在模拟器中试玩，看到显示“登录成功”，说明环境ok了，可以开始你的其他开发了。

# 快速开发 Demo - PHP

本仓库是最简版的 Wafer2 开发套件，建议配合腾讯云微信小程序（游戏）开发者工具解决方案一起使用。适用于想要使用 Wafer SDK 开发的开发者，Demo 对 SDK 进行了详细的使用和介绍，降低开发者的学习成本。

## 腾讯云一站式部署开通指引

只需要四步即可部署属于自己的小程序(游戏)**开发环境**。

### 一、通过微信公众平台授权登录腾讯云

打开[微信公众平台](https://mp.weixin.qq.com/index.html)注册并登录小程序(游戏)，按如下步骤操作：

注意：在跳转到腾讯云前，请先在微信开放平台选择小程序类目为“游戏”类型

1.  单击左侧菜单栏中的【设置】。
2.  单击右侧 Tab 栏中的【开发者工具】。
3.  单击【腾讯云】，进入腾讯云工具页面，单击【开通】。
4.  使用小程序（游戏）绑定的微信扫码即可将小程序（游戏）授权给腾讯云，开通之后会自动进去腾讯云微信小程序（游戏）控制台，显示开发环境已开通，此时可以进行后续操作。

> **注意：**
> 
> 此时通过小程序（游戏）开发者工具查看腾讯云状态并不会显示已开通，已开通状态会在第一次部署开发环境之后才会同步到微信开发者工具上。

![进入微信公众平台后台](https://mc.qcloudimg.com/static/img/a3ca2891b23cfce7d3678cd05a4e14fe/13.jpg)

![开通腾讯云](https://mc.qcloudimg.com/static/img/53e34b52e098ee3a0a02ecc8fbb68a54/14.jpg)

![腾讯云微信小程序控制台](https://mc.qcloudimg.com/static/img/032d0b2b99dfcfdf4234db911e93b60f/15.png)

### 二、安装开发工具

下载并安装最新版本的[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，使用小程序绑定的微信号扫码登录开发者工具。

![微信开发者工具](https://main.qcloudimg.com/raw/bb57ee98c4ab67864303416fe9ab87f3.jpg)

### 三、下载 Demo

你可以通过两个途径访问 Github 上 `wafer2-quickstart-php` 项目下载 Demo 代码：

1.  访问[仓库主页](https://github.com/tencentyun/wafer2-quickstart-php)，单机 `clone or download` 按钮，再单击 `Download ZIP` 下载打包好的 Demo 代码：

    ![下载代码](https://mc.qcloudimg.com/static/img/5b589d4ef12202175304e7c47a920235/11.png)

2.  通过 git clone 下载代码：

        git clone https://github.com/tencentyun/wafer2-quickstart-php.git

### 四、上传和部署代码

1.  打开第二步安装的微信开发者工具，点击【小程序项目】按钮。

2.  输入小程序(游戏) AppID，项目目录选择上一步下载下来的代码目录，点击确定创建小程序(游戏)项目。

3.  再次点击【确定】进入开发者工具。

    > **注意：**
    > 
    > 目录请选择 `wafer2-quickstart-php` 根目录。包含有 `project.config.json`，请不要只选择 `client` 目录！

    ![上传代码](https://main.qcloudimg.com/raw/0438de1b7d17918115926ac699cf09e6.png)

    ![开发者工具](https://mc.qcloudimg.com/static/img/dddafb0f88489d0de7010321e6b48071/3.png)

4.  打开 Demo 代码中 `server` 目录下的 `config.php` 文件，将其中的 `mysql` 配置项的密码 `pass` 改成你的微信小程序(游戏) AppID，并**保存**。

    ![修改 MySQL 密码](https://mc.qcloudimg.com/static/img/64ec8f25eec2e9ac74838960a25cbb82/musql_passwd.png)

5.  点击界面右上角的【腾讯云】图标，在下拉的菜单栏中选择【上传测试代码】。

    ![上传按钮](https://mc.qcloudimg.com/static/img/52c7ff501a13da3cb327df3f5d1ba284/2.png)

6.  选择【模块上传】并勾选全部选项，然后勾选【部署后自动安装依赖】，点击【确定】开始上传代码。

    ![选择模块](https://mc.qcloudimg.com/static/img/f2e00aecfc06e5b275f204f501b2b848/3.jpg)

    ![上传成功](https://mc.qcloudimg.com/static/img/8038e62426a6b74eb2ddbb3f04b7f093/4.jpg)

7.  上传代码完成之后，点击右上角的【详情】按钮，接着选择【腾讯云状态】即可看到腾讯云自动分配给你的开发环境域名：

    ![查看开发域名](https://mc.qcloudimg.com/static/img/04a97a0551d28a25aa066352e74e0443/8.png)

8.  完整复制（包括 `https://`）开发环境 request 域名，然后在编辑器中打开 `client/config.js` 文件，将复制的域名填入 `host` 中并保存，保存之后编辑器会自动编译小程序(游戏)，左边的模拟器窗口即可实时显示出客户端的 Demo： (注意，如果在真机上调试，请将域名手动写入到微信开放平台对应app的地址配置中，否则需要在客户端开启debug模式才能正常体验)

    ![修改客户端配置](https://mc.qcloudimg.com/static/img/ea2fbd580634be4b514f3afe13113c66/config_url.png)

在模拟器中试玩，看到显示“登录成功”，说明环境ok了，可以开始你的其他开发了。

### 相关开发文档

我们还提供了服务端、客户端的 Demo、SDK 的具体文档：

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
*   [Wafer2 服务端 Demo 文档](server/README.md)
*   [Wafer2 服务端 Demo 工具文档](server/tools.md)
*   [Wafer2 客户端 Demo 文档](client/README.md)
*   [Wafer2 服务端 SDK 使用文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/README.md)
*   [Wafer2 服务端 SDK API 文档](https://github.com/tencentyun/wafer2-node-sdk/blob/master/API.md)
*   [Wafer2 客户端 SDK 使用文档](https://github.com/tencentyun/wafer2-client-sdk/blob/master/README.md)

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
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9&)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](qrcode.html#发布)[](qcloud.html#介绍)</div>

</div>