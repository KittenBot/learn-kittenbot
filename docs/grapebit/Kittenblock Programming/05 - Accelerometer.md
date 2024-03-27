---
title: 05 - Accelerometer
sidebar_position: 7
---
## Overview

---

The accelerometer sensor can provide numerical feedback on the acceleration of the three axes. When the development board is stationary relative to the earth, the vector acceleration under this condition is the acceleration of gravity of the earth.
![资源 9.png](https://learn.kittenbot.cn/2024md_pic/1673508393904-755b9b08-34f0-49b5-b74b-22c77ced6eab.png)

## How to Use

---

## Blocks Introduction

| **Programming Blocks**                                                                | **Functional Introduction**                                                                               |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image-20240321150618089](https://learn.kittenbot.cn/2024md_pic/image-20240321150618089.png) | Returns acceleration values in X, Y, and Z axes, with a range of -2~2 (in g unit)                               |
| ![image-20240321150625140](https://learn.kittenbot.cn/2024md_pic/image-20240321150625140.png) | Returns simple attitude angles<br />- Pitch: range -90~90<br />- Roll: range -90~90                            |
| ![image-20240321150633123](https://learn.kittenbot.cn/2024md_pic/image-20240321150633123.png) | Attitude detection, if the current Grapeboard is in the specified state, the block returns true after execution |

## Case 1: Race Walk Foul Detection

- Effect: The Grove board will emit an alert when the athlete's movements are too large.


  ![image.png](https://learn.kittenbot.cn/2024md_pic/1670322135393-aeae8b24-2613-4f48-8cd7-ee54fba9e565.png)
- Programming Blocks

  ![image-20240321150758776](https://learn.kittenbot.cn/2024md_pic/image-20240321150758776.png)

## Case 2 - Sitting Posture Detection

- Effect: Place the micro:bit on your head, if your sitting posture is incorrect, it will sound a reminder~
  ![image.png](https://learn.kittenbot.cn/2024md_pic/1670298497683-63f8489f-f069-4f07-a2d2-63018be4d5a2.png)
- Program blocks

  ![image-20240321150849807](https://learn.kittenbot.cn/2024md_pic/image-20240321150849807.png)

## Case3 - Keep balance

- Effect: Keep the LED light to maintain the brightness
- Program block diagram 

  ![image-20240321151105075](https://learn.kittenbot.cn/2024md_pic/image-20240321151105075.png)
