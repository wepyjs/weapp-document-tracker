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

# 运算符

## 基本运算符

**示例代码：**

    var a = 10, b = 20;

    // 加法运算
    console.log(30 === a + b);
    // 减法运算
    console.log(-10 === a - b);
    // 乘法运算
    console.log(200 === a * b);
    // 除法运算
    console.log(0.5 === a / b);
    // 取余运算
    console.log(10 === a % b);

*   加法运算（`+`）也可以用作字符串的拼接。

    var a = '.w' , b = 'xs';

    // 字符串拼接
    console.log('.wxs' === a + b);

## 一元运算符

**示例代码：**

    var a = 10, b = 20;

    // 自增运算
    console.log(10 === a++);
    console.log(12 === ++a);
    // 自减运算
    console.log(12 === a--);
    console.log(10 === --a);
    // 正值运算
    console.log(10 === +a);
    // 负值运算
    console.log(0-10 === -a);
    // 否运算
    console.log(-11 === ~a);
    // 取反运算
    console.log(false === !a);
    // delete 运算
    console.log(true === delete a.fake);
    // void 运算
    console.log(undefined === void a);
    // typeof 运算
    console.log("number" === typeof a);

## 位运算符

**示例代码：**

    var a = 10, b = 20;

    // 左移运算
    console.log(80 === (a << 3));
    // 无符号右移运算
    console.log(2 === (a >> 2));
    // 带符号右移运算
    console.log(2 === (a >>> 2));
    // 与运算
    console.log(2 === (a & 3));
    // 异或运算
    console.log(9 === (a ^ 3));
    // 或运算
    console.log(11 === (a | 3));

## 比较运算符

**示例代码：**

    var a = 10, b = 20;

    // 小于
    console.log(true === (a < b));
    // 大于
    console.log(false === (a > b));
    // 小于等于
    console.log(true === (a <= b));
    // 大于等于
    console.log(false === (a >= b));

## 等值运算符

**示例代码：**

    var a = 10, b = 20;

    // 等号
    console.log(false === (a == b));
    // 非等号
    console.log(true === (a != b));
    // 全等号
    console.log(false === (a === b));
    // 非全等号
    console.log(true === (a !== b));

## 赋值运算符

**示例代码：**

    var a = 10;

    a = 10; a *= 10;
    console.log(100 === a);
    a = 10; a /= 5;
    console.log(2 === a);
    a = 10; a %= 7;
    console.log(3 === a);
    a = 10; a += 5;
    console.log(15 === a);
    a = 10; a -= 11;
    console.log(-1 === a);
    a = 10; a <<= 10;
    console.log(10240 === a);
    a = 10; a >>= 2;
    console.log(2 === a);
    a = 10; a >>>= 2;
    console.log(2 === a);
    a = 10; a &= 3;
    console.log(2 === a);
    a = 10; a ^= 3;
    console.log(9 === a);
    a = 10; a |= 3;
    console.log(11 === a);

## 二元逻辑运算符

**示例代码：**

    var a = 10, b = 20;

    // 逻辑与
    console.log(20 === (a && b));
    // 逻辑或
    console.log(10 === (a || b));

## 其他运算符

**示例代码：**

    var a = 10, b = 20;

    //条件运算符
    console.log(20 === (a >= 10 ? a + 10 : b + 10));
    //逗号运算符
    console.log(20 === (a, b));

## 运算符优先级

<table>

<thead>

<tr>

<th>优先级</th>

<th>运算符</th>

<th>说明</th>

<th>结合性</th>

</tr>

</thead>

<tbody>

<tr>

<td>20</td>

<td>`(` ... `)`</td>

<td>括号</td>

<td>n/a</td>

</tr>

<tr>

<td>19</td>

<td>... `.` ...</td>

<td>成员访问</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `[` ... `]`</td>

<td>成员访问</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `(` ... `)`</td>

<td>函数调用</td>

<td>从左到右</td>

</tr>

<tr>

<td>17</td>

<td>... `++`</td>

<td>后置递增</td>

<td>n/a</td>

</tr>

<tr>

<td></td>

<td>... `--`</td>

<td>后置递减</td>

<td>n/a</td>

</tr>

<tr>

<td>16</td>

<td>`!` ...</td>

<td>逻辑非</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`~` ...</td>

<td>按位非</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`+` ...</td>

<td>一元加法</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`-` ...</td>

<td>一元减法</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`++` ...</td>

<td>前置递增</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`--` ...</td>

<td>前置递减</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`typeof` ...</td>

<td>typeof</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`void` ...</td>

<td>void</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>`delete` ...</td>

<td>delete</td>

<td>从右到左</td>

</tr>

<tr>

<td>14</td>

<td>... `*` ...</td>

<td>乘法</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `/` ...</td>

<td>除法</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `%` ...</td>

<td>取模</td>

<td>从左到右</td>

</tr>

<tr>

<td>13</td>

<td>... `+` ...</td>

<td>加法</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `-` ...</td>

<td>减法</td>

<td>从左到右</td>

</tr>

<tr>

<td>12</td>

<td>... `<<` ...</td>

<td>按位左移</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `>>` ...</td>

<td>按位右移</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `>>>` ...</td>

<td>无符号右移</td>

<td>从左到右</td>

</tr>

<tr>

<td>11</td>

<td>... `<` ...</td>

<td>小于</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `<=` ...</td>

<td>小于等于</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `>` ...</td>

<td>大于</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `>=` ...</td>

<td>大于等于</td>

<td>从左到右</td>

</tr>

<tr>

<td>10</td>

<td>... `==` ...</td>

<td>等号</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `!=` ...</td>

<td>非等号</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `===` ...</td>

<td>全等号</td>

<td>从左到右</td>

</tr>

<tr>

<td></td>

<td>... `!==` ...</td>

<td>非全等号</td>

<td>从左到右</td>

</tr>

<tr>

<td>9</td>

<td>... `&` ...</td>

<td>按位与</td>

<td>从左到右</td>

</tr>

<tr>

<td>8</td>

<td>... `^` ...</td>

<td>按位异或</td>

<td>从左到右</td>

</tr>

<tr>

<td>7</td>

<td>... `｜` ...</td>

<td>按位或</td>

<td>从左到右</td>

</tr>

<tr>

<td>6</td>

<td>... `&&` ...</td>

<td>逻辑与</td>

<td>从左到右</td>

</tr>

<tr>

<td>5</td>

<td>... `｜｜` ...</td>

<td>逻辑或</td>

<td>从左到右</td>

</tr>

<tr>

<td>4</td>

<td>... `?` ... `:` ...</td>

<td>条件运算符</td>

<td>从右到左</td>

</tr>

<tr>

<td>3</td>

<td>... `=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `+=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `-=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `*=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `/=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `%=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `<<=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `>>=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `>>>=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `&=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `^=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td></td>

<td>... `｜=` ...</td>

<td>赋值</td>

<td>从右到左</td>

</tr>

<tr>

<td>0</td>

<td>... `,` ...</td>

<td>逗号</td>

<td>从左到右</td>

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

[](03annotation.html)[](05statement.html)</div>

</div>