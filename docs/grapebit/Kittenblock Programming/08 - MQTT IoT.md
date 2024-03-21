---
title: 08 - MQTT Internet of Things
sidebar_position: 10
---


## Overview
---
MQTT is a publish-subscribe messaging protocol that is designed for use in IoT applications and is relatively straightforward to implement.





## Getting Started
:::info
The following tutorial uses KittenBot's IoT platform as the server. Before using it, please register at [https://iot.kittenbot.cn/](https://iot.kittenbot.cn/).
:::

1. Create an MQTT Topic<br />![image.png](https://learn.kittenbot.cn/2024md_pic/1670325170546-3ad6649c-16c6-4b4e-a05a-1434cb2f5975.png)
2. Set the topic path (filling in the topic username and password can set the topic as private. You can leave it blank; the topic will be a public topic. Anyone with the topic path can view it.)<br />![image.png](https://learn.kittenbot.cn/2024md_pic/1670325511280-a1c2ee2a-8643-47c5-bc8c-b515140602f4.png)
:::warning
The topic is unique across the platform. Please set a relatively personalized topic. Try not to set it as a common name like temp.
:::
3. After creation, click Connect to Topic<br />![image.png](https://learn.kittenbot.cn/2024md_pic/1670325614453-1d397c6a-7b6d-4592-9f12-a062616a9a44.png)
4. Send a test message<br />![image.png](https://learn.kittenbot.cn/2024md_pic/1670325693953-94a34fdb-6b57-4336-8c6d-c15f27a17768.png)
:::warning
You may need to refresh to see the new message.<br />![image.png](https://learn.kittenbot.cn/2024md_pic/1670325784181-4064761a-b7e5-4a18-a905-10200b622763.png)
:::





## How to Use
---





## Brick Introduction
| **Programming Brick** | **Function Introduction** |
| --- | --- |
| ![image-20240321152705899](https://learn.kittenbot.cn/2024md_pic/image-20240321152705899.png) | Connect to WiFi |
| ![image-20240321152714668](https://learn.kittenbot.cn/2024md_pic/image-20240321152714668.png) | Return WiFi IP address, return 0.0.0.0 if not connected |
| ![image-20240321152722507](https://learn.kittenbot.cn/2024md_pic/image-20240321152722507.png) | Connect to Meow home MQTT server, public topic |
| ![image-20240321152732786](https://learn.kittenbot.cn/2024md_pic/image-20240321152732786.png) | If you need to use a private MQTT topic, you can use this brick to enter the username and password |
| ![image-20240321152747254](https://learn.kittenbot.cn/2024md_pic/image-20240321152747254.png) | Subscribe to a topic |
| ![image-20240321152753385](https://learn.kittenbot.cn/2024md_pic/image-20240321152753385.png) | Send a message to a topic |
| ![image-20240321152802424](https://learn.kittenbot.cn/2024md_pic/image-20240321152802424.png) | Read the topic message, you need to subscribe first |





## Case 1 - Smart home lamp
:::warning
This case introduces the communication control of two Grapeboards. If you only have one Grapeboard, you can use it as the `controlled receiving end`, and you can directly send instructions to the corresponding topic through the MQTT server page for control.
:::
- Effect: You can remotely control the device using the MQTT server as a medium.
![image.png](https://learn.kittenbot.cn/2024md_pic/1670298755599-b39c3142-c38c-41f5-be67-252541907db5.png)
- Program - Control End
![image-20240321152954206](https://learn.kittenbot.cn/2024md_pic/image-20240321152954206.png)
- Program - Controlled End
![image-20240321153200323](https://learn.kittenbot.cn/2024md_pic/image-20240321153200323.png)



