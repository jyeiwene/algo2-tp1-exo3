let posY = 0
for (let posx = 0; posx <= 4; posx++) {
    led.plot(posx, 0)
    led.setBrightness(255)
}
basic.forever(function () {
    basic.pause(500)
    posY += 1
    basic.pause(250)
    for (let posx = 0; posx <= 4; posx++) {
        led.plot(posx, posY)
    }
    if (posY == 1) {
        let posx = 0
        led.setBrightness(128)
        led.plot(posx, 0)
        led.setBrightness(255)
        led.plot(posY, 1)
    }
    if (posY == 3) {
        for (let posx = 0; posx <= 4; posx++) {
            led.unplot(posx, 0)
        }
    } else if (posY == 4) {
        for (let posx = 0; posx <= 4; posx++) {
            led.unplot(posx, 1)
        }
    } else if (posY == 5) {
        for (let posx = 0; posx <= 4; posx++) {
            led.unplot(posx, 2)
        }
    } else if (posY == 6) {
        for (let posx = 0; posx <= 4; posx++) {
            led.unplot(posx, 3)
        }
    } else if (posY == 7) {
        for (let posx = 0; posx <= 4; posx++) {
            led.unplot(posx, 4)
            posY = 0
            for (let posx = 0; posx <= 4; posx++) {
                led.plot(posx, 0)
            }
        }
    }
})
