# Introduction to MicroCode

## What is MicroCode?

![image-20240620150801501](Microcode.assets/image-20240620150801501.png)

MicroCode is a graphical programming platform created by Microsoft specifically for young children. It enables programming on the Microbit V2 without the need for a computer or tablet. By inserting the Microbit into a dedicated expansion board with a color screen, children can complete programming creations by writing icon-based logic directly on the board. MicroCode offers a visual programming model based on Kodu, suitable for children aged 6-9. This document will introduce the features, basic usage, precautions, and a quick start guide for MicroCode.

## Features

MicroCode is a visual programming tool for Microbit V2, designed to provide a simple programming experience for children. Its main features include:

- **Anywhere, Anytime**: Enables programming anytime and anywhere, accompanied by a familiar game controller to attract children.
- **Child-Friendly**: Icon-based, structured code editor and programming language, easy for children to use.
- **Sample Programs**: Provides numerous sample programs to help users get started quickly.
- **Extended Functions**: Use Jacdac accessories (such as LEDs, servo motors, etc.) for expansion and programming.
- **Robot Control**: Use MicroCode to program and control small robots for line following and other functions.
- **Multilingual Support**: An international programming platform supporting over 20 languages.

## Required Hardware

The hardware needed for using MicroCode graphical programming:

### Basic Essentials:

1. [Microbit V2 (V1.5 is not supported)](https://item.taobao.com/item.htm?id=629040300061&skuId=4858762989208&spm=a1z10.3-c-s.w4002-25280158849.9.3f555d5fT0wMNd)

![image-20240531152547021](Microcode.assets/image-20240531152547021.png)

2. [Newbit Arcade Shield](https://item.taobao.com/item.htm?id=647757869106&skuId=5609200898405&spm=a1z10.3-c-s.w4002-25280158849.11.3f555d5fT0wMNd)

![image-20240603155711761](Microcode.assets/image-20240603155711761.png)

### Optional Extensions:

1. Jacdac KitA Electronic Kit
2. MicroCode Programming Car

## Quick Start

For the first use, you need to download the MicroCode firmware for Microbit V2. Subsequent uses do not require a download.

1. Open the website [microcode (microsoft.github.io)](https://microsoft.github.io/microcode/)

![image-20240531111449261](Microcode.assets/image-20240531111449261.png)

2. Follow the instructions in the image to download the MicroCode firmware and save it to your computer.

![image-20240531111516350](Microcode.assets/image-20240531111516350.png)

3. Connect the Microbit V2 to your computer using a MicroUSB cable, and drag (or copy) the downloaded firmware to the Microbit V2's USB drive.

![image-20240531111715565](Microcode.assets/image-20240531111715565.png)

4. After the download is complete, insert the Microbit V2 into the Newbit Arcade Shield and disconnect the USB data cable. The Newbit Arcade Shield offers a lithium battery accessory, and it is recommended to purchase the package with the lithium battery accessory.

![image-20240531112040006](Microcode.assets/image-20240531112040006.png)

5. Turn on the power switch, and you will see MicroCode appear on the screen (for subsequent uses, simply turn on the power).

## Basic Operations

Use the Newbit Arcade Shield’s four directional buttons to move the cursor.
- **A Button (Blue Button)**: Confirm
- **B Button (Red Button)**: Return

### Opening Examples

For the first use, select "Examples" (as shown in the image below) to quickly experience the charm of MicroCode.

![image-20240603160322515](Microcode.assets/image-20240603160322515.png)

In the programming icons, Button A and Button B refer to the Microbit's Button A and Button B. Our expansion board acts like a "mini-computer," programming the Microbit through the "mini-computer." When we press Microbit's Button A and Button B, the matrix and buzzer will respond accordingly.

![image-20240531113648294](Microcode.assets/MicroCode.gif)

### Creating a Program

Create a blank program.

![image-20240603160647184](Microcode.assets/image-20240603160647184.png)

### Editing the Last Program

Selecting edit will open the last program by default. Even if the device is turned off, it will open the program from before it was turned off.

![image-20240603160934130](Microcode.assets/image-20240603160934130.png)

### Saving a Program

MicroCode supports storing up to three programs. Each time you save, you will choose a storage location; there are three locations in total. If there is an existing program, it will be overwritten.

![image-20240603161112990](Microcode.assets/image-20240603161112990.png)

### Loading a Saved Program

![image-20240603161400654](Microcode.assets/image-20240603161400654.png)

## Programming Syntax

MicroCode's programming syntax is straightforward, with only one rule: "When... Do...". For example, when Microbit Button A is pressed, the matrix lights up with a smiley face. Other icons can be gradually understood through practice.

![image-20240531114938687](Microcode.assets/image-20240531114938687.png)

## "When" (As Input Conditions)

There are 14 icons available (the first 12 are related to Microbit programming), and the last 2 are related to the Microbit programming car.

![image-20240603161445680](Microcode.assets/image-20240603161445680.png)

1. Button Pressed (Button A, Button B, Microbit Logo, Pin 0-2)

![image-20240531134126486](Microcode.assets/image-20240531134126486.png)

2. Button Released (similarly)

![image-20240531134317886](Microcode.assets/image-20240531134317886.png)

3. Movement (Microbit gyroscope attitude detection: shake, tilt up, tilt down, tilt left, tilt right, face up, face down)

![image-20240531134433229](Microcode.assets/image-20240531134433229.png)

4. Sound (triggered when the sound reaches a threshold, divided into 5 threshold levels. The more dots, the louder the sound. The last speaker icon indicates triggering when the current sound increases.)

![image-20240531134652083](Microcode.assets/image-20240531134652083.png)

5. Temperature (triggered when the temperature changes: temperature rises, temperature falls)

![image-20240531135018455](Microcode.assets/image-20240531135018455.png)

6. Light Intensity (Microbit detects the level of ambient light and triggers at a certain threshold)

![image-20240531135219301](Microcode.assets/image-20240531135219301.png)

7. Receive Wireless Signal Content (1-5, or variables x, y, z)

![image-20240531135338304](Microcode.assets/image-20240531135338304.png)

8. When Page Starts (0.25 seconds, 1 second, 5 seconds, any seconds)

![image-20240531135429102](Microcode.assets/image-20240531135429102.png)

9. Timer (0.25 seconds, 1 second, 5 seconds, any seconds)

![image-20240531135522818](Microcode.assets/image-20240531135522818.png)

10. Variable Condition (when variable x, y, z equals 1-5 or equals another variable)

![image-20240531135750251](Microcode.assets/image-20240531135750251.png)

11. When the car's ultrasonic sensor detects an obstacle at a certain distance (the fewer the dots, the closer the obstacle)

![image-20240531135854699](Microcode.assets/image-20240531135854699.png)

12. When the car's line-following sensor detects a line (both on the line, left sensor on the line, right sensor on the line, neither on the line, line fully off the left sensor, line fully off the right sensor)

![image-20240531140034163](Microcode.assets/image-20240531140034163.png)

## "Do" (As Output Results)

There are 11 execution icons available (the first 10 are related to Microbit programming), and the last one is related to the Microbit programming car.

![image-20240603161518271](Microcode.assets/image-20240603161518271.png)

1. Matrix Expression Display (can be edited freely)

![image-20240531140540061](Microcode.assets/image-20240531140540061.png)

2. Matrix Number Display (1-5, display variable, random number, display temperature)

![image-20240531140603886](Microcode.assets/image-20240531140603886.png)


3. Buzzer Plays Sound Effect (the icon represents the sound effect content, such as laughter)

![image-20240531141920240](Microcode.assets/image-20240531141920240.png)

4. Buzzer Plays Short Tune, which can be DIY

![image-20240531142102911](Microcode.assets/image-20240531142102911.png)

5. Wireless Send (values 1-5, variables x, y, z, random number, temperature)

![image-20240531142137902](Microcode.assets/image-20240531142137902.png)

6. Set Wireless Group (1-5, total 5 groups)

![image-20240531142257946](Microcode.assets/image-20240531142257946.png)

7. Page Switch (can switch to pages 1-5); page switching can generally be understood as calling subroutines

![image-20240531142338759](Microcode.assets/image-20240531142338759.png)

8. Variable Assignment (for variables x, y, z alike), the value can be 1-5, another variable, a random number, or temperature

![image-20240531142940007](Microcode.assets/image-20240531142940007.png)

9. Car Robot Execution, Motion Control (forward, backward, left, right, U-turn), Car RGB Control, Mechanical Arm Open/Close

![image-20240531142839463](Microcode.assets/image-20240531142839463.png)

## Hardware Expansion

In addition to programming for Microbit V2, MicroCode also supports sensor programming for external sensors, suitable for second-stage advanced learning with MicroCode.

Currently, it supports the Jacdac KitA electronic kit, which is suitable for small projects for young children. KitA includes button modules, rotary encoders, light-sensitive modules, magnetic sensors, light ring modules, and sliding potentiometers.

![image-20240531150052876](Microcode.assets/image-20240531150052876.png)

### Connecting and Using Jacdac Modules

Use the dedicated Jacdac connection cables for wiring, which can be inserted either way, offering a great experience. For example, using the connection cable to connect the RGB light ring, you will see an LED icon in the programming interface indicating that this sensor is available.

![image-20240531151543873](Microcode.assets/image-20240531151543873.png)

Programming

![image-20240531152143286](Microcode.assets/image-20240531152143286.png)

Effect

![MicroCode_RGBRing](Microcode.assets/MicroCode_RGBRing.gif)

## Common Questions and Answers

1. **Question**: Can Microbit V1.5 use MicroCode?
   **Answer**: No.

2. **Question**: What is the relationship between MicroCode and Makecode?
   **Answer**: Both platforms are developed by Microsoft and are international programming platforms. MicroCode is aimed at young children and scenarios without computers.

3. **Question**: There is no response when inserting Microbit V2 into the Newbit Arcade Shield.
   **Answer**: Please check:
   - If you have downloaded the MicroCode firmware
   - If the power of the Newbit Arcade Shield is turned on

4. **Question**: Can programs written in MicroCode be shared?
   **Answer**: Programs edited on the hardware can only be saved, not shared.

