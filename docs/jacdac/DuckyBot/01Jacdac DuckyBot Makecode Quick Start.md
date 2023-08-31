## 
## Introduction

Jacdac KitB is the second set of robot kits for Microsoft Jacdac protocol developed by KittenBot. KitB is an electronic module extension kit for KitA. KitB includes 8 electronic modules: Accelerometer, Env Sensor, RGB Strip, Servo, Power, Haptic Output, Relay, Ultrasonic, and a new Hub. KitB combines the outer packaging with the electronic module to form a mini robot.

You can also use KB RP2040 Brain or Grape:bit as the main control, and program and control it under the DeviceScript platform.

For more Jacdac information, please visit: [https://microsoft.github.io/jacdac-docs/start/](https://microsoft.github.io/jacdac-docs/start/)

## Feature

The paper box packaging not only serves as a storage function, but also combines the modules to form a robot

Users do not need to care about the port connection or port characteristics, just plug it in, reducing the user's use cost

New programming experience, plug and play programming blocks, much better than looking for the required blocks in a pile of blocks in the past

The Jacdac interface is similar to the USB Type-C connection experience, and can be connected in both positive and negative directions.

The newly embodied connection form is no longer the point radiation connection from the main control to the module. The connection link can be branched arbitrarily, and the wiring is more free, and the work is not restricted. It is more prominent in some complex wiring or large works.

## Components used

- 1x MicroUSB Cable
- 1x MicrobitV2
- 1x Jacdaptor
- 1x Cable
- 1x Relay

## Connection

PC-〉MicroUSB -〉MicrobitV2-〉Jacdaptor-〉Cable-〉Relay

![image.png](1689068513750-939c4230-ecbe-4ef8-9254-a720e142ff18.png)


## Coding Platform

[https://makecode.microbit.org/beta](https://makecode.microbit.org/beta)

## Create a new project

![image.png](1654761303209-40927f66-07f8-4ed1-b26c-5a80c85e773e.png)


## Establish a connection

![webUSB.png](1654764235950-bcac15b3-d541-45e1-85cd-fb513f76a2e9.png)

## Add Jacdac Extensions

Extensions——Jacdac

![jacdac扩展.png](1654764679183-85a74500-61e1-45f0-a497-a97afe749b58.png)


## Add Jacdac Relay

![image.png](1689071075699-a32a0daf-459f-4765-b2fd-d39aa27d2e3f.png)

## Coding

![image.png](1689071591272-0ae1548b-74ab-484e-9dc5-0c0bc26470b1.png)

## Download

On pressing button A, the relay opens and you can see the LED light up on the relay

![image.png](1689072377889-00f05e74-c05f-4cc7-8600-2d10e0bfb136.png)

On pressing button B, the relay closes and you can see the LED light on the relay go off

![image.png](1689072528396-989574a9-30a3-4e9c-96e8-633db5729a60.png)

