/*
Find Greade
Calculate the grade if the markes are given
0-40 - Fail
41-60 - C
61-80 - B
81-100 - A

let marks = ?;

Calculate grade

*/

let marks = 61;

if(marks > 0 && marks <= 40){
  console.log("Fail");
}
else if(marks > 40 && marks <= 60){
console.log("C");
}
else if(marks > 60 && marks <= 80){
  console.log("B");
}
else if(marks > 80){
console.log("A");
}