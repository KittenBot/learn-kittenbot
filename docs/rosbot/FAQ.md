---
title: 💡 FAQ
sidebar_position: 3
---

#### How to power the Rosbot main control board?

> 1. Use the mobile power supply to plug into the USB port on the Rosbot main board
> 2. 6~12V power supply is plugged into the external power supply port on the board


#### Q2: When controlling the M2 motor interface, the blue light on pin 13 will be on?
> The M2 motor interface is reused the LED light on pin 13

#### Q3：When using any of the IO ports 7, 8, 12, and 13, the M2 motor control seems to be abnormal?

> 7, 8, 12, 13 happen to be reused with the M2 motor interface. So they cannot be used at the same time. When using the IO port, you need to unplug the jumper cap.

#### Q4: Will the IO be burned if it is inserted incorrectly?

> It is possible, so when installing the module, you must repeatedly confirm whether the installation is correct!

#### Q5: Can I put the main control board on a metal surface?

> No, there are many pins on the board, which will short-circuit when placed on a metal surface!

#### Q6: There are many jumpers on the board, can I unplug them at will?

> No, try to keep the jumper in the factory state. If you want to unplug the jumper, please ask the Kittenbot technical staff. Especially the jumper cap next to the USB port, if it is unplugged, it will cause the USB to fail to burn the program

#### Q7: Can the Rosbot main control board be programmed with the Arduino IDE?

> Yes, it is the same, and there are some more resources on the board. For some control instructions, you can refer to the code conversion window of the block to code in Kittenblock for consultation


