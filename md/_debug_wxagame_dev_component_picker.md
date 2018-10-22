<div class="book with-summary">

<div class="head">

<div class="head_box">

# [](javascript:; "_('微信公众平台 小程序')")

<div class="header_ctrls">

*   [介绍](javascript:;)
    *   [小程序介绍](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=18102216)
    *   [小游戏介绍](https://developers.weixin.qq.com/minigame/introduction/index.html?t=18102216)
*   [设计](https://developers.weixin.qq.com/miniprogram/design/index.html?t=18102216)
*   [小程序开发](javascript:;)
    *   [小程序开发](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18102216)
    *   [小游戏开发](https://developers.weixin.qq.com/minigame/dev/index.html?t=18102216)
*   [运营](https://developers.weixin.qq.com/miniprogram/product/index.html?t=18102216)
*   [数据](javascript:;)
    *   [小程序数据](https://developers.weixin.qq.com/miniprogram/analysis/index.html?t=18102216)
    *   [小游戏数据](https://developers.weixin.qq.com/minigame/analysis/index.html?t=18102216)
*   [社区](https://developers.weixin.qq.com/)

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html?t=18102216)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/picker.html?t=18102216)

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
*   [框架](../framework/MINA.html)
*   [组件](.)
*   [API](../api/)
*   [工具](../devtools/devtools.html)
*   [小程序·云开发](../wxcloud/basis/getting-started.html)

</div>

<div id="book-search-input" role="search">

<form><label for="search-input" class="search-icon" id="js-search-icon"></label><input type="text" id="search-input" name="search-input" placeholder="搜索"> </form>

</div>

*   [中文](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html?t=18102216)<span class="split-line">/</span>
*   [EN](https://developers.weixin.qq.com/miniprogram/en/dev/component/picker.html?t=18102216)

</div>

</div>

<div class="book-summary">

<div class="book-summary-home" id="js-summary-home"><a><span class="icon_home_s icon_dev"></span><span class="s_title_2">开发文档首页</span></a></div>

<nav role="navigation">

*   [视图容器](./view.html)
    *   [view](./view.html)
    *   [scroll-view](./scroll-view.html)
    *   [swiper](./swiper.html)
    *   [movable-view](./movable-view.html)
    *   [cover-view](./cover-view.html)
*   [基础内容](./icon.html)
    *   [icon](./icon.html)
    *   [text](./text.html)
    *   [rich-text](./rich-text.html)
    *   [progress](./progress.html)
*   [表单组件](./button.html)
    *   [button](./button.html)
    *   [checkbox](./checkbox.html)
    *   [form](./form.html)
    *   [input](./input.html)
    *   [label](./label.html)
    *   [picker](./picker.html)
    *   [picker-view](./picker-view.html)
    *   [radio](./radio.html)
    *   [slider](./slider.html)
    *   [switch](./switch.html)
    *   [textarea](./textarea.html)
*   [导航](./navigator.html)
    *   [navigator](./navigator.html)
    *   [functional-page-navigator](./functional-page-navigator.html)
*   [媒体组件](./audio.html)
    *   [audio](./audio.html#audio)
    *   [image](./image.html)
    *   [video](./video.html)
    *   [camera](./camera.html)
    *   [live-player](./live-player.html)
    *   [live-pusher](./live-pusher.html)
*   [地图](./map.html)
    *   [map](./map.html#map)
*   [画布](./canvas.html)
    *   [canvas](./canvas.html#canvas)
*   [开放能力](./open-data.html)
    *   [open-data](./open-data.html)
    *   [web-view](./web-view.html)
    *   [ad](./ad.html)
    *   [official-account](./official-account.html)
*   [原生组件说明](./native-component.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

#### picker

从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。

**普通选择器：mode = selector**

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>range</td>

<td>Array / Object Array</td>

<td>[]</td>

<td>mode为 selector 或 multiSelector 时，range 有效</td>

<td></td>

</tr>

<tr>

<td>range-key</td>

<td>String</td>

<td></td>

<td>当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容</td>

<td></td>

</tr>

<tr>

<td>value</td>

<td>Number</td>

<td>0</td>

<td>value 的值表示选择了 range 中的第几个（下标从 0 开始）</td>

<td></td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td></td>

</tr>

<tr>

<td>bindcancel</td>

<td>EventHandle</td>

<td></td>

<td>取消选择或点遮罩层收起 picker 时触发</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**多列选择器：mode = multiSelector**（最低版本：[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")）

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>range</td>

<td>二维Array / 二维Object Array</td>

<td>[]</td>

<td>mode为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如`[["a","b"], ["c","d"]]`</td>

<td></td>

</tr>

<tr>

<td>range-key</td>

<td>String</td>

<td></td>

<td>当 range 是一个 二维Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容</td>

<td></td>

</tr>

<tr>

<td>value</td>

<td>Array</td>

<td>[]</td>

<td>value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）</td>

<td></td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>bindcolumnchange</td>

<td>EventHandle</td>

<td></td>

<td>某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标</td>

<td></td>

</tr>

<tr>

<td>bindcancel</td>

<td>EventHandle</td>

<td></td>

<td>取消选择时触发</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td></td>

</tr>

</tbody>

</table>

**时间选择器：mode = time**

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>value</td>

<td>String</td>

<td></td>

<td>表示选中的时间，格式为"hh:mm"</td>

<td></td>

</tr>

<tr>

<td>start</td>

<td>String</td>

<td></td>

<td>表示有效时间范围的开始，字符串格式为"hh:mm"</td>

<td></td>

</tr>

<tr>

<td>end</td>

<td>String</td>

<td></td>

<td>表示有效时间范围的结束，字符串格式为"hh:mm"</td>

<td></td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>bindcancel</td>

<td>EventHandle</td>

<td></td>

<td>取消选择时触发</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td></td>

</tr>

</tbody>

</table>

**日期选择器：mode = date**

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>value</td>

<td>String</td>

<td>0</td>

<td>表示选中的日期，格式为"YYYY-MM-DD"</td>

<td></td>

</tr>

<tr>

<td>start</td>

<td>String</td>

<td></td>

<td>表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"</td>

<td></td>

</tr>

<tr>

<td>end</td>

<td>String</td>

<td></td>

<td>表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"</td>

<td></td>

</tr>

<tr>

<td>fields</td>

<td>String</td>

<td>day</td>

<td>有效值 year,month,day，表示选择器的粒度</td>

<td></td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value}</td>

<td></td>

</tr>

<tr>

<td>bindcancel</td>

<td>EventHandle</td>

<td></td>

<td>取消选择时触发</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td></td>

</tr>

</tbody>

</table>

**fields 有效值：**

<table>

<thead>

<tr>

<th>值</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>year</td>

<td>选择器粒度为年</td>

</tr>

<tr>

<td>month</td>

<td>选择器粒度为月份</td>

</tr>

<tr>

<td>day</td>

<td>选择器粒度为天</td>

</tr>

</tbody>

</table>

**省市区选择器：mode = region**（最低版本：[1.4.0](../framework/compatibility.html "基础库 1.4.0 开始支持，低版本需做兼容处理。")）

<table>

<thead>

<tr>

<th>属性名</th>

<th>类型</th>

<th>默认值</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>value</td>

<td>Array</td>

<td>[]</td>

<td>表示选中的省市区，默认选中每一列的第一个值</td>

<td></td>

</tr>

<tr>

<td>custom-item</td>

<td>String</td>

<td></td>

<td>可为每一列的顶部添加一个自定义的项</td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>bindchange</td>

<td>EventHandle</td>

<td></td>

<td>value 改变时触发 change 事件，event.detail = {value: value, code: code, postcode: postcode}，其中字段code是统计用区划代码，postcode是邮政编码</td>

<td></td>

</tr>

<tr>

<td>bindcancel</td>

<td>EventHandle</td>

<td></td>

<td>取消选择时触发</td>

<td>[1.9.90](../framework/compatibility.html "基础库 1.9.90 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>disabled</td>

<td>Boolean</td>

<td>false</td>

<td>是否禁用</td>

<td></td>

</tr>

</tbody>

</table>

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/pZb21cmH6qYX "在开发者工具中预览效果")

    <view class="section">
      <view class="section__title">普通选择器</view>
      <picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
        <view class="picker">
          当前选择：{{array[index]}}
        </view>
      </picker>
    </view>
    <view class="section">
      <view class="section__title">多列选择器</view>
      <picker mode="multiSelector" bindchange="bindMultiPickerChange" bindcolumnchange="bindMultiPickerColumnChange" value="{{multiIndex}}" range="{{multiArray}}">
        <view class="picker">
          当前选择：{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
        </view>
      </picker>
    </view>
    <view class="section">
      <view class="section__title">时间选择器</view>
      <picker mode="time" value="{{time}}" start="09:01" end="21:01" bindchange="bindTimeChange">
        <view class="picker">
          当前选择: {{time}}
        </view>
      </picker>
    </view>

    <view class="section">
      <view class="section__title">日期选择器</view>
      <picker mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="bindDateChange">
        <view class="picker">
          当前选择: {{date}}
        </view>
      </picker>
    </view>
    <view class="section">
      <view class="section__title">省市区选择器</view>
      <picker mode="region" bindchange="bindRegionChange" value="{{region}}" custom-item="{{customItem}}">
        <view class="picker">
          当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
        </view>
      </picker>
    </view>

    Page({
      data: {
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
          {
            id: 0,
            name: '美国'
          },
          {
            id: 1,
            name: '中国'
          },
          {
            id: 2,
            name: '巴西'
          },
          {
            id: 3,
            name: '日本'
          }
        ],
        index: 0,
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
        objectMultiArray: [
          [
            {
              id: 0,
              name: '无脊柱动物'
            },
            {
              id: 1,
              name: '脊柱动物'
            }
          ], [
            {
              id: 0,
              name: '扁性动物'
            },
            {
              id: 1,
              name: '线形动物'
            },
            {
              id: 2,
              name: '环节动物'
            },
            {
              id: 3,
              name: '软体动物'
            },
            {
              id: 3,
              name: '节肢动物'
            }
          ], [
            {
              id: 0,
              name: '猪肉绦虫'
            },
            {
              id: 1,
              name: '吸血虫'
            }
          ]
        ],
        multiIndex: [0, 0, 0],
        date: '2016-09-01',
        time: '12:01',
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部'
      },
      bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
      bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          multiIndex: e.detail.value
        })
      },
      bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
          multiArray: this.data.multiArray,
          multiIndex: this.data.multiIndex
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
          case 0:
            switch (data.multiIndex[0]) {
              case 0:
                data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
            }
            data.multiIndex[1] = 0;
            data.multiIndex[2] = 0;
            break;
          case 1:
            switch (data.multiIndex[0]) {
              case 0:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                    break;
                  case 1:
                    data.multiArray[2] = ['蛔虫'];
                    break;
                  case 2:
                    data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                    break;
                  case 3:
                    data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                    break;
                  case 4:
                    data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                    break;
                }
                break;
              case 1:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['鲫鱼', '带鱼'];
                    break;
                  case 1:
                    data.multiArray[2] = ['青蛙', '娃娃鱼'];
                    break;
                  case 2:
                    data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                    break;
                }
                break;
            }
            data.multiIndex[2] = 0;
            console.log(data.multiIndex);
            break;
        }
        this.setData(data);
      },
      bindDateChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          date: e.detail.value
        })
      },
      bindTimeChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          time: e.detail.value
        })
      },
      bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          region: e.detail.value
        })
      }
    })

![picker](https://developers.weixin.qq.com/miniprogram/dev/image/pic/picker.png?t=18102216)

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

[](./label.html)[](./picker-view.html)</div>

</div>