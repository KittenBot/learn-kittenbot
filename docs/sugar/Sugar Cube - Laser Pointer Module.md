---
title: Sugar Cube - Laser Red Dot Module
sidebar_position: 13
---

##  Function
---
Open laser emission after receiving control signal
| **Signal** | timing signal |
| --- | --- |
|  |


## Principle of the Module
The laser emitter produces laser through the effect of stimulated emission of radiation. When the laser medium is activated by external energy, its atoms or molecules are in an excited state. When they collide with photons corresponding to the excited state, the excited atoms or molecules will jump to a lower energy level while releasing a beam of photons coherent with the stimulated radiation, which is the laser.


## Wiring
![Untitled-1.png](1706866350038-8b100f3a-dc92-4ffc-ac05-adb48d4863bc.png)
|  |  | Future Board Lite Interface | Cable |  |
|---|---|---|---|---|
| ![Red Dot Laser.png](1706865662183-6e16b5f7-0420-4920-96dd-69b814417103.png) | Sugar Cube Red Dot Laser Module | Port3 | White PH2.0-3Pin Interface Cable | ![Untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Supports connecting to Port1, Port2, Port3, and Port4.<br />Pay attention to the consistency between the interface and the actual usage when programming.
:::


## Blocks - Function Description
| Number | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksSvg-1706868093684.svg](1706868137083-f0a4d2e4-b5dc-4188-979f-0075a2301975.svg) | Controls the enabling or disabling of the red laser module on the control port |
| Number | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709706415014-da35db22-57b8-4e0a-ac19-cfeae0ed0041.png) | <br /> |


## Program 1 - A Complete Program
![screenshoot-2402041718.png](1707038305941-ca05eda5-aa96-49a0-8422-20a9f65e8593.png)


## Program 1 - Function Description
:::danger
![blocksPng-1707038275762.png](1707038283389-8d04e641-9bc9-4574-9258-625bf3f650fe.png)<br />Define a function to control the short-term on and off of the laser module.
:::
:::danger
![blocksPng-1707038312826.png](1707038319867-26741d9d-a168-43cb-ab18-feafc8e2eee2.png)<br />Define a function to control the long-term on and off of the laser module.
:::
:::tips
![image.png](1707038396144-1c8f1059-5b00-4d4b-9f5c-26c07d4589fc.png)<br />By controlling the on and off of the laser through a loop, simulate the SOS signal, the law of three long, three short, and three long laser emissions.
:::


## Using Kittenblock
Use offline download to run the program to see the effect


## Using on Microbit
![Robotbit_压缩后.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


## Programming Environment
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use the Makecode programming environment


##   Add the Sugar plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />
Search for Sugar in extensions, click Add


##   Circuit Connection
![image.png](1709782064213-1d900ed6-6b32-4210-b55d-fb0e94fb1a4a.png)
|   |  | Microbit Interface | Cable | <br /> |
| --- | --- | --- | --- | --- |
| ![2Red dot laser.png](1706865662183-6e16b5f7-0420-4920-96dd-69b814417103.png) | Sugar Cube Red Dot Laser Module | P0 | White PH2.0-3Pin Interface Cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Supports connection to P0, P1, P2, P8, etc. <br /> Pay attention to the consistency of the interface and the actual interface during programming
:::


## Case: Control by button
![image.png](1709706436931-f4fc3599-0658-4ac1-a014-6df72321f83f.png)

