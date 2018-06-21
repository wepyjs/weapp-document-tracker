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

*   [简易教程](../../)
*   [框架](../MINA.html)
*   [组件](../../component/)
*   [API](../../api/)
*   [工具](../../devtools/devtools.html)
*   [腾讯云支持](../../qcloud/qcloud.html)

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
*   [逻辑层](../app-service/)
    *   [注册程序](../app-service/app.html)
    *   [场景值](../app-service/scene.html)
    *   [注册页面](../app-service/page.html)
    *   [路由](../app-service/route.html)
    *   [模块化](../app-service/module.html)
    *   [API](../app-service/api.html)
*   [视图层](../view/)
    *   [WXML](../view/wxml/)
        *   [数据绑定](../view/wxml/data.html)
        *   [列表渲染](../view/wxml/list.html)
        *   [条件渲染](../view/wxml/conditional.html)
        *   [模板](../view/wxml/template.html)
        *   [事件](../view/wxml/event.html)
        *   [引用](../view/wxml/import.html)
    *   [WXS](../view/wxs/)
        *   [模块](../view/wxs/01wxs-module.html)
        *   [变量](../view/wxs/02variate.html)
        *   [注释](../view/wxs/03annotation.html)
        *   [运算符](../view/wxs/04operator.html)
        *   [语句](../view/wxs/05statement.html)
        *   [数据类型](../view/wxs/06datatype.html)
        *   [基础类库](../view/wxs/07basiclibrary.html)
    *   [WXSS](../view/wxss.html)
    *   [组件](../view/component.html)
*   [自定义组件](./)
    *   [组件模版和样式](wxml-wxss.html)
    *   [Component构造器](component.html)
    *   [组件事件](events.html)
    *   [behaviors](behaviors.html)
    *   [组件间关系](relations.html)
    *   [抽象节点](generics.html)
*   [插件](../plugin/)
    *   [开发插件](../plugin/development.html)
    *   [使用插件](../plugin/using.html)
    *   [插件的限制](../plugin/api-limit.html)
    *   [插件功能页](../plugin/functional-pages.html)
*   [分包加载](../subpackages.html)
*   [多线程](../workers.html)
*   [基础库](../client-lib.html)
*   [兼容](../compatibility.html)
*   [运行机制](../operating-mechanism.html)
*   [性能](../performance/)
    *   [优化建议](../performance/tips.html)
    *   [分析工具](../performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# Component构造器

## 定义段与示例方法

Component构造器可用于定义组件，调用Component构造器时可以指定组件的属性、数据、方法等。

<table>

<thead>

<tr>

<th>定义段</th>

<th>类型</th>

<th>是否必填</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>properties</td>

<td>Object Map</td>

<td>否</td>

<td>组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段， `type` 表示属性类型、 `value` 表示属性初始值、 `observer` 表示属性值被更改时的响应函数</td>

</tr>

<tr>

<td>data</td>

<td>Object</td>

<td>否</td>

<td>组件的内部数据，和 `properties` 一同用于组件的模版渲染</td>

</tr>

<tr>

<td>methods</td>

<td>Object</td>

<td>否</td>

<td>组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 [组件事件](events.html)</td>

</tr>

<tr>

<td>behaviors</td>

<td>String Array</td>

<td>否</td>

<td>类似于mixins和traits的组件间代码复用机制，参见 [behaviors](behaviors.html)</td>

</tr>

<tr>

<td>created</td>

<td>Function</td>

<td>否</td>

<td>组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 `setData`</td>

</tr>

<tr>

<td>attached</td>

<td>Function</td>

<td>否</td>

<td>组件生命周期函数，在组件实例进入页面节点树时执行</td>

</tr>

<tr>

<td>ready</td>

<td>Function</td>

<td>否</td>

<td>组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 [SelectorQuery](../../api/wxml-nodes-info.html) ）</td>

</tr>

<tr>

<td>moved</td>

<td>Function</td>

<td>否</td>

<td>组件生命周期函数，在组件实例被移动到节点树另一个位置时执行</td>

</tr>

<tr>

<td>detached</td>

<td>Function</td>

<td>否</td>

<td>组件生命周期函数，在组件实例被从页面节点树移除时执行</td>

</tr>

<tr>

<td>relations</td>

<td>Object</td>

<td>否</td>

<td>组件间关系定义，参见 [组件间关系](relations.html)</td>

</tr>

<tr>

<td>externalClasses</td>

<td>String Array</td>

<td>否</td>

<td>组件接受的外部样式类，参见 [外部样式类](wxml-wxss.html)</td>

</tr>

<tr>

<td>options</td>

<td>Object Map</td>

<td>否</td>

<td>一些组件选项，请参见文档其他部分的说明</td>

</tr>

</tbody>

</table>

生成的组件实例可以在组件的方法、生命周期函数和属性 `observer` 中通过 `this` 访问。组件包含一些通用属性和方法。

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>is</td>

<td>String</td>

<td>组件的文件路径</td>

</tr>

<tr>

<td>id</td>

<td>String</td>

<td>节点id</td>

</tr>

<tr>

<td>dataset</td>

<td>String</td>

<td>节点dataset</td>

</tr>

<tr>

<td>data</td>

<td>Object</td>

<td>组件数据，**包括内部数据和属性值**</td>

</tr>

<tr>

<td>properties</td>

<td>Object</td>

<td>组件数据，**包括内部数据和属性值**（与 `data` 一致）</td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>方法名</th>

<th>参数</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>setData</td>

<td>Object `newData`</td>

<td>设置data并执行视图层渲染</td>

</tr>

<tr>

<td>hasBehavior</td>

<td>Object `behavior`</td>

<td>检查组件是否具有 `behavior` （检查时会递归检查被直接或间接引入的所有behavior）</td>

</tr>

<tr>

<td>triggerEvent</td>

<td>String `name`, Object `detail`, Object `options`</td>

<td>触发事件，参见 [组件事件](events.html)</td>

</tr>

<tr>

<td>createSelectorQuery</td>

<td></td>

<td>创建一个 [SelectorQuery](../../api/wxml-nodes-info.html) 对象，选择器选取范围为这个组件实例内</td>

</tr>

<tr>

<td>selectComponent</td>

<td>String `selector`</td>

<td>使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象</td>

</tr>

<tr>

<td>selectAllComponents</td>

<td>String `selector`</td>

<td>使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组</td>

</tr>

<tr>

<td>getRelationNodes</td>

<td>String `relationKey`</td>

<td>获取所有这个关系对应的所有关联节点，参见 [组件间关系](relations.html)</td>

</tr>

</tbody>

</table>

**代码示例：**

[在开发者工具中预览效果](wechatide://minicode/B7f1UKmO6pZV)

    Component({

      behaviors: [],

      properties: {
        myProperty: { // 属性名
          type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
          value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
          observer: function(newVal, oldVal, changedPath) {
             // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
             // 通常 newVal 就是新设置的数据， oldVal 是旧数据
          }
        },
        myProperty2: String // 简化的定义方式
      },
      data: {}, // 私有数据，可用于模版渲染

      // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
      attached: function(){},
      moved: function(){},
      detached: function(){},

      methods: {
        onMyButtonTap: function(){
          this.setData({
            // 更新属性和数据的方法与更新页面数据的方法类似
          })
        },
        // 内部方法建议以下划线开头
        _myPrivateMethod: function(){
          // 这里将 data.A[0].B 设为 'myPrivateData'
          this.setData({
            'A[0].B': 'myPrivateData'
          })
        },
        _propertyChange: function(newVal, oldVal) {

        }
      }

    })

注意：在 `properties` 定义段中，属性名采用驼峰写法（`propertyName`）；在 `wxml` 中，指定属性值时则对应使用连字符写法（`component-tag-name property-name="attr value"`），应用于数据绑定时采用驼峰写法（`attr="{{propertyName}}"`）。

## 使用 Component 构造器构造页面

事实上，小程序的页面也可以视为自定义组件。因而，页面也可以使用 `Component` 构造器构造，拥有与普通组件一样的定义段与实例方法。但此时要求对应 json 文件中包含 `usingComponents` 定义段。

此时，组件的属性可以用于接收页面的参数，如访问页面 `/pages/index/index?paramA=123&paramB=xyz` ，如果声明有属性 `paramA` 或 `paramB` ，则它们会被赋值为 `123` 或 `xyz` 。

**代码示例：**

    {
      "usingComponents": {}
    }

    Component({

      properties: {
        paramA: Number,
        paramB: String,
      },

      methods: {
        onLoad: function() {
          this.data.paramA // 页面参数 paramA 的值
          this.data.paramB // 页面参数 paramA 的值
        }
      }

    })

#### Bug & Tips:

*   使用 `this.data` 可以获取内部数据和属性值，但不要直接修改它们，应使用 `setData` 修改。
*   生命周期函数无法在组件方法中通过 `this` 访问到。
*   属性名应避免以 data 开头，即不要命名成 `dataXyz` 这样的形式，因为在 WXML 中， `data-xyz=""` 会被作为节点 dataset 来处理，而不是组件属性。
*   在一个组件的定义和使用时，组件的属性名和data字段相互间都不能冲突（尽管它们位于不同的定义段中）。
*   `bug` : 对于 type 为 Object 或 Array 的属性，如果通过该组件自身的 this.setData 来改变属性值的一个子字段，则依旧会触发属性 observer ，且 observer 接收到的 `newVal` 是变化的那个子字段的值， `oldVal` 为空， `changedPath` 包含子字段的字段名相关信息。

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

[](wxml-wxss.html)[](events.html)</div>

</div>