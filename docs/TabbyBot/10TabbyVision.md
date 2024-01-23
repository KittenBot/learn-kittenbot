# TabbyVision Quick Start

## Introduction

![img](https://learn.kittenbot.cn/2023md_pic/202401231820214.png)

TabbyVision is an AI vision plugin for KittenBot's KOI AI vision car, designed to be used with TabbyBot. It provides the following functionalities:

1. Road sign detection
2. Digit detection
3. Letter detection
4. Face detection
5. Common object detection
6. Color block tracking
7. Line detection
8. Feature classification
9. MQTT

## On-board resources

![koi-介绍.png](https://learn.kittenbot.cn/2023md_pic/202401231828629.png)



## Quick start

1. Connect the circuit
   P13 and P14 are mapped as serial ports.

   ![image.png](https://learn.kittenbot.cn/2023md_pic/202401231826973.png)

2. Turn on the power of the car.

   ![img](https://learn.kittenbot.cn/2023md_pic/202401231827906.png)

3. Open the Makecode programming platform at https://makecode.microbit.org/

4. Load the AI camera-specific plugin in the extensions: https://github.com/KittenBot/pxt-tabbyvision.git

   ![image.png](https://learn.kittenbot.cn/2023md_pic/202401231827896.png)

5. Start programming and learning.

   ![image.png](https://learn.kittenbot.cn/2023md_pic/202401231827711.png)

## Usage notes
Since KOI takes some time to start up, make sure both the Microbit and KOI are powered off. After turning on the power, ensure that the KOI screen can display real-world images (running). Then press the reset button on the Microbit to restart the Microbit's serial port initialization program in order to control KOI.

## Example program testing

1. Front and rear camera:
   The camera and screen have the same orientation for the front camera, where the screen faces forward and the camera faces backward. Set it accordingly in the software.
   [Link to example](https://makecode.microbit.org/_VdU9mJD4ydPR)
2. Face tracking:
   Returns the x and y coordinates of the largest face and the number of faces in the current frame.
   [Link to example](https://makecode.microbit.org/_b4sURCD3LPxc)
3. Road sign recognition:
   Returns the corresponding directional sign based on the road sign. The recognized road sign name can also be directly output by pressing a button.
   [Link to example](https://makecode.microbit.org/S23912-71162-16615-02750)
4. Digit recognition:
   Returns the largest digit card recognized on the screen and displays the number on the microbit.
   [Link to example](https://makecode.microbit.org/S19004-79431-19596-29333)
5. Letter recognition:
   Returns the largest letter card recognized on the screen and displays the letter on the microbit.
   [Link to example](https://makecode.microbit.org/S01087-05700-34916-05774)
6. Feature classification:
   Train two targets using the on-board AB buttons on the microbit. The recognition results will be displayed in real-time on the microbit.
   [Link to example](https://makecode.microbit.org/82657-51147-16186-03879)
7. Object recognition:
   Recognizes 20 common objects.
   [Link to example](https://makecode.microbit.org/S50527-91687-36562-18676)
8. Color tracking:
   Can learn colors autonomously or track built-in common red, green, and blue colors.
   [Link to example](https://makecode.microbit.org/S87085-06604-51047-61364)
9. Line tracking:
   Returns the coordinates of both ends of the line on the screen.
   [Link to example](https://makecode.microbit.org/_6w9eXqC4HCiv)
10. IoT:
    Transmits messages through cloud-based IoT servers.
    [Link to example](https://makecode.microbit.org/_JWv8VeXRjM8m)