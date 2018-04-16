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

# 组件间关系

## 定义和使用组件间关系

有时需要实现这样的组件：

    <custom-ul>
      <custom-li> item 1 </custom-li>
      <custom-li> item 2 </custom-li>
    </custom-ul>

这个例子中， `custom-ul` 和 `custom-li` 都是自定义组件，它们有相互间的关系，相互间的通信往往比较复杂。此时在组件定义时加入 `relations` 定义段，可以解决这样的问题。示例：

    // path/to/custom-ul.js
    Component({
      relations: {
        './custom-li': {
          type: 'child', // 关联的目标节点应为子节点
          linked: function(target) {
            // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
          },
          linkChanged: function(target) {
            // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
          },
          unlinked: function(target) {
            // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
          }
        }
      },
      methods: {
        _getAllLi: function(){
          // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
          var nodes = this.getRelationNodes('path/to/custom-li')
        }
      },
      ready: function(){
        this._getAllLi()
      }
    })

    // path/to/custom-li.js
    Component({
      relations: {
        './custom-ul': {
          type: 'parent', // 关联的目标节点应为父节点
          linked: function(target) {
            // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
          },
          linkChanged: function(target) {
            // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
          },
          unlinked: function(target) {
            // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
          }
        }
      }
    })

**注意：必须在两个组件定义中都加入relations定义，否则不会生效。**

## 关联一类组件

有时，需要关联的是一类组件，如：

    <custom-form>
      <view>
        input
        <custom-input></custom-input>
      </view>
      <custom-submit> submit </custom-submit>
    </custom-form>

`custom-form` 组件想要关联 `custom-input` 和 `custom-submit` 两个组件。此时，如果这两个组件都有同一个behavior：

    // path/to/custom-form-controls.js
    module.exports = Behavior({
      // ...
    })

    // path/to/custom-input.js
    var customFormControls = require('./custom-form-controls')
    Component({
      behaviors: [customFormControls],
      relations: {
        './custom-form': {
          type: 'ancestor', // 关联的目标节点应为祖先节点
        }
      }
    })

    // path/to/custom-submit.js
    var customFormControls = require('./custom-form-controls')
    Component({
      behaviors: [customFormControls],
      relations: {
        './custom-form': {
          type: 'ancestor', // 关联的目标节点应为祖先节点
        }
      }
    })

则在 `relations` 关系定义中，可使用这个behavior来代替组件路径作为关联的目标节点：

    // path/to/custom-form.js
    var customFormControls = require('./custom-form-controls')
    Component({
      relations: {
        'customFormControls': {
          type: 'descendant', // 关联的目标节点应为子孙节点
          target: customFormControls
        }
      }
    })

## relations 定义段

`relations` 定义段包含目标组件路径及其对应选项，可包含的选项见下表。

<table>

<thead>

<tr>

<th>选项</th>

<th>类型</th>

<th>是否必填</th>

<th>描述</th>

</tr>

</thead>

<tbody>

<tr>

<td>type</td>

<td>String</td>

<td>是</td>

<td>目标组件的相对关系，可选的值为 `parent` 、 `child` 、 `ancestor` 、 `descendant`</td>

</tr>

<tr>

<td>linked</td>

<td>Function</td>

<td>否</td>

<td>关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后</td>

</tr>

<tr>

<td>linkChanged</td>

<td>Function</td>

<td>否</td>

<td>关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后</td>

</tr>

<tr>

<td>unlinked</td>

<td>Function</td>

<td>否</td>

<td>关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后</td>

</tr>

<tr>

<td>target</td>

<td>String</td>

<td>否</td>

<td>如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联</td>

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

[](behaviors.html)[](generics.html)</div>

</div>