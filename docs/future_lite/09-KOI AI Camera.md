---
title: 09-KOI AI Camera
sidebar_position: 11
---


## Wiring Connections
> Notes: <br />When wiring, pay attention to the hole position marks on the Futureboard lite. It can only be connected to the two UART ports on the left, and the corresponding position needs to be set in the code. The diagram shows the connection of uart0, and the following code examples are based on this position.
In addition, some computers have a small USB current that may not be able to power the koi, resulting in a failure to start. At this time, an external USB power supply can be connected to the koi.
![lADPJwnI4qRvm6jNDf3NCn4_2686_3581.jpg](https://learn.kittenbot.cn/2024md_pic/1694767632553-c09224fb-2c68-4ca7-850e-9e99ae12b862.jpeg)





![image-20240322142556378](https://learn.kittenbot.cn/2024md_pic/image-20240322142556378.png)



![image-20240322142639919](https://learn.kittenbot.cn/2024md_pic/image-20240322142639919.png)







## Camera Direction Control
![Camera Direction Control.png](1694766828627-0adde989-10a3-47aa-a73e-60bdeb82b89a.png)





## Photo and Display
![Photo and Display](1694766845121-e9f8904f-8301-43a1-8d5c-3c55de98aea8.png)





## Show face coordinates





## Show the number of faces





## Feature classification
Program description: When the prompt appears on the screen, point the camera at the object to be trained, and then press the B key several times to train. At this time, press the A key to switch to the next target. After switching, press the B key several times to train. Repeat the above several times, and you can press the M key to recognize.<br />![特征分类.png](1694766871781-ce4a5d6c-8e0c-4e42-b247-3a1fe0242415.png)





## Line Tracking
Program description: after the prompt appears, press the A key to start calibration, please place the color to be calibrated completely in the square on the screen.
<br />![Line Tracking.png](https://learn.kittenbot.cn/2024md_pic/1694766881532-501d7365-3fae-4028-8a35-66b38843a758.png)





## Color Tracking
Procedure: After the prompt appears, press the A key to start calibration. Please place the color that needs to be calibrated completely within the square on the screen.<br />![Color Tracking.png](1694766889461-d0e33c12-2f38-4205-938c-a944dec26640.png)





## Round-Robin Scheduling
![Round-Robin Scheduling.png](1694766943719-9b97b145-c46b-4083-995c-a4cd618fc1fb.png)





## Rectangle Tracking
![Rectangle Tracking](1694766951245-4845f2be-f21f-487e-b892-4cc8230447cd.png)





## QR Code Detection
Related website: [https://cli.im/text](https://cli.im/text)<br />![QR Code Detection.png](1694766960381-8caae171-ac56-43f9-a452-00f5be5e870d.png)





## Barcode Detection
Related website: [http://www.jsons.cn/barcode/](http://www.jsons.cn/barcode/)<br />![Barcode Detection.png](1694766967958-0aa6c4c2-b58c-4aa3-9b33-4321358123db.png)





## AprilTag Code Detection
Related website: [https://www.2weima.com/aruco.html](https://www.2weima.com/aruco.html)<br />![image.png](1694767759783-340afffa-e0a8-4d9e-a572-511811c98a33.png)<br />![AprilTag Code Detection.png](1694766974978-5e793e4a-a7f8-4111-a521-1cf2fec37f75.png)





## Baidu Face Recognition
Program instruction: Press key A to register a face, press key B to recognize a face. A group can have multiple faces, but this program only performs basic demonstration. <br />![Baidu Face Recognition.png](1694766982846-920275e5-e45c-40b6-a0c9-376a49423481.png)





## Baidu TTS
![Baidu TTS](1694766992984-4b3f91cd-f3f7-427b-949c-0d9419ac8683.png)





## Record and Play
When using this feature, the koi screen may display an error message, then please check whether the SD card is inserted.<br />![Record and Play.png](1694767054056-496c98c4-9030-4f53-bc6c-7f1f47353ac7.png)



