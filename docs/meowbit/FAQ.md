---
title: 💡 FAQ
sidebar_position: 3
---

## Frequently Asked Questions (FAQ)

#### Q1: Why can't I find the serial port after switching to microPython mode on Meowbit?
> This issue usually occurs if you're using a stripped-down version of your operating system lacking essential system files. Therefore, some device drivers may not install automatically. Here are two possible solutions:
> 
> **Method 1: Simple Manual Installation**
> 1. Locate the driver installation file in the PYBFLASH drive.
> ![image.png](1600226833846-9de2c3a9-285d-4c8e-9659-cac3501d5c9b.png)

> 2. Go to the Device Manager.
> ![](1600226894292-6e5fc6e6-6397-4a46-9cc7-f800e6619ba5.png) ![](1600227019568-2b9b73ba-f9cf-4656-b197-32d3109dd8b8.png)

> 3. Right-click on the Pyboard device with the warning sign. Follow the sequence: Update Driver Software -> Browse My Computer for Driver Software -> Browse -> PYBFLASH -> Next.
> ![image.png](1600227262428-2a9c430a-6eb4-4275-abca-9494ea2ea7dd.png)
> 4. If successful, you'll see the new serial device without a warning sign in the Device Manager.
> ![](1600227305499-7da1b21b-c183-4a66-adfd-96aef8382020.png)
> 
> **Method 2: Missing System Files**
> If you encounter error codes after completing step 3 in Method 1, you may need to install additional files.
> - Code 52: Digital Signature Issue
> - Error Codes 28, 10: Missing Files
> 
> [Download reserve-driver-install.zip](link)
> 
> Unzip the file and run the .exe installer. Allow all permissions if prompted. Once the black window disappears, the patch is successfully installed. Try using your device again.
> 
> ::info::  
> If you encounter complex issues not covered here, please contact Meowbit customer service for further assistance.
> 
---
  
#### Q2: Can I import my own characters or scenes into the Meowbit compiler?
> Convert your images into pixel data and insert them into the JS code. [Learn more here](https://kittenbot.github.io/pxt-neomatrix/index.html).

---

#### Q3: How do I update the Meowbit firmware?
> [Follow the upgrade guide here](https://meowbit-doc.kittenbot.cn/#/more/upgrade).

---

#### Q4: Meowbit shows error code 02X when downloading programs
> This usually happens if you're trying to download a program that's too large for the device's memory. Please download an appropriate program.
> ![image.png](1635335174020-a0b61082-8030-4ef8-bec3-1fcaa29c5e06.png)![image.png](1635335218547-4eb9f189-0293-4ec4-ad36-ccd08ee1df61.png)

---

#### Q5: Meowbit/Microbit Error Code Summary
> Both Meowbit and Microbit share common error codes as they are developed based on Microsoft's MakeCode. Refer to the table below for a list of error codes and their corresponding solutions. Common issues are highlighted in green.
> 
> [Learn more here](https://support.microbit.org/support/solutions/articles/19000016969-micro-bit-error-codes)

---
