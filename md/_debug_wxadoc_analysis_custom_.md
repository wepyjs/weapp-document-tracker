<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
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

<div class="top_title_wap"><span class="icon_title undefined"></span>

微信小程序数据分析

</div>

*   [功能概述](../)
*   [常规分析](../regular/)
*   [自定义分析](./)
*   [小程序数据助手](../assistant/)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s undefined"></span><span class="s_title_2">数据分析首页</span></a></div>

<nav role="navigation">

*   [快速入门](./#快速入门)
    *   [明确需求](./#明确需求)
    *   [定义事件](./#定义事件)
    *   [测试和发布](./#测试和发布)
    *   [分析数据](./#分析数据)
*   [事件管理](./#事件管理)
    *   [事件及其字段](./#事件及其字段)
    *   [事件的编辑与发布](./#事件的编辑与发布)
    *   [测试事件配置](./#测试事件配置)
    *   [发布事件配置](./#发布事件配置)
*   [事件分析](./#事件分析)
    *   [事件分析概述](./#事件分析概述)
    *   [事件分析查询条件](./#事件分析查询条件)
    *   [查看事件分析结果](./#查看事件分析结果)
    *   [查看事件分析记录](./#查看事件分析记录)
*   [漏斗分析](./#漏斗分析)
    *   [漏斗分析概述](./#漏斗分析概述)
    *   [创建漏斗](./#创建漏斗)
    *   [漏斗分析查询条件](./#漏斗分析查询条件)
    *   [漏斗计算规则](./#漏斗计算规则)
    *   [查看漏斗分析结果](./#查看漏斗分析结果)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 自定义分析

自定义分析支持灵活多维和近实时的用户行为分析，可以通过自定义上报，对用户在小程序内的行为做精细化跟踪，满足页面访问等标准统计以外的个性化分析需求。例如，电商类小程序通过配置自定义上报，收集数据，可以完成如下分析：

1.  购买商品的人，各省份、城市、年龄、性别的分布如何？不同用户群购买的商品数量、商品价格有什么差别？
2.  用户访问商品页、查看商品详情、查看评论、下单、支付、完成购买，逐步的转化率如何？不同用户群的转化是否有差异？
3.  今天参与线上活动的用户，各个时段（小时级）的活跃度如何？

## 快速入门

使用小程序自定义分析，建议按以下步骤进行

1.  明确数据需求
2.  根据产品特性，合理定义事件，配置上报
3.  测试和发布事件配置，收集数据
4.  结合具体需求，分析数据

### 明确需求

例如，一个电商类小程序，可能需要分析：

*   不同地区的商品订单量、支付总金额；
*   商品购买流程中各个步骤的转化和流失情况。

### 定义事件

数据是以事件为模型进行存储和分析的。电商类小程序中，用户购买过程可能包括如下事件：

*   查看商品
*   查看详情
*   加入购物车
*   下单
*   支付

登录[https://mp.weixin.qq.com](https://mp.weixin.qq.com/) ，进入“数据分析” – “自定义分析” - “事件管理”，点击 “新建事件”。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_1.png)

以加入购物车事件为例，填写事件英文和中文名称：

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_2.png)

填写事件配置，定义如何收集数据：

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_3.png)

这个例子中，用一个动作上报“加入购物车”事件。

*   trigger，触发条件，click，表示点击操作触发；

*   action，触发时动作，一次性上报，表示在每一次click中，收集数据并上报一条数据；

*   page，触发页面，填viewProduct（viewProduct是商品详情页）；

*   element， 触发元素，填.addToCart（.addToCart是一个“加入购物车”的按钮）；

*   data, 事件的数据及其来源，用“字段名 字段值”来表示，其中字段值是页面上的一个变量。.

    这个例子中，data有四项：

    product_id : itemID

    product_name : itemName

    product_price : price

    product_category : category

    即：

    事件的product_id字段，收集viewProduct页面上page实例的data中的itemID字段；

    事件的product_name字段，收集viewProduct页面上page实例的data中的itemName字段；

    事件的product_price字段，收集viewProduct页面上page实例的data中的price字段；

    事件的product_category字段，收集viewProduct页面上page实例的data中的category字段；

以上内容表示：当用户点击viewProduct页面上的.addToCart按钮时，上报一条记录到add_to_cart事件，事件的product_id, product_name, product_price, product_category 字段， 取值分别是页面上的itemID, itemName, price, category。

确定配置后，点击“检查字段”。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_4.png)

此时会提示add_to_cart事件包含的具体字段，继续补充字段的名称、数据类型和备注信息。

### 测试和发布

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_5.png)

确认字段信息后，点击“保存并测试”，保存当前配置并测试上报的数据是否符合预期。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_6.png)

选择一个开发者，点击“下一步”，事件配置将会实时同步到所选开发者的设备上。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_7.png)

配置成功同步到设备上后，按提示在开发者的设备上打开对应小程序中进行测试操作，点击商品详情页中的“加入购物车”按钮，进行数据上报。操作完成后点击“同步结果”，可能有1-2分钟延迟。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_8.png)

数据上报成功后，可在当前窗口查看上报详情。如果数据符合预期，认为测试成功，点击“关闭”回到事件编辑页面。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_9.png)

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_10.png)

点击“保存并发布”并确认操作，该事件配置正式生效，大概5分钟后，即可开始收集所有用户的数据。注意：发布后，事件已有字段的名称和数据类型不可更改，但可继续修改配置、新增字段。

同理，可以定义下单、支付等其他事件并发布事件配置、收集数据。

### 分析数据

发布事件配置、收集数据后，可以进行相应的数据分析。

**1\. 统计不同城市用户的订单量**

进入“数据分析” – “自定义分析” – “事件分析”

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_11.png)

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_12.png)

**事件：**选择“下单”；

**指标：**选择“总次数”和“去重人数”，即下单操作的次数和人数，表示订单数和下单用户数；

**分组：**选择“城市”，即按城市分别统计订单数和下单用户数；

**过滤：**数据筛选条件，例如只统计广东省的数据，则选择省份等于广东省，也可以不选择；

**时间：**选择时间范围以及数据的时间粒度，例如查看最近7天每天的数据。

完成后点击“查询”。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_13.png)

数据开始计算，根据数据量大小不同，可能有一定的等待时间。你可以点击“收进后台”，在当前页面进行新的查询，也可以在历史查询记录中查看之前的数据。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_14.png)

统计完成后，当前页面将展示各个城市的下单总次数、总人数。由于分组项太多，图表仅展示部分数据，你可以设置“显示其他数据”来选择希望查看的城市和指标；详细数据将会显示全部城市的数据，可以查看或下载。

**2\. 商品购买流程中各个步骤的转化和流失情况**

进入“数据分析” – “自定义分析” – “漏斗分析”

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_15.png)

首次进入时，点击“新建漏斗”创建漏斗。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_16.png)

填写漏斗名称，确认一个简洁清晰的名称，有利于对应分析。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_17.png)

设置漏斗步骤，每个步骤对应一个事件，本漏斗中设置步骤是查看商品-查看详情-加入购物车-下单-支付。每个步骤确认后点击右下角“添加步骤”继续添加下一个步骤。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_18.png)

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_19.png)

完成后回到数据查询页，设置查询条件。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_20.png)

**漏斗名称：**选择已创建的“购买转化漏斗”；

**分组：**选择需要分组统计的字段，也可以不选择，不选择时将统计总体；

**过滤：**数据筛选条件，例如只统计广东省的数据，则选择省份等于广东省，也可以不选择；

**时间：**选择时间范围，将统计此范围内总体漏斗转化情况，此处选择12.22-12.31。

点击查询，查看数据结果。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_21.png)

图表显示，12.22-12.31内，查看商品的人数共985人。这些用户到后面每个步骤的转化率依次为93.50%，84.04%，74.68%，65.92%.详情数据会展示了每个步骤的具体数据，可以下载查看。

进一步，可以更新查询条件，例如设置分组条件，选择“城市”字段，可以查看各城市的详细漏斗数据；设置过滤条件，可只查看部分选定用户的漏斗转化数据；拉长时间范围，可以看这些查看商品的用户在更长时间内的转化和流失情况。

以上简单介绍了如何使用自定义分析功能分析用户购买行为，下面将介绍自定义分析功能详情。

## 事件管理

### 事件及其字段

**事件**是自定义分析进行用户行为数据收集和分析的模型。

一个事件的数据都是由多个字段组成，字段包括**系统默认字段**和**用户自定义字段**。

系统默认字段由系统收集数据，如用户地域、设备类型等；而用户自定义字段则是用户指定并收集数据。

字段的定义是**全局**的，即事件A使用了字段a，事件B也使用了字段a，a在事件A和B中的定义及描述是一致的。

在“数据分析”-“自定义分析”-“事件管理”页面可以查看系统默认字段及已有的用户定义字段。

目前，字段类型支持32位整数型及字符型。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_22.png)

### 事件的编辑与发布

可以通过新增事件创建一个事件，修改事件来编辑一个事件，事件只有**发布**之后，才在收集和分析数据时正式生效。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_23.png)

**“新增事件”**可以增加新的事件。

**“查看发布版”**可以看到这个事件目前正式发布的版本。

**“修改”**可以编辑这个事件。

#### 新增/修改事件

点击“修改”编辑已有事件，进入修改事件页面。

或者点击“新建事件”创建事件。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_24.png)

新增事件时，需要填写事件的英文名称和中文名称。

英文名称可由小写字母、下划线、数字组成，并以小写字母开头，长度为32字以内，并且不能跟已有的事件的英文名称相同；中文名称在32字符以内，不能跟已有的事件的中文名称相同。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_25.png)

编辑事件，首先需要编辑这个事件的配置，即如何收集数据，配置的具体细节见[事件上报配置说明](https://mp.weixin.qq.com/debug/wxadoc/analysis/custom/#%E4%BA%8B%E4%BB%B6%E4%B8%8A%E6%8A%A5%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E)

如图，表示在view_product事件中，将使用product_id, product_name, product_price, product_category, product_producer这些字段，收集页面上的信息，如果这些字段之前没有被view_product事件使用过，那么将添加到事件里。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_26.png)

编辑事件配置后，点击“检查字段”，会检查上报的配置里指定了哪些字段，是否需要添加到事件里。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_27.png)

如图，这个例子中五个字段对于事件来说还未发布使用过，都是新增字段。其中，product_category，product_id,product_name, product_price 在其他事件里定义过了，其类型和含义都是确定的（如前面所说，字段的定义是全局的），而product_producer没有定义过，需要补充信息。

详细说明参见[事件字段说明](https://mp.weixin.qq.com/debug/wxadoc/analysis/custom/#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E)

补充字段定义后，可以点击**“保存”**，将本次修改保存下来。

**“保存并测试”**，将保存当前配置并进入测试流程，可以检查数据上报是否符合预期，参见【事件测试流程】。

**“保存并发布”**，将保存当前配置并发布，可以正式收集和分析用户行为数据。

#### 重置为线上版本

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_28.png)

修改事件配置后，如果不符合实际需求，可以点击“重置为线上版本”撤销修改。

注意，该操作不会自动保存，“重置为线上版本”后需要再点击“保存”。

#### 事件上报方式

收集事件数据，可以通过事件上报配置和API上报两种方式。

一个事件同一时间只能选择一种方式进行上报。

#### 事件上报配置说明

每个事件都需要指定收集数据的方式，这个是通过事件上报配置来管理的。

事件上报配置的每一项都是一个动作，可以由一到多个动作组成。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_29.png)

动作的各项含义如下：

**trigger**，触发条件:

> click 点击时触发，必须指定page和element
> 
> enterPage 进入页面时触发，包括新开、后退、切换到前台都属于进入页面，必须指定page
> 
> leavePage 离开页面时触发，包括离开、切换到后台都属于离开页面，必须指定page
> 
> pageLoad 新开页面时触发，即第一次进入页面，必须指定page
> 
> pageUnload 回收页面时触发，必须指定page
> 
> switchTab 调用switchTab接口切换页面时触发，必须指定page
> 
> pullDownRefresh 下拉刷新时触发，必须指定page
> 
> launch 加载小程序时触发
> 
> background 切换到后台触发
> 
> foreground 切换到前台触发
> 
> share 右上角菜单分享时触发

**action** trigger发生时的动作，默认会收集数据，包括系统默认数据和用户自定义数据（data中定义）。收集数据可以一次性上报，也可以分多步收集，故有如下定义

一次性上报：一次触发上报一条数据记录；

分步骤上报：

> 空　只收集数据；
> 
> start 初始化并收集数据；
> 
> report 收集数据并上报事件数据

注：每次report之前必须有start操作，未经过start操作不会上报。

对于一个动作，如果设置了一次性上报，且指定了click触发条件，则时序如下：

> click event -> start -> 收集数据 ->report

**page** 触发的页面, 如pages/index/index, pages/list/list，此规则与小程序app.json的pages字段保持一致， 如果需要任意页面触发，则填写`ANY_PAGE`。

**element** 触发的元素，支持一层级的css的id和class选择器，即必须以_’.’_或者_’#’_开头

**data** 收集的自定义数据，为0到多项， 每一项都是以 “字段名 字段值”的方式；如果不填，则只收集系统数据。

> 字段名：事件里的字段名
> 
> 字段值：事件里这个字段的数据值，可收集小程序中的变量，规则如下：
> 
> *   填写的变量名，默认从page实例的data字段中获取
>     
>     
> *   若想收集由list变量渲染的列表中的某一项数据，则可用`list[].*`表示，这里会根据当前填写的element（只能是class）得到的NodeList的第几个来决定数组下标。
>     
>     
> *   若列表是二维的，则可用`list[][].*`表示，这里element需填写两个class（空格隔开）分别表示父列表与子列表。
>     
>     
> *   若想取得数组的下标，则可用`list[].$INDEX`表示
>     
>     
> *   若想取得wxml中data-_系列属性的值，则可用`$DATASET._`表示
>     
>     
> *   若想取得app实例的数据，则可用`$APP.*`表示，只支持获取基本类型的数据，如number、string、boolean。

除此之外，还可以填写一些提供的系统属性，以“$”开头，目前支持以下属性：

> $PAGE_TIME 用户从进入本页面到当前的时间(触发action的时间点)
> 
> $APP_TIME 用户进入小程序到当前的时间(触发action的时间点)
> 
> $CURRENT_PAGE 当前用户所在的页面
> 
> $LAST_PAGE 上一页

注：data可以为空，为空时该事件上报仅收集系统默认字段的数据

如前文，我们定义了事件view_product(查看商品), 有如下字段

> product_id, product_name, product_category, product_price, product_producer

在viewList页面点击viewProduct按钮时上报

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_30.png)

如果数据需要跨多个页面收集，那么就需要多个动作来完成上报了，比如下面的例子，在viewList页面收集到product_id, product_name, product_category的数据，然后进入viewProduct页面时收集到product_price的数据，并上报。 ![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_31.png)

在viewList页面和viewDetail页面，都有加入购物车按钮.addToCart，都需要上报数据到“加入购物车”事件，例子如下：

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_32.png)

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_33.png)

#### 使用API进行上报

某些情况下，事件上报配置的方式可能无法满足上报的要求，可以使用小程序API的方式进行上报。

在事件修改页面选择”API上报“

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_69.png)

根据需要增加字段。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_70.png)

确认无误后，即可保存进行下一步操作。

在代码中使用API进行上报，详见 [wx.reportAnalytics](https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis-report.html)

点击"生成代码"生成API上报示例代码。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_71.png)

生成的代码，整数型字段默认为0，字符型字段默认为""，按需要修改即可。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_72.png)

**Tips**

*   “保存并测试”时，选定的测试者需要用开发版小程序进行上报
*   开发工具暂时未支持自定义分析数据上报

#### 事件字段说明

填写事件上报配置时，需要检查字段。如下图：

**“新增字段”**表示需要添加到事件里的新字段

**“已有字段”**表示是事件已发布版已经有的字段。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_34.png)

对于已有字段，只能修改字段备注，在发布后将会正式生效。

对于新增字段，如下图例子，product_id在其他事件里已经定义过，添加到本事件中，不能修改其定义；而product_producer为新定义的字段，需要补充定义。填写中文名称和字段备注，用于展示；填写字段类型，用户数据上报及数据处理。

新增和已有字段可能有以下状态，需要关注，页面内会有小图标给出提示：

**1\. 新增字段在其他事件中已定义过**

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_35.png)

product_price是新增字段，但已在其他事件中定义过。检查字段后会提示：字段已被定义，应保持一致，不可修改。

**2\. 已有字段从事件配置中移除**

如下图，如果修改了事件配置时，将事件配置data里已有的一个字段删去：

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_36.png)

检查字段时会提示：该字段在当前配置中未使用。这代表product_name不再收集数据。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_37.png)

**3\. 已停用字段重新使用**

如果重新在事件配置中的data加入之前已移除的product_name字段，那么会继续使用product_name收集数据。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_38.png)

检查字段后会提示：该字段已定义过，在当前配置中重新使用，请注意数据一致性。这代表product_name将重新开始收集数据。

需要特别注意此时product_name的意义跟以前是否一致，如果不一致，建议用新的字段，否则product_name的历史数据跟之后上报的数据含义冲突，对数据分析造成干扰。

**字段类型**

字段的类型目前分为两种：**整数形**和**字符串**

其中，整数型为32位int；

对于整数型的数据，如果上报时带了小数点，则会默认截取小数点前的数字；如果是非数字的类型，则最终会上报0。

字段的定义是全局的，定义了字段以后，其他事件也可以使用添加这个字段到事件里。

### 测试事件配置

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_39.png)

确认字段信息后，点击“保存并测试”，保存当前配置并测试上报的数据是否符合预期。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_40.png)

选择一个开发者，点击“下一步”，事件配置将会实时同步到所选开发者的设备上。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_41.png)

配置成功同步到设备上后，按提示在开发者的设备上打开对应小程序中进行测试操作，点击商品详情页中的“加入购物车”按钮，进行数据上报。操作完成后点击“同步结果”，可能有1-2分钟延迟。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_42.png)

如果未获取到数据，请检查客户端版本是否为 6.5.4 以上，操作是否正确，以及是否已超过等待时间（通常为1-2分钟），客户端是否有上报日志，确认没问题可重新“同步结果”。

检查上报日志时，可进入开发版的小程序，点击右上角，打开调试，重新进入后点击"vConsole"按钮查看日志

启动小程序时会有：

> [自定义分析] 配置拉取成功

后台管理页面同步配置时有：

> [自定义分析] 收到最新配置

小程序成功上报时有：

> [自定义分析] 上报成功

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_43.png)

数据上报成功后，可在当前窗口查看上报详情。如果数据符合预期，认为测试成功，点击“关闭”回到事件编辑页面。

### 发布事件配置

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_44.png)

点击“保存并发布”并确认操作，该事件配置正式生效，大概5-10分钟后，即可开始收集所有用户的数据。注意：发布后，事件已有字段的名称和数据类型不可更改，但可继续修改配置、新增字段。

## 事件分析

### 事件分析概述

**事件**，是进行数据收集和分析的模型，对应用户在小程序内的行为。例如：注册、查看商品、下单、支付等。

**事件分析**，是指基于事件的指标统计、属性分组、条件筛选等功能的查询分析。例如，分析小程序的注册量、查看商品人数、下单次数、支付金额并区分用户群对比等。

进行事件分析前，需要先在“事件管理”中定义事件并配置上报、收集数据。具体参见【事件管理】说明。

进行事件分析时，可以灵活选择查询条件并查看详细数据结果。

### 事件分析查询条件

#### 选择事件

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_45.png)

在事件下拉列表中，将展示出所有已经在事件管理中创建的事件，每次事件分析只能选择一个事件。

#### 选择指标

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_46.png)

在指标下拉列表中，选择需要分析的默认或自定义指标。每次分析最多可以选择5个指标，并且不能重复。你可以通过右侧的“+”添加指标。其中：

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_47.png)

每个事件都可以统计如下指标，可以直接选择：

> 总次数：事件的触发次数
> 
> 去重人数：触发该事件的去重用户数（以openid判断）
> 
> 人均次数：每个用户触发该事件次数的平均值，即总次数/去重人数

也可以基于事件管理中的自定义属性字段，选择想要分析的其他指标。你需要从下拉列表中分别选择属性字段和需要计算的指标。 ![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_48.png)

对于不同数据类型的字段，有对应不同的指标可供选择。具体的对应关系如下：

<table>

<thead>

<tr>

<th>字段类型</th>

<th>支持的指标</th>

</tr>

</thead>

<tbody>

<tr>

<td>字符型</td>

<td>去重数(count(distinct))</td>

</tr>

<tr>

<td>整数型</td>

<td>总和 (sum)、 最大值(max) 、 最小值(min) 、 平均值(avg) 、 人均值(sum /count(distinct openId))</td>

</tr>

</tbody>

</table>

> 例如，商品价格为整数型，指标可以选择“商品价格的总和”。

#### 选择分组

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_49.png)

在分组下拉列表中，可以选择查看数据的分组维度，包括系统默认属性和自定义属性。每次分析最多可以选择5个分组，并且不能重复。你可以通过右侧的“+”添加分组。

例如指标选择总次数，分组选择“性别”，将分别统计男性用户、女性用户的事件触发总次数。

需要注意的是：当分组过多时，仅能显示部分数据，请合理设置分组。

#### 设置过滤条件

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_50.png)

分析时，可以选择或输入你想要过滤的条件。每次分析最多可以选择5个过滤条件。所有条件之间的关系必须全部为“并且”，或全部为“或者”，前者表示满足所有条件，后者表示满足至少一项条件。当切换其中一处的关系时，所有其他关系也会随之切换。你可以通过下方的“+”添加过滤条件。

对于不同类型的字段，有对应不同的过滤条件，具体的对应关系如下：

<table>

<thead>

<tr>

<th>**属性类型**</th>

<th>**支持的过滤条件**</th>

</tr>

</thead>

<tbody>

<tr>

<td>系统默认字段</td>

<td>等于/不等于</td>

</tr>

<tr>

<td>字符型自定义字段</td>

<td>等于/不等于/有值/没值/为空值/不为空值</td>

</tr>

<tr>

<td>整数型自定义字段</td>

<td>大于/小于/大于等于/小于等于/等于/不等于/有值/没值</td>

</tr>

</tbody>

</table>

> 例如：选择“国家等于中国”，“商品价格大于10”，“商品种类等于A”，表示只统计中国价格大于10的A商品的数据。

#### 选择时间范围

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_51.png)

选择查询分析的时间范围，支持今天、昨天、最近7天以及自定义时间范围。当天的数据也可以及时查看。

#### 选择时间粒度

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_52.png)

可以选择查询数据的时间粒度，包括按小时、按天，按总体。选择总体时，将展示所选时间范围内的汇总数据。

### 查看事件分析结果

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_53.png)

数据计算可能需要一定时间，你可以选择在当前页面等待，或点击“历史查询记录”查看之前的数据，或点击“收进后台”，开始新的查询。

#### 查看图表

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_54.png)

当查询条件过于复杂，指标和分组过多时，图表默认展示数值最大的10个分组和指标。可以点击图例，选择是否显示该分组和指标。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_55.png)

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_56.png)

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_57.png)

如果默认数据中没有希望查看的数据，可以通过“显示其他数据”，来选择你希望查看的分组和指标，并进行对比。最多可选择10项。

#### 查看详情

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_58.png)

详细数据将分页展示所有分组和指标的详情。其中，第一列为时间，其他列分别为分组、指标。可以下载数据结果，以便进行进一步分析。

### 查看事件分析记录

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_59.png)

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_60.png)

在数据查询页，或查询等待过程中，你可以进入历史查询记录页查看已进行过的数据查询。所有历史查询记录默认保存一段时间。

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_61.png)

**查询名称：**显示查询的事件名和指标名；

**查询时间：**执行查询的具体时间；

**数据时间：**查询数据的时间范围；

**状态：**查询任务的状态，可能为等待查询、查询中、查询成功、查询失败。最多同时进行3项查询，查询任务过多时，会进入等待状态；

**操作：**可以通过“查看详情”，查看该查询任务的图表和详细数据。

## 漏斗分析

### 漏斗分析概述

**漏斗分析**，是指将多个事件串联起来，对每个步骤中用户转化与流失进行的分析。例如：购买过程可能包括以下步骤（一个步骤对应一个事件）：

*   查看商品
*   查看详情

*   加入购物车

*   下单
*   支付

这些步骤可以设置为一个漏斗，分析过程中的转化与流失情况。

进行漏斗分析前，需要先在“事件管理”中定义事件并配置上报、收集数据。参见【事件管理】说明。

进行事件分析时，可以灵活选择查询条件并查看详细数据结果。结合过滤、分组等功能进行深入的对比和分析。

### 创建漏斗

首次进入漏斗分析，需要先创建漏斗。

#### 漏斗步骤

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_62.png)

创建漏斗时，每一步对应一个事件，在一个漏斗中，一个事件只能出现一次。

#### 过滤条件

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_63.png)

在漏斗的每一个事件中，可以针对事件本身的自定义字段设置过滤条件。这里提供的过滤规则与事件分析中的设置过滤条件规则相同。例如，希望分析A类商品的购买转化数据，可以设置过滤条件“商品种类为A”。

### 漏斗分析查询条件

#### 选择漏斗

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_64.png)

在漏斗名称下拉列表中，选择想要分析的漏斗。每次分析只能选择一个漏斗。

#### 选择分组

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_65.png)

在分组下拉列表中，将展示出所有我们内部定义的属性，选择想要分析的分组属性。每次分析最多只能选择1个分组。不选时，将统计总体数据。

#### 设置过滤条件

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_66.png)

分析时，可以选择或输入你想要过滤的条件。每次分析最多可以选择5个过滤条件。所有条件之间的关系必须全部为“并且”，或全部为“或者”，前者表示满足所有条件，后者表示满足至少一项条件。当切换其中一处的关系时，所有其他关系也会随之切换。你可以通过下方的“+”添加过滤条件。

> 例如：选择城市为“北京”、或“上海”、或“广州”、或“深圳”，将会同时统计这四个城市的数据。

#### 选择时间范围

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_67.png)

选择查询分析的时间范围，支持今天、昨天、最近7天以及自定义时间范围。当天的数据也可以及时查看。

### 漏斗计算规则

漏斗分析计算在选定时间范围内、过滤和分组条件下，漏斗中总体或每个分组的用户依次完成第一个到最后一个步骤的人数。

**步骤过滤条件：**每个步骤中设置的过滤条件，对该步骤生效。例如“支付”步骤，设置过滤条件为“支付金额大于500”，则“支付”及其后面的步骤，都只包括支付步骤金额大于500的用户。

**漏斗过滤条件：**对漏斗中的每个步骤生效。例如设置过滤条件为“省份等于广东”，所有步骤都只计算省份属性为广东的人数。

**分组条件：**初期提供按用户属性和系统属性分组，对漏斗中的每个步骤生效。例如分组为“城市”，那么“广州”分组中的漏斗数据，每个步骤都只计算城市为广州的用户。

**时间范围：**部分或完整漏斗发生的时间范围，至少第一个步骤在该时间范围内。

> 例如，漏斗包含A-B-C三个步骤，图表显示的人数及转化率表示：

第1步人数：在选定时间范围内，满足分组和过滤条件，完成A的人数；

第2步人数：在选定时间范围内，满足分组和过滤条件，按顺序完成过A-B的人数；如果A-B步骤之间发生其他操作，例如A-C-B，满足A-B顺序，依然计算在内；

第3步人数：在选定时间范围内，满足分组和过滤条件，按顺序完成过A-B-C的人数；如果A-B-C步骤之间包括其他步骤，例如A-D-B-B-C，满足A-B-C顺序，依然计算在内；

转化率：每个步骤的人数与上一步人数的比值。

### 查看漏斗分析结果

#### 查看图表

![](https://mp.weixin.qq.com/debug/wxadoc/analysis/image/weanalytics/5_68.png)

图表将展示漏斗中每个步骤的总人数，及相对前一个步骤的转化率。

#### 查看详情

详细数据中将展示漏斗每个步骤的人数。如果已设置分组，会显示多个分组。可以下载数据结果，以便进行进一步分析。

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

[](../regular/#终端及机型分布)[](./#快速入门)</div>

</div>