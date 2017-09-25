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
*   [框架](MINA.html)
*   [组件](../component/)
*   [API](../api/)
*   [工具](../devtools/devtools.html)
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

*   [目录结构](structure.html)
*   [配置](config.html)
*   [逻辑层](app-service/)
    *   [注册程序](app-service/app.html)
    *   [场景值](app-service/scene.html)
    *   [注册页面](app-service/page.html)
    *   [路由](app-service/route.html)
    *   [模块化](app-service/module.html)
    *   [API](app-service/api.html)
*   [视图层](view/)
    *   [WXML](view/wxml/)
        *   [数据绑定](view/wxml/data.html)
        *   [列表渲染](view/wxml/list.html)
        *   [条件渲染](view/wxml/conditional.html)
        *   [模板](view/wxml/template.html)
        *   [事件](view/wxml/event.html)
        *   [引用](view/wxml/import.html)
    *   [WXS](view/wxs/)
        *   [模块](view/wxs/01wxs-module.html)
        *   [变量](view/wxs/02variate.html)
        *   [注释](view/wxs/03annotation.html)
        *   [运算符](view/wxs/04operator.html)
        *   [语句](view/wxs/05statement.html)
        *   [数据类型](view/wxs/06datatype.html)
        *   [基础类库](view/wxs/07basiclibrary.html)
    *   [WXSS](view/wxss.html)
    *   [组件](view/component.html)
*   [基础库](client-lib.html)
*   [兼容](compatibility.html)
*   [运行机制](operating-mechanism.html)
*   [性能](performance/)
    *   [优化建议](performance/tips.html)
    *   [分析工具](performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 配置

`app.json`文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

以下是一个包含了所有配置选项的 `app.json` ：

    {
      "pages": [
        "pages/index/index",
        "pages/logs/index"
      ],
      "window": {
        "navigationBarTitleText": "Demo"
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
      },
      "debug": true
    }

### app.json 配置项列表

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

<td>[pages](#pages)</td>

<td>String Array</td>

<td>是</td>

<td>设置页面路径</td>

</tr>

<tr>

<td>[window](#window)</td>

<td>Object</td>

<td>否</td>

<td>设置默认页面的窗口表现</td>

</tr>

<tr>

<td>[tabBar](#tabbar)</td>

<td>Object</td>

<td>否</td>

<td>设置底部 tab 的表现</td>

</tr>

<tr>

<td>[networkTimeout](#networktimeout)</td>

<td>Object</td>

<td>否</td>

<td>设置网络超时时间</td>

</tr>

<tr>

<td>[debug](#debug)</td>

<td>Boolean</td>

<td>否</td>

<td>设置是否开启 debug 模式</td>

</tr>

</tbody>

</table>

### pages

接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的【路径+文件名】信息，**数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对 pages 数组进行修改。**

文件名不需要写文件后缀，因为框架会自动去寻找路径下 `.json`, `.js`, `.wxml`, `.wxss` 四个文件进行整合。

如开发目录为：

> pages/
> 
> pages/index/index.wxml
> 
> pages/index/index.js
> 
> pages/index/index.wxss
> 
> pages/logs/logs.wxml
> 
> pages/logs/logs.js
> 
> app.js
> 
> app.json
> 
> app.wxss

则需要在 app.json 中写

    {
      "pages":[
        "pages/index/index",
        "pages/logs/logs"
      ]
    }

### window

用于设置小程序的状态栏、导航条、标题、窗口背景色。

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>默认值</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>navigationBarBackgroundColor</td>

<td>HexColor</td>

<td>#000000</td>

<td>导航栏背景颜色，如"#000000"</td>

</tr>

<tr>

<td>navigationBarTextStyle</td>

<td>String</td>

<td>white</td>

<td>导航栏标题颜色，仅支持 black/white</td>

</tr>

<tr>

<td>navigationBarTitleText</td>

<td>String</td>

<td></td>

<td>导航栏标题文字内容</td>

</tr>

<tr>

<td>backgroundColor</td>

<td>HexColor</td>

<td>#ffffff</td>

<td>窗口的背景色</td>

</tr>

<tr>

<td>backgroundTextStyle</td>

<td>String</td>

<td>dark</td>

<td>下拉背景字体、loading 图的样式，仅支持 dark/light</td>

</tr>

<tr>

<td>enablePullDownRefresh</td>

<td>Boolean</td>

<td>false</td>

<td>是否开启下拉刷新，详见[页面相关事件处理函数](app-service/page.html#页面相关事件处理函数)。</td>

</tr>

<tr>

<td>onReachBottomDistance</td>

<td>Number</td>

<td>50</td>

<td>页面上拉触底事件触发时距页面底部距离，单位为px</td>

</tr>

</tbody>

</table>

**注：HexColor（十六进制颜色值），如"#ff00ff"**

如 app.json ：

    {
      "window":{
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "微信接口功能演示",
        "backgroundColor": "#eeeeee",
        "backgroundTextStyle": "light"
      }
    }

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/config.jpg)

### tabBar

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

**Tip：**

1.  当设置 position 为 top 时，将不会显示 icon
2.  tabBar 中的 list 是一个数组，**只能配置最少2个、最多5个 tab**，tab 按数组的顺序排序。

**属性说明：**

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>必填</th>

<th>默认值</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>color</td>

<td>HexColor</td>

<td>是</td>

<td></td>

<td>tab 上的文字默认颜色</td>

</tr>

<tr>

<td>selectedColor</td>

<td>HexColor</td>

<td>是</td>

<td></td>

<td>tab 上的文字选中时的颜色</td>

</tr>

<tr>

<td>backgroundColor</td>

<td>HexColor</td>

<td>是</td>

<td></td>

<td>tab 的背景色</td>

</tr>

<tr>

<td>borderStyle</td>

<td>String</td>

<td>否</td>

<td>black</td>

<td>tabbar上边框的颜色， 仅支持 black/white</td>

</tr>

<tr>

<td>list</td>

<td>Array</td>

<td>是</td>

<td></td>

<td>tab 的列表，详见 list 属性说明，最少2个、最多5个 tab</td>

</tr>

<tr>

<td>position</td>

<td>String</td>

<td>否</td>

<td>bottom</td>

<td>可选值 bottom、top</td>

</tr>

</tbody>

</table>

其中 list 接受一个数组，数组中的每个项都是一个对象，其属性值如下：

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>必填</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>pagePath</td>

<td>String</td>

<td>是</td>

<td>页面路径，必须在 pages 中先定义</td>

</tr>

<tr>

<td>text</td>

<td>String</td>

<td>是</td>

<td>tab 上按钮文字</td>

</tr>

<tr>

<td>iconPath</td>

<td>String</td>

<td>否</td>

<td>图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效</td>

</tr>

<tr>

<td>selectedIconPath</td>

<td>String</td>

<td>否</td>

<td>选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效</td>

</tr>

</tbody>

</table>

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/tabbar.png)

### networkTimeout

可以设置各种网络请求的超时时间。

**属性说明：**

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>必填</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>request</td>

<td>Number</td>

<td>否</td>

<td>[wx.request](../api/network-request.html)的超时时间，单位毫秒，默认为：60000</td>

</tr>

<tr>

<td>connectSocket</td>

<td>Number</td>

<td>否</td>

<td>[wx.connectSocket](../api/network-socket.html)的超时时间，单位毫秒，默认为：60000</td>

</tr>

<tr>

<td>uploadFile</td>

<td>Number</td>

<td>否</td>

<td>[wx.uploadFile](../api/network-file.html#wxuploadfileobject)的超时时间，单位毫秒，默认为：60000</td>

</tr>

<tr>

<td>downloadFile</td>

<td>Number</td>

<td>否</td>

<td>[wx.downloadFile](../api/network-file.html#wxdownloadfileobject)的超时时间，单位毫秒，默认为：60000</td>

</tr>

</tbody>

</table>

### debug

可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有`Page的注册`，`页面路由`，`数据更新`，`事件触发` 。 可以帮助开发者快速定位一些常见的问题。

## page.json

每一个小程序页面也可以使用`.json`文件来对本页面的窗口表现进行配置。 页面的配置比`app.json`全局配置简单得多，只是设置 app.json 中的 window 配置项的内容，页面中配置项会覆盖 app.json 的 window 中相同的配置项。

页面的`.json`只能设置 `window` 相关的配置项，以决定本页面的窗口表现，所以无需写 `window` 这个键，如：

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>默认值</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>navigationBarBackgroundColor</td>

<td>HexColor</td>

<td>#000000</td>

<td>导航栏背景颜色，如"#000000"</td>

</tr>

<tr>

<td>navigationBarTextStyle</td>

<td>String</td>

<td>white</td>

<td>导航栏标题颜色，仅支持 black/white</td>

</tr>

<tr>

<td>navigationBarTitleText</td>

<td>String</td>

<td></td>

<td>导航栏标题文字内容</td>

</tr>

<tr>

<td>backgroundColor</td>

<td>HexColor</td>

<td>#ffffff</td>

<td>窗口的背景色</td>

</tr>

<tr>

<td>backgroundTextStyle</td>

<td>String</td>

<td>dark</td>

<td>下拉背景字体、loading 图的样式，仅支持 dark/light</td>

</tr>

<tr>

<td>enablePullDownRefresh</td>

<td>Boolean</td>

<td>false</td>

<td>是否开启下拉刷新，详见[页面相关事件处理函数](app-service/page.html#页面相关事件处理函数)。</td>

</tr>

<tr>

<td>disableScroll</td>

<td>Boolean</td>

<td>false</td>

<td>设置为 true 则页面整体不能上下滚动；只在 page.json 中有效，无法在 app.json 中设置该项</td>

</tr>

<tr>

<td>onReachBottomDistance</td>

<td>Number</td>

<td>50</td>

<td>页面上拉触底事件触发时距页面底部距离，单位为px</td>

</tr>

</tbody>

</table>

    {
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "微信接口功能演示",
      "backgroundColor": "#eeeeee",
      "backgroundTextStyle": "light"
    }

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

[](structure.html)[](app-service/)</div>

</div>