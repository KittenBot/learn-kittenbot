
If you are using it for the first time, it is recommended that you familiarize yourself with the 8 modules of KitB before doing the overall programming of the paper box robot. This document assumes that you are already familiar with the use of KitB modules under MakeCode.

## Check before use

1. Please make sure that your jacdac-Power module has been plugged into a 3.7V lithium battery pack or a Type-C data cable (because jacdac-Servo needs 5V power supply from jacdac-Power to work normally)

2. Please make sure that the robot has been assembled according to the instructions

3. Please make sure that the jacdac module has been connected correctly according to the instructions

![89a49a8a99f9dc20322acc70496458ac.jpg](1693216719568-850d4abc-c0c7-43bf-ae9c-cd62de0a7773.jpeg)

## Components used

- 1x KitB Cartoon Robot
- 1x Micro USB Cable


## Connection

PC-〉MicroUSB -〉KitB Ducky

![864639554fce7154652c7f9f55652f23.jpg](1693216642960-24b78266-3c99-4665-a6c0-507087f60b82.jpeg)

## Coding Platform
[https://makecode.microbit.org/beta](https://makecode.microbit.org/beta)

## Create a new project
![image.png](1692700473244-60ee22db-0dfc-4597-a91e-8cd0fcf2db5e.png)

## Establish a connection
![webUSB.png](1654764235950-bcac15b3-d541-45e1-85cd-fb513f76a2e9.png)

## Add Jacdac Extensions

Extensions——Jacdac

![jacdac扩展.png](1654764679183-85a74500-61e1-45f0-a497-a97afe749b58.png)

## Download a blank program

Once the Jacdac plug-in is loaded, you need to download a blank program first. The empty program is used to initialize the Jacdac module. After the download is complete, the Jacdac module will be initialized and the Jacdac module will be able to work normally.

![image.png](1692864692000-1876d422-885c-40f8-b4c2-59bd637cb2e9.png)

## Simulator

In simulator, you can see all the modules of KitB.

![jacdac_KitB.gif](1692863939803-417fafb2-99f0-42e4-9d21-80d882d16146.gif)

### “ADD BLOCKS”

Add all modules to the Modules column.

![image.png](1692864847707-5cd98b6e-824e-4df2-90a3-b91259fbc577.png)
![image.png](1692865317839-03b55154-0cc5-4a36-a494-6d92ca6771a2.png)


## Coding
### Time to wake up

Coding for RGB Strip and Vibration motor (Haptic Output)

![image.png](1693214551973-211483f6-4014-4029-be26-e278be58abc1.png)
![image.png](1693214611514-00b580bd-02ee-4aa4-a674-aac02faab362.png)

- Coding blocks

![image.png](1693214649611-6b1735e0-e855-4830-8776-8f58ca0934fc.png)
 
- Effects

![Duck_RGB.gif](1693219164076-97d92fc3-7b66-4cc2-bcc9-a72535dfd0b6.gif)

### Let's check the temperature and moisture

Use the temperature and humidity sensor to detect the temperature and humidity of the environment

![image.png](1693214963307-19515080-2537-480a-a585-5bc45d3f5d5e.png)

- Coding

![02.png](1693214914273-382ef34c-fd8a-45df-be76-95e0bf82cb8f.png)

- Effects

![Duck_TH.gif](1693220226423-e5d271f8-8a01-4766-ae4c-006d735e30be.gif)

### When I fall, I will get up

Use the accelerometer to detect the acceleration of the robot, and when the acceleration is greater than 2g, the robot will stand up

![image.png](1693215071719-53df3862-de47-4e6a-b639-88190839d6de.png)

![image.png](1693215090108-a9045b6f-1717-4221-8d15-099c32bf07d4.png)

- Coding

![03.png](1693215200906-c354801b-1b66-40c6-bbd1-193ec6dbac4a.png)

- Effects

![Duck_L.gif](1693221249626-620a3266-0e4c-40a5-b461-d9f206bb06a4.gif)

![Duck_R.gif](1693221255393-f7173490-5b8a-4b9e-bc61-fbce7c0e7b0e.gif)

### Please Follow Me

Use the ultrasonic sensor to detect the distance between the robot and the object. When the distance is less than 15CM, the robot will move backwards. When the distance is greater than 15CM and less than 25CM, the robot will move forward. When the distance is greater than 25CM, the robot will stop moving.

![image.png](1693215871068-edd56d03-6fa2-4923-a6a2-782dd01e1b94.png)

![04.png](1693216163643-1e25204b-9d7f-4e4b-96ac-990f95826121.png)

Power on, Jacdac-Power needs to be plugged into the lithium battery

![Duck_Power.gif](1693221271293-7b242d6b-e86e-4cff-97b7-5410e0eba674.gif)

Close to the duck (less than 15cm)

![Duck_B.gif](1693221305519-8b0fc737-34b0-43d4-92b9-2167855ff2e8.gif)

Hold your hand at (15CM-25CM)

![Duck_flow.gif](1693221336251-04066210-fcd5-4884-ab0a-122755e75b66.gif)
