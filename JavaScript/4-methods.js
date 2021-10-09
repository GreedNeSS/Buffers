'use strict';

const buffer = Buffer.from('Marcus Aurelius');

console.log(buffer);

if (buffer.includes('Marcus')) {
	console.log(`"${buffer}" includes "Marcus"`);
}

const k = buffer.indexOf('Aurelius');
console.log((`Index of "Aurelius" is ${k}`));

console.log(`Slice 3-5 "${buffer.slice(3, 6)}"`);