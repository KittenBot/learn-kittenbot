---

title: Sugar Cube - RGB Ring Light
sidebar_position: 34
---


## Introduction

![IMG_4009.JPG](https://learn.kittenbot.cn/2024md_pic/1694743956158-1282f2e1-dc0d-41c0-869c-58bd3e29ecac.jpeg)





##   Feature
---
**Signal**  Time-Series Signal



## Module Principle
The colored LED lamp bead has a lamp controller directly built-in, in addition to the 3-color LED. This is called the IC lamp bead. You only need to input a 24-bit RGB control signal, and it will automatically generate a drive pwm signal internally. It also has built-in signal forwarding. For continuous input signals, after intercepting the first 24 bits, the following data is automatically forwarded from the DOUT port to the next lamp bead.





##   Coding Blocks



## Building Blocks - Function Description
| ID | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![image-20240316174951835](https://learn.kittenbot.cn/2024md_pic/image-20240316174951835.png) | Colorful lights initialization settings. You can choose the 3 RGBs on board or the light ring of other interfaces. External light rings generally use 8 RGBs |
| 2 | ![image-20240316174959895](https://learn.kittenbot.cn/2024md_pic/image-20240316174959895.png) | Synthesize color display by customizing three colors |
| 3 | ![image-20240316175004829](https://learn.kittenbot.cn/2024md_pic/image-20240316175004829.png) | Set the brightness of RGB colorful lights, 0-100 |
| 4 | ![image-20240316175011381](https://learn.kittenbot.cn/2024md_pic/image-20240316175011381.png) | Control the color of the colorful light with the specified serial number. The serial number starts from 1. Refresh display needs to be added later to take effect |
| 5 | ![image-20240316175018111](https://learn.kittenbot.cn/2024md_pic/image-20240316175018111.png) | Customize the values of the three color lamp beads inside the lamp bead to control the color of the colorful light |
| 6 | ![image-20240316175024133](https://learn.kittenbot.cn/2024md_pic/image-20240316175024133.png) | <br /><br />Control the display color of all colorful lights. It can take effect without adding refresh display<br /> |
| 7 | ![image-20240316175028861](https://learn.kittenbot.cn/2024md_pic/image-20240316175028861.png) | Turn off the light with the specified serial number, and refresh the display later to take effect |
| 8 | ![image-20240316175034830](https://learn.kittenbot.cn/2024md_pic/image-20240316175034830.png) | Control the display color of all colorful lights. It can take effect without adding refresh display |
| 9 | ![image-20240316175039220](https://learn.kittenbot.cn/2024md_pic/image-20240316175039220.png) | Control all colorful lights to turn off, and it can take effect without adding refresh display |
| 10 | ![image-20240316175043494](https://learn.kittenbot.cn/2024md_pic/image-20240316175043494.png) | Make the colorful light display take effect |
| 11 | ![image-20240316175047798](https://learn.kittenbot.cn/2024md_pic/image-20240316175047798.png) | Set the overall effect of all lights |



## Cases
---





##   Brightness Control - Breathing Light


![image-20240316175208810](https://learn.kittenbot.cn/2024md_pic/image-20240316175208810.png)





##   Sequence Control - Flowing Light


![image-20240316175417165](https://learn.kittenbot.cn/2024md_pic/image-20240316175417165.png)





## View the preset effect
📑: It is recommended that you use the online mode and click directly to view the preset effect. It is convenient and quick.<br />

![image-20240316175502825](https://learn.kittenbot.cn/2024md_pic/image-20240316175502825.png)





## Using On Microbit
<img src="https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png" alt="Robotbit_compressed.png" style="zoom:10%;" />





## Coding Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)
<br />Use Makecode coding platform





##   Add plug-in
![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)

![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />
Search for sugar in the extension, click add

<img src="https://learn.kittenbot.cn/2024md_pic/image-20240316173109254.png" alt="image-20240316173109254" style="zoom:50%;" />





## Circuit Connection
<img src="https://learn.kittenbot.cn/2024md_pic/1709781697870-bb04bd6b-12c4-4792-aefb-017e1f1bf369.png" alt="image.png" style="zoom:80%;" />

|  |  | Microbit Interface | Cable Used | <br /> |
| --- | --- | --- | --- | --- |
| <img src="https://learn.kittenbot.cn/2024md_pic/1694743956158-1282f2e1-dc0d-41c0-869c-58bd3e29ecac.jpeg" alt="IMG_4009.JPG" style="zoom:33%;" /> | RGB Light Ring | P0 | White PH2.0-3Pin Interface Cable | <img src="https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png" alt="untitled.100.png" style="zoom:33%;" /> |





## Building Blocks - Function Description

| ID   | Building Block Image                                         | Building Block Function                                      |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | ![image-20240316173300763](https://learn.kittenbot.cn/2024md_pic/image-20240316173300763.png) | Initialize pins and number of lights                         |
| 2    | ![image-20240316173314631](https://learn.kittenbot.cn/2024md_pic/image-20240316173314631.png) | Take a range of LEDs                                         |
| 3    | ![image-20240316173341142](https://learn.kittenbot.cn/2024md_pic/image-20240316173341142.png) | The whole light strip displays rainbow effect                |
| 4    | ![image-20240316173348199](https://learn.kittenbot.cn/2024md_pic/image-20240316173348199.png) | The whole light strip displays one color                     |
| 5    | ![image-20240316173401215](https://learn.kittenbot.cn/2024md_pic/image-20240316173401215.png) | The whole light strip, as a whole, displays columnar, suitable for music spectrum |
| 6    | ![image-20240316173738477](https://learn.kittenbot.cn/2024md_pic/image-20240316173738477.png) | Display needs to take effect when controlling a small number of lights |
| 7    | ![image-20240316173444512](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240316173444512.png) | display                                                      |
| 8    | ![image-20240316173454862](https://learn.kittenbot.cn/2024md_pic/image-20240316173454862.png) | Customize LED display                                        |
| 9    | ![image-20240316173502309](https://learn.kittenbot.cn/2024md_pic/image-20240316173502309.png) | Overall movement                                             |
| 10   | ![image-20240316173508197](https://learn.kittenbot.cn/2024md_pic/image-20240316173508197.png) | Overall movement (loop), head and tail loop                  |
| 11   | ![image-20240316173524903](https://learn.kittenbot.cn/2024md_pic/image-20240316173524903.png) | Control a single LED. The light starts from the serial number of 0 as the first one |
| 12   | ![image-20240316173532964](https://learn.kittenbot.cn/2024md_pic/image-20240316173532964.png) | Control the brightness of the light strip                    |
| 13   | ![image-20240316173541222](https://learn.kittenbot.cn/2024md_pic/image-20240316173541222.png) | Customize the value of LED color                             |



## Case 1: Controlling a single light

![image-20240316174008915](https://learn.kittenbot.cn/2024md_pic/image-20240316174008915.png)





## Case 2: Rainbow Effect
![image-20240316174034106](https://learn.kittenbot.cn/2024md_pic/image-20240316174034106.png)





## Case 3: Overall Colour Control
![image-20240316174129742](https://learn.kittenbot.cn/2024md_pic/image-20240316174129742.png)





## Case 4: Display column charts
![image-20240316174220220](https://learn.kittenbot.cn/2024md_pic/image-20240316174220220.png)







## Example 5: Display mobile
![image.png](https://learn.kittenbot.cn/2024md_pic/image-20240316174338610.png)



![image-20240316174400522](https://learn.kittenbot.cn/2024md_pic/image-20240316174400522.png)

## Case 6: Pixel Cycle Moving


![image-20240316174518908](https://learn.kittenbot.cn/2024md_pic/image-20240316174518908.png)





## Case 7: Customize color


![image-20240316174631490](https://learn.kittenbot.cn/2024md_pic/image-20240316174631490.png)



