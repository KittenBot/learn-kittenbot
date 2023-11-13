# Sugar and Powerbrick Modules

## Import Sugar Library

Import the Sugar library to make use of its functions.

    from sugar import *

## 14: Sugar and Powerbrick modules

## PIR Sensor

[PIR Sensor Information](../../sugar/sugar_pir.md)

    # available pins
    # 'P0','P1','P2','P3','P8','P9','P12','P13','P14','P15','P16'

    value=PIR(pin).value()

Returns a boolean value from the PIR sensor.

- pin: The pin connected to the sensor.

## IR Line Tracker

[IR Line Tracker Information](../../sugar/sugar_line.md)

    # available pins
    # 'P0','P1','P2','P3','P8','P9','P12','P13','P14','P15','P16'

    value=Tracker(pin).value()

Returns a boolean value from the Line Tracker.

- pin: The pin connected to the sensor.

## (Hall Effect)Magnet Sensor

[Magnet Sensor Information](../../sugar/sugar_magnet.md)

    # available pins
    # 'P0','P1','P2','P3','P8','P9','P12','P13','P14','P15','P16'

    value=Hall(pin).value()

Returns a boolean value from the Magnet sensor.

- pin: The pin connected to the sensor.

## Button Sensor

[Button Sensor Information](../../sugar/sugar_button.md)

    # available pins
    # 'P0','P1','P2','P3','P8','P9','P12','P13','P14','P15','P16'

    value=Button(pin).value()

Returns a boolean value from the Button sensor.

- pin: The pin connected to the sensor.

## LED Module

[LED Module Information](../../sugar/sugar_led.md)

    # available pins
    # 'P0','P1','P2','P3','P8','P13','P14','P15','P16'
    # available states
    # 'ON','OFF'

    LED(pin).state(state) #ON/OFF

Sets the state of the LED module to be on or off.

    LED(pin).brightness(brightness) #Brightness

Sets the LED brightness.
 
- pin: The pin connected to the sensor.
- state: on/off.
- brightness: 0~100.

## Flame Sensor

[Flame Sensor Information](../../sugar/sugar_fire.md)

    # available pins
    # 'P0','P1','P2','P3','P12','P14','P15','P16'

    value=Flame(pin).value()

Returns an analog value from the Flame sensor.

- pin: The pin connected to the sensor.

## Potentiometer Sensor

[Potentiometer Sensor Information](../../sugar/sugar_potentialmeter.md)

    # available pins
    # 'P0','P1','P2','P3','P12','P14','P15','P16'

    value=Angle(pin).value()

Returns an analog value from the Potentiometer sensor.

- pin: The pin connected to the sensor.

## Light Sensor

[Light Sensor Information](../../sugar/sugar_light.md)

    # available pins
    # 'P0','P1','P2','P3','P12','P14','P15','P16'

    value=Light(pin).value()

Returns an analog value from the Light sensor.

- pin: The pin connected to the sensor.

## Soil Moisture Sensor

[Soil Moisture Sensor Information](../../sugar/sugar_soil.md)

    # available pins
    # 'P0','P1','P2','P3','P12','P14','P15','P16'

    value=Soil(pin).value()

Returns an analog value from the Soil Moisture sensor.

- pin: The pin connected to the sensor.

## Water Sensor

[Water Sensor Information](../../sugar/sugar_water.md)

    # available pins
    # 'P0','P1','P2','P3','P12','P14','P15','P16'

    value=WaterLevel(pin).value()

Returns an analog value from the Water sensor.

- pin: The pin connected to the sensor.

## Environment Sensor(Sugar)

[Environment Sensor Information](../../sugar/sugar_env.md)

    x=ENV().update()

    temperature=x[0]
    humidity=x[1]

Returns a list containing the temperature and humidity readings from the Environment sensor.

## TOF Laser Distance Module

[TOF Sensor Information](../../sugar/sugar_tof.md)

    value=TOFDistance().value()

Returns the distance in mm from the laser distance module.

## Joystick Module

[Joystick Sensor Information](../../sugar/sugar_joystick.md)
    
    # available positions
    # 'up', 'down', 'left', 'right', 'pressed'
    
    position=Joystick().state() #Joystick Position
    x_value=Joystick().value('x') #Joystick X value
    y_value=Joystick().value('y') #Joystick Y value

Returns the value from the Joystick module.

## RTC Clock Module


    Clock().setTime((year,month,day,weekday,hour,min,sec))

Sets the time on the Clock module.

    # available states
    # 'pause','open'

    Clock().modeSet(state=mode)

Starts or stops the clock.

    Clock().refreshTime(8)

Syncs the clock with UTC time.(Needs network connection)

    # available fields
    # 'all','year','month','day','week','hour','minute','second'

    value=Clock().getTime(field)

Returns a value from the clock module.

## Ultrasound Sensor

    
    # available pins
    # 'P0','P1','P2','P3','P8','P9','P12','P13','P14','P15','P16'

    value=MeowSonar(pin).ping()

Returns the distance measured by the ultrasound sensor.

- pin: The pin connected to the sensor.
