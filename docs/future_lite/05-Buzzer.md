---
title: 05-Buzzer
sidebar_position: 7
---


## Introduction

![image-20240322122636096](https://learn.kittenbot.cn/2024md_pic/image-20240322122636096.png)





## Introduction
Buzzer music library encapsulated by different tones and rhythms through pwm and system time





## Case
---





## Melody
Notation:<br />
Happy Birthday: c4:4 c4:4 d4:4 c4:4 f4:4 e4:8 r:4 c4:4 c4:4 d4:4 c4:4 g4:4 f4:8 r:4 c4:4 c4:4 c5:4 a4:4 f4:4 e4:4 d4:8 r:4 bb4:4 bb4:4 a4:4 f4:4 g4:4 f4:8

- For example, c4:2:
   - c: English naming method, representing the tone, corresponding to do~xi, an octave is roughly divided into the 7 tones cdefab.
   - 4: octave, such as 4, is the fourth octave
   - :2: duration, with the default bpm=120 and quarter note as one beat, 1 second 2 beats => 0.5 seconds/beat, 2 represents half of a quarter note, so the duration of c4:2 lasts for 0.25s
   - <br />
The bpm parameter represents the speed of the entire piece<br />
![image-20240322122728431](https://learn.kittenbot.cn/2024md_pic/image-20240322122728431.png)





## Continuous playback and rest
📑: The following three blocks need to be used together, and the rest beat is essentially a conversion from seconds to beats <br />![image-20240322122809991](https://learn.kittenbot.cn/2024md_pic/image-20240322122809991.png)





## Play preset music
📑：If you find it troublesome, you can also use the preset music building block directly. Choose some appropriate sounds to create an atmosphere.<br />It is recommended that you enter the online mode and click Run directly during the debugging phase, because the first parameter type can only be a string, so it is troublesome to listen to all preset audios by writing programs<br />![image-20240322122824184](https://learn.kittenbot.cn/2024md_pic/image-20240322122824184.png)



