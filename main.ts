input.onButtonPressed(Button.A, function () {
    i += 10
    pins.analogWritePin(AnalogPin.P0, i)
})
input.onButtonPressed(Button.AB, function () {
    i = 0
    pins.analogWritePin(AnalogPin.P0, i)
})
input.onButtonPressed(Button.B, function () {
    i += -10
    pins.analogWritePin(AnalogPin.P0, i)
})
let i = 0
basic.showIcon(IconNames.Snake)
