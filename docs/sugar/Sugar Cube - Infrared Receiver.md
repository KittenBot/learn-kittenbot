---
title: Sugar Cube - Infrared Receiver
sidebar_position: 35
---

##  Function
---
To accept and process signals from infrared remote controllers
| **Signal** | Timing Signal |
| --- | --- |
|  |


## Module Principle
![Infrared remote controller.jpeg](https://hw-oss.oss-cn-beijing.aliyuncs.com/upload/documents/1698304464112-9770ba65-2693-4bf6-94b9-e9afabba54f3.jpeg)<br />Key value data corresponding to infrared remote control emission
| ff005da2 | ff009d62 | ff001de2 |
| --- | --- | --- |
| ff00dd22 | ff00fd02 | ff003dc2 |
| ff001fe0 | ff0057a8 | ff003dc2 |
| ff009768 | ff006798 | ff006f90 |
| ff00cf30 | ff00e718 | ff00857a |
| ff00ef10 | ff00c738 | ff00a55a |
| ff00bd42 | ff00b54a | ff00ad52 |


## Wiring

![Futureboard Lite mainboard 3 - 副本.png](1698380706419-a2ebab60-1711-4200-b918-f513c0643b69.png)
|  |  | Futureboard Lite interface | Use wire | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar cube infrared receiving module.png](1698304447703-cf39bc13-2665-402a-9b8f-7c539b825262.png) | Infrared remote control | Port3 | White PH2.0-3Pin interface cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
:::warning
Supported connection to Port1、Port2、Port3、Port4<br />Be sure the interface is consistent with the actual situation while programming.
:::


## Blocks - Function Description
| Number | Block Image | Block Function |
|---|---|---|
| 1 | ![blocksSvg-1698379835131.svg](1698379912673-88b570e9-4f41-46ab-88b9-2a13145f54d2.svg) | Read key values from the remote controller |


## Program 1 - Full Program
![blocksSvg-1698379849453.svg](1698379912668-7248758d-7617-40cc-b173-4d56d1004f4a.svg)


## Program 1 - Function Description
:::danger
Set the color screen to dot matrix mode, initialize the variable to 1<br />![blocksSvg-1698379860837.svg](1698379912673-51cc4393-aab7-4803-a494-c3e69fa7daec.svg)
:::
:::danger
Read the infrared remote control emission data<br />![blocksSvg-1698379870163.svg](1698379912684-b86909a8-5334-41c2-bbb3-7a288b093c77.svg)
:::
:::tips
When there is data, x is true, otherwise it is false<br />When the data is true, then make a judgment, if it is ff005da2, it corresponds to the infrared remote control<br />Multiply the variable of the flag by negative one, the flag variable after this operation, there are always only two possible values, -1 or 1<br />![blocksSvg-1698379876644.svg](1698379912686-7992d17d-47d4-4e3a-9882-a7217d9aadd6.svg)
:::
:::info
By judging whether the flag variable is 1, it can be processed in two cases, if it is 1, the big heart will be displayed, if it is -1, the small heart will be displayed<br />This usage can be extended to other scenarios, such as turning on lights, turning on motors<br />![blocksSvg-1698379879864.svg](1698379913329-9c7b820e-151f-4076-8173-befdba35a928.svg)
:::


## Program 2 - a complete program
![blocksSvg-1698380043559.svg](1698380089777-65c47be7-cfa6-45bb-9c2d-337c0dc0e4a2.svg)


## Program 2- Functional Description
:::warning
Initializes RGB settings and related color screen configurations<br />![blocksSvg-1698380013743.svg](1698380085957-d03c846a-077e-414e-8c79-2bb8621fdc52.svg)
:::
:::warning
Reads data from the infrared remote control; if there is data, proceed to the next step<br />![blocksSvg-1698380017731.svg](1698380085972-896936fd-ca43-4458-9872-01d1b213b80f.svg)
:::
:::info
Judges the read data; if it is ff00fd02, increases the brightness variable by 10; if the value exceeds 100, resets it<br />![blocksSvg-1698380027243.svg](1698380085963-aeaf978b-6b58-42a6-9d1d-10049fd0b0b6.svg)
:::
:::danger
Judges the read data; if it is ff006798, decreases the brightness variable by 10; if the value is less than 0, resets it<br />![blocksSvg-1698380031069.svg](1698380085968-3bbb04e5-bf0e-4483-805a-6e27fad322df.svg)
:::
:::info
Controls the brightness of the colored light and displays the brightness value on the color screen<br />![blocksSvg-1698380034689.svg](1698380085969-2dd21102-8134-4ef5-ac1d-7429cb5c0cae.svg)
:::


## Using KittenBlock
Run the program offline to view the effect


## Using on Microbit
![Robotbit_compressed.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use Makecode programming platform


##   Add the Sugar Plug-in
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search for Sugar in the extensions, click Add


##   Circuit connection
![image.png](1709782315784-9c21d951-adf9-4d23-9859-637c528f9d5a.png)

