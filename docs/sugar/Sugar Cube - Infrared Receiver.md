---
title: Sugar - Infrared Receiver
sidebar_position: 35
---
## Function

---

To accept and process signals from infrared remote controllers

Signal:Timing Signal

## Module Principle

> Key value data corresponding to infrared remote control emission

![红外遥控器.jpeg](https://learn.kittenbot.cn/2024md_pic/1698304464112-9770ba65-2693-4bf6-94b9-e9afabba54f3.jpeg)

| ff005da2 | ff009d62 | ff001de2 |
| -------- | -------- | -------- |
| ff00dd22 | ff00fd02 | ff003dc2 |
| ff001fe0 | ff0057a8 | ff003dc2 |
| ff009768 | ff006798 | ff006f90 |
| ff00cf30 | ff00e718 | ff00857a |
| ff00ef10 | ff00c738 | ff00a55a |
| ff00bd42 | ff00b54a | ff00ad52 |

## Wiring

![Futureboard Lite mainboard 3 - 副本.png](https://learn.kittenbot.cn/2024md_pic/1698380706419-a2ebab60-1711-4200-b918-f513c0643b69.png)

|                                                                                                                                          |                         | Futureboard Lite interface | Use wire                         |                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![Sugar cube infrared receiving module.png](https://learn.kittenbot.cn/2024md_pic/1698304447703-cf39bc13-2665-402a-9b8f-7c539b825262.png)  | Infrared remote control | Port3                      | White PH2.0-3Pin interface cable | ![untitled.100.png](https://learn.kittenbot.cn/2024md_pic/1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
| warning                                                                                                                                  |                         |                            |                                  |                                                                                                                 |
| Supported connection to Port1、Port2、Port3、Port4<br />Be sure the interface is consistent with the actual situation while programming. |                         |                            |                                  |                                                                                                                 |

## Blocks - Function Description

| Number | Block Image                                                                                 | Block Function                             |
| ------ | ------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 1      | ![image-20240315153821192](https://learn.kittenbot.cn/2024md_pic/image-20240315153821192.png) | Read key values from the remote controller |

## Program 1 - Full Program

![image-20240315155627199](https://learn.kittenbot.cn/2024md_pic/image-20240315155627199.png)

## Program 1 - Function Description

:::danger
Set the color screen to dot matrix mode, initialize the variable to 1`<br />`![image-20240315155658262](https://learn.kittenbot.cn/2024md_pic/image-20240315155658262.png)
:::
:::danger
Read the infrared remote control emission data`<br />`

![image-20240315155715581](https://learn.kittenbot.cn/2024md_pic/image-20240315155715581.png):::
:::tips
When there is data, x is true, otherwise it is false`<br />`When the data is true, then make a judgment, if it is ff005da2, it corresponds to the infrared remote control`<br />`Multiply the variable of the flag by negative one, the flag variable after this operation, there are always only two possible values, -1 or 1`<br />`![image-20240315155730174](https://learn.kittenbot.cn/2024md_pic/image-20240315155730174.png)
:::
:::info
By judging whether the flag variable is 1, it can be processed in two cases, if it is 1, the big heart will be displayed, if it is -1, the small heart will be displayed`<br />`This usage can be extended to other scenarios, such as turning on lights, turning on motors`<br />`![image-20240315155740332](https://learn.kittenbot.cn/2024md_pic/image-20240315155740332.png)
:::

## Program 2 - a complete program

![blocksPng-1710491007478](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710491007478.png)

## Program 2- Functional Description

:::warning
Initializes RGB settings and related color screen configurations`<br />`

![blocksPng-1710490840647](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710490840647.png)

:::
:::warning
Reads data from the infrared remote control; if there is data, proceed to the next step`<br />`

![blocksPng-1710490860314](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710490860314.png)

:::
:::info
Judges the read data; if it is ff00fd02, increases the brightness variable by 10; if the value exceeds 100, resets it`<br />`

![blocksPng-1710490908800](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710490908800.png)

:::
:::danger
Judges the read data; if it is ff006798, decreases the brightness variable by 10; if the value is less than 0, resets it`<br />`![blocksPng-1710490933419](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710490933419.png)
:::
:::info
Controls the brightness of the colored light and displays the brightness value on the color screen`<br />`
:::![blocksPng-1710490993421](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710490993421.png)

## Using KittenBlock

Run the program offline to view the effect

## Using on Microbit

![Robotbit_compressed.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)

## Programming Platform

[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)`<br />`Use Makecode programming platform

## Add the Sugar Plug-in

![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)![image.png](https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)`<br />`Search for Sugar in the extensions, click Add

## Circuit connection

![image.png](https://learn.kittenbot.cn/2024md_pic/1709782315784-9c21d951-adf9-4d23-9859-637c528f9d5a.png)
