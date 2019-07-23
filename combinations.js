'use strict';

let array = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9];
let target = 9;
let array_length = array.length;
let temp = [];
let results = [];

for(let i=0;i<array_length;i++) {
	let result = [];
    let elem = target - array[i];
    if(array.indexOf(elem) !== -1 && temp.indexOf(array[i]) === -1 && temp.indexOf(array[array.indexOf(elem)]) === -1) {
        temp.push(array[i]);
        result.push(array[i],array[array.indexOf(elem)]);
        results.push(result);
    } 
}
console.log(results);
