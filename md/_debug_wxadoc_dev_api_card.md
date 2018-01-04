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
    *   [实时音视频](api-live-player.html)
        *   [wx.createLivePlayerContext](api-live-player.html)
        *   [wx.createLivePusherContext](api-live-pusher.html)
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
    *   [NFC](nfc.html)
        *   [wx.getHCEState](nfc.html#wxgethcestateobject)
        *   [wx.startHCE](nfc.html#wxstarthceobject)
        *   [wx.stopHCE](nfc.html#wxstophceobject)
        *   [wx.onHCEMessage](nfc.html#wxonhcemessagecallback)
        *   [wx.sendHCEMessage](nfc.html#wx.sendhcemessageobject)
    *   [Wi-Fi](wifi.html)
        *   [wx.startWifi](wifi.html#wxstartwifiobject)
        *   [wx.stopWifi](wifi.html#wxstopwifiobject)
        *   [wx.connectWifi](wifi.html#wxconnectwifiobject)
        *   [wx.getWifiList](wifi.html#wxgetwifilistobject)
        *   [wx.onGetWifiList](wifi.html#wxongetwifilistcallback)
        *   [wx.setWifiList](wifi.html#wxsetwifilistobject)
        *   [wx.presetWifiList](wifi.html#wxpresetwifilistobject)
        *   [wx.getConnectedWifi](wifi.html#wxgetconnectedwifiobject)
        *   [wx.onWifiConnected](wifi.html#wxonwificonnectedcallback)
        *   [wx.onEvaluateWifi](wifi.html#wxonevaluatewificallback)
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

### wx.addCard(OBJECT)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

批量添加卡券。

**Object参数说明：**

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

<td>cardList</td>

<td>ObjectArray</td>

<td>是</td>

<td>需要添加的卡券列表，列表内对象说明请参见[请求对象说明](#请求对象说明)</td>

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

#### **请求对象说明**

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

<td>cardId</td>

<td>String</td>

<td>卡券 Id</td>

</tr>

<tr>

<td>cardExt</td>

<td>String</td>

<td>卡券的扩展参数</td>

</tr>

</tbody>

</table>

**cardExt 说明**

<table>

<thead>

<tr>

<th>参数</th>

<th>类型</th>

<th>必填</th>

<th>是否参与签名</th>

<th>说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>code</td>

<td>String</td>

<td>否</td>

<td>是</td>

<td>用户领取的 code，仅自定义 code 模式的卡券须填写，非自定义 code 模式卡券不可填写，[详情](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025056)</td>

</tr>

<tr>

<td>openid</td>

<td>String</td>

<td>否</td>

<td>是</td>

<td>指定领取者的openid，只有该用户能领取。 bind_openid 字段为 true 的卡券必须填写，bind_openid 字段为 false 不可填写。</td>

</tr>

<tr>

<td>timestamp</td>

<td>Number</td>

<td>是</td>

<td>是</td>

<td>时间戳，东八区时间,UTC+8，单位为秒</td>

</tr>

<tr>

<td>nonce_str</td>

<td>String</td>

<td>否</td>

<td>是</td>

<td>随机字符串，由开发者设置传入，加强安全性（若不填写可能被重放请求）。随机字符串，不长于 32 位。推荐使用大小写字母和数字，不同添加请求的 nonce_str 须动态生成，若重复将会导致领取失败。</td>

</tr>

<tr>

<td>fixed_begintimestamp</td>

<td>Number</td>

<td>否</td>

<td>否</td>

<td>卡券在第三方系统的实际领取时间，为东八区时间戳（UTC+8,精确到秒）。当卡券的有效期类为 DATE_TYPE_FIX_TERM 时专用，标识卡券的实际生效时间，用于解决商户系统内起始时间和领取微信卡券时间不同步的问题。</td>

</tr>

<tr>

<td>outer_str</td>

<td>String</td>

<td>否</td>

<td>否</td>

<td>领取渠道参数，用于标识本次领取的渠道值。</td>

</tr>

<tr>

<td>signature</td>

<td>String</td>

<td>是</td>

<td>-</td>

<td>签名，商户将接口列表中的参数按照指定方式进行签名,签名方式使用 SHA1，具体签名方案参见：[卡券签名](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)</td>

</tr>

</tbody>

</table>

**注：cardExt 需进行 JSON 序列化为字符串传入**

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

<td>addCard:ok</td>

<td>添加卡券成功</td>

</tr>

<tr>

<td>fail</td>

<td>addCard:fail cancel</td>

<td>用户取消添加卡券</td>

</tr>

<tr>

<td>fail</td>

<td>addCard:fail (detail message)</td>

<td>添加卡券失败，其中 detail message 为后台返回的详细失败原因</td>

</tr>

</tbody>

</table>

**success返回参数：**

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

<td>cardList</td>

<td>ObjectArray</td>

<td>卡券添加结果列表，列表内对象说明请详见[返回对象说明](#返回对象说明)</td>

</tr>

</tbody>

</table>

#### **返回对象说明**

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

<td>code</td>

<td>String</td>

<td>加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025239)</td>

</tr>

<tr>

<td>cardId</td>

<td>String</td>

<td>用户领取到卡券的Id</td>

</tr>

<tr>

<td>cardExt</td>

<td>String</td>

<td>用户领取到卡券的扩展参数，与调用时传入的参数相同</td>

</tr>

<tr>

<td>isSuccess</td>

<td>Boolean</td>

<td>是否成功</td>

</tr>

</tbody>

</table>

**示例代码：**

    wx.addCard({
      cardList: [
        {
          cardId: '',
          cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }, {
          cardId: '',
          cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }
      ],
      success: function(res) {
        console.log(res.cardList) // 卡券添加结果
      }
    })

### wx.openCard(OBJECT)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](../framework/compatibility.html)

查看微信卡包中的卡券。

**Object参数说明：**

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

<td>cardList</td>

<td>ObjectArray</td>

<td>是</td>

<td>需要打开的卡券列表，列表内参数详见[openCard 请求对象说明](#opencard-请求对象说明)</td>

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

#### **openCard 请求对象说明**

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

<td>cardId</td>

<td>String</td>

<td>需要打开的卡券 Id</td>

</tr>

<tr>

<td>code</td>

<td>String</td>

<td>由 addCard 的返回对象中的加密 code 通过解密后得到，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1451025239)</td>

</tr>

</tbody>

</table>

**示例代码：**

    wx.openCard({
      cardList: [
        {
          cardId: '',
          code: ''
        }, {
          cardId: '',
          code: ''
        }
      ],
      success: function(res) {
      }
    })

#### Tip

1.  `tip`: 目前只有认证小程序才能使用卡券接口，可参考[指引](https://mp.weixin.qq.com/debug/wxadoc/product/renzheng.html)进行认证。
2.  `tip`: 了解更多信息，请查看[微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)

### 会员卡组件

开发者可以在小程序内调用该接口拉起会员开卡组件，方便用户快速填写会员注册信息并领卡。 该接口拉起开卡组件无须提前将开卡组件和发起小程序绑定至同一个公众号，开发者直接调用即可。

调用前开发者须完成以下步骤：

1.  创建一张微信会员卡并设置为一键激活模式；
2.  设置开卡字段；
3.  获取开卡组件参数；

详情查看会员开卡组件介绍：[会员开卡组件](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1479824356&version=1&lang=zh_CN&platform=2)

**参数说明**

<table>

<thead>

<tr>

<th>参数名</th>

<th>类型</th>

<th>是否必填</th>

<th>参数说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>appId</td>

<td>String</td>

<td>是</td>

<td>填写 wxeb490c6f9b154ef9，固定为此appid</td>

</tr>

<tr>

<td>extraData</td>

<td>Object</td>

<td>是</td>

<td>开卡组件参数，由第3步获取，包含以下三个参数</td>

</tr>

<tr>

<td>encrypt_card_id</td>

<td>String</td>

<td>是</td>

<td>加密 card_id，传入前须 urldecode</td>

</tr>

<tr>

<td>outer_str</td>

<td>String</td>

<td>是</td>

<td>会员卡领取渠道值，会在卡券领取事件回传给商户</td>

</tr>

<tr>

<td>biz</td>

<td>String</td>

<td>是</td>

<td>商户公众号标识参数，传入前须 urldecode</td>

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

<td>success</td>

<td>Function</td>

<td>否</td>

<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>

</tr>

</tbody>

</table>

**返回参数**

<table>

<thead>

<tr>

<th>参数名</th>

<th>类型</th>

<th>参数说明</th>

</tr>

</thead>

<tbody>

<tr>

<td>errMsg</td>

<td>String</td>

<td>调用结果</td>

</tr>

</tbody>

</table>

**示例代码**

    wx.navigateToMiniProgram({
      appId: 'wxeb490c6f9b154ef9', //固定为此 appid，不可改动
      extraData: data, // 包括 encrypt_card_id, outer_str, biz三个字段，须从 step3 中获得的链接中获取参数
      success: function() {
      },
      fail: function() {
      },
      complete: function() {
      }
    })

**返回说明**

在 App.onShow 里判断从会员开卡小程序返回的数据data

1.  判断 data.referrerInfo.appId 是否为开卡小程序 appId `wxeb490c6f9b154ef9`，如果不是则中止判断
2.  判断是否有 data.referrerInfo.extraData 是否有数据，如果没有，表示用户未激活直接左滑/点返回键返回，或者用户已经激活
3.  若用户激活成功，可以从 data.referrerInfo.extraData 中获取 activate_ticket card_id code 参数用于下一步操作

#### Tip

1.  在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功详情
2.  开发者工具上支持被跳转的小程序处理接收参数的调试详情
3.  开卡组件是使用wx.navigateToMiniProgram开发的官方组件，跳转时无须绑定同一个公众号，直接调用即可

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

[](address.html#wxchooseaddressobject)[](card.html#wxaddcardobject)</div>

</div>