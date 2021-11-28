// let func = function (a)
// {
//   console.log("Hello", a);
// }

// func(100);

// let func2 = (a) => console.log("Hello this is function 2", a)

// func2(200);

// let func3 = (a) => {
//   let b = 20;

// console.log("Hello this is : ", a + b)
//   console.log("Hello this is three ", a)}
// func3(130);

// let func4 = a => console.log("Hello this is ", a);

// let func5 = (a,b) => console.log("Hello this is ", a+b);

// func4(400);

// func5(250, 300);

// let arr = [1,2,3,4,5,6]

// function compare(a,b)
// {
//   return a-b;
// }

// console.log(compare(10, 20))
// let re = arr.sort(compare)
// console.log(re)

// let maximum = (a,b) =>{
//   a+b;
// }
// console.log(maximum());
// const max=(a,b)=>{
//   return (a<b)?b:a;
// }

// console.log(max(6,2))

// function fun()
// {
//   console.log(arguments)
// }
// let fun =(...args) => console.log(args)
// //fun(1,2, "C")
// fun(1,2,3,4)

// let todoDB =[];

// let addTodoArrow = (iteam, priority) => {
//   if( priority === 'high'){
//     todoDB.unshift(iteam);
// }else{
//   todoDB.push(iteam);
// }

// }

// addTodoArrow(10, "high")

// console.log(todoDB);


let addMultipuleTodos = (...args) => {

  for(let i = 0; i <args.length; i++){
    todoDB.push(args[i]);
  }

}

let addMultipultodos1 = (...args) => todoDB.push(...args)

addMultipultodos1

