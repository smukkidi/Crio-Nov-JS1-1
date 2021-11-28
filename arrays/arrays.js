/**Create an array */

let fruits = ['Apple', 'Banana']

console.log(fruits.length);

/** Access an Array iteam using the index position */
let first = fruits[0];
console.log(first);
//Apple


let last = fruits[fruits.length - 1]
console.log(last);
//Banana

/**Loop over an Array */
fruits.forEach(function(item, index, array){
  console.log(item, index);
})
//Apple 0
//Banana 1

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
//Apple
//Banana

fruits.forEach(function(item, index, array){
  console.log(item, index)
})

/**Add an item to the end of an Array */
let newLength = fruits.push('Orange');
console.log(fruits);
//[ 'Apple', 'Banana', 'Orange' ]

/**Remove an item from the end of an Array */
let lastValue = fruits.pop() // remove Orange (from the end)
console.log(lastValue);
console.log(fruits);
//Orange (removed value from the Array)
//[ 'Apple', 'Banana' ]

/**Remove an iteam from the beginning of an array */
let firstValue = fruits.shift(); // remove Apple from the front
console.log(firstValue);
console.log(fruits);
//Apple
//[ 'Banana' ]

/**Add an item to the beginning of an Array */
let newLengthValue = fruits.unshift('Strawberry'); // add to the front
console.log(newLengthValue);
console.log(fruits);
//2
//[ 'Strawberry', 'Banana' ]

/** Find the index of an item in Array */
let lastValueAdd = fruits.push(); // Add to the last
console.log(lastValueAdd);
console.log(fruits);
//2
//[ 'Strawberry', 'Banana' ]

/**Find the index of an item in the Array */
fruits.push('Mango')
console.log(fruits);
// [ 'Strawberry', 'Banana', 'Mango' ]


let pos = fruits.indexOf("Banana");
console.log(pos);
// 1


/**Remove an item by index position */
let removedItem = fruits.splice(pos, 1); // This is how to remove an iteam
console.log(removedItem);
console.log(fruits);
// [ 'Banana' ]
// [ 'Strawberry', 'Mango' ]
































