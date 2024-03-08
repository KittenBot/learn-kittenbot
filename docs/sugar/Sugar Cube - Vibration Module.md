---
title: Sugar Cube - Vibration Module
sidebar_position: 9
---

## Introduction
![Sugar Cube Motor.png](1698287532183-366309ef-d990-40b9-af37-553d1959ba62.png)


## Features
---
Controls motor rotation to achieve a vibration effect, similar to the principle of a mobile phone vibration motor
| **Signal** | Digital input<br />1 (high level): Turn on vibration<br />0 (low level): Turn off vibration |
| --- | --- |
|  |


##   Module Principle
There is a motor inside, the axis of rotation of the motor is not symmetrically centered, which will result in the effect of overall vibration


## Wiring
![Future_Board_Lite_Motherboard_3 - 副本.png](1698288934990-45c33ef9-8b83-4926-b5bb-f20911f5a61c.png)
|  |  | Future_Board_Lite_Interface | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar_Vibration_Module.png](1698287532183-366309ef-d990-40b9-af37-553d1959ba62.png) | Sugar Vibration Module | Port1 | White PH2.0-3Pin Interface Wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Supports connection to Port1、Port2、Port3、Port4<br />Pay attention to the consistency between the interface and the actual interface during programming
:::


## Block Function Description
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1698288662359.svg](1698288672210-7d7ffcfd-3a8a-4bb0-b0bb-dcb87f2f79ec.svg) | Control the switch of vibration module |
| 2 | ![blocksSvg-1698288655899.svg](1698288672218-8c89fb32-cbd8-4bfc-81a5-425cf48301e8.svg) | Invert the result |
| 3 | ![blocksSvg-1698288659107.svg](1698288672215-fd70e8f8-2f29-4af5-834c-5c1a2afd253b.svg) | Judge whether the onboard button of Future Board Lite is pressed |
| 4 | ![blocksSvg-1698288690600.svg](1698288698231-4e243cc3-abb1-44b2-a98b-45dbb31e4625.svg) | Wait for execution |
| No. | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709707484378-a25c8e4d-3934-4a54-97e1-e9fcf550eba2.png) | Control the switch of vibration module |


## Program - Function Description
:::info
![blocksSvg-1698386572934.svg](1698386617088-f76066d3-3af9-45bb-a264-d35fe4b424aa.svg)<br />After pressing the button, wait for the button to be released and then start the vibration module
:::


## Program - Full program
![blocksSvg-1698386559087.svg](1698386587772-248dfcb9-f2e0-4924-b331-b04c33743980.svg)


## Effect
:::warning
Press the A button to turn on the vibration module<br />Press the B button to turn off the vibration module
:::


## Use Kittenblock
Use the app to download and run programs offline to view results


## Using on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use Makecode programming platform


##   Add the Sugar plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search for Sugar in the extensions, click add


## Circuit connection
![image.png](1709782569408-b31b39a1-d115-4f31-8315-a0240273e7bb.png)
| | | Microbit port | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![2 vibration module.png](1709792663875-77566f8d-5300-4a38-8017-9ee42410b1ba.png) | Sugar vibration module | P0 | White PH2.0-3Pin interface wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |


## Case: Button control
![image.png](1709707502504-c9f05ab2-f181-4582-aba0-8db581af2447.png)

