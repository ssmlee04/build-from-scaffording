const label = 'dev';
console.time(label);

const jsx = require('vitreum/steps/jsx.watch');
const less = require('vitreum/steps/less.watch');
const assets = require('vitreum/steps/assets.watch');
const server = require('vitreum/steps/server.watch');
const livereload = require('vitreum/steps/livereload');
const jsxWatch = require('vitreum/steps/jsx.watch');

const Proj = require('./project.json');

Promise.resolve()
	.then(()=>jsx('main', './client/main/main.jsx', Proj.libs))
	.then((deps)=>less('main', [], deps))
	.then(()=>assets(Proj.assets, ['./client']))
	.then(()=>livereload())
	.then(()=>jsxWatch('main', './client/main/main.jsx', Proj.libs))
	.then(()=>server('./server.js', ['server']))
	.then(()=>console.timeEnd(label))
