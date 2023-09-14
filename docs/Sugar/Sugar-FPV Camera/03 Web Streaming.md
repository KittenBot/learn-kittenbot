## 简介
除了通过Kittenblock舞台可以快速实现图传功能。也可以通过网页进行图传和遥控


## 效果
除了可以把视频流推回来，还有遥控功能按钮可用。<br />当方糖摄像头串口与其它主板串口相连时，当按下网页按键后，方糖摄像头便受到指令，它的串口会发送一条串口指令给其它主板。<br />控制流程：<br />![image.png](./Module_image/1689669982981-23c83cb0-6fc6-4bb9-8aed-a4aa44b458dc.png)

具体界面：<br />![image.png](./Module_image/1686647735084-a681c0e0-f124-4d23-841e-356ae1a16c88.png)



## 配置设置
除了按照基础教程中，填写wifi账号密码入网后，还需对配置文件进行修改。

1、数据线插上方糖摄像头USB<br />2、电脑出现SUGAR-CAM的U盘，打开“config.json”<br />![image.png](./Module_image/1686648101173-5401fc7b-6ac3-41b6-aace-d3f2ef09e667.png)<br />3、将commandProcessing修改为remoteControl<br />![image.png](./Module_image/1686648163212-87517e7c-2e67-4086-9d8c-d4d1fae8fa8c.png)<br />4、保存并退出文件

如果后续，不用网页图传控制，想用普通模式，请更改回 commandProcessing


## 网页端浏览
在电脑浏览器或者手机浏览器中打开， 方糖摄像头的IP+:+80<br />例如我的地址 ![image.png](./Module_image/1686648465786-ada40b2f-e8d6-4df2-813e-783c10ad2502.png)<br />方糖摄像头的IP各不相同，需要自己借助工具进行查询。

例如，我的手机浏览器打开了对应的IP地址（此IP地址只支持一个设备进行连接，多个设备打开，另外的设备图传画面打不开）<br />![image.png](./Module_image/1686648895192-16e17ccf-3d61-4a63-a9c5-fc6a9f7d6077.png)



## 按键串口控制
目前有10个按钮<br />![image.png](./Module_image/1689670312125-7d1aec72-0c87-4509-8848-fb7941dda8d9.png)<br />1、网页端使用，可以通过鼠标点击按键进行触发，也可通过键盘的方向键上下左右 和 数字1~6进行触发<br />2、手机网页端使用，可以直接通过触摸按键进行触发

| 按键名称 | 对应串口指令 |
| --- | --- |
| 上 | CMD_UP |
| 下 | CMD_DOWN |
| 左 | CMD_LEFT |
| 右 | CMD_RIGHT |
| 功能键1 | CMD_FUNC1 |
| 功能键2 | CMD_FUNC2 |
| 功能键3 | CMD_FUNC3 |
| 功能键4 | CMD_FUNC4 |
| 功能键5 | CMD_FUNC5 |
| 功能键6 | CMD_FUNC6 |


根据以上表格，针对不同的主板编写串口接收程序<br />当串口接到到消息后，进行具体的指令判断

串口波特率为115200



## 以Microbit为例
注意使用 “文本包含”进行判断<br />![image.png](./Module_image/1686657203896-4b88a9a6-7f47-4c55-934a-7b8dfb7fbc53.png)<br />示例程序：[https://makecode.microbit.org/_4cWAUUEot4jH](https://makecode.microbit.org/_4cWAUUEot4jH)<br />小车示例：[https://makecode.microbit.org/_DgvfhzXqjCUt](https://makecode.microbit.org/_DgvfhzXqjCUt)





## 掌控板为例

编程环境为Kittenblock，当然用其它编程平台，编写对应的串口接收程序也是可以的。<br />当接收到对应串口指令时，对应控制电机运动<br />![image.png](./Module_image/1686652031203-cb3c5fd6-93d7-4f6e-b396-770e0250ace7.png)
