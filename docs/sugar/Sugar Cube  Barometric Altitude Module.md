---
title: Cube Sugar - Altitude Pressure Module
sidebar_position: 23
---


## Functions
---
| **Signal** | Timing signal - I2C protocol |
| --- | --- |
|  |





## Module principle
The Earth has gravity, and the closer an object is to the center of the earth, the stronger the gravitational force it receives. Therefore, there is a certain linear relationship between the gravitational force an object receives and its height relative to the earth. The barometric altimeter makes use of this principle by measuring atmospheric pressure with a pressure sensor and indirectly calculating the altitude based on the relationship between pressure and altitude.



## Wiring diagram
![Future Board Lite mainboard 3 - copy.png](https://learn.kittenbot.cn/2024md_pic/1698381006260-edfd42d4-419a-47a6-96c5-4d5bfe157a0d.png)

|  |  | Future Board Lite interface | Wire used | <br /> |
| --- | --- | --- | --- | --- |
| ![png9009](https://learn.kittenbot.cn/2024md_pic/1698304512143-5134f34b-12a3-49ee-9ea6-c5c8f97d393e.png) | Sugar cube pressure altitude module | I2C | Black PH2.0-4Pin interface wire | ![untitled.108.png](https://learn.kittenbot.cn/2024md_pic/1694743359848-a54b5dae-be60-4e01-aa2f-f6f434429c91.png) |







Connection supported on I2C<br />Both I2C interfaces are the same     Note: Do not connect to the UART port



## Blocks-Function Description
| Serial Number | Block Image | Block Function |
| :-: | --- | --- |
| 1 | ![blocksPng-1710145613462](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710145613462.png) | Get the altitude data of the module |
| 2 | ![blocksPng-1710145608131](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710145608131.png) | Get the air pressure data of the module |
| 3 | ![blocksPng-1710145617030](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710145617030.png) | Get the temperature data of the module (in Celsius) |
| 4 | ![blocksPng-1710145620770](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710145620770.png) | Get the temperature data of the module (in Fahrenheit) |





## Program - Full Program
![blocksSvg-1698389701600.svg](1698389765522-762eec59-ed5d-4808-ac5c-49d063e5473c.svg)





## Program-Function Description
Set the color screen to full-color pixel mode and turn off the automatic refresh mode<br />![blocksSvg-1698389722151.svg](1698389765471-9bdd7273-bbfa-444b-8d84-f7d0d89b13c8.svg)
:::
:::success
Read the temperature value for judgment, and set this threshold according to actual needs<br />Here, 28 is used as an example for judgment<br />![blocksSvg-1698389725419.svg](1698389765501-47ffb4da-abf4-464e-b130-a5c8d6f8eb47.svg)
:::
:::warning
Display the various data of the module on the color screen. Since the data read is decimal, it needs to be converted to a string before it can be displayed on the screen<br />![blocksSvg-1698389730247.svg](1698389765542-bf081efa-d74e-4a8a-ae94-af051cf4612d.svg)
:::





## Using Kittenblock
Run the program offline to view the effect





## Using on Microbit
![Robotbit_压缩后.png](https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)





## Programming Platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use the Makecode programming platform





## Add FangTang extension
![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)

![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search Sugar in extensions, click add

## Blocks-Function Description

| Serial Number | Block Image                                                  | Block Function                                              |
| :-----------: | ------------------------------------------------------------ | ----------------------------------------------------------- |
|       1       | ![image-20240311163810027](https://learn.kittenbot.cn/2024md_pic/image-20240311163810027.png) | Get the latest data                                         |
|       2       | ![image-20240311163820113](https://learn.kittenbot.cn/2024md_pic/image-20240311163820113.png) | Get information about pressure, altitude, temperature, etc. |



## Circuit Connection
![image.png](https://learn.kittenbot.cn/2024md_pic/1709782628111-441b04f2-58b7-45c1-b414-9f8237b407a5.png)

|  |  | Microbit Interface | Wire | <br /> |
| --- | --- | --- | --- | --- |
| ![Sugar cube barometer altitude module.png](https://learn.kittenbot.cn/2024md_pic/1698304512143-5134f34b-12a3-49ee-9ea6-c5c8f97d393e.png) | Sugar cube barometer altitude module | I2C | Black PH2.0-4Pin interface wire | ![untitled.108.png](https://learn.kittenbot.cn/2024md_pic/1694743359848-a54b5dae-be60-4e01-aa2f-f6f434429c91.png) |





##   Example Display data
Press the A key to switch display different data<br />

![image-20240311173255764](https://learn.kittenbot.cn/2024md_pic/image-20240311173255764.png)



Press the B key, display corresponding data according to the mode<br />

![image-20240311173323483](https://learn.kittenbot.cn/2024md_pic/image-20240311173323483.png)





If the temperature exceeds the set value, a sad face is displayed<br />![image-20240311173336824](https://learn.kittenbot.cn/2024md_pic/image-20240311173336824.png)



