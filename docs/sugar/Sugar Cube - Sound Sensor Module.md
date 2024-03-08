---
title: Sugar Cube - Sound Sensor Module
sidebar_position: 14
---

##  Functions
---
| **Signal** | Analog output<br />0~3.3V **Corresponding to the Future Board Lite**0~4096 |
| --- | --- |
|  |


## Module Principle
The sound sensor works based on the principle of piezoelectricity. When a sound wave hits the surface of the sensor, the piezoelectric material inside the sensor generates a tiny charge change, which can be measured and converted into a digital signal. In addition, the sound sensor also requires a pre-amplifier to amplify the charge change signal and filter out other types of interference signals.


## Wiring
![Futublock Lite Mainboard 3 - Copy.png](1698375489067-eb9f3b79-90c7-43a2-8435-7c13864f715e.png)
|  |  | Futublock Lite Interface | Cable | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar Cube Sound Intensity Module.png](1698304431894-0eb19018-6a88-438c-9981-9f2052b509c5.png) | Sugar Cube Sound Sensor Module | Port3 | White PH2.0-3Pin Interface Cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Support connecting to Port1, Port2, Port3, Port4<br />Pay attention to the consistency of interface and actual situation when programming
:::


## Blocks - Function Description
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1698392178271.svg](1698392220919-e33382e6-54ac-4cfa-820f-18995d20ecfb.svg) | Reads the output value of the module, range 0-4096, the louder the sound, the greater the value |
| 2 | ![blocksSvg-1698309378118.svg](1698309403607-7182a173-a74f-45a2-8d82-ea92632dc4f5.svg) | Converts value, mapping method is<br />output=100x(60-0)/(4096-0) |


## Block 1 - Full program
![blocksSvg-1698392183860.svg](1698392220988-8499bb37-3649-4c6f-985b-198a8bffb6bf.svg)


## Block 1 - Function Description
:::info
Set the color screen to full color pixel mode, and turn off the auto refresh mode. <br />![blocksSvg-1698392196028.svg](1698392220946-49a46894-6b20-47e4-8566-750f6617f320.svg)
:::
:::warning
Read the value of sound sensor, and set a threshold, when the value is over the threshold, the screen displays red, otherwise displays green. <br />The threshold can be modified according to the actual situation. <br />![blocksSvg-1698392199092.svg](1698392220977-85c4a11b-4eb2-4019-98cb-d100b2ff124e.svg)
:::
:::tips
Display the value of sound sensor on the color screen. <br />![blocksSvg-1698392202212.svg](1698392220954-650b4194-1d0f-430e-b48d-892e867c9143.svg)
:::


## Program 2 - Complete Program
![blocksSvg-1698393178505.svg](1698393199803-ea6ad38b-dff5-4881-80ee-10156206c9c8.svg)


## Block 2 - Functions Explained
:::warning
Set the display to full color pixel mode and turn off auto refresh mode.<br />![blocksSvg-1698393214401.svg](1698393221062-b75c4cdb-8d8e-4db8-ae4c-2c7f2dc10ed1.svg)
:::
:::success
Draw three concentric circles that represent three levels of sound.<br />![blocksSvg-1698393189146.svg](1698393199820-2aeaecab-0de1-4c71-9e40-e6a0d4d73c94.svg)
:::
> Convert the value from the sound sensor to a value that can be displayed as the radius of a circle on the screen.
> - How mapping works
> 
For example, if the value of x is between 0 and 4096. Our display can't show a rectangle with a height of 4096 pixels, but it can show a rectangle with a maximum height of 100 pixels. We can use mapping to convert the value to a smaller number.
> Let's say the current reading from the raindrop water level sensor is X = 2000.
> Using the mapping parameters in the diagram, we get = 2000x((60-0)/(4096-0))=29.296
> Since the display variable does not support displaying decimals directly, we convert it to an integer.
> 
> ![blocksSvg-1698393193328.svg](1698393199820-14ea37d7-215c-4f52-bbb5-dfec000a79a2.svg)


##   Using Kittenblock
Run the program offline to view the effect


## Using on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Programming with MakeCode platform


## Add the Sugar plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br /> Search Sugar in the extensions, click Add

