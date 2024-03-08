---
title: Sugar Cube - RGB Ring Light
sidebar_position: 34
---

## Introduction
![IMG_4009.JPG](1694743956158-1282f2e1-dc0d-41c0-869c-58bd3e29ecac.jpeg)


##   Feature
---
| **Signal** | Time-Series Signal |
| --- | --- |
|  |


## Module Principle
The colored LED lamp bead has a lamp controller directly built-in, in addition to the 3-color LED. This is called the IC lamp bead. You only need to input a 24-bit RGB control signal, and it will automatically generate a drive pwm signal internally. It also has built-in signal forwarding. For continuous input signals, after intercepting the first 24 bits, the following data is automatically forwarded from the DOUT port to the next lamp bead.


##   Coding Blocks


## Building Blocks - Function Description
| ID | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![blocksPng-1707107332870.png](https://s2.loli.net/2022/08/17/LqB6h27k4e91dSUJ.png) | Colorful lights initialization settings. You can choose the 3 RGBs on board or the light ring of other interfaces. External light rings generally use 8 RGBs |
| 2 | ![blocksPng-1707107355491.png](https://s2.loli.net/2022/08/17/2bCl38M7v5rf94j.png) | Synthesize color display by customizing three colors |
| 3 | ![blocksPng-1707107359196.png](https://s2.loli.net/2022/08/17/Q1b56G9eYZgO4x7.png) | Set the brightness of RGB colorful lights, 0-100 |
| 4 | ![blocksPng-1707107362118.png](https://s2.loli.net/2022/08/17/U5zK6Qv8Y2SiHq9.png) | Control the color of the colorful light with the specified serial number. The serial number starts from 1. Refresh display needs to be added later to take effect |
| 5 | ![blocksPng-1707107366557.png](https://s2.loli.net/2022/08/17/w5G4vS9OudE3Z1L.png) | Customize the values of the three color lamp beads inside the lamp bead to control the color of the colorful light |
| 6 | ![blocksPng-1707107370077.png](https://s2.loli.net/2022/08/17/19R76f8j2Y4wC3O.png) | <br /><br />Control the display color of all colorful lights. It can take effect without adding refresh display<br /> |
| 7 | ![blocksPng-1707107373845.png](https://s2.loli.net/2022/08/17/ie1Y9sQh3m56KzF.png) | Turn off the light with the specified serial number, and refresh the display later to take effect |
| 8 | ![blocksPng-1707107377327.png](https://s2.loli.net/2022/08/17/ZXC2f9Hq35J1t6j.png) | Control the display color of all colorful lights. It can take effect without adding refresh display |
| 9 | ![blocksPng-1707107380270.png](https://s2.loli.net/2022/08/17/3e2zY6w59qjaiN1.png) | Control all colorful lights to turn off, and it can take effect without adding refresh display |
| 10 | ![blocksPng-1707107385782.png](https://s2.loli.net/2022/08/17/mQ5V3IbGqMP9z2W.png) | Make the colorful light display take effect |
| 11 | ![blocksPng-1707107388645.png](https://s2.loli.net/2022/08/17/cGD79m1r6J5pvdX.png) | Set the overall effect of all lights |
| ID | Building Block Image | Building Block Function |
| --- | --- | --- |
| 1 | ![image.png](https://s2.loli.net/2022/08/17/sX2R5Z3v1fN8d9Q.png) | Initialize pins and number of lights |
| 2 | ![image.png](https://s2.loli.net/2022/08/17/91p2Evj6f5oXmqL.png) | Take a range of LEDs |
| 3 | ![image.png](https://s2.loli.net/2022/08/17/R6o4pGj7O5W912U.png) | The whole light strip displays rainbow effect |
| 4 | ![image.png](https://s2.loli.net/2022/08/17/62dI1h8tM97w3zZ.png) | The whole light strip displays one color |
| 5 | ![image.png](https://s2.loli.net/2022/08/17/Qti57waV4j1C28l.png) | The whole light strip, as a whole, displays columnar, suitable for music spectrum |
| 6 | ![image.png](https://s2.loli.net/2022/08/17/hX5ZsN4gv76LnAm.png) | Display needs to take effect when controlling a small number of lights |
| 7 | ![image.png](https://s2.loli.net/2022/08/17/1hBnc2674M5kF9a.png) | Clear display |
| 8 | ![image.png](https://s2.loli.net/2022/08/17/4r5m6k1XLu9w72l.png) | Customize LED display |
| 9 | ![image.png](https://s2.loli.net/2022/08/17/aG9Y2n4gW6C38qO.png) | Overall movement |
| 10 | ![image.png](https://s2.loli.net/2022/08/17/8eQ5rN3P7bpV42U.png) | Overall movement (loop), head and tail loop |
| 11 | ![image.png](https://s2.loli.net/2022/08/17/C23d15s9PqZ8u7r.png) | Control a single LED. The light starts from the serial number of 0 as the first one |
| 12 | ![image.png](https://s2.loli.net/2022/08/17/A93i6ZcJ4w17sqk.png) | Control the brightness of the light strip |
| 13 | ![image.png](https://s2.loli.net/2022/08/17/s3dZ4aM1t92y7h8.png) | Customize the value of LED color |


## Cases
---


##   Brightness Control - Breathing Light
![blocksPng-1692955449575.png](1692955496647-74ce5364-0a5c-4b04-b2b9-946f3bbc24c5.png)


##   Sequence Control - Flowing Light
![blocksPng-1692955818975.png](1692955836592-e06f0efe-131b-4c79-9006-b0850ba097ad.png)


## View the preset effect
📑: It is recommended that you use the online mode and click directly to view the preset effect. It is convenient and quick.<br />![image.png](1692955949888-91749845-19a4-45ef-8caf-e0ba2eba9c12.png)


## Integrated Case-Induction Lamp

![校园照明 (小).png](1694672698085-a2be02f2-1af4-43dc-a326-14ef440cbaf7.png)<br />The intelligent induction device is used to control the lighting of the campus (classroom/basement/library). Taking the campus street lamp as a demonstration, when someone approaches, the street lamp will light up, and the street lamp will turn off after the person leaves.


##    Structure construction
[School lighting.pdf](https://www.yuque.com/attachments/yuque/0/2024/pdf/488591/1707031389821-2a345d68-b541-4a04-816a-bf0d63abf84d.pdf)


##    Circuit Connection
![School lighting.png](1694744305598-7827dc6c-6cac-4964-8103-5ad749eb47f5.png)
|  |  | Future Board Lite Interface | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![IMG_4009.JPG](1694743956158-1282f2e1-dc0d-41c0-869c-58bd3e29ecac.jpeg) | RGB light ring | Port1 | White PH2.0-3Pin interface cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
| ![Ultrasonic new version-2.png](1694661592690-67fa06c3-5a08-4075-983b-4bcebf667a97.png) | Ultrasonic ranging module | Port3 | White PH2.0-3Pin interface cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |


## Plugin Loading - Ultrasound Plugin
![image.png](1694741817971-69923e94-5b0c-4b30-a90d-00a6c7313ebf.png)<br />![image.png](1694741854532-1d37e706-23e9-4264-b151-e55b12e9d054.png)
![image.png](1694741879458-eeeb75ca-bb2e-445e-b0f9-90325d2e6c47.png)


## Building Block Usage——Main Building Block
|  |  |  |
| --- | --- | --- |
| 1 | ![blocksSvg-1694742000152.svg](1694742020587-ab938944-54e5-4bbc-a008-94e14f37a8d5.svg) | Initialize RGB light settings, you can choose the RGB at the interface, or you can choose the 3 RGBs onboard |
| 2 | ![blocksSvg-1694742004420.svg](1694742020588-8d2119a8-f77b-4102-8d1a-46d46ee9aee5.svg) | Adjust RGB light strip |
| 3 | ![blocksSvg-1694742012589.svg](1694742020589-6d49af30-241f-49db-8ca9-eac8550822c2.svg) | Control all RGB lights |
| 4 | ![blocksSvg-1694741965523.svg](1694741974494-46990771-1d5f-457a-802e-3071c1952007.svg) | Turn off all RGB lights |
| 5 | ![blocksSvg-1694742008468.svg](1694742020589-c98f0526-543a-4647-9c71-153f10265650.svg) | Read the distance value of the ultrasonic module | To learn more about the usage of RGB, click to view<br />[06-Color Light](https://www.yuque.com/kittenbot/hardwares/pbn1ctqmq3z9whn2?view=doc_embed)


## Main program - ultrasonic judgment
:::info
Using ultrasound for distance judgment, and RGB light control
:::
![image.png](1694672435428-db3258ee-9d05-4d2e-a221-01d9ef8b4397.png)


## Using On Microbit
![Robotbit_compressed.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


## Coding Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)
<br />Use Makecode coding platform


##   Add plug-in
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709696699245-9f873dc9-ded7-4574-863b-a542358c8998.png)<br />Search for Robotbit in the extension, click add<br />![image.png](1709696739025-b941e1f8-e040-45e9-b992-a9da6ed044b6.png)


## Circuit Connection
![image.png](1709781697870-bb04bd6b-12c4-4792-aefb-017e1f1bf369.png)
|  |  | Microbit Interface | Cable Used | <br /> |
| --- | --- | --- | --- | --- |
| ![IMG_4009.JPG](1694743956158-1282f2e1-dc0d-41c0-869c-58bd3e29ecac.jpeg) | RGB Light Ring | P0 | White PH2.0-3Pin Interface Cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |


## Case 1: Controlling a single light

![image.png](1709697626436-dca79b7a-cecd-4e80-a586-28ab7ab4c83c.png)


## Case 2: Rainbow Effect
![image.png](1709697658595-ab7e5336-770b-4759-bdb5-81260b6efabc.png)


## Case 3: Overall Colour Control
![image.png](1709697728089-34611dbe-e18c-400b-a6ce-ebbfb53605ca.png)


## Case 4: Display column charts
![image.png](1709697805886-94720792-4d7f-45ea-a72a-8ea9b119caec.png)


## Example 5: Display mobile
![image.png](1709697964749-eec0b230-3f43-43b8-8321-373c2530f561.png)![image.png](1709697972586-45bb07a2-80ee-475b-890a-555ae5cb1545.png)


## Case 6: Pixel Cycle Moving
![image.png](1709698063107-ae88e976-e046-41f1-af58-e3a81a30d355.png)


## Case 7: Customize color
![image.png](1709698174493-e6230008-ad61-421d-b46e-8001cef2c5e8.png)

