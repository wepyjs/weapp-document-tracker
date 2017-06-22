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
*   [媒体](media-picture.html)
    *   [图片](media-picture.html)
        *   [wx.chooseImage](media-picture.html#wxchooseimageobject)
        *   [wx.previewImage](media-picture.html#wxpreviewimageobject)
        *   [wx.getImageInfo](media-picture.html#wxgetimageinfoobject)
        *   [wx.saveImageToPhotosAlbum](media-picture.html#wxsaveimagetophotosalbumobject)
    *   [录音](media-record.html)
        *   [wx.startRecord](media-record.html#wxstartrecordobject)
        *   [wx.stopRecord](media-record.html#wxstoprecord)
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
    *   [视频](media-video.html)
        *   [wx.chooseVideo](media-video.html#wxchoosevideoobject)
        *   [wx.saveVideoToPhotosAlbum](media-video.html#wxsavevideotophotosalbumobject)
    *   [视频组件控制](api-video.html)
        *   [wx.createVideoContext](api-video.html#wxcreatevideocontextvideoid)
*   [文件](file.html)
    *   [wx.saveFile](file.html#wxsavefileobject)
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
    *   [iBeacon](iBeacon.html)
        *   [wx.startBeaconDiscovery](iBeacon.html#wxstartbeacondiscoveryobject)
        *   [wx.stopBeaconDiscovery](iBeacon.html#wxstopbeacondiscoveryobject)
        *   [wx.getBeacons](iBeacon.html#wxgetbeaconsobject)
        *   [wx.onBeaconUpdate](iBeacon.html#wxonbeaconupdatecallback)
        *   [wx.onBeaconServiceChange](iBeacon.html#wxonbeaconservicechangecallback)
    *   [屏幕亮度](device.html#wxsetscreenbrightnessobject)
        *   [wx.setScreenBrightness](device.html#wxsetscreenbrightnessobject)
        *   [wx.getScreenBrightness](device.html#wxgetscreenbrightnessobject)
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
    *   [导航](ui-navigate.html)
        *   [wx.navigateTo](ui-navigate.html#wxnavigatetoobject)
        *   [wx.redirectTo](ui-navigate.html#wxredirecttoobject)
        *   [wx.switchTab](ui-navigate.html#wxswitchtabobject)
        *   [wx.navigateBack](ui-navigate.html#wxnavigatebackobject)
        *   [wx.reLaunch](ui-navigate.html#wxrelaunchobject)
    *   [动画](api-animation.html)
        *   [wx.createAnimation](api-animation.html#wxcreateanimationobject)
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
        *   [setFontSize](canvas/set-font-size.html)
        *   [fillText](canvas/fill-text.html)
        *   [setTextAlign](canvas/set-text-align.html)
        *   [drawImage](canvas/draw-image.html)
        *   [setGlobalAlpha](canvas/set-global-alpha.html)
        *   [save](canvas/save-restore.html)
        *   [restore](canvas/save-restore.html#restore)
        *   [draw](canvas/draw.html)
        *   [getActions](canvas/get-actions.html)
        *   [clearActions](canvas/clear-actions.html)
    *   [下拉刷新](pulldown.html)
        *   [Page.onPullDownRefresh](pulldown.html#onpulldownrefresh)
        *   [wx.stopPullDownRefresh](pulldown.html#wxstoppulldownrefresh)
*   [第三方平台](ext-api.html)
    *   [wx.getExtConfig](ext-api.html#wxgetextconfigobject)
    *   [wx.getExtConfigSync](ext-api.html#wxgetextconfigsync)
*   [开放接口](api-login.html)
    *   [登录](api-login.html)
        *   [wx.login](api-login.html#wxloginobject)
        *   [wx.checkSession](api-login.html#wxchecksessionobject)
        *   [签名加密](signature.html)
    *   [授权](authorize.html)
        *   [wx.authorize](authorize.html#wxauthorizeobject)
    *   [用户信息](open.html)
        *   [wx.getUserInfo](open.html#wxgetuserinfoobject)
    *   [微信支付](api-pay.html)
        *   [wx.requestPayment](api-pay.html#wxrequestpaymentobject)
    *   [模板消息](notice.html)
        *   [使用说明](notice.html#使用说明)
        *   [接口说明](notice.html#接口说明)
    *   [客服消息](custommsg/receive.html)
        *   [接收消息和事件](custommsg/receive.html#接收消息和事件)
            *   [文本消息](custommsg/receive.html#文本消息)
            *   [图片消息](custommsg/receive.html#图片消息)
            *   [进入会话事件](custommsg/receive.html#进入会话事件)
        *   [发送客服消息](custommsg/conversation.html)
        *   [转发消息](custommsg/trans.html)
        *   [临时素材接口](custommsg/material.html)
            *   [获取临时素材](custommsg/material.html#获取临时素材)
            *   [新增临时素材](custommsg/material.html#新增临时素材)
        *   [接入指引](custommsg/callback_help.html)
    *   [转发](share.html)
        *   [Page.onShareAppMessage](share.html#onshareappmessage)
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
    *   [设置](setting.html)
        *   [wx.openSetting](setting.html#wxopensettingobject)
        *   [wx.getSetting](setting.html#wxgetsettingobject)
    *   [微信运动](we-run.html)
        *   [wx.getWeRunData](we-run.html#wxgetwerundataobject)
    *   [打开小程序](navigateToMiniProgram.html)
        *   [wx.navigateToMiniProgram](navigateToMiniProgram.html)
        *   [wx.navigateBackMiniProgram](navigateBackMiniProgram.html)
*   [数据](analysis.html)
    *   [常规分析](analysis.html)
        *   [概况](analysis.html#概况)
            *   [概况趋势](analysis.html#概况趋势)
        *   [访问分析](analysis-visit.html#访问分析)
            *   [访问趋势](analysis-visit.html#访问趋势)
            *   [访问分布](analysis-visit.html#访问分布)
            *   [访问留存](analysis-visit.html#访问留存)
            *   [访问页面](analysis-visit.html#访问页面)
        *   [用户画像](analysis-user.html)
    *   [自定义分析](analysis-report.html)
        *   [自定义数据上报](analysis-report.html)
*   [拓展接口](api-util.html)
    *   [wx.arrayBufferToBase64](api-util.html#wxarraybuffertobase64arraybuffer)
    *   [wx.base64ToArrayBuffer](api-util.html#wxbase64toarraybufferbase64)

</nav>

</div>

<div class="book-body">

<div class="body-inner">

<div class="page-wrapper" tabindex="-1" role="main">

<div class="page-inner">

<div id="book-search-results">

<div class="search-noresults">

<section class="normal markdown-section">

## 用户数据的签名验证和加解密

### 数据签名校验

为了确保 [开放接口](open.html) 返回用户数据的安全性，微信会对明文数据进行签名。开发者可以根据业务需要对数据包进行签名校验，确保数据的完整性。

1.  签名校验算法涉及用户的session_key，通过 [wx.login](api-login.html#wxloginobject) 登录流程获取用户session_key，并自行维护与应用自身登录态的对应关系。
2.  通过调用接口（如 [wx.getUserInfo](open.html)）获取数据时，接口会同时返回 rawData、signature，其中 signature = sha1( rawData + session_key )
3.  开发者将 signature、rawData 发送到开发者服务器进行校验。服务器利用用户对应的 session_key 使用相同的算法计算出签名 signature2 ，比对 signature 与 signature2 即可校验数据的完整性。

**如wx.getUserInfo的数据校验：**

接口返回的rawData：

    {
      "nickName": "Band",
      "gender": 1,
      "language": "zh_CN",
      "city": "Guangzhou",
      "province": "Guangdong",
      "country": "CN",
      "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/1vZvI39NWFQ9XM4LtQpFrQJ1xlgZxx3w7bQxKARol6503Iuswjjn6nIGBiaycAjAtpujxyzYsrztuuICqIM5ibXQ/0"
    }

用户的 session-key：

    HyVFkGl5F5OQWJZZaNzBBg==

所以，用于签名的字符串为：

    {"nickName":"Band","gender":1,"language":"zh_CN","city":"Guangzhou","province":"Guangdong","country":"CN","avatarUrl":"http://wx.qlogo.cn/mmopen/vi_32/1vZvI39NWFQ9XM4LtQpFrQJ1xlgZxx3w7bQxKARol6503Iuswjjn6nIGBiaycAjAtpujxyzYsrztuuICqIM5ibXQ/0"}HyVFkGl5F5OQWJZZaNzBBg==

使用sha1得到的结果为

    75e81ceda165f4ffa64f4068af58c64b8f54b88c

### 加密数据解密算法

接口如果涉及敏感数据（如[`wx.getUserInfo`](open.html)当中的 openId 和unionId ），接口的明文内容将不包含这些敏感数据。开发者如需要获取敏感数据，需要对接口返回的**加密数据( encryptedData )**进行对称解密。 解密算法如下：

1.  对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充。
2.  对称解密的目标密文为 Base64_Decode(encryptedData)。
3.  对称解密秘钥 aeskey = Base64_Decode(session_key), aeskey 是16字节。
4.  对称解密算法初始向量 为Base64_Decode(iv)，其中iv由数据接口返回。

微信官方提供了多种编程语言的示例代码（[点击下载](../demo/aes-sample.zip)）。每种语言类型的接口名字均一致。调用方式可以参照示例。

另外，为了应用能校验数据的有效性，我们会在敏感数据加上数据水印( watermark )

**watermark参数说明：**

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

<td>watermark</td>

<td>OBJECT</td>

<td>数据水印</td>

</tr>

<tr>

<td>appid</td>

<td>String</td>

<td>敏感数据归属appid，开发者可校验此参数与自身appid是否一致</td>

</tr>

<tr>

<td>timestamp</td>

<td>DateInt</td>

<td>敏感数据获取的时间戳, 开发者可以用于数据时效性校验</td>

</tr>

</tbody>

</table>

如接口[`wx.getUserInfo`](open.html)敏感数据当中的watermark：

    {
        "openId": "OPENID",
        "nickName": "NICKNAME",
        "gender": GENDER,
        "city": "CITY",
        "province": "PROVINCE",
        "country": "COUNTRY",
        "avatarUrl": "AVATARURL",
        "unionId": "UNIONID",
        "watermark":
        {
            "appid":"APPID",
            "timestamp":TIMESTAMP
        }
    }

注：此前提供的**加密数据（encryptData）**以及对应的加密算法将被弃用，请开发者不要再依赖旧逻辑。

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

[](api-login.html#wxchecksessionobject)[](authorize.html)</div>

</div>