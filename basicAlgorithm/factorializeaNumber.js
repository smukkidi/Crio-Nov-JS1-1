// function square(num){
//   return num * num;
// }

// let resultS = square(5);

// console.log(resultS);

// var someVar = "Hat";
// function myFun(){
//   var someVar = "Shoes";
//   console.log(someVar);
// }
 
//  myFun();
//  console.log(someVar)

//  console.log(addSquares(4, 4));

//  function addSquares(a, b){
//    function square(x){
//      return x * x;
//    }
//    return  square(a) + square(b);
//  }

//  a = addSquares(2, 3);
//  console.log("A is : "+a);


// function factoriyalNum(num){
//   let product = 1;
//   for(let i = 1; i <= num; i++){
//      console.log(product,  i);
//     console.log(product *= i);
//   }

// }

// factoriyalNum(5);

function factoriyalize(num){
  if(num === 0){
    return 1;
  }
  console.log("Num is: "+num+" Facto : "+ factoriyalize(num -1))
  return num * factoriyalize(num -1)
}
factoriyalize(5)
