
## Quick start
1. Open the Makecode programming platform, [https://makecode.microbit.org/](https://makecode.microbit.org/), and create a new program.
2. Add extension-KOI2 extension address is：[https://github.com/KittenBot/pxt-koi2.git](https://github.com/KittenBot/pxt-koi2.git)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709717638469-7340c1f8-7382-4dfa-9a4d-fab2a34e4887.png#averageHue=%2347b13b&clientId=u4eda2c29-e14c-4&from=paste&height=510&id=u6b11daca&originHeight=637&originWidth=794&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=65275&status=done&style=none&taskId=uf167f184-b9d5-4613-a16a-a6dea4ed6c0&title=&width=635.2)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709717596863-e15ff754-f0f5-4483-ab18-c0c484aa0f2c.png#averageHue=%23d9ded2&clientId=u4eda2c29-e14c-4&from=paste&height=654&id=u14c339de&originHeight=818&originWidth=1656&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=66701&status=done&style=none&taskId=u59ae5d85-5670-49b8-94b2-ce294a89df8&title=&width=1324.8)
3. KOI2 extension has been successfully added
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709717717765-f70d7339-8b79-4ea2-b712-31deb20bd52a.png#averageHue=%23e89d83&clientId=u4eda2c29-e14c-4&from=paste&height=598&id=u0847b55f&originHeight=748&originWidth=1112&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=86744&status=done&style=none&taskId=u4ca8dde2-2611-4499-bfe0-4b01f792708&title=&width=889.6)
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
![3257d269379b87c951bc1ff1696453db.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709718760058-beb9814f-28da-41bf-87ca-39280bcf9f2e.jpeg#averageHue=%23bfc1bc&clientId=u4eda2c29-e14c-4&from=paste&height=702&id=u0565844d&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=261343&status=done&style=none&taskId=uf1935682-0a17-4541-8637-4327116e15a&title=&width=936)


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
![cd0a1fe7b634e05596617e8e94424a35.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709778511085-6af850ed-3b31-4a5a-99a3-b6c2ffc7f8ed.jpeg#averageHue=%23a3a5a1&clientId=uda2af925-7d90-4&from=paste&height=702&id=uc02dd99a&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=219114&status=done&style=none&taskId=u6bb0fe87-9ebe-401c-bcc7-1a30894f64c&title=&width=936)


## Case 2: KOI Buttons
Introduction: There are the A and B buttons on the left and right sides of the KOI module, which can be used for programming.
Program:
[https://makecode.microbit.org/S61167-65456-43430-66147](https://makecode.microbit.org/S61167-65456-43430-66147)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709721228341-32707662-dcb1-44fc-9a66-609069a55541.png#averageHue=%23e9efef&clientId=ue73b27e4-af59-4&from=paste&height=475&id=uae0c4d6f&originHeight=594&originWidth=937&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=72295&status=done&style=none&taskId=u03719906-1a96-4386-93c5-ff4e89c3b3a&title=&width=749.6)
Experimental results:
When the A button of the KOI module is pressed, the Microbit dot matrix displays the letter A.
When the B button of the KOI module is pressed, the Microbit dot matrix displays the letter B.
When the A and B buttons of the KOI module are pressed at the same time, the Microbit dot matrix displays a red heart.
![da1e332e8ce1c3f7f6bb53233acb980e.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709778767205-6153d715-b573-449b-ab0d-eedb3d5cf59d.jpeg#averageHue=%23abaea9&clientId=uda2af925-7d90-4&from=paste&height=702&id=uf247e8ae&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=212307&status=done&style=none&taskId=u86600579-5854-445a-a782-7a4a59fb3a3&title=&width=936)


## Example 3: Display Text
Introduction: The KOI module has a 1.3-inch TFT screen with 240x240 pixels. In addition to displaying some feedback information for AI functions, it can also display screen strings through programming.
Program:
[https://makecode.microbit.org/S10105-15786-34494-38608](https://makecode.microbit.org/S10105-15786-34494-38608)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709721672402-e860ceff-c08e-4908-a2b1-1ade92d3e129.png#averageHue=%23e8efef&clientId=ue73b27e4-af59-4&from=paste&height=477&id=u6ec740ad&originHeight=596&originWidth=994&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=82909&status=done&style=none&taskId=ud6bafdc3-a4bc-4011-9a53-5bfbbb5370e&title=&width=795.2)
Experimental result:
When the Microbit button A is pressed, the KOI module screen displays "hello kitten"
When the Microbit button B is pressed, the KOI module screen displays "KOI"
![4af2c20bbc28e1d91ae5ae8a6ef5e33a.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709778917537-26386e43-688b-419e-af8a-1e352db9499b.jpeg#averageHue=%23b3b5b3&clientId=uda2af925-7d90-4&from=paste&height=702&id=u5326cb55&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=187343&status=done&style=none&taskId=u0364deb0-9847-4238-b063-3b92a5e5edd&title=&width=936)


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
![d8c49f781e4d72df3ca3fef02df942fd.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709780993017-51df0372-f504-4f7f-a071-b841cf5ddc75.jpeg#averageHue=%23a4a7a5&clientId=uda2af925-7d90-4&from=paste&height=702&id=u7a21e3a3&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=168590&status=done&style=none&taskId=u3c0de5e6-a885-4841-ba51-0a7ab363fbc&title=&width=936)


## Case 6: Line Tracking
Introduction: KOI modules has built-in line tracking that can be used to implement unmanned vehicles.
Code:
[https://makecode.microbit.org/S30032-95451-24035-98005](https://makecode.microbit.org/S30032-95451-24035-98005)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723243554-ec63e7f8-aff2-4282-a45a-eb609a4c163f.png#averageHue=%23cee2f2&clientId=u0c7b9aed-e020-4&from=paste&height=440&id=u3b9ecc0b&originHeight=550&originWidth=1090&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=81320&status=done&style=none&taskId=u242c4400-fa18-43d2-bd57-1884969d2da&title=&width=872)
Experimental Phenomena:
Press the A button on the Microbit to perform black line tracking. When a black line appears on the screen, the coordinate value of the line can be obtained.
![02e3a1b3e4223a53859b6cb3a2e3172c.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709782660526-67ed7eb1-ba9f-4bae-ba3b-017a91d1f9ed.jpeg#averageHue=%23a6a8a6&clientId=uda2af925-7d90-4&from=paste&height=702&id=u319a6b62&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=165507&status=done&style=none&taskId=u609ea9db-ffa9-4cb1-85a6-4bf3473202f&title=&width=936)


## Example 7: Facial Attributes
Introduction: Able to identify faces, and can return coordinates x and y, as well as width and height values w and h. Can also discern gender, glasses, smiles, open mouths, and the total number of faces in the frame.
Program:
[https://makecode.microbit.org/S39711-67975-26643-96368](https://makecode.microbit.org/S39711-67975-26643-96368)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723386165-ceef96cd-ad1a-4db0-820a-b81dad964d3a.png#averageHue=%23bde0e1&clientId=u0c7b9aed-e020-4&from=paste&height=482&id=ufdf495d4&originHeight=603&originWidth=1056&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=92564&status=done&style=none&taskId=u8d2f5ae6-ae31-4206-8b56-617cc3a8bcd&title=&width=844.8)
Experimental Phenomena:
Can use Microbit's A and B buttons to switch the camera between front and back.
When a smiling face is recognized, the Microbit dot matrix displays a smiling face pattern.
![3780bd09555af48599281d4d1608a4b3.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709783187679-3558935a-284c-403a-9c8c-6b37f69b3cbd.jpeg#averageHue=%234e5450&clientId=uda2af925-7d90-4&from=paste&height=702&id=u0f60aaa9&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=248794&status=done&style=none&taskId=u95f306de-9f3d-404c-9853-349a0f5ac8f&title=&width=936)


## Case 8: Face Mask
Introduction: Directly detect if a mask is worn without training
Program:
[https://makecode.microbit.org/S07435-35642-85145-78418](https://makecode.microbit.org/S07435-35642-85145-78418)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723432753-5f0e3ea2-4f09-4108-9ad1-095039c0a1c7.png#averageHue=%2314a9a8&clientId=u0c7b9aed-e020-4&from=paste&height=479&id=ud2e9a3eb&originHeight=599&originWidth=840&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=70091&status=done&style=none&taskId=u795e10d0-b490-4393-8bd9-112bc86ddc3&title=&width=672)
Experimental phenomenon:
When a mask is detected, the dot matrix screen displays √, otherwise the dot matrix displays X
![791d2746fc487bc60aee6a4d101b1d3b.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709783596575-24fd38c4-8e0e-4441-8052-dd4a7ceb4cab.jpeg#averageHue=%2341443f&clientId=uda2af925-7d90-4&from=paste&height=702&id=u2f9f3b10&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=241820&status=done&style=none&taskId=u3333af5c-85f5-435c-8ac2-c2c3218ffa8&title=&width=936)


## Case 9: Feature classification
Introduction: Record different classifications through machine learning feature classification, and then identify them through the camera. The trained model can also be saved.
Program:
[https://makecode.microbit.org/S14258-90398-44796-76732](https://makecode.microbit.org/S14258-90398-44796-76732)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723476613-314d6029-8c03-4847-8dac-2de9b5e8de7a.png#averageHue=%23d0e3f1&clientId=u0c7b9aed-e020-4&from=paste&height=442&id=u9fa13066&originHeight=552&originWidth=991&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=78146&status=done&style=none&taskId=u9437e851-f47b-4d88-b89d-8f860659f65&title=&width=792.8)
Experimental phenomenon:
After entering different classifications, the KOI module can correctly classify the pictures.
![d941cfb581a822c694c37a318143d924.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709784136933-3dc41d51-c1fa-4068-8bca-98f41bae1aec.jpeg#averageHue=%23b5b8b6&clientId=uda2af925-7d90-4&from=paste&height=702&id=udf1264a7&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=195694&status=done&style=none&taskId=uebc6a316-8857-41cb-b69a-fdeeb76a30b&title=&width=936)


## Case 10: Traffic Sign Recognition
Introduction: Based on the requirements of the AI artificial intelligence competition, the KOI module can recognize 7 types of traffic sign cards customized by kittens
Program:
[https://makecode.microbit.org/S07414-85801-38322-22357](https://makecode.microbit.org/S07414-85801-38322-22357)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723639093-fe84cf25-92ef-43ec-a5ba-ffbcdcb338bb.png#averageHue=%23d3e7e8&clientId=u0c7b9aed-e020-4&from=paste&height=598&id=u617cd252&originHeight=748&originWidth=1136&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=99801&status=done&style=none&taskId=u6231d8cf-7e02-4520-ae8c-ae022afde89&title=&width=908.8)
Traffic Sign Cards:
There are 7 categories of traffic sign cards as follows
![](https://cdn.nlark.com/yuque/0/2024/png/27648333/1709367477569-f0468090-04c5-4459-8c44-86483fae88a4.png#averageHue=%23e53410&from=url&id=HrkV8&originHeight=852&originWidth=569&originalType=binary&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://cdn.nlark.com/yuque/0/2024/png/27648333/1709367513335-24645f8a-725c-48d6-9ca5-56b526c57a1f.png#averageHue=%23d3cabc&from=url&id=DyeHO&originHeight=285&originWidth=286&originalType=binary&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&title=)
Experimental Phenomena:
When different traffic cards are placed in front of the lens, the corresponding results are displayed on the Microbit dot matrix screen
For example, if the tunnel sign is successfully recognized, Microibt dot matrix displays a square box
![4541277fc137ee30bf90010fd48d9ad3.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709793687939-6ee3be05-8bd3-48c8-9e54-ce80400f9cd5.jpeg#averageHue=%23343832&clientId=u316a8cd5-b0f8-4&from=paste&height=702&id=ub26d38bc&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=242123&status=done&style=none&taskId=u1679549e-5a0a-4569-8d33-bb0428e2f6a&title=&width=936)


## Case 11: Number Recognition
Introduction: According to the requirements of the AI artificial intelligence competition, the KOI module can recognize digital cards from 0 to 9 customized by Xiaomiao
Program:
[https://makecode.microbit.org/S89329-13156-58220-68568](https://makecode.microbit.org/S89329-13156-58220-68568)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723669450-71f344b8-70b1-44ac-8937-4d8b723a2196.png#averageHue=%23b4d9ea&clientId=u0c7b9aed-e020-4&from=paste&height=478&id=ue2fe5183&originHeight=597&originWidth=1250&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=98952&status=done&style=none&taskId=uf896f142-2c30-4fa1-97c4-55585980296&title=&width=1000)
Experimental phenomenon:
Place different digital cards in front of the camera, and the Microbit dot matrix screen displays the corresponding number
![9ec6a1e63ecdec615a56e65ef2016887.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709793744940-69012817-1dbd-4189-83f2-43a952857558.jpeg#averageHue=%233e413b&clientId=u316a8cd5-b0f8-4&from=paste&height=702&id=u54f66190&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=236373&status=done&style=none&taskId=ud80b637c-1fb7-465e-b4fe-cd091807fbe&title=&width=936)


## Case 12: Letter Recognition
Introduction: According to the requirements of the AI artificial intelligence competition, the KOI module can identify the letter cards A~F customized by Xiaomiao.
Program:
[https://makecode.microbit.org/S66558-29402-84704-55124](https://makecode.microbit.org/S66558-29402-84704-55124)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723698619-79c79d91-8b3a-47bc-8786-2b934aa5643e.png#averageHue=%23b5d9ea&clientId=u0c7b9aed-e020-4&from=paste&height=478&id=ub7296906&originHeight=597&originWidth=1264&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=99152&status=done&style=none&taskId=u265eece4-8ef9-4a2d-8bdb-74fe031d139&title=&width=1011.2)
Experimental Phenomena:
When different letter cards are placed in front of the lens, the Microbit dot-matrix screen displays the corresponding letters.
![2fe30071ec20524e9bc9b4debba23eeb.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709793776525-ebec66ea-0640-4671-ac9a-d6dd16781a16.jpeg#averageHue=%233f463c&clientId=u316a8cd5-b0f8-4&from=paste&height=702&id=u5c0a564c&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=228002&status=done&style=none&taskId=ubc1817ce-f288-4287-ba7a-0cc4fecedb7&title=&width=936)


## Case13: Common Object Recognition
Introduction: The KOI module has a built-in common object recognition model that can recognize common real objects without training. It can recognize the following categories:
- Airplane, ship, bicycle, bus, car, motorcycle, train
- Bird, horse, cow, sheep, human, cat, dog
- Bottle, chair, table, plant, sofa, TV
Program:
[https://makecode.microbit.org/S93372-90317-89849-87320](https://makecode.microbit.org/S93372-90317-89849-87320)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723734486-36eb4951-1b72-446a-ba28-3cd9de2b9417.png#averageHue=%23cce5e6&clientId=u0c7b9aed-e020-4&from=paste&height=483&id=u8083f364&originHeight=604&originWidth=1192&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=97286&status=done&style=none&taskId=u19a17926-6307-47c4-b292-056f85c5978&title=&width=953.6)
Experimental phenomenon:
Distinguish whether the picture is a car or a cat, Microbit dot matrix displays different patterns
![7d33dae3e0ada30cc46fd4cc3702c03d.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709791273914-297c53b5-f43b-4103-8571-1296fc766cc5.jpeg#averageHue=%23597b81&clientId=u316a8cd5-b0f8-4&from=paste&height=702&id=u4cb696d2&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=254653&status=done&style=none&taskId=ua443367c-7b8a-4366-a9f8-c079e267b7d&title=&width=936)


## Case 14: Scan the code
Introduction: Can recognize QR codes and barcodes
Program:
[https://makecode.microbit.org/S83444-02316-45341-99521](https://makecode.microbit.org/S83444-02316-45341-99521)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723771081-c1b55f4d-847f-426e-bcad-f769cd04a522.png#averageHue=%23d8e7f1&clientId=u0c7b9aed-e020-4&from=paste&height=426&id=uf22c8752&originHeight=533&originWidth=1086&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=77059&status=done&style=none&taskId=u97058bdd-4224-4d52-882b-7a13c6252c0&title=&width=868.8)
Experimental phenomenon:
Switch the type of scanning through the A and B buttons of Microbit. When the Microbot logo is pressed, the dot matrix displays the obtained result.
The QR code content here is "Hello World"
![b673d20260568df1d29ea422d7e0820b.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709790936793-1e2c52af-1724-4aa1-9221-2b24353058de.jpeg#averageHue=%23659496&clientId=u316a8cd5-b0f8-4&from=paste&height=505&id=ua06c4640&originHeight=1280&originWidth=960&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=265964&status=done&style=none&taskId=u60cc84a7-cfaf-4844-a473-83fa4a0c80f&title=&width=378.3999938964844)


## Case 15: MQTT and Feature Classification
Introduction: This case is a project that combines MQTT functions and feature classification. The feature classification result is transmitted to the IOT server via WIFI.
Program:
[https://makecode.microbit.org/S99733-64623-49667-91856](https://makecode.microbit.org/S99733-64623-49667-91856)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709723847930-e5c1c041-4d21-4752-9a88-503d6da4d4a0.png#averageHue=%23d9e7f1&clientId=u0c7b9aed-e020-4&from=paste&height=598&id=JjH0J&originHeight=748&originWidth=1380&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=142537&status=done&style=none&taskId=uc0c0c047-427a-4a78-bd1f-d8837f8b54f&title=&width=1104)
Need to modify:
1. In the AP block, replace the WIFI account and password with your own. Only 2.4GWIFI is supported. If your home WIFI is not successful, please try to use a mobile hotspot.
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709785634693-945b51ad-7954-4d4d-9ace-6a1d0bc37800.png#averageHue=%239ecaf3&clientId=u316a8cd5-b0f8-4&from=paste&height=62&id=u365a50d8&originHeight=78&originWidth=398&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=7460&status=done&style=none&taskId=u74a3eb14-be0e-4bf3-906a-47346fede70&title=&width=318.4)
2. If you use Kitten's IOT platform [https://iot.kittenbot.cn/](https://iot.kittenbot.cn/), you need to register for Topic first. Of course, you can also use other platforms that support MQTT.
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709785532609-848c5122-9744-4daf-a8de-7b290267f38c.png#averageHue=%23d3d3d3&clientId=u316a8cd5-b0f8-4&from=paste&height=409&id=uc32beca6&originHeight=511&originWidth=980&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=51542&status=done&style=none&taskId=u3eb81ce8-608f-482c-84f5-3e6ce46dbb9&title=&width=784)
Modify the corresponding Topic name in the program
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709785697790-7aa2d2af-45f0-4dd1-98fe-d889b0e459d3.png#averageHue=%23b5c9f2&clientId=u316a8cd5-b0f8-4&from=paste&height=221&id=u5bc27367&originHeight=276&originWidth=478&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=26983&status=done&style=none&taskId=ub5399d3a-cffa-41a3-ad5e-1f2e8d4afa0&title=&width=382.4)
Experimental phenomenon:
After entering two different classifications through the A and B buttons of Microbit, when the A+B button is pressed, the classification result is recognized and the classification result is pushed to the IOT platform.
Hardware result display:
![b3a1ac8fc877dbc4583abc14abf77f49.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/1432841/1709790380336-52f509c2-7c5a-4b2e-a111-4b426873e37b.jpeg#averageHue=%23aaaeac&clientId=u316a8cd5-b0f8-4&from=paste&height=702&id=u5f0e231d&originHeight=878&originWidth=1170&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=171603&status=done&style=none&taskId=u4437a61c-6aac-49c2-baae-aaf0996b744&title=&width=936)
IOT platform result display:
![image.png](https://cdn.nlark.com/yuque/0/2024/png/1432841/1709790347333-c3bf2135-0639-415b-b53e-880a194720c2.png#averageHue=%23fdfdfd&clientId=u316a8cd5-b0f8-4&from=paste&height=258&id=u65849571&originHeight=322&originWidth=1248&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=21834&status=done&style=none&taskId=u8cdc07be-2546-4e67-847e-e4dfc29d651&title=&width=998.4)

