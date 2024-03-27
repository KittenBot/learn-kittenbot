---
title: 02 - Touch Pin
sidebar_position: 4
---
## Overview

---

The touch pins 1 and 2 of the Grape Board are two IO ports with Digital, Analog and PWM functions, which support connecting external modules for use and can be connected through alligator clips to DuPont wires`<br />`It is usually used as a touch pin during normal times, and can be touched directly, or touched after being connected through conductive adhesive tape`<br />`![Picture 11.png](https://learn.kittenbot.cn/2024md_pic/1673508295296-825f3446-8f05-4ec6-a1fc-5114f2b23ffc.png)

## How to use it

---

## Coding Blocks

| **Coding Block**                                                                      | **Functionality**                                                                                        |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![image-20240321144943597](https://learn.kittenbot.cn/2024md_pic/image-20240321144943597.png) | Returns True when the pin is pressed, False otherwise<br />Can change the touch object using the dropdown menu |

## Case: Smart Touch Desk Lamp

- Effect: Control the RGB lights on and off by touching P1 and P2
- Program blocks

  ![image-20240321145023519](https://learn.kittenbot.cn/2024md_pic/image-20240321145023519.png)
  :::warning
  **Solution to Unresponsive or Insensitive Touch**
- Reason: Touch may be insensitive due to dry skin or environmental factors
- Solution: _When touching, use the other hand to touch the negative terminal of the grape board to connect the two_
  ![image-20240321145232811](https://learn.kittenbot.cn/2024md_pic/image-20240321145232811.png)
  :::
