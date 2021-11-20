/* 
TO check more then one condition we can chain "if else" construct
Syntax-
if(condition_1){
  //if condtion_1 is true, then do this
}else if(condition_2){
  //if condition_1 is false, but condition_2 is true then do this
}else{
  //if both conditions false then do this
}
*/

let num = 21

if((num % 3) === 0){
  console.log("Divided by 3");
}
else if((num % 2) == 1){
  console.log("Remainder is 1");
}
else{
  console.log("Remainder is 2");
}