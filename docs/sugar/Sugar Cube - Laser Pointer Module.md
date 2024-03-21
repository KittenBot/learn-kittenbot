---
title: Sugar Cube - Laser Red Dot Module
sidebar_position: 13
---

![Red Dot Laser.png](https://learn.kittenbot.cn/2024md_pic/1706865662183-6e16b5f7-0420-4920-96dd-69b814417103.png)



##  Function

---
Open laser emission after receiving control signal
| **Signal** | timing signal |
| --- | --- |
|  |





## Principle of the Module
The laser emitter produces laser through the effect of stimulated emission of radiation. When the laser medium is activated by external energy, its atoms or molecules are in an excited state. When they collide with photons corresponding to the excited state, the excited atoms or molecules will jump to a lower energy level while releasing a beam of photons coherent with the stimulated radiation, which is the laser.





## Wiring
![Untitled-1.png](https://learn.kittenbot.cn/2024md_pic/1706866350038-8b100f3a-dc92-4ffc-ac05-adb48d4863bc.png)

|  |  | Future Board Lite Interface | Cable |  |
|---|---|---|---|---|
| ![Red Dot Laser.png](https://learn.kittenbot.cn/2024md_pic/1706865662183-6e16b5f7-0420-4920-96dd-69b814417103.png) | Sugar Cube Red Dot Laser Module | Port3 | White PH2.0-3Pin Interface Cable | ![1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
warning
Supports connecting to Port1, Port2, Port3, and Port4.<br />Pay attention to the consistency between the interface and the actual usage when programming.





## Blocks - Function Description
| Number | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![image-20240315170254130](https://learn.kittenbot.cn/2024md_pic/image-20240315170254130.png) | Controls the enabling or disabling of the red laser module on the control port |





## Program 1 - A Complete Program
![image-20240315170318908](https://learn.kittenbot.cn/2024md_pic/image-20240315170318908.png)



By controlling the on and off of the laser through a loop
::



## Using Kittenblock
Use offline download to run the program to see the effect





## Using on Microbit
![Robotbit_压缩后.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)





## Programming Environment
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use the Makecode programming environment





##   Add the Sugar plugin
![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />
Search for Sugar in extensions, click Add





##   Circuit Connection
![image.png](https://learn.kittenbot.cn/2024md_pic/1709782064213-1d900ed6-6b32-4210-b55d-fb0e94fb1a4a.png)
|   |  | Microbit Interface | Cable | <br /> |
| --- | --- | --- | --- | --- |
| ![2Red dot laser.png](https://learn.kittenbot.cn/2024md_pic/1706865662183-6e16b5f7-0420-4920-96dd-69b814417103.png) | Sugar Cube Red Dot Laser Module | P0 | White PH2.0-3Pin Interface Cable | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
warning
Supports connection to P0, P1, P2, P8, etc. <br /> Pay attention to the consistency of the interface and the actual interface during programming

## Blocks - Function Description

| Number | Block Image                                                  | Block Function                                               |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1      | ![image-20240315170440970](https://learn.kittenbot.cn/2024md_pic/image-20240315170440970.png) | Controls the enabling or disabling of the red laser module on the control port |



## Case: Control by button
![image-20240315170518245](https://learn.kittenbot.cn/2024md_pic/image-20240315170518245.png)



