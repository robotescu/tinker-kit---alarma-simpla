OLED.init(128, 64)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P3)) {
        OLED.clear()
        for (let index = 0; index < 3; index++) {
            OLED.writeStringNewLine("Alarma!!!")
            tinkercademy.LED(DigitalPin.P1, OnOff.On)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(200)
            tinkercademy.LED(DigitalPin.P1, OnOff.Off)
            basic.pause(200)
        }
    } else {
        OLED.clear()
        OLED.writeStringNewLine("Totul este bine.")
    }
})
