import * as robot from "robotjs"


//get time to keytap
let a = performance.now()
robot.default.keyTap('b')
let b = performance.now()