![image-20230908155050914](https://learn.kittenbot.cn/2023md_pic/202309081550177.png)

##  Introduction

NanoScript is a board developed by KittenBot based on the MSR RP2040 Brain. It is designed specifically for the Microsoft DeviceScript platform. The board adheres to the EC30 standard of Jacdac in terms of overall dimensions and features a standard Jacdac Edge Connector, which allows for seamless connection with various Jacdac electronic modules.

 The board is designed with gold-plated through-holes, resembling postage stamps, enabling developers to easily solder it as a module onto their own development boards.



## Specifications

Dimensions: 38mm x 25mm x 5mm

Input Voltage: 5V

Output Current: ≤ 1A

Interface: Jacdac Edge Connector (GPIO9), with a low current mode of 500mA and a high current mode of 1A

RGB Indicator Lights: Red (GPIO16), Green (GPIO14), Blue (GPIO15)

Power Indicator Light: Indicates power output of the Jacdac interface (GPIO13)

Debugging Pin: GPIO0, Serial logging at 115200 8N1

Programmable IO Ports: 17 ports

##  Details

![image-20230908165633208](https://learn.kittenbot.cn/2023md_pic/202309081656403.png)

1. USB programming and power port
2. RP2040 integrated circuit
3. Jacdac protocol status indicator light
4. Jacdac output port power indicator light
5. Jacdac Edge Connector
6. Boot Button
7. SWD debugging port
8. Jacdac Standard Through Hole
9. Stamping hole

## Target audience

- Educational users, utilizing it as a module for Microbit, capable of functioning as a computer HID keyboard device for input.
- Developers, using it as the mainboard for DeviceScript, possessing HID keyboard or mouse functionality, and capable of controlling other Jacdac electronic modules.

## Firmware update

1. Firmware Update Procedure:
   1. Connect the USB data cable.
   2. Press and hold the Boot Button for more than 3 seconds.
   3. Drag the corresponding firmware onto the USB drive named "RPI-RP2."
   4. Once the update is complete, the USB drive will automatically disappear, and the update will be finished after restarting.

![image-20230908174426821](https://learn.kittenbot.cn/2023md_pic/202309081744968.png)

Firmware Downloads:

For Education Users - [Keyboard Module Firmware](https://github.com/microsoft/pxt-jacdac/releases/latest/download/hid-servers-rp2040.uf2)

For Developers - DeviceScript Firmware

## Quick Start Guide for MakeCode

Hardware Connection

![image-20230908181209280](https://learn.kittenbot.cn/2023md_pic/202309081812637.png)



Programming and downloading. Upon successful download, when the A button on the Microbit is pressed, it will trigger the keyboard to output the keystrokes "h," "i," and "enter."

https://makecode.microbit.org/_gLgcAwFU9FAe

![image-20230908191203415](https://learn.kittenbot.cn/2023md_pic/202309081912575.png)



## Quick Start Guide for DeviceScript

Please refer to the tutorial provided by Microsoft's platform: [DeviceScript | DeviceScript (microsoft.github.io)](https://microsoft.github.io/devicescript/intro)

Alternatively, you may also explore the DeviceScript tutorial series developed by KittenBot, a company we collaborate with.

[Rotary Button in DeviceScript - Hackster.io](https://www.hackster.io/kittenbot/rotary-button-in-devicescript-a3428d)

[Multiple buttons in DeviceScript - Hackster.io](https://www.hackster.io/kittenbot/multiple-buttons-in-devicescript-53620c)

[Rotary Button in DeviceScript - Hackster.io](https://www.hackster.io/kittenbot/rotary-button-in-devicescript-a3428d)