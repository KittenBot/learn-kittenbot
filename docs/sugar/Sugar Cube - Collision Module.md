---
title: Sugar Cube - Collision Module
sidebar_position: 4
---

## Introduction
![Sugar cube collision module.png](1698310429465-6c5c021a-d552-4453-822c-7badf44a152a.png)


##  Function
---
 | **Signal** | Digital output<br />1 (high level): module switch is in contact<br />0 (low level): module switch is not in contact |
| --- | --- |
|  |


## Module principle
The module uses a touch switch. When the switch is closed, the circuit generates a high-level signal


## Wiring

![Future Board Lite Motherboard 3 - Copy.png](1698388982783-92f3c55f-3a6f-4e52-a7e8-2231541ac798.png)
|  |  | Future Board Lite Interface | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Cube Collision Module.png](1698310429465-6c5c021a-d552-4453-822c-7badf44a152a.png) | Sugar Cube Collision Module | Port3 | White PH2.0-3Pin Interface Cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Supports connecting to Port1, Port2, Port3, Port4<br />When programming, make sure that the interface is consistent with the actual use
:::


## Blocks - Function Description
| No. | Block Image | Block Function |
|---|---|---|
| 1 | ![blocksSvg-1698391853023.svg](1698391868603-a1f604c5-c0cc-41ad-a342-03c67252a90a.svg) | Detects whether the collision sensor is pressed |
| No. | Block Image | Block Function |
|---|---|---|
| 1 | ![image.png](1709709943448-aa9fd7b7-d3bb-4e3d-9383-510b0565c96f.png) | Reads whether the collision module is collided with |


## Program - Features
:::success
1. Set the color screen to dot matrix mode
2. Initialize the variable, responsible for recording the number of times the collision sensor is pressed
3. Cyclic detection
4. When the collision sensor is detected to be pressed
5. Display a smiley face picture once, and increase X, then display X on the dot matrix screen
6. When the collision sensor is not detected as pressed, the dot matrix screen displays a sad face
:::
![blocksSvg-1698391846623.svg](1698391868601-514273e6-ab5c-4b88-a430-3895980f4a7a.svg)


## Using Kittenblock
Using the offline download mode to run the program to check the effects


## Using Robotbit on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use the Makecode programming platform


## Add the Sugar plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />
Search for Sugar in the extensions, click Add


## Circuit Connection
![image.png](1709782704916-a3324085-af69-46ed-a40a-bf8d9f191ac3.png)
|  |  | Microbit Interface | Line | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Cube Collision Module.png](1698310429465-6c5c021a-d552-4453-822c-7badf44a152a.png) | Sugar Cube Collision Module | P0 | White PH2.0-3Pin Interface Line | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Support connection at P0, P1, P8, P13, etc.<br />Keep the interface consistent with the actual one during programming
:::


## Case: Collision Detection
![image.png](1709709931883-3f9c4016-7ea7-4e26-8a1c-ea44fb913be9.png)

