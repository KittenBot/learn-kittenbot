---
title: Sugar Cube - RFID Module
sidebar_position: 24
---

## Introduction
RFID (Radio Frequency Identification) is a wireless communication technology that uses radio waves to transfer data between a reader and an electronic tag attached to an object, allowing for automatic identification and tracking. RFID tags contain electronically stored information that can be read and rewritten.<br />![4119fb71afbd598b1a89e234c15b2e6d.jpg](1696911817559-d9dda490-1f18-4b72-85ca-8979b12e7011.jpeg)


## Parameters
| **Type** | I2C |
| --- | --- |
| **Detection Range** | <2cm |
| **Operating Voltage** | 3.3v |


## **Add Extensions**
**![image.png](1696922035890-720bf036-4674-44fa-b26c-3369534bcf8c.png)


## Wiring diagram
<br />Note: You can choose either of the two i2c interfaces on the right side of the mini future board<br />![image.png](1696918410548-dd384ee7-d3c0-4506-91f9-77f5b9744217.png)<br />  Programming<br />Program description:<br />Execute related operations through the three buttons on the mini future board<br />A: Display card ID<br />M: Write data to card partition 0<br />B: Read card partition 0<br />![blocksPng-1696917176108.png](1696917344626-96342837-0b23-448e-afb1-079866253c8a.png)
<br />![image.png](1696918912442-85f97e01-ed48-4ddc-8732-f4391ad14cf7.png)
![image.png](1709783252647-ef5fd60c-3606-4c68-983a-5730644796f6.png)


##  Add Extension
<br />![image.png](1696922148797-19c6ec88-6989-4699-a346-6c04bba80616.png)


##   Programming
<br />Program description: During startup, the program will display the card number if an RFID tag is detected, and you can use the Data Panel Button A to write data and Button B to view data.
<br />![blocksPng-1696919860629.png](1696919872705-b8cf7d6e-ffa1-4173-a374-c998899b049a.png)


## Using the Robotbit on Microbit
![Robotbit_compressed.png](1709112761000-c84282ba-fe71-45c1-8ad4-8e7f6fc4738f.png)


## Programming platforms
[Microsoft MakeCode for micro:bit](https://makecode.microbit.org/#editor)<br />Use the Makecode programming platform


## Add sugar plugin

![image.png](1709111597414-08605e4f-d626-474f-9c07-ead8ba9f12f1.png)
![image.png](1709111641678-73b61119-c29c-4b48-add7-375ce9a15935.png)<br />
Search for sugar in the extension, click add

