![2023-06-20_16-19-01.png](./Module_image/1687249272106-28e1c7a7-0617-4fb5-a688-cfcb71377c75.png)


## 初始化配置
1. Go to the makecode homepage and click on New Project [https://makecode.microbit.org/](https://makecode.microbit.org/)

   ![image.png](./Module_image/1687249500094-be8ec57a-4c3b-4f9a-8bc5-7f4a4094da59.png)

2. Extensions -> Search for 'sugar' -> add

   ![image.png](./Module_image/1687249956556-d5bc1b1d-7f15-4f9b-8735-d1f1cb2fdfa6.png)



## 案例程序

### IoT MQTT

Sugar camera can be used as a wifi module.


#### connect

![image.png](./Module_image/1687255289857-9c08f27e-35fb-437f-b88e-56b6896ffe2e.png)
:::


#### ![image.png](./Module_image/1687253285022-20d21cae-5ab8-468c-beec-3a8656218b8a.png)

#### Coding

https://makecode.microbit.org/_cU6MpmPyLKPY



![microbit-screenshot1](https://learn.kittenbot.cn/2023md_pic/202309142351466.png)


#### Code Explanation
After downloading the programme, wait for a moment, the microbit will light up to indicate that the initialisation of the module is complete.

After that, it will continuously get the latest news of the topic from the mqtt server, you can press buttonA or ButtonB to send a test message to the topic, after a while the microbit will display "√" and then output the latest news received by the topic.

You can use KittenBot's IOT platform or other MQTT IOT platforms.

https://iot.kittenbot.cn/

![image-20230914233618205](https://learn.kittenbot.cn/2023md_pic/202309142336293.png)



Or send a message on a topic via the web

![image.png](./Module_image/1687254997179-9a5586ce-6624-4414-af04-bf42630a676d.png)



### speech recognition


#### intro
With the microphone in the camera and the wifi function, we can upload the audio data to the cloud（BaiduAI in China）, process it for speech recognition, and then have the microbit display different expressions based on the results.


#### Connect
![image.png](./Module_image/1687253285022-20d21cae-5ab8-468c-beec-3a8656218b8a.png)

#### Coding

https://makecode.microbit.org/_c8HRtPUMpMJX

![microbit-screenshot2](https://learn.kittenbot.cn/2023md_pic/202309142355281.png)



### QR code


#### Connect
![image.png](./Module_image/1687253285022-20d21cae-5ab8-468c-beec-3a8656218b8a.png)

#### Coding

https://makecode.microbit.org/_HARTjeXa084j

![microbit-screenshot3](https://learn.kittenbot.cn/2023md_pic/202309150000094.png)




#### 程序讲解
1. After the program is uploaded and successfully initialised, the microbit will light up with love.
Pressing button A will identify the QR code. If the code is recognised, it will return None.
Because there is no screen assistance, it is easy to cause the camera screen is not complete QR code.
Here we recommend that you build a mechanical structure, so that almost never scan code failure.
2. The height of the camera from the QR code is about 10cm, and the size of the QR code is 6.5x6.5cm [https://cli.im/text](https://cli.im/text) It is recommended that you use a straw QR code website to generate the content in English or string!


### take a picture
Before unplugging the TF card, you need to switch off the power first.

![image.png](./Module_image/1687259333496-153092b2-2a11-4dc7-9eb3-9c55aebcf622.png)

![](./Module_image/1685960901985-3d4dc747-48bc-4574-ac0b-932f32c01bcf.png)
:::


#### Connect
![image.png](./Module_image/1687253285022-20d21cae-5ab8-468c-beec-3a8656218b8a.png)

#### Coding

https://makecode.microbit.org/_P0YTveKx1gYg

![microbit-screenshot4](https://learn.kittenbot.cn/2023md_pic/202309150003210.png)


#### Code  Explanation
After successful download, press the a button to take a photo and save it to the TF card.
You can take it photo out by card reader.
