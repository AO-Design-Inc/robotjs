//const ff = window.child.spawn('./ff.sh');
/*ff.on('spawn',(lol)=>console.log('lol'));*/
//console.log(ff);
//ff.stdout.on('data', (data) => console.log(data));

//debugger
const {spawn} = require('child_process');
const ff = spawn('./ff.sh');
ff.stdout.on('data', (data) => console.log(data));
//window.child.shell.openPath('./ff.sh');
console.log('hello')
