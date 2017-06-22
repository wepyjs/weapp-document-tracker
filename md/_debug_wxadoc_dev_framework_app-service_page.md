<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017621)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017621)
*   [开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html?t=2017621)
*   [运营](https://mp.weixin.qq.com/debug/wxadoc/product/index.html?t=2017621)
*   [数据](https://mp.weixin.qq.com/debug/wxadoc/analysis/index.html?t=2017621)

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

*   [简易教程](../../)
*   [框架](../MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
*   [工具](../../devtools/devtools.html)
*   [Q&A](../../qa.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](../structure.html)
*   [配置](../config.html)
*   [逻辑层](./)
    *   [注册程序](app.html)
    *   [场景值](scene.html)
    *   [注册页面](page.html)
    *   [路由](route.html)
    *   [模块化](module.html)
    *   [API](api.html)
*   [视图层](../view/)
    *   [WXML](../view/wxml/)
        *   [数据绑定](../view/wxml/data.html)
        *   [列表渲染](../view/wxml/list.html)
        *   [条件渲染](../view/wxml/conditional.html)
        *   [模板](../view/wxml/template.html)
        *   [事件](../view/wxml/event.html)
        *   [引用](../view/wxml/import.html)
    *   [WXSS](../view/wxss.html)
    *   [组件](../view/component.html)
*   [基础库](../client-lib.html)
*   [兼容](../compatibility.html)
*   [性能](../performance.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# Page

`Page()` 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

**object 参数说明：**

<table>

<thead>

<tr>

<th>属性</th>

<th>类型</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>[data](#初始化数据)</td>

<td>Object</td>

<td>页面的初始数据</td>

</tr>

<tr>

<td>onLoad</td>

<td>Function</td>

<td>生命周期函数--监听页面加载</td>

</tr>

<tr>

<td>onReady</td>

<td>Function</td>

<td>生命周期函数--监听页面初次渲染完成</td>

</tr>

<tr>

<td>onShow</td>

<td>Function</td>

<td>生命周期函数--监听页面显示</td>

</tr>

<tr>

<td>onHide</td>

<td>Function</td>

<td>生命周期函数--监听页面隐藏</td>

</tr>

<tr>

<td>onUnload</td>

<td>Function</td>

<td>生命周期函数--监听页面卸载</td>

</tr>

<tr>

<td>onPullDownRefresh</td>

<td>Function</td>

<td>页面相关事件处理函数--监听用户下拉动作</td>

</tr>

<tr>

<td>onReachBottom</td>

<td>Function</td>

<td>页面上拉触底事件的处理函数</td>

</tr>

<tr>

<td>onShareAppMessage</td>

<td>Function</td>

<td>用户点击右上角转发</td>

</tr>

<tr>

<td>route</td>

<td>String</td>

<td>当前页面的路径</td>

</tr>

<tr>

<td>其他</td>

<td>Any</td>

<td>开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 `this` 可以访问</td>

</tr>

</tbody>

</table>

**示例代码：**

    //index.js
    Page({
      data: {
        text: "This is page data."
      },
      onLoad: function(options) {
        // Do some initialize when page load.
      },
      onReady: function() {
        // Do something when page ready.
      },
      onShow: function() {
        // Do something when page show.
      },
      onHide: function() {
        // Do something when page hide.
      },
      onUnload: function() {
        // Do something when page close.
      },
      onPullDownRefresh: function() {
        // Do something when pull down.
      },
      onReachBottom: function() {
        // Do something when page reach bottom.
      },
      onShareAppMessage: function () {
       // return custom share data when user share.
      },
      // Event handler.
      viewTap: function() {
        this.setData({
          text: 'Set some data for updating view.'
        })
      },
      customData: {
        hi: 'MINA'
      }
    })

### 初始化数据

初始化数据将作为页面的第一次渲染。data 将会以 JSON 的形式由逻辑层传至渲染层，所以其数据必须是可以转成 JSON 的格式：字符串，数字，布尔值，对象，数组。

渲染层可以通过 [WXML](../view/wxml/) 对数据进行绑定。

**示例代码：**

    <view>{{text}}</view>
    <view>{{array[0].msg}}</view>

    Page({
      data: {
        text: 'init data',
        array: [{msg: '1'}, {msg: '2'}]
      }
    })

### 生命周期函数

*   `onLoad`: 页面加载

    *   一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
*   `onShow`: 页面显示

    *   每次打开页面都会调用一次。
*   `onReady`: 页面初次渲染完成

    *   一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
    *   对界面的设置如`wx.setNavigationBarTitle`请在`onReady`之后设置。详见[生命周期](#生命周期)
*   `onHide`: 页面隐藏

    *   当`navigateTo`或底部`tab`切换时调用。
*   `onUnload`: 页面卸载

    *   当`redirectTo`或`navigateBack`的时候调用。

生命周期的调用以及页面的路由方式[详见](route.html)

**onLoad参数**

<table>

<thead>

<tr>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>Object</td>

<td>其他页面打开当前页面所调用的 query 参数</td>

</tr>

</tbody>

</table>

### 页面相关事件处理函数

*   `onPullDownRefresh`: 下拉刷新
    *   监听用户下拉刷新事件。
    *   需要在`config`的[`window`](../config.html#window)选项中开启`enablePullDownRefresh`。
    *   当处理完数据刷新后，[`wx.stopPullDownRefresh`](../../api/pulldown.html#wxstoppulldownrefresh)可以停止当前页面的下拉刷新。

*   `onShareAppMessage`: 用户转发
    *   只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
    *   用户点击转发按钮的时候会调用
    *   此事件需要 return 一个 Object，用于自定义转发内容

**自定义转发字段**

<table>

<thead>

<tr>

<th>字段</th>

<th>说明</th>

<th>默认值</th>

</tr>

</thead>

<tbody>

<tr>

<td>title</td>

<td>转发标题</td>

<td>当前小程序名称</td>

</tr>

<tr>

<td>path</td>

<td>转发路径</td>

<td>当前页面 path ，必须是以 / 开头的完整路径</td>

</tr>

</tbody>

</table>

**示例代码**

    Page({
      onShareAppMessage: function () {
        return {
          title: '自定义转发标题',
          path: '/page/user?id=123'
        }
      }
    })

### 事件处理函数

除了初始化数据和生命周期函数，Page 中还可以定义一些特殊的函数：事件处理函数。在渲染层可以在组件中加入[事件绑定](../view/wxml/event.html)，当达到触发事件时，就会执行 Page 中定义的事件处理函数。

**示例代码：**

    <view bindtap="viewTap"> click me </view>

    Page({
      viewTap: function() {
        console.log('view tap')
      }
    })

### Page.prototype.setData()

`setData` 函数用于将数据从逻辑层发送到视图层，同时改变对应的 `this.data` 的值。

### setData() 参数格式

接受一个对象，以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value。

其中 key 可以非常灵活，以数据路径的形式给出，如 `array[2].message`，`a.b.c.d`，并且不需要在 this.data 中预先定义。

**注意：**

1.  **直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致**
2.  **单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据**。

**示例代码：**

    <!--index.wxml-->
    <view>{{text}}</view>
    <button bindtap="changeText"> Change normal data </button>
    <view>{{num}}</view>
    <button bindtap="changeNum"> Change normal num </button>
    <view>{{array[0].text}}</view>
    <button bindtap="changeItemInArray"> Change Array data </button>
    <view>{{object.text}}</view>
    <button bindtap="changeItemInObject"> Change Object data </button>
    <view>{{newField.text}}</view>
    <button bindtap="addNewField"> Add new data </button>

    //index.js
    Page({
      data: {
        text: 'init data',
        num: 0,
        array: [{text: 'init data'}],
        object: {
          text: 'init data'
        }
      },
      changeText: function() {
        // this.data.text = 'changed data'  // bad, it can not work
        this.setData({
          text: 'changed data'
        })
      },
      changeNum: function() {
        this.data.num = 1
        this.setData({
          num: this.data.num
        })
      },
      changeItemInArray: function() {
        // you can use this way to modify a danamic data path
        this.setData({
          'array[0].text':'changed data'
        })
      },
      changeItemInObject: function(){
        this.setData({
          'object.text': 'changed data'
        });
      },
      addNewField: function() {
        this.setData({
          'newField.text': 'new data'
        })
      }
    })

**以下内容你不需要立马完全弄明白，不过以后它会有帮助。**

### 生命周期

下图说明了 Page 实例的生命周期。

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/mina-lifecycle.png?t=2017621)

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
*   [文档中心](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=1484641676&t=2017621)
*   [辟谣中心](https://mp.weixin.qq.com/cgi-bin/opshowpage?action=dispelinfo&lang=zh_CN&begin=1&count=9)
*   [客服中心](http://kf.qq.com/faq/120911VrYVrA1509086vyumm.html)
*   [联系邮箱](mailto:weixinmp@qq.com)
*   Copyright © 2012-<span id="s_copyright_year"></span> Tencent. All Rights Reserved.

</div>

</div>

[](scene.html)[](route.html)</div>

</div>