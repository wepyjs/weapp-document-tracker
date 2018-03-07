<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html)
*   [设计](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
    *   [小游戏开发](https://mp.weixin.qq.com/debug/wxagame/dev/index.html)
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
    *   [WXML](../wxml/)
        *   [数据绑定](../wxml/data.html)
        *   [列表渲染](../wxml/list.html)
        *   [条件渲染](../wxml/conditional.html)
        *   [模板](../wxml/template.html)
        *   [事件](../wxml/event.html)
        *   [引用](../wxml/import.html)
    *   [WXS](./)
        *   [模块](01wxs-module.html)
        *   [变量](02variate.html)
        *   [注释](03annotation.html)
        *   [运算符](04operator.html)
        *   [语句](05statement.html)
        *   [数据类型](06datatype.html)
        *   [基础类库](07basiclibrary.html)
    *   [WXSS](../wxss.html)
    *   [组件](../component.html)
*   [自定义组件](../../custom-component/)
    *   [组件模版和样式](../../custom-component/wxml-wxss.html)
    *   [Component构造器](../../custom-component/component.html)
    *   [组件事件](../../custom-component/events.html)
    *   [behaviors](../../custom-component/behaviors.html)
    *   [组件间关系](../../custom-component/relations.html)
*   [分包加载](../../subpackages.html)
*   [多线程](../../workers.html)
*   [基础库](../../client-lib.html)
*   [兼容](../../compatibility.html)
*   [运行机制](../../operating-mechanism.html)
*   [性能](../../performance/)
    *   [优化建议](../../performance/tips.html)
    *   [分析工具](../../performance/tools.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

# 数据类型

WXS 语言目前共有以下几种数据类型：

*   `number` ： 数值
*   `string` ：字符串
*   `boolean`：布尔值
*   `object`：对象
*   `function`：函数
*   `array` : 数组
*   `date`：日期
*   `regexp`：正则

## number

### 语法

number 包括两种数值：整数，小数。

    var a = 10;
    var PI = 3.141592653589793;

### 属性

*   `constructor`：返回字符串 `"Number"`。

### 方法

*   `toString`
*   `toLocaleString`
*   `valueOf`
*   `toFixed`
*   `toExponential`
*   `toPrecision`

> 以上方法的具体使用请参考 `ES5` 标准。

## string

### 语法

string 有两种写法：

    'hello world';
    "hello world";

### 属性

*   `constructor`：返回字符串 `"String"`。
*   `length`

> 除constructor外属性的具体含义请参考 `ES5` 标准。

### 方法

*   `toString`
*   `valueOf`
*   `charAt`
*   `charCodeAt`
*   `concat`
*   `indexOf`
*   `lastIndexOf`
*   `localeCompare`
*   `match`
*   `replace`
*   `search`
*   `slice`
*   `split`
*   `substring`
*   `toLowerCase`
*   `toLocaleLowerCase`
*   `toUpperCase`
*   `toLocaleUpperCase`
*   `trim`

> 以上方法的具体使用请参考 `ES5` 标准。

## boolean

### 语法

布尔值只有两个特定的值：`true` 和 `false`。

### 属性

*   `constructor`：返回字符串 `"Boolean"`。

### 方法

*   `toString`
*   `valueOf`

> 以上方法的具体使用请参考 `ES5` 标准。

## object

### 语法

object 是一种无序的键值对。使用方法如下所示：

    var o = {} //生成一个新的空对象

    //生成一个新的非空对象
    o = {
      'string'  : 1,  //object 的 key 可以是字符串
      const_var : 2,  //object 的 key 也可以是符合变量定义规则的标识符
      func      : {}, //object 的 value 可以是任何类型
    };

    //对象属性的读操作
    console.log(1 === o['string']);
    console.log(2 === o.const_var);

    //对象属性的写操作
    o['string']++;
    o['string'] += 10;
    o.const_var++;
    o.const_var += 10;

    //对象属性的读操作
    console.log(12 === o['string']);
    console.log(13 === o.const_var);

### 属性

*   `constructor`：返回字符串 `"Object"`。

    console.log("Object" === {k:"1",v:"2"}.constructor)

### 方法

*   `toString`：返回字符串 `"[object Object]"`。

## function

### 语法

function 支持以下的定义方式：

    //方法 1
    function a (x) {
      return x;
    }

    //方法 2
    var b = function (x) { 
      return x;
    }

function 同时也支持以下的语法（匿名函数，闭包等）：

    var a = function (x) {
      return function () { return x;}
    }

    var b = a(100);
    console.log( 100 === b() );

### arguments

function 里面可以使用 `arguments` 关键词。该关键词目前只支持以下的属性：

*   `length`: 传递给函数的参数个数。
*   `[index]`: 通过 `index` 下标可以遍历传递给函数的每个参数。

**示例代码：**

    var a = function(){
        console.log(3 === arguments.length);
        console.log(100 === arguments[0]);
        console.log(200 === arguments[1]);
        console.log(300 === arguments[2]);
    };
    a(100,200,300);

### 属性

*   `constructor`：返回字符串 `"Function"`。
*   `length`：返回函数的形参个数。

### 方法

*   `toString`：返回字符串 `"[function Function]"`。

**示例代码：**

    var func = function (a,b,c) { }

    console.log("Function" === func.constructor);
    console.log(3 === func.length);
    console.log("[function Function]" === func.toString());

## array

### 语法

array 支持以下的定义方式：

    var a = [];      //生成一个新的空数组

    a = [1,"2",{},function(){}];  //生成一个新的非空数组，数组元素可以是任何类型

### 属性

*   `constructor`：返回字符串 `"Array"`。
*   `length`

> 除constructor外属性的具体含义请参考 `ES5` 标准。

### 方法

*   `toString`
*   `concat`
*   `join`
*   `pop`
*   `push`
*   `reverse`
*   `shift`
*   `slice`
*   `sort`
*   `splice`
*   `unshift`
*   `indexOf`
*   `lastIndexOf`
*   `every`
*   `some`
*   `forEach`
*   `map`
*   `filter`
*   `reduce`
*   `reduceRight`

> 以上方法的具体使用请参考 `ES5` 标准。

## date

### 语法

生成 date 对象需要使用 `getDate`函数, 返回一个当前时间的对象。

    getDate()
    getDate(milliseconds)
    getDate(datestring)
    getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])

*   参数
    *   `milliseconds`: 从1970年1月1日00:00:00 UTC开始计算的毫秒数
    *   `datestring`: 日期字符串，其格式为："month day, year hours:minutes:seconds"

**示例代码：**

    var date = getDate(); //返回当前时间对象

    date = getDate(1500000000000);
    // Fri Jul 14 2017 10:40:00 GMT+0800 (中国标准时间)
    date = getDate('2017-7-14');
    // Fri Jul 14 2017 00:00:00 GMT+0800 (中国标准时间)
    date = getDate(2017, 6, 14, 10, 40, 0, 0);
    // Fri Jul 14 2017 10:40:00 GMT+0800 (中国标准时间)

### 属性

*   `constructor`：返回字符串 “Date”。

### 方法

*   `toString`
*   `toDateString`
*   `toTimeString`
*   `toLocaleString`
*   `toLocaleDateString`
*   `toLocaleTimeString`
*   `valueOf`
*   `getTime`
*   `getFullYear`
*   `getUTCFullYear`
*   `getMonth`
*   `getUTCMonth`
*   `getDate`
*   `getUTCDate`
*   `getDay`
*   `getUTCDay`
*   `getHours`
*   `getUTCHours`
*   `getMinutes`
*   `getUTCMinutes`
*   `getSeconds`
*   `getUTCSeconds`
*   `getMilliseconds`
*   `getUTCMilliseconds`
*   `getTimezoneOffset`
*   `setTime`
*   `setMilliseconds`
*   `setUTCMilliseconds`
*   `setSeconds`
*   `setUTCSeconds`
*   `setMinutes`
*   `setUTCMinutes`
*   `setHours`
*   `setUTCHours`
*   `setDate`
*   `setUTCDate`
*   `setMonth`
*   `setUTCMonth`
*   `setFullYear`
*   `setUTCFullYear`
*   `toUTCString`
*   `toISOString`
*   `toJSON`

> 以上方法的具体使用请参考 `ES5` 标准。

## regexp

### 语法

生成 regexp 对象需要使用 `getRegExp`函数。

    getRegExp(pattern[, flags])

*   参数：
    *   `pattern`: 正则表达式的内容。
    *   `flags`：修饰符。该字段只能包含以下字符:
        *   `g`: global
        *   `i`: ignoreCase
        *   `m`: multiline。

**示例代码：**

    var a = getRegExp("x", "img");
    console.log("x" === a.source);
    console.log(true === a.global);
    console.log(true === a.ignoreCase);
    console.log(true === a.multiline);

### 属性

*   `constructor`：返回字符串 `"RegExp"`。
*   `source`
*   `global`
*   `ignoreCase`
*   `multiline`
*   `lastIndex`

> 除constructor外属性的具体含义请参考 `ES5` 标准。

### 方法

*   `exec`
*   `test`
*   `toString`

> 以上方法的具体使用请参考 `ES5` 标准。

## 数据类型判断

### `constructor` 属性

数据类型的判断可以使用 `constructor` 属性。

**示例代码：**

    var number = 10;
    console.log( "Number" === number.constructor );

    var string = "str";
    console.log( "String" === string.constructor );

    var boolean = true;
    console.log( "Boolean" === boolean.constructor );

    var object = {};
    console.log( "Object" === object.constructor );

    var func = function(){};
    console.log( "Function" === func.constructor );

    var array = [];
    console.log( "Array" === array.constructor );

    var date = getDate();
    console.log( "Date" === date.constructor );

    var regexp = getRegExp();
    console.log( "RegExp" === regexp.constructor );

### `typeof`

使用 `typeof` 也可以区分部分数据类型。

**示例代码：**

    var number = 10;
    var boolean = true;
    var object = {};
    var func = function(){};
    var array = [];
    var date = getDate();
    var regexp = getRegExp();

    console.log( 'number' === typeof number );
    console.log( 'boolean' === typeof boolean );
    console.log( 'object' === typeof object );
    console.log( 'function' === typeof func );
    console.log( 'object' === typeof array );
    console.log( 'object' === typeof date );
    console.log( 'object' === typeof regexp );

    console.log( 'undefined' === typeof undefined );
    console.log( 'object' === typeof null );

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

[](05statement.html)[](07basiclibrary.html)</div>

</div>