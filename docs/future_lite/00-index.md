---
title: Future Board Lite
sidebar_position: 1
---
## Introduction

Future Board Lite is an ESP32-S3 IoT and AI integrated motherboard that is launched by Xiao Mao Technology Co. Ltd. to address the needs of classroom teaching and project development.

It integrates multiple sensors and motor drivers to meet classroom teaching needs and project needs.

It can save multiple custom programs, and has built-in battery and charging circuit, which is convenient for creating offline projects. Compatible with LEGO structure, one-piece, full-enclosed design, safe and reliable, and convenient for quick project construction.

![img](https://learn.kittenbot.cn/2024md_pic/1685514101253-8c9c2152-a77d-445b-b75d-463ba282e656.png)

## Parameters:

Main control chip: ESP32-S3, Xtensa32-bit LX7 dual-core processor, main frequency up to 240 MHz `<br />`Charging voltage: 5V `<br />`Working voltage: 3.3V `<br />`Working current: <1A `<br />`Main control screen: color screen, 160x128, TFT `<br />`Programming keys: 3 (A, M, B keys)`<br />`Reset key: 1 `<br />`RGB light: 3 side-mounted WS2812 full-color lamp beads `<br />`Battery capacity: 450mAh `<br />`Battery display: 4-level battery green LED `<br />`Power indicator: red LED `<br />`Download port and charging port: USB TYPE-C `<br />`Motor drive: 2-way 2PIN PH2.0 `<br />`Programming port: 4 3PIN PH2.0 compatible with Sugar Cube module system `<br />`Serial port: 2-way 4PIN PH2.0 `<br />`I2C port: 2-way 4PIN PH2.0 `<br />`On-board programming resources: microphone, buzzer, gyroscope, light-sensitive LED `<br />`Dimensions: length x width x height: 56x56x21.5mm `<br />`Structural mounting holes: 8 pin holes on the back, two pin holes on the left and right sides

## Size Chart

![](https://learn.kittenbot.cn/2024md_pic/1677728181368-18324828-25e0-4df6-a1dc-5e541def33e6.png)![](https://learn.kittenbot.cn/2024md_pic/1677729298928-d450624a-916d-4451-b8da-e5b6dca3e094.png)

## Pin Schematic

This part of the function pins is only for users who need to DIY deeply. Ordinary teaching users only need to program according to the pin number of the programming platform according to the silkscreen on the front of the board. `<br />`

![1704988252989-ab52d7aa-46f0-40a0-9086-054872ec010e](https://learn.kittenbot.cn/2024md_pic/1704988252989-ab52d7aa-46f0-40a0-9086-054872ec010e.png)

## 1. High integration, full-function teaching motherboard

Full-color TFT screen, three full-color RRGS, light-dependent resistor, microphone, gyroscope, programming keys, 3PIN interface, serial port, I2C port, etc., two serial ports and two I2C ports can easily connect multiple advanced modules

## 2. Supporting both graphical and Python

Graphical programming is supported with many examples, and it also supports the popular Python programming language. The graphical code can be translated into Python code, which is very useful for the transition between the two

## 3. Multi-program Management

With the Kittenblock software, multiple programs can be pre-downloaded to the motherboard and then selected for execution. You can quickly switch between programs without connecting to a computer.

## 4、With WIFI and Bluetooth

Can quickly realize the function of the Internet of Things, without the need to connect to an external WIFI module. With the help of the cloud, AI functions such as speech recognition can be realized.

## 5. ESPNOW Self-Organizing Network

In the absence of Wi-Fi, ESPNOW self-organizing network can be used for communication within the group, similar to Microbit wireless communication.

## 6. Built-in Lithium Battery, Integrated Charge and Discharge Management

4 power indicator lights, clear and precise power indication, built-in 450mAh lithium battery meets classroom needs and various offline project display needs

## 7. Integrated all-in-one design

Integrate the motherboard function and expansion board, adopt a plastic shell for full coverage, safe and reliable, and meet the classroom scene

## 8. Compatible with LEGO building block size

There are 8 structural plug holes at the bottom of the shell, and 2 symmetrical structural plug holes on each side

## 9. CircuitPython at the bottom, no need to compile

You can use the U disk view format to directly change the .py program in the U disk with text, without compiling, you can save and reset to run

## Frequently Asked Questions and Answers

0. The device suddenly gets stuck while loading when turned on...`<br />`![image.png](https://learn.kittenbot.cn/2024md_pic/1699322825576-763f478b-17ef-4fbd-9e6c-5e3c03087e0d.png) `<br />`The boot.bmp image in the USB flash drive has been lost or deleted by mistake. Copy the boot.bmp image to the USB flash drive to solve the problem. The following is the boot.bmp `<br />`![boot.bmp](https://learn.kittenbot.cn/2024md_pic/1699322906377-21f1f0fc-cf82-4cfa-a259-f866e24b18c2.bmp)
1. How to connect to a computer for programming?`<br />`Use the original data cable to connect the computer and the motherboard. If the data cable and USB port are normal, a Future USB flash drive (English for future) will appear on the computer.
2. Can I click the green flag to run hardware-related building blocks before connecting the motherboard hardware?`<br />`Please do not run hardware-related building blocks before connecting the hardware. Otherwise, the program will report an error!
3. How to perform firmware upgrade `<br />`Click the upgrade icon in the software, operate according to the diagram, enter the UF2_FutureLite drive mode, and wait for the upgrade to complete
4. How to exit if the motherboard accidentally enters the motherboard upgrade interface?`<br />`Press the RESET button once to restart to exit
5. How to charge?`<br />`Use a 5V mobile phone charger or a computer USB port, plug in the USB to charge.`<br />`During the charging process, the green power indicator light will flash. When the 4 power lights are always on, it is fully charged.`<br />`It is recommended to turn off the power switch during the charging process.
6. How long does it take to charge?`<br />`It takes more than 1 hour to fully charge from no power to full power
7. Does the switch need to be turned off during charging?`<br />`When the power indicator light is flashing, it means that it is charging. In order to fully charge faster, it is recommended to turn off the switch.
8. What are the functions of the 5 lights on the front of the motherboard?`<br />`The 4 lights on the leftmost side of the front are green lights, which are power indicator lights.`<br />`The red light on the rightmost side is the motherboard power indicator light. After the switch is turned on, the red light turns on
9. The indicator light goes out a few seconds after the power switch is turned off?`<br />`This phenomenon is normal, similar to the principle of a power bank. When the power is not output, the power indicator light will continue to turn off for about 4 seconds
10. Can I charge and use it at the same time when the data cable is connected?`<br />`Yes, if you are not connecting a large current device (such as a motor and servo) or a large current module (KOI) at this time, you can charge while charging.`<br />`If a power-consuming device is connected, the battery will only output at this time and will not charge. The switch needs to be turned off to charge.
11. Will the motherboard restart by itself?`<br />`Check if the power is insufficient? When there are only two battery levels, using a motor, servo, WIFI or RGB light can easily cause the motherboard to restart.`<br />`Troubleshooting method: first look at the power indicator light. Then unplug all the external sensors, and observe whether the motherboard will restart?
12. How many DC motor interfaces?`<br />`M1, M2, 2 DC motor interfaces, the motherboard's total current output is ≤1A, so you cannot use too large a DC motor. Excessive current will cause the board to restart automatically. It is recommended to use Geekservo 9g red motor provided by Meow.`<br />`If there is a competition demand, please consider the future board + Robotbit or future board + sugar box such a large current device solution.
13. How many servo interfaces?`<br />`This motherboard does not have a dedicated servo drive port like Robotbit and Sugar Box, so its driving ability is relatively weak. It can only be connected to Geekservo 9g gray servo and ordinary 9 servo. If the servo and motor are used at the same time, please ensure sufficient power or connect to the USB cable.`<br />`Port1~4 can all be used to connect the servo, Port1~Port4 voltage is 3.3V.
14. How to use two serial ports?`<br />`The two serial ports are uart0 and uart1, respectively. The serial port working output voltage is 5V. Two serial port modules, speech recognition modules and KOI modules can be connected at the same time (the Future Board Lite hardware has been improved)
15. How to use two I2C?`<br />`The two I2C are actually connected together (I2C bus working principle). The working output voltage is 3.3V. Different I2C modules can be plugged into the I2C port and controlled.
16. Is the motherboard compatible with common sensor modules on the market?`<br />`Supported, but it is recommended to use Fangtang Electronics System modules. If you have other common electronic modules, please confirm the module's voltage and pin definition before use. For example, the VCC output voltage of the Port1~Port4 interface is 3.3V, and the pin definition is SVG, where S is the signal pin. Before using other modules, please confirm the pin definition of the module again to avoid short circuit and burning of the motherboard.
17. Does it support Bluetooth programming now?`<br />`not support
18. How to select other programs in the motherboard?`<br />`Press the M key on the startup interface (or hold down the M key and then start up) to enter the menu `<br />`![](https://learn.kittenbot.cn/2024md_pic/1686653064067-d3622efe-8fe8-44a5-9b68-e8a4b18ae3e5.png)
19. How to rerun the program?`<br />`You can press the black reset button on the bottom left of the motherboard to reset. Then select the program
20. Programming problem: 5x5 dot matrix, 8x8 dot matrix, screen display, the program will report an error when programming `<br />`When using different functions, you need to initialize the screen first.
