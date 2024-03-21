---
title: Sugar Cube - Infrared Patrolling
sidebar_position: 7
---


## Introduction
The module is able to emit and receive infrared light at a close distance, and it implements the function of black line patrol or obstacle detection at an ultra-close distance through the principle of white area reflecting light while black area absorbing light. The digital level will change after the trigger.<br />![image.png](https://learn.kittenbot.cn/2024md_pic/1623395428938-72735b92-d2c7-4fbf-876c-fa2a352f337c.png)





## Parameters
---
| **Size** | 24 x 24 x 16 mm |
| --- | --- |
| **Weight** | 5 g |
| **Signal** | Digital input (with blue indicator light)<br />1 (blue light off):<br />- Black line detected<br />- Reflectance of infrared light is too weak to be detected<br />
0 (blue light on):<br />- Within detection range and no black line is detected<br /> |
|  | 
| **Detection Range** | 1~14 **mm** |





## Usage on Microbit
![Robotbit_压缩后.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)





##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use the Makecode programming platform





## Add Sugar Plugin
![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)
![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search for Sugar in the extensions and click on Add





## Sensor Block - Feature Description
| Serial Number | Sensor Block Diagram | Sensor Block Function |
| --- | --- | --- |
| 1 | ![image-20240315163952648](https://learn.kittenbot.cn/2024md_pic/image-20240315163952648.png) | Read if the sensor detects a black line |





## Circuit connection
![image.png](https://learn.kittenbot.cn/2024md_pic/1709784427451-d4b007be-7103-4339-9b38-6ca14b0c826a.png)
|  |  | Microbit interface | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![Digital line tracking sensor.png](https://learn.kittenbot.cn/2024md_pic/1709792371197-7f6c8110-1530-4615-a05d-4cdee99b4912.png) | RGB light ring | P0 | White PH2.0-3Pin interface wire | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |





## Case: Black wire detection
![image-20240315164039063](https://learn.kittenbot.cn/2024md_pic/image-20240315164039063.png)





## Wiring
---
Connect the 3PIN terminal wire to P1 of Robotbit Edu.<br />Turn on the Robotbit power supply and you can see the red light at the bottom of the LED module light up (indicating that the module is powered normally)<br />
![tracker.png](https://learn.kittenbot.cn/2024md_pic/1623396977794-e8bd1c93-eb47-47e3-8e1c-b42561ae9473.png)





## Programming
---





## Effect Demonstration
When a black line is detected, the Future board screen displays black. When a white area is detected, the Future board screen displays white.
:::info
- The working state of the line tracking sensor is fed back via the blue indicator light.
- If the blue indicator light is always on regardless of whether a black line is detected, it may be because the program sets the pin to a continuous high level output. Don't worry, just follow the instructions and continue.
:::
[![tracker.mp4](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)](https://www.yuque.com/kittenbot/hardwares/sugar-tracker?_lake_card=%7B%22status%22%3A%22done%22%2C%22name%22%3A%22tracker.mp4%22%2C%22size%22%3A%221519271%22%2C%22taskId%22%3A%22u242c2dc4-9e27-487b-b76b-3d15920d01f%22%2C%22taskType%22%3A%22upload%22%2C%22url%22%3Anull%2C%22cover%22%3Anull%2C%22videoId%22%3A%22inputs%2Fprod%2Fyuque%2F2021%2F1432972%2Fmp4%2F1623396961254-33061fda-611c-4d2b-921f-5242de4b7562.mp4%22%2C%22download%22%3Afalse%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22Z16nb%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22card%22%3A%22video%22%7D#Z16nb)





## Using Kittenblock
Choose online running or offline uploading to run the program and view the effect
:::info
If you are not sure how to run online or upload offline, please refer to [**Quickstart**](https://www.yuque.com/kittenbot/hardwares/eytesg#PBHya)
:::
![image-20240315164241812](https://learn.kittenbot.cn/2024md_pic/image-20240315164241812.png)





## Black Line Sensor Return Value
`value()`
- Return value 0:
   - Within the detection range and no black line is encountered
- Return value 1:
   - A black line is detected beyond
   - The detection distance cannot reflect infrared
```python
from future import *
from sugar import *
tracker = Tracker('P1')
screen.sync = 0
while True:
    if tracker.value() == 1:
        screen.fill(0)
    else:
        screen.fill(255)
    screen.refresh()
```



