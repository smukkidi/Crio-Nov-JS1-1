function largestOfFour(arr) {

  let max = [];

  //Loop the array rows
  for (let i = 0; i < arr.length; i++) {
    let largeNumber = arr[i][0];
    //console.log(arr[i]);
    // Loop the array row of columns
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        console.log(largeNumber = arr[i][j]);
      }
    }
    console.log(max[i] = largeNumber);
  }

}



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);