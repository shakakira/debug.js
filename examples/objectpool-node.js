#!/usr/bin/env node

// get the class
var ObjectPool	= require('../src/objectpool.js');

console.log('slota')

function aClass(value){
	this.x	= value !== undefined ? value : 3;
}

ObjectPool.mixin(aClass);


var klass	= aClass.create();

console.log(klass)
console.log(klass instanceof aClass)
klass.x		= 2;
console.log(klass)
klass.destroy();

var klass	= aClass.create(4);
console.log(klass)
console.log(klass instanceof aClass)