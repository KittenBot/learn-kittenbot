---
title: Sugar Cube PM2.5 Module
sidebar_position: 29
---

## Introduction
![Sugar PM25](1709110588212-8e46abde-73f7-4a2a-935c-1636cb448818.png)


## Features
---
Read the density of three major diameter of particulate matter in the air
| **Signal** | I2C signal |
| --- | --- |
|  |


## Module Principle
When fine particulate matter in the air enters the area where the laser beam is located, the laser will be scattered; the scattered light has 360° radiation in space, and a photodetector is placed in an appropriate position to receive the scattered light, and then the photoelectric detector generates a current signal through the photoelectric effect, and after amplification and processing by the operational amplifier circuit, the fine particulate matter concentration value can be obtained.

PM2.5, PM1.0 and PM10 are three main types of atmospheric particulate matter, which represent particulate matter in the air with diameters less than or equal to 2.5 microns, 1.0 microns and 10 microns, respectively. These particulate matters come from industrial emissions, vehicle exhaust, combustion emissions and natural processes.

Normal standards refer to the concentration limits of these particulate matters in the air. According to the standards of the World Health Organization, the annual average concentration of PM2.5 should not exceed 10 micrograms / cubic meter, and the 24-hour average value should not exceed 25 micrograms / cubic meter; the annual average concentration of PM10 should not exceed 20 micrograms / cubic meter, and the 24-hour average value should not exceed 50 micrograms / cubic meter. For PM1.0, there is currently no unified international standard, and the standards in different regions may vary.

When the concentration of these particulate matters in the air exceeds the normal standard, it may affect human health, including respiratory diseases, cardiovascular diseases, etc. Therefore, monitoring and controlling the concentration of these particulate matters is very important for protecting public health.


## Using on Futureboard Lite
![Futureboard Lite mainboard3.png](1709112785123-59e6702e-0b97-4f6f-8070-f51f90df1c91.png)


## Blocks-Function Description
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksPng-1709111988228.png](1709111999717-ea802814-709b-4d6c-b046-4b4a3e240cf5.png) | Read the concentration of PM1.0, PM2.5, and PM10 particles in the sensor, in units of ug/m³ |
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709111768433-5e5ac807-d55f-4c61-9c30-12471332a8fb.png) | Read the concentration of PM1.0, PM2.5, and PM10 particles in the sensor, in units of ug/m³ |


## Case - Air Quality Monitoring
---


## Wiring Diagram
![image.png](1709112543957-0a721b3c-260e-4b5b-b2db-8a01cd13f0fd.png)
|  |  | Future Board Lite Interface | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Cube PM25.png](1709110588212-8e46abde-73f7-4a2a-935c-1636cb448818.png) | PM2.5 Module | I2C | Black PH2.0-4Pin Interface Cable | ![PH2.0-4pin.png](1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png) |
![image.png](1709112679581-abbef6ad-7a8e-41a2-9af2-aaa381b4dd2b.png)
|  |  | Microbit Robtobit Interface | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Cube PM25.png](1709110588212-8e46abde-73f7-4a2a-935c-1636cb448818.png) | PM2.5 Module | I2C | Black PH2.0-4Pin Interface Cable | ![PH2.0-4pin.png](1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png) |


##   Program Writing
![blocksPng-1709112025864.png](1709112032338-0dc9a503-7101-49ae-b311-00282a18d65f.png)
:::warning
Set three variables to store three data values of PM1.0, PM2.5, and PM10<br />After successfully obtaining them, display them on the screen<br />![blocksPng-1709112056244.png](1709112081814-04b97f8d-72a5-4f35-9658-2cffb13a31c6.png)
:::
:::success
Set a normal standard for the value. The following values can be adjusted according to the actual situation. When the value of the sensor read is lower than the standard, draw a red circle on the right side of the screen; otherwise, display a green circle<br />![blocksPng-1709112073730.png](1709112086256-8ca5712a-d695-449a-9a88-51f229b154d0.png)
:::
Press the A key to determine whether the value is lower than the set standard. If it is lower than the standard, display a smiling face; otherwise, display a crying face<br />![image.png](1709111684869-24a32124-77ef-4f7d-8a1b-0d96950df096.png)
Press the B key to display the current PM value<br />![image.png](1709111693327-10894f1c-b9b7-4cc4-b7a6-bd2309595add.png)
The method for other PM values is the same<br />![image.png](1709111709123-7e1bf776-6d13-4523-9f0c-4e16c747f84c.png)


##   Effect
![IMG_5908.JPG](1709113564992-ac33452f-9c52-4511-b456-874a56de7bfb.jpeg)


## Using on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Programming with Makecode platform


## Add the Sugar Plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search for Sugar under Extensions and click Add


## Case: Brightness Control - Breathing Light
---

