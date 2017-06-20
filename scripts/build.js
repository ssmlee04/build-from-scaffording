const label = 'build';
console.time(label);

const clean = require('vitreum/steps/clean');
const jsx = require('vitreum/steps/jsx');
const lib = require('vitreum/steps/libs');
const less = require('vitreum/steps/less');
const asset = require('vitreum/steps/assets');

const Proj = require('./project.json');

Promise.resolve()
	.then(()=>clean())
	.then(()=>lib(Proj.libs))
	.then(()=>jsx('main', './client/main/main.jsx', Proj.libs))
	.then((deps)=>less('main', [], deps))
	.then(()=>asset(Proj.assets, ['./client']))
	.then(()=>console.timeEnd(label))
	.catch((err)=>console.error(err));