/**Remove items from an index position */

let vegetables = ['Cabage', 'Trunip', 'Radish', 'Carrot']
console.log(vegetables);
// [ 'Cabage', 'Trunip', 'Radish', 'Carrot' ]

let pos = 1;
let n = 2;

let removedItems = vegetables.splice(pos, n);
// This is how to remove items, n defines the number of items to be removed
// starting at the index position specified by pos and progessing toward the end of array.

// [ 'Cabage', 'Trunip', 'Radish', 'Carrot' ] // this an Array

console.log(removedItems);
// [ 'Trunip', 'Radish' ] // these values are removed pos = 1 (index) to n = 2 (two values)

console.log(vegetables);
// [ 'Cabage', 'Carrot' ]


/** Copy an Array */
let fruits = ['Apple', 'Banana']
let shallowCopy = fruits.slice() // this is how make a copy
console.log(shallowCopy);
