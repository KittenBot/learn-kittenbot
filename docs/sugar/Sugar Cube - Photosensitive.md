---
title: Sugar Cube - Photosensitive
sidebar_position: 19
---

## Introduction
Detect the ambient light intensity and return the analog data.<br />![image.png](1623392914733-56d16daa-1663-4db5-95ff-1be849bc3634.png)


## Parameters
---
| **Dimension** | 24 x 24 x 16 mm |
| --- | --- |
| **Weight** | 4.7 g |
| **Signal** | Analog input |
| **Range** | 0~3.3V **correspond to future board** 0~4095 |


## Using on micro:bit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Coding Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use Makecode as coding platform


##   Add Sugar Plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search Sugar in extensions, click add


## Building Blocks - Function Description
| Serial Number | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709805643564-617a49c9-9933-4be7-a58a-5605c4bbd83f.png) | Get the numerical value of the light-sensitive sensor (0-1023) |


## Circuit Connection
![image.png](1709784382403-7d8788c6-2a0a-4904-90f8-4e6c1332480f.png)
|  |  | Microbit Interface | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| ![Light Sensor.png](1709805688485-53f60007-b78a-4c3c-812d-43eaff5d909a.png) | Light Sensor | P0 | White PH2.0-3Pin Interface Wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
---
Connect the light sensor to the P1 of Robotbit Edu using a 3PIN terminal wire.<br />Turn on the Robotbit power supply to see the red light at the bottom of the light sensor module light up (indicating that the module is powered normally)<br />![light.png](1623393386604-c30dcf31-3741-46a1-90d0-d0971b6f55ac.png)


## Case: Determine Light Intensity
![image.png](1709805741548-ee97acc4-96c3-4ba5-a491-cfd67e20c006.png)


##   Coding
---


##    Using Kittenblock
The brightness of the future board screen is filled with the screen, and the filled value is the lightness value 0~255(from black to white). If the ambient light value 0~4095 is to correspond to the screen brightness value 0~255, the mapping block needs to be used to correspond the two intervals one by one.
Choose to run the program in the online running or offline uploading mode to see the effect
:::info
If you are not sure how to run online or upload offline, please refer to [**Quick Start**](https://www.yuque.com/kittenbot/hardwares/eytesg#PBHya)
:::
![image.png](1623393956591-dbc34f77-b399-43a9-a40e-025764084a13.png)


## Ambient Light Value
`value()`
- Return value: 0~4095
```python
from future import *
from sugar import *
light = Light('P1')
```


## Interval mapping formula, no need to understand too much, just use it directly
def valmap(x, in_min, in_max, out_min, out_max):
    return int((x-in_min) * (out_max-out_min) / (in_max-in_min) + out_min)


## Turn off synchronous refresh for smoother screen
screen.sync = 0
while True:
    x = light.value()
    screen.fill(round(valmap(x, 0, 4096, 0, 255)))
    screen.refresh()


## Effect Demonstration
Realize the brightness of the ambient light, and the brightness of the face board screen will change accordingly.
[![light.mp4](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)](https://www.yuque.com/kittenbot/hardwares/sugar-light?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%22light.mp4%22%2C%22size%22%3A%22665171%22%2C%22taskId%22%3A%22u7d655d9f-2db1-41d1-b6b7-892b2e06983%22%2C%22taskType%22%3A%22upload%22%2C%22url%22%3Anull%2C%22cover%22%3Anull%2C%22videoId%22%3A%22inputs%2Fprod%2Fyuque%2F2021%2F1432972%2Fmp4%2F1623394578932-920a422e-d378-4c55-a2fb-aa22fd953358.mp4%22%2C%22download%22%3Afalse%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22IjPp4%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22card%22%3A%22video%22%7D#IjPp4)

