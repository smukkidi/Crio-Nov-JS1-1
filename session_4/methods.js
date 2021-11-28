let arr = [1, 2, 3, 4, 5, 6];

let len = arr.push(7);// Element value will be added in the last of an array
arr.unshift(99);//  element value will be aded @ strating index of the array
console.log("Length = ", arr.length);

console.log("Array values : "+arr);

console.log("this ; ", arr, len);


//arr.pop(); //Element will remove from the array @las index and return the element that got removed
//arr.shift(); // Element will remove @ the starting index of the array

console.log("After pop this ; ", arr, len);
