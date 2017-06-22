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

*   [简易教程](../../../)
*   [框架](../../MINA.html)
*   [组件](../../../component/)
*   [API](../../../api/)
*   [工具](../../../devtools/devtools.html)
*   [Q&A](../../../qa.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [目录结构](../../structure.html)
*   [配置](../../config.html)
*   [逻辑层](../../app-service/)
    *   [注册程序](../../app-service/app.html)
    *   [场景值](../../app-service/scene.html)
    *   [注册页面](../../app-service/page.html)
    *   [路由](../../app-service/route.html)
    *   [模块化](../../app-service/module.html)
    *   [API](../../app-service/api.html)
*   [视图层](../)
    *   [WXML](./)
        *   [数据绑定](data.html)
        *   [列表渲染](list.html)
        *   [条件渲染](conditional.html)
        *   [模板](template.html)
        *   [事件](event.html)
        *   [引用](import.html)
    *   [WXSS](../wxss.html)
    *   [组件](../component.html)
*   [基础库](../../client-lib.html)
*   [兼容](../../compatibility.html)
*   [性能](../../performance.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 列表渲染

### wx:for

在组件上使用`wx:for`控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

默认数组的当前项的下标变量名默认为`index`，数组当前项的变量名默认为`item`

    <view wx:for="{{array}}">
      {{index}}: {{item.message}}
    </view>

    Page({
      data: {
        array: [{
          message: 'foo',
        }, {
          message: 'bar'
        }]
      }
    })

使用 `wx:for-item` 可以指定数组当前元素的变量名，

使用 `wx:for-index` 可以指定数组当前下标的变量名：

    <view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
      {{idx}}: {{itemName.message}}
    </view>

`wx:for`也可以嵌套，下边是一个九九乘法表

    <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
      <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
        <view wx:if="{{i <= j}}">
          {{i}} * {{j}} = {{i * j}}
        </view>
      </view>
    </view>

### block wx:for

类似`block wx:if`，也可以将`wx:for`用在`<block/>`标签上，以渲染一个包含多节点的结构块。例如：

    <block wx:for="{{[1, 2, 3]}}">
      <view> {{index}}: </view>
      <view> {{item}} </view>
    </block>

### wx:key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `<input/>` 中的输入内容，`<switch/>` 的选中状态），需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

`wx:key` 的值以两种形式提供

1.  字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。
2.  保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如：

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

**如不提供 `wx:key`，会报一个 `warning`， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。**

**示例代码：**

    <switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>
    <button bindtap="switch"> Switch </button>
    <button bindtap="addToFront"> Add to the front </button>

    <switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>
    <button bindtap="addNumberToFront"> Add to the front </button>

    Page({
      data: {
        objectArray: [
          {id: 5, unique: 'unique_5'},
          {id: 4, unique: 'unique_4'},
          {id: 3, unique: 'unique_3'},
          {id: 2, unique: 'unique_2'},
          {id: 1, unique: 'unique_1'},
          {id: 0, unique: 'unique_0'},
        ],
        numberArray: [1, 2, 3, 4]
      },
      switch: function(e) {
        const length = this.data.objectArray.length
        for (let i = 0; i < length; ++i) {
          const x = Math.floor(Math.random() * length)
          const y = Math.floor(Math.random() * length)
          const temp = this.data.objectArray[x]
          this.data.objectArray[x] = this.data.objectArray[y]
          this.data.objectArray[y] = temp
        }
        this.setData({
          objectArray: this.data.objectArray
        })
      },
      addToFront: function(e) {
        const length = this.data.objectArray.length
        this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
        this.setData({
          objectArray: this.data.objectArray
        })
      },
      addNumberToFront: function(e){
        this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
        this.setData({
          numberArray: this.data.numberArray
        })
      }
    })

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

[](data.html)[](conditional.html)</div>

</div>