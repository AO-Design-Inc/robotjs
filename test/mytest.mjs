import robot from '../index.js'

const WAIT_TIME=100;
robot.keyToggle('a','down',"", 0);
await new Promise(resolve => setTimeout(resolve, 50));
robot.keyToggle('a','up',"", 0);
//robot.keyToggle('CapsLock','down',"", 0);
robot.keyToggle('Shift','down',"", 1);
await new Promise(resolve => setTimeout(resolve, 50));
robot.keyToggle('Shift','up',"", 1);
await new Promise(resolve => setTimeout(resolve, 500));
robot.keyToggle('CapsLock', 'down',"",0)
await new Promise(resolve => setTimeout(resolve, 500));
robot.keyToggle('CapsLock', 'up',"",0)
await new Promise(resolve => setTimeout(resolve, 500));
robot.keyToggle('CapsLock', 'down',"",0)
await new Promise(resolve => setTimeout(resolve, 500));
robot.keyToggle('CapsLock', 'up',"",0)
await new Promise(resolve => setTimeout(resolve, 100));
robot.keyToggle('NumLock', 'down', "",0)
await new Promise(resolve => setTimeout(resolve, 100));
robot.keyToggle('NumLock', 'down', "",0)
await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
robot.keyToggle('NumLock', 'up', "",0)
await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
robot.keyToggle('5', 'down', "",3)
await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
robot.keyToggle('5', 'up', "",3)
await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
robot.keyToggle('a','down',"", 0);
await new Promise(resolve => setTimeout(resolve, 1000));
robot.keyToggle('Backspace', 'down', "",0);
await new Promise(resolve => setTimeout(resolve, 1000));


