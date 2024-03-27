---
title: 07 - Radio Wireless
sidebar_position: 9
---
## Overview

---

2.4G radio wireless communication, only supports communication between ESP32 series hardware (cannot communicate with Microbit via 2.4G)

This communication method supports communication between three types of boards: Grape Board, Future Board, and Future Board Lite

## Application method

---

## Building Blocks Introduction

| **Programming Building Blocks**                                                       | **Description**                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![image-20240321151836593](https://learn.kittenbot.cn/2024md_pic/image-20240321151836593.png) | Wireless communication, initialization block, which needs to be run before using other wireless blocksSet wireless channel (only boards on the same channel can communicate) Parameter range: 1~13 |
| ![image-20240321151845160](https://learn.kittenbot.cn/2024md_pic/image-20240321151845160.png) | Get wireless message, which will be cleared after being used once, until the next wireless message is received                                                                                     |
| ![image-20240321151853859](https://learn.kittenbot.cn/2024md_pic/image-20240321151853859.png) | Wait for wireless message arrival and return                                                                                                                                                       |
| ![image-20240321151902156](https://learn.kittenbot.cn/2024md_pic/image-20240321151902156.png) | Send wireless message                                                                                                                                                                              |

## Case 1 - Wireless light switch

- Effect: Need two micro:bits, download the receiver and transmitter programs, and press the buttons A and B on the receiver micro:bit to turn on and turn off the colored lights on the other micro:bit
- Program - Transmitter `<br/><br/>`
  ![image-20240321152020289](https://learn.kittenbot.cn/2024md_pic/image-20240321152020289.png)
- Program - Receiver `<br/><br/>`

  ![image-20240321152219289](https://learn.kittenbot.cn/2024md_pic/image-20240321152219289.png)

## Case 2 - Anti-lost Device for Kids

- Effect: When the two Grape boards exceed the distance and cannot communicate, the parent's Grape board will raise an alarm.`<br/><br/>`
  ![2024md_pic/1670298603324-b3c5b868-5786-4efa-83f0-e8c36cedb4d4.png](https://learn.kittenbot.cn/2024md_pic/1670298603324-b3c5b868-5786-4efa-83f0-e8c36cedb4d4.png)
- Program - Parent Side `<br/><br/>`
  ![image-20240321160242126](https://learn.kittenbot.cn/2024md_pic/image-20240321160242126.png)
- Program - Child Side `<br/><br/>`

  ![image-20240321152443023](https://learn.kittenbot.cn/2024md_pic/image-20240321152443023.png)
