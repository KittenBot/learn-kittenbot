---
title: Arcade Programming
sidebar_position: 2
---
## Introduction

Last Updated: March 29, 2024 
[Release Notes](#2f7IS)

## Quick Start

---

## Hardware Preparation

Connect your computer with a USB cable. If your Meowbit is in the Arcade mode firmware, press the Reset button on the right side (as shown in the picture below), and a new drive named `ARCADE-F4` will appear on your computer. If the ARCADE-F4 drive does not appear on your computer, you need to check if the motherboard is abnormal.



![IMB_N8ezc5](https://learn.kittenbot.cn/2024md_pic/IMB_N8ezc5.gif)



![IMG_6358](https://learn.kittenbot.cn/2024md_pic/IMG_6358.JPG)

Make sure the switch is turned to the left

![IMG_6334.JPG](https://learn.kittenbot.cn/2024md_pic/1711699321883-0b60722b-05e2-449c-a9d9-b68ca80f6113.jpeg)

## Demo Example

1. Enter the Arcade game development platform address: [https://arcade.makecode.com/](https://arcade.makecode.com/)

## Create a project

![image-20240329162202950](https://learn.kittenbot.cn/2024md_pic/image-20240329162202950.png)

![image-20240329162221993](https://learn.kittenbot.cn/2024md_pic/image-20240329162221993.png)

## Coding

Choose the program you want
![image-20240329162255094](https://learn.kittenbot.cn/2024md_pic/image-20240329162255094.png)

![image-20240329162314338](https://learn.kittenbot.cn/2024md_pic/image-20240329162314338.png)

Complete a simple program to control the character's movement
![image-20240329162336258](https://learn.kittenbot.cn/2024md_pic/image-20240329162336258.png)

## Select the Sprite

Select the sprite image 

![image-20240329162352587](https://learn.kittenbot.cn/2024md_pic/image-20240329162352587.png)

You can choose whether to draw the sprite manually or use the game sprite library

![image-20240329162414914](https://learn.kittenbot.cn/2024md_pic/image-20240329162414914.png) 
Here, a ready-made sprite is used 
![image-20240329162430652](https://learn.kittenbot.cn/2024md_pic/image-20240329162430652.png) 
Click Finish

![image-20240329162500854](https://learn.kittenbot.cn/2024md_pic/image-20240329162500854.png) 

The program is now written 

![image-20240329162511431](https://learn.kittenbot.cn/2024md_pic/image-20240329162511431.png)

## Downloading Programs to the Hardware

1. Click on Download in the bottom left corner.
   
   ![image-20240329162546585](https://learn.kittenbot.cn/2024md_pic/image-20240329162546585.png) 
   
2. Select the Meowbit hardware.
   
   ![image-20240329162610289](https://learn.kittenbot.cn/2024md_pic/image-20240329162610289.png)
3. You will obtain a file in the .uf2 format, which you can then drag to the ARCADE-F4 drive.
   ![image-20240329162630457](https://learn.kittenbot.cn/2024md_pic/image-20240329162630457.png)
   :::warning
   This drive is not a real storage space, but rather a simulation to facilitate program downloads, so files cannot be extracted from it.
   :::
   Copy or move the .uf2 file downloaded from the browser to this drive.
   
   ![image.png](https://learn.kittenbot.cn/2024md_pic/1711699132966-b6133e5d-22ca-4bc0-ace7-6c7b7f393df1.png) 
   
   The result should look something like this:
   ![img](https://learn.kittenbot.cn/2024md_pic/1711698792746-c3587c7f-2d90-4c26-b1ed-5c016f59e716.gif)

## Programming Platforms Introduction

---

:::info
Arcade game programming platform address: [https://arcade.makecode.com/](https://arcade.makecode.com/)
:::

## Interface Introduction

**Number 1:** Click on part number 1 to enter the project name and start programming a project. 
**Number 2:** The following section includes simple tutorials provided by the platform and game works shared by the community. Newbies can learn a little. 
![image-20240329162758193](https://learn.kittenbot.cn/2024md_pic/image-20240329162758193.png)

For beginners, it can be roughly divided into 3 parts:

1. Online simulator: simulate the running effect in real time according to the logic of the code.
2. Programming block bar: we drag and drop programming code from here to program.
3. Code editing area: after we drag the code from the block bar, we splice it here to complete the image, interface and logic construction of the game.
   ![image-20240329162833654](https://learn.kittenbot.cn/2024md_pic/image-20240329162833654.png)

## Game Prototype Design

1. Select or design a character image. Use this building block to create a character and put it under the `**when turned on**` execution building block. In the gallery, we can select a built-in character
   ![image-20240329165004029](https://learn.kittenbot.cn/2024md_pic/image-20240329165004029.png)

  ![image-20240329165010560](https://learn.kittenbot.cn/2024md_pic/image-20240329165010560.png)

2. Associate the character with the keyboard (also the buttons on the meow bit). At this time, you can try to use the keyboard to control the movement of the sprite in the simulator
   ![image-20240329165044476](https://learn.kittenbot.cn/2024md_pic/image-20240329165044476.png)

  ![image-20240329165146705](https://learn.kittenbot.cn/2024md_pic/image-20240329165146705.png) 


3. Add a background to the game, change only one color for the time being, and brighten the scene
    ![image-20240329165209632](https://learn.kittenbot.cn/2024md_pic/image-20240329165209632.png)

  ![image-20240329165306603](https://learn.kittenbot.cn/2024md_pic/image-20240329165306603.png)

4. Add a map to the game. With the limitation of the map, it really looks like a game scene. Click on the map setting interface, and first change the parameters. Change the original 16:16 to 10:8.
   ![image-20240329165326085](https://learn.kittenbot.cn/2024md_pic/image-20240329165326085.png)

  ![image-20240329165417817](https://learn.kittenbot.cn/2024md_pic/image-20240329165417817.png)

5. Select a brick you like and draw it with the mouse in the area on the right
   ![image.png](https://learn.kittenbot.cn/2024md_pic/1710902228702-1bb6a291-e43e-463d-af3c-1bdfdc336b53.png)
6. After building the following program, the simulator effect on the left is shown in the figure
   ![image-20240329165504097](https://learn.kittenbot.cn/2024md_pic/image-20240329165504097.png)

## Game Interaction

The above steps have completed the simplest game prototype design, including `roles`, `scenes`, `background colors`. Next, we continue to give it life. The so-called life of the game is to be able to experience the feeling of interaction in the game. Let's take the simple interaction of **the little bird hitting the tree** and 'chirping' as an example.

1. The interaction is carried out all the time, whether in the game or in life. Therefore, the building block `when the game updates` is used here to indicate that the content in this building block will be refreshed and executed at a subtle speed during the entire game running process.
   
   ![image-20240329165519784](https://learn.kittenbot.cn/2024md_pic/image-20240329165519784.png)
2. The basis of interaction is judgment and execution. In terms of the logic that the bird will chirp when it hits the tree, `whether it hits the tree` is a judgment, and `chirping` after hitting the tree is the execution.
   
   ![image-20240329165534852](https://learn.kittenbot.cn/2024md_pic/image-20240329165534852.png)
3. On the basis of the existing program, add the following building block program. After running in the simulator, you can see that the little bird will show **:)** when it hits the tree.
   ![image-20240329165722570](https://learn.kittenbot.cn/2024md_pic/image-20240329165722570.png)
4. Add realistic meaning, basic physical laws are necessary. In order to prevent objects from passing through each other, add the property of `wall` to the map scene.

- Return to the editing interface of the tile map, select the wall attribute
   ![image-20240329165737323](https://learn.kittenbot.cn/2024md_pic/image-20240329165737323.png) 
     ![img](https://learn.kittenbot.cn/2024md_pic/1710902704099-0c9f409a-9440-4ab5-9a85-32115f22ceeb.jpeg)
- Smear on the tile that needs to be turned into a wall, and the tile that turns red will be upgraded to a role that cannot be passed through
          ![image.png](https://learn.kittenbot.cn/2024md_pic/1600763048768-5062f967-7c40-475e-9ff5-271d44e67733.png)

## Physical Properties

The more real something is, the more likely it is to give people a stronger sense of empathy. Gravity exists in the environment in which we live is the most real, let's not talk about complex knowledge points, just focus on realizing it and see

1. The simulated scene is the sky, the bird is in a free fall under the condition of vertical downward gravity acceleration, the normal acceleration of free fall is about 1 g (about 9.8 m/s²), but because it is in pixels on the screen (1 pixel mapping 1 Meter), it looks too slow, so try to expand it by about 30 times
   ![image-20240329165924576](https://learn.kittenbot.cn/2024md_pic/image-20240329165924576.png)
   :::info
   You can see that the bird is falling from the beginning, which already has the feeling of free fall of gravity
   :::
2. Birds need to flap their wings to avoid hitting trees and fly up
   :::warning
   After all, we haven't tested the instantaneous vertical velocity of birds flapping their wings, so we simulate it with the vertical velocity of human jumping.

- According to the **law of conservation of mechanical energy**: 1/2*m(weight)*v²(square of take-off velocity)=m(mass)*g(acceleration of gravity=9.8)*h(height)
- Under normal conditions, people can jump vertically about 0.5 meters from the ground
  Therefore, the instantaneous velocity v can be obtained as about 3m/s
  :::
  According to the condition of expanding by 30 times, this v is also expanded by 30 times to 90. Press key A to let the bird flap its wings and fly once`<br />`![image-20240329170544000](https://learn.kittenbot.cn/2024md_pic/image-20240329170544000.png)

3. Since the bird has been affected by the vertical gravity, we should not use the button to interfere with the vertical coordinate of the bird at this time, so now change the y-axis velocity in the previous key association to 0
   ![image-20240329170604508](https://learn.kittenbot.cn/2024md_pic/image-20240329170604508.png)

## Finish the program

🏳‍🌈 Go to the project: [https://makecode.com/_LdFRbMU08Jgt](https://makecode.com/_LdFRbMU08Jgt)

## Videos

- Kitty has carefully prepared 17 micro-lessons for everyone, which can help you get started quickly
  - Bilibili: [https://www.bilibili.com/video/BV1uB4y1F7dw](https://www.bilibili.com/video/BV1uB4y1F7dw)
  - Kitty Course Platform: [https://edu.kittenbot.cn/p/t_pc/course_pc_detail/column/p_6404881ce4b030cacb1f976e?product_id=p_6404881ce4b030cacb1f976e](https://edu.kittenbot.cn/p/t_pc/course_pc_detail/column/p_6404881ce4b030cacb1f976e?product_id=p_6404881ce4b030cacb1f976e)

## Supporting books (need to purchase separately)

If the above do not meet your needs or you prefer paper books, you can purchase supporting books on Dangdang
[http://product.dangdang.com/29240752.html](http://product.dangdang.com/29240752.html)

## Onboard Sensor Use

---

Click on the expansion and choose the "controller" option

![image-20240329170902480](https://learn.kittenbot.cn/2024md_pic/image-20240329170902480.png)

2 LEDs, photosensitive sensor, temperature sensor, gyroscope

| Number                                                                                                                                                                 | Building Block                                                                              | Description                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1                                                                                                                                                                      | ![image-20240329170920626](https://learn.kittenbot.cn/2024md_pic/image-20240329170920626.png) | Onboard temperature measurement                                     |
| 2                                                                                                                                                                      | ![image-20240329170929338](https://learn.kittenbot.cn/2024md_pic/image-20240329170929338.png) | Acceleration in the three axial directions of the onboard gyroscope |
| 3                                                                                                                                                                      | ![image-20240329170954837](https://learn.kittenbot.cn/2024md_pic/image-20240329170954837.png) | Gyroscope event trigger                                             |
| 4                                                                                                                                                                      | ![image-20240329171003108](https://learn.kittenbot.cn/2024md_pic/image-20240329171003108.png) | Brightness change event                                             |
| 5                                                                                                                                                                      | ![image-20240329171013611](https://learn.kittenbot.cn/2024md_pic/image-20240329171013611.png) | Measurement value of the onboard brightness sensor                  |
| Because the controller is a common plug-in, other sensors (as shown in the figure below) are not available on the Makeblock, so you can ignore them for the time being |                                                                                             |                                                                     |

## Light Sensor Example

Intro: Create a sprite that repeatedly says the current light level.
Code:
![image-20240329171026347](https://learn.kittenbot.cn/2024md_pic/image-20240329171026347.png)
Open in Playground:
[https://makecode.com/_EkYhVPMAWT6A](https://makecode.com/_EkYhVPMAWT6A)
Behavior:
You should see the light level change when you cover the light sensor with your hand.
![lAHPBFf_-hsk2Y7NAfHNAfE_497_497.gif](https://learn.kittenbot.cn/2024md_pic/1625987342854-95fd0afc-bd65-4366-974f-9ae4862abf67.gif)

## Temperature Example

Introduction: Create a sprite and let it repeat to display the current temperature.
Program:
![image-20240329171119964](https://learn.kittenbot.cn/2024md_pic/image-20240329171119964.png)
You can open the program directly:
[https://makecode.com/_iLmVTKa89WrJ](https://makecode.com/_iLmVTKa89WrJ)
Phenomenon:
You can see the value slowly rising when your hand touches the thermistor (the measured temperature is slightly higher than the room temperature because there is heat on the PCB circuit board)
![lAHPBFDk_NGiiDvNAkLNAkI_578_578.gif](https://learn.kittenbot.cn/2024md_pic/1625987832439-391bc599-b157-4a56-8725-1d248eec921b.gif)

## Gyroscope Example

Introduction: Create a sprite, tilt the gyroscope left and right, and tilt it up and down to control the movement of the character (Microsoft platform has a bug for the time being, and this example does not get the correct result.)
Program: 
![image-20240329171144132](https://learn.kittenbot.cn/2024md_pic/image-20240329171144132.png)
You can open it directly as a program: 
[https://makecode.com/_6e0AYcLCcexs](https://makecode.com/_6e0AYcLCcexs)
Phenomenon: 
You can shake the micro:bit and see the character move with the tilt of the micro:bit

## Robotbit Usage

---

## Loading the Plugin

![image-20240329171155939](https://learn.kittenbot.cn/2024md_pic/image-20240329171155939.png)

In the extension input bar, enter the following URL and click search

github:kittenbot/meow-robotbit

![image-20240329171221735](https://learn.kittenbot.cn/2024md_pic/image-20240329171221735.png)

After loading the plugin, the following building block extensions will appear

![image-20240329171252674](https://learn.kittenbot.cn/2024md_pic/image-20240329171252674.png)

## 📋：Drive Motor

![资源 7.png](https://learn.kittenbot.cn/2024md_pic/1610448541235-ae452337-85f9-4e5f-9193-619651b23e14.png)

| No. | Block                                                                                       | Description                                      |
| --- | ------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 01  | ![image-20240329171313351](https://learn.kittenbot.cn/2024md_pic/image-20240329171313351.png) | Enable motor at a certain speed                  |
| 02  | ![image-20240329171321872](https://learn.kittenbot.cn/2024md_pic/image-20240329171321872.png) | Control the motor to rotate for a specified time |
| 03  | ![image-20240329171331162](https://learn.kittenbot.cn/2024md_pic/image-20240329171331162.png) | Control two motors to rotate at the same time    |
| 04  | ![image-20240329171340009](https://learn.kittenbot.cn/2024md_pic/image-20240329171340009.png) | Stop control of a single motor                   |
| 05  | ![image-20240329171347725](https://learn.kittenbot.cn/2024md_pic/image-20240329171347725.png) | Control the stop command of all motors           |

## 📋：Driving Stepper Motor

![resource 9.png](https://learn.kittenbot.cn/2024md_pic/1610448556433-ff3bb91f-d7ff-4950-9edb-43247af39168.png)

| Serial Number | Block                                                                                       | Description                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01            | ![image-20240329171404818](https://learn.kittenbot.cn/2024md_pic/image-20240329171404818.png) | Controls two stepper motors to rotate by an angle at the same time                                                                                                          |
| 02            | ![](https://learn.kittenbot.cn/2024md_pic/image-20240329171410110.png)                        | Controls a single stepper motor to rotate by an angle                                                                                                                       |
| 03            | ![image-20240329171359687](https://learn.kittenbot.cn/2024md_pic/image-20240329171359687.png) | Controls a single stepper motor to rotate by a number of circles                                                                                                            |
| 04            | ![](https://learn.kittenbot.cn/2024md_pic/image-20240329171417158.png)                        | A car equipped with two stepper motors; after filling in the diameter of the wheels, it controls the car to move forward by a specified distance                            |
| 05            | ![image-20240329171425362](https://learn.kittenbot.cn/2024md_pic/image-20240329171425362.png) | A car equipped with two stepper motors; after filling in the diameter of the wheels and the distance between the wheels, it controls the car to rotate by a specified angle |

## 📋：Drive the geekservo 9g servo motor

![Resource 8.png](https://learn.kittenbot.cn/2024md_pic/1610448572341-accb7503-ff4e-4645-89af-3551bc633daf.png)
![image-20240329171438649](https://learn.kittenbot.cn/2024md_pic/image-20240329171438649.png)
Control the servo motor to rotate to a specified angle, the angle range is -45 to 225 degrees
![image-20240329171510937](https://learn.kittenbot.cn/2024md_pic/image-20240329171510937.png)

## 📋：Drive Geek servo 2kg servo

![image.png](https://learn.kittenbot.cn/2024md_pic/1612692164855-29011c64-9640-451e-9a62-109dc7d1e760.png)
![image-20240329171530841](https://learn.kittenbot.cn/2024md_pic/image-20240329171530841.png)
Control the 2kg servo to rotate to a specified angle, the angle range is 0 to 360 degrees
![image-20240329171554225](https://learn.kittenbot.cn/2024md_pic/image-20240329171554225.png)

## 📋: Drive a common blue 9g servo

![image.png](https://learn.kittenbot.cn/2024md_pic/1612692200383-7b574655-b088-4ae0-b91e-bf373dd22fa8.png)
![image-20240329171617137](https://learn.kittenbot.cn/2024md_pic/image-20240329171617137.png)
Control the blue 9g servo to rotate to a specified angle, ranging from 0 to 180 degrees
![image-20240329171637802](https://learn.kittenbot.cn/2024md_pic/image-20240329171637802.png)

## 📋：Connecting to the Robotbit Ultrasonic

![Robotbit-Ultrasonic.png](https://learn.kittenbot.cn/2024md_pic/1623424405895-37e1c0a6-a6a0-4e0f-a698-034bf8cfa5ce.png)

![image-20240329171718057](https://learn.kittenbot.cn/2024md_pic/image-20240329171718057.png)

![image-20240329171814601](https://learn.kittenbot.cn/2024md_pic/image-20240329171814601.png)

## Wireless SD Module Usage

---

Purchase Link: 

[https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-21482550023.12.1a635d5fCeInSr&amp;id=605430480347](https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-21482550023.12.1a635d5fCeInSr&id=605430480347)
Introduction: Only recommended for advanced users! Mainly used for 2.4G wireless communication with Microbit. Bluetooth is generally not used unless there is a special requirement 

For more detailed tutorials, please refer to [Wireless SD Module Tutorial Details Page](https://www.yuque.com/kittenbot/hardwares/meowbit-sd)

![image.png](https://learn.kittenbot.cn/2024md_pic/1625990622984-817fec79-9d98-4776-9890-4b51cfcc8066.png)

## Release Notes

---

2024-3-29

- Modify Quick Start

  2024-3-20
  
- Update document content based on latest status
  2021-7-11
  
- Add onboard sensor examples

- Add micro-class link tutorial
  2020-9-22
  
- Add quick start tutorial
