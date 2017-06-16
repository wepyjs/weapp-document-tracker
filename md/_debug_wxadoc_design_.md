<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:;?t=2017118 "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017118)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017118)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=2017118)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=2017118)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017118)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title icon_design"></span>

微信小程序设计文档

</div>

*   [微信小程序设计指南](./?t=2017118)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_design"></span><span class="s_title_2">设计文档首页</span></a></div>

<nav role="navigation">

*   [友好礼貌](./?t=2017118#友好礼貌)
    *   [重点突出](./?t=2017118#重点突出)
    *   [流程明确](./?t=2017118#流程明确)
*   [清晰明确](./?t=2017118#清晰明确)
    *   [导航明确，来去自如](./?t=2017118#导航明确，来去自如)
    *   [减少等待，反馈及时](./?t=2017118#减少等待，反馈及时)
    *   [异常可控，有路可退](./?t=2017118#异常可控，有路可退)
*   [便捷优雅](./?t=2017118#便捷优雅)
    *   [减少输入](./?t=2017118#减少输入)
    *   [避免误操作](./?t=2017118#避免误操作)
    *   [利用接口提升性能](./?t=2017118#利用接口提升性能)
*   [统一稳定](./?t=2017118#统一稳定)
*   [视觉规范](./?t=2017118#视觉规范)
    *   [字体规范](./?t=2017118#字体规范)
    *   [列表视觉规范](./?t=2017118#列表视觉规范)
    *   [表单输入视觉规范](./?t=2017118#表单输入视觉规范)
    *   [按钮使用原则](./?t=2017118#按钮使用原则)
    *   [图标使用原则](./?t=2017118#图标使用原则)
*   [资源下载](./?t=2017118#资源下载)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 概要

基于微信小程序轻快的特点，我们拟定了小程序界面设计指南和建议。 设计指南建立在充分尊重用户知情权与操作权的基础之上。旨在微信生态体系内，建立友好、高效、一致的用户体验，同时最大程度适应和支持不同需求，实现用户与小程序服务方的共赢。

## 友好礼貌

为了避免用户在微信中使用小程序服务时，注意力被周围复杂环境干扰，小程序在设计时应该注意减少无关的设计元素对用户目标的干扰，礼貌地向用户展示程序提供的服务，友好地引导用户进行操作。

### 重点突出

每个页面都应有明确的重点，以便于用户每进入一个新页面的时候都能快速地理解页面内容。在确定了重点的前提下，应尽量避免页面上出现其它与用户的决策和操作无关的干扰因素。

#### 反例示意

此页面的主题是查询，却添加了诸多与查询不相关的业务入口，与用户的目标无关，易造成用户的迷失。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/1emphasis.dont.png?t=2017118)

#### 纠正示意

去掉任何与用户目标不相关的内容，明确页面主题，在技术和页面控件允许的前提下提供有助于用户决策和操作的帮助内容，比如最近搜索词等。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/1emphasis.do.png?t=2017118)

#### 反例示意

操作没有主次，让用户无从选择。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/1emphasis.dont2.png?t=2017118)

#### 纠正示意

首先要避免并列过多操作让用户选择，在不得不并列多个操作时，需区分操作主次，减轻用户的选择难度。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/1emphasis.do2.png?t=2017118)

### 流程明确

为了让用户顺畅地使用页面，在用户进行某一个操作流程时，应避免出现用户目标流程之外的内容而打断用户。

#### 反例示意

用户本打算进行搜索，在进入页面时却被突如其来的模态抽奖框所打断；对于抽奖没有兴趣的用户是非常不友好的干扰； 而即便有部分用户确实被“诱人”的抽奖活动所吸引，离开主流程去抽奖之后可能就遗忘了原本的目标，进而失去了对产品真正价值的利用和认识。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/2flow.dont.png?t=2017118)

## 清晰明确

一旦用户进入我们的小程序页面，我们就有责任和义务清晰明确地告知用户身在何处、又可以往何处去，确保用户在页面中游刃有余地穿梭而不迷路，这样才能为用户提供安全且愉悦的使用体验。

### 导航明确，来去自如

导航是确保用户在网页中浏览跳转时不迷路的最关键因素。导航需要告诉用户，当前在哪，可以去哪，如何回去等问题。首先在微信系统内的所有小程序的全部页面，均会自带有微信提供的导航栏，统一解决当前在哪，如何回去的问题。在微信层级导航保持体验一致，有助于用户在微信内形成统一的体验和交互认知，无需在各小程序和其他微信页面的切换中新增学习成本或改变使用习惯。

#### 微信导航栏

微信导航栏，直接继承于客户端，除导航栏颜色之外，开发者无需亦不可对其中的内容进行自定义。但开发者需要规定小程序各个页面的跳转关系，让导航系统能够以合理的方式工作。

微信导航栏分为导航区域、标题区域以及操作区域。其中导航区控制程序页面进程。目前导航栏分深浅两种基本配色。

#### 导航区（iOS）

微信进入小程序的第一个页面，导航区通常只有一个操作——“返回”，即返回进入小程序前的微信页面。 进入小程序后的次级页面，导航区的操作为——“返回” 和“关闭”。 “返回”，即返回上一级小程序界面或微信界面。“关闭”，即在当前界面直接退出小程序，回到进入小程序前的微信页面。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/3navigation.iOS.png?t=2017118)

#### 导航区（Android）

导航区仅存在唯一操作——直接退出小程序，回到进入小程序前的微信或系统桌面，安卓手机自带的硬件返回键执行返回上一级页面的操作。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/3navigation.android.png?t=2017118)

安卓导航存在一类特殊情况：当用户通过操作区的菜单将小程序添加至安卓桌面，并从安卓桌面打开小程序时，小程序的首页，不展示导航按钮。仅展示小程序标题和操作区。小程序次级页面，导航区只有返回上一级页面的操作，而点击安卓手机自带的硬件返回键也起到相同作用。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/3navigation.android.special.png?t=2017118)

#### 微信导航栏自定义颜色规则（iOS和Android）

小程序导航栏支持基本的背景颜色自定义功能，选择的颜色需要在满足可用性前提下，和谐搭配微信提供的两套主导航栏图标。建议参考以下选色效果：

选色方案示例

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/3navigation.color.png?t=2017118)

#### 页面内导航

开发者可根据自身功能设计需要在页面内添加自有导航。并保持不同页面间导航一致。但是受限于手机屏幕尺寸的限制，小程序页面的导航应尽量简单，若仅为一般线性浏览的页面建议仅使用微信导航栏即可。

开发者可选择小程序页面添加标签分页（Tab）导航。标签分页栏可固定在页面顶部或者底部，便于用户在不同的分页间做切换。标签数量不得少于2个，最多不得超过5个，为确保点击区域，建议标签数量不超过4项。一个页面也不应出现一组以上的标签分页栏。

其中小程序首页可选择微信提供的原生底部标签分页样式，该样式仅供小程序首页使用。开发时可自定义图标样式、标签文案以及文案颜色等，具体设置项如图标尺寸等参考可参考开发文档和WeUI基础控件库。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/3navigation.page.bottom.png?t=2017118)

顶部标签分页栏颜色可自定义。在自定义颜色选择中，务必注意保持分页栏标签的可用性、可视性和可操作性。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/3navigation.page.top.png?t=2017118)

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/3navigation.page.top.dont.png?t=2017118)

### 减少等待，反馈及时

页面的过长时间的等待会引起用户的不良情绪，使用微信小程序项目提供的技术已能很大程度缩短等待时间。即便如此，当不可避免的出现了加载和等待的时候，需要予以及时的反馈以舒缓用户等待的不良情绪。

#### 启动页加载

小程序启动页是小程序在微信内一定程度上展现品牌特征的页面之一。本页面将突出展示小程序品牌特征和加载状态。启动页除品牌标志（Logo）展示外，页面上的其他所有元素如加载进度指示，均由微信统一提供且不能更改，无需开发者开发。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/4miniapploading.jpg?t=2017118)

#### 页面下拉刷新加载

在微信小程序内，微信提供标准的页面下拉刷新加载能力和样式，开发者无需自行开发。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/4pull-to-refresh.png?t=2017118)

#### 页面内加载反馈

开发者可在小程序里自定义页面内容的加载样式。建议不管是使用在局部还是全局加载，自定义加载样式都应该尽可能简洁，并使用简单动画告知用户加载过程。 开发者也可以使用微信提供的，统一的页面加载样式，如图中例所示。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/4loading.page.feedback.png?t=2017118)

#### 模态加载

模态的加载样式将覆盖整个页面的，由于无法明确告知具体加载的位置或内容将可能引起用户的焦虑感，因此应谨慎使用。除了在某些全局性操作下不要使用模态的加载。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/4loading.png?t=2017118)

#### 局部加载反馈

局部加载反馈即只在触发加载的页面局部进行反馈，这样的反馈机制更加有针对性，页面跳动小，是微信推荐的反馈方式。例如：

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/4loading.feedback.png?t=2017118)

#### 加载反馈注意事项

*   若载入时间较长,应提供取消操作,并使用进度条显示载入的进度。
*   载入过程中,应保持动画效果 ; 无动画效果的加载很容易让人产生该界面已经卡死的错觉。
*   不要在同一个页面同时使用超过1个加载动画。

#### 结果反馈

除了在用户等待的过程中需予以及时反馈外，对操作的结果也需要予以明确反馈。根据实际情况，可选择不同的结果反馈样式。对于页面局部的操作，可在操作区域予以直接反馈，对于页面级操作结果，可使用弹出式提示（Toast）、模态对话框或结果页面展示。

#### 页面局部操作结果反馈

对于页面局部的操作，可在操作区域予以直接反馈，例如点击多选控件前后如下图。对于常用控件，微信设计中心将提供控件库，其中的控件都已提供完整操作反馈。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/5local.feedback.png?t=2017118)

#### 页面全局操作结果——弹出式提示（Toast）

弹出式提示（Toast）适用于轻量级的成功提示，1.5秒后自动消失，并不打断流程，对用户影响较小，适用于不需要强调的操作提醒，例如成功提示。特别注意该形式不适用于错误提示，因为错误提示需明确告知用户，因而不适合使用一闪而过的弹出式提示。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/5global.toast.png?t=2017118)

#### 页面全局操作结果——模态对话框

对于需要用户明确知晓的操作结果状态可通过模态对话框来提示，并可附带下一步操作指引。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/5global.popup.png?t=2017118)

#### 页面全局操作结果—结果页

对于操作结果已经是当前流程的终结的情况，可使用操作结果页来反馈。这种方式最为强烈和明确的告知用户操作已经完成，并可根据实际情况给出下一步操作的指引。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/5global.result.png?t=2017118)

### 异常可控，有路可退

在设计任何的任务和流程时，异常状态和流程往往容易被忽略，而这些异常场景往往是用户最为沮丧和需要帮助的时候，因此需要格外注意异常状态的设计，在出现异常时予以用户必要的状态提示，并告知解决方案，使其有路可退。

要杜绝异常状态下，用户莫名其妙又无处可去，停滞在某一个页面的情况。上文中所提到的模态对话框和结果页面都可作为异常状态的提醒方式。除此之外，在表单页面中尤其是表单项较多的页面中，还应明确指出出错项目，以便用户修改。

#### 异常状态——表单出错

表单报错，在表单顶部告知错误原因，并标识出错误字段提示用户修改。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/6error.png?t=2017118)

## 便捷优雅

从PC时代的物理键盘鼠标到移动端时代手指，虽然输入设备极大精简，但是手指操作的准确性却大大不如键盘鼠标精确。为了适应这个变化，需要开发者在设计过程中充分利用手机特性，让用户便捷优雅的操控界面。

### 减少输入

由于手机键盘区域小且密集，输入困难的同时还易引起输入错误，因此在设计小程序页面时因尽量减少用户输入，利用现有接口或其他一些易于操作的选择控件来改善用户输入的体验。

例如下图中，在添加银行卡时，采用摄像头识别接口来帮助用户输入。除此之外微信团队还对外开放例如地理位置接口等多种微信小程序接口 ，充分利用这些接口将大大提高用户输入的效率和准确性，进而优化体验。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/7less-input.png?t=2017118)

除了利用接口外，在不得不让用户进行手动输入时，应尽量让用户做选择而不是键盘输入。一方面，回忆易于记忆，让用户在有限的选项中做选择通常来说是容易于完全靠记忆输入；另一方面，仍然是考虑到手机键盘密集的单键输入极易造成输入错误。 例如图中，在用户搜索时提供搜索历史快捷选项将帮助用户快速进行搜索，而减少或避免不必要是键盘输入。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/7less-input2.png?t=2017118)

### 避免误操作

因为在手机上我们通过手指触摸屏幕来操控界面，手指的点击精确度远不如鼠标，因此在设计页面上需点击的控件时，需要充分考虑到其热区面积，避免由于可点击区域过小或过于密集而造成误操作。当简单的将原本在电脑屏幕上使用的界面不做任何适配直接移植到手机上时，往往就容易出现这样的问题。由于手机屏幕分辨率各不相同，因此最适宜点击像素尺寸也不完全一致，但换算成物理尺寸后大致是在7mm-9mm之间。在微信提供的标准组件库中，各种控件元素均已考虑到了页面点击效果以及不同屏幕的适配，因此再次推荐使用或模仿标准控件尺寸进行设计。

### 利用接口提升性能

微信设计中心已推出了一套网页标准控件库，包括 [sketch设计控件库](https://wximg.gtimg.com/shake_tv/mina/WEUI_1_0_161226_Sketch.zip) 和 [Photoshop设计控件库](https://wximg.gtimg.com/shake_tv/mina/WeUI1.0.psd.zip)，后续还将完善小程序组件，这些控件都已充分考虑了移动端页面的特点，能够保证其在移动端页面上的可用性和操作性能； 同时微信开发团队也在不断完善和扩充微信小程序接口，并提供微信公共库，利用这些资源不但能够为用户提供更加快捷的服务，而且对页面性能的提高有极大作用，无形之中提升了用户体验。

## 统一稳定

除了以上所提到的种种原则，建议接入微信的小程序还应该时刻注意不同页面间的统一性和延续性，在不同的页面尽量使用一致的控件和交互方式。

统一的页面体验和有延续性的界面元素都将帮助用最少的学习成本达成使用目标，减轻页面跳动所造成的不适感。正因如此，小程序可根据需要使用微信提供的标准控件，以达到统一稳定的目的。

## 视觉规范

### 字体规范

微信内字体的使用与所运行的系统字体保持一致，常用字号为20, 18, 17, 16,14 13, 11(pt)，使用场景具体如下：

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/8Font.png?t=2017118)

#### 字体颜色

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/8Font.color.png?t=2017118)

主内容 Black 黑色，次要内容 Grey 灰色；时间戳与表单缺省值 Light 灰色；大段的说明内容而且属于主要内容用 Semi 黑。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/8Font.color2.png?t=2017118)

蓝色为链接用色，绿色为完成字样色，红色为出错用色 Press 与 Disable 状态分别降低透明度为20%与10%。

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/8Font.color3.png?t=2017118)

### 列表视觉规范

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/9List.png?t=2017118)

### 表单输入视觉规范

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/10Input.png?t=2017118)

### 按钮使用原则

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/11button.png?t=2017118) ![](https://mp.weixin.qq.com/debug/wxadoc/design/image/11button2.png?t=2017118) ![](https://mp.weixin.qq.com/debug/wxadoc/design/image/11button3.png?t=2017118) ![](https://mp.weixin.qq.com/debug/wxadoc/design/image/11button4.png?t=2017118)

### 图标使用原则

![](https://mp.weixin.qq.com/debug/wxadoc/design/image/12icon.png?t=2017118)

## 资源下载

为方便设计师进行设计，微信提供一套可供Web设计和小程序使用的基础控件库；同时提供方便开发者调用的资源。

*   <div class="item_inner"> [WeUI_sketch组件库](https://wximg.gtimg.com/shake_tv/mina/WEUI_1_0_161226_Sketch.zip) [下载](https://wximg.gtimg.com/shake_tv/mina/WEUI_1_0_161226_Sketch.zip)</div>

*   <div class="item_inner"> [WeUI_PS组件库](https://wximg.gtimg.com/shake_tv/mina/WeUI1.0.psd.zip) [下载](https://wximg.gtimg.com/shake_tv/mina/WeUI1.0.psd.zip)</div>

*   <div class="item_inner"> [小程序标志](https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip) [下载](https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip)</div>

预览地址：[https://weui.io](https://wximg.gtimg.com/shake_tv/mina/WEUI_1_0_161226_Sketch.zip)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017118)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com?t=2017118)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](./?t=2017118#友好礼貌)</div>

</div>