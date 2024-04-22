---
title: Sugar - Digital Tube Module
sidebar_position: 22
---
![2数码管模块.png](https://learn.kittenbot.cn/2024md_pic/1706865741220-a0aa3f75-a230-4f45-a4e2-d9bce37160bd.png)

## Function

---

Display conventional numbers, the two dots in the middle can serve as symbols of the clock: light up

Signal: Timing signal

## Module Principle

A digital tube is a common display device often used for digital display in devices such as digital clocks, counters, and information prompts. The working principle of the digital tube is to convert the digital signal into a current signal, and control the direction and magnitude of the current flow to make the LED (light-emitting diode) emit light, thereby realizing the function of digital display.

## Wiring

![3.png](https://learn.kittenbot.cn/2024md_pic/1706866501177-b662507a-a568-483e-adaa-bdaba953980a.png)

|                                                                                                                |                                | Future board Lite interface | Cable                            |                                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![2数码管模块.png](https://learn.kittenbot.cn/2024md_pic/1706865741220-a0aa3f75-a230-4f45-a4e2-d9bce37160bd.png) | Sugar cube digital tube module | I2C                         | Black PH2.0-4Pin interface cable | ![PH2.0-4pin.png](https://learn.kittenbot.cn/2024md_pic/1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png) |
| warning                                                                                                        |                                |                             |                                  |                                                                                                               |
| Either I2C terminal can be connected to                                                                        |                                |                             |                                  |                                                                                                               |

## Building Block - Function Description

| Serial Number | Building Block Image                                                                        | Building Block Function                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1             | ![blocksPng-1710408493018](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710408493018.png) | Displays digital number (integer 0-9999)                                                                                |
| 2             | ![blocksPng-1710408496958](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710408496958.png) | Unit displays the content of the digital tube, digits 0-15, and digits greater than 10 will be converted to letters A-F |
| 3             | ![blocksPng-1710408500517](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710408500517.png) | Displays "-" at the specified position                                                                                  |
| 4             | ![blocksPng-1710408504109](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710408504109.png) | Controls the on/off of ":" for the digital tube module                                                                  |
| 5             | ![blocksPng-1710408508198](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710408508198.png) |                                                                                                                         |
| 6             | ![blocksPng-1710408518142](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710408518142.png) | Controls the brightness of the digital tube                                                                             |
| 7             | ![blocksPng-1710408521606](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710408521606.png) | Clears display, turns on display, turns off display for the digital tube                                                |

## Program 1 - Full Program

![image-20240314174024712](https://learn.kittenbot.cn/2024md_pic/image-20240314174024712.png)

## Program 1 - Functional Description

:
Initialize a whole number, reduce it by 1 every second, and display it.

## Program 2 - Complete Program

![blocksPng-1710474288410](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710474288410.png)

## Procedure 2- Functional Description

Clear the previous display when booting up and set two variables for the scores
![blocksPng-1710474368798](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710474368798.png)

Control the scores of different teams by pressing buttons; each press adds 5

![blocksPng-1710474379884](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710474379884.png)

Display the scores; the digit in the unit's place is the remainder of the current value divided by 10, and the digit in the ten's place is the current value divided by 10

![blocksPng-1710474383175](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710474383175.png)

## Using Kittenblock

Run the program offline to view the effect

## Using on Microbit

![Robotbit_压缩后.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)

## Programming Platform

[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)`<br />`Use Makecode Programming Platform

## Add Sugar Cube Plugin

![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)

![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)

In the extensions, search for Sugar, click Add

## Circuit Connection

![image.png](https://learn.kittenbot.cn/2024md_pic/1709781806862-22c8c0b1-7e25-41a4-95d3-24efc69605c5.png)

|                                                                                                                |                                | Microbit Port | Wiring                           |                                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![2数码管模块.png](https://learn.kittenbot.cn/2024md_pic/1706865741220-a0aa3f75-a230-4f45-a4e2-d9bce37160bd.png) | Sugar Cube Digital Tube Module | I2C           | Black PH2.0-4Pin Interface Cable | ![PH2.0-4pin.png](https://learn.kittenbot.cn/2024md_pic/1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png) |

## Building Block - Function Description

| Serial Number | Building Block Image                                                                        | Building Block Function                                                                    |
| ------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1             | ![image-20240315115239560](https://learn.kittenbot.cn/2024md_pic/image-20240315115239560.png) | Controls the opening of the digital tube                                                   |
| 2             | ![image-20240315115249998](https://learn.kittenbot.cn/2024md_pic/image-20240315115249998.png) | Controls the closing of the digital tube                                                   |
| 3             | ![image-20240315115304058](https://learn.kittenbot.cn/2024md_pic/image-20240315115304058.png) | Displays clear                                                                             |
| 4             | ![image-20240315115424502](https://learn.kittenbot.cn/2024md_pic/image-20240315115424502.png) | From left to right, the position is 0-3, and the hexadecimal data displayed is 0-9 and a-f |
| 5             | ![image-20240315115403287](https://learn.kittenbot.cn/2024md_pic/image-20240315115403287.png) | Displays a decimal data                                                                    |
| 6             | ![image-20240315115411732](https://learn.kittenbot.cn/2024md_pic/image-20240315115411732.png) | Displays a hexadecimal data                                                                |
| 7             | ![image-20240315115327771](https://learn.kittenbot.cn/2024md_pic/image-20240315115327771.png) | Turns on the decimal point position of the module                                          |

## Case 1: Key Count - Decimal

![image-20240315115658148](https://learn.kittenbot.cn/2024md_pic/image-20240315115658148.png)

## Case 2: Key Count - Hexadecimal

![image-20240315115724388](https://learn.kittenbot.cn/2024md_pic/image-20240315115724388.png)

## Case 3: Scoreboard

![image-20240315120142675](https://learn.kittenbot.cn/2024md_pic/image-20240315120142675.png)

![image-20240315120157344](https://learn.kittenbot.cn/2024md_pic/image-20240315120157344.png)

![image-20240315120209743](https://learn.kittenbot.cn/2024md_pic/image-20240315120209743.png)
