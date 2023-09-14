## Introduction
In addition to the quick video transfer function via the Kittenblock stage. Video transmission and remote control is also possible via the webpage

## Demo results

When the web button is pressed, the Camera receives the command and its serial port sends a serial command to the other motherboard.

control flow：

![image.png](./Module_image/1689669982981-23c83cb0-6fc6-4bb9-8aed-a4aa44b458dc.png)

Mobile Web Interface

![image.png](./Module_image/1686647735084-a681c0e0-f124-4d23-841e-356ae1a16c88.png)



## Configuration settings
In addition to following the basic tutorial, fill in the wifi account password into the network, but also need to modify the configuration file.

1、USB cable to connect Sugar Camera 

2、When the USB stick of SUGAR-CAM appears on the computer, open "config.json".

![image.png](./Module_image/1686648101173-5401fc7b-6ac3-41b6-aace-d3f2ef09e667.png)

3、Change commandProcessing to remoteControl.

![image.png](./Module_image/1686648163212-87517e7c-2e67-4086-9d8c-d4d1fae8fa8c.png)

4. Save and exit the file

If you don't want to use the webcam control later and want to use the normal mode, please change back to commandProcessing.


## Web Browsing
Open it in your computer browser or mobile phone browser. The IP of the Camera needs to be added ": 80"

For example, my address

 ![image.png](./Module_image/1686648465786-ada40b2f-e8d6-4df2-813e-783c10ad2502.png)

The IPs of the Cameras vary and you need to check them yourself with the help of a tool.

My mobile phone's browser opens the corresponding IP address (IP addresses only support one device for connection, if more than one device is opened, the screen of the other device will be unresponsive)

![image.png](./Module_image/1686648895192-16e17ccf-3d61-4a63-a9c5-fc6a9f7d6077.png)



## Keypad Serial Control

There are currently 10 buttons

![image.png](./Module_image/1689670312125-7d1aec72-0c87-4509-8848-fb7941dda8d9.png)

1、When using on the web page, you can click the mouse button to trigger, of course, you can also use the keyboard arrow keys up and down, left and right, and the number 1~6 to trigger.

2, in the mobile phone web use, you can directly through the touch of the button to trigger the

| Button Name | Serial Command |
| --- | --- |
| 上（UP） | CMD_UP |
| 下（Down） | CMD_DOWN |
| 左（Left） | CMD_LEFT |
| 右（Right） | CMD_RIGHT |
| 功能键1（Function Key 1） | CMD_FUNC1 |
| 功能键2（Function Key 2） | CMD_FUNC2 |
| 功能键3（Function Key 3） | CMD_FUNC3 |
| 功能键4（Function Key 4） | CMD_FUNC4 |
| 功能键5（Function Key 5） | CMD_FUNC5 |
| 功能键6（Function Key 6） | CMD_FUNC6 |

According to the above table, for different motherboards to write the serial port receiving procedures

When the serial port receives the message, the specific instruction judgement

The serial port baud rate is 115200



## Take Microbit for example
Note the use of "text containment" for judgements

![image.png](./Module_image/1686657203896-4b88a9a6-7f47-4c55-934a-7b8dfb7fbc53.png)

Example：[https://makecode.microbit.org/_4cWAUUEot4jH](https://makecode.microbit.org/_4cWAUUEot4jH)
Example of car：[https://makecode.microbit.org/_DgvfhzXqjCUt](https://makecode.microbit.org/_DgvfhzXqjCUt)



## Take mPython Board for example

The programming environment is Kittenblock, of course, with other programming platforms, it is possible to write the corresponding serial port receiving program.
When receiving the command from the corresponding serial port, the corresponding motor movement will be controlled.
![image.png](./Module_image/1686652031203-cb3c5fd6-93d7-4f6e-b396-770e0250ace7.png)
