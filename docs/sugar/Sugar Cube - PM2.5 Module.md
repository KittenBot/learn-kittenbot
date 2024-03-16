---
title: Sugar Cube PM2.5 Module
sidebar_position: 29
---


## Introduction
<img src="https://learn.kittenbot.cn/2024md_pic/1709110588212-8e46abde-73f7-4a2a-935c-1636cb448818.png" alt="Sugar PM25" style="zoom: 50%;" />





## Features
---
Read the density of three major diameter of particulate matter in the air

**Signal** :I2C signal



## Module Principle
When fine particulate matter in the air enters the area where the laser beam is located, the laser will be scattered; the scattered light has 360° radiation in space, and a photodetector is placed in an appropriate position to receive the scattered light, and then the photoelectric detector generates a current signal through the photoelectric effect, and after amplification and processing by the operational amplifier circuit, the fine particulate matter concentration value can be obtained.

PM2.5, PM1.0 and PM10 are three main types of atmospheric particulate matter, which represent particulate matter in the air with diameters less than or equal to 2.5 microns, 1.0 microns and 10 microns, respectively. These particulate matters come from industrial emissions, vehicle exhaust, combustion emissions and natural processes.

Normal standards refer to the concentration limits of these particulate matters in the air. According to the standards of the World Health Organization, the annual average concentration of PM2.5 should not exceed 10 micrograms / cubic meter, and the 24-hour average value should not exceed 25 micrograms / cubic meter; the annual average concentration of PM10 should not exceed 20 micrograms / cubic meter, and the 24-hour average value should not exceed 50 micrograms / cubic meter. For PM1.0, there is currently no unified international standard, and the standards in different regions may vary.

When the concentration of these particulate matters in the air exceeds the normal standard, it may affect human health, including respiratory diseases, cardiovascular diseases, etc. Therefore, monitoring and controlling the concentration of these particulate matters is very important for protecting public health.





## Using on Futureboard Lite
<img src="https://learn.kittenbot.cn/2024md_pic/1709112785123-59e6702e-0b97-4f6f-8070-f51f90df1c91.png" alt="Futureboard Lite mainboard3.png" style="zoom:33%;" />





## Blocks-Function Description
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksPng-1709111988228.png](1709111999717-ea802814-709b-4d6c-b046-4b4a3e240cf5.png) | Read the concentration of PM1.0, PM2.5, and PM10 particles in the sensor, in units of ug/m³ |





## Case - Air Quality Monitoring
---





## Wiring Diagram
<img src="https://learn.kittenbot.cn/2024md_pic/1709112543957-0a721b3c-260e-4b5b-b2db-8a01cd13f0fd.png" alt="image.png" style="zoom: 50%;" />

|  |  | Future Board Lite Interface | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| <img src="https://learn.kittenbot.cn/2024md_pic/1709110588212-8e46abde-73f7-4a2a-935c-1636cb448818.png" alt="Sugar Cube PM25.png" style="zoom:25%;" /> | PM2.5 Module | I2C | Black PH2.0-4Pin Interface Cable | <img src="1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png" alt="PH2.0-4pin.png" style="zoom:25%;" /> |
<img src="https://learn.kittenbot.cn/2024md_pic/1709112679581-abbef6ad-7a8e-41a2-9af2-aaa381b4dd2b.png" alt="image.png" style="zoom: 67%;" />

|  |  | Microbit Robtobit Interface | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| <img src="https://learn.kittenbot.cn/2024md_pic/1709110588212-8e46abde-73f7-4a2a-935c-1636cb448818.png" alt="Sugar Cube PM25.png" style="zoom:33%;" /> | PM2.5 Module | I2C | Black PH2.0-4Pin Interface Cable | <img src="1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png" alt="PH2.0-4pin.png" style="zoom:33%;" /> |





##   Program Writing
<img src="https://learn.kittenbot.cn/2024md_pic/blocksPng-1710562069786.png" alt="blocksPng-1710562069786" style="zoom: 50%;" />
:::warning
Set three variables to store three data values of PM1.0, PM2.5, and PM10<br />After successfully obtaining them, display them on the screen<br />

<img src="https://learn.kittenbot.cn/2024md_pic/blocksPng-1710562081407.png" alt="blocksPng-1710562081407" style="zoom:50%;" />



:::
:::success
Set a normal standard for the value. The following values can be adjusted according to the actual situation. When the value of the sensor read is lower than the standard, draw a red circle on the right side of the screen; otherwise, display a green circle<br />

<img src="https://learn.kittenbot.cn/2024md_pic/blocksPng-1710562085398.png" alt="blocksPng-1710562085398" style="zoom:50%;" />





##   Effect
<img src="https://learn.kittenbot.cn/2024md_pic/1709113564992-ac33452f-9c52-4511-b456-874a56de7bfb.jpeg" alt="IMG_5908.JPG" style="zoom:33%;" />





## Using on Microbit
<img src="https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png" alt="Robotbit_压缩后.png" style="zoom:10%;" />





##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Programming with Makecode platform





## Add the Sugar Plugin
![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)
<img src="https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png" alt="image.png" style="zoom:50%;" /><br />Search for Sugar under Extensions and click Add



## Blocks-Function Description

| No.  | Block Image                                                  | Block Function                                               |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | ![image-20240315180701947](https://learn.kittenbot.cn/2024md_pic/image-20240315180701947.png) | Read the concentration of PM1.0, PM2.5, and PM10 particles in the sensor, in units of ug/m³ |



## Case: Brightness Control - Breathing Light
---


Press the A key to determine whether the value is lower than the set standard. If it is lower than the standard, display a smiling face; otherwise, display a crying face<br />

<img src="https://learn.kittenbot.cn/2024md_pic/image-20240315180745987.png" alt="image-20240315180745987" style="zoom: 67%;" />



Press the B key to display the current PM value<br /><img src="https://learn.kittenbot.cn/2024md_pic/image-20240315180823530.png" alt="image-20240315180823530" style="zoom:50%;" />
The method for other PM values is the same<br /><img src="https://learn.kittenbot.cn/2024md_pic/image-20240315180833461.png" alt="image-20240315180833461" style="zoom:50%;" />