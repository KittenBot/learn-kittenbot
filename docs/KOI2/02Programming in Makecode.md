

## Quick start
1. Open the Makecode programming platform, [https://makecode.microbit.org/](https://makecode.microbit.org/), and create a new program.

2. Add extension-KOI2 extension address is：[https://github.com/KittenBot/pxt-koi2.git](https://github.com/KittenBot/pxt-koi2.git)

  ![image-20240308143457555](https://learn.kittenbot.cn/2024md_pic/202403081434661.png)

  

  ![image-20240308144158633](https://learn.kittenbot.cn/2024md_pic/202403081441718.png)

  

3. KOI2 extension has been successfully added
  ![image-20240308144327372](https://learn.kittenbot.cn/2024md_pic/202403081444409.png)

4. Congratulations! You can start your KOI2 AI learning journey now!



## Hardware Wiring:
Hardware List:
- Microbit v1/Microbit v2

- Robotbit Edu expansion board

- 4PIN connecting cable

- KOI2 module
  Wiring diagram:

- Black wire—>GND

- Red wire—>5V

- Yellow wire—>P2（TX）

- Blue wire—>P12（RX）
  Make sure that the Robotbit power switch is on and the battery is sufficient.

  ![image-20240308144525058](https://learn.kittenbot.cn/2024md_pic/202403081445405.png)





## Notes:
1、Please connect the KOI module in advance, and make sure the power switch on the expansion board is turned on. At this time, the KOI module screen can display normal images, then download the program.

2、After downloading the program, the KOI module will switch to different AI modes according to the program, and the corresponding mode prompts will be displayed on the screen. If the mode switching is not effective. Please press the reset button of Microbit.

3、When Microbit and KOI module are disconnected from the computer data cable. After turning on the power of the expansion board, wait for the KOI module screen to display a normal image, then press the reset button of Microbit to restart the program.

## Case 1: Take a Photo
Introduction: The KOI module has a photo-taking function that can save photos to the memory or SD card (if you have a lot of photos, it is recommended that you store them on the SD card for easy access on the computer).
Program:
[https://makecode.microbit.org/S59000-70883-52174-05930](https://makecode.microbit.org/S59000-70883-52174-05930)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709719717949-00258e1c-38d1-4a56-9cea-c7e90ad1412f.png#averageHue=%23e9efef&clientId=u4eda2c29-e14c-4&from=paste&height=440&id=u0d993935&originHeight=550&originWidth=986&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=72189&status=done&style=none&taskId=u12dbc5a3-015c-40aa-b345-23e9e0b664f&title=&width=788.8)
Experimental Results:
When you press the Microbit button A, you take a photo.
When you press the Microbit button B, the KOI2 screen displays the photo.

![image-20240308144603610](https://learn.kittenbot.cn/2024md_pic/202403081446942.png)



## Case 2: KOI Buttons
Introduction: There are the A and B buttons on the left and right sides of the KOI module, which can be used for programming.
Program:
[https://makecode.microbit.org/S61167-65456-43430-66147](https://makecode.microbit.org/S61167-65456-43430-66147)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709721228341-32707662-dcb1-44fc-9a66-609069a55541.png#averageHue=%23e9efef&clientId=ue73b27e4-af59-4&from=paste&height=475&id=uae0c4d6f&originHeight=594&originWidth=937&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=72295&status=done&style=none&taskId=u03719906-1a96-4386-93c5-ff4e89c3b3a&title=&width=749.6)
Experimental results:
When the A button of the KOI module is pressed, the Microbit dot matrix displays the letter A.
When the B button of the KOI module is pressed, the Microbit dot matrix displays the letter B.
When the A and B buttons of the KOI module are pressed at the same time, the Microbit dot matrix displays a red heart.

![image-20240308144619721](https://learn.kittenbot.cn/2024md_pic/202403081446035.png)





## Example 3: Display Text
Introduction: The KOI module has a 1.3-inch TFT screen with 240x240 pixels. In addition to displaying some feedback information for AI functions, it can also display screen strings through programming.
Program:
[https://makecode.microbit.org/S10105-15786-34494-38608](https://makecode.microbit.org/S10105-15786-34494-38608)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709721672402-e860ceff-c08e-4908-a2b1-1ade92d3e129.png#averageHue=%23e8efef&clientId=ue73b27e4-af59-4&from=paste&height=477&id=u6ec740ad&originHeight=596&originWidth=994&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=82909&status=done&style=none&taskId=ud6bafdc3-a4bc-4011-9a53-5bfbbb5370e&title=&width=795.2)
Experimental result:
When the Microbit button A is pressed, the KOI module screen displays "hello kitten"
When the Microbit button B is pressed, the KOI module screen displays "KOI"

![image-20240308144631143](https://learn.kittenbot.cn/2024md_pic/202403081446464.png)





## Case 4: Recording
Introduction: KOI module has a microphone, which can achieve the recording function, and it also has a speaker, which can play the file.
Please note! : Recording requires an SD card, please prepare it yourself. Please insert or remove the SD card while the KOI module is powered off.
Procedure:
[https://makecode.microbit.org/S45174-18526-08129-10010](https://makecode.microbit.org/S45174-18526-08129-10010)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709721966741-12704e02-b58a-45dc-a658-c831265b8dae.png#averageHue=%23e9efef&clientId=ue73b27e4-af59-4&from=paste&height=437&id=ua8df3ce9&originHeight=546&originWidth=936&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=69934&status=done&style=none&taskId=u33dcd3fa-fb6f-4532-91e7-d75bad27cd6&title=&width=748.8)
Experimental phenomenon:
When pressing Microbit button B, record for 3 seconds
When pressing Micorbit button A, play this file





## Case 5: Color Tracking
Introduction: The KOI module has built-in tracking for several colors, red, green, blue, and yellow, and it can also customize color tracking
Program:
[https://makecode.microbit.org/S92879-39018-14809-61672](https://makecode.microbit.org/S92879-39018-14809-61672)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723198664-e7bca46c-1448-4c74-9005-0ddcb2f37753.png#averageHue=%23d7e6f1&clientId=u0c7b9aed-e020-4&from=paste&height=491&id=u6d1901b6&originHeight=614&originWidth=1265&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=92499&status=done&style=none&taskId=u8b9991a6-9396-44c7-a362-4d11a7b3fd6&title=&width=1012)
Experimental Phenomenon:
When you press the Microbit button A, the red color block is tracked. When the red color block appears in the interface, it will be surrounded by a white frame, and the recognized coordinates and the length and width of the color block will be displayed in the upper left corner of the interface.

![image-20240308144650769](https://learn.kittenbot.cn/2024md_pic/202403081446062.png)





## Case 6: Line Tracking
Introduction: KOI modules has built-in line tracking that can be used to implement unmanned vehicles.
Code:
[https://makecode.microbit.org/S30032-95451-24035-98005](https://makecode.microbit.org/S30032-95451-24035-98005)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723243554-ec63e7f8-aff2-4282-a45a-eb609a4c163f.png#averageHue=%23cee2f2&clientId=u0c7b9aed-e020-4&from=paste&height=440&id=u3b9ecc0b&originHeight=550&originWidth=1090&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=81320&status=done&style=none&taskId=u242c4400-fa18-43d2-bd57-1884969d2da&title=&width=872)
Experimental Phenomena:
Press the A button on the Microbit to perform black line tracking. When a black line appears on the screen, the coordinate value of the line can be obtained.

![image-20240308144727247](https://learn.kittenbot.cn/2024md_pic/202403081447524.png)





## Example 7: Facial Attributes
Introduction: Able to identify faces, and can return coordinates x and y, as well as width and height values w and h. Can also discern gender, glasses, smiles, open mouths, and the total number of faces in the frame.
Program:
[https://makecode.microbit.org/S39711-67975-26643-96368](https://makecode.microbit.org/S39711-67975-26643-96368)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723386165-ceef96cd-ad1a-4db0-820a-b81dad964d3a.png#averageHue=%23bde0e1&clientId=u0c7b9aed-e020-4&from=paste&height=482&id=ufdf495d4&originHeight=603&originWidth=1056&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=92564&status=done&style=none&taskId=u8d2f5ae6-ae31-4206-8b56-617cc3a8bcd&title=&width=844.8)
Experimental Phenomena:
Can use Microbit's A and B buttons to switch the camera between front and back.
When a smiling face is recognized, the Microbit dot matrix displays a smiling face pattern.

![image-20240308144743932](https://learn.kittenbot.cn/2024md_pic/202403081447282.png)





## Case 8: Face Mask
Introduction: Directly detect if a mask is worn without training
Program:
[https://makecode.microbit.org/S07435-35642-85145-78418](https://makecode.microbit.org/S07435-35642-85145-78418)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723432753-5f0e3ea2-4f09-4108-9ad1-095039c0a1c7.png#averageHue=%2314a9a8&clientId=u0c7b9aed-e020-4&from=paste&height=479&id=ud2e9a3eb&originHeight=599&originWidth=840&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=70091&status=done&style=none&taskId=u795e10d0-b490-4393-8bd9-112bc86ddc3&title=&width=672)
Experimental phenomenon:
When a mask is detected, the dot matrix screen displays √, otherwise the dot matrix displays X

![image-20240308144756187](https://learn.kittenbot.cn/2024md_pic/202403081447520.png)





## Case 9: Feature classification
Introduction: Record different classifications through machine learning feature classification, and then identify them through the camera. The trained model can also be saved.
Program:
[https://makecode.microbit.org/S14258-90398-44796-76732](https://makecode.microbit.org/S14258-90398-44796-76732)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723476613-314d6029-8c03-4847-8dac-2de9b5e8de7a.png#averageHue=%23d0e3f1&clientId=u0c7b9aed-e020-4&from=paste&height=442&id=u9fa13066&originHeight=552&originWidth=991&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=78146&status=done&style=none&taskId=u9437e851-f47b-4d88-b89d-8f860659f65&title=&width=792.8)
Experimental phenomenon:
After entering different classifications, the KOI module can correctly classify the pictures.

![image-20240308144808519](https://learn.kittenbot.cn/2024md_pic/202403081448929.png)





## Case 10: Traffic Sign Recognition
Introduction: Based on the requirements of the AI artificial intelligence competition, the KOI module can recognize 7 types of traffic sign cards customized by kittens
Program:
[https://makecode.microbit.org/S07414-85801-38322-22357](https://makecode.microbit.org/S07414-85801-38322-22357)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723639093-fe84cf25-92ef-43ec-a5ba-ffbcdcb338bb.png#averageHue=%23d3e7e8&clientId=u0c7b9aed-e020-4&from=paste&height=598&id=u617cd252&originHeight=748&originWidth=1136&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=99801&status=done&style=none&taskId=u6231d8cf-7e02-4520-ae8c-ae022afde89&title=&width=908.8)

Traffic Sign Cards:
There are 7 categories of traffic sign cards as follows

![image-20240308144826711](https://learn.kittenbot.cn/2024md_pic/202403081448770.png)

![image-20240308144836227](https://learn.kittenbot.cn/2024md_pic/202403081448272.png)



Experimental Phenomena:
When different traffic cards are placed in front of the lens, the corresponding results are displayed on the Microbit dot matrix screen
For example, if the tunnel sign is successfully recognized, Microibt dot matrix displays a square box

![image-20240308145054089](https://learn.kittenbot.cn/2024md_pic/202403081450414.png)





## Case 11: Number Recognition
Introduction: According to the requirements of the AI artificial intelligence competition, the KOI module can recognize digital cards from 0 to 9 customized by Xiaomiao
Program:
[https://makecode.microbit.org/S89329-13156-58220-68568](https://makecode.microbit.org/S89329-13156-58220-68568)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723669450-71f344b8-70b1-44ac-8937-4d8b723a2196.png#averageHue=%23b4d9ea&clientId=u0c7b9aed-e020-4&from=paste&height=478&id=ue2fe5183&originHeight=597&originWidth=1250&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=98952&status=done&style=none&taskId=uf896f142-2c30-4fa1-97c4-55585980296&title=&width=1000)
Experimental phenomenon:
Place different digital cards in front of the camera, and the Microbit dot matrix screen displays the corresponding number

![image-20240308145108323](https://learn.kittenbot.cn/2024md_pic/202403081451698.png)





## Case 12: Letter Recognition
Introduction: According to the requirements of the AI artificial intelligence competition, the KOI module can identify the letter cards A~F customized by Xiaomiao.
Program:
[https://makecode.microbit.org/S66558-29402-84704-55124](https://makecode.microbit.org/S66558-29402-84704-55124)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723698619-79c79d91-8b3a-47bc-8786-2b934aa5643e.png#averageHue=%23b5d9ea&clientId=u0c7b9aed-e020-4&from=paste&height=478&id=ub7296906&originHeight=597&originWidth=1264&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=99152&status=done&style=none&taskId=u265eece4-8ef9-4a2d-8bdb-74fe031d139&title=&width=1011.2)
Experimental Phenomena:
When different letter cards are placed in front of the lens, the Microbit dot-matrix screen displays the corresponding letters.

![image-20240308145123557](https://learn.kittenbot.cn/2024md_pic/202403081451886.png)





## Case13: Common Object Recognition
Introduction: The KOI module has a built-in common object recognition model that can recognize common real objects without training. It can recognize the following categories:
- Airplane, ship, bicycle, bus, car, motorcycle, train

- Bird, horse, cow, sheep, human, cat, dog

- Bottle, chair, table, plant, sofa, TV
Program:
[https://makecode.microbit.org/S93372-90317-89849-87320](https://makecode.microbit.org/S93372-90317-89849-87320)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723734486-36eb4951-1b72-446a-ba28-3cd9de2b9417.png#averageHue=%23cce5e6&clientId=u0c7b9aed-e020-4&from=paste&height=483&id=u8083f364&originHeight=604&originWidth=1192&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=97286&status=done&style=none&taskId=u19a17926-6307-47c4-b292-056f85c5978&title=&width=953.6)

- Experimental phenomenon:
Distinguish whether the picture is a car or a cat, Microbit dot matrix displays different patterns

![image-20240308145145060](https://learn.kittenbot.cn/2024md_pic/202403081451459.png)





## Case 14: Scan the code
Introduction: Can recognize QR codes and barcodes
Program:
[https://makecode.microbit.org/S83444-02316-45341-99521](https://makecode.microbit.org/S83444-02316-45341-99521)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723771081-c1b55f4d-847f-426e-bcad-f769cd04a522.png#averageHue=%23d8e7f1&clientId=u0c7b9aed-e020-4&from=paste&height=426&id=uf22c8752&originHeight=533&originWidth=1086&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=77059&status=done&style=none&taskId=u97058bdd-4224-4d52-882b-7a13c6252c0&title=&width=868.8)

Experimental phenomenon:
Switch the type of scanning through the A and B buttons of Microbit. When the Microbot logo is pressed, the dot matrix displays the obtained result.
The QR code content here is "Hello World"
![image-20240308145226036](https://learn.kittenbot.cn/2024md_pic/202403081452446.png)





## Case 15: MQTT and Feature Classification
Introduction: This case is a project that combines MQTT functions and feature classification. The feature classification result is transmitted to the IOT server via WIFI.
Program:
[https://makecode.microbit.org/S99733-64623-49667-91856](https://makecode.microbit.org/S99733-64623-49667-91856)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723847930-e5c1c041-4d21-4752-9a88-503d6da4d4a0.png#averageHue=%23d9e7f1&clientId=u0c7b9aed-e020-4&from=paste&height=598&id=JjH0J&originHeight=748&originWidth=1380&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=142537&status=done&style=none&taskId=uc0c0c047-427a-4a78-bd1f-d8837f8b54f&title=&width=1104)
Need to modify:

1. In the AP block, replace the WIFI account and password with your own. Only 2.4GWIFI is supported. If your home WIFI is not successful, please try to use a mobile hotspot.

  ![image-20240308145239848](https://learn.kittenbot.cn/2024md_pic/202403081452889.png)

2. If you use Kitten's IOT platform [https://iot.kittenbot.cn/](https://iot.kittenbot.cn/), you need to register for Topic first. Of course, you can also use other platforms that support MQTT.

  ![image-20240308145331503](https://learn.kittenbot.cn/2024md_pic/202403081453570.png)

  

  Modify the corresponding Topic name in the program
  ![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709785697790-7aa2d2af-45f0-4dd1-98fe-d889b0e459d3.png#averageHue=%23b5c9f2&clientId=u316a8cd5-b0f8-4&from=paste&height=221&id=u5bc27367&originHeight=276&originWidth=478&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=26983&status=done&style=none&taskId=ub5399d3a-cffa-41a3-ad5e-1f2e8d4afa0&title=&width=382.4)
  Experimental phenomenon:
  After entering two different classifications through the A and B buttons of Microbit, when the A+B button is pressed, the classification result is recognized and the classification result is pushed to the IOT platform.
  Hardware result display:

  ![image-20240308145404099](https://learn.kittenbot.cn/2024md_pic/202403081454410.png)

  

  IOT platform result display:
  ![image-20240308145418363](https://learn.kittenbot.cn/2024md_pic/202403081454415.png)



