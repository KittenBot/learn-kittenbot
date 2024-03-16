---
title: Sugar Cube - Ultrasonic Atomization Module
sidebar_position: 12
---


## Introduction
<img src="https://learn.kittenbot.cn/2024md_pic/1698301335290-bdf7a6b2-aa90-47a1-bb81-fe1ec9d079d7.png" alt="Sugar Cube Ultrasonic Misting Module (2).png" style="zoom: 50%;" />





##   Function
---
Convert water to mist to increase humidity

**Signal**  :Digital input <br />1 (High level): Turn on the humidifier <br />0 (Low level): Turn off the humidifier



##   Module principle
Ultrasonic atomizer uses electronic high-frequency oscillation (oscillation frequency is 1.7MHz or 2.4MHz, which is beyond the hearing range of human beings. This electronic oscillation is harmless to human beings and animals). Through the high-frequency resonance of the ceramic atomizing sheet, the liquid water molecular structure is broken up to produce natural and elegant water mist, without heating or adding any chemical reagents. Compared with the heating atomization method, energy is saved by 90%. In addition, a large number of negative ions will be released during the atomization process, which will produce electrostatic reaction with smoke, dust, etc. floating in the air, making them precipitate, and can also effectively remove harmful substances such as formaldehyde, carbon monoxide, and bacteria, so as to purify the air and reduce the occurrence of diseases.





## Wiring
<img src="https://learn.kittenbot.cn/2024md_pic/1698301468067-8b94cba4-38b1-4f23-a55a-6389a2d12512.png" alt="Future Board Lite Mainboard 3 - Copy.png" style="zoom: 25%;" />

|  |  | Future Board Lite Interface | Wire |<br /> |
| --- | --- | --- | --- | --- |
| <img src="https://learn.kittenbot.cn/2024md_pic/1698301335290-bdf7a6b2-aa90-47a1-bb81-fe1ec9d079d7.png" alt="Sugar Cube Ultrasonic Misting Module (2).png" style="zoom: 33%;" /> | Sugar Cube Ultrasonic Atomization Module | Port3 | White PH2.0-3Pin Interface Wire | <img src="https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png" alt="untitled.100.png" style="zoom:33%;" /> |
warning
Supports connecting to Port1, Port2, Port3, Port4<br />Pay attention that the interface is consistent with the actual when programming.



## Building Block - Function Description
| Sequence | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1699435635293.svg](1699435640703-2ebcd74b-719b-46d9-b14b-9c95de4d782d.svg) | Control the switch of the external atomization module |
| 2 | ![blocksSvg-1698388793063.svg](1698388802273-0df70f93-4e48-4f78-aa75-7700824d7889.svg) | Invert the program state |





## Program - Full Program


![image-20240316170338890](https://learn.kittenbot.cn/2024md_pic/image-20240316170338890.png)





## Program - Function description
Set the color screen to dot matrix mode<br />
If press key A on Maqueen Lite, wait for release, display icon, open atomization module<br />
If press key B on Maqueen Lite, wait for release, display icon, close atomization module<br />



## Using Kittenblock
Run the program offline to check the effect





## Usage on Microbit
<img src="https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png" alt="Robotbit_压缩后.png" style="zoom:10%;" />





##   Coding platforms
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Using Makecode coding platform





## Add Sugar plug-in
![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)
<img src="https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png" alt="image.png" style="zoom:50%;" />

Search for Sugar in extensions, click Add





## Circuit Connection
<img src="https://learn.kittenbot.cn/2024md_pic/1709782879708-6dd82fbb-6e25-4404-944c-039f412a7000.png" alt="image.png" style="zoom:67%;" />

|  |  | Microbit Interface | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Ultrasonic Fogging Module (2).png](https://learn.kittenbot.cn/2024md_pic/1698301335290-bdf7a6b2-aa90-47a1-bb81-fe1ec9d079d7.png) | Sugar Ultrasonic Fogging Module | P0 | White PH2.0-3Pin Interface Wire | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
warning
Support connecting to P0, P1, P2, P8, etc.<br />When programming, make sure the interface matches the actual one.


## Building Block - Function Description

| Sequence | Building Block Image                                         | Building Block Function                      |
| -------- | ------------------------------------------------------------ | -------------------------------------------- |
| 1        | ![image-20240316170409758](https://learn.kittenbot.cn/2024md_pic/image-20240316170409758.png) | Control the switch of the atomization module |



## Case: Button Control
<img src="https://learn.kittenbot.cn/2024md_pic/image-20240316170433007.png" alt="image-20240316170433007" style="zoom:67%;" />



