---
title: 03 - Buzzer
sidebar_position: 5
---


## Overview
---
The on-board buzzer is a passive buzzer that controls the sound of a pleasant melody through different frequencies<br />![资源 10.png](https://learn.kittenbot.cn/2024md_pic/1673508343036-1ed0a8ae-9b0e-490e-9317-5c2fc54e8313.png)





## Usage
---





## Building Block Introduction
| **Programming Building Block** | **Function Introduction** |
| --- | --- |
| ![image-20240321145340442](https://learn.kittenbot.cn/2024md_pic/image-20240321145340442.png) | Specify the frequency and playing time |
| ![image-20240321145346137](https://learn.kittenbot.cn/2024md_pic/image-20240321145346137.png) | Continuous playing of the specified frequency |
| ![image-20240321145352594](https://learn.kittenbot.cn/2024md_pic/image-20240321145352594.png) | Play specified melody |
| ![image-20240321145358685](https://learn.kittenbot.cn/2024md_pic/image-20240321145358685.png) | Play built-in melody |
| ![image-20240321145406673](https://learn.kittenbot.cn/2024md_pic/image-20240321145406673.png) | Use with continuous playback |





## Case 1 - SOS Distress Call
- Effect: Pressing the button triggers an alarm, attracting attention from the surrounding area.
- Programming Blocks
![image-20240321145451524](https://learn.kittenbot.cn/2024md_pic/image-20240321145451524.png)





## Case 1 - Playing a Melody
- Introduction to the prerequisites, taking c4:2 as an example
   - c: British nomenclature, representing the pitch, corresponding to do~xi respectively. An octave is roughly divided into these 7 pitches: cdefab.
   - 4: Octave, for example, 4 is the fourth octave.
   - :2: Duration, with the default bpm=120 and quarter note as one beat, 1 second is 2 beats => 0.5 seconds/beat, so 2 represents half of a quarter note, so the duration of this c4:2 is 0.25s.
   - Each note is separated by a space.
![](https://learn.kittenbot.cn/2024md_pic/1670298137126-8495f8ce-c982-495c-b204-39d84c74df7b.png)
- Programming blocks
Click on the blocks below to play the first part of the melody of "Twinkle, Twinkle, Little Star". Try to complete the next part yourself~<br />![image-20240321145650080](https://learn.kittenbot.cn/2024md_pic/image-20240321145650080.png)
c4:2 c4:2 g4:2 g4:2 a4:2 a4:2 g4 g4
- Reference simple notation
![image.png](https://learn.kittenbot.cn/2024md_pic/1670314816081-1f42581f-86e6-4e0c-aa3a-64879009c652.png)





## Example 1 - Playing Built-In Melodies
Effect: Use these preset melodies to add some musicality to your programs more conveniently<br />![image-20240321145707032](https://learn.kittenbot.cn/2024md_pic/image-20240321145707032.png)



