Sugar Cube - 4*4 Touch Keyboard

## Features

---
**Signal**:Time domain signal - analog serial port protoco



## Module Principle
There is capacitance between any two conductive objects. The size of the capacitance is related to the conductive properties of the dielectric, the size and conductive properties of the plates, and the presence of conductive materials around the plates. The two exposed copper areas between PCB boards (or FPC) are the two plates of the capacitor, which is equivalent to a capacitor. When a human finger approaches the PCB, the capacitance changes due to the conductivity of the human body. When the touch key chip detects a significant increase in capacitance, it outputs a switch signal.



## Used in FutureLite Board



## Wiring

<img src="https://learn.kittenbot.cn/2024md_pic/1698381157389-9db763f1-d787-4a3a-8d0e-2b7aa0eda17c.png" alt="Future Board Lite Motherboard 3 - 副本.png" style="zoom: 25%;" />

|  |  | Future Board Lite Interface | Cable |                                                              |
| --- | --- | --- | --- | --- |
| <img src="https://learn.kittenbot.cn/2024md_pic/1698304525229-b89f562e-2c4a-47df-a831-39e25f5a6e56.png" alt="Sugar Cube 4x4 Touch Keypad Module (2).png" style="zoom: 33%;" /> | Sugar Cube LED Module | UART0 | Black PH2.0-4Pin Interface Cable | <img src="https://learn.kittenbot.cn/2024md_pic/1694743359848-a54b5dae-be60-4e01-aa2f-f6f434429c91.png" alt="untitled.108.png" style="zoom:25%;" /> |

Supports connecting to UART0, UART1

Pay attention to keeping the interface consistent with the actual interface when programming





## Blocks-Function Description
| Serial Number | Block Image | Block Function |
| --- | --- | --- |
| 1 | ![blocksPng-1710142810878](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710142810878.png) | Initialize touch keyboard |
| 2 | ![blocksPng-1710142817490](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710142817490.png) | Read pressed key value |





## Program 1-Complete program

Cyclically read the keys pressed by the touch, and display the key values on the dot matrix of the color screen.

Note: The type of the value of the key position read by the program is a string, which cannot be compared with a number

<img src="https://learn.kittenbot.cn/2024md_pic/blocksPng-1710142968221.png" alt="blocksPng-1710142968221" style="zoom: 67%;" />



## Program 2-Complete Program

Implement complete password lock function, enter password in order, finally press # to end, compare with set password, if successful, display screen as green
<img src="https://learn.kittenbot.cn/2024md_pic/blocksPng-1710143987083.png" alt="blocksPng-1710143987083" style="zoom:50%;" />







## Program 2 - Function Description

Program initialization: Set the color screen mode, the initial touch keyboard port

![blocksPng-1710143992693](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710143992693.png)





> Before entering the password, the password and x variables need to be cleared to ensure that there is no data
> ![blocksPng-1710144001152](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710144001152.png)
- Read the keys in real time. When a key is pressed, add the current password bit to the main password string
- And display the currently entered password
- Wait for the key to be released, then enter the next password bit
- All password bits will be output until the # key is pressed. There is no limit on the number of password bits here
![blocksPng-1710144011797](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710144011797.png)

> Compare the entered password with the set password, and display green if the input is correct
> Note: The set password needs to be added with #
> 

![blocksPng-1710144015868](https://learn.kittenbot.cn/2024md_pic/blocksPng-1710144015868.png)





## Using Kittenblock
How to run your program using offline download to check the effect



## Using on Microbit
<img src="https://learn.kittenbot.cn/2024md_pic/1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png" alt="Robotbit_压缩后.png" style="zoom:10%;" />





##   Programming platform
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)

Use Makecode programming platform





##   Add the Sugar Cube Plugin

![image-20240311154521941](https://learn.kittenbot.cn/2024md_pic/image-20240311154521941.png)
<img src="https://learn.kittenbot.cn/2024md_pic/1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png" alt="image.png" style="zoom: 50%;" />

Search for "Sugar" in the extensions, click "Add"





##  Circuit Connection
<img src="https://learn.kittenbot.cn/2024md_pic/1709783080521-b1d216e1-17e3-47ee-95ed-eb411c14d8a0.png" alt="image.png" style="zoom: 67%;" />

|  |  | Future Board Lite interface | Use cable | <br /> |
| --- | --- | --- | --- | --- |
| <img src="https://learn.kittenbot.cn/2024md_pic/1698304525229-b89f562e-2c4a-47df-a831-39e25f5a6e56.png" alt="Sugar cube 4x4 touch keyboard module (2).png" style="zoom:25%;" /> | Sugar cube LED module | UART | Black PH2.0-4Pin interface cable | <img src="https://learn.kittenbot.cn/2024md_pic/1694743359848-a54b5dae-be60-4e01-aa2f-f6f434429c91.png" alt="untitled.108.png" style="zoom:33%;" /> |
Support connecting to P2 and P12

Pay attention to interface consistency with the actual interface during programming



##   Example 1: Read the button and display
<img src="https://learn.kittenbot.cn/2024md_pic/image-20240311154946301.png" alt="image-20240311154946301" style="zoom: 67%;" />





##   Case 2: Processing judgment based on key values
<img src="https://learn.kittenbot.cn/2024md_pic/image-20240311155057824.png" alt="image-20240311155057824" style="zoom:80%;" />



