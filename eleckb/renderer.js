
const kb = navigator.keyboard;
kb.lock().then((_) => console.log(_))

kb.getLayoutMap().then(klm => {
	console.log(...klm.entries())
});

document.addEventListener('keydown', (e) => {
	console.log(e.code)
	console.log(e.key)
});
