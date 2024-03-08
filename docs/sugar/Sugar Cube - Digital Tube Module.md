---
title: Sugar Cube - Digital Tube Module
sidebar_position: 22
---

##   Function
---
Display conventional numbers, the two dots in the middle can serve as symbols of the clock: light up
| **Signal** | Timing signal |
| --- | --- |
|  |


## Module Principle
A digital tube is a common display device often used for digital display in devices such as digital clocks, counters, and information prompts. The working principle of the digital tube is to convert the digital signal into a current signal, and control the direction and magnitude of the current flow to make the LED (light-emitting diode) emit light, thereby realizing the function of digital display.


## Wiring
![3.png](1706866501177-b662507a-a568-483e-adaa-bdaba953980a.png)
|  |  | Future board Lite interface | Cable | <br /> |
| --- | --- | --- | --- | --- |
| ![2数码管模块.png](1706865741220-a0aa3f75-a230-4f45-a4e2-d9bce37160bd.png) | Sugar cube digital tube module | I2C | Black PH2.0-4Pin interface cable | ![PH2.0-4pin.png](1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png) |
:::warning
Either I2C terminal can be connected to
:::


## Building Block - Function Description
| Serial Number | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1706867840787.svg](1706867898238-b937c19b-874a-470d-ab06-f21e46a1ea14.svg) | Displays digital number (integer 0-9999) |
| 2 | ![blocksSvg-1706867846243.svg](1706867901289-6f32ca6c-5973-4357-8e48-50c4681da18f.svg) | Unit displays the content of the digital tube, digits 0-15, and digits greater than 10 will be converted to letters A-F |
| 3 | ![blocksSvg-1706867849691.svg](1706867911347-4e2e3aa2-f2ae-4cae-bca8-000c19d4c49c.svg) | Displays "-" at the specified position |
| 4 | ![blocksSvg-1706867853184.svg](1706867987985-04898fd3-47e6-4f4d-92c6-7f9a05031dcf.svg) | Controls the on/off of ":" for the digital tube module |
| 5 | ![blocksSvg-1706867856092.svg](1706867991165-45c30eaa-a43b-4167-bfe1-c6faae9f20a4.svg) | |
| 6 | ![blocksSvg-1706867859232.svg](1706867998890-c3755d17-2238-4ca5-b991-a49d9540ee9a.svg) | Controls the brightness of the digital tube |
| 7 | ![blocksSvg-1706867866268.svg](1706868002368-ad93e203-54ff-43d2-a251-0737b9d9560f.svg) | Clears display, turns on display, turns off display for the digital tube |
| Serial Number | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709705345495-0488065c-9236-40f7-a1b9-2824f048d7b2.png) | Controls the opening of the digital tube |
| 2 | ![image.png](1709705352284-63731349-1173-43ba-a949-09f050cbadf7.png) | Controls the closing of the digital tube |
| 3 | ![image.png](1709705359901-72db62d8-0464-436c-ba8b-f12f3b312bb2.png) | Displays clear |
| 4 | ![image.png](1709705372363-2fc12ac1-45c8-42cb-8e14-92ad48a82252.png) | From left to right, the position is 0-3, and the hexadecimal data displayed is 0-9 and a-f |
| 5 | ![image.png](1709705428550-0b971f36-0a62-4989-9b89-b5a28d72ec7a.png) | Displays a decimal data |
| 6 | ![image.png](1709706362595-77111421-8d58-4b99-b2e9-1203cd455e43.png) | Displays a hexadecimal data |
| 7 | ![image.png](1709706374065-22791262-d556-462f-9bb4-29e04c26659a.png) | Turns on the decimal point position of the module |


## Program 1 - Full Program
![image.png](1707038498161-fc39a7db-4481-4c24-83e5-c3aa4eb55905.png)


## Program 1 - Functional Description
:::danger
Initialize a whole number, reduce it by 1 every second, and display it.
:::


## Program 2 - Complete Program
![screenshoot-2402041723.png](1707038600455-e66865e4-3ab1-436c-accb-b297056f0be4.png)


## Procedure 2- Functional Description
:::info
![blocksPng-1707038524519.png](1707038605001-05d1b5f6-d295-4fb6-8eea-5f27782cb91f.png)<br />Clear the previous display when booting up and set two variables for the scores
:::
:::info
![blocksPng-1707038533704.png](1707038609731-fd243f83-ba23-4188-bcb9-8370da380318.png)<br />Control the scores of different teams by pressing buttons; each press adds 5
:::
:::info
![blocksPng-1707038538051.png](1707038613275-268905bf-94f9-4b19-9efe-b55ff022d05f.png)Display the scores; the digit in the unit's place is the remainder of the current value divided by 10, and the digit in the ten's place is the current value divided by 10
:::


## Using Kittenblock
Run the program offline to view the effect


## Using on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use Makecode Programming Platform


##   Add Sugar Cube Plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />In the extensions, search for Sugar, click Add


## Circuit Connection
![image.png](1709781806862-22c8c0b1-7e25-41a4-95d3-24efc69605c5.png)
|  |  | Microbit Port | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| ![2数码管模块.png](1706865741220-a0aa3f75-a230-4f45-a4e2-d9bce37160bd.png) | Sugar Cube Digital Tube Module | I2C | Black PH2.0-4Pin Interface Cable | ![PH2.0-4pin.png](1706866506331-aff5ef84-0413-4a5e-90bc-5a476728eddb.png) |


##   Case 1: Key Count - Decimal
![image.png](1709698971396-fba01cd3-b209-46f4-a13d-2d3e63dc6a85.png)


##   Case 2: Key Count - Hexadecimal
![image.png](1709698999770-2d222e96-09d9-4b2c-9188-4b8afeeebe9c.png)


## Case 3: Scoreboard
![image.png](1709699361019-8c77521f-4929-4c89-ac93-b26195e7cfcb.png)
![image.png](1709699372585-23c8108d-7fdc-496c-9595-2d7b4233bf0b.png)
![image.png](1709699379804-abc45191-050c-45a7-b08b-e5ab3ee3b62d.png)

