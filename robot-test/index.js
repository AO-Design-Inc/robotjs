import * as robot from "robotjs"

//get time to keytap
robot.default.setKeyboardDelay(0)

let a = performance.now()
robot.default.keyTap('b')
let b = performance.now()
console.log(b-a)
