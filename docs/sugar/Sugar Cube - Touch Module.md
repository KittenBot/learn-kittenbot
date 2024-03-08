---
title: Sugar Cube - Touch module
sidebar_position: 5
---

## Features
---
| **Signal** | Digital output<br />1 (high level): touch module is pressed<br />0 (low level): touch module is not pressed |
| --- | --- |
|  |


## Module Principle
The module contains a built-in touch detection chip that touches the housing via a spring, implementing the touch effect of a finger in close proximity


## Wiring

![Future Board Lite Main Board 3 - Copy.png](1698389055888-5b56763c-0ee0-42b2-aab5-6533ee06012f.png)
|  |  | Future Board Lite Interface | Cable |
| --- | --- | --- | --- | --- |
| ![Sugar Touch Module.png](1698303888937-53265e7a-c52d-4d0a-ab81-d8572ba50712.png) | Sugar Touch Module | Port3 | White PH2.0-3Pin Interface Cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Can be connected to Port1, Port2, Port3, Port4<br>
When programming, make sure the interface is consistent with the actual one.
:::


## Blocks - Function Description
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1698389095475.svg](1698389140219-07d3efc0-bb79-4270-806a-d1ab9ee69a43.svg) | Detect whether the touch sensor is pressed |
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709711498193-34250c20-11a0-441a-9af8-d0a689ffe769.png) | Read whether the touch module is touched |


## Program-Full program
![blocksSvg-1698389176939.svg](1698389184538-336403e0-f7a3-4d75-be60-d7deb0c2ea34.svg)


## Program - Function Description
:::success
1. Set the color screen to dot matrix mode
2. Initialize the variable, which is responsible for recording the number of times the touch sensor is pressed
3. Loop detection
4. When the touch sensor is detected as being pressed
5. Display a smiling face image once, increase X, and then display X on the dot matrix screen
6. When the touch sensor is not detected as being pressed, the dot matrix screen displays a crying face
:::
![blocksSvg-1698389116691.svg](1698389140179-02cbe0c3-cb44-489b-803e-e03252937a15.svg)
![blocksSvg-1698389120211.svg](1698389140247-003bcd9f-1c22-47f7-a45c-6d511bc085a3.svg)


##  Use Kittenblock
Run the program offline to see the effect


## Using Robotbit on Microbit
![Robotbit_compressed.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##  Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Programming with Makecode Platform


##   Add Sugar Plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search for Sugar in extensions, click Add


## Circuit Connection
![image.png](1709782803138-922859f0-efb3-4817-b7f5-a4d1c43009ca.png)
|  |  | Microbit Interface | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Touch Module.png](1698303888937-53265e7a-c52d-4d0a-ab81-d8572ba50712.png) | Sugar Touch Module | P0 | White PH2.0-3Pin Interface Wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Support connecting to P0, P1, P13, etc.<br />When programming, pay attention to keep the interface consistent with the actual.
:::


## Case: Touch Detection
![image.png](1709711481208-aa4effe9-c96c-4dbd-9e2d-5e7505112b71.png)

