---
title: Sugar Cube - GPS Module
sidebar_position: 31
---

## Introduction
![image.png](1708401312508-04fd0564-eea2-445b-9653-32dff15389f2.png)


## Product Details
---
Fangtang GPS is a multi-mode satellite navigation and positioning module that supports satellite positioning systems such as BeiDou 3rd generation/GPS/GLONASS, and supports multi-system joint positioning and single-system independent positioning modules. It is based on a highly sensitive positioning chip, which can provide accurate positioning information and is suitable for various positioning applications, such as in-vehicle navigation, IoT device tracking, etc.<br />
The module adopts an integrated RF baseband design, integrating DC/DC, LDO, RF front end, low-power application processor, RAM, Flash storage, RTC and power management, which can be powered by button battery or farad capacitor to RTC, backup RAM to reduce the first positioning time, can be widely used in vehicle positioning and navigation equipment, high-precision timing, safety monitoring, surveying and mapping, precision agriculture and other fields that require navigation/positioning/timing.


## Hardware Features
1. **Dual-mode positioning**: Supports simultaneous use of GPS and Beidou satellite systems for positioning, providing stronger positioning coverage and accuracy.
2. **High sensitivity**: Has a high-sensitivity positioning chip, which can quickly obtain positioning signals in complex environments.


## Applicable fields
In-vehicle navigation, tracking of IoT devices, location-based services, etc.


## Product Parameters
| **Voltage** | 5V |
| --- | --- |
| **Current** | 200mA |
| **Product Size** | 40 x 40 x 17 mm, 4 Lego pin holes |
| **Communication Protocol** | Serial communication, baud rate 115200 |
| **Supported Motherboards** | Future Board Lite, Future Board, Micro:bit |
| **Positioning Mode** | GPS+BDS or GPS+GLONASS multi-system joint positioning, supports A-GNSS assisted positioning |
| **High Sensitivity** | Capture Cold start -148dBm, hot start -156dBm, tracking -162dBm |
| **Positioning Time** | ** **Pure hardware cold start (<32S)<br /> Pure hardware hot start (<1S)<br /> Pure hardware recapture (<1S)<br /> Software-assisted A-GNSS (<5S)  |
|  Horizontal Positioning Accuracy   |  2m |
|  Speed Accuracy  | 0.1m/s |
|  Timing Accuracy   |  30ns |
| **Antenna** | Internal 3.3V active antenna power supply circuit and detection circuit |
| **Output Format** | NMEA0183 V4.1 and previous versions |
| **Application Scenarios** |  Vehicle navigation, IoT device tracking, positioning services, etc. |


## Usage on Futureboard Lite
---
Using Futureboard Lite as an example, obtain longitude and latitude information via GPS module<br />
Hardware Wiring:<br />
The communication interface of the GPS module is a serial port, thus it is connected to the UART0 interface of Futureboard Lite<br />
![image.png](1708509761054-465dbb77-f888-43b4-abf5-af70cbceedbf.png)
Software Programming:
- Open Kittenblock, select Futureboard Lite as the hardware, and connect the serial port
![image.png](1708508401852-1c220df6-944c-4f25-b9a5-799d6adce336.png)
- Load the GPS module plugin
![image.png](1708508705521-b96e8b94-d740-4ccd-98df-aba329345aef.png)<br />
![image.png](1708509220312-330d1f4d-643f-4629-9a31-cab4cf134fa9.png)
- Write the program
Program logic:<br />
Detect whether GPS information has been received. When GPS information is received, display it on the screen. Otherwise, display a prompt on the screen to move to an open area.<br />
![GPS.png](1708509293471-79def1d4-9a9a-476f-b221-264f32543aa0.png)
- Download the program
![image.png](1708509475520-441291b5-1d63-4fc7-9a9c-b1463bf0b928.png)


## Usage on Microbit
![Robotbit_compressed.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


##   Coding Platforms
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use Makecode Coding Platform


## Adding Sugar plugin
![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />Search Sugar in Extensions, click add


## Building Blocks Function Description
![image.png](1709779943950-c548e350-310a-4faf-ae45-2a756229475c.png)


## Frequently Asked Questions
---
**Q: Why can the GPS module not be used indoors?**<br />A: The GPS module needs to receive satellite signals, and can only receive signals in open outdoor spaces.
**Q: Where else can the GPS module be used besides for positioning?**<br />A: The GPS module can provide latitude and longitude information, as well as UTC time and altitude information.
**Q: What is the positioning accuracy of the GPS module?**<br />A: 2 meters
**Q: Can the GPS module display a positioning map on the screen of the motherboard?**<br />A: No, the performance is insufficient. Special hardware and software are required to achieve this positioning effect.

