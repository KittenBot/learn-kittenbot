---
title: Sugar Cube - Buzzer Module
sidebar_position: 8
---

## Introduction
![2 Active Buzzers](1706865759331-eb476b34-26ec-4618-ab7c-b8a984785e0f.png)


##   Function
---
Play sound, ticking sound
| **Signal** | Timing Signal |
| --- | --- |
|  |


## How the Module Works
An active buzzer is an acoustic module that combines a vibrating diaphragm, driver circuits, and sound source components. It can produce clear, stable sound signals. Compared with passive buzzers, active buzzers feature a small size, high volume, and good sound quality. They are widely used in alarms, prompts, and reminders.
- Oscillator: An active buzzer has a built-in oscillator that can generate high-frequency electrical signals. This oscillator usually consists of a transistor, a capacitor, and a resistor and can oscillate at a specific frequency.
- Driver circuit: When an external input signal reaches the active buzzer, it is transmitted to the built-in driver circuit. The driver circuit controls the frequency and amplitude of the oscillator according to the input signal and converts it into an acoustic signal.
- Sound output: When the oscillator starts to oscillate and the driver circuit starts to work, the active buzzer emits sound. The loudness and frequency of the sound depend on the characteristics of the input signal and the parameters of the built-in oscillator and driver circuit.


## Wiring
![未标题-2.png](1706866491269-ef6a4bfb-8cb1-44ea-b45e-caba50f73320.png)
|  |  | Future Board Lite Interface | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![2有源蜂鸣器.png](1706865759331-eb476b34-26ec-4618-ab7c-b8a984785e0f.png) | Sugar Cube - Buzzer Module | Port3 | White PH2.0-3Pin Interface Cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Supports being connected to Port1, Port2, Port3, Port4<br />Make sure the interface and the actual one are consistent when programming
:::


## Block - Function Description
| Number | Block Diagram | Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1706868083356.svg](1706868112796-ff75f7a1-0e0e-4c4b-ae77-986949bb2f58.svg) | Control the buzzer switch |
| Number | Block Diagram | Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709705322548-46128286-4817-43e9-b8c2-821d51f0be93.png) | Control the buzzer switch |


## Program 1 - The complete program
![image.png](1707038427188-37c4d6be-81f3-4fd0-b762-83f104660060.png)


## Program 1 - Feature Description
:::tips
By controlling the opening and closing, the frequency of the sound can be controlled to achieve different sound effects.
:::


## Using Kittenblock
Run the program offline to see the result


## Using Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Using Makecode programming platform


## Add Sugar plug-in
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search for Sugar in the extension, click Add


## Circuit Connection
![image.png](1709782019685-2be3cc8f-1097-46af-824a-0a701173c159.png)
|  |  | Microbit interface | wire | <br /> |
| --- | --- | --- | --- | --- |
| ![2有源蜂鸣器.png](1709792516581-7450fa7f-e169-4d1d-b749-4d34ade9bfd1.png) | Square Buzzer | P0 | White PH2.0-3Pin Female to Female Jumper Wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |


## Case: Button Control
![image.png](1709705306127-307ffcee-8a76-4d7c-a027-7f81a25d025b.png)

