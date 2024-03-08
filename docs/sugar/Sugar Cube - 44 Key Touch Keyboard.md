---
title: Sugar Cube - 4*4 Touch Keyboard
sidebar_position: 38
---

## Features
---
| **Signal** | Time domain signal - analog serial port protocol |
| --- | --- |
|  |


## Module Principle
There is capacitance between any two conductive objects. The size of the capacitance is related to the conductive properties of the dielectric, the size and conductive properties of the plates, and the presence of conductive materials around the plates. The two exposed copper areas between PCB boards (or FPC) are the two plates of the capacitor, which is equivalent to a capacitor. When a human finger approaches the PCB, the capacitance changes due to the conductivity of the human body. When the touch key chip detects a significant increase in capacitance, it outputs a switch signal.


## Wiring

![Future Board Lite Motherboard 3 - 副本.png](1698381157389-9db763f1-d787-4a3a-8d0e-2b7aa0eda17c.png)
|  |  | Future Board Lite Interface | Cable | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Cube 4x4 Touch Keypad Module (2).png](1698304525229-b89f562e-2c4a-47df-a831-39e25f5a6e56.png) | Sugar Cube LED Module | UART0 | Black PH2.0-4Pin Interface Cable | ![untitled.108.png](1694743359848-a54b5dae-be60-4e01-aa2f-f6f434429c91.png) |
:::warning
Supports connecting to UART0, UART1<br />Pay attention to keeping the interface consistent with the actual interface when programming
:::


## Blocks-Function Description
| Serial Number | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1698389963480.svg](1698389989632-75e5d9c7-e2ad-43af-a571-9f44a6da0694.svg) | Initialize touch keyboard |
| 2 | ![blocksSvg-1698389966847.svg](1698389989632-0f2b7242-4f96-47bd-9dd1-294d1896fec2.svg) | Read pressed key value |
| Serial Number | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709713005246-f67bb0a7-6aac-40c8-a733-4c616a488165.png) | Read the key value read by the touch keyboard module |


## Program 1-Complete program
:::success
Cyclically read the keys pressed by the touch, and display the key values on the dot matrix of the color screen.<br />Note: The type of the value of the key position read by the program is a string, which cannot be compared with a number
:::
![blocksSvg-1698389971468.svg](1698389989697-c8e9a9d3-e320-43e6-aa40-9f07554c43e0.svg)


## Program 2-Complete Program

:::success
Implement complete password lock function, enter password in order, finally press # to end, compare with set password, if successful, display screen as green
:::
![blocksPng-1698390042170.png](1698390052139-c4c95e39-dce0-49e1-8cf5-ece11c5566d0.png)


## Program 2 - Function Description
:::success
Program initialization: Set the color screen mode, the initial touch keyboard port<br />![blocksSvg-1698390112068.svg](1698390148057-2fb2a513-e19a-4cfc-a5b9-a066f88dcc76.svg)
:::
> Before entering the password, the password and x variables need to be cleared to ensure that there is no data
> ![blocksSvg-1698390115967.svg](1698390148071-1f26fc99-6580-40aa-88ca-daa2ded4a012.svg)
:::success
- Read the keys in real time. When a key is pressed, add the current password bit to the main password string
- And display the currently entered password
- Wait for the key to be released, then enter the next password bit
- All password bits will be output until the # key is pressed. There is no limit on the number of password bits here
![blocksSvg-1698390119528.svg](1698390148076-272e5ce9-0e06-47cf-87f8-c1f0408fd782.svg)
:::
> Compare the entered password with the set password, and display green if the input is correct
> Note: The set password needs to be added with #
> ![blocksSvg-1698390123136.svg](1698390148066-c8529c64-628b-4f87-b75c-9bb6960137b4.svg)


##  Demo
:::warning
:::


## Using Kittenblock
How to run your program using offline download to check the effect


## Using on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use Makecode programming platform


##   Add the Sugar Cube Plugin

![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search for "Sugar" in the extensions, click "Add"


##  Circuit Connection
![image.png](1709783080521-b1d216e1-17e3-47ee-95ed-eb411c14d8a0.png)
|  |  | Future Board Lite interface | Use cable | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar cube 4x4 touch keyboard module (2).png](1698304525229-b89f562e-2c4a-47df-a831-39e25f5a6e56.png) | Sugar cube LED module | UART | Black PH2.0-4Pin interface cable | ![untitled.108.png](1694743359848-a54b5dae-be60-4e01-aa2f-f6f434429c91.png) |
:::warning
Support connecting to P2 and P12<br />Pay attention to interface consistency with the actual interface during programming
:::


##   Example 1: Read the button and display
![image.png](1709712984045-661d3a3c-ef93-48ce-b963-8bab586246a5.png)


##   Case 2: Processing judgment based on key values
![image.png](1709714299106-3b32475f-6691-40c1-91f6-72a12063fa8e.png)

