// Modules to control application life and create native browser window
const {app, BrowserWindow, shell} = require('electron')
const { spawn } = require('child_process');
const util = require('util');
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
	    nodeIntegration: true,
	    contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
	/*
const exec = util.promisify(require('child_process').exec);
	exec('emacs', {shell:'/usr/bin/bash'}).then((stdout, stderr) => {
		console.log(`stdout: ${stdout}`);
		console.error(`stderr: ${stderr}`);
	}).catch(e => console.error(e)); 
	*/

	//const ff = spawn('emacs',[], {shell:'/usr/bin/bash', detached:false});
	/*
	const ff = spawn('./ff.sh');
	ff.on('spawn',(lol)=>console.log('lol'));
	ff.stdout.on('data', (data) => console.log(data));
	*/

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
