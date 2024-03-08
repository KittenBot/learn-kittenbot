---
title: Sugar Cube - Ultrasonic Module
sidebar_position: 36
---

## Introduction
![超声波新版-2.png](1694661592690-67fa06c3-5a08-4075-983b-4bcebf667a97.png)


##   Function
---
Judge the distance between obstacles ahead and the module by transmitting and receiving sound waves.
| **Signal** | Timing signal |
| --- | --- |
|  |


## Working Principle of the Module
Sound waves with frequencies higher than 20 kHz are called ultrasonic waves, which feature good directivity and penetration capability, especially in water, where they can propagate over longer distances. To facilitate the study and utilization of ultrasonic waves, people have designed many types of ultrasonic generators, which vary in the way they generate ultrasonic waves, ranging from electrical to mechanical methods, and therefore have different applications. Each type of generator has its own application scenarios, but at present, the most widely used type is the piezoelectric ultrasonic generator.<br />The key component of a piezoelectric ultrasonic generator is the piezoelectric chip inside, which mainly utilizes the resonance of the piezoelectric chip to work. There are two piezoelectric chips and a resonant plate inside the generator. When a pulse signal is applied between the two electrodes of the generator, the piezoelectric chip will vibrate when the frequency of the applied signal is equal to the frequency of the piezoelectric chip, and it will also drive the resonant plate to vibrate. This will generate ultrasonic waves, which is the transmitting end of the ultrasonic generator. However, if there is no applied pulse signal between the two electrodes of the generator and the resonant plate receives the transmitted ultrasonic waves, the piezoelectric chip will be forced to vibrate, and the mechanical energy generated will be converted into an electrical signal. This is the receiving end of the ultrasonic generator.<br />![image.png](1706860900635-982f319c-fe30-4659-b50b-9ce326da76ac.png)


## **Ultrasonic Distance Measurement Principle**

The principle of ultrasonic distance measurement is very simple. An ultrasonic transmitter emits a beam of ultrasonic waves. The timer starts when the ultrasonic waves are emitted, and the emitted ultrasonic waves propagate through the medium. Sound waves have the property of reflection, and when they encounter an obstacle, they reflect back. When the ultrasonic receiver receives the reflected ultrasonic waves, the timer stops. When the medium is air, the speed of sound is 340m/s. Based on the recorded time t, the distance between the transmitting position and the obstacle can be calculated using the formula **s=340*t/2**.


## Usage in Future Board Lite
![School lighting (small).png](1694672698085-a2be02f2-1af4-43dc-a326-14ef440cbaf7.png)<br />With the intelligent sensing device, you can control lighting in school areas (classrooms/basements/libraries). Using the school street lamp as a demonstration, the street lamp will light up when someone comes close, and turn off after the person leaves.


## **Structure building**
[Campus lighting.pdf](https://www.yuque.com/attachments/yuque/0/2024/pdf/488591/1706860548681-cb1e06cf-6439-43b7-92a7-9bf4b30c6c25.pdf)


##    Circuit Connection
![校园照明.png](1694744305598-7827dc6c-6cac-4964-8103-5ad749eb47f5.png)
|  |  | Future Board Lite Interface | Wire in Use | <br /> |
| --- | --- | --- | --- | --- |
| ![IMG_4009.JPG](1694743956158-1282f2e1-dc0d-41c0-869c-58bd3e29ecac.jpeg) | RGB Light Ring | Port1 | White PH2.0-3Pin Interface Wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |
| ![超声波新版-2.png](1694661592690-67fa06c3-5a08-4075-983b-4bcebf667a97.png) | Ultrasonic Distance Measuring Module | Port3 | White PH2.0-3Pin Interface Wire | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |


## Plugin Loading - Ultrasonic Plugin
![image.png](1694741817971-69923e94-5b0c-4b30-a90d-00a6c7313ebf.png)<br />![image.png](1694741854532-1d37e706-23e9-4264-b151-e55b12e9d054.png)
![image.png](1694741879458-eeeb75ca-bb2e-445e-b0f9-90325d2e6c47.png)


## Building Block Usage - Main Building Block
|  |  |  |
| --- | --- | --- |
| 1 | ![blocksSvg-1694742000152.svg](1694742020587-ab938944-54e5-4bbc-a008-94e14f37a8d5.svg) | Initialize RGB light settings, can choose RGB at the interface, can choose 3 RGBs on board |
| 2 | ![blocksSvg-1694742004420.svg](1694742020588-8d2119a8-f77b-4102-8d1a-46d46ee9aee5.svg) | RGB light strip adjustment |
| 3 | ![blocksSvg-1694742012589.svg](1694742020589-6d49af30-241f-49db-8ca9-eac8550822c2.svg) | Control all RGB lights |
| 4 | ![blocksSvg-1694741965523.svg](1694741974494-46990771-1d5f-457a-802e-3071c1952007.svg) | Turn off all RGB lights |
| 5 | ![blocksSvg-1694742008468.svg](1694742020589-c98f0526-543a-4647-9c71-153f10265650.svg) | Read the distance value of the ultrasonic module | For more detailed usage of RGB, click to view<br />[06-Colorful Lights](https://www.yuque.com/kittenbot/hardwares/pbn1ctqmq3z9whn2?view=doc_embed)


## Main Program - Ultrasonic Ranging
:::info
Using ultrasonic for distance measurement and controlling RGB lights
:::
![image.png](1694672435428-db3258ee-9d05-4d2e-a221-01d9ef8b4397.png)


## Use on Microbit
![Robotbit_compressed.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use the Makecode program platform


##   Adding the Sugar plugin
<p align="center">
  <img src="1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png" alt="image">
  <img src="1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png" alt="image">
</p>
Search for Sugar in the extensions, and click Add


## Building Block - Function Description
| Serial Number | Block Diagram | Block Function |
| --- | --- | --- |
| 1 | ![image.png](1709707337850-fa45e23b-fbdc-4412-bdc7-a8fba0b2d42a.png) | Obtain the distance of obstacles in front of the ultrasonic module (supports mm and cm) |


##  Circuit connection
![image.png](1709782177840-0303b98a-e042-4522-838f-5e8a3604cd23.png)
|  |  | Microbit Interface | Wiring | <br /> |
| --- | --- | --- | --- | --- |
| ![Ultrasonic new-2.png](1694661592690-67fa06c3-5a08-4075-983b-4bcebf667a97.png) | Ultrasonic ranging module | P1 | White PH2.0-3Pin interface cable | ![untitled.100.png](1694663456622-fdd52039-7a0c-451f-96a0-feabdc797516.png) |


##   Case: Distance Measurement
![image.png](1709707316847-4e4feae1-b171-4400-9ae2-288525336430.png)<br />![image.png](1709707310038-c50c1426-2ecc-4eac-81f6-f0fb32fedd70.png)

