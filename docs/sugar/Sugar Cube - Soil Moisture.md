---
title: Sugar Cube - Soil Moisture
sidebar_position: 17
---

## Introduction
Soil sensor, used to detect soil moisture, meow home soil module adopts capacitive soil, anti-corrosion, when the humidity is larger, the analog value returned is smaller<br />![soil.png](1636035841223-6879353d-8781-4191-afc2-9a801c3506a1.png)


## Parameters
---
| **Dimension** | 24 x 24 x 70 mm |
| --- | --- |
| **Weight** | 6.7 g |
| **Signal** | Analog Input |
| **Range** | 0~3.3V **for Microbit** 0~1023 |
| **Detection Target** | Soil |


## Using (Makecode) on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Coding Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use Makecode coding platform


## Add the Sugar Plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />
Within Extensions, search for Sugar and click Add


## Building Block - Functional Description
| S.No | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709804795633-0dc2c706-517b-4464-a0fa-b0237abce604.png) | Retrieves Soil sensor value (0-1023) |


## Circuit Connection
![image.png](1709804960998-4d716b9e-6abb-43e4-9e24-e169b29bd6b7.png)
|  |  | Microbit port | Wire used |  |
| --- | --- | --- | --- | --- |
| ![Soil moisture module.png](1709805000326-8e9a9552-4c68-4278-a5d6-d4e5399bec81.png) | Cube soil moisture module | P0 | White PH2.0-3Pin interface wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
---
Connect the light-sensitive module to the P1 of Robotbit Edu using the 3PIN terminal wire.<br />(Only the three pins with analog read function, P0, P1, and P2, can be connected)
Turn on the Robotbit power and you can see the red light at the bottom of the soil module light up (indicating that the module is powered normally)<br />![image.png](1634634849400-80cfdda4-b29b-483f-99b8-14ce5faf4b40.png)


## Case
First, map the soil moisture value from 0-1023 to 1023 to 0, so that the wetter the soil, the greater the value<br />Then determine whether the value is below the set value, and a sad face is displayed if it is below the set value<br />![image.png](1709804930322-17a01f7b-58f6-4acf-9479-2740417428e3.png)


## Programming
---
Use the Microbit dot matrix smiley face crying face to feedback the soil conditions and remind you to water the plants
Choose to run the program online or offline to see the effect<br />If you are still not clear how to run online or upload offline, please refer to **Quick Start**


## Case # Plant Watering Reminder
When the soil is relatively dry, it shows a crying face, and a smiling face at other times.<br />
![image.png](1658222854545-2720d027-4a5a-4eb1-9cc8-a6704ee3fd92.png)

