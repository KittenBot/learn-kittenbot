---
title: Hardware IO Definition
sidebar_position: 13
---


## Introduction
The Future Board lite main control uses ESP32-S3-WROOM

| **Hardware** | **IO** | **Remarks** |
| --- | --- | --- |
| WS2112 RGB Light (3) | GPIO 3 | From left to right, the serial numbers are 0, 1, 2 |
| 1.77-inch Screen ST7735S<br />160x128 pixels | TFT_RST = EN (pull-up)<br />TFT_DC = GPIO 12<br />TFT_SPI_MOSI = GPIO 48<br />TFT_SPI_CLK = GPIO 45<br />TFT_TFT_CS = GPIO 46<br />TFT_Backlight = GPIO 10 | IPS screen |
| ButtonA | GPIO 15 | Button A on the left |
| ButtonM | GPIO 16 | Button M in the middle |
| ButtonB | GPIO 42 | Button B on the right |
| Buzzer | GPIO 8 | Can be PWM controlled |
| Motor Driver DRV8833 | M1 A+ = GPIO 13<br />M1 A- = GPIO 14<br />M1 B+ = GPIO 21<br />M1 B- = GPIO 47 | M1 is on the left<br />M2 is on the right<br />Can be PWM controlled |
| 3-axis Accelerometer | SDA = GPIO 2<br />SCL = GPIO 1 | DA213B, I2C |
| Photosensitive Sensor | GPIO 11 | Analog read |
| MEMS Microphone | MIC_DATA = GPIO 41<br />MIC_SCK = GPIO 39 | I2S<br />[https://www.mouser.cn/datasheet/2/218/know_s_a0006286312_1-2271749.pdf](https://www.mouser.cn/datasheet/2/218/know_s_a0006286312_1-2271749.pdf) |
| PORT1 | GPIO 4 | Digital/analog |
| PORT2 | GPIO 5 | Digital/analog |
| PORT3 | GPIO 7 | Digital/analog |
| PORT4 | GPIO 6 | Digital/analog |
| UART1 | ESP_TXD = GPIO 43<br />ESP_RXD = GPIO 44 | |
| UART2 | ESP_TXD_U1 = GPIO 17<br />ESP_RXD_U1 = GPIO 18 | |
| I2C | SDA = GPIO 2<br />SCL = GPIO 1 | |
| Reset Button Rest | GPIO 0 | Pull-up, press to low level |



