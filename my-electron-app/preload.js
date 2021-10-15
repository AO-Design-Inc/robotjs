
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])

  }
})

var child = require('child_process');
/*
const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('child', {
    execFile: child.execFile,
    exec: child.exec,
    spawn: child.spawn,
    execSync: child.execSync,
	shell
});

*/
