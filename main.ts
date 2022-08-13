input.onSound(DetectedSound.Loud, function () {
    dothings()
})


function dothings () {
    input.onSound(DetectedSound.Loud, function () {

    })
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    outcome = randint(1, 12)
    basic.pause(200)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    if (outcome == 1) {
        myImage = images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (outcome == 2) {
        myImage = images.createImage(`
            . # # # #
            . . . . #
            . # # # #
            . # . . .
            . # # # #
            `)
    }
    if (outcome == 3) {
        myImage = images.createImage(`
            . # # # #
            . . . . #
            . # # # #
            . . . . #
            . # # # #
            `)
    }
    if (outcome == 4) {
        myImage = images.createImage(`
            . # . # .
            . # . # .
            . # # # #
            . . . # .
            . . . # .
            `)
    }
    if (outcome == 5) {
        myImage = images.createImage(`
            . # # # #
            . # . . .
            . # # # #
            . . . . #
            . # # # #
            `)
    }
    if (outcome == 6) {
        myImage = images.createImage(`
            . # # # #
            . # . . .
            . # # # #
            . # . . #
            . # # # #
            `)
    }
    if (outcome == 7) {
        myImage = images.createImage(`
            . # # # #
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
    }
    if (outcome == 8) {
        myImage = images.createImage(`
            . # # # #
            . # . . #
            . # # # #
            . # . . #
            . # # # #
            `)
    }
    if (outcome == 9) {
        myImage = images.createImage(`
            . # # # #
            . # . . #
            . # # # #
            . . . . #
            . # # # #
            `)
    }
    if (outcome == 10) {
        myImage = images.createImage(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (outcome == 11) {
        myImage = images.createImage(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    }
    if (outcome == 12) {
        myImage = images.createImage(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    myImage.showImage(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    myImage.showImage(0)
    music.playTone(554, music.beat(BeatFraction.Quarter))
    input.onSound(DetectedSound.Loud, function () {
        dothings()
    })
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    dothings()
})
let myImage: Image = null
let outcome = 0
input.setSoundThreshold(SoundThreshold.Loud, 152)
