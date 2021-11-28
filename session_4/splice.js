/**
 * splice() 
 * - allows us to remove any number of consecutive elements from anywhere in an array.
 * It has three overloads or three different function definitions with same name.
 * 
 * splice(start) 
 * - Takes in the start index of the array. Eg. can be used to duplicate an array.
 * 
 * splice(start, deleteCount) 
 * - Deletes the deleteCount number of elements from the start index.
 * 
 * splice(start, deleteCount, item1, item2, itemN) 
 * - Deletes the deleteCount number of elements from the start index. ALSO adds the  
 * emaining items from the start index 
 * 
 * splice() 
 * - not only modifies the array it's being called on, but it also returns a new array 
 * containing the value of the removed elements
 * 
 */

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//let sp = arr.splice();
/**
 * Output:
 * []
 * 
 */

//let sp = arr.splice(2);
/**
 * Out put: 
 * [3, 4, 5, 6, 7, 8, 9, 0]
 * 
 */

//let sp = arr.splice(2, 4);
/**
 * Output:
 * [3, 4, 5, 6]
 * 
 */

// let returnArr = arr.splice(2, 4, 22, 33, 44, 55, 43, 56, 78, 98);

// console.log(returnArr);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];

// let concatArr = arr1.concat(arr2);
// console.log(concatArr, arr1, arr2);

// let arr = [4, 5, 3, 2, 1, 0];
// let result = arr.sort();
// console.log(result, arr);

let arr = 