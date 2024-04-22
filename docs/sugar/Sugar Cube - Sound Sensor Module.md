---
title: Sugar - Sound Sensor Module
sidebar_position: 14
---
![Sugar Cube Sound Intensity Module.png](https://learn.kittenbot.cn/2024md_pic/1698304431894-0eb19018-6a88-438c-9981-9f2052b509c5.png)

## Functions

---

| **Signal** | Analog output<br />0~3.3V **Corresponding to the Future Board Lite**0~4096 |
| ---------------- | --------------------------------------------------------------------------------- |
|                  |                                                                                   |

## Module Principle

The sound sensor works based on the principle of piezoelectricity. When a sound wave hits the surface of the sensor, the piezoelectric material inside the sensor generates a tiny charge change, which can be measured and converted into a digital signal. In addition, the sound sensor also requires a pre-amplifier to amplify the charge change signal and filter out other types of interference signals.

## Wiring

![Futublock Lite Mainboard 3 - Copy.png](https://learn.kittenbot.cn/2024md_pic/1698375489067-eb9f3b79-90c7-43a2-8435-7c13864f715e.png)

|                                                                                                                                           |                                | Futublock Lite Interface | Cable                            |                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![Sugar Cube Sound Intensity Module.png](https://learn.kittenbot.cn/2024md_pic/1698304431894-0eb19018-6a88-438c-9981-9f2052b509c5.png)      | Sugar Cube Sound Sensor Module | Port3                    | White PH2.0-3Pin Interface Cable | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
| warning                                                                                                                                   |                                |                          |                                  |                                                                                                                 |
| Support connecting to Port1, Port2, Port3, Port4<br />Pay attention to the consistency of interface and actual situation when programming |                                |                          |                                  |                                                                                                                 |

## Blocks - Function Description

| No. | Block Image                                                                                 | Block Function                                                                                  |
| --- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1   | ![image-20240316161337435](https://learn.kittenbot.cn/2024md_pic/image-20240316161337435.png) | Reads the output value of the module, range 0-4096, the louder the sound, the greater the value |
| 2   | ![image-20240316161319076](https://learn.kittenbot.cn/2024md_pic/image-20240316161319076.png) | Converts value, mapping method is<br />output=100x(60-0)/(4096-0)                               |

## Block 1 - Full program

![blocksPng-1710578213621](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578213621.png)

## Block 1 - Function Description

Set the color screen to full color pixel mode, and turn off the auto refresh mode. `<br />`

![blocksPng-1710578233232](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578233232.png)

warning
Read the value of sound sensor, and set a threshold, when the value is over the threshold, the screen displays red, otherwise displays green. `<br />`The threshold can be modified according to the actual situation. `<br />`

![blocksPng-1710578238076](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578238076.png)

tips
Display the value of sound sensor on the color screen. `<br />`

![blocksPng-1710578242356](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578242356.png)

## Program 2 - Complete Program

![blocksPng-1710578523865](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578523865.png)

## Block 2 - Functions Explained

warning
Set the display to full color pixel mode and turn off auto refresh mode.`<br />`

![blocksPng-1710578568972](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578568972.png)

Draw three concentric circles that represent three levels of sound.`<br />`![blocksPng-1710578574198](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578574198.png)

> Convert the value from the sound sensor to a value that can be displayed as the radius of a circle on the screen.
>
> - How mapping works

For example, if the value of x is between 0 and 4096. Our display can't show a rectangle with a height of 4096 pixels, but it can show a rectangle with a maximum height of 100 pixels. We can use mapping to convert the value to a smaller number.

> Let's say the current reading from the raindrop water level sensor is X = 2000.
> Using the mapping parameters in the diagram, we get = 2000x((60-0)/(4096-0))=29.296
> Since the display variable does not support displaying decimals directly, we convert it to an integer.

![blocksPng-1710578578495](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710578578495.png)

## Using Kittenblock

Run the program offline to view the effect

## Using on Microbit

![Robotbit_压缩后.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)

## Programming Platform

[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)`<br />`Programming with MakeCode platform

## Add the Sugar plugin

![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)
![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)

 Search Sugar in the extensions, click Add
