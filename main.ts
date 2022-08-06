input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    outcome = randint(1, 12)
    if (outcome == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (outcome == 2) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . # # # #
            . # . . .
            . # # # #
            `)
    }
    if (outcome == 3) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . # # # #
            . . . . #
            . # # # #
            `)
    }
    if (outcome == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # #
            . . . # .
            . . . # .
            `)
    }
    if (outcome == 5) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # #
            . . . . #
            . # # # #
            `)
    }
    if (outcome == 6) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # #
            . # . . #
            . # # # #
            `)
    }
    if (outcome == 7) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
    }
    if (outcome == 8) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # # # # #
            `)
    }
    if (outcome == 9) {
        basic.showLeds(`
            . # # # #
            . # . . #
            . # # # #
            . . . . #
            . # # # #
            `)
    }
    if (outcome == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (outcome == 11) {
        basic.showLeds(`
            . # . . #
            . # . . #
            . # . . #
            . # . . #
            . # . . #
            `)
    }
    if (outcome == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    music.playTone(622, music.beat(BeatFraction.Eighth))
})
let outcome = 0
input.setSoundThreshold(SoundThreshold.Loud, 47)
