---
title: 01-IO control
sidebar_position: 1
---



### Introduction

Use pins to control common motor modules


### Blocks

---
| Icon | Description |
| ---- | ----------- |
| ![image.png](1683343105098-ab75a519-15f8-4e3f-bf4e-2c537e87ee67.png) | |
|      | Set the pin mode as either Input or Output. |
|      | Activate only after setting the pin to **Output** mode; allows you to set the pin to High or Low voltage levels. |
|      | Output analog values, commonly used for controlling the brightness of LEDs. |
|      | Activate only after setting the pin to **Input** mode; enables you to read the current state of the pin. |
|      | Read analog values from the pin, useful for modules like potentiometers. |
|      | Functions similarly to "Digital Write." Pin 13 is connected to the onboard LED, allowing for direct control without the need for external modules. |

---


### Examples


#### Blinking LED

- Wiring 

![image.png](1683345203681-1771be08-6de1-456c-a75e-0400e294194f.png)

- Code

![image.png](1683344334365-edc82cf0-2fa2-4962-91e1-4313cb944d57.png)


#### Rotary knob brightness switch

Use the rotary knob module to adjust the brightness of the LED

- Wiring 

![image.png](1683346441523-35c6bfe9-af8a-44fc-b810-9a3d488702d4.png)

- Code

![image.png](1683346036849-ca8970ff-90a4-4145-90ae-b329952bd107.png)

#### Button switch

Control the LED with the button

- Wiring 

![image.png](1683347254301-f1c6a12a-aafb-45e1-b9a2-5b607b8b9690.png)

- Code

![image.png](1683347034067-8f81074d-024f-46c8-90a9-7aec11d5aabe.png)

