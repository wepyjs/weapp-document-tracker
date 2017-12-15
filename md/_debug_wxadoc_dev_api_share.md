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
*   [框架](../framework/MINA.html)
*   [组件](../component/)
*   [API](./)
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

*   [网络](api-network.html)
    *   [发起请求](network-request.html)
        *   [wx.request](network-request.html#wxrequestobject)
    *   [上传、下载](network-file.html)
        *   [wx.uploadFile](network-file.html#wxuploadfileobject)
        *   [wx.downloadFile](network-file.html#wxdownloadfileobject)
    *   [WebSocket](network-socket.html)
        *   [wx.connectSocket](network-socket.html#wxconnectsocketobject)
        *   [wx.onSocketOpen](network-socket.html#wxonsocketopencallback)
        *   [wx.onSocketError](network-socket.html#wxonsocketerrorcallback)
        *   [wx.sendSocketMessage](network-socket.html#wxsendsocketmessageobject)
        *   [wx.onSocketMessage](network-socket.html#wxonsocketmessagecallback)
        *   [wx.closeSocket](network-socket.html#wxclosesocket)
        *   [wx.onSocketClose](network-socket.html#wxonsocketclosecallback)
        *   [SocketTask](socket-task.html)
*   [媒体](media-picture.html)
    *   [图片](media-picture.html)
        *   [wx.chooseImage](media-picture.html#wxchooseimageobject)
        *   [wx.previewImage](media-picture.html#wxpreviewimageobject)
        *   [wx.getImageInfo](media-picture.html#wxgetimageinfoobject)
        *   [wx.saveImageToPhotosAlbum](media-picture.html#wxsaveimagetophotosalbumobject)
    *   [录音](media-record.html)
        *   [wx.startRecord](media-record.html#wxstartrecordobject)
        *   [wx.stopRecord](media-record.html#wxstoprecord)
    *   [录音管理](getRecorderManager.html)
        *   [wx.getRecorderManager](getRecorderManager.html)
    *   [音频播放控制](media-voice.html)
        *   [wx.playVoice](media-voice.html#wxplayvoiceobject)
        *   [wx.pauseVoice](media-voice.html#wxpausevoice)
        *   [wx.stopVoice](media-voice.html#wxstopvoice)
    *   [音乐播放控制](media-background-audio.html)
        *   [wx.getBackgroundAudioPlayerState](media-background-audio.html#wxgetbackgroundaudioplayerstateobject)
        *   [wx.playBackgroundAudio](media-background-audio.html#wxplaybackgroundaudioobject)
        *   [wx.pauseBackgroundAudio](media-background-audio.html#wxpausebackgroundaudio)
        *   [wx.seekBackgroundAudio](media-background-audio.html#wxseekbackgroundaudioobject)
        *   [wx.stopBackgroundAudio](media-background-audio.html#wxstopbackgroundaudio)
        *   [wx.onBackgroundAudioPlay](media-background-audio.html#wxonbackgroundaudioplaycallback)
        *   [wx.onBackgroundAudioPause](media-background-audio.html#wxonbackgroundaudiopausecallback)
        *   [wx.onBackgroundAudioStop](media-background-audio.html#wxonbackgroundaudiostopcallback)
    *   [背景音频播放管理](getBackgroundAudioManager.html)
        *   [wx.getBackgroundAudioManager](getBackgroundAudioManager.html)
    *   [音频组件控制](api-audio.html)
        *   [wx.createAudioContext](api-audio.html#wxcreateaudiocontextaudioid)
        *   [wx.createInnerAudioContext](createInnerAudioContext.html)
    *   [视频](media-video.html)
        *   [wx.chooseVideo](media-video.html#wxchoosevideoobject)
        *   [wx.saveVideoToPhotosAlbum](media-video.html#wxsavevideotophotosalbumobject)
    *   [视频组件控制](api-video.html)
        *   [wx.createVideoContext](api-video.html#wxcreatevideocontextvideoid)
    *   [相机组件控制](api-camera.html)
        *   [wx.createCameraContext](api-camera.html)
*   [文件](file.html)
    *   [wx.saveFile](file.html#wxsavefileobject)
    *   [wx.getFileInfo](getFileInfo.html)
    *   [wx.getSavedFileList](file.html#wxgetsavedfilelistobject)
    *   [wx.getSavedFileInfo](file.html#wxgetsavedfileinfoobject)
    *   [wx.removeSavedFile](file.html#wxremovesavedfileobject)
    *   [wx.openDocument](file.html#wxopendocumentobject)
*   [数据缓存](data.html)
    *   [wx.setStorage](data.html#wxsetstorageobject)
    *   [wx.setStorageSync](data.html#wxsetstoragesynckeydata)
    *   [wx.getStorage](data.html#wxgetstorageobject)
    *   [wx.getStorageSync](data.html#wxgetstoragesynckey)
    *   [wx.getStorageInfo](data.html#wxgetstorageinfoobject)
    *   [wx.getStorageInfoSync](data.html#wxgetstorageinfosync)
    *   [wx.removeStorage](data.html#wxremovestorageobject)
    *   [wx.removeStorageSync](data.html#wxremovestoragesynckey)
    *   [wx.clearStorage](data.html#wxclearstorage)
    *   [wx.clearStorageSync](data.html#wxclearstoragesync)
*   [位置](location.html)
    *   [获取位置](location.html)
        *   [wx.getLocation](location.html#wxgetlocationobject)
        *   [wx.chooseLocation](location.html#wxchooselocationobject)
    *   [查看位置](location.html#wxopenlocationobject)
        *   [wx.openLocation](location.html#wxopenlocationobject)
    *   [地图组件控制](api-map.html)
        *   [wx.createMapContext](api-map.html#wxcreatemapcontextmapid)
*   [设备](systeminfo.html)
    *   [系统信息](systeminfo.html)
        *   [wx.getSystemInfo](systeminfo.html#wxgetsysteminfoobject)
        *   [wx.getSystemInfoSync](systeminfo.html#wxgetsysteminfosync)
        *   [wx.canIUse](api-caniuse.html)
    *   [网络状态](device.html)
        *   [wx.getNetworkType](device.html#wxgetnetworktypeobject)
        *   [wx.onNetworkStatusChange](device.html#wxonnetworkstatuschangecallback)
    *   [加速度计](accelerometer.html)
        *   [wx.onAccelerometerChange](accelerometer.html#wxonaccelerometerchangecallback)
        *   [wx.startAccelerometer](accelerometer.html#wxstartaccelerometerobject)
        *   [wx.stopAccelerometer](accelerometer.html#wxstopaccelerometerobject)
    *   [罗盘](compass.html)
        *   [wx.onCompassChange](compass.html#wxoncompasschangecallback)
        *   [wx.startCompass](compass.html#wxstartcompassobject)
        *   [wx.stopCompass](compass.html#wxstopcompassobject)
    *   [拨打电话](phonecall.html)
        *   [wx.makePhoneCall](phonecall.html#wxmakephonecallobject)
    *   [扫码](scancode.html)
        *   [wx.scanCode](scancode.html#wxscancodeobject)
    *   [剪贴板](clipboard.html)
        *   [wx.setClipboardData](clipboard.html#wxsetclipboarddataobject)
        *   [wx.getClipboardData](clipboard.html#wxgetclipboarddataobject)
    *   [蓝牙](bluetooth.html)
        *   [wx.openBluetoothAdapter](bluetooth.html#wxopenbluetoothadapterobject)
        *   [wx.closeBluetoothAdapter](bluetooth.html#wxclosebluetoothadapterobject)
        *   [wx.getBluetoothAdapterState](bluetooth.html#wxgetbluetoothadapterstateobject)
        *   [wx.onBluetoothAdapterStateChange](bluetooth.html#wxonbluetoothadapterstatechangecallback)
        *   [wx.startBluetoothDevicesDiscovery](bluetooth.html#wxstartbluetoothdevicesdiscoveryobject)
        *   [wx.stopBluetoothDevicesDiscovery](bluetooth.html#wxstopbluetoothdevicesdiscoveryobject)
        *   [wx.getBluetoothDevices](bluetooth.html#wxgetbluetoothdevicesobject)
        *   [wx.getConnectedBluetoothDevices](bluetooth.html#wxgetconnectedbluetoothdevicesobject)
        *   [wx.onBluetoothDeviceFound](bluetooth.html#wxonbluetoothdevicefoundcallback)
        *   [wx.createBLEConnection](bluetooth.html#wxcreatebleconnectionobject)
        *   [wx.closeBLEConnection](bluetooth.html#wxclosebleconnectionobject)
        *   [wx.getBLEDeviceServices](bluetooth.html#wxgetbledeviceservicesobject)
        *   [wx.getBLEDeviceCharacteristics](bluetooth.html#wxgetbledevicecharacteristicsobject)
        *   [wx.readBLECharacteristicValue](bluetooth.html#wxreadblecharacteristicvalueobject)
        *   [wx.writeBLECharacteristicValue](bluetooth.html#wxwriteblecharacteristicvalueobject)
        *   [wx.notifyBLECharacteristicValueChange](bluetooth.html#wxnotifyblecharacteristicvaluechangeobject)
        *   [wx.onBLEConnectionStateChange](bluetooth.html#wxonbleconnectionstatechangecallback)
        *   [wx.onBLECharacteristicValueChange](bluetooth.html#wxonblecharacteristicvaluechangecallback)
        *   [错误码](bluetooth.html#蓝牙错误码errcode列表)
    *   [iBeacon](iBeacon.html)
        *   [wx.startBeaconDiscovery](iBeacon.html#wxstartbeacondiscoveryobject)
        *   [wx.stopBeaconDiscovery](iBeacon.html#wxstopbeacondiscoveryobject)
        *   [wx.getBeacons](iBeacon.html#wxgetbeaconsobject)
        *   [wx.onBeaconUpdate](iBeacon.html#wxonbeaconupdatecallback)
        *   [wx.onBeaconServiceChange](iBeacon.html#wxonbeaconservicechangecallback)
    *   [屏幕亮度](device.html#wxsetscreenbrightnessobject)
        *   [wx.setScreenBrightness](device.html#wxsetscreenbrightnessobject)
        *   [wx.getScreenBrightness](device.html#wxgetscreenbrightnessobject)
        *   [wx.setKeepScreenOn](setKeepScreenOn.html)
    *   [用户截屏事件](onUserCaptureScreen.html)
        *   [wx.onUserCaptureScreen](onUserCaptureScreen.html)
    *   [振动](device.html#wxvibratelongobject)
        *   [wx.vibrateLong](device.html#wxvibratelongobject)
        *   [wx.vibrateShort](device.html#wxvibrateshortobject)
    *   [手机联系人](phone-contact.html)
        *   [wx.addPhoneContact](phone-contact.html#wxaddphonecontactobject)
*   [界面](api-react.html)
    *   [交互反馈](api-react.html)
        *   [wx.showToast](api-react.html#wxshowtoastobject)
        *   [wx.showLoading](api-react.html#wxshowloadingobject)
        *   [wx.hideToast](api-react.html#wxhidetoast)
        *   [wx.hideLoading](api-react.html#wxhideloading)
        *   [wx.showModal](api-react.html#wxshowmodalobject)
        *   [wx.showActionSheet](api-react.html#wxshowactionsheetobject)
    *   [设置导航条](ui.html)
        *   [wx.setNavigationBarTitle](ui.html#wxsetnavigationbartitleobject)
        *   [wx.showNavigationBarLoading](ui.html#wxshownavigationbarloading)
        *   [wx.hideNavigationBarLoading](ui.html#wxhidenavigationbarloading)
        *   [wx.setNavigationBarColor](setNavigationBarColor.html)
    *   [设置置顶信息](ui.html#wxsettopbartextobject)
        *   [wx.setTopBarText](ui.html#wxsettopbartextobject)
    *   [导航](ui-navigate.html)
        *   [wx.navigateTo](ui-navigate.html#wxnavigatetoobject)
        *   [wx.redirectTo](ui-navigate.html#wxredirecttoobject)
        *   [wx.switchTab](ui-navigate.html#wxswitchtabobject)
        *   [wx.navigateBack](ui-navigate.html#wxnavigatebackobject)
        *   [wx.reLaunch](ui-navigate.html#wxrelaunchobject)
    *   [动画](api-animation.html)
        *   [wx.createAnimation](api-animation.html#wxcreateanimationobject)
    *   [位置](scroll.html)
        *   [wx.pageScrollTo](scroll.html)
        *   [wx.createSelectorQuery](wxml-nodes-info.html)
    *   [绘图](canvas/reference.html)
        *   [intro](canvas/intro.html)
        *   [coordinates](canvas/coordinates.html)
        *   [gradient](canvas/gradient.html)
        *   [reference](canvas/reference.html)
        *   [color](canvas/color.html)
        *   [wx.createCanvasContext](canvas/create-canvas-context.html)
        *   [wx.createContext](canvas/create-context.html)
        *   [wx.drawCanvas](canvas/draw-canvas.html)
        *   [wx.canvasToTempFilePath](canvas/temp-file.html)
        *   [setFillStyle](canvas/set-fill-style.html)
        *   [setStrokeStyle](canvas/set-stroke-style.html)
        *   [setShadow](canvas/set-shadow.html)
        *   [createLinearGradient](canvas/create-linear-gradient.html)
        *   [createCircularGradient](canvas/create-circular-gradient.html)
        *   [addColorStop](canvas/add-color-stop.html)
        *   [setLineWidth](canvas/set-line-width.html)
        *   [setLineCap](canvas/set-line-cap.html)
        *   [setLineJoin](canvas/set-line-join.html)
        *   [setLineDash](canvas/set-line-dash.html)
        *   [setMiterLimit](canvas/set-miter-limit.html)
        *   [rect](canvas/rect.html)
        *   [fillRect](canvas/fill-rect.html)
        *   [strokeRect](canvas/stroke-rect.html)
        *   [clearRect](canvas/clear-rect.html)
        *   [fill](canvas/fill.html)
        *   [stroke](canvas/stroke.html)
        *   [beginPath](canvas/begin-path.html)
        *   [closePath](canvas/close-path.html)
        *   [moveTo](canvas/move-to.html)
        *   [lineTo](canvas/line-to.html)
        *   [arc](canvas/arc.html)
        *   [bezierCurveTo](canvas/bezier-curve-to.html)
        *   [quadraticCurveTo](canvas/quadratic-curve-to.html)
        *   [scale](canvas/scale.html)
        *   [rotate](canvas/rotate.html)
        *   [translate](canvas/translate.html)
        *   [clip](canvas/clip.html)
        *   [setFontSize](canvas/set-font-size.html)
        *   [fillText](canvas/fill-text.html)
        *   [setTextAlign](canvas/set-text-align.html)
        *   [setTextBaseline](canvas/set-text-baseline.html)
        *   [drawImage](canvas/draw-image.html)
        *   [setGlobalAlpha](canvas/set-global-alpha.html)
        *   [save](canvas/save-restore.html)
        *   [restore](canvas/save-restore.html#restore)
        *   [draw](canvas/draw.html)
        *   [getActions](canvas/get-actions.html)
        *   [clearActions](canvas/clear-actions.html)
    *   [下拉刷新](pulldown.html)
        *   [Page.onPullDownRefresh](pulldown.html#onpulldownrefresh)
        *   [wx.startPullDownRefresh](pulldown.html#wxstartpulldownrefresh)
        *   [wx.stopPullDownRefresh](pulldown.html#wxstoppulldownrefresh)
*   [WXML节点信息](wxml-nodes-info.html)
    *   [wx.createSelectorQuery](wxml-nodes-info.html#wxcreateselectorquery)
    *   [selectorQuery.in](wxml-nodes-info.html#selectorqueryincomponent)
    *   [selectorQuery.select](wxml-nodes-info.html#selectorqueryselectselector)
    *   [selectorQuery.selectAll](wxml-nodes-info.html#selectorqueryselectallselector)
    *   [selectorQuery.selectViewport](wxml-nodes-info.html#selectorqueryselectviewport)
    *   [nodesRef.boundingClientRect](wxml-nodes-info.html#nodesrefboundingclientrectcallback)
    *   [nodesRef.scrollOffset](wxml-nodes-info.html#nodesrefscrolloffsetcallback)
    *   [nodesRef.fields](wxml-nodes-info.html#nodesreffieldsfieldscallback)
    *   [selectorQuery.exec](wxml-nodes-info.html#selectorqueryexeccallback)
*   [第三方平台](ext-api.html)
    *   [wx.getExtConfig](ext-api.html#wxgetextconfigobject)
    *   [wx.getExtConfigSync](ext-api.html#wxgetextconfigsync)
*   [开放接口](api-login.html)
    *   [登录](api-login.html)
        *   [wx.login](api-login.html#wxloginobject)
        *   [wx.checkSession](api-login.html#wxchecksessionobject)
        *   [签名加密](signature.html)
    *   [授权](authorize-index.html)
        *   [wx.authorize](authorize.html#wxauthorizeobject)
    *   [用户信息](open.html)
        *   [wx.getUserInfo](open.html#wxgetuserinfoobject)
        *   [getPhoneNumber](getPhoneNumber.html)
        *   [UnionID机制说明](uinionID.html)
    *   [微信支付](api-pay.html)
        *   [wx.requestPayment](api-pay.html#wxrequestpaymentobject)
    *   [模板消息](notice.html)
        *   [使用说明](notice.html#使用说明)
        *   [模版消息管理](notice.html#模版消息管理)
        *   [发送模板消息](notice.html#发送模板消息)
    *   [客服消息](custommsg/receive.html)
        *   [接收消息和事件](custommsg/receive.html#接收消息和事件)
            *   [文本消息](custommsg/receive.html#文本消息)
            *   [图片消息](custommsg/receive.html#图片消息)
            *   [小程序卡片消息](custommsg/receive.html#小程序卡片消息)
            *   [进入会话事件](custommsg/receive.html#进入会话事件)
        *   [发送客服消息](custommsg/conversation.html)
        *   [转发消息](custommsg/trans.html)
        *   [临时素材接口](custommsg/material.html)
            *   [获取临时素材](custommsg/material.html#获取临时素材)
            *   [新增临时素材](custommsg/material.html#新增临时素材)
        *   [客服输入状态](custommsg/typing.html)
        *   [接入指引](custommsg/callback_help.html)
    *   [转发](share.html)
        *   [Page.onShareAppMessage](share.html#onshareappmessageoptions)
        *   [wx.showShareMenu](share.html#wxshowsharemenuobject)
        *   [wx.hideShareMenu](share.html#wxhidesharemenuobject)
        *   [wx.updateShareMenu](share.html#wxupdatesharemenuobject)
        *   [wx.getShareInfo](share.html#wxgetshareinfoobject)
        *   [获取更多转发信息](share.html#获取更多转发信息)
        *   [页面内发起转发](share.html#页面内发起转发)
    *   [获取二维码](qrcode.html)
    *   [收货地址](address.html)
        *   [wx.chooseAddress](address.html#wxchooseaddressobject)
    *   [卡券](card.html)
        *   [wx.addCard](card.html#wxaddcardobject)
        *   [wx.openCard](card.html#wxopencardobject)
        *   [会员卡组件](card.html#会员卡组件)
    *   [设置](setting.html)
        *   [wx.openSetting](setting.html#wxopensettingobject)
        *   [wx.getSetting](setting.html#wxgetsettingobject)
    *   [微信运动](we-run.html)
        *   [wx.getWeRunData](we-run.html#wxgetwerundataobject)
    *   [打开小程序](navigateToMiniProgram.html)
        *   [wx.navigateToMiniProgram](navigateToMiniProgram.html)
        *   [wx.navigateBackMiniProgram](navigateBackMiniProgram.html)
    *   [获取发票抬头](chooseInvoiceTitle.html)
        *   [wx.chooseInvoiceTitle](chooseInvoiceTitle.html)
    *   [生物认证](checkIsSupportSoterAuthentication.html)
        *   [wx.checkIsSupportSoterAuthentication](checkIsSupportSoterAuthentication.html)
        *   [wx.startSoterAuthentication](startSoterAuthentication.html)
        *   [wx.checkIsSoterEnrolledInDevice](checkIsSoterEnrolledInDevice.html)
    *   [附近](nearby.html)
        *   [添加地点](nearby.html#添加地点)
        *   [删除地点](nearby.html#删除地点)
        *   [展示/取消展示附近小程序](nearby.html#展示取消展示附近小程序)
*   [数据](analysis.html)
    *   [常规分析](analysis.html)
        *   [概况](analysis.html#概况)
            *   [概况趋势](analysis.html#概况趋势)
        *   [访问分析](analysis-visit.html)
            *   [访问趋势](analysis-visit.html#访问趋势)
            *   [访问分布](analysis-visit.html#访问分布)
            *   [访问留存](analysis-visit.html#访问留存)
            *   [访问页面](analysis-visit.html#访问页面)
        *   [用户画像](analysis-user.html)
    *   [自定义分析](analysis-report.html)
        *   [自定义数据上报](analysis-report.html)
*   [调试接口](setEnableDebug.html)
    *   [打开/关闭调试](setEnableDebug.html)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## onShareAppMessage(options)

在 Page 中定义 onShareAppMessage 函数，设置该页面的转发信息。

*   只有定义了此事件处理函数，右上角菜单才会显示 “转发” 按钮
*   用户点击转发按钮的时候会调用
*   此事件需要 return 一个 Object，用于自定义转发内容

**options 参数说明**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>from</td>

<td>String</td>

<td>转发事件来源。button：页面内转发按钮；menu：右上角转发菜单</td>

<td>[1.2.4](../framework/compatibility.html "基础库 1.2.4 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>target</td>

<td>Object</td>

<td>如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined</td>

<td>[1.2.4](../framework/compatibility.html "基础库 1.2.4 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**自定义转发字段**

<table>

<thead>

<tr>

<th>字段</th>

<th>说明</th>

<th>默认值</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>title</td>

<td>转发标题</td>

<td>当前小程序名称</td>

<td></td>

</tr>

<tr>

<td>path</td>

<td>转发路径</td>

<td>当前页面 path ，必须是以 / 开头的完整路径</td>

<td></td>

</tr>

<tr>

<td>imageUrl</td>

<td>自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4</td>

<td></td>

<td>[1.5.0](../framework/compatibility.html "基础库 1.5.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>success</td>

<td>转发成功的回调函数</td>

<td></td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>fail</td>

<td>转发失败的回调函数</td>

<td></td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

<tr>

<td>complete</td>

<td>转发结束的回调函数（转发成功、失败都会执行</td>

<td></td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**回调结果：**

<table>

<thead>

<tr>

<th>回调类型</th>

<th>errMsg</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>success</td>

<td>shareAppMessage:ok</td>

<td>转发成功</td>

</tr>

<tr>

<td>fail</td>

<td>shareAppMessage:fail cancel</td>

<td>用户取消转发</td>

</tr>

<tr>

<td>fail</td>

<td>shareAppMessage:fail (detail message)</td>

<td>转发失败，其中 detail message 为详细失败信息</td>

</tr>

</tbody>

</table>

**success回调参数说明：**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>说明</th>

<th>最低版本</th>

</tr>

</thead>

<tbody>

<tr>

<td>shareTickets</td>

<td>StringArray</td>

<td>shareTicket 数组，每一项是一个 shareTicket ，对应一个转发对象</td>

<td>[1.1.0](../framework/compatibility.html "基础库 1.1.0 开始支持，低版本需做兼容处理。")</td>

</tr>

</tbody>

</table>

**示例代码：**

    Page({
      onShareAppMessage: function (res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target)
        }
        return {
          title: '自定义转发标题',
          path: '/page/user?id=123',
          success: function(res) {
            // 转发成功
          },
          fail: function(res) {
            // 转发失败
          }
        }
      }
    })

## wx.showShareMenu(OBJECT)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

显示当前页面的转发按钮

**OBJECT参数说明：**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>必填</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>withShareTicket</td>

<td>Boolean</td>

<td>否</td>

<td>是否使用带 shareTicket 的转发[详情](share.html#获取更多转发信息)</td>

</tr>

<tr>

<td>success</td>

<td>Function</td>

<td>否</td>

<td>接口调用成功的回调函数</td>

</tr>

<tr>

<td>fail</td>

<td>Function</td>

<td>否</td>

<td>接口调用失败的回调函数</td>

</tr>

<tr>

<td>complete</td>

<td>Function</td>

<td>否</td>

<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>

</tr>

</tbody>

</table>

**示例代码：**

    wx.showShareMenu({
      withShareTicket: true
    })

## wx.hideShareMenu(OBJECT)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

隐藏转发按钮

**OBJECT参数说明：**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>必填</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>success</td>

<td>Function</td>

<td>否</td>

<td>接口调用成功的回调函数</td>

</tr>

<tr>

<td>fail</td>

<td>Function</td>

<td>否</td>

<td>接口调用失败的回调函数</td>

</tr>

<tr>

<td>complete</td>

<td>Function</td>

<td>否</td>

<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>

</tr>

</tbody>

</table>

**示例代码：**

    wx.hideShareMenu()

## wx.updateShareMenu(OBJECT)

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

更新转发属性

**OBJECT参数说明：**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>必填</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>withShareTicket</td>

<td>Boolean</td>

<td>否</td>

<td>是否使用带 shareTicket 的转发[详情](share.html#获取更多转发信息)</td>

</tr>

<tr>

<td>success</td>

<td>Function</td>

<td>否</td>

<td>接口调用成功的回调函数</td>

</tr>

<tr>

<td>fail</td>

<td>Function</td>

<td>否</td>

<td>接口调用失败的回调函数</td>

</tr>

<tr>

<td>complete</td>

<td>Function</td>

<td>否</td>

<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>

</tr>

</tbody>

</table>

**示例代码：**

    wx.updateShareMenu({
      withShareTicket: true,
      success() {
      }
    })

## wx.getShareInfo(OBJECT)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

获取转发详细信息

**OBJECT参数说明：**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>必填</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>shareTicket</td>

<td>String</td>

<td>是</td>

<td>shareTicket</td>

</tr>

<tr>

<td>success</td>

<td>Function</td>

<td>否</td>

<td>接口调用成功的回调函数</td>

</tr>

<tr>

<td>fail</td>

<td>Function</td>

<td>否</td>

<td>接口调用失败的回调函数</td>

</tr>

<tr>

<td>complete</td>

<td>Function</td>

<td>否</td>

<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>

</tr>

</tbody>

</table>

**CALLBACK 参数说明：**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>errMsg</td>

<td>String</td>

<td>错误信息</td>

</tr>

<tr>

<td>encryptedData</td>

<td>String</td>

<td>包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](signature.html#加密数据解密算法)</td>

</tr>

<tr>

<td>iv</td>

<td>String</td>

<td>加密算法的初始向量，详细见[加密数据解密算法](signature.html#加密数据解密算法)</td>

</tr>

</tbody>

</table>

**encryptedData 解密后为一个 JSON 结构，包含字段如下：**

<table>

<thead>

<tr>

<th>字段</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>openGId</td>

<td>群对当前小程序的唯一 ID</td>

</tr>

</tbody>

</table>

**Tip:** 如需要展示群名称，可以使用[开放数据组件](../component/open-data.html)

## 获取更多转发信息

通常开发者希望转发出去的小程序被二次打开的时候能够获取到一些信息，例如群的标识。现在通过调用 `wx.showShareMenu` 并且设置 `withShareTicket` 为 `true` ，当用户将小程序转发到任一群聊之后，可以获取到此次转发的 `shareTicket`，此转发卡片在群聊中被其他用户打开时，可以在 [App.onLaunch()](../framework/app-service/app.html) 或 [App.onShow](../framework/app-service/app.html) 获取到另一个 `shareTicket`。这两步获取到的 `shareTicket` 均可通过 [wx.getShareInfo()](#wxgetshareinfoobject) 接口可以获取到相同的转发信息。

## 页面内发起转发

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

通过给 `button` 组件设置属性 `open-type="share"`，可以在用户点击按钮后触发 `Page.onShareAppMessage()` 事件，如果当前页面没有定义此事件，则点击后无效果。相关组件：[button](../component/button.html)

## 使用指引

转发按钮，旨在帮助用户更流畅地与好友分享内容和服务。转发，应是用户自发的行为，且在需要时触手可及。开发者在使用时若遵从以下指引，会得到更佳的用户体验。

1.  含义清晰：明确、一目了然的图形按钮，将为用户减少理解的时间。在我们的资源下载中心，你可以找到这样的按钮素材并直接使用。或者你可以根据自己业务的设计风格，灵活设计含义清晰的按钮的样式。当然，你也可以直接使用带文案的按钮，“转发给好友”，它也足够明确。
2.  方便点击：按钮点击热区不宜过小，亦不宜过大。同时，转发按钮与其他按钮一样，热区也不宜过密，以免用户误操作。
3.  按需出现：并非所有页面都适合放置转发按钮，涉及用户隐私的非公开内容，或可能打断用户完成当前操作体验的场景，该功能并不推荐使用。同时，由于转发过程中，我们将截取用户屏幕图像作为配图，因此，需要注意帮助用户屏蔽个人信息。
4.  尊重意愿：理所当然，并非所有的用户，都喜欢与朋友分享你的小程序。因此，它不应该成为一个诱导或强制行为，如转发后才能解锁某项功能等。请注意，这类做法不仅不被推荐，还可能违反我们的[《运营规范》](https://mp.weixin.qq.com/debug/wxadoc/product/index.html)，我们强烈建议你在使用前阅读这部分内容。

以上，我们陈列了最重要的几点，如果你有时间，可以完整浏览[《设计指南》](https://mp.weixin.qq.com/debug/wxadoc/design/index.html)，相信会有更多的收获。

#### Bug & Tip

1.  `tip`: 不自定义转发图片的情况下，默认会取当前页面，从顶部开始，高度为 80% 屏幕宽度的图像作为转发图片。
2.  `tip`: 转发的调试支持请查看 [普通转发的调试支持](../devtools/different.html#普通的转发) 和 [带 shareTicket 的转发](../devtools/different.html#带-shareticket-的转发)
3.  `tip`: 只有转发到群聊中打开才可以获取到 `shareTickets` 返回值，单聊没有 `shareTickets`
4.  `tip`: `shareTicket` 仅在当前小程序生命周期内有效
5.  `tip`: 由于策略变动，小程序群相关能力进行调整，开发者可先使用`wx.getShareInfo`接口中的群ID进行功能开发。

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

[](custommsg/callback_help.html)[](share.html#onshareappmessageoptions)</div>

</div>