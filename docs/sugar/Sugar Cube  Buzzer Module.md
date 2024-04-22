---
title: Sugar - Buzzer Module
sidebar_position: 8
---
## Introduction

![2 Active Buzzers](https://learn.kittenbot.cn/2024md_pic/1706865759331-eb476b34-26ec-4618-ab7c-b8a984785e0f.png)

## Function

---

Play sound, ticking sound

Signal:Timing Signal

## How the Module Works

An active buzzer is an acoustic module that combines a vibrating diaphragm, driver circuits, and sound source components. It can produce clear, stable sound signals. Compared with passive buzzers, active buzzers feature a small size, high volume, and good sound quality. They are widely used in alarms, prompts, and reminders.

- Oscillator: An active buzzer has a built-in oscillator that can generate high-frequency electrical signals. This oscillator usually consists of a transistor, a capacitor, and a resistor and can oscillate at a specific frequency.
- Driver circuit: When an external input signal reaches the active buzzer, it is transmitted to the built-in driver circuit. The driver circuit controls the frequency and amplitude of the oscillator according to the input signal and converts it into an acoustic signal.
- Sound output: When the oscillator starts to oscillate and the driver circuit starts to work, the active buzzer emits sound. The loudness and frequency of the sound depend on the characteristics of the input signal and the parameters of the built-in oscillator and driver circuit.

## Wiring

![未标题-2.png](https://learn.kittenbot.cn/2024md_pic/1706866491269-ef6a4bfb-8cb1-44ea-b45e-caba50f73320.png)

|                                                                                                                                        |                            | Future Board Lite Interface | Wire                             |                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![2有源蜂鸣器.png](https://learn.kittenbot.cn/2024md_pic/1706865759331-eb476b34-26ec-4618-ab7c-b8a984785e0f.png)                         | Sugar Cube - Buzzer Module | Port3                       | White PH2.0-3Pin Interface Cable | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
| warning:                                                                                                                               |                            |                             |                                  |                                                                                                                 |
| Supports being connected to Port1, Port2, Port3, Port4<br />Make sure the interface and the actual one are consistent when programming |                            |                             |                                  |                                                                                                                 |

## Block - Function Description

| Number | Block Diagram                                                                               | Block Function            |
| ------ | ------------------------------------------------------------------------------------------- | ------------------------- |
| 1      | ![blocksPng-1710401953192](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710401953192.png) | Control the buzzer switch |

## Program 1 - The complete program

![image-20240314160624844](https://learn.kittenbot.cn/2024md_pic/image-20240314160624844.png)

## Program 1 - Feature Description

By controlling the opening and closing, the frequency of the sound can be controlled to achieve different sound effects.

## Using Kittenblock

Run the program offline to see the result

## Using Microbit

![Robotbit_压缩后.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)

## Programming Platform

[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)`<br />`Using Makecode programming platform

## Add Sugar plug-in

![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)
![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)`<br />`Search for Sugar in the extension, click Add

## Circuit Connection

![image.png](https://learn.kittenbot.cn/2024md_pic/1709782019685-2be3cc8f-1097-46af-824a-0a701173c159.png)

|                                                                                                                |               | Microbit interface | wire                                          |                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------- | ------------- | ------------------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![2有源蜂鸣器.png](https://learn.kittenbot.cn/2024md_pic/1709792516581-7450fa7f-e169-4d1d-b749-4d34ade9bfd1.png) | Square Buzzer | P0                 | White PH2.0-3Pin Female to Female Jumper Wire | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |

## Block - Function Description

| Number | Block Diagram                                                                               | Block Function            |
| ------ | ------------------------------------------------------------------------------------------- | ------------------------- |
| 1      | ![image-20240314160802472](https://learn.kittenbot.cn/2024md_pic/image-20240314160802472.png) | Control the buzzer switch |

## Case: Button Control

![image-20240314160909307](https://learn.kittenbot.cn/2024md_pic/image-20240314160909307.png)

![image-20240314160917689](https://learn.kittenbot.cn/2024md_pic/image-20240314160917689.png)
