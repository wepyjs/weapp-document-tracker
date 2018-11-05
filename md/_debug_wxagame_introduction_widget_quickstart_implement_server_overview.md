<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [小程序介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18092916)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18092916)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18092916)
*   [开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18092916)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18092916)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18092916)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18092916)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18092916)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/server/overview.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/implement/server/overview.html?t=18092916)

</div>

</div>

</div>

<div class="sub_nav_box">

<div class="sub_nav_inner">

<div class="book-summary-opr" id="js-book-summary-opr"><a class="book-summary-btn"></a></div>

<div class="top_sub_nav">

<div class="top_title_wap"><span class="icon_title icon_doc"></span>

微信小程序接入指南

</div>

*   [微信小程序接入指南](../../../../)
*   [客服功能使用指南](../../../../custom.html)
*   [扫码打开小程序接入指南](../../../../qrcode.html)
*   [插件接入指南](../../../../plugin.html)
*   [搜索Widget接入指南](../../../)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/introduction/widget/quickstart/implement/server/overview.html?t=18092916)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/introduction/widget/quickstart/implement/server/overview.html?t=18092916)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_doc"></span><span class="s_title_2">接入指南首页</span></a></div>

<nav role="navigation">

*   [开发前必读](../../../)
    *   [概述](../../../)
    *   [接入指引](../../../guide/overview.html)
    *   [整体时序图](../../../guide/flowgraph.html)
    *   [更新日志](../../../guide/log.html)
*   [快速启动](../../apply/)
    *   [申请模板](../../apply/)
        *   [申请新接口](../../apply/proposal.html)
    *   [实现模板](../)
        *   [导入意图数据](../import/)
        *   [配置后台测试接口](../testconfig.html)
        *   [开发后台接口](./overview.html)
        *   [调试](../debug.html)
    *   [提交测试](../../test/)
        *   [导入数据检测](../../test/datatest.html)
        *   [后台性能测试](../../test/stresstest.html)
        *   [展示效果测试](../../test/uitest.html)
    *   [发布上线](../../release.html)
    *   [查看数据](../../dataview/)
*   [附录](../../../appendix/question.html)
    *   [常见问题](../../../appendix/question.html)
    *   [问题反馈](../../../appendix/feedback.html)
    *   [运营规则](../../../appendix/rule.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 开发后台接口

开发者在**模板与组件 - Widget - 模板管理 - 模板申请单 - 实现模板 - 开发后台接口**下载接口协议文档，并在完成[接入](https://developers.weixin.qq.com/miniprogram/dev/api/custommsg/callback_help.html?t=18092916)后，开始进行后台开发。

服务直达要求第三方响应时间在300ms以内（微信收到第三方回包时间 - 微信发送请求给第三方时间 < 300ms）。

## 接口协议文档示例

> ## 天气查询服务数据格式文档
> 
> ### 一、类目type
> 
> <table>
> 
> <thead>
> 
> <tr>
> 
> <th>key</th>
> 
> <th>说明</th>
> 
> <th>define</th>
> 
> </tr>
> 
> </thead>
> 
> <tbody>
> 
> <tr>
> 
> <td>type</td>
> 
> <td>类型编号</td>
> 
> <td>2</td>
> 
> </tr>
> 
> </tbody>
> 
> </table>
> 
> ### 搜索模式：城市+天气
> 
> <table>
> 
> <thead>
> 
> <tr>
> 
> <th>key</th>
> 
> <th>类型</th>
> 
> <th>示例</th>
> 
> </tr>
> 
> </thead>
> 
> <tbody>
> 
> <tr>
> 
> <td>province</td>
> 
> <td>string</td>
> 
> <td>广东省</td>
> 
> </tr>
> 
> <tr>
> 
> <td>city</td>
> 
> <td>string</td>
> 
> <td>广州市</td>
> 
> </tr>
> 
> <tr>
> 
> <td>begin_date</td>
> 
> <td>string</td>
> 
> <td>2018-08-20</td>
> 
> </tr>
> 
> <tr>
> 
> <td>end_date</td>
> 
> <td>string</td>
> 
> <td>2018-08-20</td>
> 
> </tr>
> 
> </tbody>
> 
> </table>
> 
> ### 城市+天气
> 
> 返回数据字段定义小程序后台需要根据自己的服务场景，data里面的数据按照以下定义的数据字段进行返回：

> <table>
> 
> <thead>
> 
> <tr>
> 
> <th>key</th>
> 
> <th>类型</th>
> 
> <th>含义</th>
> 
> <th>说明</th>
> 
> </tr>
> 
> </thead>
> 
> <tbody>
> 
> <tr>
> 
> <td>err_code</td>
> 
> <td>integer</td>
> 
> <td>返回值</td>
> 
> <td>0代表正确，非0代表错误  
> 请按如下规范返回错误码并且前端显示提示语：  
> -1: 无结果 -2: 参数不对 -3: 系统错误</td>
> 
> </tr>
> 
> <tr>
> 
> <td>err_msg</td>
> 
> <td>string</td>
> 
> <td>提示信息</td>
> 
> <td>针对于返回码的描述信息</td>
> 
> </tr>
> 
> <tr>
> 
> <td>update_time</td>
> 
> <td>string</td>
> 
> <td>更新时间</td>
> 
> <td>06-09 11:00 更新</td>
> 
> </tr>
> 
> <tr>
> 
> <td>temperature</td>
> 
> <td>string</td>
> 
> <td>温度</td>
> 
> <td>33°</td>
> 
> </tr>
> 
> <tr>
> 
> <td>detail</td>
> 
> <td>string</td>
> 
> <td>天气详情</td>
> 
> <td>附近正在下雨，建议出门带伞</td>
> 
> </tr>
> 
> <tr>
> 
> <td>temperature_range</td>
> 
> <td>string</td>
> 
> <td>温度变化</td>
> 
> <td>26°~32°</td>
> 
> </tr>
> 
> <tr>
> 
> <td>air_quality</td>
> 
> <td>string</td>
> 
> <td>空气质量</td>
> 
> <td>67 良</td>
> 
> </tr>
> 
> <tr>
> 
> <td>wind_force</td>
> 
> <td>string</td>
> 
> <td>风力</td>
> 
> <td>0级</td>
> 
> </tr>
> 
> </tbody>
> 
> </table>
> 
> ### 搜索模式：一周+天气
> 
> <table>
> 
> <thead>
> 
> <tr>
> 
> <th>key</th>
> 
> <th>类型</th>
> 
> <th>示例</th>
> 
> </tr>
> 
> </thead>
> 
> <tbody>
> 
> <tr>
> 
> <td>province</td>
> 
> <td>string</td>
> 
> <td>广东省</td>
> 
> </tr>
> 
> <tr>
> 
> <td>city</td>
> 
> <td>string</td>
> 
> <td>广州市</td>
> 
> </tr>
> 
> <tr>
> 
> <td>begin_date</td>
> 
> <td>string</td>
> 
> <td>2018-08-20</td>
> 
> </tr>
> 
> <tr>
> 
> <td>end_date</td>
> 
> <td>string</td>
> 
> <td>2018-08-26</td>
> 
> </tr>
> 
> </tbody>
> 
> </table>
> 
> ### 一周+天气
> 
> 返回数据字段定义小程序后台需要根据自己的服务场景，data里面的数据按照以下定义的数据字段进行返回：

> <table>
> 
> <thead>
> 
> <tr>
> 
> <th>key</th>
> 
> <th>类型</th>
> 
> <th>含义</th>
> 
> <th>说明</th>
> 
> </tr>
> 
> </thead>
> 
> <tbody>
> 
> <tr>
> 
> <td>err_code</td>
> 
> <td>integer</td>
> 
> <td>返回值</td>
> 
> <td>0代表正确，非0代表错误  
> 请按如下规范返回错误码并且前端显示提示语：  
> -1: 无结果 -2: 参数不对 -3: 系统错误</td>
> 
> </tr>
> 
> <tr>
> 
> <td>err_msg</td>
> 
> <td>string</td>
> 
> <td>提示信息</td>
> 
> <td>针对于返回码的描述信息</td>
> 
> </tr>
> 
> <tr>
> 
> <td>update_time</td>
> 
> <td>string</td>
> 
> <td>更新时间</td>
> 
> <td>06-09 11:00 更新</td>
> 
> </tr>
> 
> <tr>
> 
> <td>day_info_list</td>
> 
> <td>array</td>
> 
> <td>每日天气列表</td>
> 
> <td>每日天气列表</td>
> 
> </tr>
> 
> <tr>
> 
> <td>day_info_list.date</td>
> 
> <td>string</td>
> 
> <td>日期</td>
> 
> <td>星期一 08-20</td>
> 
> </tr>
> 
> <tr>
> 
> <td>day_info_list.temperature_range</td>
> 
> <td>string</td>
> 
> <td>温度变化</td>
> 
> <td>25°~32°</td>
> 
> </tr>
> 
> <tr>
> 
> <td>day_info_list.condition</td>
> 
> <td>string</td>
> 
> <td>天气条件</td>
> 
> <td>晴天</td>
> 
> </tr>
> 
> <tr>
> 
> <td>day_info_list.air_quality</td>
> 
> <td>string</td>
> 
> <td>空气质量</td>
> 
> <td>22 优</td>
> 
> </tr>
> 
> <tr>
> 
> <td>more_description</td>
> 
> <td>string</td>
> 
> <td>查看更多描述</td>
> 
> <td>点击查看更多</td>
> 
> </tr>
> 
> </tbody>
> 
> </table>

## 整体开发流程

### 1\. mp平台设置相关配置

打开[mp.weixin.qq.com](https://mp.weixin.qq.com)，登录需要提供直达服务的**小程序帐号**，在**设置-开发设置-消息推送**中设置URL（`设置http而非https`）、Token、EncodingAESKey、消息加密方式（`选择安全模式`）、数据格式（`建议用json格式`）等。详情请参考[接入概述](https://developers.weixin.qq.com/miniprogram/dev/api/custommsg/callback_help.html?t=18092916)。

### 2\. 加解密验签开发

在上述配置中选择了安全模式，需要对微信发送过来的数据进行验证签名和解密；处理完业务逻辑之后，需要对将要发送给微信的数据进行加密和签名。详情请参考[消息加解密说明](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419318479&token=&lang=zh_CN)以及[常见问题](../../../appendix/question.html#开发后台接口)，并下载[示例代码](https://wximg.gtimg.com/shake_tv/mpwiki/cryptoDemo.zip)进行开发。

## 消息同步示例

#### 1\. 微信侧生成意图数据

以股票查询服务为例，其数据格式定义为：

<table>

<thead>

<tr>

<th>key</th>

<th>类型</th>

<th>示例</th>

</tr>

</thead>

<tbody>

<tr>

<td>stock_code</td>

<td>string</td>

<td>00700</td>

</tr>

<tr>

<td>stock_market</td>

<td>string</td>

<td>hk</td>

</tr>

</tbody>

</table>

假设用户搜索“_腾讯股价_”，微信在收到用户的query并进行意图识别之后会产生以下的数据包，其中Query为`json_encode`之后的字符串

    json格式
    {
        "ToUserName":"gh_6ad1513a84d8",
        "FromUserName":"oHiD1v9MzTFE4f2lLasf123E1QJ0",
        "CreateTime":1499048811,
        "MsgType":"event",
        "Event":"wxa_widget_data",
        "Query":"{\"type\":10000,\"slot_list\":[{\"key\":\"stock_code\",\"value\":\"00700\"},
    {\"key\":\"stock_market\",\"value\":\"hk\"}],\"longitude\":113.319694519,\"latitude\":23.102640152"},
        "Scene":1
    }

    xml格式
    <xml>
        <ToUserName>gh_6ad1513a84d8</ToUserName>
        <FromUserName>oHiD1v9MzTFE4f2lLasf123E1QJ0</FromUserName>
        <CreateTime>1499048811</CreateTime>
        <MsgType>event</MsgType>
        <Event>wxa_widget_data</Event>
        <Query><![CDATA[  {\"type\":10000,
    		\"slot_list\":[{\"key\":\"stock_code\",\"value\":\"00700\"},
    					  {\"key\":\"stock_market\",\"value\":\"hk\"}],
    		\"longitude\":113.319694519,\"latitude\":23.102640152}]]></Query>
        <Scene>1</Scene>
    </xml>

#### 2\. 微信将上述请求包进行加密之后变成下面数据包

其中Encrypt就是对上述请求包进行加密和格式化之后的结果

    json格式
    {
        "ToUserName":"gh_6ad1513a84d8",
        "Encrypt":"vys1ev/gqMW8ykkgBwe9K5He4S8YxyT3ZUssaknxvnqv+LQCENfMXvhKrG3CLn0QcOWqNugfQYp/+jZ3vk/EQ3k700gPuIcf0kouwPiGijThCT70aXUQHy72TiuSo/+j4ooC6AKNJw0kLe4E1qGBJfaAJeplzEz2AefpU6d2ed0sZHZSOETFUMDfYiAm32ZW5XfydSRvlMQF9mOIGvhtW9il3Te1uxEKndWOJ+PMLftLQGtqguxkqmsaelrmG0dLk5lJDUvjVXRRksX8vnBE/YWOSSepCSvUre1Yrz+rkAGZ1uIlLluJAT93ugKwNGuG7SfeLn67A3A/6QcH8R8hSOQmQPzTi1dEoZcX/BJddh9cU49yXJwXAVDzz5p/mYb6pd+LG9MMD09obUVkIdq+1YsWW7aIyrtLYO3TKIBhhPj1klonEQOPlyOizyIlgVBkFIv/erMobiA6uMraGz/8og=="
    }

    xml格式
    <xml>
        <ToUserName>gh_6ad1513a84d8</ToUserName>
        <Encrypt><![CDATA[vys1ev/gqMW8ykkgBwe9K5He4S8YxyT3ZUssaknxvnqv+LQCENfMXvhKrG3CLn0QcOWqNugfQYp/+jZ3vk/EQ3k700gPuIcf0kouwPiGijThCT70aXUQHy72TiuSo/+j4ooC6AKNJw0kLe4E1qGBJfaAJeplzEz2AefpU6d2ed0sZHZSOETFUMDfYiAm32ZW5XfydSRvlMQF9mOIGvhtW9il3Te1uxEKndWOJ+PMLftLQGtqguxkqmsaelrmG0dLk5lJDUvjVXRRksX8vnBE/YWOSSepCSvUre1Yrz+rkAGZ1uIlLluJAT93ugKwNGuG7SfeLn67A3A/6QcH8R8hSOQmQPzTi1dEoZcX/BJddh9cU49yXJwXAVDzz5p/mYb6pd+LG9MMD09obUVkIdq+1YsWW7aIyrtLYO3TKIBhhPj1klonEQOPlyOizyIlgVBkFIv/erMobiA6uMraGz/8og==]]></Encrypt>
    </xml>

#### 3\. 微信将上述请求包通过http post方式发送开发者在mp平台上配置的URL

    json格式
    POST
    http://yourdomain/youdir?timestamp=XXX&nonce=XXX&msg_signature=XXX&signature=XXX

    {"ToUserName":"gh_6ad1513a84d8","Encrypt":"vys1ev/gqMW8ykkgBwe9K5He4S8YxyT3ZUssaknxvnqv+LQCENfMXvhKrG3CLn0QcOWqNugfQYp/+jZ3vk/EQ3k700gPuIcf0kouwPiGijThCT70aXUQHy72TiuSo/+j4ooC6AKNJw0kLe4E1qGBJfaAJeplzEz2AefpU6d2ed0sZHZSOETFUMDfYiAm32ZW5XfydSRvlMQF9mOIGvhtW9il3Te1uxEKndWOJ+PMLftLQGtqguxkqmsaelrmG0dLk5lJDUvjVXRRksX8vnBE/YWOSSepCSvUre1Yrz+rkAGZ1uIlLluJAT93ugKwNGuG7SfeLn67A3A/6QcH8R8hSOQmQPzTi1dEoZcX/BJddh9cU49yXJwXAVDzz5p/mYb6pd+LG9MMD09obUVkIdq+1YsWW7aIyrtLYO3TKIBhhPj1klonEQOPlyOizyIlgVBkFIv/erMobiA6uMraGz/8og=="}

    xml格式
    POST
    http://yourdomain/youdir?timestamp=XXX&nonce=XXX&msg_signature=XXX&signature=XXX

    <xml><ToUserName>gh_6ad1513a84d8</ToUserName><Encrypt><![CDATA[vys1ev/gqMW8ykkgBwe9K5He4S8YxyT3ZUssaknxvnqv+LQCENfMXvhKrG3CLn0QcOWqNugfQYp/+jZ3vk/EQ3k700gPuIcf0kouwPiGijThCT70aXUQHy72TiuSo/+j4ooC6AKNJw0kLe4E1qGBJfaAJeplzEz2AefpU6d2ed0sZHZSOETFUMDfYiAm32ZW5XfydSRvlMQF9mOIGvhtW9il3Te1uxEKndWOJ+PMLftLQGtqguxkqmsaelrmG0dLk5lJDUvjVXRRksX8vnBE/YWOSSepCSvUre1Yrz+rkAGZ1uIlLluJAT93ugKwNGuG7SfeLn67A3A/6QcH8R8hSOQmQPzTi1dEoZcX/BJddh9cU49yXJwXAVDzz5p/mYb6pd+LG9MMD09obUVkIdq+1YsWW7aIyrtLYO3TKIBhhPj1klonEQOPlyOizyIlgVBkFIv/erMobiA6uMraGz/8og==]]></Encrypt></xml>

#### 4\. 第三方收到请求之后需要验证签名和解密

其中msg_signature为timestamp、nonce、Encrypt和token这四个字段进行的签名，不需要验证signature字段，只需要验证msg_signature。

#### 5\. 第三方需要处理业务逻辑后将数据按照以下json格式进行组织

    lifespan: 告诉微信此次数据可以缓存多久，单位为秒
    query:    步骤1中的query原封不动填到这里，为json_encode之后的字符串 
    scene:    固定为1，表明来自搜索
    data:     根据各个业务数据数据文档进行编写，为json_encode之后的字符串；其中err_code和err_msg为必须字段，err_code中0代表正确，非0代表错误，请按规范返回错误码并且前端显示提示语：-1：无结果 -2：参数不对 -3：系统错误

    {
        "lifespan": 60,  
        "query": "{\"type\":1,\"slot_list\":[{\"key\":\"stock_code\",\"value\":\"00700\"}, {\"key\":\"stock_market\",\"value\":\"hk\"}],
                    \"longitude\":113.319694519,\"latitude\":23.102640152}", 
        "scene": 1,
        "data": "{\"err_code\":0, \"err_msg\":\"\", \"other custom data...\"}"  
    }

#### 6\. 第三方需要将数据按照以下格式进行组包

Content为步骤5的json进行json_encode之后的字符串

    json格式
    {
    	"ToUserName":"oAbb80HJy9Uqkpxxxxxxxxx",
    	"FromUserName":"gh_54e07XXXXX",
    	"CreateTime":1499048811,
    	"MsgType":"widget_data",
    	"Content": "{ \"lifespan\": 60,\"query\": \"{\\\"type\\\":1,\\\"slot_list\\\":[{\\\"key\\\":\\\"stock_code\\\",\\\"value\\\":\\\"0700\\\"}, {\\\"key\\\":\\\"stock_market\\\",\\\"value\\\":\\\"hk\\\"}],\\\"longitude\\\":113.319694519,\\\"latitude\\\":23.102640152}\",  \"scene\": 1,  \"data\": {\\\"err_code\\\":0, \\\"err_msg\\\":\\\"\\\", \\\"other custom data...\\\"}}"
    }

    xml格式
    <xml>
    	<ToUserName>oAbb80HJy9Uqkpxxxxxxxxx</ToUserName>
    	<FromUserName>gh_54e07XXXXX</FromUserName>
    	<CreateTime>1499048811</CreateTime>
    	<MsgType>widget_data</MsgType>
    	<Content><![CDATA[ {"lifespan": 60, "query": "{\"type\":1,\"slot_list\":[{\"key\":\"stock_code\",\"value\":\"0700\"}, {\"key\":\"stock_market\",\"value\":\"hk\"}],\"longitude\":113.319694519,\"latitude\":23.102640152}\", "scene": 1, "data": {\"err_code\":0, \"err_msg\":\"\", \"other custom data...\"} } ]]></Content>
    </xml>

#### 7\. 第三方需要将数据进行加密和签名，并将数据包返回给微信

Encrypt为步骤6进行加密和编码之后的字符串，MsgSignature为Encrypt、Timestamp、Nonce和token进行的签名

    json格式
    {
        "Encrypt":"unqZKge43FJn75RVHiAxGfIvrMgx+YbHABAIH7fiEgNgZgdTWGk13+uJvGwqE94LQ0oNDgHSPUcheVuriBTz+0IipenXLqLVQVnKtppkcH9awZAtuYhT2mg8wy4Z5BBst38VH7isWMeqC4ukwo+3hBYvLr2d7MEiGyDULWjlbIifCtZx3pLz0kbqUz0TacOINHfVBUmzk07TdkTdupdxL1CQWDyzBMb618HD31SIHuROTyTFXa1n5t3KWzni+eki7HTBQd3Vyz7Hi9Kke5gYdj8RkORahX0q+CUUun92eF9y2IUAVuiOWXgwqn0fRDDVr0Swz21GrRxWGRGP6NzCO7smp2b9c7ztbTuaxPbsxO4bDB1kg2Da3+Z5RcHSDEvwBtkU3ps88QA8/hk3lpBlcyfewBtsHqIyTqvx8/bZOzpT5rN4H8lKtPvKdQVZzcuyxH4VptuyfUx3DKMVZyXV9J0V8xmjsUWsb2hqqRPHEBIPwS0QDI23YnmlpyB4PxYqy+erENk4dyZZlQhRsv0AG24bw4ajovllfR4HjaI4XtY=",
        "MsgSignature":"ad75308035efbe84bb0b59fb90c5be966ff38d42",
        "TimeStamp":"1410329438",
        "Nonce":"12980754"
    }

    xml格式
    <xml>
        <Encrypt><![CDATA[unqZKge43FJn75RVHiAxGfIvrMgx+YbHABAIH7fiEgNgZgdTWGk13+uJvGwqE94LQ0oNDgHSPUcheVuriBTz+0IipenXLqLVQVnKtppkcH9awZAtuYhT2mg8wy4Z5BBst38VH7isWMeqC4ukwo+3hBYvLr2d7MEiGyDULWjlbIifCtZx3pLz0kbqUz0TacOINHfVBUmzk07TdkTdupdxL1CQWDyzBMb618HD31SIHuROTyTFXa1n5t3KWzni+eki7HTBQd3Vyz7Hi9Kke5gYdj8RkORahX0q+CUUun92eF9y2IUAVuiOWXgwqn0fRDDVr0Swz21GrRxWGRGP6NzCO7smp2b9c7ztbTuaxPbsxO4bDB1kg2Da3+Z5RcHSDEvwBtkU3ps88QA8/hk3lpBlcyfewBtsHqIyTqvx8/bZOzpT5rN4H8lKtPvKdQVZzcuyxH4VptuyfUx3DKMVZyXV9J0V8xmjsUWsb2hqqRPHEBIPwS0QDI23YnmlpyB4PxYqy+erENk4dyZZlQhRsv0AG24bw4ajovllfR4HjaI4XtY=]]></Encrypt>
        <MsgSignature>ad75308035efbe84bb0b59fb90c5be966ff38d42</MsgSignature>
        <TimeStamp>1410329438</TimeStamp>
        <Nonce>12980754</Nonce>
    </xml>

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

*   [关于腾讯](https://www.tencent.com/)
*   [文档中心](https://developers.weixin.qq.com/miniprogram/introduction/index.html)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo)
*   [客服中心](https://kf.qq.com/product/wx_xcx.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](../testconfig.html)[](../debug.html)</div>

</div>