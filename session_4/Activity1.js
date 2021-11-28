function b(){
  console.log('hello');
}

let arr = [1, 2, 3, 4, 5, 6, true, undefined,  null, b];

console.log(arr);
console.log(arr[1]);
console.log(arr[0]);
// WIll through an error
//console.log(arr.0);

const obj = {
  kay: 'value'
}

//console.log(obj["key"]);

// Insert value
arr[0] = 'Two';
arr[5] = {name: "Sreeni"}

console.log(arr);

let array = [];

array[0] = 1
array[1] = "Hello"
array[2] = null
array[3] = {name: "Srinivas"}

console.log(array)