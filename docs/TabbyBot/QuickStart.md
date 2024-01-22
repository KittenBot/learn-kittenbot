## TabbyBot Quick Start

## Introduction:

![image.png](https://learn.kittenbot.cn/2023md_pic/202401221850632.png)

TabbyBot is a STEM robot car designed for MicroBit programming. It utilizes a 18650 lithium battery, which provides sufficient power to drive power-hungry modules such as the AI camera module or voice recognition module, eliminating the need for multiple dry batteries. It comes with a built-in charging and discharging circuit, making it convenient to use.

TabbyBot features programmable resources such as LED, RGB, line-following sensor, infrared receiver sensor, ultrasonic sensor, servo motor driver, and motor driver. It also provides 4 programming interfaces for expanding additional sensors.

The board is equipped with LEGO-compatible mounting holes for attaching LEGO structural components.

## Car Overview:

- Front headlights x2
- Infrared receiver sensor
- Ultrasonic interface
- MicroBit slot
- Servo motor interfaces S1, S2
- 18650 battery compartment
- N20 geared motors x2
- Short circuit recovery button
- Car power switch
- Car power indicator light
- Car charging indicator light (blue during charging, green when fully charged)
- Expansion programming interfaces (P0, P12, I2C, and Serial Port)
- Line-following sensors x2
- WS2812 RGB LEDs x2
- USB charging interface
- The car also has 13 round holes for attaching LEGO pins.

## Specifications:

- Operating voltage: 3.3V
- Charging voltage: 5V
- Car dimensions: 78x120x34.5mm
- Wheel diameter: 34mm
- Motor speed: 250rpm (no-load)
- Compatible mainboards: MicroBit V1.5/MicroBit V2.0

## Onboard Programmable Resources:

- Front headlight LED
- WS2812 RGB lights
- Infrared receiver
- Ultrasonic distance measurement
- Two servo motor drivers
- Two motor drivers
- Two grayscale line-following sensors
- PH2.0 3PIN interfaces x2 (P0, P12)
- PH2.0 4PIN serial port (G 5V Rx=13, Tx=14)
- PH2.0 4PIN I2C interface (G 3.3V SCL SDA)

## Quick Start:

1. Install the 18650 battery or remove the battery holder.

2. Connect the MicroBit controller board.

3. Use a MicroUSB cable to connect the MicroBit board to a computer.

   ![img](https://learn.kittenbot.cn/2023md_pic/202401221850726.png)

4. Turn on the power switch of the car.

   ![image.png](https://learn.kittenbot.cn/2023md_pic/202401221850943.png)

5. Open the MakeCode programming platform at https://makecode.microbit.org/.

6. Load the dedicated plugin from the Extensions section: https://github.com/KittenBot/pxt-tabbyrobot.git.

   ![image.png](https://learn.kittenbot.cn/2023md_pic/202401221850393.png)

7. Start your programming journey!

   ![img](https://learn.kittenbot.cn/2023md_pic/202401221851538.png)

## Sample Program Testing:

Headlights:
https://makecode.microbit.org/_HWzAVxauKfpE

RGB:
https://makecode.microbit.org/_d4kCAH28zcob

Motors and Servos:
https://makecode.microbit.org/_doM4aUCYX12h

Line-following Car:
https://makecode.microbit.org/S67065-32045-71472-77348

Ultrasonic Obstacle Avoidance Car:
https://makecode.microbit.org/S18373-61152-77390-63144