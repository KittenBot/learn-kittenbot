---
title: Sugar - Touch module
sidebar_position: 5
---
## Features

---

| **Signal** | Digital output                           |
| ---------------- | ---------------------------------------- |
| 1                | (high level): touch module is pressed    |
| 0                | (low level): touch module is not pressed |

## Module Principle

The module contains a built-in touch detection chip that touches the housing via a spring, implementing the touch effect of a finger in close proximity

## Wiring

![Future Board Lite Main Board 3 - Copy.png](https://learn.kittenbot.cn/2024md_pic/1698389055888-5b56763c-0ee0-42b2-aab5-6533ee06012f.png)

|                                                                                                                       |                    | Future Board Lite Interface | Cable                            |                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![Sugar Touch Module.png](https://learn.kittenbot.cn/2024md_pic/1698303888937-53265e7a-c52d-4d0a-ab81-d8572ba50712.png) | Sugar Touch Module | Port3                       | White PH2.0-3Pin Interface Cable | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |

warning

Can be connected to Port1, Port2, Port3, Port4

When programming, make sure the interface is consistent with the actual one.

## Blocks - Function Description

| No. | Block Image                                                                                 | Block Function                             |
| --- | ------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 1   | ![image-20240316164804837](https://learn.kittenbot.cn/2024md_pic/image-20240316164804837.png) | Detect whether the touch sensor is pressed |

## Program-Full program

![image-20240316165316144](https://learn.kittenbot.cn/2024md_pic/image-20240316165316144.png)

## Program - Function Description

:::success

1. Set the color screen to dot matrix mode
2. Initialize the variable, which is responsible for recording the number of times the touch sensor is pressed
3. Loop detection
4. When the touch sensor is detected as being pressed
5. Display a smiling face image once, increase X, and then display X on the dot matrix screen
6. When the touch sensor is not detected as being pressed, the dot matrix screen displays a crying face

## Use Kittenblock

Run the program offline to see the effect

## Using Robotbit on Microbit

![Robotbit_compressed.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)

## Programming Platform

[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)

Programming with Makecode Platform

## Add Sugar Plugin

![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)
![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)

Search for Sugar in extensions, click Add

## Circuit Connection

![image.png](https://learn.kittenbot.cn/2024md_pic/1709782803138-922859f0-efb3-4817-b7f5-a4d1c43009ca.png)

|                                                                                                                       |                    | Microbit Interface | Wire                            |                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![Sugar Touch Module.png](https://learn.kittenbot.cn/2024md_pic/1698303888937-53265e7a-c52d-4d0a-ab81-d8572ba50712.png) | Sugar Touch Module | P0                 | White PH2.0-3Pin Interface Wire | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |

warning

 Support connecting to P0, P1, P13, etc.
When programming, pay attention to keep the interface consistent with the actual.

## Blocks - Function Description

| No. | Block Image                                                                                 | Block Function                           |
| --- | ------------------------------------------------------------------------------------------- | ---------------------------------------- |
| 1   | ![image-20240316165538686](https://learn.kittenbot.cn/2024md_pic/image-20240316165538686.png) | Read whether the touch module is touched |

## Case: Touch Detection

![image-20240316165605676](https://learn.kittenbot.cn/2024md_pic/image-20240316165605676.png)