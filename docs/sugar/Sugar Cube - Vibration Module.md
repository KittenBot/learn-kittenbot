---
title: Sugar - Vibration Module
sidebar_position: 9
---
## Introduction

![Sugar Cube Motor.png](https://learn.kittenbot.cn/2024md_pic/1698287532183-366309ef-d990-40b9-af37-553d1959ba62.png)

## Features

---

Controls motor rotation to achieve a vibration effect, similar to the principle of a mobile phone vibration motor

**Signal**Digital input`<br />`1 (high level): Turn on vibration`<br />`0 (low level): Turn off vibration

## Module Principle

There is a motor inside, the axis of rotation of the motor is not symmetrically centered, which will result in the effect of overall vibration

## Wiring

![Future_Board_Lite_Motherboard_3 - 副本.png](https://learn.kittenbot.cn/2024md_pic/1698288934990-45c33ef9-8b83-4926-b5bb-f20911f5a61c.png)

|                                                                                                                                                           |                        | Future_Board_Lite_Interface | Wire                            |                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![Sugar_Vibration_Module.png](https://learn.kittenbot.cn/2024md_pic/1698287532183-366309ef-d990-40b9-af37-553d1959ba62.png)                                 | Sugar Vibration Module | Port1                       | White PH2.0-3Pin Interface Wire | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
| warning                                                                                                                                                   |                        |                             |                                 |                                                                                                                 |
| Supports connection to Port1、Port2、Port3、Port4<br />Pay attention to the consistency between the interface and the actual interface during programming |                        |                             |                                 |                                                                                                                 |

## Block Function Description

| No. | Block Image                                                                                 | Block Function                         |
| --- | ------------------------------------------------------------------------------------------- | -------------------------------------- |
| 1   | ![image-20240321140101510](https://learn.kittenbot.cn/2024md_pic/image-20240321140101510.png) | Control the switch of vibration module |

## Program - Function Description

:::info
![image-20240316172724944](https://learn.kittenbot.cn/2024md_pic/image-20240316172724944.png)

After pressing the button, wait for the button to be released and then start the vibration module

## Program - Full program

![image-20240316172716164](https://learn.kittenbot.cn/2024md_pic/image-20240316172716164.png)

## Effect

Press the A button to turn on the vibration module`<br />`Press the B button to turn off the vibration module

## Use Kittenblock

Use the app to download and run programs offline to view results

## Using on Microbit

![Robotbit_压缩后.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)

## Programming Platform

[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)`<br />`Use Makecode programming platform

## Add the Sugar plugin

![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)

![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)

Search for Sugar in extensions, click Add

## Circuit connection

![image.png](https://learn.kittenbot.cn/2024md_pic/1709782569408-b31b39a1-d115-4f31-8315-a0240273e7bb.png)

|                                                                                                                       |                        | Microbit port | Wire                            |                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![2 vibration module.png](https://learn.kittenbot.cn/2024md_pic/1709792663875-77566f8d-5300-4a38-8017-9ee42410b1ba.png) | Sugar vibration module | P0            | White PH2.0-3Pin interface wire | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |

## Block Function Description

| No. | Block Image                                                                                 | Block Function                        |
| --- | ------------------------------------------------------------------------------------------- | ------------------------------------- |
| 1   | ![image-20240316172144793](https://learn.kittenbot.cn/2024md_pic/image-20240316172144793.png) | Control the switch of vibration modul |

## Case: Button control

![image-20240316171451191](https://learn.kittenbot.cn/2024md_pic/image-20240316171451191.png)
