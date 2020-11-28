radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("speed", input.acceleration(Dimension.Y))
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("A", 1)
        led.plot(0, 0)
    } else {
        radio.sendValue("A", 0)
        led.unplot(0, 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("B", 1)
        led.plot(0, 4)
    } else {
        radio.sendValue("B", 0)
        led.unplot(0, 4)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendValue("C", 1)
        led.plot(0, 2)
    } else {
        radio.sendValue("C", 0)
        led.unplot(0, 2)
    }
})
