---
title: 00 - Quick Start
sidebar_position: 1
---
## Introduction

By reading this chapter, you will learn how to use the product from scratch. If you are a beginner with no programming experience, please follow the steps carefully.

## Software Preparation

---

Kittenblock is a PC-side graphical programming software independently developed by Shenzhen Kittenbot Technology since 2016. It connects software and hardware programming, supports Kittenbot hardware and popular hardware such as Microbit and Arduino on the market. It is famous for its rich AI plug-ins, and it combines a variety of AI plug-ins and IoT plug-ins. It supports one-click conversion to Python and one-click import of the original project. The complete and rich plug-ins enable users to avoid frequently changing software, break the knowledge barriers, and reduce the learning costs and thresholds for users, so that users can focus more on creative project production. Since its launch in 2016, Kittenblock has entered more than 2,000 schools and institutions, providing primary and secondary schools with low-threshold and low-cost AI learning and education solutions.

The Grapeboard is supported in the latest **Kittenblock1.89** version. Please download the software before use.

[Click to download Kittenblock1.89](https://kittenbot.cn/kittenblock_download)

## Connecting the Mainboard

---

## Wired Connection

1. Connect the Grapeboard to the computer with a Type-C USB data cable.

   Having trouble?

- Use the original data cable if possible, or make sure the data cable has data communication function (not just a charging cable).
- If you are using a desktop computer, it is recommended to use the USB port on the back of the computer case to ensure sufficient power supply (avoid using a splitter if possible).

2. Open the Kittenblock programming software => Select Hardware => Grapeboard

   ![image-20240321154637344](https://learn.kittenbot.cn/2024md_pic/image-20240321154637344.png)

   ![image-20240321154718321](https://learn.kittenbot.cn/2024md_pic/image-20240321154718321.png)
3. Connect to the serial port

   ![image-20240321154812703](https://learn.kittenbot.cn/2024md_pic/image-20240321154812703.png)

   ![image-20240321154914853](https://learn.kittenbot.cn/2024md_pic/image-20240321154914853.png)
4. Connection completed

![image-20240321155041303](https://learn.kittenbot.cn/2024md_pic/image-20240321155041303.png)

## Wireless connection

Wireless connection is based on grape board Bluetooth. Please follow the following steps to complete Bluetooth connection:

1. Powered by battery or USB data cable

   ![lADPJw1WVMYcuM3NBQDNAcY_454_1280.jpg](https://learn.kittenbot.cn/2024md_pic/1670311595737-b314ea77-6895-4b70-b914-863764bfbad6.jpeg)
2. When using battery power, the semi-load battery power switch needs to be turned on, as shown in the figure, turn it to the side marked with BAT 

   ![image.png](https://learn.kittenbot.cn/2024md_pic/1673497802248-83470899-663d-4aa8-aac0-665c26599ce8.png)
3. Press the grape board reset button to restart the grape board. Note that there is about 3s of white RGB rotation during startup. During this time, press any A or B button, and the RGB light turns blue to indicate successful entry into Bluetooth mode 

   ![lyms 00_00_00-00_00_30.gif](https://learn.kittenbot.cn/2024md_pic/1670312670498-8105c57e-472b-4fb8-a973-ad09b91bdacc.gif)
4. After selecting the grape board on the software side, select `Wireless connection` in the connection ![image-20240321155107504](https://learn.kittenbot.cn/2024md_pic/image-20240321155107504.png)
5. Wait for the device to be found, and the target hardware is the one that starts with grapebit

   ![image-20240321155138624](https://learn.kittenbot.cn/2024md_pic/image-20240321155138624.png)

   ![image-20240321155159507](https://learn.kittenbot.cn/2024md_pic/image-20240321155159507.png)
6. The connection is complete, and you can proceed to the next step

   ![image-20240321155221958](https://learn.kittenbot.cn/2024md_pic/image-20240321155221958.png)

## Two control modes

---

There are two hardware control modes in Kittenblock, `Stage interaction` and `Code upload`

## Case 1 - Control hardware playback

Drag and drop the **Buzzer building block** from the left column and click on the building block. You can hear the Buzzer Board making a sound.`<br />`![image-20240321155445332](https://learn.kittenbot.cn/2024md_pic/image-20240321155445332.png)

## Case 2 - Controlling the Stage Character with a Gyroscope

1. Drag the **Attitude Angle Block** from the Grapeboard column on the left and select the **Left Tilt** and **Right Tilt** attitudes using the drop-down box.`<br />`![image-20240321155528665](https://learn.kittenbot.cn/2024md_pic/image-20240321155528665.png)
2. Assemble the program as shown in the diagram. The sprite's angle is changed based on the Grapeboard attitude feedback.![image-20240321155642252](https://learn.kittenbot.cn/2024md_pic/image-20240321155642252.png)
3. Effect Demonstration

   ![xz 00_00_00-00_00_30.gif](https://learn.kittenbot.cn/2024md_pic/1670313350158-ef8adbf2-93c8-40fc-b081-cccc3695fe94.gif)

## Uploading Programs

When the main control board needs to run a specified program without a computer, the program needs to be uploaded to the hardware. The grape board will check the main.py file in the file system by default when it starts up and execute the program in the file.
The program to be uploaded cannot contain building blocks related to the stage or characters outside the hardware.
Build the program as shown in the figure, switch to the code window (upload mode), and click upload ![image-20240321155751487](https://learn.kittenbot.cn/2024md_pic/image-20240321155751487.png)
