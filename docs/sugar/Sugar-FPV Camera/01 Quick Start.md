
### Quick Start
The first time you use the Sugar camera, you need to set the WIFI account and password for the module first, to facilitate the subsequent wireless connection.

1. Use a USB cable to connect the camera module to the computer

![image.png](./QuickStart_image/1686117691733-6c422ed6-c007-465e-8b2d-9eb23113fd30.png)

2. The USB stick of SUGAR-CAM appears on the computer. Go to the disc drive and double-click to open the disc drive in the`config.json`

![image.png](./QuickStart_image/1686117737020-9d36ed81-d042-4083-91a0-e5c4e1fbca44.png)![image.png](./QuickStart_image/1686117794978-e1ef22a1-4219-4771-9af8-1792c6c44320.png)

3. Change to your own WIFI account and password (remember to save changes)
:::warning
The module only supports 2.4G band routers, if you can't connect, try mobile phone transmitting WIFI hotspot
:::

- ap：WIFI account
- pw：WIFI password
- secret：Be sure to fill in the key that is required for the software to connect to the wireless camera.
- model：The mode will be expanded in detail in the next section, so don't change the default he
- ![image.png](./QuickStart_image/1686118605615-b9afd374-b6a0-4705-9ce4-b99100eaf31c.png)

4. After completing the configuration modification of config.json (remember to save it), unplug the USB cable again or press the RESET button in the middle of the module to reset.
:::info
If the WIFI connection is successful, it lights green; if it fails, it lights red. If it fails double check the following points:

- Whether the WIFI signal is 2.4G band, does not support 5G
- Whether the account and password are filled in incorrectly
:::
![image.png](./QuickStart_image/1686118829992-17f3ff51-1e3a-4d73-bf7e-174d455be19e.png)




### Connecting the Sugar Camera

1. Open [Kittenblock 1.89.17](http://www.kittenbot.cn/kittenblock) and above, and load the `Sugar Camera` in the extension, which functions as a WIFI camera

![方糖摄像头连接1.png](https://learn.kittenbot.cn/2023md_pic/202309141942916.png)

2. Find the Sugar Camera IP address

Need to install software on your computer for Camera IP lookup:.

- Windows computer install this [ip scanner](https://www.advanced-ip-scanner.com/cn/)https://www.advanced-ip-scanner.com/cn/)
- Install LanScan on a mac computer (search for LanScan in the APP Store)

In the software, it shows the corresponding IP of the manufacturer as `Espressif Inc`, which is the IP of your camera (192.168.0.135 as shown in the picture), please remember your own IP!

![](https://learn.kittenbot.cn/2023md_pic/202309141942230.png)

3. Fill in the IP address of your Camera and click on the blocks to bring up the camera screen on the stage. At this point, you have put the Camera to successful use.

   ![image.png](./QuickStart_image/1690943254893-c1f619aa-c87b-41fa-a6a4-0eaad4cf591d.png)
