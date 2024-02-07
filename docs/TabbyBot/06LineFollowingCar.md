## Introduction:

Using the two line tracking sensors on the bottom of TabbyBot, we will write a program for a car that follows a black line track.

![line](https://learn.kittenbot.cn/2024md_pic/202402071121759.JPG)

## Objectives:

1. Master the usage of line tracking sensors.
2. Master the programming logic for a line-following car.

## 编写程序

![image-20240207104809484](https://learn.kittenbot.cn/2024md_pic/202402071048603.png)

Our car follows the black line by sandwiching it. There are three possible scenarios:

1. When the black line is between the two line tracking sensors - move forward.
2. When the black line is on the left line tracking sensor (indicating the car is veering to the right) - turn left.
3. When the black line is on the right line tracking sensor (indicating the car is veering to the left) - turn right.

First, we need to determine the values of the sensors when they are on the black line and on a blank surface, in order to set the threshold for line detection.

This can be done by observing the data returned through the serial port.

By running the following program, we can test and find out that:

The sensor value on the black line is approximately between 250-400.

The sensor value on a blank surface is approximately above 700.

Therefore, we can set the threshold to 600 (slightly lower than the value on a blank surface).

![image-20240207110252148](https://learn.kittenbot.cn/2024md_pic/202402071102203.png)



Based on the logic described above, we can proceed with the program. We have added button A to start or stop the car.

https://makecode.microbit.org/S67065-32045-71472-77348

![line tracking](https://learn.kittenbot.cn/2024md_pic/202402071055121.png)



## Actual Result:

Press button A to start.

![](https://learn.kittenbot.cn/2024md_pic/202402071121968.gif)