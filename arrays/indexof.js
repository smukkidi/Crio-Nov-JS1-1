/**Array index Of */

// const beast = ['and', 'bison', 'camel', 'duck', 'bison']

// console.log(beast.indexOf('bison'));
// //Expected output:1

// //Start from index 2
// console.log(beast.indexOf('bison', 2));
// //Expected output: 4

// console.log(beast.indexOf('giraffe'));
// //Expected output: -1

/** Using index Of */
// var array = [2, 9, 9]
// console.log(array.indexOf(2));
// console.log(array.indexOf(7));
// console.log(array.indexOf(9, 2));
// console.log(array.indexOf(2, -1));
// console.log(array.indexOf(2, -3));

/**Finding all the occurences of an element */
// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while(idx != -1){
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);

/**Finding if an element exists in the array or not and updating the array */
function updateVegetablesCollection(veggies, veggie){
  if(veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log('New veggies collectionis: ' + veggies);
  } else if (veggies.indexOf(veggie) > -1){
    console.log(veggie + ' already exists in the veggies collection.')
  }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper', 'spinach'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : ptato, tpmato, chilles, green-pepper, spinach
//New veggies collectionis: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
//spinach already exists in the veggies collection.






