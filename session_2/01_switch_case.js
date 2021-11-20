/*
1. If you have many option to choose from, use a switch statement.
2. A switch statement test a value and can have many case statements which define various possibles value.
3. Statements are executed from the first matched case value until a break is encountered.

*/

let a = 20;

switch(a)
{
  case 10: // (a === 10)
  console.log("value is 10"); 
  break;
  case 20: // (b === 20)
  console.log("Value is 20"); 
  break;
  default: 
  console.log("It's not 10 or 20");
  break;
}
